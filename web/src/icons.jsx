/* Anchor — thin-stroke line icon set. Single weight, currentColor. */
export const Icon = ({ name, size = 20, sw = 1.6, style, className }) => {
  const P = {
    today:   <><circle cx="12" cy="12" r="3.4"/><path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6"/></>,
    capture: <><path d="M12 5v14M5 12h14"/></>,
    tasks:   <><path d="M4 6.5h2M4 12h2M4 17.5h2"/><path d="M9.5 6.5H20M9.5 12H20M9.5 17.5H20"/></>,
    habits:  <><path d="M17 4l3 3-3 3"/><path d="M20 7H8a4 4 0 0 0-4 4v0"/><path d="M7 20l-3-3 3-3"/><path d="M4 17h12a4 4 0 0 0 4-4v0"/></>,
    mic:     <><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3M8.5 21h7"/></>,
    star:    <path d="M12 3.5l2.6 5.3 5.9.86-4.25 4.14 1 5.86L12 17.1l-5.25 2.76 1-5.86L3.5 9.66l5.9-.86z"/>,
    check:   <path d="M4 12.5l5 5 11-11"/>,
    plus:    <path d="M12 5v14M5 12h14"/>,
    x:       <path d="M6 6l12 12M18 6L6 18"/>,
    chevron: <path d="M9 6l6 6-6 6"/>,
    chevdown:<path d="M6 9l6 6 6-6"/>,
    bell:    <><path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6"/><path d="M10 21h4"/></>,
    search:  <><circle cx="11" cy="11" r="6.5"/><path d="M20 20l-3.5-3.5"/></>,
    settings:<><circle cx="12" cy="12" r="3"/><path d="M19.4 13.5a1.6 1.6 0 0 0 .32 1.76l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.6 1.6 0 0 0-2.7 1.13V21a2 2 0 0 1-4 0v-.09A1.6 1.6 0 0 0 6.6 19.4l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.6 1.6 0 0 0 4.6 14H4a2 2 0 0 1 0-4h.09A1.6 1.6 0 0 0 5.6 7.3l-.06-.06A2 2 0 1 1 8.37 4.4l.06.06A1.6 1.6 0 0 0 10 4.6V4a2 2 0 0 1 4 0v.09A1.6 1.6 0 0 0 16.7 5.6l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.6 1.6 0 0 0 19.4 11H20a2 2 0 0 1 0 4h-.09"/></>,
    eye:     <><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/></>,
    eyeoff:  <><path d="M9.5 5.8A8.7 8.7 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a16 16 0 0 1-2.9 3.6M6.2 6.7A16 16 0 0 0 2.5 12S6 18.5 12 18.5a8.7 8.7 0 0 0 3.3-.65M10 10a3 3 0 0 0 4 4"/><path d="M3 3l18 18"/></>,
    calendar:<><rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 9.5h17M8 3v4M16 3v4"/></>,
    arrow:   <path d="M5 12h14M13 6l6 6-6 6"/>,
    biz:     <><rect x="3" y="7.5" width="18" height="12" rx="2"/><path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5M3 13h18"/></>,
    camera:  <><path d="M3 8.5A2 2 0 0 1 5 6.5h1.2l1-1.6h5.6l1 1.6H19a2 2 0 0 1 2 2v8A2 2 0 0 1 19 18.5H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="12.5" r="3.2"/></>,
    job:     <><path d="M4 21V8l8-4 8 4v13"/><path d="M9 21v-5h6v5M3 21h18"/></>,
    money:   <><rect x="2.5" y="6" width="19" height="12" rx="2.5"/><circle cx="12" cy="12" r="2.6"/><path d="M6 12h.01M18 12h.01"/></>,
    lang:    <><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.4 2.5 14.6 0 17M12 3.5c-2.5 2.4-2.5 14.6 0 17"/></>,
    body:    <><path d="M12 21s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.4-7 10-7 10z"/></>,
    mind:    <><path d="M5 5.5h11a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H5z"/><path d="M5 11.5h12a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H5zM5 4v15"/></>,
    user:    <><circle cx="12" cy="8.5" r="3.6"/><path d="M5 20a7 7 0 0 1 14 0"/></>,
    anchor:  <><circle cx="12" cy="5" r="2"/><path d="M12 7v13M5 13a7 7 0 0 0 14 0M3.5 13H6M18 13h2.5"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"
      style={style} className={className}>
      {P[name]}
    </svg>
  );
};
