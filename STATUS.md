# Repository Status — Deep Dive (v2, corrected)

*Generated 2026-06-22. An unbiased, file-by-file audit across **all 7 branches**.*

> **Correction notice.** An earlier v1 of this file audited only 2 branches and concluded this repo was "a planning vault with one small website." That was wrong — it missed 5 branches and 3 entirely separate projects. The real picture is below: this repository is a **dumping ground of three unrelated project lines spread across 7 branches with no shared trunk.**

---

## 0. At a glance

- **7 branches, no `main`.** The default branch is `claude/document-access-request-ayqwnn`.
- **5 of the 7 branches are orphan histories** — they share *no common ancestor* with each other or with the default. They are not features of one project; they are different projects that happen to live in the same repo.
- The branches cluster into **three distinct projects**:
  1. **Africa Week / association planning** (Markdown vault) — 2 branches.
  2. **"AI Voices Intelligence System"** (research corpus) — 4 divergent branches.
  3. **"Anchor"** (a personal-assistant mobile/web app, real code) — 1 branch.
- **Nothing is merged anywhere.** Every branch is a parallel island. No CI, no trunk, no integration.
- **Owner across all of them:** Fumnanya (`aiprotocolslab@gmail.com`).

---

## 1. Every branch (the full list)

Default/base for "ahead/behind" below is `claude/document-access-request-ayqwnn`. "Orphan" = no shared git ancestor with the default (independent root).

| Branch | Tip date | Commits | Rel. to default | Project | What's actually in it |
|---|---|---|---|---|---|
| `claude/document-access-request-ayqwnn` *(default)* | 2026‑06‑21 | 18 | — | **Africa Week** | The association planning vault: Africa Week 2027 master plan, two literacy curricula, meeting syntheses, and `africa-week-site/` (static landing + idea form + Vercel/Neon function). Despite the name, contains no "document access" feature. |
| `claude/peaceful-mccarthy-quelxh` *(this branch)* | 2026‑06‑22 | 19 | +1 / 0 | **Africa Week** | Identical to default **plus this STATUS.md**. The only branch that shares history with default. |
| `claude/inspiring-bohr-cfhutc` | 2026‑06‑12 | 78 | orphan | **AI Voices** | The most-developed Voices variant. 227 files: 16 voice digests + **64 blog posts** + `THE_AI_MIND_REPORT.md` (641 lines) + `ai_mind_report.html` (1,579-line interactive report). The "what top AI thinkers believe" synthesis. |
| `claude/career-path-ai-research-0tmkth` | 2026‑06‑13 | 9 | orphan | **AI Voices** | The "career" cut. 160 files: **137 full verbatim transcripts** (~1.76M words; one sampled file is 882 lines) + `CAREER-SYNTHESIS.md` (136 lines) on how AI changes careers. Self-documents a data-quality bug (transcript mis-attribution). |
| `claude/ai-personal-assistant-reminders-1otfl5` | 2026‑06‑17 | 25 | orphan | **Anchor app** | A real app, not docs. Expo/React-Native app (`app/`), React+Vite web app (`web/`), Supabase schema (172 lines) + Claude/Gemini edge function (122 lines), on-device Whisper transcription. Handoff doc says it **builds, APK is installed on the phone, "lots of bugs."** |
| `claude/modest-heisenberg-02tr8a` | 2026‑06‑12 | 7 | orphan | **AI Voices** | Near-duplicate of the Voices *seed*: same 16 digests + scripts, plus a `.claude/` session-start hook and settings. Essentially an early scaffold variant. |
| `claude/ai-voices-list-m99ise` | 2026‑06‑11 | 5 | orphan | **AI Voices** | The Voices **seed**: 16 voice digests, `ROSTER.md` (98 lines), `data/channels.yaml`, and Python fetch scripts. No transcripts/posts yet — the starting point the other two Voices branches grew from. |

**Flags:**
- ⚠️ **All branch names are auto-generated session names** and bear no relation to contents (e.g. "document-access-request", "inspiring-bohr", "modest-heisenberg").
- ⚠️ **No trunk.** Default is a `claude/*` session branch. Three projects, zero integration, nothing merged.
- ⚠️ **The 4 "AI Voices" branches are forks of one project that diverged and never reconciled** — they share the same README/ROSTER/scripts scaffold but carry different outputs (digests-only vs. transcripts+career vs. posts+report). This is duplicated, drifting work.
- 🟡 **`modest-heisenberg` and `ai-voices-list` are near-redundant** — the weakest two branches; strong merge/delete candidates.

---

## 2. What this repository actually is (plain language)

It's **one person's multi-project scratch space**, where several unrelated Claude Code sessions each pushed their own branch and never converged. Three things live here:

**A. Africa Week 2027 + association planning** *(default + this branch)*
A polished Markdown vault for an African-diaspora association in Helsinki: a 12-month plan for an 8-day cultural/tech event (May 2027), a two-track Technology & AI literacy curriculum, meeting syntheses, and a small deployable intake website (static HTML + one Vercel serverless function writing to Neon Postgres).

**B. AI Voices Intelligence System** *(4 branches)*
A research apparatus tracking what ~64 prominent AI figures are saying. A roster + per-person digests + Python fetchers for YouTube transcripts and blogs, evolving across branches into (i) a 137-transcript corpus with a **career-advice synthesis**, and (ii) a 64-post corpus with **"THE AI MIND REPORT"** (markdown + a standalone interactive HTML page). Genuinely substantial content; the fetch scripts need network access the managed env blocks, so transcripts were gathered by running locally / via web search.

