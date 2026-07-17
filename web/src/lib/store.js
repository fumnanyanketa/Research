/* Anchor store — live data from Supabase, mapped to the UI shapes the
   components expect. Falls back to in-memory sample data when Supabase is not
   configured, so the app always renders. */
import { useEffect, useMemo, useState } from "react";
import { supabase, isConfigured } from "./supabase.js";

export const USER_NAME = "Fumnanya";

/* ---------- fallback sample data (UI shape) ---------- */
const SAMPLE_TASKS = [
  { id: "t1", title: "Send the June investor update", status: "active", priority: "red", key: true, owe: "by", person: "Lin", due: "Jun 15", area: "AI Business" },
  { id: "t2", title: "Edit + deliver the Hale wedding gallery", status: "active", priority: "amber", key: true, owe: "by", person: "the Hales", due: "Jun 18", area: "Photography" },
  { id: "t3", title: "Reply to Elena before tonight", status: "active", priority: "amber", key: false, owe: "by", person: "Elena", due: "Today", area: "Language" },
  { id: "t4", title: "Sign off the contractor draft", status: "active", priority: "grey", key: false, owe: "to", person: "Marcus", due: "Jun 20", area: "Day Job" },
  { id: "p1", title: "Draft the Q3 product roadmap", status: "proposed", priority: "red", area: "AI Business" },
  { id: "p2", title: "Book the studio for Saturday's shoot", status: "proposed", priority: "amber", area: "Photography" },
  { id: "d1", title: "Ship the onboarding email flow", status: "done", area: "AI Business" },
  { id: "d2", title: "Back up Friday's RAW files", status: "done", area: "Photography" },
];
const SAMPLE_HABITS = [
  { id: "h1", label: "Spanish · 20 min", cue: "After coffee", done: true, streak: 5 },
  { id: "h2", label: "Train · strength", cue: "Midday", done: true, streak: 4 },
  { id: "h3", label: "Journal", cue: "Wind-down", done: false, streak: 6 },
  { id: "h4", label: "Read · 10 pages", cue: "Before bed", done: false, streak: 3 },
];
const SAMPLE_AREAS = [
  { name: "AI Business", icon: "biz" }, { name: "Photography", icon: "camera" },
  { name: "Day Job", icon: "job" }, { name: "Money", icon: "money" },
  { name: "Language", icon: "lang" }, { name: "Body & Health", icon: "body" },
  { name: "Mind & Journal", icon: "mind" }, { name: "Personal", icon: "user" },
];
const SAMPLE_FINANCE = [
  { label: "Day job", value: 4200, color: "#CDEB45" },
  { label: "Photography", value: 1850, color: "#849A35" },
  { label: "Clients", value: 3400, color: "#4A4F58" },
];
const SAMPLE_GOALS = [
  { id: "g1", short: "SEP 1", icon: "lang", title: "Strong language progress before school resumes", remaining: 80, total: 100, elapsed: 20 },
  { id: "g2", short: "BETA", icon: "biz", title: "Ship the AI product public beta", remaining: 32, total: 60, elapsed: 28 },
  { id: "g3", short: "DELIVERY", icon: "camera", title: "Deliver the Hale wedding album", remaining: 14, total: 30, elapsed: 16 },
];
const SAMPLE_PROJECTS = [
  { id: "atlas-os", name: "Atlas OS", priority: "high", urgency: "this-month", next: "Sprint to a full WORKING Atlas by Jul 31: build it end-to-end with AI (orchestrator + Cortex + all agents running, model-agnostic, demoable). Then reverse-engineer it to learn each part; deploy/harden/self-improve come after", milestones: [{ text: "Give Atlas its own repo and move the design docs into it", done: false }, { text: "Decide the build approach and the model-agnostic architecture: a provider-abstraction layer so Atlas can run on any model (Claude, GPT, Gemini, DeepSeek, etc.), plus whether to build the agent loop yourself or use an existing harness", done: false }, { text: "Design the memory model: how Cortex stores shared state and how agents read and write it", done: false }, { text: "Build the Cortex shared memory layer", done: false }, { text: "Build the Atlas orchestrator (the loop that routes work to the agents)", done: false }, { text: "Wire the first agent end-to-end through the orchestrator and Cortex (first working slice)", done: false }, { text: "Build the remaining agents (Scout, Forge, Pulse, Herald, Warden)", done: false }, { text: "Build the tools the agents use", done: false }, { text: "Build the evals harness (measure quality and reliability), run across providers to keep it model-agnostic", done: false }, { text: "Deploy v1 (get it running live)", done: false }, { text: "Add the self-improvement loop (agents improve from evals and memory)", done: false }, { text: "Harden and iterate (observability, reliability, the flywheel actually running)", done: false }] },
  { id: "afaes-workspace", name: "AFAES workspace", priority: "high", urgency: "this-week", next: "Share the folder with the volunteers' Google accounts at the right access level, then add the starter content they need", milestones: [{ text: "Decide the folder structure: the sections/subfolders volunteers need", done: true }, { text: "Organize the existing Drive folder into that structure", done: true }, { text: "Set sharing and permissions: share with volunteers' Google accounts at the right access level (least-privilege)", done: false }, { text: "Add the starter content and templates volunteers need", done: false }, { text: "Write a short \"how to use this folder\" note", done: true }, { text: "Share it with volunteers and confirm they can access what they need", done: false }] },
  { id: "ai-literacy-curriculum", name: "AI literacy curriculum", priority: "high", urgency: "this-week", next: "Finish and adapt the curriculum (complete the 3 levels for the AFAES audience), then shape it into per-session plans for the hybrid workshops", milestones: [{ text: "Finish and adapt the curriculum itself: complete the 3 levels, fill gaps, adapt to the AFAES audience, lock the monthly framing and cadence", done: false }, { text: "Shape it into per-session plans (outcomes, hands-on exercises, materials)", done: false }, { text: "Lock format and logistics with AFAES (hybrid setup, cohort size, number/length of sessions, roles, dates)", done: false }, { text: "Build the facilitator kit (slides, handouts, exercises, between-session tasks, hybrid tech)", done: false }, { text: "Set up recruitment and intake (sign-up, screening, referral through AFAES)", done: false }, { text: "Set up measurement (pre/post survey, attendance, one behavioral \"did they use it\" metric)", done: false }, { text: "Run the pilot cohort (first full hybrid workshop series, end to end)", done: false }, { text: "Review the pilot and revise (what worked, what to fix)", done: false }, { text: "Make it repeatable (facilitator guide, reusable materials so it can be rerun)", done: false }, { text: "Secure funding and partnerships (identify funders, apply, formalize the AFAES partnership)", done: false }] },
  { id: "ai-nativity-consulting", name: "AI Nativity · Consulting", priority: "high", urgency: "this-week", next: "Map out everything needed to start the consulting business, then finish the Startiraha application and prep the TE meeting", milestones: [{ text: "Initial TE office meeting held", done: true }, { text: "Contacted Business Helsinki (interest email sent; they asked for the business plan + financials)", done: true }, { text: "Define the consulting offering (services, niche, target clients, positioning, pricing)", done: false }, { text: "Draft the business plan (what Business Helsinki asked for)", done: false }, { text: "Draft the financials (profitability calculation, startup budget, sales forecast)", done: false }, { text: "Submit the business plan + financials to Business Helsinki", done: false }, { text: "Attend the 90-minute Business Helsinki meeting (booked after you submit)", done: false }, { text: "Submit the Startiraha application", done: false }, { text: "Register the toiminimi (Y-tunnus via YTJ/PRH + tax registers: ennakkovero, VAT if needed)", done: false }, { text: "Sort YEL entrepreneur's pension insurance", done: false }, { text: "Startiraha approved and business registered (funded and operating)", done: false }] },
  { id: "anchor", name: "Anchor", priority: "high", urgency: "this-month", next: "Lock the v1 scope (Anchor is Central Command productized), choose web-first or native-first for this push, then split Anchor into its own repo and wire the web app to Supabase", milestones: [{ text: "Lock the v1 scope: Anchor is Central Command productized. Define the one core loop (capture, extract, track, remind) and exactly what ships in v1", done: false }, { text: "Choose the platform for this push (web-first or native-first) and the model-agnostic LLM layer for extraction", done: false }, { text: "Split Anchor into its own repo with a clean main branch (out of the research repo)", done: false }, { text: "Bring over the Central Command model: projects, milestones and progress, merged with tasks, reminders, habits and finances into one Supabase source of truth", done: false }, { text: "Wire the app to Supabase for real (replace the in-memory sample data)", done: false }, { text: "Build the dashboard from the Command Board prototype (focus view, progress, approve updates) as the home screen", done: false }, { text: "Build the capture input: voice and text in, on-device Whisper transcribe, LLM extracts tasks, steps and updates into the source of truth", done: false }, { text: "Build the reminder and notification engine (daily focus plus nudges), replacing the Central Command email routines", done: false }, { text: "Triage and fix the native-build bugs into a real list, and stabilize a working build", done: false }, { text: "Test end-to-end on the owner's phone: capture a real day and watch it land on the dashboard", done: false }, { text: "Ship v1: installed and used daily as the real system", done: false }] },
  { id: "knowledge-base", name: "Knowledge base", priority: "medium", urgency: "this-month", next: "Finish building the knowledge base: merge claude/skilljar-study-plan-1jywco so the real content is canonical, then do one real INGEST", milestones: [{ text: "Merge the `skilljar-study-plan` branch into the default branch so the real content is canonical", done: false }, { text: "Delete the redundant `optimistic-thompson` branch", done: false }, { text: "Set a clean canonical default branch (optionally rename to `main`)", done: false }, { text: "One test run of ingest/query/lint to confirm the system works end-to-end", done: false }, { text: "Fill the 10 blank course-note templates with real content", done: false }, { text: "Do one real INGEST of something you care about (first seed beyond the courses)", done: false }, { text: "Set up the feeding workflow: on-demand ingest, a regular habit, and a first bit of automation", done: false }] },
  { id: "language-app-jsmastery", name: "Language app (JS Mastery)", priority: "medium", urgency: "this-month", next: "Finish the remaining tutorial sections, get it running end-to-end, then write up the engineering lessons for PuhuScribe 3", milestones: [{ text: "Project and toolchain set up from the tutorial", done: true }, { text: "Core features built (main screens, navigation, state)", done: true }, { text: "Data/content and secondary features built", done: true }, { text: "Finish the remaining tutorial sections to the end", done: false }, { text: "App runs end-to-end: build passes, works locally, quick test", done: false }, { text: "Write up the engineering lessons that carry into the PuhuScribe 3 rebuild", done: false }] },
  { id: "puhuscribe", name: "PuhuScribe 3", priority: "medium", urgency: "this-month", next: "Start the PuhuScribe 3 rebuild: lock v3 scope + the monetization decision and capture v2's lessons, then choose the architecture and stack", milestones: [{ text: "Lock v3 scope + the monetization decision, and capture v2's lessons (what to keep, what to fix)", done: false }, { text: "Choose the v3 architecture and stack (apply the JS Mastery engineering approach)", done: false }, { text: "Design the data model and content pipeline (reuse the FSRS engine and content vs rebuild)", done: false }, { text: "Stand up the v3 skeleton: repo, toolchain, auth, CI, deploy pipeline", done: false }, { text: "Rebuild the core learning loop end-to-end (acquire, schedule, review)", done: false }, { text: "Rebuild the supporting features (vocab/sentence banks, grammar, practice, AI layer, TTS)", done: false }, { text: "Port the content and data from v2", done: false }, { text: "Add monetization (the missing pillar: paywall / subscription)", done: false }, { text: "v2 housekeeping: salvage GROWTH-ENGINE.md, delete the 9 stale claude/* branches, apply the puhekieli corrections", done: false }, { text: "Test end-to-end and harden (QA, fix bugs)", done: false }, { text: "Launch PuhuScribe 3 (deploy, migrate users)", done: false }] },
  { id: "ai-nativity-publishing", name: "AI Nativity · Publishing", priority: "medium", urgency: "this-month", next: "Publish the parked launch post to open the Substack, then set the YouTube creation strategy and record the first tutorial", milestones: [{ text: "Substack: publish the parked launch post (resolve its two header decisions) to open the newsletter", done: false }, { text: "Substack: set the newsletter cadence and a simple write-to-publish process", done: false }, { text: "YouTube: finalize the creation strategy (niche, format, topics, cadence)", done: false }, { text: "YouTube: sort the production setup (recording, screen capture, audio, editing workflow)", done: false }, { text: "YouTube: produce and publish the first tutorial video (script, record, edit, publish)", done: false }, { text: "YouTube: set up the channel page (banner, about, playlists)", done: false }, { text: "Socials: set up the build-in-public socials (LinkedIn/X profiles + approach)", done: false }, { text: "Socials: post the first build-in-public updates", done: false }, { text: "Rhythm: build a repeatable cross-channel production process (content calendar/pipeline)", done: false }, { text: "Rhythm: reach a consistent publishing rhythm (sustained regular output)", done: false }] },
  { id: "fitness-app-40plus", name: "Fitness app 40+", priority: "medium", urgency: "this-month", next: "Define the concept: the core problem for women 40+ and the one core feature the MVP nails, then decide the MVP scope", milestones: [{ text: "Define the concept: the core problem for women 40+ and the one core feature the MVP nails", done: false }, { text: "Decide the MVP scope: the minimum feature set (what is in, what is out)", done: false }, { text: "Choose platform + stack (mobile/web) and design the basic flows/UX", done: false }, { text: "Set up the project skeleton (repo, toolchain, auth, data model)", done: false }, { text: "Build the core feature end-to-end", done: false }, { text: "Build the supporting screens for a usable MVP", done: false }, { text: "Add the content/data (workouts, plans, whatever it delivers)", done: false }, { text: "Test end-to-end and fix blocking bugs", done: false }, { text: "Release the MVP to a small group of testers", done: false }] },
  { id: "yki-prep", name: "YKI exam prep", priority: "medium", urgency: "this-month", next: "Turn the shared YKI prep materials into a structured study curriculum, then work through it toward the YKI test", milestones: [{ text: "Inventory the raw materials: go through everything the friend shared and catalog it by skill/topic", done: false }, { text: "Decide the curriculum structure and confirm the target YKI level (the 4 skills, unit/week layout)", done: false }, { text: "Organize the materials into that structure (map each piece to a unit or skill)", done: false }, { text: "Spot the gaps and source or add material to fill them", done: false }, { text: "Build the study sequence and schedule (what order, what pace)", done: false }, { text: "Assemble a full mock/practice exam from the materials as the capstone", done: false }, { text: "Final pass: curriculum is complete, usable, and ready to study from", done: false }] },
  { id: "millionaire-masterplan", name: "Millionaire Master Plan", priority: "low", urgency: "this-month", next: "Take the book's assessment to find your wealth level, then read it through and capture the key ideas", milestones: [{ text: "Take the book's assessment to find your current wealth level/profile", done: false }, { text: "Read the book through", done: false }, { text: "Capture the key ideas and your current-level actions as you read", done: false }, { text: "Identify your specific next-level moves from the framework", done: false }, { text: "Write your concrete personal plan (actions in sequence)", done: false }, { text: "Fold the plan into your actual projects and priorities here", done: false }, { text: "Start executing the first moves from the plan", done: false }] },
  { id: "ai-readiness-app", name: "AI readiness app", priority: "low", urgency: "someday", next: "Define the problem an AI readiness app would solve and who it is for, then research what already exists", milestones: [{ text: "Define the problem: what \"AI readiness\" gap, and for whom (individuals, SMEs, NGOs)", done: false }, { text: "Research what already exists and where the gap is", done: false }, { text: "Sketch the concept in one page: what the app actually does", done: false }, { text: "Decide the format (assessment tool, course, dashboard, something else)", done: false }, { text: "Go/no-go: park it, or promote it to a real build project with its own repo", done: false }] },
];


