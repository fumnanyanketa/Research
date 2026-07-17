/* Anchor — mobile app: phone frame, tab bar, four screens. */
import { useState as mUseState, useRef as mUseRef, useEffect as mUseEffect } from "react";
import { Icon } from "./icons.jsx";
import { Ring, Waveform, DotMatrix, Donut } from "./viz.jsx";

/* ---------- shared bits ---------- */
export function MetaLine({ t }) {
  const dirLabel = t.owe === "to" ? "owed to you" : "owed by you";
  return (
    <div style={{ fontSize: 11.5, color: "var(--muted)", marginTop: 5, lineHeight: 1.4 }}>
      <span style={{ color: t.owe === "to" ? "var(--accent-text)" : "var(--muted)" }}>{dirLabel}</span>
      <span style={{ color: "var(--faint)" }}> · </span>{t.person}
      <span style={{ color: "var(--faint)" }}> · </span><span style={{ color: t.due === "Today" ? "var(--amber)" : "var(--muted)" }}>{t.due}</span>
      <span style={{ color: "var(--faint)" }}> · </span><span style={{ color: "var(--muted-2)" }}>{t.area}</span>
    </div>
  );
}

function ScreenHeader({ kicker, title, right, size = 27 }) {
  return (
    <div className="row spread" style={{ alignItems: "flex-start", marginBottom: 18 }}>
      <div style={{ minWidth: 0 }}>
        <div className="lbl" style={{ marginBottom: 6 }}>{kicker}</div>
        <div className="title-font" style={{ fontSize: size }}>{title}</div>
      </div>
      {right}
    </div>
  );
}

