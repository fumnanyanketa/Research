# Africa Week 2027 — landing site (working prototype)

A small, **self-contained** landing page plus an idea-submission form. Built as a
working prototype for the 20 June 2026 kickoff. This is **not** the official
Africa Week site; it is a throwaway/working version that can grow or be replaced.

## Why this is easy to migrate later

Everything this site needs lives in this one folder. It does not import or
reference anything elsewhere in the repo, all internal links are relative, and
all secrets come from environment variables. That means:

- **To move it to its own repository:** copy this `africa-week-site/` folder to
  the root of a new repo, then in Vercel set **Root Directory** to `.` (instead
  of `africa-week-site`) and re-add the `DATABASE_URL` variable. Nothing in the
  code changes.
- **To throw it away:** delete this folder. Nothing else in the repo depends on it.

## Structure

```
africa-week-site/
├── index.html        landing page (Start Here)
├── ideas.html        idea-submission form
├── api/submit.js     Vercel serverless function (saves to the database)
├── assets/           images (logo, etc.)
├── schema.sql        one-time database table setup
├── package.json      one dependency: @neondatabase/serverless
├── vercel.json       clean URLs
├── .env.example      the one environment variable needed
└── DEPLOY.md         step-by-step deploy guide
```

## Stack

- Static HTML/CSS/JS (no framework, no build step)
- Vercel serverless function for the form endpoint
- Neon (free serverless Postgres) for storage

## Deploy

See [DEPLOY.md](DEPLOY.md). In short: import the repo into Vercel, set
**Production Branch** to `claude/document-access-request-ayqwnn`, set **Root
Directory** to `africa-week-site`, add the Neon database, redeploy.

> Note: this repo's default branch is not the one this site lives on, so you must
> set the Production Branch explicitly, or Vercel will try to deploy the wrong branch.
