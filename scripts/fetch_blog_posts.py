#!/usr/bin/env python3
"""Fetch recent blog posts for tracked people via their RSS/Atom feeds.

Output: posts/<person-slug>/<date>-<title-slug>.md

Requires open network access (blocked in the default managed Claude Code
environment — run locally or relax the network policy).

Usage:
    python scripts/fetch_blog_posts.py data/channels.yaml --since 2026-04-11
"""

import argparse
import re
import time
from pathlib import Path

import feedparser
import html2text
import yaml


def slugify(text: str, max_len: int = 60) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")
    return slug[:max_len].rstrip("-") or "untitled"


def entry_date(entry) -> time.struct_time | None:
    return entry.get("published_parsed") or entry.get("updated_parsed")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("config", type=Path)
    parser.add_argument("--since", required=True, help="YYYY-MM-DD")
    parser.add_argument("--out", type=Path, default=Path("posts"))
    args = parser.parse_args()

    since = time.strptime(args.since, "%Y-%m-%d")
    config = yaml.safe_load(args.config.read_text())
    converter = html2text.HTML2Text()
    converter.ignore_images = True
    converter.body_width = 0

    for slug, person in config.get("people", {}).items():
        for feed_url in person.get("blogs", []):
            print(f"Fetching {person['name']}: {feed_url}")
            feed = feedparser.parse(feed_url)
            if feed.bozo and not feed.entries:
                print(f"  failed: {feed.get('bozo_exception')}")
                continue
            for entry in feed.entries:
                date = entry_date(entry)
                if date is None or date < since:
                    continue
                date_str = time.strftime("%Y-%m-%d", date)
                title = entry.get("title", "Untitled")
                body_html = (
                    entry.get("content", [{}])[0].get("value")
                    or entry.get("summary", "")
                )
                dest = args.out / slug
                dest.mkdir(parents=True, exist_ok=True)
                (dest / f"{date_str}-{slugify(title)}.md").write_text(
                    f"# {title}\n\n"
                    f"- Author: {person['name']}\n"
                    f"- Date: {date_str}\n"
                    f"- URL: {entry.get('link', '')}\n\n"
                    f"{converter.handle(body_html)}\n",
                    encoding="utf-8",
                )
                print(f"  saved: {date_str} {title}")


if __name__ == "__main__":
    main()
