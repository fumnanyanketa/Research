# Anchor — Project Handoff

_Last updated: 2026-06-17. This document is the single source of truth for picking
up work in a fresh Claude instance. Read it top to bottom before doing anything._

## What Anchor is

Anchor is Fumnanya's personal **life operating system / second brain**. You press a
button, talk (or type); the AI transcribes it, documents it, extracts action items /
commitments, produces a daily debrief, and tracks tasks, habits, goals, and finances.
It is meant to be the single source of truth for the user's whole life, running on
their **Android phone**.

Owner / user: Fumnanya (`aiprotocolslab@gmail.com`), Android phone user.

## Current focus (read this first)

We **froze the web app** and are shipping a **native Android app** for rock-solid
**offline Whisper** voice capture of long (1–3 hour) meeting recordings — the killer
feature the web cannot do. All new work goes into `app/`. Do **not** keep editing
`web/` unless explicitly asked.

### Where we are right now

**The app builds and is installed on the user's phone.** First successful EAS build:
`8eaa771a-2dfd-47f8-b338-3c37299df3c5` (profile `preview`, Android APK). APK:
`https://expo.dev/artifacts/eas/6_eAvdPHEtQvT51_4U3rSsfcUOI0d0u5eqmQTdvUaS8.apk`

The user reports **"a lot of bugs"** on the live app and wants to keep iterating in a
fresh instance. The next job is bug-fixing the running app, NOT getting it to build.
Ask the user for a concrete bug list (or have them screen-record) and work through it.

#### How we got the build green (so you don't re-break it)

The EAS **Bundle JavaScript** phase runs `expo export:embed` (production Metro), which
is much stricter than `expo export` (dev). `whisper.rn` v0.6.0 ships a buggy
`package.json` `"exports"` map (`"./*" -> "./lib/module/*"`) that the production
resolver can't follow for the `realtime-transcription` subpaths. Two fixes, both in
commit `ecef733`, both required:

1. **`app/metro.config.js`** — a `resolveRequest` that hard-maps
   `whisper.rn/realtime-transcription*` to the real compiled files under
   `node_modules/whisper.rn/lib/module/realtime-transcription`, bypassing the broken
   exports map. Do NOT delete this file.
2. **`buffer` polyfill** — `whisper.rn` → `safe-buffer` requires Node's `buffer`, absent
   in RN. `buffer` is now a dependency and `global.Buffer` is shimmed at the top of
   `app/index.ts`. Keep both.

`app/src/lib/whisper.ts` imports the canonical `whisper.rn/realtime-transcription`
(the metro resolver handles it). `app/tsconfig.json` has a `paths` block pointing TS at
whisper.rn's `.d.ts` files so `tsc` resolves them.

**To reproduce a JS-bundling failure locally, use the exact EAS command (NOT plain
`expo export`, which is misleadingly lenient):**
```bash
cd app && rm -rf dist && npx expo export:embed --platform android --dev false \
  --entry-file index.ts --bundle-output /tmp/bundle.js --assets-dest /tmp/assets
```
Success = "Android Bundled … (N modules)" + a written /tmp/bundle.js.

The previous failed build (for reference) was `2c64c5f1-1408-4a57-965e-636d32db003c`.

## Repo / branch

- Repo: `fumnanyanketa/research`
- **Work only on branch `claude/ai-personal-assistant-reminders-1otfl5`.** Never push
  elsewhere without explicit permission. Do NOT open a PR unless explicitly asked.
- Commit footer to use: `https://claude.ai/code/session_01Tbc6s29pVdp8AULg8ESJAY`
- Recent commits: `7363914` (whisper fix), `f2cf1e8` (EAS link), `891d4a5` (Anchor
  design port to native), `85708ce` (native build-ready), `b7bb18d`/`064df8f` (plans).

## Architecture — two front-ends, one backend

