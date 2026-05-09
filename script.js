/* ===================================================
   OdishaLearn — CHSE Odisha Platform Script
   Complete Class 11 & 12 Syllabus (2025-26)
   Fixed: Heatmap width rendering & Mobile tap details
   =================================================== */

// ===== SVG ICON LIBRARY =====
const ICONS = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  dashboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 6.042A8.967A8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/></svg>`,
  map: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c-.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"/></svg>`,
  chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
  bookmark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"/></svg>`,
  bookmarkFilled: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5"><path d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"/></svg>`,
  pen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  chevronDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>`,
  arrowLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
  skipBack: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 20L9 12l10-8v16M5 19V5"/></svg>`,
  skipForward: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 4l10 8-10 8V4M19 5v14"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"/><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  bell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/></svg>`,
  fire: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"/><path d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"/></svg>`,
  target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/></svg>`,
  graduation: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5z"/></svg>`,
  video: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/></svg>`,
  listBullet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/></svg>`,
  folder: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 18L18 6M6 6l12 12"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
  atom: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg>`,
  flask: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 3h6m-5 0v6.5L5.52 17A2 2 0 007 21h10a2 2 0 001.48-3.5L14 9.5V3"/><path d="M6 17h12"/></svg>`,
  sigma: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 4H6l7 8-7 8h12"/></svg>`,
  leaf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22V12m0 0C12 6 6 3 2 5c0 6 4 9 8 9a7 7 0 007-7c0-4-2-7-6-7-3.5 0-6 2.5-6 6"/></svg>`,
  computer: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/></svg>`,
  document: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>`,
  lightning: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>`,
  hospital: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"/></svg>`,
  bank: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"/></svg>`,
  scale: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"/></svg>`,
  briefcase: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="12.01"/></svg>`,
  brain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2C9.5 2 7 4 7 7c0 1-.3 1.9-.8 2.6C5.5 10.5 5 11.7 5 13c0 3 2.5 5.5 5.5 6.5v1.5c0 .5.5 1 1 1h1c.5 0 1-.5 1-1V19.5c3-1 5.5-3.5 5.5-6.5 0-1.3-.5-2.5-1.2-3.4-.5-.7-.8-1.6-.8-2.6C17 4 14.5 2 12 2z"/></svg>`,
  expand: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"/></svg>`,
  compress: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/></svg>`,
  trophy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"/></svg>`,
  odia: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3C7 3 4 7 4 12s3 9 8 9 8-4 8-9-3-9-8-9z"/><path d="M8 12c0-2 1.5-4 4-4s4 2 4 4-1.5 4-4 4"/><path d="M12 8v8"/></svg>`,
};

// ===== DATA STORE =====
const DB = {
  get: (k) => {
    try {
      return JSON.parse(localStorage.getItem("ol_" + k));
    } catch {
      return null;
    }
  },
  set: (k, v) => localStorage.setItem("ol_" + k, JSON.stringify(v)),
  del: (k) => localStorage.removeItem("ol_" + k),
};

