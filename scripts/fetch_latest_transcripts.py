#!/usr/bin/env python3
"""Fetch the most recent YouTube transcript for each tracked person.

Strategy per person:
  1. Scan their own YouTube channel (if configured) — last N uploads.
  2. Scan each watch_channel for the last N uploads, alias-match to person.
  3. Run targeted YouTube searches (flat-playlist, no per-video fetch).
  Candidates are tried newest-first; first one with English captions wins.
  Videos we already have on disk are skipped.

All transcript downloads use player_client=web_embedded to bypass the
datacenter-IP bot check. Subtitle-endpoint 429s are retried with backoff.

Usage:
    python scripts/fetch_latest_transcripts.py data/channels.yaml
    python scripts/fetch_latest_transcripts.py data/channels.yaml --channel-depth 40
"""

import argparse
import json
import re
import subprocess
import sys
import time
from pathlib import Path

import yaml

# ---------------------------------------------------------------------------
# yt-dlp helpers
# ---------------------------------------------------------------------------

def run_ytdlp(args: list[str], timeout: int = 180) -> str:
    result = subprocess.run(
        ["yt-dlp", *args], capture_output=True, text=True, timeout=timeout
    )
    if result.returncode != 0 and result.stderr.strip():
        last = result.stderr.strip().splitlines()[-1]
        skip = ("n challenge", "impersonation", "Only images",
                "Requested format", "No video formats")
        if not any(s in last for s in skip):
            print(f"  yt-dlp: {last}", file=sys.stderr)
    return result.stdout


def flat_list(url_or_search: str, n: int) -> list[dict]:
    """Return flat-playlist entries — no per-video page fetches."""
    out = run_ytdlp([
        "--flat-playlist",
        "--playlist-items", f"1:{n}",
        "--print", "%(.{id,title,upload_date,channel})j",
        url_or_search,
    ])
    items = []
    for line in out.splitlines():
        try:
            items.append(json.loads(line))
        except json.JSONDecodeError:
            continue
    return items


def vtt_to_text(vtt: str) -> str:
    lines, seen, text = vtt.splitlines(), set(), []
    for line in lines:
        line = re.sub(r"<[^>]+>", "", line).strip()
        if (not line or line == "WEBVTT" or "-->" in line
                or line.startswith(("Kind:", "Language:", "NOTE"))
                or line.isdigit()):
            continue
        if line not in seen:
            seen.add(line)
            text.append(line)
    return "\n".join(text)


def fetch_transcript(video_id: str, workdir: Path,
                     retries: int = 2) -> tuple[str, str] | None:
    """Return (upload_date YYYYMMDD, transcript) or None.

    Uses web_embedded client to avoid bot-check on datacenter IPs.
    Retries subtitle-endpoint 429s with exponential backoff.
    """
    for attempt in range(retries + 1):
        if attempt:
            time.sleep(30 * (2 ** (attempt - 1)))
        out = run_ytdlp([
            "--skip-download",
            "--ignore-no-formats-error",
            "--extractor-args", "youtube:player_client=web_embedded",
            "--no-simulate", "--print", "upload_date",
            "--write-auto-subs", "--write-subs",
            "--sub-langs", "en,en-orig,en-US,en-GB",
            "--sub-format", "vtt",
            "-o", str(workdir / "%(id)s"),
            f"https://www.youtube.com/watch?v={video_id}",
        ])
        vtts = sorted(workdir.glob(f"{video_id}*.vtt"))
        if vtts:
            text = vtt_to_text(vtts[0].read_text(encoding="utf-8"))
            for f in vtts:
                f.unlink()
            date = out.strip().splitlines()[0] if out.strip() else "00000000"
            return date, text
        # check if it was a 429 (worth retrying)
        if "429" not in out and attempt == 0:
            return None  # not a transient error, don't retry
    return None


def already_have(out_dir: Path, slug: str, video_id: str) -> bool:
    return bool(list(out_dir.glob(f"{slug}/*{video_id}*")))