- `web/` — React + Vite. The deployed Anchor web app. **Frozen.** Live at
  `https://useanchor.vercel.app` (Vercel project "web", team `fumnanyas-projects`,
  deployment protection disabled so it's public). Uses Web Speech API for voice.
- `app/` — Expo React Native (the active native Android app). On-device Whisper for
  voice.
- Both share the same **Supabase** (Postgres + Edge Functions + RLS) backend and the
  same **Google Gemini** free-tier extraction.

### Backend: Supabase

- Project ref: **`sayqnixyixzzkclrxpbx`** (URL `https://sayqnixyixzzkclrxpbx.supabase.co`).
- `supabase/schema.sql` — tables: `areas`, `entries` (conversation/brain_dump/journal),
  `tasks` (owner me/them, priority high/medium/low, status proposed/confirmed/dismissed/
  done, is_key), `habits` + `habit_logs`, `goals` (target_date, status), `finance_entries`
  (income/expense). Seeded with 8 areas, 4 habits, 3 goals, 3 finance income rows. RLS
  enabled with permissive "v1 open access" policies (single-user v1). **Already applied
  to the live project.**
- `supabase/functions/process-entry/index.ts` — Deno edge function. Uses
  `import { GoogleGenAI } from "npm:@google/genai"`, model `gemini-2.5-flash` (free
  tier). Takes `entry_id`, fetches entry + areas, prompts Gemini with JSON response,
  writes summary/area/people/decisions/insights to the entry and inserts proposed
  tasks. Has CORS. **Deployed and smoke-tested working.**

### AI: Google Gemini

- Free tier, model `gemini-2.5-flash`. Chosen because the user did not want to pay for
  the Anthropic API. Key lives ONLY as a Supabase function secret (`GEMINI_API_KEY`),
  never in the repo.

## The native app (`app/`)

Expo SDK 56, React Native 0.85.3, React 19.2.3. **IMPORTANT:** `app/AGENTS.md` says
Expo has changed — read the versioned docs at https://docs.expo.dev/versions/v56.0.0/
before writing native code.

- `app/app.json` — name "Anchor", slug "anchor", `android.package
  "com.fumnanya.anchor"`, versionCode 1, audio permissions (RECORD_AUDIO,
  MODIFY_AUDIO_SETTINGS, FOREGROUND_SERVICE, FOREGROUND_SERVICE_MEDIA_PLAYBACK),
  `extra.eas.projectId "1009f8e8-74f4-49e0-bb84-f5534efa25a2"`, `owner "fumnanya"`,
  expo-audio plugin with mic permission.
- `app/eas.json` — `preview` (Android APK, internal) and `production` profiles, both
  with env `EXPO_PUBLIC_SUPABASE_URL` + `EXPO_PUBLIC_SUPABASE_ANON_KEY` (the anon key
  is public and safe to keep here).
- `app/src/theme.ts` — Anchor design tokens (light field, white cards, dark "feature"
  cards `#15171C`, lime accent `#CDEB45` / ink `#10130A`, 22px radius).
- `app/src/lib/`:
  - `supabase.ts` — client from `EXPO_PUBLIC_SUPABASE_URL/ANON_KEY`.
  - `db.ts` — all data ops (getAreas, tasks CRUD, goals CRUD, habits today + CRUD,
    finance, createEntry, processEntry via `supabase.functions.invoke`, todayStr).
  - `types.ts` — shared types.
  - `whisper.ts` — on-device Whisper (whisper.rn `RealtimeTranscriber` +
    `AudioPcmStreamAdapter`). **This is the file with the fixed import.** Downloads
    `ggml-base-q5_1.bin` once to document dir, then transcribes offline.
  - `useRecorder.ts` — recorder hook wrapping whisper.ts.
- `app/src/components/` — `EditModal` (reusable Android-safe Modal+TextInput),
  `TaskCard`, `HabitRow`.
- `app/src/screens/` — `TodayScreen` (dark countdown cards with **real** date math,
  key tasks, habits progress + streaks, finance pulse + log income/expense),
  `CaptureScreen` (segmented modes, File-it, offline recorder, Gemini extraction),
  `TasksScreen` (proposed/active/done + confirm/dismiss/done/star + edit/delete),
  `HabitsScreen` (add/edit/delete + streaks).
- `app/App.tsx` — 4-tab shell (Today / Capture / Tasks / Habits), dark tab bar with
  lime active pill.

### Requirements the native app must satisfy (from the user)

1. **Real date-based countdowns** (the web showed a stuck sample "80 days"; native uses
   real `daysUntil(target_date)`).
2. **Full card editing** — change name, days-left/target date, due date, priority — not
   just rename.
3. Installable **Android APK**.
4. **Offline Whisper** for long (1–3 hr) recordings.
5. Finance must be populatable.

## How to build / check builds (EAS)

```bash
cd /home/user/Research/app
# Trigger a build (no-wait so it queues and returns):
EXPO_TOKEN=<token> npx eas-cli@latest build --platform android --profile preview --non-interactive --no-wait
# Check status / get error + artifact URL:
EXPO_TOKEN=<token> npx eas-cli@latest build:view <BUILD_ID> --json
```

- EAS account: `@fumnanya`, project `anchor`, projectId
  `1009f8e8-74f4-49e0-bb84-f5534efa25a2`. Android keystore was auto-generated on the
  EAS server (credential `Build Credentials wqd9BsnChe`).
- When a build succeeds, `artifacts.applicationArchiveUrl` (or buildArtifacts) in the
  JSON is the **APK download link** to send to the user for sideloading.
- To diagnose a failure: `build:view <id> --json` gives `error.message` and a
  `logFiles[0]` URL. The remote log is a non-standard binary format and is hard to read
  directly — the reliable way to reproduce a **Bundle JavaScript** failure is locally
  with the `expo export:embed` command in "Local reproduction commands" below. Do NOT
  trust plain `npx expo export` — its dev resolver is more lenient than EAS's production
  `export:embed` and will hide real failures.

## Local reproduction commands

```bash
cd /home/user/Research/app
npx tsc --noEmit                          # typecheck (must be clean)
# Reproduce the EXACT EAS "Bundle JavaScript" phase (production resolver):
rm -rf dist && npx expo export:embed --platform android --dev false \
  --entry-file index.ts --bundle-output /tmp/bundle.js --assets-dest /tmp/assets
```

## Iteration workflow — how to fix bugs now that the app is live (IMPORTANT)

There are two kinds of changes, with very different loops:

**A. JS / UI / logic changes (the vast majority of bug fixes)** — screens, styles,
`db.ts`, store logic, prompts, etc. These do **NOT** require a full native rebuild.
The fastest path is **EAS Update (OTA)**: publish a new JS bundle that the installed
APK downloads on next launch. Seconds-to-minutes, no reinstall, no APK.

> ⚠️ **One-time setup required before OTA works.** The current `preview` APK
> (`8eaa771a`) was built **without** `expo-updates` configured, so it will NOT pick up
> OTA updates yet. To enable the fast loop, do this once:
> 1. `cd app && npx expo install expo-updates`
> 2. Add a `channel` to the `preview` profile in `eas.json` (e.g. `"channel": "preview"`)
>    and make sure `runtimeVersion` is set in `app.json` (policy `appVersion` or
>    `fingerprint`).
> 3. Do **one** more full `eas build --profile preview` and reinstall that APK on the
>    phone. From then on, `eas update --branch preview -m "fix X"` ships JS fixes OTA.
>
> Until that setup is done, **every** change still requires a full rebuild + reinstall
> (below). Strongly recommend wiring up `expo-updates` early so bug-fixing isn't gated
> on the build queue.

**B. Native changes** — adding/removing a native module, changing Android permissions,
SDK/`app.json` native config, new config plugins. These **require a full EAS build**
(the "queuing thing") and a fresh APK install. Same command as before:
```bash
EXPO_TOKEN=<token> npx eas-cli@latest build --platform android --profile preview --non-interactive --no-wait
```
Builds take ~5–15 min in the queue; poll with `build:view <id> --json`.

**The remote-container catch:** This Claude runs in an ephemeral cloud container, so the
classic local loop (`expo start --dev-client` + Metro hot-reload over USB/LAN to the
phone) is **not** practical — the container can't reach the user's physical phone. So
the realistic loops here are: **OTA via `eas update`** (fast, once expo-updates is set
up) for JS, and **full `eas build`** for native. Always verify changes locally first
with `npx tsc --noEmit` and the `export:embed` command above before publishing.

**Backend changes** (Supabase schema / edge function) deploy independently of the app
and take effect immediately for both front-ends — no app rebuild needed.

## Credentials & security (do NOT commit any of these)

- Tokens/keys must stay OUT of committed files and out of logs (never echo them).
- The Supabase **anon key** and project URL are public and intentionally placed in
  `eas.json` and the web build — safe.
- `SUPABASE_TOKEN` (sbp_…) — setup/deploys only; user may revoke.
- `GEMINI_API_KEY` — lives only as a Supabase function secret.
- `EXPO_TOKEN` — for EAS builds. `VERCEL_TOKEN` — for web deploys.
- `.vercel/`, `supabase/.temp/`, and any keystore/credentials files are gitignored and
  must not be committed.
- Do NOT put the model identifier in commits/PRs/code — chat replies only.
- The actual secret values from this session are NOT written here on purpose. The user
  has them and provided them inline before; ask the user to re-paste any token you need
  (EXPO_TOKEN for builds, etc.). They were last provided in the prior conversation.

## Working style the user asked for

- "Stop breaking tasks you can just do at once." Do the full job in one pass; don't
  ask for confirmation on things you can just do or check.
- Build the working app with the polished Anchor UI; deliver an installable APK.

## Immediate next steps

The build is green and installed. The job now is **fixing bugs on the live app**.

1. Ask the user for the concrete bug list (they said "a lot of bugs"). Get specifics:
   which screen, what happened vs. expected, ideally a screenshot/recording.
2. **Set up EAS Update / `expo-updates` early** (see "Iteration workflow" above) so JS
   bug fixes ship OTA in seconds instead of going through the full build queue + reinstall
   every time. This is the single biggest unblock for fast iteration.
3. Triage: most bugs will be JS/UI (fix → `tsc` → `export:embed` to verify → OTA). Only
   native/permission/module changes need a full `eas build`.
4. Likely early suspects to verify on a real device: first-run Whisper model download
   (~60 MB, needs network + mic permission), transcription quality on a real recording,
   countdowns/finance reading correctly from Supabase, edit/delete flows.