**C. Anchor** *(1 branch)*
A personal "life operating system" app: record long conversations, transcribe on-device with Whisper (free), and have an LLM extract action items, reminders, habits, finances into one source of truth. Has both a React Native (Expo) build and a React/Vite web implementation plus a Supabase backend. Per its own handoff doc, it builds and is installed on the owner's Android phone but is buggy.

There is **no academic "research"** here despite the repo name — it's planning + AI-commentary curation + an app.

---

## 3. Built vs. stubbed, per project (rough % complete)

**A. Africa Week** — *~85% as a planning vault; site ~80% built, 0% deployed/verified.* Docs are complete and usable; gaps are real-world inputs (workstream owners blank, theme "TBD"). The site code is done but never confirmed deployed (needs `DATABASE_URL`). No tests/CI.

**B. AI Voices** — *content ~80% on the two rich branches; tooling ~50%.* The digests, transcripts, posts, and the two syntheses are real, substantial deliverables. Weaknesses: the fetch scripts can't run in-env; `career-path` documents its own transcript **mis-attribution bug** (wrong speakers in many `futures-*` files); and the work is **split across 4 branches that should be one**. The HTML report is a finished artifact.

**B. AI Voices "products":**
- `inspiring-bohr` → **THE AI MIND REPORT** (md + 1,579-line interactive HTML): essentially **done**.
- `career-path` → **CAREER-SYNTHESIS** + 137 transcripts: **done but data-quality-flagged**.
- `modest-heisenberg` / `ai-voices-list`: **superseded scaffolds** (~redundant).

**C. Anchor** — *~60% built, not shippable.* Real, non-trivial code across native + web + backend. Self-reported "lots of bugs"; web app runs on in-memory sample data (Supabase wiring incomplete); native app builds but is the active bug-fixing target. Most *engineering* in the repo lives here.

---

## 4. What's left & the single biggest blocker

**Per project:**
- *Africa Week:* assign 9 workstream owners, lock the theme, deploy + smoke-test the site.
- *AI Voices:* fix the transcript alias/mis-attribution bug and re-fetch; **collapse 4 branches into 1**; decide which synthesis is the canonical output.
- *Anchor:* triage the "lots of bugs," wire the web app to Supabase (it's on sample data), stabilize the native build.

**Single biggest blocker (whole repo):** **there is no trunk and no separation of projects.** Three unrelated efforts and 4 redundant forks all sit as un-mergeable islands on `claude/*` branches off a misleadingly-named default. Nothing can be "the repo's state" because the repo has no coherent state. This is an organization problem, not a code problem — and it's blocking clarity on every individual project.

---

## 5. Quick wins (nearly done)

- **Africa Week site** — ~15 min to deploy (Vercel + Neon, one env var); code complete.
- **THE AI MIND REPORT** (`inspiring-bohr`) — a finished HTML deliverable; just needs to be the canonical Voices artifact (publish or export).
- **Kill the two redundant Voices scaffolds** (`ai-voices-list`, `modest-heisenberg`) after lifting anything unique — instant clutter reduction.
- **Fill Africa Week workstream owners** from the 20 June kickoff synthesis (names already in the notes).

---

## 6. Blunt recommendation: **SPLIT into 3 repos; don't keep them entangled**

These are three unrelated projects. Keeping them as orphan branches in one repo named "Research" is the core problem.

- **Africa Week** → its own repo (`africa-week-2027`), with a real `main`. Split the site out again (its own README already recommends this). **Keep — it's live and useful.**
- **AI Voices** → its own repo (`ai-voices`), with a real `main`. **Consolidate the 4 branches into one history**, make `inspiring-bohr` (richest) the base, fold in `career-path`'s transcripts + synthesis, then **delete `ai-voices-list` and `modest-heisenberg`.** Fix the mis-attribution bug. **Keep — strong content, bad git hygiene.**
- **Anchor** → its own repo (`anchor`), with a real `main`. **Keep — it's the only substantial codebase**, but it needs a focused bug-fix pass and Supabase wiring before it's usable.
- **This repo (`Research`)** → after the split, **archive it.** It has no coherent identity; its value is entirely in the three projects that should each leave.

Nothing here is junk-to-delete except the two redundant Voices scaffolds. The waste is structural: parallel branches that never merged.

---

## 7. Next actions (prioritized)

- [ ] Decide the split: create three repos (`africa-week-2027`, `ai-voices`, `anchor`), each with a real `main` as default.
- [ ] Move Anchor (`ai-personal-assistant-reminders-1otfl5`) into its own repo and start a focused bug-fix + Supabase-wiring pass.
- [ ] Consolidate the 4 AI-Voices branches into one history (base = `inspiring-bohr`, fold in `career-path`); delete `ai-voices-list` + `modest-heisenberg`.
- [ ] Fix the transcript mis-attribution bug noted in `CAREER-SYNTHESIS.md` and re-fetch the affected slugs.
- [ ] Deploy + smoke-test the Africa Week site (set `DATABASE_URL`, submit one test idea end-to-end).
- [ ] Fill the 9 workstream owners and the event theme in `africa-week-2027/master-plan.md`.
- [ ] Once the three projects have moved, archive this `Research` repo (it has no standalone purpose).