def save_transcript(out_dir: Path, slug: str, video_id: str,
                    title: str, channel: str,
                    upload_date: str, transcript: str) -> Path:
    d = upload_date or "00000000"
    date_fmt = f"{d[:4]}-{d[4:6]}-{d[6:]}"
    dest = out_dir / slug
    dest.mkdir(exist_ok=True)
    path = dest / f"{date_fmt}-{video_id}.md"
    path.write_text(
        f"# {title}\n\n"
        f"- Channel: {channel}\n"
        f"- Date: {date_fmt}\n"
        f"- URL: https://www.youtube.com/watch?v={video_id}\n\n"
        f"## Transcript\n\n{transcript}\n",
        encoding="utf-8",
    )
    return path


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("config", type=Path)
    parser.add_argument("--out", type=Path, default=Path("transcripts"))
    parser.add_argument("--channel-depth", type=int, default=60,
                        help="Videos to scan per watch channel (default 60)")
    parser.add_argument("--own-depth", type=int, default=15,
                        help="Own-channel videos to consider (default 15)")
    parser.add_argument("--search-n", type=int, default=8,
                        help="Search results per query (default 8)")
    args = parser.parse_args()

    config = yaml.safe_load(args.config.read_text())
    people = config.get("people", {})
    watch_channels = config.get("watch_channels", [])

    args.out.mkdir(exist_ok=True)
    workdir = args.out / ".tmp"
    workdir.mkdir(exist_ok=True)

    # candidates[slug] = list of {id, title, upload_date, channel}
    candidates: dict[str, list[dict]] = {slug: [] for slug in people}

    # -----------------------------------------------------------------------
    # Pass 1: own channels
    # -----------------------------------------------------------------------
    print("=== Scanning own channels ===")
    for slug, person in people.items():
        if not person.get("youtube"):
            continue
        print(f"  {person['name']}...")
        vids = flat_list(f"{person['youtube']}/videos", args.own_depth)
        for v in vids:
            v.setdefault("channel", person["name"])
        candidates[slug].extend(vids)

    # -----------------------------------------------------------------------
    # Pass 2: watch channels — scan once, fan out to matched people
    # -----------------------------------------------------------------------
    print(f"\n=== Scanning {len(watch_channels)} watch channels "
          f"(last {args.channel_depth} videos each) ===")
    for wc in watch_channels:
        print(f"  {wc['name']}...")
        vids = flat_list(f"{wc['url']}/videos", args.channel_depth)
        for v in vids:
            v.setdefault("channel", wc["name"])
            haystack = f"{v.get('title','')}"
            for slug, person in people.items():
                if any(a.lower() in haystack.lower()
                       for a in person.get("aliases", [person["name"]])):
                    candidates[slug].append(v)

    # -----------------------------------------------------------------------
    # Pass 3: targeted YouTube searches (flat, no per-video fetch)
    # -----------------------------------------------------------------------
    print("\n=== YouTube search per person ===")
    for slug, person in people.items():
        name = person["name"]
        for query in [
            f"{name} AI interview 2026",
            f"{name} artificial intelligence 2025",
            f'"{name}" podcast interview',
        ]:
            vids = flat_list(f"ytsearch{args.search_n}:{query}",
                             args.search_n)
            for v in vids:
                v.setdefault("channel", "")
            candidates[slug].extend(vids)
            time.sleep(0.5)

    # -----------------------------------------------------------------------
    # Deduplicate and sort candidates
    # -----------------------------------------------------------------------
    def dedup_sort(vids: list[dict]) -> list[dict]:
        seen, out = set(), []
        for v in vids:
            if v.get("id") and v["id"] not in seen:
                seen.add(v["id"])
                out.append(v)
        # Sort: known dates descending; unknowns at end
        return sorted(out,
                      key=lambda v: v.get("upload_date") or "0",
                      reverse=True)

    for slug in candidates:
        candidates[slug] = dedup_sort(candidates[slug])

    # -----------------------------------------------------------------------
    # Download transcripts — one per person (most recent with captions)
    # -----------------------------------------------------------------------
    print("\n=== Downloading transcripts ===")
    total_saved = 0
    for slug, person in people.items():
        name = person["name"]
        pool = candidates[slug]
        print(f"\n{name} ({len(pool)} candidates)")

        saved = False
        for video in pool[:20]:  # try at most 20 per person
            vid_id = video["id"]
            title = video.get("title", "Untitled")
            channel = video.get("channel", "")
            date = video.get("upload_date") or "?"

            if already_have(args.out, slug, vid_id):
                print(f"  already have: {title[:70]}")
                saved = True
                break

            print(f"  [{date}] {title[:70]}")
            result = fetch_transcript(vid_id, workdir)
            if not result:
                print(f"    → no English captions")
                continue

            upload_date, transcript = result
            if not transcript.strip():
                print(f"    → empty transcript")
                continue

            path = save_transcript(args.out, slug, vid_id,
                                   title, channel, upload_date, transcript)
            print(f"  ✓ saved → {path}")
            saved = True
            total_saved += 1
            time.sleep(2)
            break

        if not saved:
            print(f"  ✗ no transcript found")

    try:
        workdir.rmdir()
    except OSError:
        pass

    print(f"\n{'='*60}")
    print(f"Done. Transcripts saved this run: {total_saved}")


if __name__ == "__main__":
    main()
