# Repository Status — Deep Dive

*Generated 2026-06-22. An unbiased, file-by-file audit of this repository. Findings are based only on what is actually in the files, not on the repo name or commit messages.*

---

## 0. At a glance

- **Repo name on disk:** `Research` (misleading — see §2).
- **What it actually is:** a personal **research / planning vault** (Markdown) for an African‑diaspora association in Helsinki, Finland, plus **one small working web app**.
- **Total content:** 28 tracked files, ~2,460 lines. ~95% is prose/Markdown planning; one real software artifact (`africa-week-site/`).
- **No `main` / `master` branch exists.** The repo's default branch is `claude/document-access-request-ayqwnn`.
- **No CI, no workflows, no tests, no `.github/`.**
- **Activity window:** first commit 2026‑06‑12, last commit 2026‑06‑21. ~10 days of work, then quiet.

---

## 1. Branches (every branch, local + remote)

There are exactly **two branches**, both remote-tracked, and they are **byte-for-byte identical** — same tip commit `10bc04d`, 0 commits ahead/behind each other.

| Branch | Tip | Last commit | Ahead/behind the other | What's actually in it |
|---|---|---|---|---|
| `claude/document-access-request-ayqwnn` *(default)* | `10bc04d` | 2026‑06‑21 | 0 / 0 | Identical to the other branch. Despite the name, it contains **no** "document access request" feature — it's the full planning vault + the site. |
| `claude/peaceful-mccarthy-quelxh` | `10bc04d` | 2026‑06‑21 | 0 / 0 | Identical content. This is where this STATUS.md was added. |

**Flags:**
- ⚠️ **Both branch names are meaningless** relative to their content (auto-generated session names). Neither is a feature branch; they are two pointers at the same line of history.
- ⚠️ **The default branch is a `claude/...` session branch, not `main`.** This is fragile: the site's own README has to warn deployers to manually override Vercel's Production Branch because the default branch is the "wrong" one. There is no stable trunk.
- ✅ No stranded/divergent work — there is only one line of history (18 commits, 2026‑06‑12 → 2026‑06‑21). Nothing is unmerged or abandoned in a side branch; everything lives on the single shared tip.

---

## 2. What this project actually is (plain language)

A **working notebook for one person** (the meeting recorder/contributor) who volunteers with an African community association in Helsinki. It turns auto‑transcribed meeting recordings into structured plans and tracks execution. Concretely, the files cover:

1. **Africa Week 2027** — an 8‑day cultural/technology event (18–25 May 2027) at Helsinki's Museum of Technology. A detailed 12‑month master plan, program-by-day architecture, funding/risk/metrics, a tech-integration plan, and a proposed shared‑Drive workspace.
2. **A community "Technology & AI Literacy" program** — a two‑track (digital foundations → AI) monthly upskilling curriculum for immigrants, with module-by-module syllabi.
3. **Meeting syntheses & action items** — three meetings (11, 19, 20 June 2026) written up by theme, with a consolidated owner/deadline action list.
4. **Other initiatives** — an AI photography tool, an AI‑agent agency for SMEs, an "English Parliament / Community 2027" civic project, an AI‑storytelling workshop, a Finnish‑language app, etc. — each captured as concept + "next single step."
5. **`africa-week-site/`** — the **only code**: a no-build static landing page (`index.html`) + idea‑submission form (`ideas.html`) + one Vercel serverless function (`api/submit.js`, 61 lines) that writes submissions to a Neon Postgres table. Self-contained and explicitly designed to be copied out into its own repo or deleted.

So: **mostly a knowledge/planning base, with a small functional intake website attached.** There is no "research" in the academic/ML sense — no datasets, notebooks, papers, or experiments.

---

## 3. Built vs. stubbed — rough completeness

