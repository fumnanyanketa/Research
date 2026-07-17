/* Anchor — always-on desktop dashboard */
import { useState as dUseState } from "react";
import { Icon } from "./icons.jsx";
import { Ring, Donut, DotMatrix } from "./viz.jsx";
import { MetaLine } from "./mobile.jsx";

const PRIO_DOT = { high: "red", medium: "amber", low: "grey" };

/* ---------- September goal (dark hero + secondary countdowns) ---------- */
function GoalCard({ goals, addGoal }) {
  const [primary, ...rest] = goals;
  const pct = Math.round(primary.elapsed / primary.total * 100);
  return (
    <div className="card feature dcard goal-area">
      <div className="row spread">
        <div className="lbl" style={{ color: "var(--accent)" }}>PRIMARY COUNTDOWN</div>
        <Icon name={primary.icon} size={20} style={{ color: "var(--muted-2)" }} />
      </div>
      <div style={{ fontSize: 16.5, fontWeight: 500, lineHeight: 1.4, margin: "14px 0 4px", maxWidth: 290 }}>
        {primary.title}
      </div>
      <div className="row" style={{ alignItems: "flex-end", gap: 16, margin: "16px 0 18px" }}>
        <div className="num" style={{ fontSize: 102 }}>{primary.remaining}</div>
        <div style={{ paddingBottom: 16 }}><div className="lbl" style={{ lineHeight: 1.5 }}>DAYS TO<br />{primary.short}</div></div>
      </div>
      <DotMatrix total={primary.total} done={primary.elapsed} todayIndex={primary.elapsed} cols={25} gap={7} />
      <div className="row spread" style={{ margin: "14px 0 4px" }}>
        <span style={{ fontSize: 12.5, color: "var(--muted)" }}>{primary.elapsed} of {primary.total} days · {pct}%</span>
        <span style={{ fontSize: 12.5, color: "var(--muted-2)" }}>{rest.length} more tracked</span>
      </div>

      <div className="mini-counts">
        {rest.map(g => (
          <div key={g.id} className="row spread mini-count">
            <div className="row" style={{ gap: 11, minWidth: 0 }}>
              <Icon name={g.icon} size={15} style={{ color: "var(--muted)", flex: "none" }} />
              <span style={{ fontSize: 13, color: "var(--text)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{g.title}</span>
            </div>
            <span style={{ flex: "none", paddingLeft: 12 }}><span className="num" style={{ fontSize: 17 }}>{g.remaining}</span><span style={{ color: "var(--muted-2)", fontSize: 11, marginLeft: 3 }}>d</span></span>
          </div>
        ))}
        <button className="goal-add-row" onClick={addGoal}><Icon name="plus" size={15} /> Add countdown</button>
      </div>
    </div>
  );
}

/* ---------- habits ---------- */
function HabitsCard({ habits, toggleHabit }) {
  const done = habits.filter(h => h.done).length;
  return (
    <div className="card dcard habits-area">
      <div className="row spread" style={{ marginBottom: 18 }}>
        <div className="lbl">TODAY'S HABITS</div>
        <Ring value={done / habits.length} size={52} stroke={6}>
          <div className="num" style={{ fontSize: 15 }}>{done}<span style={{ color: "var(--muted-2)", fontSize: 11 }}>/{habits.length}</span></div>
        </Ring>
      </div>
      <div className="col" style={{ gap: 2 }}>
        {habits.map(h => (
          <div key={h.id} className="row" style={{ gap: 13, padding: "11px 0", borderTop: "1px solid var(--border)" }}>
            <button className={`checkbox ${h.done ? "on" : ""}`} onClick={() => toggleHabit(h.id)} style={{ width: 22, height: 22 }}>
              <Icon name="check" size={13} sw={2.4} />
            </button>
            <span style={{ flex: 1, fontSize: 14, color: h.done ? "var(--muted)" : "var(--text)", textDecoration: h.done ? "line-through" : "none", textDecorationColor: "var(--faint)" }}>{h.label}</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent-text)" }}>{h.streak}<span style={{ color: "var(--muted-2)" }}>/7</span></span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- calendar strip ---------- */
function CalendarCard() {
  const days = [
    { d: "MON", n: 8 }, { d: "TUE", n: 9 }, { d: "WED", n: 10 }, { d: "THU", n: 11 },
    { d: "FRI", n: 12 }, { d: "SAT", n: 13, now: true, ev: 2 }, { d: "SUN", n: 14, ev: 1 },
  ];
  return (
    <div className="card feature dcard cal-area">
      <div className="row spread" style={{ marginBottom: 16 }}>
        <div className="lbl">THIS WEEK · JUNE</div>
        <Icon name="calendar" size={18} style={{ color: "var(--muted-2)" }} />
      </div>
      <div className="row" style={{ gap: 8 }}>
        {days.map((x, i) => (
          <div key={i} className="calday">
            <div className="cd-name">{x.d}</div>
            <div className={`cd-num ${x.now ? "now" : ""}`}>{x.n}</div>
            <div className="cd-dots">
              {Array.from({ length: x.ev || 0 }).map((_, j) => <span key={j} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- finance pulse (hidden by default) ---------- */
function FinanceCard({ finance }) {
  const [shown, setShown] = dUseState(false);
  const total = finance.reduce((s, x) => s + x.value, 0);
  return (
    <div className="card dcard finance-area">
      <div className="row spread" style={{ marginBottom: 18 }}>
        <div className="lbl">FINANCE PULSE · MTD</div>
        <button className="reveal-toggle" onClick={() => setShown(s => !s)}>
          <Icon name={shown ? "eyeoff" : "eye"} size={16} /> {shown ? "Hide" : "Reveal"}
        </button>
      </div>

      <div className="col" style={{ alignItems: "center", gap: 18, filter: shown ? "none" : "blur(9px)", transition: "filter 220ms ease", pointerEvents: shown ? "auto" : "none" }}>
        <Donut size={150} stroke={20} segments={finance.map(f => ({ value: f.value, color: f.color }))}>
          <div style={{ textAlign: "center" }}>
            <div className="lbl" style={{ fontSize: 9 }}>NET</div>
            <div className="num" style={{ fontSize: 27 }}>${(total/1000).toFixed(1)}k</div>
          </div>
        </Donut>
        <div className="col" style={{ gap: 9, width: "100%" }}>
          {finance.map(f => (
            <div key={f.label} className="row spread">
              <div className="row" style={{ gap: 9 }}>
                <span style={{ width: 9, height: 9, borderRadius: 3, background: f.color }} />
                <span style={{ fontSize: 13, color: "var(--muted)" }}>{f.label}</span>
              </div>
              <span style={{ fontSize: 13.5, fontWeight: 700 }}>${f.value.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>

      {!shown && (
        <div className="finance-lock">
          <Icon name="eye" size={18} />
          <span>Private · tap reveal</span>
        </div>
      )}
    </div>
  );
}

/* ---------- key tasks ---------- */
function KeyTasksCard({ store }) {
  const { tasks, completeTask } = store;
  const active = tasks.filter(t => t.status === "active");
  return (
    <div className="card dcard tasks-area">
      <div className="row spread" style={{ marginBottom: 6 }}>
        <div className="lbl">KEY TASKS</div>
        <div className="lbl" style={{ color: "var(--muted-2)" }}>{active.length} ACTIVE</div>
      </div>
      <div className="col">
        {active.map((t, i) => (
          <div key={t.id} className="row" style={{ gap: 14, padding: "15px 0", borderTop: i ? "1px solid var(--border)" : "none", alignItems: "flex-start" }}>
            <span className={`dot ${t.priority}`} style={{ marginTop: 6 }} />
            <div style={{ flex: 1 }}>
              <div className="row" style={{ gap: 7 }}>
                <span style={{ fontSize: 14.5, fontWeight: 500 }}>{t.title}</span>
                {t.key && <span className="star"><Icon name="star" size={13} /></span>}
              </div>
              <MetaLine t={t} />
            </div>
            <button className="btn-ghost done-btn" onClick={() => completeTask(t.id)}><Icon name="check" size={13} sw={2} /> Done</button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- the brain ---------- */
function BrainCard({ areas }) {
  return (
    <div className="card feature dcard brain-area">
      <div className="row spread" style={{ marginBottom: 16 }}>
        <div className="lbl">THE BRAIN · LIFE AREAS</div>
        <div className="lbl" style={{ color: "var(--muted-2)" }}>{areas.reduce((s,a)=>s+a.open,0)} OPEN</div>
      </div>
      <div className="brain-grid">
        {areas.map(a => (
          <div key={a.name} className={`brain-tile ${a.open ? "has" : ""}`}>
            <div className="row spread" style={{ alignItems: "flex-start" }}>
              <Icon name={a.icon} size={20} style={{ color: a.open ? "var(--accent)" : "var(--muted)" }} />
              <span className="num" style={{ fontSize: 22, color: a.open ? "var(--text)" : "var(--muted-2)" }}>{a.open}</span>
            </div>
            <div className="bt-name">{a.name}</div>
            <div className="bt-sub">{a.open ? `${a.open} open task${a.open > 1 ? "s" : ""}` : "clear"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- projects · progress (Central Command model) ---------- */
function ProjectsCard({ projects, overall, toggleMilestone }) {
  const [open, setOpen] = dUseState(null);
  return (
    <div className="card feature dcard projects-area">
      <div className="row spread" style={{ marginBottom: 16 }}>
        <div className="lbl">PROJECTS · PROGRESS</div>
        <div className="row" style={{ gap: 12 }}>
          <span className="lbl" style={{ color: "var(--muted-2)" }}>{projects.length} ACTIVE</span>
          <Ring value={overall / 100} size={50} stroke={6}>
            <div className="num" style={{ fontSize: 13.5 }}>{overall}<span style={{ color: "var(--muted-2)", fontSize: 10 }}>%</span></div>
          </Ring>
        </div>
      </div>
      <div className="proj-grid">
        {projects.map((p) => (
          <div key={p.id} className={`proj-tile ${open === p.id ? "open" : ""}`}>
            <button className="proj-head" onClick={() => setOpen((o) => (o === p.id ? null : p.id))}>
              <div className="row spread" style={{ gap: 10 }}>
                <span className="proj-name"><span className={`dot ${PRIO_DOT[p.priority] || "grey"}`} /> {p.name}</span>
                <span className="num proj-pct">{p.progress}%</span>
              </div>
              <div className="proj-bar"><i style={{ width: p.progress + "%" }} /></div>
              <div className="proj-steps"><b>{p.done}/{p.total}</b> steps · <span className="proj-next">{p.next}</span></div>
            </button>
            {open === p.id && (
              <div className="proj-ms">
                {p.milestones.map((m, i) => (
                  <button key={i} className={`ms-row ${m.done ? "on" : ""}`} onClick={() => toggleMilestone(p.id, i)}>
                    <span className="ms-box"><Icon name="check" size={12} sw={2.6} /></span>
                    <span className="ms-text">{m.text}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- top capture bar ---------- */
function CaptureBar({ store }) {
  const [rec, setRec] = dUseState(false);
  const [text, setText] = dUseState("");
  const submit = () => { if (text.trim()) { store.addThought(text.trim()); setText(""); } };
  return (
    <div className="capbar">
      <span className="ai-dot" style={{ marginLeft: 4 }} />
      <input className="capbar-input" value={text} placeholder="Capture a thought, task, or conversation. Anchor sorts it."
        onChange={e => setText(e.target.value)} onKeyDown={e => e.key === "Enter" && submit()} />
      {text.trim() && <button className="btn-ghost" style={{ padding: "9px 14px" }} onClick={submit}>Add</button>}
      <button className={`capbar-rec ${rec ? "rec" : ""}`} onClick={() => setRec(r => !r)}>
        <Icon name="mic" size={17} /> {rec ? "Listening…" : "Record"}
      </button>
    </div>
  );
}

export function DesktopApp({ store }) {
  return (
    <div className="dash">
      <div className="dash-top feature">
        <div className="row" style={{ gap: 12 }}>
          <span className="dash-glyph"><Icon name="anchor" size={20} /></span>
          <div className="dash-brand">Anchor</div>
        </div>
        <CaptureBar store={store} />
        <div className="row" style={{ gap: 12 }}>
          <button className="icon-btn">{store.proposed.length > 0 && <span className="icon-badge">{store.proposed.length}</span>}<Icon name="bell" size={19} /></button>
          <div className="avatar-sm" style={{ width: 40, height: 40 }}>{store.name[0]}</div>
        </div>
      </div>

      <div className="dash-greeting">
        <div>
          <div className="greet-title">Welcome back, {store.name}</div>
          <div className="greet-sub">Saturday, June 13 — your whole life, in one calm place.</div>
        </div>
        <div className="greet-chip"><Icon name="calendar" size={16} /> Today <span className="greet-sep">·</span> Jun 13</div>
      </div>

      <div className="dash-grid">
        <GoalCard goals={store.goals} addGoal={store.addGoal} />
        <HabitsCard habits={store.habits} toggleHabit={store.toggleHabit} />
        <CalendarCard />
        <FinanceCard finance={store.finance} />
        <KeyTasksCard store={store} />
        <BrainCard areas={store.areas} />
        <ProjectsCard projects={store.projects} overall={store.projectsOverall} toggleMilestone={store.toggleMilestone} />
      </div>
    </div>
  );
}
