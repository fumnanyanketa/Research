# AI Voices Intelligence System

A system for tracking what the people shaping AI/superintelligence are saying right now —
interviews, podcast appearances, blog posts, and essays — gathered into one place.

## Structure

```
README.md          — this file
ROSTER.md          — the full list of tracked voices, organized by tier
voices/<slug>.md   — per-person digest: recent appearances, posts, and core theses
data/channels.yaml — machine-readable source list (YouTube channels, blogs, RSS) per person
scripts/           — fetchers for full verbatim transcripts and blog posts
```

## How it works

**Digests (`voices/`)** are research summaries built from web search: every interview or
post in the tracking window is listed with date, venue, link, and the key ideas as
reported. The current window is **2026-04-11 → 2026-06-11**.

**Full transcripts** require network access to YouTube and blog hosts, which the managed
Claude Code environment blocks by default (only package registries and GitHub are
allowed). Two options:

1. Run the scripts locally:
   ```bash
   pip install -r scripts/requirements.txt
   python scripts/fetch_youtube_transcripts.py data/channels.yaml --since 2026-04-11
   python scripts/fetch_blog_posts.py data/channels.yaml --since 2026-04-11
   ```
   Output lands in `transcripts/<slug>/` and `posts/<slug>/` as markdown.

2. Or relax the environment's network policy for Claude Code on the web
   (see https://code.claude.com/docs/en/claude-code-on-the-web) and ask Claude to run them.

## Updating

To refresh the window, re-run the research pass (ask Claude to "update the voices
digests for the last N weeks") and re-run the fetcher scripts with a new `--since` date.
