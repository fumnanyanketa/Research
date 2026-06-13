# Life OS

A personal "life operating system": record conversations and thoughts with one
tap, get free on-device transcription, and let AI file everything into a single
source of truth with action items, reminders, and daily debriefs.

Full design: [DESIGN.md](./DESIGN.md)

## What's here (Phase 1)

| Path | What it is |
|---|---|
| `app/` | Expo (React Native) app, iPhone + Android. Four tabs: **Today** (goal countdown, key tasks, habits), **Capture** (typed or spoken quick thoughts + full conversation recording, on-device transcription), **Tasks** (review/confirm AI-proposed tasks, star key ones, mark done), **Habits** (daily check-offs with weekly streak). |
| `supabase/schema.sql` | Database: `areas`, `entries`, `tasks` (with priority + key star), `habits` + `habit_logs`, `goals`, `finance_entries`. Seeded with life areas, a language-learning habit, and a September goal. |
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
   supabase secrets set ANTHROPIC_API_KEY=sk-ant-...
   supabase functions deploy process-entry
   ```
   (Get an Anthropic API key at console.anthropic.com.)

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

## Roadmap

- **Phase 2:** push-notification reminders for confirmed tasks, Google Calendar
  sync for dated commitments, nightly debrief + voice journaling, finance UI.
- **Phase 3:** chat over your whole history (semantic search), the strategic
  "top 3 things to do now" query, people pages, weekly review. Optional
  Telegram capture channel and an always-on web dashboard over the same backend.
