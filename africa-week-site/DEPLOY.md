# Deploying the Africa Week site

This is the "token chain." It takes about 15 minutes. You deploy through the
Vercel website (no command line needed), so there is no Vercel CLI token to
manage. The only secrets are two Supabase keys, which you paste into Vercel.

The flow:

```
ideas.html  →  /api/submit  →  Supabase "ideas" table
(the form)     (serverless)     (your database)
```

---

## Step 1 — Create the database (Supabase)

1. Go to https://supabase.com and sign in (free tier is plenty).
2. Click **New project**. Give it a name, set a database password, pick a region near Finland (e.g. Frankfurt). Wait for it to finish setting up.
3. Open **SQL Editor → New query**, paste the contents of [`schema.sql`](schema.sql), and click **Run**. This creates the `ideas` table.
4. Open **Project Settings → API**. Copy two values:
   - **Project URL** (looks like `https://abcd1234.supabase.co`)
   - **service_role key** (under "Project API keys" — this is secret, treat it like a password)

## Step 2 — Put the code on GitHub

It is already in your repo (`fumnanyanketa/research`) under `africa-week-site/`.
Just make sure your latest changes are pushed.

## Step 3 — Deploy on Vercel

1. Go to https://vercel.com and sign in with GitHub.
2. **Add New → Project**, and import the `research` repository.
3. **Important:** set **Root Directory** to `africa-week-site` (click "Edit" next to Root Directory and pick that folder). This tells Vercel the site lives in that subfolder.
4. Expand **Environment Variables** and add the two from Step 1:
   - `SUPABASE_URL` = your Project URL
   - `SUPABASE_SERVICE_ROLE_KEY` = your service_role key
5. Click **Deploy**. Vercel installs the dependency, serves the pages, and turns `api/submit.js` into a live endpoint.

When it finishes you get a URL like `africa-week-2027.vercel.app`. That is the
link you can share.

## Step 4 — Test it

1. Open your new URL, click **Share your ideas**, fill the form, send it.
2. In Supabase, open **Table Editor → ideas**. Your submission should be there.
3. You can export all submissions any time from that table (the "..." menu → Export to CSV) — handy for the mailing list / contacts.

---

## Optional

- **Custom domain:** Vercel → Project → Settings → Domains. Point a domain you own (or buy one there) at the site.
- **Email/SMS notifications** when someone submits: easy to add later (e.g. send yourself an email on each new idea).

## Keep the secret secret

The `service_role` key must only ever live in Vercel's Environment Variables.
It is never in the code and never in the browser. `.gitignore` already blocks
`.env` files so a real key cannot be committed by accident.

## If you would rather not use Supabase

The only file that is Supabase-specific is `api/submit.js`. The same form works
with **Vercel Postgres** or a **Google Sheet** backend instead — say the word
and the endpoint can be swapped without touching the pages.
