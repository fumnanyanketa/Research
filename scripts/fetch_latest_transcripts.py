#!/usr/bin/env python3
"""Fetch the most recent YouTube transcript for each tracked person.

Runs two passes per person:

  Pass A — Latest content (any topic):
    Scans own channel + watch channels + general interview searches.
    Saves the single most recent video with English captions.

  Pass B — Big-ideas / futurism (last 6 months):
    Targeted searches for predictions, AGI, future-of-AI, business-model
    thinking, and any futuristic or forward-looking talk. Saves up to
    --futures-top results, skipping videos already captured in Pass A.
    Output filename is prefixed with "futures-".

Usage:
    python scripts/fetch_latest_transcripts.py data/channels.yaml
    python scripts/fetch_latest_transcripts.py data/channels.yaml --channel-depth 40
    python scripts/fetch_latest_transcripts.py data/channels.yaml --futures-only
"""

import argparse
import json
import re
import subprocess
import sys
import time
from datetime import date, timedelta
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
                "Requested format", "No video formats", "404")
        if not any(s in last for s in skip):
            print(f"  yt-dlp: {last}", file=sys.stderr)
    return result.stdout


def flat_list(url_or_search: str, n: int) -> list[dict]:
    """Return flat-playlist entries — no per-video page fetches, no bot check."""
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

    Uses web_embedded client to bypass bot-check on datacenter IPs.
    Retries 429s with exponential backoff.
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
            upload_date = out.strip().splitlines()[0] if out.strip() else "00000000"
            return upload_date, text
        if "429" not in out and attempt == 0:
            return None
    return None


def already_have(out_dir: Path, slug: str, video_id: str) -> bool:
    return bool(list(out_dir.glob(f"{slug}/*{video_id}*")))


def save_transcript(out_dir: Path, slug: str, video_id: str,
                    title: str, channel: str, upload_date: str,
                    transcript: str, prefix: str = "") -> Path:
    d = upload_date or "00000000"
    date_fmt = f"{d[:4]}-{d[4:6]}-{d[6:]}"
    dest = out_dir / slug
    dest.mkdir(exist_ok=True)
    path = dest / f"{prefix}{date_fmt}-{video_id}.md"
    path.write_text(
        f"# {title}\n\n"
        f"- Channel: {channel}\n"
        f"- Date: {date_fmt}\n"
        f"- URL: https://www.youtube.com/watch?v={video_id}\n\n"
        f"## Transcript\n\n{transcript}\n",
        encoding="utf-8",
    )
    return path


def dedup_sort(vids: list[dict]) -> list[dict]:
    seen, out = set(), []
    for v in vids:
        if v.get("id") and v["id"] not in seen:
            seen.add(v["id"])
            out.append(v)
    return sorted(out, key=lambda v: v.get("upload_date") or "0", reverse=True)


