# Anchor

A personal "life operating system": record conversations and thoughts with one
tap, get free on-device transcription, and let AI file everything into a single
source of truth with action items, reminders, and daily debriefs.

Full design: [DESIGN.md](./DESIGN.md)

## What's here (Phase 1)

| Path | What it is |
|---|---|
| `web/` | **The implemented design** (React + Vite). Light field with dark feature cards, lime accent, Geist type. Renders the mobile app (Today / Capture / **Projects** / Tasks / Habits) and the desktop dashboard (countdowns, habits, calendar, finance pulse, key tasks, the "Brain" of life areas, and the **Projects · Progress** board). Runs on sample data that now **persists to localStorage** (edits survive reloads) until Supabase is configured. Run: `cd web && npm install && npm run dev`. |
| `app/` | Earlier Expo (React Native) prototype, iPhone + Android. Four tabs: **Today**, **Capture** (typed or spoken thoughts + conversation recording, on-device transcription), **Tasks**, **Habits**. Kept for the native capture path; the `web/` app is the current design implementation. |
| `supabase/schema.sql` | Database: `areas`, `entries`, `tasks` (with priority + key star), `habits` + `habit_logs`, `goals`, `finance_entries`, and `projects` (milestones as JSONB). Seeded with life areas, a language-learning habit, and a September goal. |
| `supabase/functions/process-entry/` | Edge function that runs Claude over a transcript and extracts a summary, the life area, people, decisions, insights, and priority-ranked action items (owed-by-you vs owed-to-you). |

Transcription is **free**: Whisper runs on the phone via `whisper.rn` (the model
downloads once on first use, ~60 MB). Only the Claude extraction step uses an
API, and that's text — pennies per conversation.

## Setup

### 1. Supabase (one time)

1. Create a project at [supabase.com](https://supabase.com) (free tier is fine).
2. Run `supabase/schema.sql` in the SQL editor.
3. Deploy the extraction function:
   ```sh
   supabase login
   supabase link --project-ref YOUR_PROJECT_REF
   supabase secrets set GEMINI_API_KEY=...
   supabase functions deploy process-entry
   ```
   (Get a free Gemini API key at aistudio.google.com/apikey.)

### 2. App

```sh
cd app
cp .env.example .env   # fill in your Supabase URL + anon key
npm install
```

`whisper.rn` is a native module, so the app needs a **development build**
(Expo Go won't work):

```sh
# Easiest: EAS cloud build, installable on your phone from a QR code
npx eas build --profile development --platform android   # and/or ios
npx expo start --dev-client
```

(With Android Studio / Xcode installed locally, `npx expo run:android` /
`run:ios` works too.)

### 3. Use it

- **Capture** tab: type a quick thought and hit *Save & file*, or tap *Record*
  to speak it (or to record a real conversation — switch the mode toggle).
  Claude files it into the right life area, summarizes it, and proposes
  priority-ranked tasks you confirm or dismiss.
- **Tasks** tab: review AI proposals, star 3–5 as *key*, mark them done.
- **Today** tab: your key tasks, today's habits, and the countdown to your
  September language goal.
- **Habits** tab: check off daily habits (the 30-min language habit is seeded)
  and see your weekly streak.

## Projects (the Central Command model)

Anchor is the product version of Central Command, so its project-tracking model
now lives in the app:

- **Projects · Progress**: every project is broken into milestone steps, and
  progress is always `steps done / total`, no guesswork. Tick a step and the
  percentage recomputes live. There is a desktop dashboard card and a dedicated
  mobile **Projects** tab.
- **Focus set**: star the projects to work first. Focus drives the Today screen
  strip and a Focus/All filter. Defaults to the time-sensitive ones (high
  priority, due this week).
- **Capture into projects**: on Capture, a note addressed to a project files
  straight onto it. `PuhuScribe: chose the stack` adds a step; a leading `done`
  (`AFAES workspace: done shared the folder`) marks it complete. Anything else
  becomes a proposed task. This is the local stand-in for the AI extraction
  step, so the same habit carries over once the extract function is wired.
- **CRUD**: add or remove projects, add or delete steps, all from the UI.

The project set is seeded from the current Central Command list. When Supabase
is configured it loads from and writes to the `projects` table; until then it
uses sample data persisted in localStorage.

## Roadmap

- **Next (needs your keys):** wire Supabase (URL + anon key) and the Gemini/
  Claude extract function, so capture persists, syncs across devices, and the
  real AI extraction replaces the local routing.
- **Phase 2:** push-notification reminders for confirmed tasks, Google Calendar
  sync for dated commitments, nightly debrief + voice journaling, finance UI.
- **Phase 3:** chat over your whole history (semantic search), the strategic
  "top 3 things to do now" query, people pages, weekly review. Optional
  Telegram capture channel and an always-on web dashboard over the same backend.
