# Spontaneous Meetup App — Concept & MVP Plan

A real-time, hyper-local *"I'm here and open"* bulletin board for in-person meetups
that happen **now**, not three weeks from now.

> Working title only. Naming options at the end.

---

## 1. The core insight

People are surrounded by others all day — in the supermarket, at the office in
Espoo, at a worship service, on a bike path — and almost never act on the
quiet thought *"I'd be open to company right now."* Existing apps fix the wrong
problem:

- **Dating apps** are about romance, swiping, and judgement.
- **Events platforms** (Meetup, Facebook Events) are about *planned* things you
  upload in advance and commit to.
- **Messaging** assumes you already know who you'd reach out to.

None of them serve the **impromptu, low-stakes, "who's around right now"** moment.
That gap is the whole product.

**The metaphor:** a post-it on a billboard. Someone writes *"Lunch in Espoo, 12 PM,
who's in?"* Anyone nearby reads it, decides in two seconds, and either joins or
scrolls past. No algorithm, no profile-mining, no commitment.

**Not event-focused.** This is deliberately *softer* than an events tool. The unit
isn't a structured event with tickets and RSVPs — it's a person being briefly,
openly available: *"I'm going for lunch / a bike ride / a walk — come if you want."*

---

## 2. What problem it actually solves

- **Loneliness without a plan.** You don't need to organise anything or wait for a
  scheduled event. *"You're never alone"* — especially valuable in the colder
  months when it's harder to find people outside.
- **Latent willingness goes unused.** Plenty of people would say yes to company but
  would never *initiate*. A two-second toggle lowers the activation energy to almost
  zero on both sides.
- **Discovering your own neighbourhood.** Instead of always meeting the same small
  circle, you reach the people *physically around you* — at the shop, the park, the
  same spot in Espoo.

---

## 3. How it works (user's mental model)

1. **You feel like company.** You're heading to lunch, or just want a walk.
2. **You flip a toggle** next to your name: *available*.
3. **You set how long** it lasts — 1 hour, 2 hours, or custom — and it
   **auto-expires**. It does not stay on, it is not "programmed" to recur, and you
   are never persistently visible.
4. **You set your radius** — how far around you others can see you.
5. **You optionally drop a short post** — *"Lunch 12 PM Espoo,"* *"Bike ride,"*
   *"Anyone doing a tour to Norway?"*
6. **People within radius see you** — your name, your age, and your note — and can
   message you to say *yes*.
7. **The hour ends → you disappear** from the map until you choose to toggle back on.

The recurring example from the brief: *there's a worship service today — you turn on,
within your Espoo radius a few people see it, and 2–3 of them say "I'll join you for
lunch after." A particular spot, a particular time, an impromptu meetup.*

---

## 4. MVP feature set

Keep it sparse. The spontaneity is the point — every extra field is friction.

| Area | In the MVP | Notes |
|------|-----------|-------|
| **Profile** | Name, age, one short "about me" line | No relationship status, no galleries, no résumé. |
| **Availability toggle** | On/off, prominent, one tap | The core gesture of the whole app. |
| **Duration** | 1 hr / 2 hr / custom, **auto-expires** | Never persists. Re-enabling is always a deliberate act. |
| **Visibility radius** | Slider, user-controlled | You decide who can see you; default conservative. |
| **The post / status** | Short free-text note + optional time/place | *"Lunch 12 PM Espoo."* This is the post-it. |
| **Discovery** | See available people/posts within your radius | List first; map optional in v1. |
| **Direct message** | Tap a post → message to say yes | Lightweight 1:1 thread, only while/around the window. |
| **Safety basics** | Report, block, no persistent location | See §5. |

### Explicitly *not* in the MVP
- Relationship status or any dating signal.
- Elaborate profiles, photo galleries, bios.
- Ranking, scoring, gamification, or "popularity."
- Event uploads with tickets/RSVPs (that's the heavier thing we're avoiding).
- Algorithmic feed. Proximity + recency is the only sort.

---

## 5. Safety model — minimal but real

Safety is the **single biggest concern** for this product. The design answer is
**ephemerality instead of surveillance**: the app reveals as little as possible, for
as short a time as possible.

