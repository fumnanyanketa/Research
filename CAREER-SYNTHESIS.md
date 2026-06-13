# What 64 AI Voices Actually Say About Your Career (v3 — grounded in the full transcripts)

This version is built by reading the **full verbatim transcripts** — 137 files, ~1.76M words, 64
people, two long-form appearances each — not the news-summary digests. Eight parallel passes read
every transcript and pulled the career/skills signal with quotes and file citations. Where a quote
is cited to `transcripts/<name>/...`, that's the primary source on this branch.

Compiled 2026-06-13. Horizon deliberately capped at **3–6 months** (per your point: past that,
nobody — including these people — actually knows what "intelligence" will be).

---

## 0. A data-quality finding you should act on

The transcript fetcher's title/alias matching produced **many misattributions** — folders that
don't contain the named person, mostly in the `futures-*` files. Confirmed wrong speaker in at least:
`jan-leike` (→ Ilya), `jared-kaplan` (→ Jeff Kaplan the Overwatch designer + a Cognition panel),
`john-schulman` (→ Verizon CEO + a Jensen keynote), `jakub-pachocki/futures` (→ Hassabis),
`aravind-srinivas` (→ Balaji Srinivasan + Aishwarya Srinivasan), `alexandr-wang/futures` (→ Raschka/Lambert),
`dylan-patel/futures` (→ Jeetu Patel, Cisco), `chris-olah/futures`, `dwarkesh/futures` (→ Elon),
`mira-murati/futures` (→ Sundar Pichai), `noam-shazeer/futures` (→ Dario), `noam-brown/futures` (→ No Priors hosts),
`michael-truell/futures` (→ Dan Shipper), `larry-ellison/futures` (→ Elon), `masayoshi-son` (both),
`liang-wenfeng` (both), `mark-chen` (both), `garry-tan` (both → Dwarkesh solo + Jessica Fain),
`vinod-khosla` (→ Keith Rabois), `sam-harris` (both → Kamala Harris politics + a Jeremie Harris panel),
`reid-hoffman/...` (→ All-In), `sam-altman/2026-01-22` (→ 20VC), `sholto-douglas/futures`, plus several
third-party "explainer" videos. **Fix: add disambiguation (channel + full-name + role) to the alias
matcher**, and re-fetch the affected slugs. Ironically, several mislabeled files held the *best* career
content (Balaji, Aishwarya, Dan Shipper, Keith Rabois, Jeetu Patel, Jessica Fain) — attributed correctly below.

## 1. The overwhelming consensus — "move one level up"

The single loudest, most-repeated message across the entire corpus: **as execution gets cheap, your
value moves up the stack from *doing* to *deciding, directing, and verifying.*** This is not one camp;
it's nearly everyone, including people who agree on nothing else:

- Karpathy: *"The things that agents can't do is your job now."* (`transcripts/andrej-karpathy/futures-2026-03-20-kwSVtQ7dziU.md`)
- Cat Wu: *"As code becomes much cheaper to write, the thing that becomes more valuable is deciding what to write."* (`transcripts/cat-wu/2026-04-23-PplmzlgE0kg.md`)
- LeCun: *"Humans now go one level up in the abstraction hierarchy and our [role] is to decide what to build."* (`transcripts/yann-lecun/2026-05-15-ngBraLDqzdI.md`)
- Keith Rabois: *"The skill is more like being a CEO now — what are we building and why?"* (`transcripts/vinod-khosla/2026-04-12-xCd9ykretlg.md`)
- Nadella: *"Golden age for idea people."* (`transcripts/swyx/futures-2026-06-03-cFNI2FORAc0.md`)
- Michael Truell: workers are *"becoming agent managers… delegating and managing all of these agents working in parallel."* (`transcripts/michael-truell/2026-05-12-8h9j2rskP14.md`)
- Pachocki: the skill set shifts *"towards this more general vision setting."* (`transcripts/jakub-pachocki/2026-04-09-vK1qEF3a3WM.md`)
- Noam Brown: *"The people that will be most successful will be the people that complement the AI models really well."* (`transcripts/noam-brown/2026-06-04-h4ZguzEMKAU.md`)
- George Hotz: *"You are a senior who's reviewing junior dev code."* (`transcripts/george-hotz/2026-02-03-erBX3gTZqJI.md`)