def try_download(pool: list[dict], slug: str, out_dir: Path,
                 workdir: Path, label: str, max_try: int = 20,
                 prefix: str = "", futures_since: str = "") -> int:
    """Try pool entries in order; save first success. Return count saved."""
    saved = 0
    for video in pool[:max_try]:
        vid_id = video["id"]
        title = video.get("title", "Untitled")
        channel = video.get("channel", "")
        date_tag = video.get("upload_date") or "?"

        if already_have(out_dir, slug, vid_id):
            print(f"  already have: {title[:72]}")
            return 1  # counts as done

        print(f"  [{date_tag}] {title[:72]}")
        result = fetch_transcript(vid_id, workdir)
        if not result:
            print(f"    → no English captions")
            continue

        upload_date, transcript = result
        if not transcript.strip():
            print(f"    → empty transcript")
            continue

        # For futures pass: skip if video is older than the cutoff
        if futures_since and upload_date and upload_date != "00000000":
            if upload_date < futures_since.replace("-", ""):
                print(f"    → older than 6-month cutoff ({upload_date}), skipping")
                continue

        path = save_transcript(out_dir, slug, vid_id, title, channel,
                               upload_date, transcript, prefix=prefix)
        print(f"  ✓ {label} → {path.name}")
        saved += 1
        time.sleep(2)
        break

    return saved


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("config", type=Path)
    parser.add_argument("--out", type=Path, default=Path("transcripts"))
    parser.add_argument("--channel-depth", type=int, default=60)
    parser.add_argument("--own-depth", type=int, default=15)
    parser.add_argument("--search-n", type=int, default=8)
    parser.add_argument("--futures-top", type=int, default=1,
                        help="Max futures transcripts per person (default 1)")
    parser.add_argument("--futures-months", type=int, default=6,
                        help="How far back to look for futures content (default 6)")
    parser.add_argument("--futures-only", action="store_true",
                        help="Skip Pass A; only run the futures pass")
    parser.add_argument("--latest-only", action="store_true",
                        help="Skip Pass B; only run the latest-content pass")
    args = parser.parse_args()

    config = yaml.safe_load(args.config.read_text())
    people = config.get("people", {})
    watch_channels = config.get("watch_channels", [])

    args.out.mkdir(exist_ok=True)
    workdir = args.out / ".tmp"
    workdir.mkdir(exist_ok=True)

    since_date = (date.today() - timedelta(days=args.futures_months * 30)
                  ).strftime("%Y-%m-%d")

    # -----------------------------------------------------------------------
    # Candidate discovery (shared by both passes)
    # -----------------------------------------------------------------------
    candidates: dict[str, list[dict]] = {slug: [] for slug in people}
    futures_candidates: dict[str, list[dict]] = {slug: [] for slug in people}

    print("=== Scanning own channels ===")
    for slug, person in people.items():
        if not person.get("youtube"):
            continue
        print(f"  {person['name']}...")
        vids = flat_list(f"{person['youtube']}/videos", args.own_depth)
        for v in vids:
            v.setdefault("channel", person["name"])
        candidates[slug].extend(vids)
        futures_candidates[slug].extend(vids)

    print(f"\n=== Scanning {len(watch_channels)} watch channels "
          f"(last {args.channel_depth} each) ===")
    for wc in watch_channels:
        print(f"  {wc['name']}...")
        vids = flat_list(f"{wc['url']}/videos", args.channel_depth)
        for v in vids:
            v.setdefault("channel", wc["name"])
            haystack = v.get("title", "")
            for slug, person in people.items():
                if any(a.lower() in haystack.lower()
                       for a in person.get("aliases", [person["name"]])):
                    candidates[slug].append(v)
                    futures_candidates[slug].append(v)

    print("\n=== YouTube search — latest content ===")
    for slug, person in people.items():
        name = person["name"]
        for query in [
            f"{name} AI interview 2026",
            f"{name} artificial intelligence 2025",
            f'"{name}" podcast interview',
        ]:
            vids = flat_list(f"ytsearch{args.search_n}:{query}", args.search_n)
            for v in vids:
                v.setdefault("channel", "")
            candidates[slug].extend(vids)
            time.sleep(0.5)

    print("\n=== YouTube search — big ideas / futures ===")
    for slug, person in people.items():
        name = person["name"]
        for query in [
            f"{name} future of AI predictions 2026",
            f"{name} AGI artificial general intelligence",
            f"{name} superintelligence predictions",
            f"{name} AI future business models",
            f'"{name}" where is AI going',
            f'"{name}" AI 2025 2026 predictions interview',
        ]:
            vids = flat_list(f"ytsearch{args.search_n}:{query}", args.search_n)
            for v in vids:
                v.setdefault("channel", "")
            futures_candidates[slug].extend(vids)
            time.sleep(0.5)

    for slug in people:
        candidates[slug] = dedup_sort(candidates[slug])
        futures_candidates[slug] = dedup_sort(futures_candidates[slug])

    # -----------------------------------------------------------------------
    # Pass A — Latest content
    # -----------------------------------------------------------------------
    total_latest = 0
    if not args.futures_only:
        print("\n=== Pass A: downloading latest transcripts ===")
        for slug, person in people.items():
            print(f"\n{person['name']} ({len(candidates[slug])} candidates)")
            n = try_download(candidates[slug], slug, args.out,
                             workdir, label="latest", max_try=20)
            total_latest += n
            if n == 0:
                print(f"  ✗ no transcript found")

    # -----------------------------------------------------------------------
    # Pass B — Big ideas / futures (last 6 months)
    # -----------------------------------------------------------------------
    total_futures = 0
    if not args.latest_only:
        print(f"\n=== Pass B: downloading futures transcripts "
              f"(since {since_date}) ===")
        for slug, person in people.items():
            pool = futures_candidates[slug]
            print(f"\n{person['name']} ({len(pool)} candidates)")

            # Filter: prefer videos we don't already have from Pass A,
            # but still try own-channel / watch-channel ones which may be recent
            saved = 0
            for video in pool[:25]:
                vid_id = video["id"]
                title = video.get("title", "Untitled")
                channel = video.get("channel", "")
                date_tag = video.get("upload_date") or "?"

                # Skip if already saved (any file for this video_id in this slug)
                existing = list(args.out.glob(f"{slug}/*{vid_id}*"))
                if existing:
                    print(f"  already have: {title[:72]}")
                    continue  # don't count as saved; look for a different video

                print(f"  [{date_tag}] {title[:72]}")
                result = fetch_transcript(vid_id, workdir)
                if not result:
                    print(f"    → no English captions")
                    continue

                upload_date, transcript = result
                if not transcript.strip():
                    print(f"    → empty transcript")
                    continue

                if upload_date and upload_date != "00000000":
                    if upload_date < since_date.replace("-", ""):
                        print(f"    → older than {since_date} ({upload_date})")
                        continue

                path = save_transcript(args.out, slug, vid_id, title, channel,
                                       upload_date, transcript, prefix="futures-")
                print(f"  ✓ futures → {path.name}")
                saved += 1
                total_futures += 1
                time.sleep(2)
                if saved >= args.futures_top:
                    break

            if saved == 0:
                print(f"  ✗ no futures transcript found")

    try:
        workdir.rmdir()
    except OSError:
        pass

    print(f"\n{'='*60}")
    print(f"Latest transcripts saved:  {total_latest}")
    print(f"Futures transcripts saved: {total_futures}")
    print(f"Total: {total_latest + total_futures}")


if __name__ == "__main__":
    main()
