#!/usr/bin/env python3
"""Fetch YouTube transcripts for tracked people's interviews.

Scans each watch_channel's uploads since --since, matches video titles and
descriptions against each person's aliases, and downloads auto-generated
captions via yt-dlp. Output: transcripts/<person-slug>/<date>-<video-id>.md

Requires network access to youtube.com (blocked in the default managed
Claude Code environment — run locally or relax the network policy).

Usage:
    python scripts/fetch_youtube_transcripts.py data/channels.yaml --since 2026-04-11
"""

import argparse
import json
import re
import subprocess
import sys
from pathlib import Path

import yaml


def run_ytdlp(args: list[str]) -> str:
    result = subprocess.run(
        ["yt-dlp", *args], capture_output=True, text=True, timeout=600
    )
    if result.returncode != 0:
        print(f"  yt-dlp error: {result.stderr.strip().splitlines()[-1] if result.stderr.strip() else 'unknown'}", file=sys.stderr)
    return result.stdout


def list_videos_since(channel_url: str, since: str) -> list[dict]:
    """List recent videos for a channel.

    Flat playlists carry no upload dates, so date filtering happens later in
    fetch_transcript via --dateafter; here we just cap to recent uploads.
    """
    out = run_ytdlp([
        "--flat-playlist",
        "--playlist-items", "1:80",
        "--print", "%(.{id,title,description,upload_date})j",
        f"{channel_url}/videos",
    ])
    videos = []
    for line in out.splitlines():
        try:
            videos.append(json.loads(line))
        except json.JSONDecodeError:
            continue
    return videos


def vtt_to_text(vtt: str) -> str:
    """Strip VTT cues/timestamps/dedup into plain paragraphs."""
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


def fetch_transcript(video_id: str, workdir: Path, since: str) -> tuple[str, str] | None:
    """Return (upload_date YYYYMMDD, transcript) or None if too old/no subs.

    --dateafter makes yt-dlp reject videos older than `since` so no subs are
    written for them. player_client=web_embedded avoids YouTube's bot check
    on datacenter IPs; it exposes no video formats, hence
    --ignore-no-formats-error (we only want subtitles anyway).
    """
    out = run_ytdlp([
        "--skip-download",
        "--ignore-no-formats-error",
        "--extractor-args", "youtube:player_client=web_embedded",
        "--dateafter", since.replace("-", ""),
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
    return out.strip().splitlines()[0] if out.strip() else "00000000", text


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("config", type=Path)
    parser.add_argument("--since", required=True, help="YYYY-MM-DD")
    parser.add_argument("--out", type=Path, default=Path("transcripts"))
    args = parser.parse_args()

    config = yaml.safe_load(args.config.read_text())
    people = config.get("people", {})
    args.out.mkdir(exist_ok=True)
    workdir = args.out / ".tmp"
    workdir.mkdir(exist_ok=True)

    # Channels to scan: shared watch channels + each person's own channel.
    scan_targets = [(c["name"], c["url"], None) for c in config.get("watch_channels", [])]
    scan_targets += [
        (p["name"], p["youtube"], slug)
        for slug, p in people.items() if p.get("youtube")
    ]

    for channel_name, channel_url, owner_slug in scan_targets:
        print(f"Scanning {channel_name} since {args.since}...")
        for video in list_videos_since(channel_url, args.since):
            haystack = f"{video.get('title', '')} {video.get('description', '')}"
            matched = [owner_slug] if owner_slug else [
                slug for slug, p in people.items()
                if any(a.lower() in haystack.lower() for a in p["aliases"])
            ]
            if not matched:
                continue
            print(f"  match: {video['title']}")
            result = fetch_transcript(video["id"], workdir, args.since)
            if not result:
                print("    skipped (too old or no captions)", file=sys.stderr)
                continue
            date, transcript = result
            date = f"{date[:4]}-{date[4:6]}-{date[6:]}"
            for slug in matched:
                dest = args.out / slug
                dest.mkdir(exist_ok=True)
                (dest / f"{date}-{video['id']}.md").write_text(
                    f"# {video['title']}\n\n"
                    f"- Channel: {channel_name}\n"
                    f"- Date: {date}\n"
                    f"- URL: https://www.youtube.com/watch?v={video['id']}\n\n"
                    f"## Transcript\n\n{transcript}\n",
                    encoding="utf-8",
                )
    workdir.rmdir()


if __name__ == "__main__":
    main()