## 2. What gets automated first — the verifiability rule

Karpathy, Chollet, Sholto Douglas, Trenton Bricken, and Hassabis independently give the same rule:
**work with an automatic, checkable reward signal (code, math, tests) gets automated fastest.** Front-end
and single-file coding, syntax recall, boilerplate, translation, first-draft writing, routine analysis,
admin, call-center, and document review are named repeatedly as already-eroding. Chollet: *"the more
expertise you have… the better you're able to leverage these tools"* — capability follows verifiability,
so the jagged frontier is superhuman at the verifiable and weak at the fuzzy.

## 3. What stays scarce — four durable edges

1. **Taste / judgment / "the right question."** Hassabis ("the soul of a project"), Cat Wu, Rauch, Noam Brown ("research taste"), Dan Shipper, Tegmark (*"what employers pay most for is judgment… taste"* — `transcripts/max-tegmark/futures-2026-03-20-KF_uNAxPFFA.md`).
2. **Verification / knowing what's safe to ship.** Balaji Srinivasan: *"AI reduces the cost of generation but increases the cost of verification"* (`transcripts/aravind-srinivas/2026-04-07-oheUsh7VtKY.md`); Jeremie Harris cross-checks one model against another; Willison: turning *"fuzzy human requirements into actual working software."*
3. **The relational / human-chosen edge.** Yampolskiy: *"Jobs where I choose to hire a human. If I don't care who does it, it gets automated"* (`transcripts/roman-yampolskiy/2026-04-17-00RHph_eok4.md`); Altman: people *"will significantly prefer the human doctor"* even when the AI is better; Bengio: *"the human touch is going to take more and more value"*; the Dwarkesh AGI-economics episode's "relational sector."
4. **The physical world.** Dario and Demis both note robotics lags cognition by years; Dylan Patel and Jensen point to the trades and power/chip buildout as the bottleneck (see §5).

## 4. The central tension you must resolve: *adopt aggressively* vs *don't de-skill*

This is the most useful thing the long-form transcripts surface that the digests miss — a real, unresolved
fault line:

- **Adopt now, the cost of waiting compounds:** Nadella — *"Skilling is not mystical. It's just by doing."* (`transcripts/satya-nadella/futures-2026-01-21-5nCbHsCG334.md`); swyx — *"the opportunity cost of waiting has increased… if you wait you will necessarily choose to be behind."* (`transcripts/swyx/2026-02-20-kQqrMNviM9U.md`); Dan Shipper — *"the only thing you need to do is ride the models."*; Scott Wu — *"we have to go learn how to do this right now."*; Ray Kurzweil — *"you'll be replaced by someone who knows how to use AI."*
- **But guard your mastery — AI can quietly de-skill you:** Jeremy Howard — *"As AI gets better, it's more and more important that your skills are growing faster than the AI skills,"* and bluntly, *"the people getting you to use AI don't care about your autonomy and mastery. They care about your outputs."* (`transcripts/jeremy-howard/futures-2026-02-01-LrFbxIvsipw.md`); George Hotz cites a study where the AI-assisted group was no faster and understood their work *less*; Tegmark warns of "cognitive debt."

**The resolution (my read):** use AI as an *amplifier and a tutor*, not a crutch. Marc Andreessen
nails the move — *"people who really want to improve themselves… should be spending every spare hour…
talking to an AI being like, 'train me up'"* (`transcripts/marc-andreessen/futures-2026-01-29-87Pm0SGTtN8.md`)
— and insists that to be one of the best you still *"understand this thing all the way down the stack"*
so you can judge what the bots produce. LeCun is the sharpest contrarian here: *"the idea that we don't
need to study anymore… is completely false… we're going to have to study more."* Adopt the tools daily,
**and** keep doing hard things yourself often enough that your judgment stays real.

## 5. The genuine disagreements (so you don't over-index on any one guru)

