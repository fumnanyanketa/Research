# Anchor — native app plan (offline Whisper meeting recorder)

## Why native
The web app is great for typing, short voice notes, and reviewing/organizing
anywhere. But **long, continuous meeting recording (1–3 hours)** and **rock-solid
offline voice** are not things a browser can do well:
- Browser speech recognition is built for short dictation; it drops/times out on
  long sessions and varies by browser.
- A PWA is just the web app installed to the home screen — it runs the same
  browser code, so it does **not** add Whisper.

The reliable meeting recorder is a **native app with on-device Whisper**
(`whisper.rn`): records to a local file, transcribes in chunks on the device,
works offline, no upload limits.

## Architecture
- **Same Supabase backend** as the web app (tasks/habits/goals/finance/entries),
  so the native app and the web app show the same data.
- **Same Gemini `process-entry` function** for extraction (text in → tasks out).
- Native adds: long-form audio recording + on-device Whisper transcription, then
  sends the transcript to `process-entry` like the web Capture does.

## Work
1. Port the Anchor design (light field, dark feature cards, lime, Geist) into the
   existing Expo app in `app/` — currently an earlier, plainer UI.
2. Recording + Whisper: record to file (expo-audio), chunk long audio, run
   `whisper.rn` sequentially with progress; assemble transcript.
3. Wire the same Supabase data layer + `process-entry` call.
4. Build & install on the phone via **EAS** (Expo Application Services, free tier).

## What's needed to start
- A free **Expo account** + an EAS access token (so I can produce an installable build).
- **Android:** easiest — EAS produces an APK you install directly. ✅ recommended first target.
- **iOS:** needs a TestFlight build (Apple Developer account, ~$99/yr) — heavier.

## Status
Approved. Web app stays the primary surface for typing/short capture and review;
native app becomes the meeting recorder. Multi-session build.

## Decisions / requirements captured (2026-06-16)
- **Web app is frozen.** No more feature edits on the web; it stays live for
  capture + data entry. All further work happens in the native Android app.
- **Target: Android**, installed via an **EAS APK** (no Apple account needed).
- **Real countdowns.** Goals must count down from a real target date (decrement
  daily), not a static number. (The web's "80 days" was hard-coded sample data.)
- **Full card editing**, not just rename: editing a goal/task/habit must let you
  change the **target date / days-left**, **due date**, **priority**, and area —
  the things actually being tracked.
- **Offline Whisper** for long (1–3 hr) meeting recordings: record to file,
  chunk, transcribe on-device, show progress, then run extraction.

## To start the first installable build I need
- A free **Expo account** → at **expo.dev**, sign up, then **Account → Settings →
  Access Tokens → Create token**. Paste it as `EXPO_TOKEN=...`.
- With that I can run an EAS build and hand back an **APK link** you install
  directly on your Android phone. Same Supabase + Gemini backend as the web app,
  so your data is shared.
