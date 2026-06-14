/* Anchor — responsive app shell, wired to the live store. */
import { useState, useEffect } from "react";
import { MobileShell } from "./mobile.jsx";
import { DesktopApp } from "./desktop.jsx";
import { useAnchorStore } from "./lib/store.js";

function ViewToggle({ value, onChange }) {
  const opts = [["auto", "Auto"], ["mobile", "Phone"], ["desktop", "Desk"]];
  return (
    <div className="view-toggle" role="group" aria-label="View">
      {opts.map(([v, label]) => (
        <button key={v} className={value === v ? "on" : ""} onClick={() => onChange(v)}>{label}</button>
      ))}
    </div>
  );
}

export default function App() {
  const store = useAnchorStore();

  // Responsive: phone-width visitors get the mobile app, wider screens get the
  // dashboard. `override` lets you force either view (handy on a phone).
  const [view, setView] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(min-width: 820px)").matches
      ? "desktop"
      : "mobile",
  );
  const [override, setOverride] = useState("auto");
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 820px)");
    const onChange = (e) => setView(e.matches ? "desktop" : "mobile");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (store.loading) {
    return <div className="boot">Loading Anchor…</div>;
  }

  const effective = override === "auto" ? view : override;
  return (
    <>
      {effective === "mobile" ? (
        <MobileShell store={store} />
      ) : (
        <div className="dash-shell">
          <DesktopApp store={store} />
        </div>
      )}
      <ViewToggle value={override} onChange={setOverride} />
    </>
  );
}