- **Is the job apocalypse real?** *Reassurance camp* — "tasks, not jobs": Andreessen (*"task loss… the job persists longer than the individual tasks"*), Jensen (*"the job of a radiologist is patient care; the task is to read a scan"*), Suleyman (*"I said tasks… that does not mean jobs"*), Zuckerberg (*"take away 90% of the work and that leads you to want more people not less"*), Dan Shipper (*"the AI job apocalypse is not really a thing"*), Willison (record-high open eng roles). *Disruption camp*: Kokotajlo (*"whatever new jobs you're imagining, AGI could do those too"* — `transcripts/daniel-kokotajlo/futures-2025-12-18-CkspCK5mGHA.md`), Yampolskiy (99% automatable ~2030), Hinton (call centers gone; use the *elastic-vs-non-elastic market* test), Dario (*"whole careers… that may not be present"*; candidly *"I'm not sure"* what to recommend).
- **The blue-collar inversion (a strong, repeated, under-covered point):** knowledge work may be the *more* exposed category, and the durable, well-paid near-term opportunity is **physical**. Jensen tells graduates the trades are *"your time"* (six-figure electrician/plumber jobs); Dylan Patel, the hardware analyst, is specific: electrician wages *"double or triple,"* the bottleneck is power, memory (HBM/DRAM), and fabs, not code (`transcripts/dylan-patel/2026-03-13-mDG_Hx3BSUE.md`); Bengio echoes Hinton's *"be a plumber."*
- **Reject the premise entirely:** Zvi Mowshowitz calls "skill up to escape the underclass" *"hopium"* and advises building a financial buffer instead; Kokotajlo's call to action is civic/political, not vocational; Bengio's advice for his grandson is *"work on the beautiful human being that you can become."*

## 6. The recommendation

The best path is a **posture, not a title: be the human who can deploy AI at scale against a domain
where trust, physical reality, or accountability keeps a human in the loop** — and who keeps their own
judgment sharp enough to verify the machines. Ranked by robustness:

