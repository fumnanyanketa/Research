# Anchor — web app

The implemented Anchor design, recreated from the Claude Design handoff
(`Anchor OS.html`). React + Vite. One presentation "stage" renders both:

- **Mobile app** — four phone frames: Today (countdown rail, key tasks, habits
  ring), Capture (segmented quick-thought / conversation, record button, AI
  summary + proposed tasks), Tasks (proposed / active / done), Habits (streaks).
- **Desktop dashboard** — primary countdown hero, today's habits, calendar
  strip, finance pulse (hidden until you reveal it), key tasks, and the
  "Brain" grid of life areas.

Design system (from `src/styles/anchor.css`): light field with dark feature
cards, one lime accent (`#CDEB45`), Geist type, 22px card radius.

## Run

```sh
cd web
npm install
npm run dev      # then open the printed localhost URL
npm run build    # production build into dist/
```

## Structure

| File | Role |
|---|---|
| `src/app.jsx` | Store (sample data) + the stage that composes mobile + desktop |
| `src/mobile.jsx` | Phone frame, tab bar, and the four mobile screens |
| `src/desktop.jsx` | The desktop dashboard cards |
| `src/icons.jsx` | Line-icon set |
| `src/viz.jsx` | Ring, Donut, Waveform, DotMatrix, LineChart |
| `src/styles/*.css` | Design tokens + component styles (verbatim from the handoff) |

## Data (Supabase)

`src/lib/store.js` (`useAnchorStore`) is the data layer. It reads/writes Supabase
and maps rows to the UI shapes the components expect (priority `high/medium/low`
↔ `red/amber/grey`, `confirmed` ↔ `active`, goals' `target_date` → day-counts,
habit streaks from `habit_logs`, finance aggregated by source). Capture writes an
`entries` row and calls the `process-entry` edge function, then reloads tasks.

**It only goes live when these two env vars are set** (local `web/.env` and the
Vercel project env) — otherwise it falls back to sample data so the app still
renders:

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

Backend setup: apply `../supabase/schema.sql` and deploy `../supabase/functions/process-entry`
(with `ANTHROPIC_API_KEY` set as a function secret).