/* ---------- TODAY ---------- */
function TodayScreen({ store }) {
  const { habits, toggleHabit, keyTasks, goals, name } = store;
  const doneCount = habits.filter(h => h.done).length;
  const railRef = mUseRef(null);
  const [gi, setGi] = mUseState(0);
  const [finShown, setFinShown] = mUseState(false);
  const finance = store.finance || [];
  const finTotal = finance.reduce((s, f) => s + f.value, 0);
  const onRailScroll = () => {
    const el = railRef.current; if (!el) return;
    const pitch = el.firstChild ? el.firstChild.offsetWidth + 10 : el.clientWidth;
    setGi(Math.round(el.scrollLeft / pitch));
  };
  return (
    <div className="screen-pad">
      <ScreenHeader kicker="TUE · JUN 13" size={22} title={`Good morning, ${name}`}
        right={<div className="avatar-sm">{name[0]}</div>} />

      {/* Countdowns — swipeable rail of goal cards */}
      <div className="row spread" style={{ margin: "2px 0 10px" }}>
        <div className="lbl">COUNTDOWNS</div>
        <div className="lbl" style={{ color: "var(--muted-2)" }}>{goals.length} TRACKED</div>
      </div>
      <div className="goal-rail scroll-x" ref={railRef} onScroll={onRailScroll}>
        {goals.map(g => (
          <div key={g.id} className="card feature goal-card">
            <div className="row spread" style={{ alignItems: "flex-start" }}>
              <div className="lbl" style={{ color: "var(--accent)" }}>DAYS TO {g.short}</div>
              <Icon name={g.icon} size={18} style={{ color: "var(--muted-2)" }} />
            </div>
            <div className="row" style={{ alignItems: "flex-end", gap: 12, margin: "10px 0 16px" }}>
              <div className="num" style={{ fontSize: 74 }}>{g.remaining}</div>
              <div style={{ paddingBottom: 11, fontSize: 12.5, color: "var(--muted)", lineHeight: 1.4, maxWidth: 140 }}>{g.title}</div>
            </div>
            <DotMatrix total={g.total} done={g.elapsed} todayIndex={g.elapsed} cols={14} gap={6} />
            <div className="row spread" style={{ marginTop: 12 }}>
              <span style={{ fontSize: 11, color: "var(--muted-2)" }}>{g.elapsed} of {g.total} days</span>
              <span style={{ fontSize: 11, color: "var(--muted-2)" }}>{Math.round(g.elapsed/g.total*100)}%</span>
            </div>
            <div className="row" style={{ gap: 16, marginTop: 12 }}>
              <button className="link-btn" onClick={() => store.editGoal(g.id)}>Edit</button>
              <button className="link-btn" onClick={() => store.deleteGoal(g.id)}>Delete</button>
            </div>
          </div>
        ))}
        <button className="goal-add" onClick={store.addGoal}>
          <span className="goal-add-plus"><Icon name="plus" size={20} /></span>
          Add countdown
        </button>
      </div>
      <div className="goal-dots">
        {goals.map((_, i) => <i key={i} className={i === gi ? "on" : ""} />)}
      </div>

      {/* Key tasks */}
      <div className="row spread" style={{ margin: "26px 0 4px" }}>
        <div className="lbl">KEY TASKS</div>
        <div className="lbl" style={{ color: "var(--muted-2)" }}>{keyTasks.length}</div>
      </div>
      <div className="card" style={{ padding: "4px 18px" }}>
        {keyTasks.map((t, i) => (
          <div key={t.id} className="row" style={{ gap: 13, padding: "16px 0", borderTop: i ? "1px solid var(--border)" : "none", alignItems: "flex-start" }}>
            <span className={`dot ${t.priority}`} style={{ marginTop: 6 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14.5, fontWeight: 500 }}>{t.title}</div>
              <MetaLine t={t} />
            </div>
          </div>
        ))}
      </div>

      {/* Projects in focus */}
      {store.focusProjects.length > 0 && (
        <>
          <div className="row spread" style={{ margin: "26px 0 4px" }}>
            <div className="lbl">FOCUS PROJECTS</div>
            <div className="lbl" style={{ color: "var(--muted-2)" }}>{store.projectsOverall}% overall</div>
          </div>
          <div className="card" style={{ padding: "4px 16px" }}>
            {store.focusProjects.map((p, i) => (
              <div key={p.id} className="row" style={{ gap: 12, padding: "14px 0", borderTop: i ? "1px solid var(--border)" : "none", alignItems: "center" }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.name}</div>
                  <div className="proj-bar" style={{ marginTop: 8 }}><i style={{ width: p.progress + "%" }} /></div>
                </div>
                <span className="num" style={{ fontSize: 15, flex: "none" }}>{p.progress}%</span>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Habits */}
      <div className="row spread" style={{ margin: "26px 0 4px" }}>
        <div className="lbl">HABITS</div>
        <div className="lbl" style={{ color: "var(--muted-2)" }}>{doneCount}/{habits.length}</div>
      </div>
      <div className="card" style={{ padding: 18, display: "flex", gap: 16, alignItems: "center" }}>
        <Ring value={doneCount / habits.length} size={66} stroke={7}>
          <div className="num" style={{ fontSize: 19 }}>{doneCount}<span style={{ color: "var(--muted-2)", fontSize: 13 }}>/{habits.length}</span></div>
        </Ring>
        <div style={{ flex: 1 }}>
          {habits.map((h, i) => (
            <div key={h.id} className="row" style={{ gap: 11, padding: "7px 0" }}>
              <button className={`checkbox ${h.done ? "on" : ""}`} onClick={() => toggleHabit(h.id)} style={{ width: 21, height: 21 }}>
                <Icon name="check" size={13} sw={2.4} />
              </button>
              <span style={{ fontSize: 13.5, color: h.done ? "var(--muted)" : "var(--text)", textDecoration: h.done ? "line-through" : "none", textDecorationColor: "var(--faint)" }}>{h.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Finance pulse (hidden until revealed) */}
      <div className="row spread" style={{ margin: "26px 0 4px" }}>
        <div className="lbl">FINANCE · MTD</div>
        <button className="reveal-toggle" onClick={() => setFinShown((s) => !s)}>
          <Icon name={finShown ? "eyeoff" : "eye"} size={14} /> {finShown ? "Hide" : "Reveal"}
        </button>
      </div>
      <div className="card" style={{ padding: 18, position: "relative" }}>
        <div className="col" style={{ alignItems: "center", gap: 14, filter: finShown ? "none" : "blur(9px)", transition: "filter 200ms ease", pointerEvents: finShown ? "auto" : "none" }}>
          <Donut size={132} stroke={18} segments={finance.map((f) => ({ value: f.value, color: f.color }))}>
            <div style={{ textAlign: "center" }}>
              <div className="lbl" style={{ fontSize: 9 }}>NET</div>
              <div className="num" style={{ fontSize: 23 }}>${(finTotal / 1000).toFixed(1)}k</div>
            </div>
          </Donut>
          <div className="col" style={{ gap: 8, width: "100%" }}>
            {finance.map((f) => (
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
        {!finShown && (
          <div className="finance-lock" style={{ top: 0 }}>
            <Icon name="eye" size={18} /><span>Private · tap reveal</span>
          </div>
        )}
      </div>
      <button className="btn-ghost" style={{ width: "100%", marginTop: 12 }} onClick={store.addFinance}>
        <Icon name="plus" size={16} /> Log income / expense
      </button>
    </div>
  );
}

/* ---------- CAPTURE ---------- */
function CaptureScreen({ store }) {
  const { proposed, confirmTask, dismissTask, addThought } = store;
  const [mode, setMode] = mUseState("thought");
  const [listening, setListening] = mUseState(false);
  const [busy, setBusy] = mUseState(false);
  const [text, setText] = mUseState("");
  const recogRef = mUseRef(null);
  const baseRef = mUseRef("");
  const waveHeights = [.3,.6,.9,.5,.8,1,.6,.4,.7,.95,.5,.8,.6,.35,.7,.5,.9,.4,.6,.8,.5,.3,.7];

  mUseEffect(() => () => { try { recogRef.current?.stop(); } catch { /* noop */ } }, []);

  const startListening = () => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { window.alert("Voice input isn't supported in this browser — try Chrome, or just type."); return; }
    const r = new SR();
    r.lang = navigator.language || "en-US";
    r.interimResults = true;
    r.continuous = true;
    baseRef.current = text.trim() ? text.trim() + " " : "";
    r.onresult = (e) => {
      // Rebuild from ALL results each event. Accumulating across events
      // double-counts on mobile engines that re-emit growing results (the
      // "has been...has been..." duplication).
      let txt = "";
      for (let i = 0; i < e.results.length; i++) txt += e.results[i][0].transcript + " ";
      setText((baseRef.current + txt).replace(/\s+/g, " ").trim());
    };
    r.onerror = (e) => { setListening(false); if (e.error !== "no-speech" && e.error !== "aborted") window.alert("Voice error: " + e.error); };
    r.onend = () => setListening(false);
    recogRef.current = r;
    try { r.start(); setListening(true); } catch { /* already running */ }
  };
  const stopListening = () => { try { recogRef.current?.stop(); } catch { /* noop */ } setListening(false); };

  const fileIt = async () => {
    if (!text.trim() || busy) return;
    if (listening) stopListening();
    setBusy(true);
    try { await addThought(text.trim()); setText(""); } finally { setBusy(false); }
  };

  return (
    <div className="screen-pad">
      <ScreenHeader kicker="BRAIN DUMP" title="Capture" />

      <div className="seg" style={{ width: "100%", marginBottom: 16 }}>
        <button className={mode === "thought" ? "on" : ""} style={{ flex: 1 }} onClick={() => setMode("thought")}>Quick thought</button>
        <button className={mode === "convo" ? "on" : ""} style={{ flex: 1 }} onClick={() => setMode("convo")}>Conversation</button>
      </div>

      <textarea className="capture-field" rows={4} value={text} onChange={e => setText(e.target.value)}
        placeholder={mode === "thought" ? "What's on your mind? Anchor will sort it." : "Speak or type a call/meeting. Anchor will pull out the tasks."} />

      {text.trim() && (
        <button className="btn-accent" style={{ width: "100%", marginTop: 12 }} disabled={busy} onClick={fileIt}>
          {busy ? "Filing…" : "File it"}
        </button>
      )}
      <div className="capture-tip">Tip: start with a project name and a colon to file it straight onto that project, for example "PuhuScribe: chose the stack" or "AFAES workspace: done shared the folder".</div>

      {/* Record — live voice dictation (browser speech-to-text) */}
      <div className="col" style={{ alignItems: "center", margin: "22px 0 8px", gap: 12 }}>
        <button className={`record-btn ${listening ? "rec" : ""}`} disabled={busy} onClick={listening ? stopListening : startListening}>
          {listening ? <span className="rec-stop" /> : <Icon name="mic" size={30} />}
        </button>
        <div style={{ fontSize: 12.5, color: listening ? "var(--accent)" : "var(--muted)", fontWeight: 600 }}>
          {listening ? "Listening · tap to stop" : "Tap to dictate"}
        </div>
        {listening && <div style={{ width: "70%" }}><Waveform heights={waveHeights} height={34} /></div>}
      </div>

      {/* Proposed by AI (live) */}
      <div className="row spread" style={{ margin: "20px 0 10px", alignItems: "center" }}>
        <div className="lbl" style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <span className="ai-dot" /> PROPOSED BY AI
        </div>
        <span style={{ fontSize: 11, color: "var(--muted-2)" }}>{proposed.length} proposed</span>
      </div>

      {busy && <div className="empty-note">Filing &amp; extracting tasks…</div>}
      {!busy && proposed.length === 0 && (
        <div className="empty-note">Nothing pending. Capture a thought above and Anchor pulls out the tasks.</div>
      )}
      {proposed.map(t => (
        <div key={t.id} className="proposed-card">
          <div className="row" style={{ gap: 11, alignItems: "flex-start" }}>
            <span className={`dot ${t.priority}`} style={{ marginTop: 5 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14.5, fontWeight: 500 }}>{t.title}</div>
              <div style={{ fontSize: 11.5, color: "var(--muted-2)", marginTop: 4 }}>{t.area}</div>
            </div>
          </div>
          <div className="row" style={{ gap: 8, marginTop: 13 }}>
            <button className="btn-accent" style={{ flex: 1, padding: "9px 0", fontSize: 13 }} onClick={() => confirmTask(t.id)}>
              <Icon name="check" size={15} sw={2.2} /> Confirm
            </button>
            <button className="btn-ghost" style={{ flex: 1, padding: "9px 0", fontSize: 13 }} onClick={() => dismissTask(t.id)}>
              <Icon name="x" size={15} /> Dismiss
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- TASKS ---------- */
function TaskCard({ t, store }) {
  const { confirmTask, dismissTask, completeTask, toggleKey, editTask, deleteTask } = store;
  if (t.status === "proposed") {
    return (
      <div className="proposed-card">
        <div className="row" style={{ gap: 11, alignItems: "flex-start" }}>
          <span className={`dot ${t.priority}`} style={{ marginTop: 5 }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14.5, fontWeight: 500 }}>{t.title}</div>
            <div style={{ fontSize: 11.5, color: "var(--muted-2)", marginTop: 4 }}>{t.area}</div>
          </div>
        </div>
        <div className="row" style={{ gap: 8, marginTop: 13 }}>
          <button className="btn-accent" style={{ flex: 1, padding: "9px 0", fontSize: 13 }} onClick={() => confirmTask(t.id)}><Icon name="check" size={15} sw={2.2} /> Confirm</button>
          <button className="btn-ghost" style={{ flex: 1, padding: "9px 0", fontSize: 13 }} onClick={() => dismissTask(t.id)}><Icon name="x" size={15} /> Dismiss</button>
        </div>
      </div>
    );
  }
  const done = t.status === "done";
  return (
    <div className="task-card" style={{ opacity: done ? 0.55 : 1 }}>
      <div className="row" style={{ gap: 12, alignItems: "flex-start" }}>
        {done
          ? <span className="checkbox on" style={{ width: 22, height: 22, marginTop: 2 }}><Icon name="check" size={13} sw={2.4} /></span>
          : <span className={`dot ${t.priority}`} style={{ marginTop: 7 }} />}
        <div style={{ flex: 1 }}>
          <div className="row" style={{ gap: 7 }}>
            <span style={{ fontSize: 14.5, fontWeight: 500, textDecoration: done ? "line-through" : "none", textDecorationColor: "var(--faint)" }}>{t.title}</span>
            {t.key && !done && (
              <button className="star" onClick={() => toggleKey(t.id)} title="Key task"><Icon name="star" size={14} /></button>
            )}
          </div>
          {!done && <MetaLine t={t} />}
          {done && <div style={{ fontSize: 11.5, color: "var(--muted-2)", marginTop: 4 }}>{t.area}</div>}
        </div>
        {!done && (
          <button className="btn-ghost done-btn" onClick={() => completeTask(t.id)}>
            <Icon name="check" size={14} sw={2} /> Done
          </button>
        )}
      </div>
      <div className="row" style={{ gap: 16, marginTop: 10, paddingLeft: 24 }}>
        <button className="link-btn" onClick={() => editTask(t.id)}>Edit</button>
        <button className="link-btn" onClick={() => deleteTask(t.id)}>Delete</button>
      </div>
    </div>
  );
}

function TasksScreen({ store }) {
  const { tasks } = store;
  const groups = [
    { key: "proposed", label: "PROPOSED" },
    { key: "active", label: "ACTIVE" },
    { key: "done", label: "DONE" },
  ];
  return (
    <div className="screen-pad">
      <ScreenHeader kicker="EVERYTHING ON YOUR PLATE" title="Tasks" />
      {groups.map(g => {
        const items = tasks.filter(t => t.status === g.key);
        if (!items.length) return null;
        return (
          <div key={g.key} style={{ marginBottom: 22 }}>
            <div className="row spread" style={{ margin: "0 0 10px" }}>
              <div className="lbl" style={{ color: g.key === "proposed" ? "var(--accent-text)" : "var(--muted)" }}>{g.label}</div>
              <div className="lbl" style={{ color: "var(--muted-2)" }}>{items.length}</div>
            </div>
            <div className="col" style={{ gap: 10 }}>
              {items.map(t => <TaskCard key={t.id} t={t} store={store} />)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- HABITS ---------- */
function HabitsScreen({ store }) {
  const { habits, toggleHabit, addHabit, editHabit, deleteHabit } = store;
  const doneCount = habits.filter(h => h.done).length;
  const week = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <div className="screen-pad">
      <ScreenHeader kicker="DAILY ANCHORS" title="Habits" />

      <div className="card" style={{ padding: 20, display: "flex", gap: 18, alignItems: "center", marginBottom: 22 }}>
        <Ring value={doneCount / habits.length} size={84} stroke={8}>
          <div><div className="num" style={{ fontSize: 24 }}>{doneCount}<span style={{ color: "var(--muted-2)", fontSize: 14 }}>/{habits.length}</span></div></div>
        </Ring>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, fontWeight: 700 }}>Today's progress</div>
          <div style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 4, lineHeight: 1.45 }}>
            {doneCount === habits.length ? "All anchors held. Good day." : `${habits.length - doneCount} to go before you close the day.`}
          </div>
        </div>
      </div>

      <div className="col" style={{ gap: 10 }}>
        {habits.map(h => {
          const filled = h.streak;
          return (
            <div key={h.id} className="card" style={{ padding: "15px 16px" }}>
              <div className="row" style={{ gap: 13 }}>
                <button className={`checkbox ${h.done ? "on" : ""}`} onClick={() => toggleHabit(h.id)}>
                  <Icon name="check" size={14} sw={2.4} />
                </button>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14.5, fontWeight: 500 }}>{h.label}</div>
                  <div style={{ fontSize: 11.5, color: "var(--muted-2)", marginTop: 2 }}>{h.cue}</div>
                </div>
                <div className="col" style={{ alignItems: "flex-end", gap: 6 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 700, color: "var(--accent-text)" }}>{filled}<span style={{ color: "var(--muted-2)" }}>/7</span></div>
                  <div className="row" style={{ gap: 4 }}>
                    {week.map((_, i) => <span key={i} style={{ width: 6, height: 6, borderRadius: 2, background: i < filled ? "var(--accent)" : "var(--dot-off)" }} />)}
                  </div>
                </div>
              </div>
              <div className="row" style={{ gap: 16, marginTop: 10, paddingLeft: 37 }}>
                <button className="link-btn" onClick={() => editHabit(h.id)}>Edit</button>
                <button className="link-btn" onClick={() => deleteHabit(h.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
      <button className="btn-ghost" style={{ width: "100%", marginTop: 14 }} onClick={addHabit}>
        <Icon name="plus" size={16} /> Add habit
      </button>
    </div>
  );
}

/* ---------- PROJECTS ---------- */
function ProjectRow({ p, store }) {
  const [open, setOpen] = mUseState(false);
  const [adding, setAdding] = mUseState(false);
  const [text, setText] = mUseState("");
  const dot = { high: "red", medium: "amber", low: "grey" }[p.priority] || "grey";
  const addStep = () => {
    const t = text.trim();
    if (!t) { setAdding(false); return; }
    store.addProjectStep(p.id, t);
    setText("");
  };
  const removeProject = () => {
    if (window.confirm(`Remove "${p.name}" from your projects?`)) store.deleteProject(p.id);
  };
  return (
    <div className={`card proj-m-card ${open ? "open" : ""} ${p.focus ? "foc" : ""}`}>
      <button className="proj-m-head" onClick={() => setOpen((o) => !o)}>
        <div className="row spread" style={{ gap: 10 }}>
          <span className="proj-m-name">
            <span className={`dot ${dot}`} /> {p.name}
            {p.focus && <span className="foc-tag">focus</span>}
          </span>
          <span className="num" style={{ fontSize: 16 }}>{p.progress}%</span>
        </div>
        <div className="proj-bar" style={{ margin: "10px 0 8px" }}><i style={{ width: p.progress + "%" }} /></div>
        <div className="row spread">
          <span className="proj-steps"><b>{p.done}/{p.total}</b> steps done</span>
          <Icon name="chevdown" size={16} sw={1.8} style={{ color: "var(--muted-2)", transform: open ? "rotate(180deg)" : "none", transition: "transform 160ms ease" }} />
        </div>
      </button>
      {open && (
        <div className="proj-ms" style={{ borderTop: "1px solid var(--border)", padding: "6px 6px 10px" }}>
          {p.next && <div className="proj-m-next">{p.next}</div>}
          {p.milestones.map((m, i) => (
            <div key={i} className="ms-line">
              <button className={`ms-row ${m.done ? "on" : ""}`} onClick={() => store.toggleMilestone(p.id, i)}>
                <span className="ms-box"><Icon name="check" size={12} sw={2.6} /></span>
                <span className="ms-text">{m.text}</span>
              </button>
              <button className="ms-del" onClick={() => store.deleteProjectStep(p.id, i)} aria-label="Delete step"><Icon name="x" size={13} /></button>
            </div>
          ))}
          {p.milestones.length === 0 && <div className="proj-m-next" style={{ padding: "8px" }}>No steps yet. Add the first one below.</div>}
          {adding ? (
            <div className="row" style={{ gap: 8, padding: "6px 6px 2px" }}>
              <input className="proj-add-input" autoFocus value={text} placeholder="New step…"
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") addStep(); if (e.key === "Escape") { setText(""); setAdding(false); } }} />
              <button className="btn-accent" style={{ padding: "8px 12px", fontSize: 12.5 }} onClick={addStep}>Add</button>
            </div>
          ) : (
            <button className="proj-add-step" onClick={() => setAdding(true)}><Icon name="plus" size={14} /> Add a step</button>
          )}
          <div className="row" style={{ gap: 16, padding: "10px 8px 2px" }}>
            <button className="link-btn" style={{ color: p.focus ? "var(--accent-text)" : "var(--muted)" }} onClick={() => store.toggleFocus(p.id)}>
              {p.focus ? "In focus ✓" : "Add to focus"}
            </button>
            <button className="link-btn" onClick={removeProject}>Remove</button>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectsScreen({ store }) {
  const { projects, focusProjects, projectsOverall, addProject } = store;
  const [tab, setTab] = mUseState("focus");
  const totalSteps = projects.reduce((a, p) => a + p.total, 0);
  const doneSteps = projects.reduce((a, p) => a + p.done, 0);
  const list = tab === "focus" ? focusProjects : projects;
  const newProject = () => {
    const name = window.prompt("New project name");
    if (name && name.trim()) addProject(name.trim());
  };
  return (
    <div className="screen-pad">
      <ScreenHeader kicker="WHAT YOU'RE BUILDING" title="Projects"
        right={<Ring value={projectsOverall / 100} size={54} stroke={6}><div className="num" style={{ fontSize: 14 }}>{projectsOverall}<span style={{ color: "var(--muted-2)", fontSize: 10 }}>%</span></div></Ring>} />
      <div className="seg" style={{ width: "100%", marginBottom: 14 }}>
        <button className={tab === "focus" ? "on" : ""} style={{ flex: 1 }} onClick={() => setTab("focus")}>Focus ({focusProjects.length})</button>
        <button className={tab === "all" ? "on" : ""} style={{ flex: 1 }} onClick={() => setTab("all")}>All ({projects.length})</button>
      </div>
      {tab === "all" && (
        <div className="lbl" style={{ color: "var(--muted-2)", margin: "0 0 10px" }}>{doneSteps}/{totalSteps} STEPS DONE OVERALL</div>
      )}
      <div className="col" style={{ gap: 10 }}>
        {list.map((p) => <ProjectRow key={p.id} p={p} store={store} />)}
        {list.length === 0 && (
          <div className="empty-note">{tab === "focus" ? "No projects in focus. Open All and tap “Add to focus” on the ones to work first." : "No projects yet."}</div>
        )}
      </div>
      <button className="btn-ghost" style={{ width: "100%", marginTop: 14 }} onClick={newProject}>
        <Icon name="plus" size={16} /> New project
      </button>
    </div>
  );
}

/* ---------- tab bar + phone frame ---------- */
const TABS = [
  { id: "today", label: "Today", icon: "today" },
  { id: "capture", label: "Capture", icon: "capture" },
  { id: "projects", label: "Projects", icon: "projects" },
  { id: "tasks", label: "Tasks", icon: "tasks" },
  { id: "habits", label: "Habits", icon: "habits" },
];

function TabBar({ active, setActive, badge }) {
  return (
    <div className="tabbar">
      {TABS.map(t => {
        const on = active === t.id;
        return (
          <button key={t.id} className={`tab ${on ? "on" : ""}`} onClick={() => setActive(t.id)}>
            <span style={{ position: "relative", display: "grid", placeItems: "center" }}>
              <Icon name={t.icon} size={21} sw={on ? 1.9 : 1.6} />
              {t.id === "capture" && badge > 0 && <span className="tab-badge">{badge}</span>}
            </span>
            <span className="tab-label">{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function Phone({ initial, store }) {
  const [active, setActive] = mUseState(initial);
  const Screen = { today: TodayScreen, capture: CaptureScreen, projects: ProjectsScreen, tasks: TasksScreen, habits: HabitsScreen }[active];
  return (
    <div className="phone-wrap">
      <div className="phone">
        <div className="screen">
          <div className="island" />
          <div className="statusbar">
            <span>9:41</span>
            <span className="status-icons"><i className="sig" /><i className="wifi" /><i className="batt" /></span>
          </div>
          <div className="screen-body scroll-y">
            <Screen store={store} />
          </div>
          <TabBar active={active} setActive={setActive} badge={store.proposed.length} />
        </div>
      </div>
      <div className="phone-cap">{TABS.find(t => t.id === active).label}</div>
    </div>
  );
}

/* Full-screen mobile app (no device frame) — the real, usable app. */
export function MobileShell({ store }) {
  const [active, setActive] = mUseState("today");
  const Screen = { today: TodayScreen, capture: CaptureScreen, projects: ProjectsScreen, tasks: TasksScreen, habits: HabitsScreen }[active];
  return (
    <div className="app-shell">
      <div className="screen-body scroll-y">
        <Screen store={store} />
      </div>
      <TabBar active={active} setActive={setActive} badge={store.proposed.length} />
    </div>
  );
}

export function MobileApp({ store }) {
  return (
    <div className="phones-row">
      <Phone initial="today" store={store} />
      <Phone initial="capture" store={store} />
      <Phone initial="tasks" store={store} />
      <Phone initial="habits" store={store} />
    </div>
  );
}