**Built into the core mechanic:**
- **No persistent location tracking between posts.** When your window ends, you vanish
  from the map. The app is not a "where is everyone, always" tracker.
- **Time-boxed visibility.** You're only discoverable during a window *you* opened, for
  a duration *you* chose. This is the structural difference from a tracking app and the
  main reason the safety anxiety is lower than something like a persistent locator.
- **User-controlled radius.** You decide the blast radius of every post.
- **Approximate, not pinpoint, location.** Show "in this area / this neighbourhood,"
  not exact coordinates, until both people choose to share more.

**Lightweight trust layer (small, non-invasive):**
- **Report and block** — always one tap away.
- **A light reputation signal**, e.g. *"X people have met up with this person, no
  reports"* — enough of a signal to feel safer, without ranking or gamifying people.
- **Verified-ish identity options** to consider (phone verification at minimum) without
  turning onboarding into a wall.

**Open safety questions to resolve before launch (see §9).** Meeting strangers in
person carries real risk; the honest framing is *"there are ways to circumvent the
risk,"* not *"there is no risk."* This needs deliberate design, not a disclaimer.

---

## 6. Why time-limited visibility changes everything

This is worth stating plainly because it's the conceptual heart of the design:

- A persistent "share my location" app asks you to be **continuously trackable** — high
  anxiety, easy to abuse, feels like surveillance.
- This app asks you to raise a **temporary "I'm openly here" flag** that you light up
  on purpose and that **burns out on its own**.

Those are fundamentally different things. The toggle + auto-expiry isn't just a feature —
it's what makes the whole concept feel safe and casual enough that people will actually
use it.

---

## 7. Design principles

1. **Spontaneity over planning.** Optimise for the next two hours, never the next two weeks.
2. **Sparse over rich.** Less profile, less friction, less judgement.
3. **Ephemeral by default.** Nothing persists unless the user re-acts.
4. **The user holds the dials.** Duration and radius are always theirs.
5. **Soft, not transactional.** Easygoing company, not a marketplace or a dating funnel.
6. **Proximity is the algorithm.** Who's near + who's recent. No black box.

---

## 8. Roadmap sketch

**Phase 0 — Validate (no code):**
Concierge test in one neighbourhood (e.g. an Espoo community / a worship community) —
a shared channel where people post *"available for lunch, 12 PM"* by hand. Proves the
behaviour before building anything.

**Phase 1 — MVP:**
The §4 feature set. One city/area. Launch into a single real community where density
exists from day one (density is everything for a proximity app).

**Phase 2 — Trust & retention:**
Reputation signal, better reporting, phone verification, light notifications
(*"3 people are available near you right now"*).

**Phase 3 — Light structure (only if pulled):**
Recurring soft posts, interest tags, small group meetups — *added only if users ask*,
never at the cost of the spontaneity.

---

## 9. Open questions

- **Cold-start / density.** A proximity app is useless with no one around. Which single
  community do we seed first so early users always see someone? (A church/worship
  community and an Espoo neighbourhood were both raised as natural candidates.)
- **Safety design.** What's the minimum viable safety layer that's genuinely protective
  (verification, meeting in public, the reputation signal) without killing the casual feel?
- **Identity vs. privacy.** How much do we reveal up front — full name? first name + age?
  approximate vs. exact location, and at which step does more get shared?
- **Messaging scope.** Can anyone in radius DM you, or only respond to a specific post?
  How do we prevent unwanted messages while keeping it open?
- **Abuse / harassment.** Block/report is table stakes — what stops a bad actor from
  re-appearing, and do we need any moderation?
- **Notifications.** How do we nudge availability ("people are around now") without
  becoming a nagging app that pressures people?

---

## 10. Naming directions

The name should signal *spontaneous, present, open, nearby* — not dating, not events.

- Around / Around Now
- Open (as in "I'm open")
- Nearby
- Postit / Pin (the billboard metaphor)
- Here (as in "I'm here")
- Tapaaminen-adjacent / a Finnish-rooted name for the local launch

---

## 11. One-line pitch

> **A post-it on the neighbourhood billboard: flip yourself "available" for an hour,
> drop a note like *"lunch 12 PM, who's in?"*, and meet the people already around you —
> then quietly disappear when the hour's up.**