| Area | State | Notes |
|---|---|---|
| Meeting syntheses (3) | ✅ **Built** | Substantive, polished prose. |
| Action items list | ✅ **Built** | Consolidated, owner/date columns filled. |
| Africa Week master plan | 🟡 **Built but provisional** | Thorough, but **theme = "to be decided"** and **every workstream "Owner" cell is blank** — to be filled at a meeting that has now passed. |
| Tech-integration / workspace / onboarding docs | ✅ **Built** | Complete drafts. |
| Two literacy curricula + overview | ✅ **Built (draft)** | Explicitly marked "draft for editing"; content is complete. |
| `africa-week-site` HTML/CSS/JS | ✅ **Built** | Static, functional, no build step. |
| `api/submit.js` + schema | ✅ **Built** | Honeypot, validation, auto-creates table. Sound for its scope. |
| **Live deployment** | ❌ **Not done** | Needs `DATABASE_URL` set in Vercel; no evidence it's deployed or tested against a real DB. |
| Tests / CI / linting | ❌ **Absent** | None anywhere. |

**Rough % complete:**
- *As a planning/knowledge base:* ~**85%** — genuinely usable today; the gaps are real-world inputs (owners, theme), not writing.
- *As deployable software (the site):* ~**80% built, 0% deployed/verified** — the code is done; it has never been shown running.

---

## 4. What's left to finish & the single biggest blocker

**Left to finish (project terms):**
- Assign a named owner to each of the 9 Africa Week workstreams (all blank).
- Decide the event theme (currently "TBD").
- Deploy and smoke‑test the site (set `DATABASE_URL`, submit one idea end‑to‑end).
- Decide whether the site lives here or moves to its own repo (the README recommends moving it).

**Single biggest blocker:** **There is no stable trunk and no clear "live" instance.** The whole repo hangs off auto-named `claude/*` session branches with no `main`, and the one shippable artifact (the site) has never been confirmed deployed. Everything else is execution that depends on real-world people/meetings, which a repo can't unblock. The fixable, in-repo blocker is **branch hygiene + actually deploying the site.**

---

## 5. Quick wins (nearly done)

- **Promote a real `main` branch.** Both branches are identical — fast-forward/rename one to `main` and set it as default. Removes the deploy footgun.
- **Deploy the site.** Code is complete; it's ~15 minutes per its own `DEPLOY.md` (Vercel + Neon, set one env var). High visible payoff.
- **Fill the workstream owner table** in `master-plan.md` (kickoff already happened on 20 June; the synthesis names people — Mama, Richmond, Ibrahim, etc.).
- **Lock the event theme** — one decision, unblocks the brand kit and outreach.

---

## 6. Blunt recommendation: **KEEP — but rename, restructure, and split**

This is a legitimately useful, well-written planning vault that's actively serving a real 2027 event. Don't discard it. But:

- **Rename the repo.** "Research" describes nothing here. Call it `africa-week-2027` / `association-planning` so it's findable and honest.
- **Establish a `main` branch and make it default.** The current `claude/*`-only setup is a latent deployment/operations hazard.
- **Split the site out.** `africa-week-site/` is self-contained and the README already says to move it to its own repo for deployment. A planning vault and a deployable app shouldn't share a tree — separate them so each can have the right default branch and lifecycle.
- **Nothing here should be killed.** No dead code, no abandoned branch, no contradictory junk — just provisional planning that needs real-world inputs. The only "waste" is two redundant identical branches; collapse them.

---

## 7. Next actions (prioritized)

- [ ] Create a `main` branch from the current tip and set it as the repo's default; collapse the two redundant `claude/*` branches.
- [ ] Deploy `africa-week-site` to Vercel + Neon, set `DATABASE_URL`, and submit one test idea end-to-end to confirm it works.
- [ ] Move `africa-week-site/` into its own repository (per its README) once deploy is verified.
- [ ] Fill in the 9 workstream owners in `africa-week-2027/master-plan.md` from the 20 June kickoff synthesis.
- [ ] Make the event‑theme decision and record it in `master-plan.md` (replace "to be decided").
- [ ] Rename this repository to something descriptive (e.g. `africa-week-2027`).
- [ ] Add a one-line note to `README.md` pointing here (STATUS.md) and stating the current default-branch reality.