// ===== COMPLETE CHSE ODISHA SYLLABUS DATA (2025-26) =====
const SYLLABUS = {
  Physics: {
    11: [
      {
        unit: "Unit I: Physical World and Measurement",
        chapters: [
          {
            id: "ph11_1_1",
            title: "Physical World",
            desc: "Scope and excitement of Physics. Fundamental forces in nature.",
            videoUrl: "https://youtu.be/tx76BJIqOd4",
          },
          {
            id: "ph11_1_2",
            title: "Units and Measurements",
            desc: "Systems of units. SI units. Significant figures. Errors.",
            videoUrl: "https://youtu.be/tx76BJIqOd4",
          },
        ],
      },
      {
        unit: "Unit II: Kinematics",
        chapters: [
          {
            id: "ph11_2_1",
            title: "Motion in a Straight Line",
            desc: "Displacement. Velocity. Acceleration. Equations of motion.",
            videoUrl: "https://youtu.be/HYQdPGN3ZXQ",
          },
          {
            id: "ph11_2_2",
            title: "Motion in a Plane",
            desc: "Vectors. Projectile motion. Uniform circular motion.",
            videoUrl: "https://youtu.be/JYdznU0Zps0",
          },
        ],
      },
      {
        unit: "Unit III: Laws of Motion",
        chapters: [
          {
            id: "ph11_3_1",
            title: "Laws of Motion",
            desc: "Newton's laws of motion. Conservation of momentum. Friction.",
            videoUrl: "https://youtu.be/PLQ0_vZF25o",
          },
        ],
      },
      {
        unit: "Unit IV: Work, Energy and Power",
        chapters: [
          {
            id: "ph11_4_1",
            title: "Work, Energy and Power",
            desc: "Kinetic energy. Work-energy theorem. Power. Potential energy.",
            videoUrl: "https://youtu.be/eACeA8W0tCQ",
          },
        ],
      },
      {
        unit: "Unit V: Motion of System of Particles and Rigid Body",
        chapters: [
          {
            id: "ph11_5_1",
            title: "System of Particles and Rotational Motion",
            desc: "Centre of mass. Moment of inertia. Torque. Angular momentum.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit VI: Gravitation",
        chapters: [
          {
            id: "ph11_6_1",
            title: "Gravitation",
            desc: "Kepler's laws. Universal law of gravitation. Escape speed.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit VII: Properties of Bulk Matter",
        chapters: [
          {
            id: "ph11_7_1",
            title: "Mechanical Properties of Solids",
            desc: "Stress and strain. Hooke's law. Elastic moduli.",
            videoUrl: "",
          },
          {
            id: "ph11_7_2",
            title: "Mechanical Properties of Fluids",
            desc: "Pascal's law. Buoyancy. Bernoulli's theorem. Viscosity.",
            videoUrl: "",
          },
          {
            id: "ph11_7_3",
            title: "Thermal Properties of Matter",
            desc: "Thermal expansion. Specific heat capacity. Calorimetry.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit VIII: Thermodynamics",
        chapters: [
          {
            id: "ph11_8_1",
            title: "Thermodynamics",
            desc: "Thermal equilibrium. First law. Isothermal processes. Second law.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit IX: Kinetic Theory",
        chapters: [
          {
            id: "ph11_9_1",
            title: "Kinetic Theory",
            desc: "Equation of state. Kinetic theory of gases. Degrees of freedom.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit X: Oscillations and Waves",
        chapters: [
          {
            id: "ph11_10_1",
            title: "Oscillations",
            desc: "Simple harmonic motion. Energy in SHM. Resonance.",
            videoUrl: "",
          },
          {
            id: "ph11_10_2",
            title: "Waves",
            desc: "Wave motion. Principle of superposition. Doppler effect.",
            videoUrl: "",
          },
        ],
      },
    ],
    12: [
      {
        unit: "Unit I: Electrostatics",
        chapters: [
          {
            id: "ph12_1_1",
            title: "Electric Charges and Fields",
            desc: "Coulomb's law. Electric field. Gauss's theorem.",
            videoUrl: "",
          },
          {
            id: "ph12_1_2",
            title: "Electrostatic Potential and Capacitance",
            desc: "Electric potential. Capacitors and capacitance. Dielectrics.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit II: Current Electricity",
        chapters: [
          {
            id: "ph12_2_1",
            title: "Current Electricity",
            desc: "Electric current. Ohm's law. Resistance. Kirchhoff's laws.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit III: Magnetic Effects of Current and Magnetism",
        chapters: [
          {
            id: "ph12_3_1",
            title: "Moving Charges and Magnetism",
            desc: "Magnetic force. Biot-Savart law. Ampere's law.",
            videoUrl: "",
          },
          {
            id: "ph12_3_2",
            title: "Magnetism and Matter",
            desc: "Bar magnet. Earth's magnetism. Magnetic materials.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit IV: Electromagnetic Induction and AC",
        chapters: [
          {
            id: "ph12_4_1",
            title: "Electromagnetic Induction",
            desc: "Faraday's laws. Lenz's law. Self and mutual inductance.",
            videoUrl: "",
          },
          {
            id: "ph12_4_2",
            title: "Alternating Current",
            desc: "LCR series circuit. Resonance. Power factor. Transformer.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit V: Electromagnetic Waves",
        chapters: [
          {
            id: "ph12_5_1",
            title: "Electromagnetic Waves",
            desc: "Displacement current. EM spectrum.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit VI: Optics",
        chapters: [
          {
            id: "ph12_6_1",
            title: "Ray Optics and Optical Instruments",
            desc: "Reflection and refraction. TIR. Optical instruments.",
            videoUrl: "",
          },
          {
            id: "ph12_6_2",
            title: "Wave Optics",
            desc: "Huygens principle. Interference. Diffraction. Polarisation.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit VII: Dual Nature of Matter and Radiation",
        chapters: [
          {
            id: "ph12_7_1",
            title: "Dual Nature of Radiation and Matter",
            desc: "Photoelectric effect. Einstein's equation. De Broglie hypothesis.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit VIII: Atoms and Nuclei",
        chapters: [
          {
            id: "ph12_8_1",
            title: "Atoms",
            desc: "Rutherford experiment. Bohr model. Hydrogen spectrum.",
            videoUrl: "",
          },
          {
            id: "ph12_8_2",
            title: "Nuclei",
            desc: "Binding energy. Radioactivity. Nuclear fission and fusion.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit IX: Electronic Devices",
        chapters: [
          {
            id: "ph12_9_1",
            title: "Semiconductor Electronics",
            desc: "Semiconductor diode. Transistor. Logic gates.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit X: Communication Systems",
        chapters: [
          {
            id: "ph12_10_1",
            title: "Communication Systems",
            desc: "Modulation. Internet and mobile communication.",
            videoUrl: "",
          },
        ],
      },
    ],
  },
  Chemistry: {
    11: [
      {
        unit: "Unit I: Basic Concepts",
        chapters: [
          {
            id: "ch11_1_1",
            title: "Some Basic Concepts of Chemistry",
            desc: "Mole concept and molar mass. Stoichiometry.",
            videoUrl: "https://youtu.be/1t9Dq4wyhBw",
          },
        ],
      },
      {
        unit: "Unit II: Structure of Atom",
        chapters: [
          {
            id: "ch11_2_1",
            title: "Structure of Atom",
            desc: "Atomic models. Quantum numbers. Electronic configuration.",
            videoUrl: "https://youtu.be/S7uLXHDTamo",
          },
        ],
      },
      {
        unit: "Unit III: Periodicity",
        chapters: [
          {
            id: "ch11_3_1",
            title: "Classification of Elements and Periodicity",
            desc: "Modern periodic law. Periodic trends.",
            videoUrl: "https://youtu.be/2qFfEuUzqmk",
          },
        ],
      },
      {
        unit: "Unit IV: Chemical Bonding",
        chapters: [
          {
            id: "ch11_4_1",
            title: "Chemical Bonding and Molecular Structure",
            desc: "Ionic and covalent bonds. VSEPR theory. Hybridisation.",
            videoUrl:
              "https://www.youtube.com/live/1UicWFJtcLc?si=04v3Vw8Wk0-ldZpW",
          },
        ],
      },
      {
        unit: "Unit V: States of Matter",
        chapters: [
          {
            id: "ch11_5_1",
            title: "States of Matter: Gases and Liquids",
            desc: "Gas laws. Ideal gas equation.",
            videoUrl:
              "https://www.youtube.com/live/1UicWFJtcLc?si=zECswl8G6D5HnEjr",
          },
        ],
      },
      {
        unit: "Unit VI: Thermodynamics",
        chapters: [
          {
            id: "ch11_6_1",
            title: "Thermodynamics",
            desc: "First law. Enthalpy. Hess's law. Entropy. Spontaneity.",
            videoUrl:
              "https://www.youtube.com/live/1UicWFJtcLc?si=zECswl8G6D5HnEjr",
          },
        ],
      },
      {
        unit: "Unit VII: Equilibrium",
        chapters: [
          {
            id: "ch11_7_1",
            title: "Equilibrium",
            desc: "Le Chatelier's principle. Ionic equilibrium. pH.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit VIII: Redox Reactions",
        chapters: [
          {
            id: "ch11_8_1",
            title: "Redox Reactions",
            desc: "Oxidation number. Balancing redox reactions.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit IX: Hydrogen",
        chapters: [
          {
            id: "ch11_9_1",
            title: "Hydrogen",
            desc: "Preparation and properties of hydrogen. Water.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit X: s-Block",
        chapters: [
          {
            id: "ch11_10_1",
            title: "The s-Block Elements",
            desc: "Group 1 and 2 elements.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit XI: p-Block",
        chapters: [
          {
            id: "ch11_11_1",
            title: "Some p-Block Elements",
            desc: "Group 13 and 14 elements.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit XII: Organic Chemistry",
        chapters: [
          {
            id: "ch11_12_1",
            title: "Organic Chemistry: Basic Principles",
            desc: "IUPAC nomenclature. Electronic displacement.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit XIII: Hydrocarbons",
        chapters: [
          {
            id: "ch11_13_1",
            title: "Hydrocarbons",
            desc: "Alkanes, alkenes, alkynes. Aromatic hydrocarbons.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit XIV: Environmental Chemistry",
        chapters: [
          {
            id: "ch11_14_1",
            title: "Environmental Chemistry",
            desc: "Atmospheric and water pollution. Green chemistry.",
            videoUrl: "",
          },
        ],
      },
    ],
    12: [
      {
        unit: "Unit I: Solid State",
        chapters: [
          {
            id: "ch12_1_1",
            title: "The Solid State",
            desc: "Crystal lattices. Close-packed structures. Imperfections.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit II: Solutions",
        chapters: [
          {
            id: "ch12_2_1",
            title: "Solutions",
            desc: "Raoult's law. Colligative properties.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit III: Electrochemistry",
        chapters: [
          {
            id: "ch12_3_1",
            title: "Electrochemistry",
            desc: "Galvanic cells. Nernst equation. Batteries.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit IV: Chemical Kinetics",
        chapters: [
          {
            id: "ch12_4_1",
            title: "Chemical Kinetics",
            desc: "Rate of reaction. Integrated rate equations.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit V: Surface Chemistry",
        chapters: [
          {
            id: "ch12_5_1",
            title: "Surface Chemistry",
            desc: "Adsorption. Catalysis. Colloids.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit VI: Isolation of Elements",
        chapters: [
          {
            id: "ch12_6_1",
            title: "Isolation of Elements",
            desc: "Concentration of ores. Refining.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit VII: p-Block Elements",
        chapters: [
          {
            id: "ch12_7_1",
            title: "The p-Block Elements",
            desc: "Groups 15 to 18.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit VIII: d- and f-Block",
        chapters: [
          {
            id: "ch12_8_1",
            title: "The d- and f-Block Elements",
            desc: "Properties of transition elements.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit IX: Coordination Compounds",
        chapters: [
          {
            id: "ch12_9_1",
            title: "Coordination Compounds",
            desc: "Werner's theory. IUPAC nomenclature.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit X: Haloalkanes",
        chapters: [
          {
            id: "ch12_10_1",
            title: "Haloalkanes and Haloarenes",
            desc: "SN1 and SN2 mechanisms.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit XI: Alcohols",
        chapters: [
          {
            id: "ch12_11_1",
            title: "Alcohols, Phenols and Ethers",
            desc: "Preparation and properties.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit XII: Aldehydes",
        chapters: [
          {
            id: "ch12_12_1",
            title: "Aldehydes, Ketones and Carboxylic Acids",
            desc: "Aldol condensation. Cannizzaro reaction.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit XIII: Amines",
        chapters: [
          {
            id: "ch12_13_1",
            title: "Amines",
            desc: "Preparation and properties of amines.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit XIV: Biomolecules",
        chapters: [
          {
            id: "ch12_14_1",
            title: "Biomolecules",
            desc: "Carbohydrates, proteins, nucleic acids.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit XV: Polymers",
        chapters: [
          {
            id: "ch12_15_1",
            title: "Polymers",
            desc: "Classification and types of polymerisation.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit XVI: Everyday Chemistry",
        chapters: [
          {
            id: "ch12_16_1",
            title: "Chemistry in Everyday Life",
            desc: "Drugs, food chemicals, cleansing agents.",
            videoUrl: "",
          },
        ],
      },
    ],
  },
  Mathematics: {
    11: [
      {
        unit: "Unit I: Sets and Functions",
        chapters: [
          {
            id: "ma11_1_1",
            title: "Sets",
            desc: "Sets and their representations. Venn diagrams.",
            videoUrl: "https://youtu.be/F_7WUK7htRg",
          },
          {
            id: "ma11_1_2",
            title: "Relations and Functions",
            desc: "Ordered pairs. Domain, range.",
            videoUrl: "https://youtu.be/4VXUlNRlT3c",
          },
          {
            id: "ma11_1_3",
            title: "Trigonometric Functions",
            desc: "Measuring angles. Trigonometric graphs.",
            videoUrl: "https://youtu.be/kcSMOgFRp6w",
          },
        ],
      },
      {
        unit: "Unit II: Algebra",
        chapters: [
          {
            id: "ma11_2_1",
            title: "Mathematical Induction",
            desc: "Principle of mathematical induction.",
            videoUrl: "",
          },
          {
            id: "ma11_2_2",
            title: "Complex Numbers",
            desc: "Polar form. Quadratic equations.",
            videoUrl: "",
          },
          {
            id: "ma11_2_3",
            title: "Linear Inequalities",
            desc: "Algebraic solutions of linear inequalities.",
            videoUrl: "",
          },
          {
            id: "ma11_2_4",
            title: "Permutations and Combinations",
            desc: "nPr and nCr applications.",
            videoUrl: "",
          },
          {
            id: "ma11_2_5",
            title: "Binomial Theorem",
            desc: "Pascal's triangle. General term.",
            videoUrl: "",
          },
          {
            id: "ma11_2_6",
            title: "Sequences and Series",
            desc: "AP and GP.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit III: Coordinate Geometry",
        chapters: [
          {
            id: "ma11_3_1",
            title: "Straight Lines",
            desc: "Slope of a line. Equations of lines.",
            videoUrl: "",
          },
          {
            id: "ma11_3_2",
            title: "Conic Sections",
            desc: "Circle, Parabola, Ellipse, Hyperbola.",
            videoUrl: "",
          },
          {
            id: "ma11_3_3",
            title: "3D Geometry Intro",
            desc: "Coordinate axes in 3D. Distance formula.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit IV: Calculus",
        chapters: [
          {
            id: "ma11_4_1",
            title: "Limits and Derivatives",
            desc: "Intuitive idea of limits. Derivatives.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit V: Mathematical Reasoning",
        chapters: [
          {
            id: "ma11_5_1",
            title: "Mathematical Reasoning",
            desc: "Mathematically acceptable statements.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit VI: Statistics and Probability",
        chapters: [
          {
            id: "ma11_6_1",
            title: "Statistics",
            desc: "Measures of dispersion. Variance.",
            videoUrl: "",
          },
          {
            id: "ma11_6_2",
            title: "Probability",
            desc: "Axiomatic approach. Conditional probability.",
            videoUrl: "",
          },
        ],
      },
    ],
    12: [
      {
        unit: "Unit I: Relations and Functions",
        chapters: [
          {
            id: "ma12_1_1",
            title: "Relations and Functions",
            desc: "Equivalence relations. Bijective functions.",
            videoUrl: "",
          },
          {
            id: "ma12_1_2",
            title: "Inverse Trigonometric Functions",
            desc: "Principal value branch. Properties.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit II: Algebra",
        chapters: [
          {
            id: "ma12_2_1",
            title: "Matrices",
            desc: "Types. Addition, multiplication. Invertible matrices.",
            videoUrl: "",
          },
          {
            id: "ma12_2_2",
            title: "Determinants",
            desc: "Properties. Adjoint. Inverse. Cramer's rule.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit III: Calculus",
        chapters: [
          {
            id: "ma12_3_1",
            title: "Continuity and Differentiability",
            desc: "Rolle's and Lagrange's mean value theorems.",
            videoUrl: "",
          },
          {
            id: "ma12_3_2",
            title: "Applications of Derivatives",
            desc: "Maxima and minima.",
            videoUrl: "",
          },
          {
            id: "ma12_3_3",
            title: "Integrals",
            desc: "Integration by substitution, partial fractions.",
            videoUrl: "",
          },
          {
            id: "ma12_3_4",
            title: "Applications of Integrals",
            desc: "Area under curves.",
            videoUrl: "",
          },
          {
            id: "ma12_3_5",
            title: "Differential Equations",
            desc: "Order and degree. Homogeneous, linear DE.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit IV: Vectors & 3D Geometry",
        chapters: [
          {
            id: "ma12_4_1",
            title: "Vector Algebra",
            desc: "Scalar and vector products.",
            videoUrl: "",
          },
          {
            id: "ma12_4_2",
            title: "Three Dimensional Geometry",
            desc: "Shortest distance. Equation of a plane.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit V: Linear Programming",
        chapters: [
          {
            id: "ma12_5_1",
            title: "Linear Programming",
            desc: "Graphical method. Diet and manufacturing problems.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit VI: Probability",
        chapters: [
          {
            id: "ma12_6_1",
            title: "Probability",
            desc: "Bayes' theorem. Binomial distribution.",
            videoUrl: "",
          },
        ],
      },
    ],
  },
  Biology: {
    11: [
      {
        unit: "Unit I: Diversity in Living World",
        chapters: [
          {
            id: "bi11_1_1",
            title: "The Living World",
            desc: "Biodiversity. Taxonomic categories.",
            videoUrl: "",
          },
          {
            id: "bi11_1_2",
            title: "Biological Classification",
            desc: "Five kingdom classification.",
            videoUrl: "",
          },
          {
            id: "bi11_1_3",
            title: "Plant Kingdom",
            desc: "Algae to Angiosperms.",
            videoUrl: "",
          },
          {
            id: "bi11_1_4",
            title: "Animal Kingdom",
            desc: "Non-chordata to Chordata.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit II: Structural Organisation",
        chapters: [
          {
            id: "bi11_2_1",
            title: "Morphology of Flowering Plants",
            desc: "Morphology of root, stem, leaf.",
            videoUrl: "",
          },
          {
            id: "bi11_2_2",
            title: "Anatomy of Flowering Plants",
            desc: "Plant tissues. Secondary growth.",
            videoUrl: "",
          },
          {
            id: "bi11_2_3",
            title: "Structural Organisation in Animals",
            desc: "Animal tissues. Cockroach and frog.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit III: Cell Structure",
        chapters: [
          {
            id: "bi11_3_1",
            title: "Cell — The Unit of Life",
            desc: "Prokaryotic and eukaryotic cells.",
            videoUrl: "",
          },
          {
            id: "bi11_3_2",
            title: "Biomolecules",
            desc: "Proteins, polysaccharides, enzymes.",
            videoUrl: "",
          },
          {
            id: "bi11_3_3",
            title: "Cell Cycle and Division",
            desc: "Mitosis and Meiosis.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit IV: Plant Physiology",
        chapters: [
          {
            id: "bi11_4_1",
            title: "Transport in Plants",
            desc: "Osmosis. Transpiration.",
            videoUrl: "",
          },
          {
            id: "bi11_4_2",
            title: "Mineral Nutrition",
            desc: "Essential elements. Nitrogen metabolism.",
            videoUrl: "",
          },
          {
            id: "bi11_4_3",
            title: "Photosynthesis",
            desc: "Light reactions. Calvin cycle.",
            videoUrl: "",
          },
          {
            id: "bi11_4_4",
            title: "Respiration",
            desc: "Glycolysis. Krebs cycle.",
            videoUrl: "",
          },
          {
            id: "bi11_4_5",
            title: "Plant Growth",
            desc: "Growth regulators.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit V: Human Physiology",
        chapters: [
          {
            id: "bi11_5_1",
            title: "Digestion and Absorption",
            desc: "Alimentary canal. Digestive glands.",
            videoUrl: "",
          },
          {
            id: "bi11_5_2",
            title: "Breathing and Exchange",
            desc: "Mechanism of breathing.",
            videoUrl: "",
          },
          {
            id: "bi11_5_3",
            title: "Body Fluids",
            desc: "Blood composition. Heart.",
            videoUrl: "",
          },
          {
            id: "bi11_5_4",
            title: "Excretory Products",
            desc: "Kidneys. Urine formation.",
            videoUrl: "",
          },
          {
            id: "bi11_5_5",
            title: "Locomotion",
            desc: "Skeletal muscle structure.",
            videoUrl: "",
          },
          {
            id: "bi11_5_6",
            title: "Neural Control",
            desc: "Brain structure. Reflex action.",
            videoUrl: "",
          },
          {
            id: "bi11_5_7",
            title: "Chemical Coordination",
            desc: "Endocrine glands and hormones.",
            videoUrl: "",
          },
        ],
      },
    ],
    12: [
      {
        unit: "Unit I: Reproduction",
        chapters: [
          {
            id: "bi12_1_1",
            title: "Reproduction in Organisms",
            desc: "Asexual and sexual modes.",
            videoUrl: "",
          },
          {
            id: "bi12_1_2",
            title: "Sexual Reproduction in Plants",
            desc: "Pollination. Double fertilisation.",
            videoUrl: "",
          },
          {
            id: "bi12_1_3",
            title: "Human Reproduction",
            desc: "Gametogenesis. Menstrual cycle.",
            videoUrl: "",
          },
          {
            id: "bi12_1_4",
            title: "Reproductive Health",
            desc: "Contraception. ART.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit II: Genetics and Evolution",
        chapters: [
          {
            id: "bi12_2_1",
            title: "Principles of Inheritance",
            desc: "Mendel's laws. Linkage.",
            videoUrl: "",
          },
          {
            id: "bi12_2_2",
            title: "Molecular Basis of Inheritance",
            desc: "DNA replication. Transcription. Translation.",
            videoUrl: "",
          },
          {
            id: "bi12_2_3",
            title: "Evolution",
            desc: "Origin of life. Hardy-Weinberg principle.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit III: Biology and Human Welfare",
        chapters: [
          {
            id: "bi12_3_1",
            title: "Human Health and Diseases",
            desc: "Immunity. Cancer. AIDS.",
            videoUrl: "",
          },
          {
            id: "bi12_3_2",
            title: "Food Production Strategies",
            desc: "Plant breeding. Animal husbandry.",
            videoUrl: "",
          },
          {
            id: "bi12_3_3",
            title: "Microbes in Human Welfare",
            desc: "Biocontrol agents. Sewage treatment.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit IV: Biotechnology",
        chapters: [
          {
            id: "bi12_4_1",
            title: "Biotechnology Principles",
            desc: "Recombinant DNA technology.",
            videoUrl: "",
          },
          {
            id: "bi12_4_2",
            title: "Biotechnology Applications",
            desc: "Bt crops. Gene therapy.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit V: Ecology",
        chapters: [
          {
            id: "bi12_5_1",
            title: "Organisms and Populations",
            desc: "Population growth and interactions.",
            videoUrl: "",
          },
          {
            id: "bi12_5_2",
            title: "Ecosystem",
            desc: "Energy flow. Nutrient cycling.",
            videoUrl: "",
          },
          {
            id: "bi12_5_3",
            title: "Biodiversity",
            desc: "Conservation strategies.",
            videoUrl: "",
          },
          {
            id: "bi12_5_4",
            title: "Environmental Issues",
            desc: "Pollution. Global warming.",
            videoUrl: "",
          },
        ],
      },
    ],
  },
  IT: {
    11: [
      {
        unit: "Unit I: Computer Fundamentals",
        chapters: [
          {
            id: "it11_1_1",
            title: "Intro to Computer System",
            desc: "Hardware components. Number systems.",
            videoUrl: "",
          },
          {
            id: "it11_1_2",
            title: "Software Concepts",
            desc: "System vs Application software.",
            videoUrl: "",
          },
          {
            id: "it11_1_3",
            title: "Operating System Basics",
            desc: "Process and memory management.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit II: Office Automation",
        chapters: [
          {
            id: "it11_2_1",
            title: "Word Processing",
            desc: "Document formatting.",
            videoUrl: "",
          },
          {
            id: "it11_2_2",
            title: "Spreadsheet",
            desc: "Formulas and charts.",
            videoUrl: "",
          },
          {
            id: "it11_2_3",
            title: "Presentation Software",
            desc: "Animations and transitions.",
            videoUrl: "",
          },
          {
            id: "it11_2_4",
            title: "DBMS Basics",
            desc: "Tables, queries, and reports.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit III: Internet & Networking",
        chapters: [
          {
            id: "it11_3_1",
            title: "Internet Basics",
            desc: "WWW, browsers, email.",
            videoUrl: "",
          },
          {
            id: "it11_3_2",
            title: "Networking Basics",
            desc: "LAN, WAN, OSI model.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit IV: Programming Concepts",
        chapters: [
          {
            id: "it11_4_1",
            title: "Problem Solving",
            desc: "Algorithms and flowcharts.",
            videoUrl: "",
          },
          {
            id: "it11_4_2",
            title: "Intro to Programming",
            desc: "Structured programming.",
            videoUrl: "",
          },
          {
            id: "it11_4_3",
            title: "Python Basics",
            desc: "Syntax, loops, lists.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit V: Cyber Safety",
        chapters: [
          {
            id: "it11_5_1",
            title: "Cyber Ethics",
            desc: "Cybercrime, IPR, IT Act.",
            videoUrl: "",
          },
          {
            id: "it11_5_2",
            title: "Digital Communication",
            desc: "Collaboration tools.",
            videoUrl: "",
          },
        ],
      },
    ],
    12: [
      {
        unit: "Unit I: Advanced Python",
        chapters: [
          {
            id: "it12_1_1",
            title: "Python Advanced Concepts",
            desc: "List comprehensions, lambdas.",
            videoUrl: "",
          },
          {
            id: "it12_1_2",
            title: "Functions and Modules",
            desc: "Defining functions, scope.",
            videoUrl: "",
          },
          {
            id: "it12_1_3",
            title: "File Handling",
            desc: "Reading and writing files.",
            videoUrl: "",
          },
          {
            id: "it12_1_4",
            title: "Exception Handling",
            desc: "Try-except blocks.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit II: DBMS",
        chapters: [
          {
            id: "it12_2_1",
            title: "Database Concepts",
            desc: "ER model, Normalization.",
            videoUrl: "",
          },
          {
            id: "it12_2_2",
            title: "SQL Queries",
            desc: "DDL, DML, Joins.",
            videoUrl: "",
          },
          {
            id: "it12_2_3",
            title: "Database Connectivity",
            desc: "Python to MySQL connection.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit III: Web Technologies",
        chapters: [
          {
            id: "it12_3_1",
            title: "Web Basics",
            desc: "Client-server model.",
            videoUrl: "",
          },
          {
            id: "it12_3_2",
            title: "HTML and CSS",
            desc: "Tags, selectors, flexbox.",
            videoUrl: "",
          },
          {
            id: "it12_3_3",
            title: "Web Security",
            desc: "HTTPS, Firewalls.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit IV: Emerging Tech",
        chapters: [
          {
            id: "it12_4_1",
            title: "Cyber Security",
            desc: "Threats and encryption.",
            videoUrl: "",
          },
          {
            id: "it12_4_2",
            title: "Cloud Computing",
            desc: "IaaS, PaaS, SaaS.",
            videoUrl: "",
          },
          {
            id: "it12_4_3",
            title: "Artificial Intelligence",
            desc: "Machine Learning basics.",
            videoUrl: "",
          },
        ],
      },
    ],
  },
  English: {
    11: [
      {
        unit: "Hornbill — Prose",
        chapters: [
          {
            id: "en11_1_1",
            title: "The Portrait of a Lady",
            desc: "Khushwant Singh's account.",
            videoUrl: "",
          },
          {
            id: "en11_1_2",
            title: "We're Not Afraid to Die",
            desc: "Survival narrative.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Hornbill — Poetry",
        chapters: [
          {
            id: "en11_2_1",
            title: "A Photograph",
            desc: "Shirley Toulson's poem.",
            videoUrl: "",
          },
          {
            id: "en11_2_2",
            title: "The Laburnum Top",
            desc: "Nature poem.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Snapshots",
        chapters: [
          {
            id: "en11_3_1",
            title: "The Summer of the Beautiful White Horse",
            desc: "Story of Aram and Mourad.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Writing Skills",
        chapters: [
          {
            id: "en11_4_1",
            title: "Note Making",
            desc: "Techniques and formatting.",
            videoUrl: "",
          },
          {
            id: "en11_4_4",
            title: "Grammar",
            desc: "Tenses and Voice.",
            videoUrl: "",
          },
        ],
      },
    ],
    12: [
      {
        unit: "Flamingo — Prose",
        chapters: [
          {
            id: "en12_1_1",
            title: "The Last Lesson",
            desc: "Alphonse Daudet.",
            videoUrl: "",
          },
          {
            id: "en12_1_2",
            title: "Lost Spring",
            desc: "Anees Jung.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Flamingo — Poetry",
        chapters: [
          {
            id: "en12_2_1",
            title: "My Mother at Sixty-Six",
            desc: "Kamala Das.",
            videoUrl: "",
          },
          {
            id: "en12_2_2",
            title: "Keeping Quiet",
            desc: "Pablo Neruda.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Vistas",
        chapters: [
          {
            id: "en12_3_1",
            title: "The Third Level",
            desc: "Jack Finney.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Writing Skills",
        chapters: [
          {
            id: "en12_4_1",
            title: "Reading Comprehension",
            desc: "Unseen passages.",
            videoUrl: "",
          },
          {
            id: "en12_4_2",
            title: "Formal Writing",
            desc: "Letters and applications.",
            videoUrl: "",
          },
        ],
      },
    ],
  },
  Odia: {
    11: [
      {
        unit: "ଗଦ୍ୟ (Prose)",
        chapters: [
          {
            id: "od11_1_1",
            title: "ରେଶମ ପଦର",
            desc: "ଗୋପୀନାଥ ମହାନ୍ତି।",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "ପଦ୍ୟ (Poetry)",
        chapters: [
          {
            id: "od11_2_1",
            title: "ସାହାଡ଼ା ବୃକ୍ଷ",
            desc: "ସାରଳା ଦାସ।",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "ଏକାଙ୍କିକା (Play)",
        chapters: [
          {
            id: "od11_3_1",
            title: "ଅତ୍ୟାଚାରିତ",
            desc: "ପ୍ରାଣବନ୍ଧୁ କର।",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "ବ୍ୟାକରଣ (Grammar)",
        chapters: [
          {
            id: "od11_4_3",
            title: "ବିଶେଷ୍ୟ, ବିଶେଷଣ",
            desc: "ଓଡ଼ିଆ ବ୍ୟାକରଣ।",
            videoUrl: "",
          },
        ],
      },
    ],
    12: [
      {
        unit: "ଗଦ୍ୟ (Prose)",
        chapters: [
          {
            id: "od12_1_1",
            title: "ଇତିହାସ",
            desc: "ବିଶ୍ୱନାଥ କର।",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "ପଦ୍ୟ (Poetry)",
        chapters: [
          {
            id: "od12_2_1",
            title: "ବଡ଼ପଣ",
            desc: "ରାଧାନାଥ ରାୟ।",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "ଗଳ୍ପ (Stories)",
        chapters: [
          {
            id: "od12_3_1",
            title: "ସଭ୍ୟ ଜମିଦାର",
            desc: "ଫକୀରମୋହନ ସେନାପତି।",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "ବ୍ୟାକରଣ (Grammar)",
        chapters: [
          {
            id: "od12_4_3",
            title: "ରୂଢି ଓ ବିପରୀତ ଶବ୍ଦ",
            desc: "ଓଡ଼ିଆ ବ୍ୟାକରଣ।",
            videoUrl: "",
          },
        ],
      },
    ],
  },
};

// ===== CAREERS DATA =====
const CAREERS = {
  Science: [
    {
      title: "Engineering (B.Tech)",
      tag: "JEE / OJEE",
      icon: "lightning",
      color: "#4f8ef7",
      desc: "Build the future through technology and innovation.",
      eligibility: "PCM in Class 12 with minimum 50%",
      exams: "JEE Main, JEE Advanced, OJEE",
      skills: "Mathematics, Physics, Analytical Thinking",
      salary: "₹4–60 LPA",
      scope: "Massive demand globally in IT, Core, and AI sectors.",
    },
    {
      title: "MBBS / Medicine",
      tag: "NEET-UG",
      icon: "hospital",
      color: "#f87171",
      desc: "Become a doctor — one of India's most respected careers.",
      eligibility: "PCB in Class 12 with minimum 50%",
      exams: "NEET-UG (National Eligibility cum Entrance Test)",
      skills: "Biology, Memory, High Empathy & Clinical skills",
      salary: "₹6–80 LPA",
      scope: "Acute doctor shortage ensures 100% job security.",
    },
  ],
  Commerce: [
    {
      title: "Chartered Accountant",
      tag: "CA / ICAI",
      icon: "briefcase",
      color: "#4f8ef7",
      desc: "CA is among India's most respected and rigorous qualifications.",
      eligibility: "Any stream, ideally Commerce with Math",
      exams: "CA Foundation, Intermediate, Final",
      skills: "Accounting, Taxation, Corporate Law",
      salary: "₹7–60 LPA",
      scope: "Mandatory for all registered companies globally.",
    },
    {
      title: "MBA and Management",
      tag: "CAT / MAT",
      icon: "graduation",
      color: "#9d6fff",
      desc: "Management education opens doors to top MNCs and leadership.",
      eligibility: "Any graduation degree with 50%",
      exams: "CAT, MAT, XAT",
      skills: "Leadership, Business Strategy, Communication",
      salary: "₹8–50 LPA",
      scope: "Essential qualification for senior corporate roles.",
    },
  ],
  Arts: [
    {
      title: "Civil Services (IAS/IPS)",
      tag: "UPSC / OPSC",
      icon: "trophy",
      color: "#4f8ef7",
      desc: "India's most prestigious and powerful administrative career path.",
      eligibility: "Any graduation degree from a recognized university",
      exams: "UPSC CSE (Prelims, Mains, Interview)",
      skills: "General studies, Critical Analysis, Leadership",
      salary: "₹56,000–2.5L/month",
      scope: "Unmatched authority and ability to impact society.",
    },
    {
      title: "Law (LLB / LLM)",
      tag: "CLAT",
      icon: "scale",
      color: "#9d6fff",
      desc: "Practice as an advocate, judge, or corporate lawyer.",
      eligibility: "Any stream in Class 12 for 5-Year Integrated LLB",
      exams: "CLAT, AILET",
      skills: "Logical reasoning, Argumentation, Reading",
      salary: "₹4–60 LPA",
      scope: "Corporate law and LegalTech are growing rapidly.",
    },
  ],
};

// ===== STATE =====
let STATE = {
  currentSection: "dashboard",
  currentSubject: "Physics",
  currentClass: "12",
  currentVideo: null,
  currentCareerStream: "Science",
  openUnits: {},
  activeNote: null,
  settingsTab: "general",
  isVideoFullscreen: false,
};

// ===== SUBJECT COLORS AND ICONS =====
const SUBJ_COLORS = {
  Physics: "linear-gradient(135deg, #1a3570, #2d5fb3)",
  Chemistry: "linear-gradient(135deg, #3b1a70, #6d3db5)",
  Mathematics: "linear-gradient(135deg, #0f4a5e, #1a7a9a)",
  Biology: "linear-gradient(135deg, #0f4a2a, #1e7a48)",
  IT: "linear-gradient(135deg, #4a2d10, #8a5520)",
  English: "linear-gradient(135deg, #4a101a, #8a2232)",
  Odia: "linear-gradient(135deg, #1a3a4a, #2a6070)",
};
const SUBJ_ACCENT = {
  Physics: "#4f8ef7",
  Chemistry: "#9d6fff",
  Mathematics: "#22d3ee",
  Biology: "#34d399",
  IT: "#fb923c",
  English: "#f87171",
  Odia: "#2dd4bf",
};
const SUBJ_ICON_KEY = {
  Physics: "atom",
  Chemistry: "flask",
  Mathematics: "sigma",
  Biology: "leaf",
  IT: "computer",
  English: "document",
  Odia: "odia",
};

function subjIcon(subj, size = 20) {
  const key = SUBJ_ICON_KEY[subj] || "book";
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="${size}" height="${size}">${ICONS[key]?.replace(/<svg[^>]*>|<\/svg>/g, "") || ""}</svg>`;
}

// ===== INIT & SESSION LOGIC =====
function init() {
  const customUrls = DB.get("videoUrls") || {};
  Object.entries(customUrls).forEach(([id, url]) => {
    for (const subj of Object.keys(SYLLABUS)) {
      for (const cls of Object.keys(SYLLABUS[subj])) {
        for (const unit of SYLLABUS[subj][cls]) {
          const ch = unit.chapters.find((c) => c.id === id);
          if (ch) ch.videoUrl = url;
        }
      }
    }
  });

  setupNavigationFixes();

  const user = DB.get("user");
  if (user && user.name) {
    const loginBtn = document.getElementById("loginBtnDesktop");
    const getStartedBtn = document.getElementById("getStartedBtnDesktop");
    const getStartedMob = document.getElementById("getStartedBtnMobile");
    const heroStartBtn = document.getElementById("heroStartBtn");

    if (loginBtn) loginBtn.classList.add("hidden");

    if (getStartedBtn) {
      getStartedBtn.innerHTML = "Go to Dashboard";
      getStartedBtn.onclick = launchApp;
    }
    if (getStartedMob) {
      getStartedMob.innerHTML = "Dashboard";
      getStartedMob.onclick = launchApp;
    }
    if (heroStartBtn) {
      heroStartBtn.innerHTML = `Continue Learning <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><path d="M5 12h14M12 5l7 7-7 7" /></svg>`;
      heroStartBtn.onclick = launchApp;
    }
  }

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      openSearch();
    }
    if (e.key === "Escape") {
      closeSearch();
      if (STATE.isVideoFullscreen) exitVideoFullscreen();
    }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      document
        .querySelectorAll(".dropdown-menu")
        .forEach((m) => m.classList.remove("open"));
    }
  });

  document.addEventListener("fullscreenchange", onFullscreenChange);
  document.addEventListener("webkitfullscreenchange", onFullscreenChange);
  document.addEventListener("mozfullscreenchange", onFullscreenChange);

  window.addEventListener("scroll", () => {
    const nav = document.getElementById("landingNav");
    if (nav)
      nav.style.background =
        window.scrollY > 40 ? "rgba(5,5,5,0.97)" : "rgba(5,5,5,0.6)";
  });
}

function setupNavigationFixes() {
  const topnavLinks = document.getElementById("topnavLinks");
  if (topnavLinks && !document.getElementById("nav-go-landing")) {
    const landingBtn = document.createElement("a");
    landingBtn.id = "nav-go-landing";
    landingBtn.className = "tnl";
    landingBtn.innerHTML = `${icon("home", 15)} Home`;
    landingBtn.style.color = "var(--blue)";
    landingBtn.onclick = goToLandingFromApp;
    topnavLinks.insertBefore(landingBtn, topnavLinks.firstChild);
  }

  const deskDashboard = document.querySelector(
    '.tnl[data-section="dashboard"]',
  );
  if (deskDashboard && deskDashboard.innerHTML.includes("Home")) {
    deskDashboard.innerHTML = deskDashboard.innerHTML.replace(
      "Home",
      "Dashboard",
    );
  }
}

let obClass = "",
  obStream = "";

function showOnboarding() {
  const user = DB.get("user");
  if (user && user.name) {
    launchApp();
    return;
  }

  const modal = document.getElementById("onboardingModal");
  modal.classList.remove("hidden");

  const card = modal.querySelector(".modal-card");
  if (card && !document.getElementById("ob-close-btn")) {
    const closeBtn = document.createElement("button");
    closeBtn.id = "ob-close-btn";
    closeBtn.innerHTML = icon("close", 20);
    closeBtn.style.cssText =
      "position:absolute;top:16px;right:16px;color:var(--text-2);background:var(--bg-2);border:1px solid var(--border-md);border-radius:50%;width:34px;height:34px;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:10;transition:all 0.2s;";
    closeBtn.onmouseover = () => {
      closeBtn.style.color = "var(--text-1)";
      closeBtn.style.background = "var(--bg-3)";
    };
    closeBtn.onmouseout = () => {
      closeBtn.style.color = "var(--text-2)";
      closeBtn.style.background = "var(--bg-2)";
    };
    closeBtn.onclick = () => modal.classList.add("hidden");
    card.style.position = "relative";
    card.appendChild(closeBtn);
  }
}

function selectClass(btn) {
  document
    .querySelectorAll(".sel-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  obClass = btn.dataset.val;
}

function selectStream(card) {
  document
    .querySelectorAll(".stream-card")
    .forEach((c) => c.classList.remove("active"));
  card.classList.add("active");
  obStream = card.dataset.stream;
}

function completeOnboarding() {
  const name = document.getElementById("ob-name").value.trim();
  if (!name) {
    showToast("Please enter your name", "error");
    return;
  }
  if (!obClass) {
    showToast("Please select your class", "error");
    return;
  }
  if (!obStream) {
    showToast("Please select your stream", "error");
    return;
  }

  const user = {
    name,
    class: obClass,
    stream: obStream,
    joined: new Date().toISOString(),
  };
  DB.set("user", user);
  DB.set("streak", { count: 1, lastDate: new Date().toDateString() });

  document.getElementById("onboardingModal").classList.add("hidden");
  STATE.currentClass = obClass;

  const loginBtn = document.getElementById("loginBtnDesktop");
  const getStartedBtn = document.getElementById("getStartedBtnDesktop");
  const heroStartBtn = document.getElementById("heroStartBtn");
  if (loginBtn) loginBtn.classList.add("hidden");
  if (getStartedBtn) {
    getStartedBtn.innerHTML = "Go to Dashboard";
    getStartedBtn.onclick = launchApp;
  }
  if (heroStartBtn) {
    heroStartBtn.innerHTML = `Continue Learning <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><path d="M5 12h14M12 5l7 7-7 7" /></svg>`;
    heroStartBtn.onclick = launchApp;
  }

  launchApp();
  showToast("Welcome, " + name + "! Ready to ace CHSE?", "success");
}

function launchApp() {
  const user = DB.get("user");
  if (user) STATE.currentClass = user.class || "12";
  document.getElementById("landing").classList.add("hidden");
  document.getElementById("mainApp").classList.remove("hidden");
  updateUserUI(user);
  updateStreak();
  updateClassToggleUI();
  showSection("dashboard");
}

function goToLandingFromApp() {
  document.getElementById("mainApp").classList.add("hidden");
  document.getElementById("landing").classList.remove("hidden");
  window.scrollTo(0, 0);
}

function updateUserUI(user) {
  if (!user) return;
  const initial = user.name.charAt(0).toUpperCase();
  const av = document.getElementById("navAvatar");
  if (av) {
    const saved = DB.get("avatarUrl");
    av.innerHTML = saved ? `<img src="${saved}" alt="avatar">` : initial;
  }
}

function updateStreak() {
  const streak = DB.get("streak") || { count: 0, lastDate: "" };
  const today = new Date().toDateString();
  if (streak.lastDate !== today) {
    const yest = new Date();
    yest.setDate(yest.getDate() - 1);
    streak.count =
      streak.lastDate === yest.toDateString() ? (streak.count || 0) + 1 : 1;
    streak.lastDate = today;
    DB.set("streak", streak);
  }
}

function updateClassToggleUI() {
  document
    .querySelectorAll(".ct-btn")
    .forEach((b) => b.classList.remove("active"));
  const btn = document.getElementById("ct" + STATE.currentClass);
  if (btn) btn.classList.add("active");
}

function switchGlobalClass(cls) {
  STATE.currentClass = cls;
  updateClassToggleUI();
  if (
    [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology",
      "IT",
      "English",
      "Odia",
    ].includes(STATE.currentSubject)
  ) {
    showSubject(STATE.currentSubject, cls);
  }
  showToast("Switched to Class " + cls, "info");
}

function showSection(name) {
  STATE.currentSection = name;
  setActiveNav(name);
  const mc = document.getElementById("appMain");
  mc.style.opacity = "0";
  setTimeout(() => {
    renderSection(name);
    mc.style.transition = "opacity 0.2s ease";
    mc.style.opacity = "1";
    mc.scrollTop = 0;
    window.scrollTo(0, 0);
  }, 60);
}

function renderSection(name) {
  const mc = document.getElementById("appMain");
  switch (name) {
    case "dashboard":
      mc.innerHTML = renderDashboard();
      break;
    case "career":
      mc.innerHTML = renderCareer();
      break;
    case "progress":
      mc.innerHTML = renderProgress();
      break;
    case "saved":
      mc.innerHTML = renderSaved();
      break;
    case "notes":
      mc.innerHTML = renderNotes();
      initNotes();
      break;
    case "profile":
      mc.innerHTML = renderProfile();
      break;
    case "settings":
      mc.innerHTML = renderSettings();
      break;
    default:
      mc.innerHTML = renderDashboard();
  }
}

function setActiveNav(section) {
  document
    .querySelectorAll(".tnl")
    .forEach((n) =>
      n.classList.toggle("active", n.dataset.section === section),
    );
  document
    .querySelectorAll(".bn-item")
    .forEach((n) =>
      n.classList.toggle("active", n.dataset.section === section),
    );
}

function showSubject(subj, cls) {
  if (cls) STATE.currentClass = cls;
  else cls = STATE.currentClass;
  STATE.currentSubject = subj;
  STATE.currentSection = "subject";
  updateClassToggleUI();
  const mc = document.getElementById("appMain");
  mc.style.opacity = "0";
  setTimeout(() => {
    mc.innerHTML = renderSubjectPage(subj, cls);
    mc.style.transition = "opacity 0.2s ease";
    mc.style.opacity = "1";
    window.scrollTo(0, 0);
  }, 60);
  document
    .querySelectorAll(".dropdown-menu")
    .forEach((m) => m.classList.remove("open"));
}

function showExam(exam) {
  STATE.currentSection = exam.toLowerCase();
  const mc = document.getElementById("appMain");
  mc.innerHTML = renderExamPage(exam);
  document
    .querySelectorAll(".dropdown-menu")
    .forEach((m) => m.classList.remove("open"));
}

function toggleDropdown(id) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle("open");
}

function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("mobileMenuOverlay");
  const isOpen = !menu.classList.contains("hidden");
  menu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  document.body.style.overflow = isOpen ? "" : "hidden";
}

function smoothScrollTo(sel) {
  const el = document.querySelector(sel);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function icon(key, size = 16, extraClass = "") {
  const svgContent = ICONS[key];
  if (!svgContent) return "";
  return svgContent.replace(
    "<svg ",
    `<svg width="${size}" height="${size}" class="${extraClass}" `,
  );
}

// ===== DASHBOARD =====
function renderDashboard() {
  const user = DB.get("user") || {
    name: "Student",
    stream: "Science",
    class: "12",
  };
  const streak = DB.get("streak") || { count: 0 };
  const watchHistory = DB.get("watchHistory") || [];
  const completed = DB.get("completedTopics") || {};
  const hour = new Date().getHours();
  const greet =
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";
  const subjects = [
    "Physics",
    "Chemistry",
    "Mathematics",
    "Biology",
    "IT",
    "English",
    "Odia",
  ];

  const getProgress = (s, cls) => {
    const syll = SYLLABUS[s] && SYLLABUS[s][cls];
    if (!syll) return 0;
    const total = syll.reduce((a, u) => a + u.chapters.length, 0);
    const done = Object.keys(completed).filter((k) =>
      k.startsWith(s + "_" + cls + "_"),
    ).length;
    return total ? Math.round((done / total) * 100) : 0;
  };

  const cls = STATE.currentClass;
  const recentVids = watchHistory.slice(-8).reverse();

  return `
  <div class="dashboard-wrap">
    <div class="section-head">
      <div class="dash-greeting">${greet}, ${user.name.split(" ")[0]}</div>
      <div class="dash-date">${new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })} &middot; Class ${cls} &middot; ${user.stream} Stream</div>
    </div>

    <div class="motivation-banner">
      <div class="mb-icon">${icon("fire", 28)}</div>
      <div class="mb-text">
        <h3>Your CHSE journey continues!</h3>
        <p>Consistent daily study beats marathon cramming sessions. You have this!</p>
      </div>
      <div class="mb-streak">
        <span>${streak.count}</span>
        <small>day streak</small>
      </div>
    </div>

    <div class="stats-row">
      <div class="stat-card">
        <div class="sc-icon-wrap" style="background:var(--blue-dim);color:var(--blue)">${icon("video", 18)}</div>
        <h4>${watchHistory.length}</h4><p>Videos Watched</p>
        <div class="stat-glow" style="background:var(--blue)"></div>
      </div>
      <div class="stat-card">
        <div class="sc-icon-wrap" style="background:var(--green-dim);color:var(--green)">${icon("check", 18)}</div>
        <h4>${Object.keys(completed).length}</h4><p>Topics Done</p>
        <div class="stat-glow" style="background:var(--green)"></div>
      </div>
      <div class="stat-card">
        <div class="sc-icon-wrap" style="background:var(--orange-dim);color:var(--orange)">${icon("fire", 18)}</div>
        <h4>${streak.count}</h4><p>Day Streak</p>
        <div class="stat-glow" style="background:var(--orange)"></div>
      </div>
      <div class="stat-card">
        <div class="sc-icon-wrap" style="background:var(--purple-dim);color:var(--purple)">${icon("clock", 18)}</div>
        <h4>${watchHistory.length > 0 ? Math.floor((watchHistory.length * 40) / 60) + "h" : "0m"}</h4><p>Study Time</p>
        <div class="stat-glow" style="background:var(--purple)"></div>
      </div>
    </div>

    <div class="row-header">
      <h3>Class ${cls} — All Subjects</h3>
      <a onclick="switchGlobalClass(STATE.currentClass === '11' ? '12' : '11')">Switch to Class ${cls === "11" ? "12" : "11"} ${icon("arrowRight", 13)}</a>
    </div>
    <div class="subject-cards">
      ${subjects
        .map((s) => {
          const pct = getProgress(s, cls);
          const totalChaps =
            SYLLABUS[s] && SYLLABUS[s][cls]
              ? SYLLABUS[s][cls].reduce((a, u) => a + u.chapters.length, 0)
              : 0;
          return `<div class="subj-card" onclick="showSubject('${s}','${cls}')" style="background:${SUBJ_COLORS[s]}">
          <div class="subj-bg-grid"></div>
          <div class="subj-card-icon">${icon(SUBJ_ICON_KEY[s] || "book", 28)}</div>
          <h3>${s}</h3>
          <div class="subj-count">${totalChaps} chapters &middot; Class ${cls}</div>
          <div class="subj-prog-wrap">
            <div class="subj-prog-bar"><div class="spb-fill" style="width:${pct}%"></div></div>
            <span class="subj-pct">${pct}%</span>
          </div>
        </div>`;
        })
        .join("")}
    </div>

    ${
      recentVids.length > 0
        ? `
    <div class="row-header">
      <h3>Continue Watching</h3>
      <a onclick="showSection('saved')">See all ${icon("arrowRight", 13)}</a>
    </div>
    <div class="video-grid">
      ${recentVids
        .slice(0, 4)
        .map((h) => {
          const info = findVideoById(h.id);
          return info ? videoCard(info.ch, info.subj, h.progress || 0) : "";
        })
        .filter(Boolean)
        .join("")}
    </div>`
        : ""
    }

    <div class="row-header"><h3>Weekly Goals</h3></div>
    <div class="goals-row">
      ${[
        {
          label: "Videos Watched",
          target: 14,
          current: Math.min(watchHistory.length, 14),
          color: "#4f8ef7",
        },
        {
          label: "Topics Completed",
          target: 20,
          current: Math.min(Object.keys(completed).length, 20),
          color: "#9d6fff",
        },
        {
          label: "Study Streak",
          target: 7,
          current: Math.min(streak.count, 7),
          color: "#fb923c",
        },
      ]
        .map((g) => {
          const pct = Math.round((g.current / g.target) * 100);
          const r = 21,
            circ = 2 * Math.PI * r;
          const offset = circ - (pct / 100) * circ;
          return `<div class="goal-card">
          <div class="goal-circle">
            <svg viewBox="0 0 54 54" width="54" height="54">
              <circle class="goal-circle-track" cx="27" cy="27" r="${r}"/>
              <circle class="goal-circle-fill" cx="27" cy="27" r="${r}" stroke="${g.color}" stroke-dasharray="${circ}" stroke-dashoffset="${offset}" transform="rotate(-90 27 27)" fill="none" stroke-width="4" stroke-linecap="round"/>
            </svg>
            <div class="goal-pct" style="color:${g.color}">${pct}%</div>
          </div>
          <div class="goal-info"><h4>${g.label}</h4><p>${g.current} / ${g.target}</p></div>
        </div>`;
        })
        .join("")}
    </div>
  </div>`;
}

// ===== VIDEO CARD & URL PARSING FIX =====
function videoCard(ch, subj, progress) {
  const acc = SUBJ_ACCENT[subj] || "#4f8ef7";
  const completed = DB.get("completedTopics") || {};
  const isDone = completed[subj + "_" + STATE.currentClass + "_" + ch.id];
  const ytId = getYTId(ch.videoUrl);
  return `
  <div class="video-card" onclick="playVideo('${ch.id}','${subj}')">
    <div class="vc-thumb">
      ${
        ytId
          ? `<div class="vc-thumb-bg" style="background:linear-gradient(135deg,${acc}22,${acc}44)"></div>
           <img src="https://img.youtube.com/vi/${ytId}/mqdefault.jpg" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover" onerror="this.style.display='none'" alt="thumbnail">
           <div class="vc-play">${icon("play", 14)}</div>
           <span class="vc-duration">YouTube</span>`
          : `<div style="position:absolute;inset:0;width:100%;height:100%;background:linear-gradient(135deg, ${acc}40, #111827);display:flex;flex-direction:column;align-items:center;justify-content:center;">
             <div style="background:rgba(0,0,0,0.5);padding:8px;border-radius:50%;margin-bottom:4px;color:${acc}">${icon("clock", 18)}</div>
           </div>
           <span class="vc-duration" style="background:var(--orange);color:#fff">Coming Soon</span>`
      }
      ${isDone ? `<div class="vc-done-badge">${icon("check", 12)}</div>` : ""}
    </div>
    ${progress > 0 ? `<div class="vc-prog"><div class="vc-prog-fill" style="width:${progress}%"></div></div>` : ""}
    <div class="vc-info">
      <span class="vc-tag" style="background:${acc}20;color:${acc}">${subj}</span>
      <h4>${ch.title}</h4>
      <div class="vc-meta">${ch.desc.substring(0, 55)}...</div>
    </div>
  </div>`;
}

function getYTId(url) {
  if (!url) return "";
  const m = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|live\/)|youtu\.be\/)([^&\n?#]+)/,
  );
  return m ? m[1] : "";
}

function findVideoById(id) {
  for (const subj of Object.keys(SYLLABUS)) {
    for (const cls of Object.keys(SYLLABUS[subj])) {
      for (const unit of SYLLABUS[subj][cls]) {
        const ch = unit.chapters.find((c) => c.id === id);
        if (ch) return { ch, subj, cls };
      }
    }
  }
  return null;
}

// ===== SUBJECT PAGE =====
function renderSubjectPage(subj, cls) {
  const data = SYLLABUS[subj];
  if (!data)
    return `<p style="padding:40px;color:var(--text-2)">Subject data not found.</p>`;
  const units = data[cls] || [];
  const completed = DB.get("completedTopics") || {};
  const total = units.reduce((a, u) => a + u.chapters.length, 0);
  const done = Object.keys(completed).filter((k) =>
    k.startsWith(subj + "_" + cls + "_"),
  ).length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  return `
  <div>
    <div class="subj-hero" style="background:${SUBJ_COLORS[subj]}">
      <div class="hero-pattern"></div>
      <div class="subj-hero-inner">
        <div class="subj-hero-icon">${icon(SUBJ_ICON_KEY[subj] || "book", 40)}</div>
        <h1>${subj}</h1>
        <p>${getSubjectDesc(subj)}</p>
        <div class="subj-hero-stats">
          <div class="shs-item"><strong>${units.length}</strong>Units</div>
          <div class="shs-item"><strong>${total}</strong>Chapters</div>
          <div class="shs-item"><strong>${done}</strong>Completed</div>
          <div class="shs-item"><strong>${pct}%</strong>Progress</div>
        </div>
      </div>
    </div>
    <div class="class-tabs">
      <div class="cls-tab ${cls === "11" ? "active" : ""}" onclick="showSubject('${subj}','11')">Class 11</div>
      <div class="cls-tab ${cls === "12" ? "active" : ""}" onclick="showSubject('${subj}','12')">Class 12</div>
    </div>
    ${
      units.length === 0
        ? `<div class="empty-state"><div class="es-icon">${icon("book", 48)}</div><h3>Coming Soon</h3><p>Content for this class will be added soon.</p></div>`
        : units
            .map((unit, ui) => renderUnitBlock(unit, ui, subj, cls, completed))
            .join("")
    }
  </div>`;
}

function getSubjectDesc(subj) {
  const d = {
    Physics:
      "Complete CHSE Physics — Mechanics, Thermodynamics, Waves, Optics, Modern Physics. Covers JEE and NEET requirements.",
    Chemistry:
      "Full CHSE Chemistry — Physical, Organic and Inorganic Chemistry with all reactions, mechanisms and concepts.",
    Mathematics:
      "CHSE Mathematics — Algebra, Calculus, Coordinate Geometry, Vectors and Probability for JEE.",
    Biology:
      "Complete CHSE Biology — Cell Biology, Genetics, Ecology and Human Physiology for NEET.",
    IT: "CHSE Information Technology — Python Programming, DBMS, Web Technologies and Emerging Tech.",
    English:
      "CHSE English — Flamingo, Hornbill, Vistas, Snapshots with Writing Skills and Grammar.",
    Odia: "CHSE MIL Odia — ଗଦ୍ୟ, ପଦ୍ୟ, ଗଳ୍ପ, ଏକାଙ୍କ ଓ ବ୍ୟାକରଣ। ଉଭୟ ପ୍ରଥମ ଓ ଦ୍ୱିତୀୟ ବର୍ଷ।",
  };
  return d[subj] || "";
}

function renderUnitBlock(unit, ui, subj, cls, completed) {
  const unitKey = subj + "_" + cls + "_unit_" + ui;
  const isOpen = !!STATE.openUnits[unitKey];
  const done = unit.chapters.filter(
    (c) => completed[subj + "_" + cls + "_" + c.id],
  ).length;
  const pct = unit.chapters.length
    ? Math.round((done / unit.chapters.length) * 100)
    : 0;

  return `
  <div class="unit-block">
    <div class="unit-header" onclick="toggleUnit('${unitKey}',${ui})">
      <div class="unit-header-left">
        <div class="unit-num">${ui + 1}</div>
        <div>
          <div class="unit-title">${unit.unit}</div>
          <div class="unit-meta">${unit.chapters.length} chapters &middot; ${done} completed</div>
        </div>
      </div>
      <div class="unit-right">
        <span class="unit-pct">${pct}%</span>
        <div class="unit-chevron ${isOpen ? "open" : ""}" id="chev-${ui}">${icon("chevronDown", 17)}</div>
      </div>
    </div>
    <div class="unit-body" id="unit-body-${ui}" style="display:${isOpen ? "block" : "none"}">
      <div class="videos-grid">
        ${unit.chapters
          .map((ch) => {
            const isDone = completed[subj + "_" + cls + "_" + ch.id];
            const ytId = getYTId(ch.videoUrl);
            return `<div class="video-item" onclick="playVideo('${ch.id}','${subj}')">
            <div class="vi-thumb">
              ${
                ytId
                  ? `<img src="https://img.youtube.com/vi/${ytId}/mqdefault.jpg" style="width:100%;height:100%;object-fit:cover;border-radius:7px" onerror="this.parentElement.style.background='var(--bg-4)'" alt="thumb"><div class="vi-thumb-overlay">${icon("play", 14)}</div>`
                  : `<div style="width:100%;height:100%;background:linear-gradient(135deg, #1f2937, #111827);display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:7px;color:var(--orange);border:1px solid rgba(255,255,255,0.05);">${icon("clock", 16)}<span style="font-size:8px;font-weight:800;margin-top:4px;text-transform:uppercase;letter-spacing:0.5px">Soon</span></div>`
              }
            </div>
            <div class="vi-info"><h4>${ch.title}</h4><p>${ch.desc.substring(0, 70)}...</p></div>
            <div class="vi-status">${isDone ? `<div class="vi-done">${icon("check", 16)}</div>` : ""}</div>
          </div>`;
          })
          .join("")}
      </div>
    </div>
  </div>`;
}

function toggleUnit(key, ui) {
  STATE.openUnits[key] = !STATE.openUnits[key];
  const body = document.getElementById("unit-body-" + ui);
  const chev = document.getElementById("chev-" + ui);
  if (body) {
    const isOpen = STATE.openUnits[key];
    body.style.display = isOpen ? "block" : "none";
    if (chev) chev.classList.toggle("open", isOpen);
  }
}

// ===== EXAM PAGE =====
function renderExamPage(exam) {
  const data = {
    JEE: {
      col: "linear-gradient(135deg,#1a3570,#2d5fb3)",
      tag: "Joint Entrance Examination",
      desc: "JEE Main and Advanced are the gateway to IITs, NITs and IIITs. Rigorous preparation in Physics, Chemistry and Mathematics is essential.",
      stats: [
        { l: "Questions", v: "75" },
        { l: "Duration", v: "3 hrs" },
        { l: "Subjects", v: "PCM" },
        { l: "Max Marks", v: "300" },
      ],
      subjects: ["Physics", "Chemistry", "Mathematics"],
    },
    NEET: {
      col: "linear-gradient(135deg,#4a0a0a,#8a2232)",
      tag: "National Eligibility cum Entrance Test",
      desc: "NEET-UG is the single entrance for MBBS, BDS and BAMS admissions across India. NCERT-based with strong Biology emphasis.",
      stats: [
        { l: "Questions", v: "180" },
        { l: "Duration", v: "3.5 hrs" },
        { l: "Subjects", v: "PCB" },
        { l: "Max Marks", v: "720" },
      ],
      subjects: ["Physics", "Chemistry", "Biology"],
    },
    CHSE: {
      col: "linear-gradient(135deg,#0a3520,#1e7a48)",
      tag: "Council of Higher Secondary Education, Odisha",
      desc: "CHSE Odisha conducts Class 11 and 12 board examinations, covering all subjects in Science, Commerce and Arts streams for students across Odisha.",
      stats: [
        { l: "Duration", v: "3 hrs" },
        { l: "Subjects", v: "7+" },
        { l: "Streams", v: "3" },
        { l: "Classes", v: "11 & 12" },
      ],
      subjects: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Biology",
        "IT",
        "English",
        "Odia",
      ],
    },
  };
  const d = data[exam];
  if (!d) return "";
  return `
  <div>
    <div class="section-head"><h2>${exam} Preparation</h2></div>
    <div class="exam-hero" style="background:${d.col}">
      <div class="hero-pattern"></div>
      <h1>${exam}</h1>
      <p style="font-weight:700;font-size:15px;position:relative">${d.tag}</p>
      <p style="position:relative">${d.desc}</p>
    </div>
    <div class="exam-info-row">${d.stats.map((s) => `<div class="eir-card"><h4>${s.v}</h4><p>${s.l}</p></div>`).join("")}</div>
    <div class="row-header" style="margin-bottom:14px"><h3>Subjects for ${exam}</h3></div>
    <div class="subject-cards" style="grid-template-columns:repeat(auto-fill,minmax(160px,1fr))">
      ${d.subjects
        .map(
          (
            s,
          ) => `<div class="subj-card" onclick="showSubject('${s}','${STATE.currentClass}')" style="background:${SUBJ_COLORS[s]}">
          <div class="subj-bg-grid"></div><div class="subj-card-icon">${icon(SUBJ_ICON_KEY[s] || "book", 28)}</div>
          <h3>${s}</h3><div class="subj-count">Class ${STATE.currentClass}</div>
        </div>`,
        )
        .join("")}
    </div>
  </div>`;
}

// ===== FULLSCREEN ENGINE =====
function ensureFullscreenOverlay() {
  if (document.getElementById("ol-video-fullscreen-overlay")) return;
  const overlay = document.createElement("div");
  overlay.id = "ol-video-fullscreen-overlay";
  overlay.innerHTML = `
    <div id="ol-fs-top-hitarea" style="position:absolute;top:0;left:0;right:0;height:120px;z-index:9998;"></div>
    <button id="ol-fs-close-btn" onclick="exitVideoFullscreen()" title="Exit fullscreen" style="transition: opacity 0.3s; z-index:9999;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="20" height="20"><path d="M6 18L18 6M6 6l12 12"/></svg>
    </button>
    <div id="ol-fs-content" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;"></div>
    <div id="ol-fs-rotate-hint">Rotate device for best experience</div>
  `;
  document.body.appendChild(overlay);

  const hitArea = document.getElementById("ol-fs-top-hitarea");
  if (hitArea) {
    hitArea.addEventListener("click", wakeUpCloseBtn);
    hitArea.addEventListener("touchstart", wakeUpCloseBtn);
    hitArea.addEventListener("mousemove", wakeUpCloseBtn);
  }
}

let fsBtnTimeout;
function wakeUpCloseBtn() {
  const btn = document.getElementById("ol-fs-close-btn");
  if (btn) {
    btn.style.opacity = "1";
    btn.style.pointerEvents = "auto";
    clearTimeout(fsBtnTimeout);
    fsBtnTimeout = setTimeout(() => {
      btn.style.opacity = "0";
      btn.style.pointerEvents = "none";
    }, 3000);
  }
}

function toggleVideoFullscreen() {
  if (STATE.isVideoFullscreen) {
    exitVideoFullscreen();
  } else {
    enterVideoFullscreen();
  }
}

function enterVideoFullscreen() {
  ensureFullscreenOverlay();
  const vc = document.getElementById("videoContainer");
  const iframe = vc ? vc.querySelector("iframe") : null;
  const overlay = document.getElementById("ol-video-fullscreen-overlay");
  const fsContent = document.getElementById("ol-fs-content");
  const hint = document.getElementById("ol-fs-rotate-hint");

  if (!overlay || !fsContent) return;

  if (vc) {
    const reqFS =
      vc.requestFullscreen ||
      vc.webkitRequestFullscreen ||
      vc.mozRequestFullScreen ||
      vc.msRequestFullscreen;

    if (reqFS) {
      reqFS
        .call(vc)
        .then(() => {
          if (screen.orientation && screen.orientation.lock) {
            screen.orientation.lock("landscape").catch(() => {});
          }
        })
        .catch((e) => {
          console.log("Native fullscreen failed, using fallback.");
        });

      STATE.isVideoFullscreen = true;
      updateFullscreenBtn(true);
      return;
    }
  }

  fsContent.innerHTML = "";
  if (iframe) {
    const newIframe = document.createElement("iframe");
    newIframe.src = iframe.src;
    newIframe.setAttribute("allowfullscreen", "");
    newIframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    );
    newIframe.style.cssText = "width:100%;height:100%;border:none;";
    fsContent.appendChild(newIframe);
  } else {
    fsContent.innerHTML = `<div class="ol-fs-placeholder" style="display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;gap:12px;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="56" height="56"><path d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/></svg>
      <p style="font-size:16px;font-weight:700;">No video available</p>
    </div>`;
  }

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
  STATE.isVideoFullscreen = true;
  updateFullscreenBtn(true);

  wakeUpCloseBtn();

  if (screen.orientation && screen.orientation.lock) {
    screen.orientation.lock("landscape").catch(() => {});
  }

  if (hint) {
    hint.style.opacity = "1";
    setTimeout(() => {
      hint.style.opacity = "0";
    }, 3000);
  }
}

function exitVideoFullscreen() {
  const isNativeFS =
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement;

  if (isNativeFS) {
    const exitFS =
      document.exitFullscreen ||
      document.webkitExitFullscreen ||
      document.mozCancelFullScreen ||
      document.msExitFullscreen;
    if (exitFS) exitFS.call(document);
  }

  const overlay = document.getElementById("ol-video-fullscreen-overlay");
  if (overlay) {
    overlay.classList.remove("active");
    const fsContent = document.getElementById("ol-fs-content");
    if (fsContent) fsContent.innerHTML = "";
  }

  document.body.style.overflow = "";
  STATE.isVideoFullscreen = false;
  updateFullscreenBtn(false);

  if (screen.orientation && screen.orientation.unlock) {
    screen.orientation.unlock();
  }
}

function updateFullscreenBtn(isFS) {
  const btn = document.getElementById("fullscreenBtn");
  if (!btn) return;
  btn.innerHTML = isFS ? icon("compress", 15) : icon("expand", 15);
  btn.title = isFS ? "Exit Fullscreen" : "Fullscreen / Landscape";
}

function onFullscreenChange() {
  const isNativeFS = !!(
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement
  );
  if (!isNativeFS && STATE.isVideoFullscreen) {
    STATE.isVideoFullscreen = false;
    updateFullscreenBtn(false);
    document.body.style.overflow = "";
    if (screen.orientation && screen.orientation.unlock)
      screen.orientation.unlock();
  }
}

// ===== VIDEO PLAYER RENDER =====
function playVideo(id, subj) {
  if (!subj) subj = STATE.currentSubject;
  const info = findVideoInSubject(id, subj, STATE.currentClass);
  if (!info) {
    showToast("Video not found", "error");
    return;
  }
  STATE.currentVideo = { id, subj, cls: STATE.currentClass, ...info.ch };

  const mc = document.getElementById("appMain");
  mc.style.opacity = "0";
  setTimeout(() => {
    mc.innerHTML = renderVideoPlayer(
      info.ch,
      subj,
      STATE.currentClass,
      info.unit,
    );
    mc.style.transition = "opacity 0.2s ease";
    mc.style.opacity = "1";
    window.scrollTo(0, 0);
  }, 60);
  trackWatch(id, subj);
}

function findVideoInSubject(id, subj, cls) {
  const data = SYLLABUS[subj];
  if (!data) return null;
  const units = data[cls] || [];
  for (const unit of units) {
    const ch = unit.chapters.find((c) => c.id === id);
    if (ch) return { ch, unit: unit.unit };
  }
  return null;
}

function renderVideoPlayer(ch, subj, cls, unitName) {
  const acc = SUBJ_ACCENT[subj] || "#4f8ef7";
  const completed = DB.get("completedTopics") || {};
  const isDone = completed[subj + "_" + cls + "_" + ch.id];
  const note = (DB.get("notes") || {})[ch.id] || "";
  const ytId = getYTId(ch.videoUrl);
  const savedVids = DB.get("savedVideos") || [];
  const isSaved = savedVids.includes(ch.id);
  const allChapters = [];
  const units =
    SYLLABUS[subj] && SYLLABUS[subj][cls] ? SYLLABUS[subj][cls] : [];
  units.forEach((u) =>
    u.chapters.forEach((c) => allChapters.push({ ...c, unit: u.unit })),
  );

  return `
  <div class="player-wrap">
    <div class="player-breadcrumb">
      <button class="btn-ghost btn-sm" onclick="showSubject('${subj}','${cls}')">${icon("arrowLeft", 14)} ${subj}</button>
      <span class="bc-sep">/</span><span class="bc-text">${unitName.length > 40 ? unitName.substring(0, 40) + "..." : unitName}</span>
      <span class="bc-sep">/</span><span class="bc-title">${ch.title.length > 35 ? ch.title.substring(0, 35) + "..." : ch.title}</span>
    </div>

    <div class="player-layout">
      <div class="player-main">
        <div class="video-container" id="videoContainer">
          ${
            ytId
              ? `<iframe id="ytIframe" src="https://www.youtube.com/embed/${ytId}?rel=0&modestbranding=1" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="${ch.title}"></iframe>`
              : `<div style="width:100%;height:100%;background:linear-gradient(135deg, #0f172a, #1f2937);display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:12px;color:#f3f4f6;text-align:center;position:absolute;inset:0;padding:20px;box-sizing:border-box;">
                 <div style="width:60px;height:60px;background:rgba(255,255,255,0.05);border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:16px;color:var(--orange);box-shadow:0 0 30px rgba(251, 146, 60, 0.1);">${icon("clock", 30)}</div>
                 <h2 style="font-size:clamp(18px, 5vw, 24px);font-weight:800;margin-bottom:8px;letter-spacing:0.5px;line-height:1.2;">Video Coming Soon!</h2>
                 <p style="color:#9ca3af;font-size:clamp(12px, 3.5vw, 15px);max-width:400px;line-height:1.5;margin:0;">Our educators are preparing the best quality content for <strong style="color:white;">${ch.title}</strong>. Check back shortly!</p>
               </div>`
          }
        </div>

        <div class="player-controls">
          <button class="pc-btn" title="Previous chapter" onclick="navigateVideo(-1,'${subj}','${cls}')">${icon("skipBack", 15)}</button>
          <button class="pc-btn" title="Next chapter" onclick="navigateVideo(1,'${subj}','${cls}')">${icon("skipForward", 15)}</button>
          <button class="pc-btn ${isSaved ? "saved" : ""}" title="Bookmark" onclick="toggleSave('${ch.id}',this)" id="saveBtn">${isSaved ? icon("bookmarkFilled", 15) : icon("bookmark", 15)}</button>
          <button class="pc-btn" title="Fullscreen / Landscape" onclick="toggleVideoFullscreen()" id="fullscreenBtn">${icon("expand", 15)}</button>
          <div class="pc-sep"></div>
          <button class="mark-done-btn ${isDone ? "done" : ""}" id="markDoneBtn" onclick="markComplete('${ch.id}','${subj}','${cls}')">${icon("check", 14)} ${isDone ? "Completed" : "Mark Complete"}</button>
        </div>

        <div class="player-info-card">
          <div class="pic-header">
            <div>
              <h2 class="pic-title">${ch.title}</h2>
              <div class="pic-meta">
                <span style="color:${acc};font-weight:700">${subj}</span><span class="meta-dot"></span>
                <span>Class ${cls}</span><span class="meta-dot"></span><span>${unitName.split(":")[0]}</span>
              </div>
            </div>
          </div>
          <p class="pic-desc">${ch.desc}</p>
          <div class="player-tabs">
            <button class="ptab active" onclick="switchPlayerTab('notes',this)">${icon("pen", 13)} Notes</button>
            <button class="ptab" onclick="switchPlayerTab('resources',this)">${icon("folder", 13)} Resources</button>
          </div>
          <div id="ptab-notes" class="tab-pane active">
            <p class="tab-hint">Notes save automatically as you type.</p>
            <textarea class="notes-area" id="videoNotes" placeholder="Start typing notes for this chapter..." oninput="autoSaveNote('${ch.id}',this.value)">${note}</textarea>
          </div>
          <div id="ptab-resources" class="tab-pane">
            ${["NCERT Chapter PDF", "Formula Sheet", "Practice Questions", "Previous Year Questions (PYQ)"].map((r) => `<div class="resource-row">${icon("document", 15)} ${r}<span class="resource-soon">Coming soon</span></div>`).join("")}
          </div>
        </div>
      </div>

      <div class="player-sidebar">
        <div class="playlist-hdr">
          <span>${icon(SUBJ_ICON_KEY[subj] || "book", 14)} ${subj} &mdash; Class ${cls}</span>
          <span class="pl-count">${allChapters.length} chapters</span>
        </div>
        <div class="playlist-list">
          ${allChapters
            .map((vid, i) => {
              const isActive = vid.id === ch.id;
              const isVidDone = completed[subj + "_" + cls + "_" + vid.id];
              const vYtId = getYTId(vid.videoUrl);
              return `<div class="pl-item ${isActive ? "active" : ""}" onclick="playVideo('${vid.id}','${subj}')">
              <div class="pl-thumb">
                ${vYtId ? `<img src="https://img.youtube.com/vi/${vYtId}/default.jpg" style="width:100%;height:100%;object-fit:cover;border-radius:5px" onerror="this.style.display='none'" alt="thumb">` : ""}
                ${!vYtId ? `<div class="pl-thumb-empty" style="background:var(--bg-3);color:var(--text-3);border:1px dashed var(--border)">${icon("clock", 12)}</div>` : ""}
                <span class="pl-num">${i + 1}</span>
                ${isActive ? `<div class="pl-active-overlay">${icon("play", 12)}</div>` : ""}
              </div>
              <div class="pl-info">
                <h4>${vid.title}</h4><span>${vid.unit ? vid.unit.split(":")[0] : ""}</span>
                ${isVidDone ? `<div class="pl-done-mark">${icon("check", 10)} Done</div>` : ""}
              </div>
            </div>`;
            })
            .join("")}
        </div>
      </div>
    </div>
  </div>`;
}

function switchPlayerTab(tab, btn) {
  document
    .querySelectorAll(".tab-pane")
    .forEach((t) => t.classList.remove("active"));
  document
    .querySelectorAll(".ptab")
    .forEach((b) => b.classList.remove("active"));
  const el = document.getElementById("ptab-" + tab);
  if (el) el.classList.add("active");
  if (btn) btn.classList.add("active");
}

function navigateVideo(dir, subj, cls) {
  if (!STATE.currentVideo) return;
  const allChs = [];
  const units =
    SYLLABUS[subj] && SYLLABUS[subj][cls] ? SYLLABUS[subj][cls] : [];
  units.forEach((u) => u.chapters.forEach((c) => allChs.push(c)));
  const idx = allChs.findIndex((c) => c.id === STATE.currentVideo.id);
  const next = allChs[idx + dir];
  if (next) playVideo(next.id, subj);
  else
    showToast(
      dir > 0 ? "Last chapter in subject" : "First chapter in subject",
      "info",
    );
}

function markComplete(id, subj, cls) {
  const topics = DB.get("completedTopics") || {};
  const key = subj + "_" + cls + "_" + id;
  if (topics[key]) {
    delete topics[key];
    showToast("Marked as incomplete", "info");
  } else {
    topics[key] = new Date().toISOString();
    showToast("Chapter marked complete!", "success");
  }
  DB.set("completedTopics", topics);
  const btn = document.getElementById("markDoneBtn");
  if (btn) {
    btn.classList.toggle("done", !!topics[key]);
    btn.innerHTML = `${icon("check", 14)} ${topics[key] ? "Completed" : "Mark Complete"}`;
  }
}

function toggleSave(id, btn) {
  const saved = DB.get("savedVideos") || [];
  const idx = saved.indexOf(id);
  if (idx >= 0) {
    saved.splice(idx, 1);
    showToast("Removed from saved", "info");
  } else {
    saved.push(id);
    showToast("Video bookmarked!", "success");
  }
  DB.set("savedVideos", saved);
  if (btn) {
    const isSaved = saved.includes(id);
    btn.classList.toggle("saved", isSaved);
    btn.innerHTML = isSaved ? icon("bookmarkFilled", 15) : icon("bookmark", 15);
  }
}

function trackWatch(id, subj) {
  const history = DB.get("watchHistory") || [];
  const ex = history.findIndex((h) => h.id === id);
  if (ex >= 0) history.splice(ex, 1);
  history.push({
    id,
    subj,
    cls: STATE.currentClass,
    ts: Date.now(),
    progress: 0,
  });
  DB.set("watchHistory", history.slice(-100));
}

function autoSaveNote(id, val) {
  const notes = DB.get("notes") || {};
  notes[id] = val;
  DB.set("notes", notes);
}

// ===== CAREER MODULE =====
function renderCareer() {
  const stream = STATE.currentCareerStream || "Science";
  const careers = CAREERS[stream] || CAREERS.Science;

  return `
  <div style="padding-bottom: 20px;">
    <div class="section-head">
      <h2>Career Paths</h2>
      <p>Explore your future — Discover what to do and what is required for each path.</p>
    </div>
    <div class="career-tabs">
      ${Object.keys(CAREERS)
        .map(
          (s) =>
            `<div class="career-tab ${s === stream ? "active" : ""}" onclick="switchCareerStream('${s}')">${s}</div>`,
        )
        .join("")}
    </div>
    <div class="careers-grid">
      ${careers
        .map(
          (c) => `
        <div class="career-card">
          <div class="career-card-top">
            <div class="career-icon" style="background:${c.color}15;color:${c.color}">${icon(c.icon, 26)}</div>
            <div>
              <h3>${c.title}</h3>
              <div class="career-ctag">${c.tag}</div>
            </div>
          </div>
          <p class="career-desc">${c.desc}</p>
          <div class="career-details">
            <div class="cd-row">
              <span style="display:flex;align-items:center;gap:6px">${icon("check", 14)} Required</span>
              <span>${c.eligibility}</span>
            </div>
            <div class="cd-row">
              <span style="display:flex;align-items:center;gap:6px">${icon("document", 14)} Exams</span>
              <span>${c.exams}</span>
            </div>
            <div class="cd-row">
              <span style="display:flex;align-items:center;gap:6px">${icon("brain", 14)} Skills</span>
              <span>${c.skills}</span>
            </div>
            <div class="cd-row">
              <span style="display:flex;align-items:center;gap:6px">${icon("target", 14)} Scope</span>
              <span>${c.scope}</span>
            </div>
          </div>
          <div class="salary-pill">${c.salary} Expected</div>
        </div>`,
        )
        .join("")}
    </div>
  </div>`;
}

function switchCareerStream(s) {
  STATE.currentCareerStream = s;
  const mc = document.getElementById("appMain");
  if (mc) mc.innerHTML = renderCareer();
}

// ===== PROGRESS FIX =====
function renderProgress() {
  const completed = DB.get("completedTopics") || {};
  const history = DB.get("watchHistory") || [];
  const streak = DB.get("streak") || { count: 0 };
  const subjects = [
    "Physics",
    "Chemistry",
    "Mathematics",
    "Biology",
    "IT",
    "English",
    "Odia",
  ];
  const cls = STATE.currentClass;

  const getSubjPct = (s) => {
    const units = SYLLABUS[s] && SYLLABUS[s][cls] ? SYLLABUS[s][cls] : [];
    const total = units.reduce((a, u) => a + u.chapters.length, 0);
    const done = Object.keys(completed).filter((k) =>
      k.startsWith(s + "_" + cls + "_"),
    ).length;
    return total ? Math.round((done / total) * 100) : 0;
  };

  const activityMap = {};
  history.forEach((h) => {
    const d = new Date(h.ts).toDateString();
    activityMap[d] = (activityMap[d] || 0) + 1;
  });

  const today = new Date();
  const weeks = [];

  // FIX APPLIED HERE: Show a full year to naturally fill desktop width and scroll on mobile
  const daysToDisplay = 364;
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - daysToDisplay);
  const startDow = startDate.getDay();
  startDate.setDate(startDate.getDate() - startDow);
  let cur = new Date(startDate);

  while (cur <= today) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      const ds = cur.toDateString();
      const cnt = activityMap[ds] || 0;
      const isToday = ds === today.toDateString();
      const level =
        cnt === 0
          ? ""
          : cnt < 2
            ? "l1"
            : cnt < 4
              ? "l2"
              : cnt < 6
                ? "l3"
                : "l4";

      // FIX APPLIED HERE: Added onclick to trigger toast for mobile touch support
      const infoText = `${ds}: ${cnt} videos`;
      week.push(
        `<div class="hm-day ${level} ${isToday ? "today" : ""}" title="${infoText}" onclick="showToast('${infoText}', 'info')"></div>`,
      );
      cur.setDate(cur.getDate() + 1);
    }
    weeks.push(`<div class="hm-week">${week.join("")}</div>`);
  }

  return `
  <div>
    <div class="section-head"><h2>My Progress</h2><p>Your complete CHSE study tracking — Class ${cls}</p></div>
    <div class="progress-layout">
      <div>
        <div class="heatmap-card">
          <div class="heatmap-hdr">
            <h3>Study Activity — Last 12 Months</h3>
            <span style="font-size:12px;color:var(--orange);display:flex;align-items:center;gap:4px">${icon("fire", 14)} ${streak.count} day streak</span>
          </div>
          <div class="heatmap-grid">${weeks.join("")}</div>
          <div class="heatmap-legend">
            <span>Less</span>
            <div class="hl-sq" style="background:var(--bg-4)"></div>
            <div class="hl-sq l1"></div><div class="hl-sq l2"></div><div class="hl-sq l3"></div><div class="hl-sq l4"></div>
            <span>More</span>
          </div>
        </div>
        <div class="heatmap-card">
          <div class="heatmap-hdr"><h3>Subject Progress — Class ${cls}</h3></div>
          <div class="sp-list">
            ${subjects
              .map((s) => {
                const pct = getSubjPct(s);
                const col = SUBJ_ACCENT[s];
                return `<div class="sp-row">
                <div class="sp-row-hdr">
                  <span style="color:${col};font-weight:700;display:flex;align-items:center;gap:6px">${icon(SUBJ_ICON_KEY[s] || "book", 13)} ${s}</span>
                  <span>${pct}%</span>
                </div>
                <div class="sp-bar-track"><div class="sp-bar-fill" style="width:${pct}%;background:${col}"></div></div>
              </div>`;
              })
              .join("")}
          </div>
        </div>
      </div>
      <div>
        <div class="heatmap-card" style="margin-bottom:14px">
          <h3 style="font-size:14px;font-weight:800;margin-bottom:14px">Quick Stats</h3>
          ${[
            {
              l: "Videos Watched",
              v: history.length,
              c: "#4f8ef7",
              ikey: "video",
            },
            {
              l: "Topics Completed",
              v: Object.keys(completed).length,
              c: "#9d6fff",
              ikey: "check",
            },
            {
              l: "Day Streak",
              v: streak.count + " days",
              c: "#fb923c",
              ikey: "fire",
            },
            {
              l: "Study Time",
              v:
                history.length * 40 > 60
                  ? Math.floor((history.length * 40) / 60) +
                    "h " +
                    ((history.length * 40) % 60) +
                    "m"
                  : history.length * 40 + "m",
              c: "#34d399",
              ikey: "clock",
            },
          ]
            .map(
              (
                s,
              ) => `<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 0;border-bottom:1px solid var(--border-md)">
              <span style="font-size:13px;color:var(--text-2);display:flex;align-items:center;gap:7px">${icon(s.ikey, 14)} ${s.l}</span>
              <strong style="font-size:16px;font-weight:800;color:${s.c}">${s.v}</strong>
            </div>`,
            )
            .join("")}
        </div>
        <div class="heatmap-card">
          <h3 style="font-size:14px;font-weight:800;margin-bottom:14px">Recent Activity</h3>
          ${
            history.length === 0
              ? `<p style="color:var(--text-3);font-size:13px;text-align:center;padding:20px">No videos watched yet</p>`
              : history
                  .slice(-6)
                  .reverse()
                  .map((h) => {
                    const info = findVideoById(h.id);
                    const col = SUBJ_ACCENT[h.subj] || "#4f8ef7";
                    return info
                      ? `<div style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--border-md)">
                  <div style="width:7px;height:7px;border-radius:50%;background:${col};flex-shrink:0"></div>
                  <div style="flex:1;min-width:0">
                    <div style="font-size:12px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${info.ch.title}</div>
                    <div style="font-size:11px;color:var(--text-3)">${h.subj} &middot; ${new Date(h.ts).toLocaleDateString("en-IN")}</div>
                  </div>
                </div>`
                      : "";
                  })
                  .filter(Boolean)
                  .join("")
          }
        </div>
      </div>
    </div>
  </div>`;
}

// ===== SAVED =====
function renderSaved() {
  const savedIds = DB.get("savedVideos") || [];
  const watchHistory = DB.get("watchHistory") || [];
  if (savedIds.length === 0) {
    return `<div>
      <div class="section-head"><h2>Saved Videos</h2><p>Bookmarked videos for quick access</p></div>
      <div class="empty-state">
        <div class="es-icon">${icon("bookmark", 48)}</div><h3>No saved videos yet</h3>
        <p>Bookmark videos while watching to save them here for later.</p>
      </div>
    </div>`;
  }
  const videos = savedIds
    .map((id) => {
      const info = findVideoById(id);
      if (!info) return null;
      const h = watchHistory.find((w) => w.id === id);
      return { ...info, progress: h ? h.progress || 0 : 0 };
    })
    .filter(Boolean);

  return `<div>
    <div class="section-head"><h2>Saved Videos</h2><p>${videos.length} bookmarked chapters</p></div>
    <div class="video-grid">${videos.map((v) => videoCard(v.ch, v.subj, v.progress)).join("")}</div>
  </div>`;
}

// ===== NOTES =====
function renderNotes() {
  const notes = DB.get("notes") || {};
  const noteIds = Object.keys(notes).filter((id) => notes[id]);
  return `<div>
    <div class="section-head"><h2>My Notes</h2><p>All your chapter notes in one place</p></div>
    <div class="notes-layout">
      <div class="notes-list-panel">
        <div class="nlp-hdr"><h3>Notes (${noteIds.length})</h3><button class="btn-icon" onclick="exportAllNotes()" title="Export all">${icon("download", 14)}</button></div>
        ${
          noteIds.length === 0
            ? `<p style="padding:20px;color:var(--text-3);font-size:13px;text-align:center">No notes yet.<br>Take notes while watching videos.</p>`
            : noteIds
                .map((id) => {
                  const info = findVideoById(id);
                  return info
                    ? `<div class="note-item ${STATE.activeNote === id ? "active" : ""}" onclick="selectNote('${id}')">
              <h4>${info.ch.title}</h4><p>${info.subj} &middot; ${notes[id].substring(0, 30)}...</p></div>`
                    : "";
                })
                .filter(Boolean)
                .join("")
        }
      </div>
      <div class="notes-editor-panel" id="notesEditor">
        ${STATE.activeNote && notes[STATE.activeNote] ? renderNoteEditor(STATE.activeNote, notes[STATE.activeNote]) : `<div style="display:flex;align-items:center;justify-content:center;height:100%;flex-direction:column;gap:12px;color:var(--text-3)">${icon("pen", 32)}<p style="font-size:13px">Select a note to view and edit</p></div>`}
      </div>
    </div>
  </div>`;
}

function renderNoteEditor(id, content) {
  const info = findVideoById(id);
  if (!info) return "";
  return `
  <div class="ne-hdr">
    <input type="text" value="${info.ch.title}" readonly style="color:var(--text-1)">
    <button class="btn-icon" onclick="exportNote('${id}')" title="Export note">${icon("download", 14)}</button>
    <button class="btn-icon" onclick="deleteNote('${id}')" title="Delete note">${icon("trash", 14)}</button>
  </div>
  <div class="ne-body"><textarea class="ne-textarea" id="noteEditorArea" oninput="autoSaveNote('${id}',this.value)">${content}</textarea></div>
  <div class="ne-footer"><span style="font-size:11px;color:var(--text-3)">${info.subj} &middot; Class ${info.cls}</span></div>`;
}

function initNotes() {
  const notes = DB.get("notes") || {};
  const noteIds = Object.keys(notes).filter((id) => notes[id]);
  if (noteIds.length > 0 && !STATE.activeNote) {
    STATE.activeNote = noteIds[0];
    const editor = document.getElementById("notesEditor");
    if (editor)
      editor.innerHTML = renderNoteEditor(noteIds[0], notes[noteIds[0]]);
  }
}

function selectNote(id) {
  STATE.activeNote = id;
  const notes = DB.get("notes") || {};
  document
    .querySelectorAll(".note-item")
    .forEach((n) => n.classList.remove("active"));
  event.currentTarget.classList.add("active");
  const editor = document.getElementById("notesEditor");
  if (editor) editor.innerHTML = renderNoteEditor(id, notes[id] || "");
}

function deleteNote(id) {
  const notes = DB.get("notes") || {};
  delete notes[id];
  DB.set("notes", notes);
  STATE.activeNote = null;
  showSection("notes");
  showToast("Note deleted", "info");
}

function exportNote(id) {
  const notes = DB.get("notes") || {};
  const info = findVideoById(id);
  const content = notes[id] || "";
  const blob = new Blob([`${info ? info.ch.title : id}\n\n${content}`], {
    type: "text/plain",
  });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download =
    (info ? info.ch.title : id).replace(/[^a-z0-9]/gi, "_") + "_notes.txt";
  a.click();
  showToast("Note exported!", "success");
}

function exportAllNotes() {
  const notes = DB.get("notes") || {};
  let all = "OdishaLearn — My CHSE Notes\n" + "=".repeat(40) + "\n\n";
  Object.entries(notes).forEach(([id, content]) => {
    if (!content) return;
    const info = findVideoById(id);
    all += `## ${info ? info.ch.title : id}\n${info ? info.subj + " · Class " + info.cls : ""}\n\n${content}\n\n${"─".repeat(40)}\n\n`;
  });
  const blob = new Blob([all], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "odishalearn_all_notes.txt";
  a.click();
  showToast("All notes exported!", "success");
}

// ===== PROFILE =====
function renderProfile() {
  const user = DB.get("user") || {
    name: "Student",
    class: "12",
    stream: "Science",
    joined: new Date().toISOString(),
  };
  const streak = DB.get("streak") || { count: 0 };
  const history = DB.get("watchHistory") || [];
  const completed = DB.get("completedTopics") || {};
  const initial = user.name.charAt(0).toUpperCase();
  const avatarUrl = DB.get("avatarUrl");

  return `<div>
    <div class="section-head"><h2>My Profile</h2><p>Your CHSE learning profile and statistics</p></div>
    <div class="profile-grid">
      <div class="profile-card">
        <div class="profile-avatar">
          <div class="profile-avatar-img">${avatarUrl ? `<img src="${avatarUrl}" alt="avatar">` : initial}</div>
          <label class="avatar-edit" title="Change photo">${icon("pen", 12)}<input type="file" accept="image/*" style="display:none" onchange="changeAvatar(this)"></label>
        </div>
        <div class="profile-name">${user.name}</div>
        <div class="profile-sub">Class ${user.class} &middot; ${user.stream} Stream</div>
        <div class="profile-sub" style="font-size:11px">Joined ${new Date(user.joined).toLocaleDateString("en-IN", { month: "long", year: "numeric" })}</div>
        <div class="profile-stats-grid">
          <div class="psg-item"><strong>${history.length}</strong><span>Videos</span></div>
          <div class="psg-item"><strong>${streak.count}</strong><span>Streak</span></div>
          <div class="psg-item"><strong>${Object.keys(completed).length}</strong><span>Done</span></div>
          <div class="psg-item"><strong>${history.length > 0 ? Math.floor((history.length * 40) / 60) + "h" : "0h"}</strong><span>Study</span></div>
        </div>
      </div>
      <div class="profile-detail-cards">
        <div class="pdc">
          <div class="pdc-hdr"><h3>Personal Information</h3><button class="btn-ghost btn-sm" onclick="saveProfile()">Save</button></div>
          <div class="field-grid">
            <div class="field-wrap"><label>Full Name</label><input type="text" id="pf-name" value="${user.name}"></div>
            <div class="field-wrap"><label>Class</label><select id="pf-class"><option value="11" ${user.class === "11" ? "selected" : ""}>Class 11</option><option value="12" ${user.class === "12" ? "selected" : ""}>Class 12</option></select></div>
            <div class="field-wrap"><label>Stream</label><select id="pf-stream"><option value="Science" ${user.stream === "Science" ? "selected" : ""}>Science</option><option value="Commerce" ${user.stream === "Commerce" ? "selected" : ""}>Commerce</option><option value="Arts" ${user.stream === "Arts" ? "selected" : ""}>Arts</option></select></div>
            <div class="field-wrap"><label>School / College</label><input type="text" id="pf-school" value="${user.school || ""}" placeholder="Your institution name"></div>
          </div>
        </div>
        <div class="pdc">
          <div class="pdc-hdr"><h3>Learning Statistics</h3></div>
          <div style="display:flex;flex-direction:column;gap:10px">
            ${["Physics", "Chemistry", "Mathematics", "Biology"]
              .map((s) => {
                const units =
                  SYLLABUS[s] && SYLLABUS[s][user.class]
                    ? SYLLABUS[s][user.class]
                    : [];
                const total = units.reduce((a, u) => a + u.chapters.length, 0);
                const done = Object.keys(completed).filter((k) =>
                  k.startsWith(s + "_" + user.class + "_"),
                ).length;
                const pct = total ? Math.round((done / total) * 100) : 0;
                return `<div>
                <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px"><span style="color:${SUBJ_ACCENT[s]};font-weight:700">${s}</span><span>${done}/${total} chapters</span></div>
                <div class="sp-bar-track" style="height:6px"><div class="sp-bar-fill" style="width:${pct}%;background:${SUBJ_ACCENT[s]}"></div></div>
              </div>`;
              })
              .join("")}
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function saveProfile() {
  const user = DB.get("user") || {};
  user.name = document.getElementById("pf-name").value.trim() || user.name;
  user.class = document.getElementById("pf-class").value;
  user.stream = document.getElementById("pf-stream").value;
  user.school = document.getElementById("pf-school").value.trim();
  DB.set("user", user);
  STATE.currentClass = user.class;
  updateUserUI(user);
  updateClassToggleUI();
  showToast("Profile saved!", "success");
}

function changeAvatar(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    DB.set("avatarUrl", e.target.result);
    updateUserUI(DB.get("user"));
    showSection("profile");
    showToast("Profile picture updated!", "success");
  };
  reader.readAsDataURL(file);
}

// ===== SETTINGS =====
function renderSettings() {
  const tab = STATE.settingsTab || "general";
  const settings = Object.assign(
    {
      notifications: true,
      autoplay: false,
      darkMode: true,
      showProgress: true,
      compact: false,
      contentAlerts: false,
      streakAlerts: true,
    },
    DB.get("settings") || {},
  );

  return `<div>
    <div class="section-head"><h2>Settings</h2><p>Manage your OdishaLearn preferences</p></div>
    <div class="settings-layout">
      <div class="settings-nav-panel">
        ${[
          { id: "general", label: "General", ikey: "settings" },
          { id: "notifications", label: "Notifications", ikey: "bell" },
          { id: "data", label: "Data and Privacy", ikey: "document" },
        ]
          .map(
            (s) =>
              `<div class="sn-item ${tab === s.id ? "active" : ""}" onclick="switchSettingsTab('${s.id}')">${icon(s.ikey, 15)} ${s.label}</div>`,
          )
          .join("")}
      </div>
      <div class="settings-content-panel">
        ${
          tab === "general"
            ? `
          <div class="settings-section">
            <h3>Preferences</h3>
            ${[
              {
                label: "Autoplay next video",
                desc: "Automatically play next chapter after finishing",
                key: "autoplay",
              },
              {
                label: "Show progress on subject cards",
                desc: "Display chapter completion percentage on dashboard",
                key: "showProgress",
              },
              {
                label: "Compact video list",
                desc: "Use smaller video cards for denser layout",
                key: "compact",
              },
            ]
              .map(
                (r) =>
                  `<div class="settings-row"><div class="sr-info"><h4>${r.label}</h4><p>${r.desc}</p></div><div class="toggle ${settings[r.key] ? "on" : ""}" id="toggle-${r.key}" onclick="toggleSetting('${r.key}')"></div></div>`,
              )
              .join("")}
          </div>
          <div class="settings-section">
            <h3>Display</h3>
            <div class="settings-row">
              <div class="sr-info"><h4>Active Class</h4><p>Switch between Class 11 and Class 12 syllabus</p></div>
              <div class="class-toggle">
                <button class="ct-btn ${STATE.currentClass === "11" ? "active" : ""}" id="settings-ct11" onclick="switchClassFromSettings('11')">11</button>
                <button class="ct-btn ${STATE.currentClass === "12" ? "active" : ""}" id="settings-ct12" onclick="switchClassFromSettings('12')">12</button>
              </div>
            </div>
          </div>`
            : tab === "notifications"
              ? `
          <div class="settings-section">
            <h3>Notifications</h3>
            ${[
              {
                label: "Study reminders",
                desc: "Daily reminders to maintain your streak",
                key: "notifications",
              },
              {
                label: "New content alerts",
                desc: "Get notified when new videos are added",
                key: "contentAlerts",
              },
              {
                label: "Streak warnings",
                desc: "Alert when streak is about to break",
                key: "streakAlerts",
              },
            ]
              .map(
                (r) =>
                  `<div class="settings-row"><div class="sr-info"><h4>${r.label}</h4><p>${r.desc}</p></div><div class="toggle ${settings[r.key] ? "on" : ""}" id="toggle-${r.key}" onclick="toggleSetting('${r.key}')"></div></div>`,
              )
              .join("")}
          </div>`
              : `
          <div class="settings-section">
            <h3>Data Management</h3>
            <div class="settings-row"><div class="sr-info"><h4>Export all notes</h4><p>Download all your notes as a text file</p></div><button class="btn-ghost btn-sm" onclick="exportAllNotes()">${icon("download", 13)} Export</button></div>
            <div class="settings-row"><div class="sr-info"><h4>Clear watch history</h4><p>Remove all video watch records</p></div><button class="btn-ghost btn-sm" onclick="clearData('watchHistory')">Clear</button></div>
            <div class="settings-row"><div class="sr-info"><h4>Reset all progress</h4><p>Clear completed topics — cannot be undone</p></div><button class="btn-ghost btn-sm" style="color:var(--red);border-color:var(--red-dim)" onclick="clearData('completedTopics')">Reset</button></div>
            <div class="settings-row"><div class="sr-info"><h4>Clear saved videos</h4><p>Remove all bookmarked videos</p></div><button class="btn-ghost btn-sm" onclick="clearData('savedVideos')">Clear</button></div>
            <div class="settings-row"><div class="sr-info"><h4>Reset everything</h4><p>Delete ALL data and start fresh — cannot be undone</p></div><button class="btn-ghost btn-sm" style="color:var(--red);border-color:var(--red-dim)" onclick="resetEverything()">Reset All</button></div>
          </div>`
        }
      </div>
    </div>
  </div>`;
}

function toggleSetting(key) {
  const settings = Object.assign(
    {
      notifications: true,
      autoplay: false,
      darkMode: true,
      showProgress: true,
      compact: false,
      contentAlerts: false,
      streakAlerts: true,
    },
    DB.get("settings") || {},
  );
  settings[key] = !settings[key];
  DB.set("settings", settings);
  const el = document.getElementById("toggle-" + key);
  if (el) el.classList.toggle("on", !!settings[key]);
  showToast(settings[key] ? "Enabled" : "Disabled", "info");
}

function switchSettingsTab(tab) {
  STATE.settingsTab = tab;
  const mc = document.getElementById("appMain");
  if (mc) mc.innerHTML = renderSettings();
}

function switchClassFromSettings(cls) {
  STATE.currentClass = cls;
  updateClassToggleUI();
  const btn11 = document.getElementById("settings-ct11");
  const btn12 = document.getElementById("settings-ct12");
  if (btn11) btn11.classList.toggle("active", cls === "11");
  if (btn12) btn12.classList.toggle("active", cls === "12");
  showToast("Switched to Class " + cls, "info");
}

function clearData(key) {
  const labels = {
    watchHistory: "watch history",
    completedTopics: "all progress",
    savedVideos: "saved videos",
  };
  const label = labels[key] || key;
  if (
    confirm(
      "Are you sure you want to clear your " +
        label +
        "? This cannot be undone.",
    )
  ) {
    DB.del(key);
    showToast(
      label.charAt(0).toUpperCase() + label.slice(1) + " cleared",
      "success",
    );
  }
}

function resetEverything() {
  if (
    confirm(
      "This will delete ALL your data including progress, notes, history and settings. This CANNOT be undone. Are you sure?",
    )
  ) {
    [
      "watchHistory",
      "completedTopics",
      "savedVideos",
      "notes",
      "settings",
      "streak",
      "videoUrls",
      "user",
    ].forEach((k) => DB.del(k));
    showToast("All data cleared. Refreshing...", "info");
    setTimeout(() => location.reload(), 1500);
  }
}

// ===== SEARCH =====
function openSearch() {
  const overlay = document.getElementById("searchOverlay");
  if (overlay) {
    overlay.classList.remove("hidden");
    const input = document.getElementById("searchInput");
    if (input) {
      input.value = "";
      input.focus();
    }
    document.getElementById("searchResults").innerHTML = "";
  }
}

function closeSearch() {
  const overlay = document.getElementById("searchOverlay");
  if (overlay) overlay.classList.add("hidden");
}

function searchContent(query) {
  const container = document.getElementById("searchResults");
  if (!container) return;
  if (!query || query.length < 2) {
    container.innerHTML = "";
    return;
  }
  query = query.toLowerCase();
  const results = [];
  for (const subj of Object.keys(SYLLABUS)) {
    for (const cls of Object.keys(SYLLABUS[subj])) {
      for (const unit of SYLLABUS[subj][cls]) {
        for (const ch of unit.chapters) {
          if (
            ch.title.toLowerCase().includes(query) ||
            ch.desc.toLowerCase().includes(query) ||
            unit.unit.toLowerCase().includes(query)
          ) {
            results.push({ ch, subj, cls, unit: unit.unit });
          }
        }
      }
    }
  }
  if (results.length === 0) {
    container.innerHTML = `<div style="text-align:center;padding:30px;color:var(--text-3);font-size:14px">No results found for "${query}"</div>`;
    return;
  }
  container.innerHTML = results
    .slice(0, 12)
    .map((r) => {
      const acc = SUBJ_ACCENT[r.subj] || "#4f8ef7";
      return `<div class="search-result-item" onclick="closeSearch();playVideo('${r.ch.id}','${r.subj}')">
      <div class="sri-icon" style="background:${acc}18;color:${acc}">${icon(SUBJ_ICON_KEY[r.subj] || "book", 16)}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;margin-bottom:2px">${r.ch.title}</div>
        <div style="font-size:11px;color:var(--text-3)">${r.subj} &middot; Class ${r.cls} &middot; ${r.unit.split(":")[0]}</div>
      </div>
      <span style="font-size:11px;color:${acc};font-weight:700;flex-shrink:0">${r.subj}</span>
    </div>`;
    })
    .join("");
}

// ===== TOAST =====
function showToast(msg, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  const ikey =
    type === "success" ? "check" : type === "error" ? "close" : "bell";
  toast.innerHTML = `${icon(ikey, 14)} ${msg}`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===== START =====
window.addEventListener("DOMContentLoaded", init);
