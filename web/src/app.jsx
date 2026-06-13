/* Anchor — app state, store, and stage composition */
import { useState } from "react";
import { Icon } from "./icons.jsx";
import { MobileApp } from "./mobile.jsx";
import { DesktopApp } from "./desktop.jsx";

const INITIAL_TASKS = [
  { id: "t1", title: "Send the June investor update", status: "active", priority: "red",   key: true,  owe: "by", person: "Lin",    due: "Jun 15", area: "AI Business" },
  { id: "t2", title: "Edit + deliver the Hale wedding gallery", status: "active", priority: "amber", key: true, owe: "by", person: "the Hales", due: "Jun 18", area: "Photography" },
  { id: "t3", title: "Reply to Elena before tonight", status: "active", priority: "amber", key: false, owe: "by", person: "Elena", due: "Today", area: "Language" },
  { id: "t4", title: "Sign off the contractor draft", status: "active", priority: "grey",  key: false, owe: "to", person: "Marcus", due: "Jun 20", area: "Day Job" },
  { id: "p1", title: "Draft the Q3 product roadmap", status: "proposed", priority: "red",   area: "AI Business" },
  { id: "p2", title: "Book the studio for Saturday's shoot", status: "proposed", priority: "amber", area: "Photography" },
  { id: "d1", title: "Ship the onboarding email flow", status: "done", area: "AI Business" },
  { id: "d2", title: "Back up Friday's RAW files", status: "done", area: "Photography" },
];

const INITIAL_HABITS = [
  { id: "h1", label: "Spanish · 20 min", cue: "After coffee", done: true,  streak: 5 },
  { id: "h2", label: "Train · strength", cue: "Midday", done: true,  streak: 4 },
  { id: "h3", label: "Journal", cue: "Wind-down", done: false, streak: 6 },
  { id: "h4", label: "Read · 10 pages", cue: "Before bed", done: false, streak: 3 },
];

const AREAS = [
  { name: "AI Business", icon: "biz",    open: 3 },
  { name: "Photography", icon: "camera", open: 2 },
  { name: "Day Job",     icon: "job",    open: 1 },
  { name: "Money",       icon: "money",  open: 1 },
  { name: "Language",    icon: "lang",   open: 2 },
  { name: "Body & Health", icon: "body", open: 1 },
  { name: "Mind & Journal", icon: "mind", open: 0 },
  { name: "Personal",    icon: "user",   open: 0 },
];

const FINANCE = [
  { label: "Day job",     value: 4200, color: "#CDEB45" },
  { label: "Photography", value: 1850, color: "#849A35" },
  { label: "Clients",     value: 3400, color: "#4A4F58" },
];

const USER_NAME = "Fumnanya";

const GOALS = [
  { id: "g1", short: "SEPT 1",  icon: "lang",   title: "Strong language progress before school resumes", remaining: 80, total: 100, elapsed: 20 },
  { id: "g2", short: "BETA",    icon: "biz",    title: "Ship the AI product public beta", remaining: 32, total: 60, elapsed: 28 },
  { id: "g3", short: "DELIVERY",icon: "camera", title: "Deliver the Hale wedding album", remaining: 14, total: 30, elapsed: 16 },
];

let pid = 100;
let gid = 100;

export default function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [habits, setHabits] = useState(INITIAL_HABITS);
  const [goals, setGoals] = useState(GOALS);

  const toggleHabit = (id) => setHabits(hs => hs.map(h => h.id === id ? { ...h, done: !h.done } : h));
  const confirmTask = (id) => setTasks(ts => ts.map(t => t.id === id ? { ...t, status: "active", key: false, owe: t.owe || "by", person: t.person || "you", due: t.due || "This week" } : t));
  const dismissTask = (id) => setTasks(ts => ts.filter(t => t.id !== id));
  const completeTask = (id) => setTasks(ts => ts.map(t => t.id === id ? { ...t, status: "done" } : t));
  const toggleKey = (id) => setTasks(ts => ts.map(t => t.id === id ? { ...t, key: !t.key } : t));
  const addThought = (title) => setTasks(ts => [{ id: "p" + (++pid), title, status: "proposed", priority: "grey", area: "Inbox" }, ...ts]);
  const addGoal = () => {
    const title = window.prompt("What are you counting down to?");
    if (!title) return;
    const days = parseInt(window.prompt("How many days left?", "30"), 10) || 30;
    const total = days + Math.round(days * 0.4);
    setGoals(gs => [...gs, { id: "g" + (++gid), short: title.split(" ")[0].toUpperCase().slice(0, 8), icon: "today", title, remaining: days, total, elapsed: total - days }]);
  };

  const store = {
    tasks, habits, goals, areas: AREAS, finance: FINANCE, name: USER_NAME,
    keyTasks: tasks.filter(t => t.status === "active" && t.key).concat(tasks.filter(t => t.status === "active" && !t.key)).slice(0, 4),
    proposed: tasks.filter(t => t.status === "proposed"),
    toggleHabit, confirmTask, dismissTask, completeTask, toggleKey, addThought, addGoal,
  };

  return (
    <div className="stage">
      <div className="stage-head">
        <div className="brandmark">
          <span className="glyph"><Icon name="anchor" size={20} /></span>
          <span className="wordmark">Anchor</span>
        </div>
        <div className="tagline">Your single source of truth. The one calm place where you run your whole life.</div>
      </div>

      <div className="section-label"><span className="n">A</span> Mobile app</div>
      <MobileApp store={store} />

      <div className="section-label"><span className="n">B</span> Desktop dashboard</div>
      <DesktopApp store={store} />
    </div>
  );
}
