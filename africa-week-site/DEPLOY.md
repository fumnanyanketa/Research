# Deploying the Africa Week site

This is the "token chain." About 15 minutes, all in the browser, no command line.
The database is **Neon** (free serverless Postgres). The easiest path adds it
from inside Vercel, which also sets the database key for you automatically.

The flow:

```
ideas.html  →  /api/submit  →  Neon "ideas" table
(the form)     (serverless)     (your database)
```

---

## Step 1 — Put the code on GitHub

It is already in your repo (`fumnanyanketa/research`) under `africa-week-site/`.
Just make sure your latest changes are pushed.

## Step 2 — Deploy on Vercel

1. Go to https://vercel.com and sign in with GitHub.
2. **Add New → Project**, import the `research` repository.
3. **Important:** set **Root Directory** to `africa-week-site` (click "Edit" next to Root Directory and choose that folder). This tells Vercel the site lives in that subfolder.
4. Click **Deploy**. It will go live, but the form will not save yet, because there is no database attached. That is the next step.

## Step 3 — Add the Neon database (from inside Vercel)

1. In your new Vercel project, open the **Storage** tab.
2. Click **Create Database → Neon (Postgres)**, accept the free plan, and create it.
3. Vercel connects it to your project and adds a `DATABASE_URL` environment variable automatically. (No key copying needed.)
4. Open the Neon dashboard (there is a link from the Vercel Storage tab), go to **SQL Editor**, paste the contents of [`schema.sql`](schema.sql), and **Run**. This creates the `ideas` table.
5. Back in Vercel, go to **Deployments** and **Redeploy** the latest one so it picks up the new `DATABASE_URL`.

> Alternative (if you prefer to set it up directly): create a project at
> https://neon.tech, copy the **connection string**, and in Vercel add it as an
> environment variable named `DATABASE_URL`. Then do Step 3.4 and redeploy.

## Step 4 — Test it

1. Open your site URL, click **Share your ideas**, fill the form, send it.
2. In the Neon console, open **Tables → ideas** (or run `select * from ideas order by created_at desc;` in the SQL editor). Your submission should be there.
3. To pull submissions out for a mailing list, run a query in the SQL editor and download the result as CSV.

---

## Optional

- **Custom domain:** Vercel → Project → Settings → Domains.
- **Notifications** (email/SMS on each new idea) or **spam protection** (a captcha) can be added later if needed.

## Keep the key secret

`DATABASE_URL` must only live in Vercel's Environment Variables, never in the
code or the browser. `.gitignore` already blocks `.env` files so it cannot be
committed by accident.

## Other free database options

The only file tied to the database is `api/submit.js`. If you ever want to
switch, the same form works with a **Google Sheet** (submissions land in a
spreadsheet you already use, effectively unlimited and free) or **Turso**
(serverless SQLite, very generous free tier). Just say which and the endpoint
gets swapped without touching the pages.