/* ---------- mapping helpers ---------- */
const PRIORITY_TO_DOT = { high: "red", medium: "amber", low: "grey" };
const FINANCE_COLORS = { "Day job": "#CDEB45", Photography: "#849A35", Clients: "#4A4F58" };

function isoDaysAgo(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function midnight(d) { return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime(); }
function daysUntil(dateStr) {
  return Math.round((new Date(dateStr + "T00:00:00").getTime() - midnight(new Date())) / 86400000);
}
function fmtDue(d) {
  if (!d) return "This week";
  const diff = daysUntil(d);
  if (diff === 0) return "Today";
  if (diff === 1) return "Tomorrow";
  return new Date(d + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function mapTask(row, areaName) {
  return {
    id: row.id,
    title: row.what,
    status: row.status === "confirmed" ? "active" : row.status,
    priority: PRIORITY_TO_DOT[row.priority] || "grey",
    key: !!row.is_key,
    owe: row.owner === "them" ? "to" : "by",
    person: row.person || "you",
    due: fmtDue(row.due_date),
    area: areaName || "Inbox",
  };
}
function mapHabit(row, logs) {
  const byDay = {};
  logs.filter((l) => l.habit_id === row.id).forEach((l) => { byDay[l.day] = l.done; });
  let streak = 0;
  for (let i = 0; i < 60; i++) { if (byDay[isoDaysAgo(i)]) streak++; else break; }
  return { id: row.id, label: row.label, cue: row.cue || "", done: !!byDay[isoDaysAgo(0)], streak, target: row.target_minutes ?? null };
}
function mapGoal(row) {
  const remaining = row.target_date ? Math.max(daysUntil(row.target_date), 0) : 0;
  const elapsed = Math.max(0, Math.round((midnight(new Date()) - midnight(new Date(row.created_at))) / 86400000));
  const total = Math.max(elapsed + remaining, 1);
  const short = row.target_date
    ? new Date(row.target_date + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" }).toUpperCase()
    : "GOAL";
  return { id: row.id, short, icon: row.icon || "today", title: row.title, remaining, total, elapsed: Math.min(elapsed, total) };
}
function aggregateFinance(rows) {
  const bySrc = {};
  rows.forEach((r) => { const s = r.source || "Other"; bySrc[s] = (bySrc[s] || 0) + Number(r.amount); });
  return Object.entries(bySrc).map(([label, value]) => ({ label, value, color: FINANCE_COLORS[label] || "#4A4F58" }));
}

async function loadAll() {
  const thisMonth = isoDaysAgo(31);
  const [areasRes, tasksRes, habitsRes, logsRes, goalsRes, finRes] = await Promise.all([
    supabase.from("areas").select().order("sort"),
    supabase.from("tasks").select(),
    supabase.from("habits").select().eq("active", true).order("sort"),
    supabase.from("habit_logs").select().gte("day", isoDaysAgo(60)),
    supabase.from("goals").select().eq("status", "active").order("sort"),
    supabase.from("finance_entries").select().eq("kind", "income").gte("occurred_on", thisMonth),
  ]);
  const areaName = {};
  (areasRes.data || []).forEach((a) => { areaName[a.id] = a.label; });
  return {
    tasks: (tasksRes.data || []).filter((t) => t.status !== "dismissed").map((t) => mapTask(t, areaName[t.area_id])),
    habits: (habitsRes.data || []).map((h) => mapHabit(h, logsRes.data || [])),
    goals: (goalsRes.data || []).map(mapGoal),
    areas: (areasRes.data || []).map((a) => ({ name: a.label, icon: a.icon || "today" })),
    finance: aggregateFinance(finRes.data || []),
  };
}

// Projects load from Supabase. Seeds the table from the built-in set the first
// time it is empty, so a fresh project gets the current Central Command list.
async function loadProjects(seed) {
  let { data } = await supabase.from("projects").select().order("sort");
  if (!data || data.length === 0) {
    const rows = seed.map((p, i) => ({
      id: p.id, name: p.name, priority: p.priority, urgency: p.urgency, next: p.next,
      milestones: p.milestones, focus: p.priority === "high" && p.urgency === "this-week", sort: i,
    }));
    const ins = await supabase.from("projects").insert(rows).select();
    data = ins.data || rows;
  }
  const projects = data.map((r) => ({
    id: r.id, name: r.name, priority: r.priority, urgency: r.urgency, next: r.next, milestones: r.milestones || [],
  }));
  const focusIds = data.filter((r) => r.focus).map((r) => r.id);
  return { projects, focusIds };
}

/* ---------- local persistence (used until Supabase is configured) ----------
   Without this, every reload throws away edits and resets to the sample data.
   With Supabase configured, Supabase is the source of truth and localStorage
   is bypassed entirely. */
const LS_PREFIX = "anchor.v1.";
function loadLocal(key, fallback) {
  if (isConfigured || typeof localStorage === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(LS_PREFIX + key);
    if (raw == null) return fallback;
    const v = JSON.parse(raw);
    return v == null ? fallback : v;
  } catch { return fallback; }
}
function saveLocal(key, value) {
  if (isConfigured || typeof localStorage === "undefined") return;
  try { localStorage.setItem(LS_PREFIX + key, JSON.stringify(value)); } catch { /* quota / private mode */ }
}

/* ---------- the hook ---------- */
export function useAnchorStore() {
  const [loading, setLoading] = useState(isConfigured);
  const [tasks, setTasks] = useState(isConfigured ? [] : loadLocal("tasks", SAMPLE_TASKS));
  const [habits, setHabits] = useState(isConfigured ? [] : loadLocal("habits", SAMPLE_HABITS));
  const [goals, setGoals] = useState(isConfigured ? [] : loadLocal("goals", SAMPLE_GOALS));
  const [areas, setAreas] = useState(isConfigured ? [] : loadLocal("areas", SAMPLE_AREAS));
  const [finance, setFinance] = useState(isConfigured ? [] : loadLocal("finance", SAMPLE_FINANCE));
  // Projects + milestones (the Central Command model). Local-only for now; a
  // Supabase projects/milestones table is a later milestone.
  const [projects, setProjects] = useState(loadLocal("projects", SAMPLE_PROJECTS));
  // Focus set: which projects to work first. Defaults to the time-sensitive
  // ones (high priority + due this week), same rule as the Central Command board.
  const defaultFocus = SAMPLE_PROJECTS.filter((p) => p.priority === "high" && p.urgency === "this-week").map((p) => p.id);
  const [focusIds, setFocusIds] = useState(loadLocal("focusIds", defaultFocus));

  useEffect(() => {
    if (!isConfigured) return;
    let alive = true;
    (async () => {
      try {
        const r = await loadAll();
        if (!alive) return;
        setTasks(r.tasks); setHabits(r.habits); setGoals(r.goals); setAreas(r.areas); setFinance(r.finance);
        const pr = await loadProjects(SAMPLE_PROJECTS);
        if (alive) { setProjects(pr.projects); setFocusIds(pr.focusIds); }
      } catch (e) {
        console.error("Anchor: failed to load from Supabase", e);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  // Persist each slice locally whenever it changes (no-op when Supabase is on).
  useEffect(() => { saveLocal("tasks", tasks); }, [tasks]);
  useEffect(() => { saveLocal("habits", habits); }, [habits]);
  useEffect(() => { saveLocal("goals", goals); }, [goals]);
  useEffect(() => { saveLocal("areas", areas); }, [areas]);
  useEffect(() => { saveLocal("finance", finance); }, [finance]);
  useEffect(() => { saveLocal("projects", projects); }, [projects]);
  useEffect(() => { saveLocal("focusIds", focusIds); }, [focusIds]);

  return useMemo(() => {
    const persist = (fn) => { if (isConfigured) fn().catch?.((e) => console.error(e)); };

    const reloadTasks = async () => {
      const { data: areasD } = await supabase.from("areas").select("id,label");
      const an = {};
      (areasD || []).forEach((a) => { an[a.id] = a.label; });
      const { data } = await supabase.from("tasks").select();
      setTasks((data || []).filter((t) => t.status !== "dismissed").map((t) => mapTask(t, an[t.area_id])));
    };

    const toggleHabit = (id) => {
      const cur = habits.find((h) => h.id === id);
      const done = !(cur && cur.done);
      setHabits((hs) => hs.map((h) => (h.id === id ? { ...h, done, streak: done ? h.streak + 1 : Math.max(0, h.streak - 1) } : h)));
      persist(() => supabase.from("habit_logs").upsert(
        { habit_id: id, day: isoDaysAgo(0), done, minutes: done ? (cur && cur.target) || null : null },
        { onConflict: "habit_id,day" },
      ));
    };
    const confirmTask = (id) => {
      setTasks((ts) => ts.map((t) => (t.id === id ? { ...t, status: "active", key: false } : t)));
      persist(() => supabase.from("tasks").update({ status: "confirmed", is_key: false }).eq("id", id));
    };
    const dismissTask = (id) => {
      setTasks((ts) => ts.filter((t) => t.id !== id));
      persist(() => supabase.from("tasks").update({ status: "dismissed" }).eq("id", id));
    };
    const completeTask = (id) => {
      setTasks((ts) => ts.map((t) => (t.id === id ? { ...t, status: "done" } : t)));
      persist(() => supabase.from("tasks").update({ status: "done" }).eq("id", id));
    };
    const toggleKey = (id) => {
      const cur = tasks.find((t) => t.id === id);
      const key = !(cur && cur.key);
      setTasks((ts) => ts.map((t) => (t.id === id ? { ...t, key } : t)));
      persist(() => supabase.from("tasks").update({ is_key: key }).eq("id", id));
    };
    // Local stand-in for the AI extraction step (used until Supabase + the
    // extract function are wired). If a note is addressed to a project, e.g.
    // "PuhuScribe: chose the stack" or "afaes: done shared the folder", file it
    // as a step on that project (marked done when it starts with "done").
    // Everything else becomes a proposed task, same as before.
    const routeToProject = (title) => {
      const m = title.match(/^\s*([^:]{2,42}):\s*(.+)$/);
      if (!m) return null;
      const label = m[1].trim().toLowerCase();
      const rest = m[2].trim();
      const proj = projects.find((p) => {
        const n = p.name.toLowerCase(), id = p.id.toLowerCase();
        return n === label || id === label || n.includes(label) || label.includes(id);
      });
      if (!proj) return null;
      const doneNow = /^done\b[:\s-]*/i.test(rest);
      const text = rest.replace(/^done\b[:\s-]*/i, "").trim() || rest;
      const newMs = [...proj.milestones, { text, done: doneNow }];
      setProjects((ps) => ps.map((p) => (p.id === proj.id ? { ...p, milestones: newMs } : p)));
      persist(() => supabase.from("projects").update({ milestones: newMs }).eq("id", proj.id));
      return proj.name;
    };

    const saveMilestones = (projectId, milestones) => {
      setProjects((ps) => ps.map((p) => (p.id === projectId ? { ...p, milestones } : p)));
      persist(() => supabase.from("projects").update({ milestones }).eq("id", projectId));
    };
    const addProjectStep = (projectId, text) => {
      const t = (text || "").trim();
      if (!t) return;
      const cur = projects.find((p) => p.id === projectId);
      if (!cur) return;
      saveMilestones(projectId, [...cur.milestones, { text: t, done: false }]);
    };
    const deleteProjectStep = (projectId, index) => {
      const cur = projects.find((p) => p.id === projectId);
      if (!cur) return;
      saveMilestones(projectId, cur.milestones.filter((_, i) => i !== index));
    };
    const addProject = (name, priority = "medium") => {
      const nm = (name || "").trim();
      if (!nm) return;
      const id = nm.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "project-" + (projects.length + 1);
      if (projects.some((p) => p.id === id)) return;
      const row = { id, name: nm, priority, urgency: "this-month", next: "Define the first steps", milestones: [] };
      setProjects((ps) => [...ps, row]);
      persist(() => supabase.from("projects").insert({ ...row, sort: projects.length }));
    };
    const deleteProject = (projectId) => {
      setProjects((ps) => ps.filter((p) => p.id !== projectId));
      setFocusIds((ids) => ids.filter((x) => x !== projectId));
      persist(() => supabase.from("projects").delete().eq("id", projectId));
    };
    const toggleFocus = (projectId) => {
      const on = !focusIds.includes(projectId);
      setFocusIds((ids) => (on ? [...ids, projectId] : ids.filter((x) => x !== projectId)));
      persist(() => supabase.from("projects").update({ focus: on }).eq("id", projectId));
    };

    const addThought = async (title) => {
      if (!isConfigured) {
        if (routeToProject(title)) return;
        setTasks((ts) => [{ id: "p" + Date.now(), title, status: "proposed", priority: "grey", area: "Inbox" }, ...ts]);
        return;
      }
      try {
        const { data: entry, error } = await supabase.from("entries").insert({ kind: "brain_dump", transcript: title }).select("id").single();
        if (error) throw error;
        await supabase.functions.invoke("process-entry", { body: { entry_id: entry.id } });
        await reloadTasks();
      } catch (e) {
        console.error("Anchor: capture failed", e);
      }
    };
    const addGoal = () => {
      const title = window.prompt("What are you counting down to?");
      if (!title) return;
      const days = parseInt(window.prompt("How many days left?", "30"), 10) || 30;
      if (!isConfigured) {
        const total = days + Math.round(days * 0.4);
        setGoals((gs) => [...gs, { id: "g" + Date.now(), short: title.split(" ")[0].toUpperCase().slice(0, 8), icon: "today", title, remaining: days, total, elapsed: total - days }]);
        return;
      }
      const target = isoDaysAgo(-days);
      (async () => {
        try {
          await supabase.from("goals").insert({ title, target_date: target, icon: "today" });
          const { data } = await supabase.from("goals").select().eq("status", "active").order("sort");
          setGoals((data || []).map(mapGoal));
        } catch (e) { console.error(e); }
      })();
    };

    const reloadGoals = async () => {
      const { data } = await supabase.from("goals").select().eq("status", "active").order("sort");
      setGoals((data || []).map(mapGoal));
    };
    const reloadHabits = async () => {
      const [{ data: hs }, { data: logs }] = await Promise.all([
        supabase.from("habits").select().eq("active", true).order("sort"),
        supabase.from("habit_logs").select().gte("day", isoDaysAgo(60)),
      ]);
      setHabits((hs || []).map((h) => mapHabit(h, logs || [])));
    };
    const reloadFinance = async () => {
      const { data } = await supabase.from("finance_entries").select().eq("kind", "income").gte("occurred_on", isoDaysAgo(31));
      setFinance(aggregateFinance(data || []));
    };

    const editTask = (id) => {
      const cur = tasks.find((t) => t.id === id);
      const what = window.prompt("Edit task", cur ? cur.title : "");
      if (what == null || !what.trim()) return;
      setTasks((ts) => ts.map((t) => (t.id === id ? { ...t, title: what.trim() } : t)));
      persist(() => supabase.from("tasks").update({ what: what.trim() }).eq("id", id));
    };
    const deleteTask = (id) => {
      if (!window.confirm("Delete this task?")) return;
      setTasks((ts) => ts.filter((t) => t.id !== id));
      persist(() => supabase.from("tasks").delete().eq("id", id));
    };
    const editGoal = (id) => {
      const cur = goals.find((g) => g.id === id);
      if (!cur) return;
      const title = window.prompt("Edit countdown", cur.title);
      if (title == null || !title.trim()) return;
      const days = parseInt(window.prompt("Days left?", String(cur.remaining)), 10);
      const remaining = Number.isFinite(days) ? Math.max(days, 0) : cur.remaining;
      setGoals((gs) => gs.map((g) => (g.id === id ? { ...g, title: title.trim(), remaining, total: Math.max(g.elapsed + remaining, 1) } : g)));
      persist(async () => {
        await supabase.from("goals").update({ title: title.trim(), target_date: isoDaysAgo(-remaining) }).eq("id", id);
        await reloadGoals();
      });
    };
    const deleteGoal = (id) => {
      if (!window.confirm("Delete this countdown?")) return;
      setGoals((gs) => gs.filter((g) => g.id !== id));
      persist(() => supabase.from("goals").update({ status: "dropped" }).eq("id", id));
    };
    const addHabit = () => {
      const label = window.prompt("New habit (e.g. 'Meditate · 10 min')");
      if (!label || !label.trim()) return;
      const cue = window.prompt("When? (optional, e.g. 'Morning')") || "";
      if (!isConfigured) {
        setHabits((hs) => [...hs, { id: "h" + Date.now(), label: label.trim(), cue, done: false, streak: 0 }]);
        return;
      }
      persist(async () => {
        await supabase.from("habits").insert({ label: label.trim(), cue, sort: 99 });
        await reloadHabits();
      });
    };
    const editHabit = (id) => {
      const cur = habits.find((h) => h.id === id);
      if (!cur) return;
      const label = window.prompt("Edit habit", cur.label);
      if (label == null || !label.trim()) return;
      const cue = window.prompt("When? (optional)", cur.cue || "") || "";
      setHabits((hs) => hs.map((h) => (h.id === id ? { ...h, label: label.trim(), cue } : h)));
      persist(() => supabase.from("habits").update({ label: label.trim(), cue }).eq("id", id));
    };
    const deleteHabit = (id) => {
      if (!window.confirm("Delete this habit?")) return;
      setHabits((hs) => hs.filter((h) => h.id !== id));
      persist(() => supabase.from("habits").update({ active: false }).eq("id", id));
    };
    const addFinance = () => {
      const kindIn = (window.prompt("Type: income or expense", "income") || "").toLowerCase();
      if (!kindIn) return;
      const kind = kindIn.startsWith("e") ? "expense" : "income";
      const source = window.prompt("Source (e.g. Photography, Day job, Clients)");
      if (!source || !source.trim()) return;
      const amount = parseFloat(window.prompt("Amount (numbers only)", "0"));
      if (!Number.isFinite(amount) || amount <= 0) return;
      if (!isConfigured) {
        setFinance((f) => {
          const i = f.findIndex((x) => x.label === source.trim());
          if (i >= 0) { const c = [...f]; c[i] = { ...c[i], value: c[i].value + amount }; return c; }
          return [...f, { label: source.trim(), value: amount, color: "#4A4F58" }];
        });
        return;
      }
      persist(async () => {
        await supabase.from("finance_entries").insert({ kind, source: source.trim(), amount, occurred_on: isoDaysAgo(0) });
        await reloadFinance();
      });
    };

    // Projects: tick a milestone. Percent is always steps done / total.
    const toggleMilestone = (projectId, index) => {
      const cur = projects.find((p) => p.id === projectId);
      if (!cur) return;
      const milestones = cur.milestones.map((m, i) => (i === index ? { ...m, done: !m.done } : m));
      saveMilestones(projectId, milestones);
    };

    const openByArea = {};
    tasks.forEach((t) => { if (t.status !== "done") openByArea[t.area] = (openByArea[t.area] || 0) + 1; });
    const areasWithOpen = areas.map((a) => ({ ...a, open: openByArea[a.name] || 0 }));
    const active = tasks.filter((t) => t.status === "active");
    const keyTasks = active.filter((t) => t.key).concat(active.filter((t) => !t.key)).slice(0, 4);
    const proposed = tasks.filter((t) => t.status === "proposed");

    const projectsView = projects.map((p) => {
      const total = p.milestones.length;
      const done = p.milestones.filter((m) => m.done).length;
      return { ...p, done, total, progress: total ? Math.round((100 * done) / total) : 0, focus: focusIds.includes(p.id) };
    });
    const projectsOverall = projectsView.length
      ? Math.round(projectsView.reduce((a, p) => a + p.progress, 0) / projectsView.length)
      : 0;
    const focusProjects = projectsView.filter((p) => p.focus);

    return {
      loading, name: USER_NAME,
      tasks, habits, goals, finance, areas: areasWithOpen,
      keyTasks, proposed,
      projects: projectsView, projectsOverall, focusProjects,
      toggleMilestone, addProjectStep, deleteProjectStep, addProject, deleteProject, toggleFocus,
      toggleHabit, confirmTask, dismissTask, completeTask, toggleKey, addThought, addGoal,
      editTask, deleteTask, editGoal, deleteGoal, addHabit, editHabit, deleteHabit, addFinance,
    };
  }, [loading, tasks, habits, goals, areas, finance, projects, focusIds]);
}
