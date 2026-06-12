#!/usr/bin/env python3
"""Fetch the most recent YouTube transcript for each tracked person.

For each person: checks their own channel (if configured) and searches
YouTube for recent AI interviews. Downloads the most recent video with
English captions. Skips videos we already have.

Usage:
    python scripts/fetch_latest_transcripts.py data/channels.yaml
    python scripts/fetch_latest_transcripts.py data/channels.yaml --top 3
"""

import argparse
import json
import re
import subprocess
import sys
import time
from pathlib import Path

import yaml


def run_ytdlp(args: list[str], timeout: int = 180) -> str:
    result = subprocess.run(
        ["yt-dlp", *args], capture_output=True, text=True, timeout=timeout
    )
    if result.returncode != 0 and result.stderr.strip():
        last = result.stderr.strip().splitlines()[-1]
        # Suppress noisy but expected warnings
        if not any(x in last for x in ("n challenge", "impersonation", "Only images")):
            print(f"  yt-dlp: {last}", file=sys.stderr)
    return result.stdout


def search_videos(query: str, n: int = 5) -> list[dict]:
    out = run_ytdlp([
        f"ytsearch{n}:{query}",
        "--print", "%(.{id,title,upload_date,channel})j",
        "--no-playlist",
    ])
    results = []
    for line in out.splitlines():
        try:
            results.append(json.loads(line))
        except json.JSONDecodeError:
            continue
    return results


def get_channel_recent(channel_url: str, n: int = 10) -> list[dict]:
    out = run_ytdlp([
        "--flat-playlist",
        "--playlist-items", f"1:{n}",
        "--print", "%(.{id,title,upload_date,channel})j",
        f"{channel_url}/videos",
    ])
    results = []
    for line in out.splitlines():
        try:
            results.append(json.loads(line))
        except json.JSONDecodeError:
            continue
    return results


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


def fetch_transcript(video_id: str, workdir: Path) -> tuple[str, str] | None:
    """Return (upload_date YYYYMMDD, transcript text) or None if no captions."""
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
    if not vtts:
        return None
    text = vtt_to_text(vtts[0].read_text(encoding="utf-8"))
    for f in vtts:
        f.unlink()
    date = out.strip().splitlines()[0] if out.strip() else "00000000"
    return date, text


def dedupe_by_id(videos: list[dict]) -> list[dict]:
    seen, out = set(), []
    for v in videos:
        if v.get("id") and v["id"] not in seen:
            seen.add(v["id"])
            out.append(v)
    return out


def sort_by_date(videos: list[dict]) -> list[dict]:
    return sorted(videos, key=lambda v: v.get("upload_date") or "00000000", reverse=True)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("config", type=Path)
    parser.add_argument("--out", type=Path, default=Path("transcripts"))
    parser.add_argument("--top", type=int, default=1,
                        help="Max transcripts to save per person (default 1 = most recent)")
    args = parser.parse_args()

    config = yaml.safe_load(args.config.read_text())
    people = config.get("people", {})
    args.out.mkdir(exist_ok=True)
    workdir = args.out / ".tmp"
    workdir.mkdir(exist_ok=True)

    total_saved = 0

    for slug, person in people.items():
        name = person["name"]
        print(f"\n{'='*60}")
        print(f"{name}")

        candidates: list[dict] = []

        # 1. Own YouTube channel — most recent uploads
        if person.get("youtube"):
            print(f"  scanning own channel...")
            candidates.extend(get_channel_recent(person["youtube"], n=10))

        # 2. YouTube search — AI interviews, most recent
        for query in [
            f"{name} AI interview 2026",
            f"{name} artificial intelligence interview 2025",
            f'"{name}" podcast 2026',
        ]:
            print(f"  searching: {query}")
            candidates.extend(search_videos(query, n=5))
            time.sleep(1)  # gentle pacing to avoid 429s

        candidates = sort_by_date(dedupe_by_id(candidates))

        if not candidates:
            print(f"  no candidates found")
            continue

        saved = 0
        tried = 0
        for video in candidates:
            if saved >= args.top:
                break
            if tried >= 15:  # don't hammer too many per person
                break

            vid_id = video["id"]
            title = video.get("title", "Untitled")
            channel = video.get("channel", "")
            date_str = video.get("upload_date") or "00000000"

            # Skip if we already have this video
            if list(args.out.glob(f"{slug}/*{vid_id}*")):
                print(f"  already have: {title[:70]}")
                saved += 1
                break

            print(f"  trying [{date_str}]: {title[:70]}")
            tried += 1

            result = fetch_transcript(vid_id, workdir)
            if not result:
                print(f"    no English captions")
                continue

            upload_date, transcript = result
            if upload_date and upload_date != "00000000":
                date_str = upload_date
            date_fmt = f"{date_str[:4]}-{date_str[4:6]}-{date_str[6:]}"

            dest = args.out / slug
            dest.mkdir(exist_ok=True)
            (dest / f"{date_fmt}-{vid_id}.md").write_text(
                f"# {title}\n\n"
                f"- Channel: {channel}\n"
                f"- Date: {date_fmt}\n"
                f"- URL: https://www.youtube.com/watch?v={vid_id}\n\n"
                f"## Transcript\n\n{transcript}\n",
                encoding="utf-8",
            )
            print(f"  SAVED: {date_fmt} {title[:70]}")
            saved += 1
            total_saved += 1
            time.sleep(2)  # brief pause between successful downloads

        if not saved:
            print(f"  no transcript retrieved")

    try:
        workdir.rmdir()
    except OSError:
        pass

    print(f"\n{'='*60}")
    print(f"Done. Total transcripts saved: {total_saved}")


if __name__ == "__main__":
    main()
