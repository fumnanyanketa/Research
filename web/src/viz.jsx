/* Anchor — data-viz primitives. SVG, accent-driven. */
import { useMemo } from "react";

/* Circular progress ring with centered content */
export function Ring({ value = 0, size = 72, stroke = 7, track = "var(--dot-off)", color = "var(--accent)", glow = false, children }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const off = c * (1 - Math.max(0, Math.min(1, value)));
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)", display: "block" }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
          strokeDasharray={c} strokeDashoffset={off} strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 480ms cubic-bezier(.2,.7,.2,1)", filter: glow ? "drop-shadow(0 0 6px var(--accent-glow))" : "none" }} />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", textAlign: "center" }}>
        {children}
      </div>
    </div>
  );
}

/* Multi-segment donut */
export function Donut({ segments, size = 150, stroke = 20, children }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  let acc = 0;
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)", display: "block" }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--dot-off)" strokeWidth={stroke} />
        {segments.map((s, i) => {
          const frac = s.value / total;
          const dash = c * frac;
          const gap = c - dash;
          const dashoffset = -acc * c;
          acc += frac;
          return (
            <circle key={i} cx={size/2} cy={size/2} r={r} fill="none" stroke={s.color}
              strokeWidth={stroke} strokeDasharray={`${Math.max(dash - 2, 0)} ${gap + 2}`} strokeDashoffset={dashoffset}
              style={{ transition: "stroke-dasharray 500ms ease" }} />
          );
        })}
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", textAlign: "center" }}>
        {children}
      </div>
    </div>
  );
}

/* Bar / waveform mini-chart. heights: array 0..1 ; filled = how many are "on" */
export function Waveform({ heights, filled, height = 56 }) {
  return (
    <div className="waveform" style={{ height }}>
      {heights.map((h, i) => (
        <i key={i} className={filled != null && i >= filled ? "off" : ""} style={{ height: `${Math.max(8, h * 100)}%` }} />
      ))}
    </div>
  );
}

/* Dotted progress matrix — total dots, "done" filled, optional "today" marker index */
export function DotMatrix({ total, done, todayIndex, cols = 20, gap = 7 }) {
  const dots = useMemo(() => Array.from({ length: total }), [total]);
  return (
    <div className="dotmatrix" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gap }}>
      {dots.map((_, i) => {
        let cls = "d";
        if (i === todayIndex) cls += " today";
        else if (i < done) cls += " on";
        return <span key={i} className={cls} />;
      })}
    </div>
  );
}

/* Thin line chart with nodes + a floating callout on the peak */
export function LineChart({ points, width = 320, height = 90, callout }) {
  const max = Math.max(...points), min = Math.min(...points);
  const span = max - min || 1;
  const px = (i) => (i / (points.length - 1)) * width;
  const py = (v) => height - 8 - ((v - min) / span) * (height - 24);
  const path = points.map((v, i) => `${i === 0 ? "M" : "L"} ${px(i).toFixed(1)} ${py(v).toFixed(1)}`).join(" ");
  const peak = points.indexOf(max);
  return (
    <svg width="100%" viewBox={`0 0 ${width} ${height}`} style={{ display: "block", overflow: "visible" }}>
      <path d={path} fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {points.map((v, i) => (
        <circle key={i} cx={px(i)} cy={py(v)} r={i === peak ? 5 : 3.5}
          fill={i === peak ? "var(--accent)" : "var(--card)"} stroke="var(--accent)" strokeWidth="2" />
      ))}
      {callout && (
        <g transform={`translate(${px(peak)}, ${py(max) - 26})`}>
          <rect x="-26" y="-13" width="52" height="22" rx="11" fill="var(--accent)" />
          <text x="0" y="2" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--accent-ink)" fontFamily="Satoshi">{callout}</text>
        </g>
      )}
    </svg>
  );
}
