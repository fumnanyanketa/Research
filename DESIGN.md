# Life OS — Personal Assistant App Design

A personal "life operating system" mobile app: capture conversations and thoughts
with one tap, have AI understand and file them, and get back action items, daily
debriefs, calendar entries, and reminders.

## Core idea

You talk; the system listens, files, and follows up. Five jobs:

1. **Capture** — record conversations and brain dumps from your phone, one tap.
2. **Understand** — transcribe (with speaker labels) and extract structure with AI.
3. **File** — everything lands in one searchable single source of truth.
4. **Act** — action items become tasks, dated commitments go to the calendar,
   reminders arrive as push notifications.
5. **Reflect & Recall** — nightly debrief of the day; ask questions across your
   entire history.

## 1. Capture (the app)

- One big record button as the home screen; lock-screen widget / iPhone Action
  Button shortcut for true one-tap capture.
- Two modes: **Conversation** (multi-speaker, diarized) and **Brain dump**
  (solo voice note or quick text).
- **Offline-first**: recordings are saved locally first, uploaded when there's
  a connection. Capture must never lose data.
- Optional context tags at stop time: who you were with, where, topic.
- In-app nudge about consent (recording laws vary by jurisdiction; many require
  the other party's consent).

## 2. Understand (the pipeline)

1. **Transcription — free, on-device** — Whisper running on the phone via
   `whisper.rn` (whisper.cpp). No per-minute cost, works offline, audio never
   leaves the device for transcription. Trade-offs accepted for v1: no
   automatic speaker labels (Claude infers speakers from conversation flow
   during extraction) and some on-device processing time after long
   recordings. Paid diarized transcription (Deepgram/AssemblyAI) stays on the
   shelf as an optional upgrade if ever wanted.
2. **Extraction pass (Claude)** — structured JSON output:
   - Summary (2–5 sentences)
   - Action items: `{what, owner (me/them), due date if mentioned, source quote}`
   - Commitments: things I promised others / others promised me
   - Dates & events mentioned
   - Decisions made
   - Insights / ideas worth keeping
   - People present
3. **Review step (human-in-the-loop)** — extracted action items appear in the
   app as proposals: confirm / edit / dismiss in seconds. Only confirmed items
   become tasks and calendar entries. This is the trust-preserving step.

## 3. File (single source of truth)

Database schema (Postgres on Supabase):

- **entries** — every capture: audio ref, transcript, summary, type, timestamp,
  location, tags.
- **tasks** — action items: status, due date, source entry, person it's owed to.
- **people** — lightweight personal CRM: name, what I owe them, what they owe
  me, last interaction, linked entries.
- **events** — dated commitments synced to calendar.
- **embeddings** (pgvector) — semantic search over transcripts and notes for
  the recall feature.

Audio retention is a setting: keep forever / delete after transcription / keep 30 days.

## 4. Act

- Confirmed tasks → task list with due dates and push-notification reminders.
- Dated commitments → Google Calendar via API (later: Apple Calendar via the app).
- Reminder engine: notify at due time, plus smart lead time ("you told Sarah
  you'd send the doc by Friday — it's Thursday evening").

## 5. Reflect & Recall

- **Daily debrief** (scheduled job, e.g. 9pm): summary of the day's entries,
  commitments made, what's due tomorrow, open loops. Delivered as a push
  notification opening a debrief screen.
- **Weekly review**: stale tasks, people you owe, patterns and themes.
- **Recall chat**: a chat screen powered by Claude + semantic search over all
  entries ("what did we decide in the meeting with the landlord?").

## Tech stack

| Piece | Choice | Why |
|---|---|---|
| Mobile app | React Native + Expo (dev client) | One codebase, iPhone + Android; audio, push, widgets supported |
| Backend | Supabase | Postgres + auth + file storage + edge functions + pgvector, solo-dev friendly |
| Transcription | whisper.rn (on-device Whisper) | Free, offline, private; no per-minute API cost |
| AI | Claude API | Extraction, debriefs, recall chat |
| Calendar | Google Calendar API | Reliable cross-platform notifications |
| Push | Expo Notifications | Works on both platforms |

## Robustness checklist

- Offline-first capture; resumable uploads.
- Human confirmation before AI output becomes reminders/calendar entries.
- Deduplication: the same task mentioned in two conversations merges, not duplicates.
- Privacy: encrypted storage, configurable audio retention, no third-party analytics
  on transcript content.
- Async processing with status: "transcribing… → ready" so latency is expected,
  not confusing.
- Everything exportable (it's *your* life data).

## Build phases

- **Phase 1 — Capture & file**: record → transcribe → extract → entries + task
  proposals with confirm/edit. Single-screen app. Useful from day one.
- **Phase 2 — Act & reflect**: reminders, Google Calendar sync, nightly debrief
  notification.
- **Phase 3 — Recall & relationships**: chat over history, people pages, weekly
  review.

## Decisions made

- **Platforms:** both iPhone and Android from day one (single Expo codebase).
- **Source of truth:** Supabase (custom Postgres database).
- **Transcription:** free on-device Whisper (`whisper.rn`); no paid
  transcription APIs. Claude (text-only, pennies per conversation) handles
  extraction, debriefs, and recall.

## Open decisions

- Audio retention default (keep forever vs delete after transcription).
