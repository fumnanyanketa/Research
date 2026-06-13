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

## Status & next step

Right now the app runs on the in-memory store in `src/app.jsx` (the handoff's
sample data — name Fumnanya, the Spanish habit, three countdowns, eight areas,
three income sources), so it renders exactly as designed.

**Next:** replace that store with live data from Supabase — the same
`supabase/schema.sql` and `process-entry` function the repo already has — so
Capture writes real entries and the screens read real tasks/habits/goals. That
requires a small field mapping (the design's `status: "active"` ↔ the schema's
`confirmed`; goals' day-counts ↔ `target_date`; habit `streak`/`cue`).