- **Tier A:** (a) **AI-leveraged builder in a high-trust/high-stakes domain** — health/bio, law, finance, energy, security (Daniela/Dario's vertical-app thesis; Suleyman's healthcare bet; Hassabis's "AlphaFold moment" for science). (b) **Agent orchestrator / "agent manager" / forward-deployed engineer** who owns judgment, taste, and verification (Truell, Hoffman, Nadella, Shipper). (c) **The physical-world + AI bridge** — energy, data centers, robotics, advanced trades (Jensen, Dylan Patel).
- **Tier B:** **AI safety / interpretability / governance** — repeatedly flagged as radically undersupplied (Kokotajlo: ~700 people, wants 100–500; Bricken: interpretability is "low-hanging fruit"; Sholto, Tegmark, Bengio, Dario). **Performance/kernel engineering** (CUDA/TPU/Trainium) — Sholto/Bricken: a clean implementation gives *"a pretty high likelihood you'll get a job offer."* **The domain expert who becomes their org's AI-translation layer.**
- **Tier C — not as a sole bet:** pure execution knowledge work with no physical, relational, or accountability moat — the verifiable middle being eaten first (and where Stuart Russell notes CS-grad unemployment is now high).

## 7. The 3–6 month plan (transcript-sourced tactics + real links)

Assume ~6–10 focused hours/week. The sequence matters more than the pace.

**Month 1 — get genuinely agent-fluent by *doing* (this is the universal advice).**
- Use an agent daily on your real work; learn to direct and verify, not chat. *"Skilling is just by doing"* (Nadella); *"it takes a lot of practice"* (Willison).
- Read [Anthropic — Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) and skim the [Claude Agent SDK overview](https://code.claude.com/docs/en/agent-sdk/overview). Internalize the loop: **gather context → act → verify → repeat.**
- Spend a slice of every session getting the model to **train you** (Andreessen): after it unblocks you, ask "what could I have said to avoid this?"

**Months 2–3 — build orchestration + the verification habit.**
- Take [Andrew Ng's Agentic AI course](https://learn.deeplearning.ai/courses/agentic-ai/information): the four patterns (reflection, tool use, planning, multi-agent) transfer everywhere. Balance building with concepts (Ng: pure-builders miss fundamentals; pure-students can't apply them).
- Adopt Willison's highest-leverage habit: **red/green TDD with agents** ("the most important thing"), hoard reusable tools, start from thin templates so agents mirror your style.
- Learn to **write evals** — under-appreciated; *"just 10 good ones help"* (Cat Wu); Nadella: build *"your harness, your evals, your tools, your context."*
- **Ship one real agentic project** end-to-end — build it with agents, deploy it, secure it (Karpathy's literal hiring test) — and push any automation to **100% reliability** (Cat Wu: *"there's not much value in a 95% automation"*). Make it something you actually use daily.
- Want the internals (so you can verify, not just vibe)? [Karpathy's "Zero to Hero" + nanochat](https://www.youtube.com/@AndrejKarpathy). Aishwarya Srinivasan's AI-PM roadmap recommends exactly this plus [DeepLearning.AI](https://www.deeplearning.ai/) short courses.

**Months 4–6 — pick ONE anchor and go deep; build agency in public.**
- Decide your lane using two filters: **Hinton's elastic-vs-non-elastic market test** (does cheaper service expand demand and keep humans in the relational loop?) and the **verifiability rule** (the less auto-checkable, the safer for now).
- **Builder / AI-engineer:** follow [the AI Engineer community](https://www.ai.engineer/about) and [Latent Space](https://www.latent.space/); be the non-fungible "superpowered individual" — deep in one of {coder, designer, PM}, AI-covered in the other two (Andreessen). Aim at solo/tiny-team ventures ("an explosion in small businesses" — Scott Wu; ~$1M/person teams — swyx).
- **Safety / interpretability:** start [80,000 Hours' AI-safety career review](https://80000hours.org/career-reviews/ai-safety-researcher/), then BlueDot's free *AI Safety Fundamentals* and Neel Nanda's TransformerLens/ARENA exercises. ([Neel Nanda's path](https://80000hours.org/stories/neel-nanda/).)
- **Physical / infra:** the data-center buildout has a structural shortage of six-figure trade and power roles ([CNBC](https://www.cnbc.com/2026/03/18/ai-data-center-buildout-jobs-salary-skilled-traders-worker-shortage.html)).
- **Domain expert + AI:** become the trusted person in your field who wields the tools and signs off on the output.
- **Throughout:** "invest in your own agency" (Willison); build a recognizable public presence *"before AI is better than you"* (Yampolskiy); shed sunk-cost workflows (Sholto: *"get rid of the sunk cost of your previous workflows"*); and keep growing your skills faster than the models (Jeremy Howard).

## 8. On what you've already built

This research system — and now this transcript corpus — *is* a Tier-A skill in action: AI-leveraged
synthesis and verification in a fast-moving domain. The misattribution finding above is exactly the
kind of judgment layer that stays scarce: the machine fetched 137 files; a human (with agents) caught
that a quarter of them were the wrong person. Keep this system live, fix the matcher, and let it be
your edge.

---

### Link appendix
- Anthropic agents: https://www.anthropic.com/research/building-effective-agents · https://code.claude.com/docs/en/agent-sdk/overview · https://www.anthropic.com/learn/build-with-claude
- Andrew Ng Agentic AI course: https://learn.deeplearning.ai/courses/agentic-ai/information · https://www.deeplearning.ai/
- Karpathy: https://www.youtube.com/@AndrejKarpathy · https://github.com/karpathy/nanochat · AI Ascent 2026: https://www.youtube.com/watch?v=96jN2OCOfLs
- swyx / AI Engineer: https://www.latent.space/p/ai-engineer · https://www.ai.engineer/about · https://www.latent.space/
- AGI economics (what stays scarce): https://www.dwarkesh.com/p/alex-imas-phil-trammell
- AI safety: https://80000hours.org/career-reviews/ai-safety-researcher/ · https://80000hours.org/stories/neel-nanda/
- Trades / data-center buildout: https://www.cnbc.com/2026/03/18/ai-data-center-buildout-jobs-salary-skilled-traders-worker-shortage.html
- (Primary transcripts: `transcripts/<name>/*.md` on this branch.)
