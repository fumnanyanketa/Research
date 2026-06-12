# Life OS

A personal "life operating system": record conversations and thoughts with one
tap, get free on-device transcription, and let AI file everything into a single
source of truth with action items, reminders, and daily debriefs.

Full design: [DESIGN.md](./DESIGN.md)

## What's here (Phase 1)

| Path | What it is |
|---|---|
| `app/` | Expo (React Native) app — record button, live on-device Whisper transcription, review screen for AI-proposed action items. Runs on iPhone and Android. |
| `supabase/schema.sql` | Database: `entries` (every recording/note) and `tasks` (action items). |
| `supabase/functions/process-entry/` | Edge function that runs Claude over a transcript and extracts summary, people, decisions, insights, and action items. |

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

Tap **Record**, have a conversation or dump a thought, tap **Stop**. The
transcript appears live; when you stop, Claude summarizes it and proposes
action items you confirm or dismiss. Confirmed tasks land in the `tasks` table.

## Roadmap

- **Phase 2:** push-notification reminders for confirmed tasks, Google Calendar
  sync for dated commitments, nightly debrief.
- **Phase 3:** chat over your whole history (semantic search), people pages,
  weekly review.
