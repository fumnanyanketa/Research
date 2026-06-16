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

/* ---------- the hook ---------- */
export function useAnchorStore() {
  const [loading, setLoading] = useState(isConfigured);
  const [tasks, setTasks] = useState(isConfigured ? [] : SAMPLE_TASKS);
  const [habits, setHabits] = useState(isConfigured ? [] : SAMPLE_HABITS);
  const [goals, setGoals] = useState(isConfigured ? [] : SAMPLE_GOALS);
  const [areas, setAreas] = useState(isConfigured ? [] : SAMPLE_AREAS);
  const [finance, setFinance] = useState(isConfigured ? [] : SAMPLE_FINANCE);

  useEffect(() => {
    if (!isConfigured) return;
    let alive = true;
    (async () => {
      try {
        const r = await loadAll();
        if (!alive) return;
        setTasks(r.tasks); setHabits(r.habits); setGoals(r.goals); setAreas(r.areas); setFinance(r.finance);
      } catch (e) {
        console.error("Anchor: failed to load from Supabase", e);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

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
    const addThought = async (title) => {
      if (!isConfigured) {
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

    const openByArea = {};
    tasks.forEach((t) => { if (t.status !== "done") openByArea[t.area] = (openByArea[t.area] || 0) + 1; });
    const areasWithOpen = areas.map((a) => ({ ...a, open: openByArea[a.name] || 0 }));
    const active = tasks.filter((t) => t.status === "active");
    const keyTasks = active.filter((t) => t.key).concat(active.filter((t) => !t.key)).slice(0, 4);
    const proposed = tasks.filter((t) => t.status === "proposed");

    return {
      loading, name: USER_NAME,
      tasks, habits, goals, finance, areas: areasWithOpen,
      keyTasks, proposed,
      toggleHabit, confirmTask, dismissTask, completeTask, toggleKey, addThought, addGoal,
      editTask, deleteTask, editGoal, deleteGoal, addHabit, editHabit, deleteHabit, addFinance,
    };
  }, [loading, tasks, habits, goals, areas, finance]);
}
