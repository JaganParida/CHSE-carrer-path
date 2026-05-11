/* ===================================================
   OdishaLearn — CHSE Odisha Platform Script
   Complete Class 11 & 12 Syllabus (2025-26)
   Streams: Science, Commerce, Arts (Fully Dynamic)
   =================================================== */

// ===== SVG ICON LIBRARY =====
const ICONS = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  dashboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 6.042A8.967A8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/></svg>`,
  map: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c-.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"/></svg>`,
  chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/></svg>`,
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
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>`,
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

// ===== STREAM CONFIGURATION =====
const STREAM_SUBJECTS = {
  Science: [
    "Physics",
    "Chemistry",
    "Mathematics",
    "Biology",
    "IT",
    "English",
    "Odia",
  ],
  Commerce: ["Accountancy", "BSM", "BMS", "Economics", "IT", "English", "Odia"],
  Arts: [
    "History",
    "Political Science",
    "Economics",
    "Logic",
    "Sociology",
    "English",
    "Odia",
  ],
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
            videoUrl: "https://youtu.be/YHu8e4-IrSE?si=0vEyvZBi6I0ZAjPm",
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
            videoUrl: "https://youtu.be/1_ZFWFFoPu8?si=NJ6EHDIlZx2DjkXI",
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
            videoUrl: "https://youtu.be/5cE5jVhdDtA?si=myiKrzD3o-lC-Anh",
          },
          {
            id: "ph11_7_2",
            title: "Mechanical Properties of Fluids",
            desc: "Pascal's law. Buoyancy. Bernoulli's theorem. Viscosity.",
            videoUrl: "https://youtu.be/R8gN-kDi5E8?si=oFePzwbWw_gWuksL",
          },
          {
            id: "ph11_7_3",
            title: "Thermal Properties of Matter",
            desc: "Thermal expansion. Specific heat capacity. Calorimetry.",
            videoUrl: "https://youtu.be/sV95Rh7Nvis?si=7S7UDl93kKBv00Oy",
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
            videoUrl: "https://youtu.be/L2xOD_hCC2k?si=lXPHXc5d1znlz_N0",
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
            videoUrl: "https://youtu.be/Yv_G-G4eEHo?si=t-UtthmRTpKW9gz0",
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
            videoUrl: "https://youtu.be/x7Hzh-F24Qo?si=tcaA28aIx3F6zWIl",
          },
          {
            id: "ph11_10_2",
            title: "Waves",
            desc: "Wave motion. Principle of superposition. Doppler effect.",
            videoUrl: "https://youtu.be/IWtaEtuOLzM?si=NIafUqhjtgXmRSGe",
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
            videoUrl: "https://youtu.be/qle-q0CxtJk?si=WVLCFBqt7Rz8eA32",
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
            videoUrl: "https://youtu.be/QWduKfQjZYE?si=HdYLLPIiJwX6mk0h",
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
            videoUrl: "https://youtu.be/NzB2YwNndZw?si=hFuV2OuctI0Ijp58",
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
            videoUrl: "https://youtu.be/A4Ab8xZmTU4?si=usetoSH1f_34aWin",
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
            videoUrl: "https://youtu.be/X86UraGJtNk?si=eN5s4T7a9UokPNEy",
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
            videoUrl: "https://youtu.be/1U3-cdOoOD4?si=lN7Y7rsKNcidOUBj",
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
            videoUrl:
              "https://www.youtube.com/live/1UicWFJtcLc?si=zECswl8G6D5HnEjr",
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
            videoUrl: "https://youtu.be/XHDI47WFqe0?si=QcUG52rKzHu5TzK9",
          },
          {
            id: "ma11_2_2",
            title: "Complex Numbers",
            desc: "Polar form. Quadratic equations.",
            videoUrl: "https://youtu.be/7tu6_GH5qAw?si=yWLb1le-es-jgDna",
          },
          {
            id: "ma11_2_3",
            title: "Linear Inequalities",
            desc: "Algebraic solutions of linear inequalities.",
            videoUrl: "https://youtu.be/Kdcd7m0jme0?si=ZkC-aC4xTqYg-HbP",
          },
          {
            id: "ma11_2_4",
            title: "Permutations and Combinations",
            desc: "nPr and nCr applications.",
            videoUrl: "https://youtu.be/Y1X_zLptX_E?si=G4VXbZtdtn4WyyrN",
          },
          {
            id: "ma11_2_5",
            title: "Binomial Theorem",
            desc: "Pascal's triangle. General term.",
            videoUrl: "https://youtu.be/hxPoUsmq7Xs?si=wwCTI9B0up4dibr4",
          },
          {
            id: "ma11_2_6",
            title: "Sequences and Series",
            desc: "AP and GP.",
            videoUrl: "https://youtu.be/pVX8_vNbta4?si=8JfYtob9s5qIUrZJ",
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
  // ===== NEW SUBJECTS (COMMERCE & ARTS) =====
  Accountancy: {
    11: [
      {
        unit: "Unit I: Theoretical Framework",
        chapters: [
          {
            id: "acc11_1_1",
            title: "Intro to Accounting",
            desc: "Objectives, advantages, and limitations.",
            videoUrl: "",
          },
          {
            id: "acc11_1_2",
            title: "Basic Accounting Terms",
            desc: "Assets, liabilities, capital, revenues.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit II: Accounting Process",
        chapters: [
          {
            id: "acc11_2_1",
            title: "Recording of Transactions",
            desc: "Journal, Ledger, Cash Book.",
            videoUrl: "",
          },
          {
            id: "acc11_2_2",
            title: "Bank Reconciliation Statement",
            desc: "Need and preparation of BRS.",
            videoUrl: "",
          },
          {
            id: "acc11_2_3",
            title: "Depreciation",
            desc: "SLM and WDV methods.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit III: Financial Statements",
        chapters: [
          {
            id: "acc11_3_1",
            title: "Final Accounts",
            desc: "Trading, P&L Account, and Balance Sheet.",
            videoUrl: "",
          },
        ],
      },
    ],
    12: [
      {
        unit: "Unit I: Partnership Accounts",
        chapters: [
          {
            id: "acc12_1_1",
            title: "Fundamentals of Partnership",
            desc: "Partnership deed, P&L Appropriation.",
            videoUrl: "",
          },
          {
            id: "acc12_1_2",
            title: "Admission of a Partner",
            desc: "Goodwill, Revaluation of Assets.",
            videoUrl: "",
          },
          {
            id: "acc12_1_3",
            title: "Retirement and Death",
            desc: "Calculation of gaining ratio and settlement.",
            videoUrl: "",
          },
          {
            id: "acc12_1_4",
            title: "Dissolution",
            desc: "Realisation account setup.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit II: Company Accounts",
        chapters: [
          {
            id: "acc12_2_1",
            title: "Accounting for Share Capital",
            desc: "Issue and forfeiture of shares.",
            videoUrl: "",
          },
          {
            id: "acc12_2_2",
            title: "Issue of Debentures",
            desc: "Debentures issued as collateral.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit III: Financial Statement Analysis",
        chapters: [
          {
            id: "acc12_3_1",
            title: "Ratio Analysis",
            desc: "Liquidity, Solvency, Activity ratios.",
            videoUrl: "",
          },
          {
            id: "acc12_3_2",
            title: "Cash Flow Statement",
            desc: "Operating, Investing, Financing activities.",
            videoUrl: "",
          },
        ],
      },
    ],
  },
  BSM: {
    11: [
      {
        unit: "Unit I: Foundations of Business",
        chapters: [
          {
            id: "bsm11_1_1",
            title: "Nature and Purpose",
            desc: "Economic and non-economic activities.",
            videoUrl: "",
          },
          {
            id: "bsm11_1_2",
            title: "Forms of Business Organisations",
            desc: "Sole proprietorship, Partnership, Company.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit II: Business Organizations",
        chapters: [
          {
            id: "bsm11_2_1",
            title: "Public, Private & Global Enterprises",
            desc: "Departmental undertakings, MNCs.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit III: Operations",
        chapters: [
          {
            id: "bsm11_3_1",
            title: "Business Services",
            desc: "Banking, Insurance, Communication.",
            videoUrl: "",
          },
          {
            id: "bsm11_3_2",
            title: "Internal Trade",
            desc: "Wholesale and Retail trade.",
            videoUrl: "",
          },
        ],
      },
    ],
    12: [
      {
        unit: "Unit I: Principles of Management",
        chapters: [
          {
            id: "bsm12_1_1",
            title: "Nature and Significance",
            desc: "Management as an art, science and profession.",
            videoUrl: "",
          },
          {
            id: "bsm12_1_2",
            title: "Principles of Management",
            desc: "Fayol and Taylor's principles.",
            videoUrl: "",
          },
          {
            id: "bsm12_1_3",
            title: "Business Environment",
            desc: "Economic, Social, Legal environment.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit II: Management Functions",
        chapters: [
          {
            id: "bsm12_2_1",
            title: "Planning",
            desc: "Importance, limitations, and process.",
            videoUrl: "",
          },
          {
            id: "bsm12_2_2",
            title: "Organising",
            desc: "Structure, delegation, and decentralization.",
            videoUrl: "",
          },
          {
            id: "bsm12_2_3",
            title: "Staffing & Directing",
            desc: "Recruitment, selection, motivation, leadership.",
            videoUrl: "",
          },
          {
            id: "bsm12_2_4",
            title: "Controlling",
            desc: "Relationship between planning and controlling.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit III: Business Finance & Marketing",
        chapters: [
          {
            id: "bsm12_3_1",
            title: "Financial Management",
            desc: "Capital structure, fixed and working capital.",
            videoUrl: "",
          },
          {
            id: "bsm12_3_2",
            title: "Marketing Management",
            desc: "Marketing mix (4Ps).",
            videoUrl: "",
          },
          {
            id: "bsm12_3_3",
            title: "Consumer Protection",
            desc: "Rights and responsibilities of consumers.",
            videoUrl: "",
          },
        ],
      },
    ],
  },
  BMS: {
    11: [
      {
        unit: "Unit I: Mathematics",
        chapters: [
          {
            id: "bms11_1_1",
            title: "Sets & Relations",
            desc: "Venn diagrams, basic set operations.",
            videoUrl: "",
          },
          {
            id: "bms11_1_2",
            title: "Determinants & Matrices",
            desc: "Cramer's rule and matrix algebra.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit II: Statistics",
        chapters: [
          {
            id: "bms11_2_1",
            title: "Measures of Central Tendency",
            desc: "Mean, Median, Mode.",
            videoUrl: "",
          },
          {
            id: "bms11_2_2",
            title: "Measures of Dispersion",
            desc: "Standard deviation, Variance.",
            videoUrl: "",
          },
        ],
      },
    ],
    12: [
      {
        unit: "Unit I: Calculus & LP",
        chapters: [
          {
            id: "bms12_1_1",
            title: "Differentiation & Integration",
            desc: "Basic commercial applications of calculus.",
            videoUrl: "",
          },
          {
            id: "bms12_1_2",
            title: "Linear Programming",
            desc: "Graphical solutions.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit II: Advanced Statistics",
        chapters: [
          {
            id: "bms12_2_1",
            title: "Probability",
            desc: "Mathematical expectation.",
            videoUrl: "",
          },
          {
            id: "bms12_2_2",
            title: "Time Series Analysis",
            desc: "Components and moving averages.",
            videoUrl: "",
          },
        ],
      },
    ],
  },
  Economics: {
    11: [
      {
        unit: "Unit I: Statistics for Economics",
        chapters: [
          {
            id: "eco11_1_1",
            title: "Collection of Data",
            desc: "Primary and secondary data.",
            videoUrl: "",
          },
          {
            id: "eco11_1_2",
            title: "Organization & Presentation",
            desc: "Graphs and diagrams.",
            videoUrl: "",
          },
          {
            id: "eco11_1_3",
            title: "Statistical Tools",
            desc: "Correlation and Index Numbers.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit II: Indian Economic Development",
        chapters: [
          {
            id: "eco11_2_1",
            title: "Development Policies",
            desc: "Economic planning and reforms since 1991.",
            videoUrl: "",
          },
          {
            id: "eco11_2_2",
            title: "Current Challenges",
            desc: "Poverty, Human Capital, Employment.",
            videoUrl: "",
          },
          {
            id: "eco11_2_3",
            title: "Development Experience",
            desc: "Comparison with neighbours.",
            videoUrl: "",
          },
        ],
      },
    ],
    12: [
      {
        unit: "Unit I: Introductory Microeconomics",
        chapters: [
          {
            id: "eco12_1_1",
            title: "Consumer's Behavior",
            desc: "Utility, Indifference curve, Demand.",
            videoUrl: "",
          },
          {
            id: "eco12_1_2",
            title: "Producer Behavior",
            desc: "Production function, Cost, Revenue, Supply.",
            videoUrl: "",
          },
          {
            id: "eco12_1_3",
            title: "Forms of Market",
            desc: "Perfect competition and price determination.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit II: Introductory Macroeconomics",
        chapters: [
          {
            id: "eco12_2_1",
            title: "National Income",
            desc: "Circular flow, GDP, GNP.",
            videoUrl: "",
          },
          {
            id: "eco12_2_2",
            title: "Money and Banking",
            desc: "Functions of RBI and commercial banks.",
            videoUrl: "",
          },
          {
            id: "eco12_2_3",
            title: "Government Budget",
            desc: "Revenue and Capital receipts.",
            videoUrl: "",
          },
          {
            id: "eco12_2_4",
            title: "Balance of Payments",
            desc: "Forex rates, BoP account.",
            videoUrl: "",
          },
        ],
      },
    ],
  },
  History: {
    11: [
      {
        unit: "Unit I: Early Societies",
        chapters: [
          {
            id: "his11_1_1",
            title: "From the Beginning of Time",
            desc: "Early human evolution.",
            videoUrl: "",
          },
          {
            id: "his11_1_2",
            title: "Early Cities",
            desc: "Mesopotamia and urbanization.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit II: Empires",
        chapters: [
          {
            id: "his11_2_1",
            title: "An Empire Across Three Continents",
            desc: "The Roman Empire.",
            videoUrl: "",
          },
          {
            id: "his11_2_2",
            title: "Central Islamic Lands",
            desc: "Rise and expansion of Islam.",
            videoUrl: "",
          },
          {
            id: "his11_2_3",
            title: "Nomadic Empires",
            desc: "The Mongols.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit III: Changing Traditions",
        chapters: [
          {
            id: "his11_3_1",
            title: "Three Orders",
            desc: "Feudalism in Europe.",
            videoUrl: "",
          },
          {
            id: "his11_3_2",
            title: "Changing Cultural Traditions",
            desc: "Renaissance and Reformation.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit IV: Paths to Modernization",
        chapters: [
          {
            id: "his11_4_1",
            title: "Industrial Revolution",
            desc: "Britain's transformation.",
            videoUrl: "",
          },
          {
            id: "his11_4_2",
            title: "Modernization in Asia",
            desc: "Japan and China.",
            videoUrl: "",
          },
        ],
      },
    ],
    12: [
      {
        unit: "Unit I: Ancient India",
        chapters: [
          {
            id: "his12_1_1",
            title: "Bricks, Beads and Bones",
            desc: "The Harappan Civilization.",
            videoUrl: "",
          },
          {
            id: "his12_1_2",
            title: "Kings, Farmers and Towns",
            desc: "Early States and Economies (Mauryan).",
            videoUrl: "",
          },
          {
            id: "his12_1_3",
            title: "Kinship, Caste and Class",
            desc: "Early Societies (Mahabharata).",
            videoUrl: "",
          },
          {
            id: "his12_1_4",
            title: "Thinkers, Beliefs and Buildings",
            desc: "Cultural Developments (Buddhism, Jainism).",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit II: Medieval India",
        chapters: [
          {
            id: "his12_2_1",
            title: "Through the Eyes of Travellers",
            desc: "Accounts of Al-Biruni, Ibn Battuta.",
            videoUrl: "",
          },
          {
            id: "his12_2_2",
            title: "Bhakti-Sufi Traditions",
            desc: "Changes in Religious Beliefs.",
            videoUrl: "",
          },
          {
            id: "his12_2_3",
            title: "An Imperial Capital",
            desc: "Vijayanagara Empire.",
            videoUrl: "",
          },
          {
            id: "his12_2_4",
            title: "Agrarian Society and Mughal Empire",
            desc: "Ain-i-Akbari insights.",
            videoUrl: "",
          },
          {
            id: "his12_2_5",
            title: "Kings and Chronicles",
            desc: "Mughal Courts.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit III: Modern India",
        chapters: [
          {
            id: "his12_3_1",
            title: "Colonialism and the Countryside",
            desc: "Official Archives and Revenue.",
            videoUrl: "",
          },
          {
            id: "his12_3_2",
            title: "Rebels and the Raj",
            desc: "The Revolt of 1857.",
            videoUrl: "",
          },
          {
            id: "his12_3_3",
            title: "Mahatma Gandhi and National Movement",
            desc: "Civil Disobedience and beyond.",
            videoUrl: "",
          },
          {
            id: "his12_3_4",
            title: "Understanding Partition",
            desc: "Politics, Memories, Experiences.",
            videoUrl: "",
          },
          {
            id: "his12_3_5",
            title: "Framing the Constitution",
            desc: "The beginning of a new era.",
            videoUrl: "",
          },
        ],
      },
    ],
  },
  "Political Science": {
    11: [
      {
        unit: "Unit I: Political Theory",
        chapters: [
          {
            id: "pol11_1_1",
            title: "Introduction to Political Theory",
            desc: "Concepts and significance.",
            videoUrl: "",
          },
          {
            id: "pol11_1_2",
            title: "Freedom and Equality",
            desc: "Liberty, Equality, Justice.",
            videoUrl: "",
          },
          {
            id: "pol11_1_3",
            title: "Rights and Citizenship",
            desc: "Rights, Secularism, Nationalism.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit II: Indian Constitution at Work",
        chapters: [
          {
            id: "pol11_2_1",
            title: "Constitution",
            desc: "Why and How? Rights in the Constitution.",
            videoUrl: "",
          },
          {
            id: "pol11_2_2",
            title: "Elections & Representation",
            desc: "Electoral systems.",
            videoUrl: "",
          },
          {
            id: "pol11_2_3",
            title: "Executive, Legislature, Judiciary",
            desc: "Structure of Indian Democracy.",
            videoUrl: "",
          },
          {
            id: "pol11_2_4",
            title: "Federalism & Local Governments",
            desc: "Decentralization.",
            videoUrl: "",
          },
        ],
      },
    ],
    12: [
      {
        unit: "Unit I: Contemporary World Politics",
        chapters: [
          {
            id: "pol12_1_1",
            title: "Cold War Era & Nonaligned Movement",
            desc: "Post-WW2 global dynamics.",
            videoUrl: "",
          },
          {
            id: "pol12_1_2",
            title: "The End of Bipolarity",
            desc: "Collapse of Soviet Union.",
            videoUrl: "",
          },
          {
            id: "pol12_1_3",
            title: "US Hegemony & Alternative Centers",
            desc: "EU, ASEAN, and China.",
            videoUrl: "",
          },
          {
            id: "pol12_1_4",
            title: "International Organizations",
            desc: "UN and its agencies.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit II: Politics in India since Independence",
        chapters: [
          {
            id: "pol12_2_1",
            title: "Challenges of Nation Building",
            desc: "Integration of States.",
            videoUrl: "",
          },
          {
            id: "pol12_2_2",
            title: "Era of One-Party Dominance",
            desc: "Congress system.",
            videoUrl: "",
          },
          {
            id: "pol12_2_3",
            title: "Politics of Planned Development",
            desc: "Five Year Plans.",
            videoUrl: "",
          },
          {
            id: "pol12_2_4",
            title: "India's External Relations",
            desc: "Foreign policy and Non-Alignment.",
            videoUrl: "",
          },
          {
            id: "pol12_2_5",
            title: "Recent Developments in Indian Politics",
            desc: "Coalition era.",
            videoUrl: "",
          },
        ],
      },
    ],
  },
  Logic: {
    11: [
      {
        unit: "Unit I: Introduction",
        chapters: [
          {
            id: "log11_1_1",
            title: "Nature of Logic",
            desc: "Definition, Scope and Uses.",
            videoUrl: "",
          },
          {
            id: "log11_1_2",
            title: "Terms and Propositions",
            desc: "Logical form, Distribution of Terms.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit II: Inference",
        chapters: [
          {
            id: "log11_2_1",
            title: "Immediate Inference",
            desc: "Opposition of propositions, Eduction.",
            videoUrl: "",
          },
          {
            id: "log11_2_2",
            title: "Syllogism",
            desc: "Categorical, Hypothetical and Disjunctive.",
            videoUrl: "",
          },
        ],
      },
    ],
    12: [
      {
        unit: "Unit I: Inductive Logic",
        chapters: [
          {
            id: "log12_1_1",
            title: "Nature of Induction",
            desc: "Inductive leap, Postulates of Induction.",
            videoUrl: "",
          },
          {
            id: "log12_1_2",
            title: "Mill's Experimental Methods",
            desc: "Agreement, Difference, Joint Method.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit II: Scientific Method",
        chapters: [
          {
            id: "log12_2_1",
            title: "Hypothesis",
            desc: "Conditions, Proof, and Verification.",
            videoUrl: "",
          },
          {
            id: "log12_2_2",
            title: "Scientific Explanation",
            desc: "Scientific vs Unscientific explanation.",
            videoUrl: "",
          },
          {
            id: "log12_2_3",
            title: "Logical Fallacies",
            desc: "Formal and material fallacies.",
            videoUrl: "",
          },
        ],
      },
    ],
  },
  Sociology: {
    11: [
      {
        unit: "Unit I: Introducing Sociology",
        chapters: [
          {
            id: "soc11_1_1",
            title: "Sociology and Society",
            desc: "Relationship with other social sciences.",
            videoUrl: "",
          },
          {
            id: "soc11_1_2",
            title: "Terms, Concepts and Use",
            desc: "Social groups, Status and Role.",
            videoUrl: "",
          },
          {
            id: "soc11_1_3",
            title: "Understanding Social Institutions",
            desc: "Family, Marriage, Religion, Education.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit II: Understanding Society",
        chapters: [
          {
            id: "soc11_2_1",
            title: "Culture and Socialization",
            desc: "Dimensions of culture.",
            videoUrl: "",
          },
          {
            id: "soc11_2_2",
            title: "Doing Sociology",
            desc: "Research Methods.",
            videoUrl: "",
          },
        ],
      },
    ],
    12: [
      {
        unit: "Unit I: Indian Society",
        chapters: [
          {
            id: "soc12_1_1",
            title: "Demographic Structure",
            desc: "Theories, Indian context.",
            videoUrl: "",
          },
          {
            id: "soc12_1_2",
            title: "Social Institutions",
            desc: "Caste, Tribe, and Family.",
            videoUrl: "",
          },
          {
            id: "soc12_1_3",
            title: "Market as a Social Institution",
            desc: "Sociological perspectives on markets.",
            videoUrl: "",
          },
          {
            id: "soc12_1_4",
            title: "Patterns of Social Inequality",
            desc: "Caste, Class, Gender, Disabilities.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit II: Social Change and Development",
        chapters: [
          {
            id: "soc12_2_1",
            title: "Cultural Change",
            desc: "Sanskritization, Modernization, Westernization.",
            videoUrl: "",
          },
          {
            id: "soc12_2_2",
            title: "Change in Rural Society",
            desc: "Agrarian structure, Green Revolution.",
            videoUrl: "",
          },
          {
            id: "soc12_2_3",
            title: "Change in Industrial Society",
            desc: "Industrialization in India.",
            videoUrl: "",
          },
          {
            id: "soc12_2_4",
            title: "Social Movements",
            desc: "Peasant, Workers, Women, Dalit movements.",
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
      exams: "NEET-UG",
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
      exams: "UPSC CSE",
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
  Accountancy: "linear-gradient(135deg, #064e3b, #10b981)",
  BSM: "linear-gradient(135deg, #1e3a8a, #3b82f6)",
  BMS: "linear-gradient(135deg, #4c1d95, #8b5cf6)",
  Economics: "linear-gradient(135deg, #78350f, #f59e0b)",
  History: "linear-gradient(135deg, #713f12, #d97706)",
  "Political Science": "linear-gradient(135deg, #7f1d1d, #ef4444)",
  Logic: "linear-gradient(135deg, #083344, #06b6d4)",
  Sociology: "linear-gradient(135deg, #831843, #ec4899)",
};
const SUBJ_ACCENT = {
  Physics: "#4f8ef7",
  Chemistry: "#9d6fff",
  Mathematics: "#22d3ee",
  Biology: "#34d399",
  IT: "#fb923c",
  English: "#f87171",
  Odia: "#2dd4bf",
  Accountancy: "#10b981",
  BSM: "#3b82f6",
  BMS: "#8b5cf6",
  Economics: "#f59e0b",
  History: "#d97706",
  "Political Science": "#ef4444",
  Logic: "#06b6d4",
  Sociology: "#ec4899",
};
const SUBJ_ICON_KEY = {
  Physics: "atom",
  Chemistry: "flask",
  Mathematics: "sigma",
  Biology: "leaf",
  IT: "computer",
  English: "document",
  Odia: "odia",
  Accountancy: "chart",
  BSM: "briefcase",
  BMS: "sigma",
  Economics: "globe",
  History: "map",
  "Political Science": "scale",
  Logic: "brain",
  Sociology: "users",
};

function subjIcon(subj, size = 20) {
  const key = SUBJ_ICON_KEY[subj] || "book";
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="${size}" height="${size}">${ICONS[key]?.replace(/<svg[^>]*>|<\/svg>/g, "") || ""}</svg>`;
}

// ===== INIT & SESSION LOGIC =====
function init() {
  if (!window.YT) {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    if (firstScriptTag) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      document.head.appendChild(tag);
    }
  }

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
  injectNavbarItems();
  syncAvailableVideos();
  checkNotifications();

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

function injectNavbarItems() {
  const topnavRight = document.querySelector(".topnav-right");
  if (!topnavRight) return;

  const classToggle = topnavRight.querySelector(".class-toggle");
  if (classToggle) classToggle.style.display = "none";

  if (!document.getElementById("nav-settings-btn")) {
    const settingsBtn = document.createElement("button");
    settingsBtn.className = "icon-link-btn";
    settingsBtn.id = "nav-settings-btn";
    settingsBtn.title = "Settings";
    settingsBtn.innerHTML = icon("settings", 18);
    settingsBtn.onclick = () => showSection("settings");
    const userMenu = document.getElementById("userMenuBtn");
    if (userMenu) topnavRight.insertBefore(settingsBtn, userMenu);
    else topnavRight.appendChild(settingsBtn);
  }

  if (!document.getElementById("nav-notif-wrapper")) {
    const notifWrapper = document.createElement("div");
    notifWrapper.id = "nav-notif-wrapper";
    notifWrapper.className = "dropdown";
    notifWrapper.style.display = "flex";
    notifWrapper.style.alignItems = "center";

    notifWrapper.innerHTML = `
      <button class="icon-link-btn" id="nav-notif-btn" title="Notifications" onclick="toggleDropdown('notif-menu')">
        ${icon("bell", 18)}
        <span id="notif-badge" style="position:absolute;top:5px;right:5px;width:8px;height:8px;background:var(--red);border-radius:50%;display:none;box-shadow:0 0 0 2px var(--bg-2);"></span>
      </button>
      <div class="dropdown-menu" id="notif-menu" style="right:0;left:auto;min-width:320px;padding:16px;top:calc(100% + 10px);cursor:default;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
          <h4 style="font-size:15px;font-weight:800;color:var(--text-1);margin:0;">Notifications</h4>
          <span style="font-size:12px;color:var(--blue);cursor:pointer;" onclick="clearNotifications()">Mark all read</span>
        </div>
        <div id="notif-list" style="display:flex;flex-direction:column;gap:10px;max-height:300px;overflow-y:auto;">
          </div>
      </div>
    `;
    const settingsBtn = document.getElementById("nav-settings-btn");
    if (settingsBtn) topnavRight.insertBefore(notifWrapper, settingsBtn);
  }
}

// ===== DYNAMIC NAVIGATION UPDATER =====
function updateDynamicNavigation() {
  const user = DB.get("user");
  const stream = user ? user.stream || "Science" : "Science";
  const subjs = STREAM_SUBJECTS[stream] || STREAM_SUBJECTS["Science"];

  // Update Topnav Subjects Menu
  const subjMenu = document.getElementById("subjectsMenu");
  if (subjMenu) {
    let html = `<div class="dm-section">Class 11</div>`;
    subjs.forEach(
      (s) => (html += `<a onclick="showSubject('${s}','11')">${s}</a>`),
    );
    html += `<div class="dm-section">Class 12</div>`;
    subjs.forEach(
      (s) => (html += `<a onclick="showSubject('${s}','12')">${s}</a>`),
    );
    subjMenu.innerHTML = html;
  }

  // Update Bottom Sheet Menu for Mobile
  const subjSheet = document.getElementById("subjectsSheet");
  if (subjSheet) {
    const nav = subjSheet.querySelector(".mm-nav");
    if (nav) {
      let html = `<div class="mm-section">Class 12 Subjects</div>`;
      subjs.forEach(
        (s) =>
          (html += `<a onclick="showSubject('${s}','12');closeMobileOverlays()">${s}</a>`),
      );
      html += `<div class="mm-section">Class 11 Subjects</div>`;
      subjs.forEach(
        (s) =>
          (html += `<a onclick="showSubject('${s}','11');closeMobileOverlays()">${s}</a>`),
      );
      nav.innerHTML = html;
    }
  }

  // Update Footer Subject Lists
  document.querySelectorAll(".footer-subjects, .af-subjects").forEach((el) => {
    el.innerHTML = subjs.map((s) => `<span>${s}</span>`).join("");
  });
}

function syncAvailableVideos() {
  let currentAvailable = [];
  for (const subj in SYLLABUS) {
    for (const cls in SYLLABUS[subj]) {
      for (const unit of SYLLABUS[subj][cls]) {
        for (const ch of unit.chapters) {
          if (ch.videoUrl && ch.videoUrl.trim() !== "") {
            currentAvailable.push(ch.id);
          }
        }
      }
    }
  }

  const knownVideos = DB.get("knownVideos");
  let unreadNotifs = DB.get("unreadNotifs") || [];

  if (!knownVideos) {
    DB.set("knownVideos", currentAvailable);
    DB.set("unreadNotifs", []);
    return;
  }

  const newVideos = currentAvailable.filter((id) => !knownVideos.includes(id));
  if (newVideos.length > 0) {
    newVideos.forEach((id) => {
      if (!unreadNotifs.includes(id)) unreadNotifs.push(id);
    });
    DB.set("unreadNotifs", unreadNotifs);
    DB.set("knownVideos", currentAvailable);
  }
}

function checkNotifications() {
  const unreadNotifs = DB.get("unreadNotifs") || [];
  const readHistory = DB.get("readNotifHistory") || [];

  const notifList = document.getElementById("notif-list");
  const badge = document.getElementById("notif-badge");
  if (!notifList || !badge) return;

  if (unreadNotifs.length > 0) {
    badge.style.display = "block";
    if (!sessionStorage.getItem("notified_session")) {
      showToast(`${unreadNotifs.length} new video(s) unlocked!`, "success");
      sessionStorage.setItem("notified_session", "true");
    }
  } else {
    badge.style.display = "none";
  }

  const allToDisplay = [...unreadNotifs, ...readHistory].slice(0, 6);

  if (allToDisplay.length > 0) {
    let html = "";
    allToDisplay.forEach((id) => {
      const info = findVideoById(id);
      if (info) {
        const isUnread = unreadNotifs.includes(id);
        const bg = isUnread ? "var(--bg-3)" : "var(--bg-2)";
        const borderCol = isUnread ? "var(--blue)" : "var(--border-md)";
        const dot = isUnread
          ? `<span style="width:8px;height:8px;background:var(--blue);border-radius:50%;display:inline-block;margin-left:auto;"></span>`
          : "";

        html += `
          <div style="padding:12px;background:${bg};border-radius:10px;font-size:13px;border-left:3px solid ${borderCol};cursor:pointer;transition:all 0.2s;display:flex;flex-direction:column;margin-bottom:8px;" 
               onclick="toggleDropdown('notif-menu');playVideo('${id}','${info.subj}')" 
               onmouseover="this.style.background='var(--bg-4)'" 
               onmouseout="this.style.background='${bg}'">
            <div style="color:var(--text-1);font-weight:700;margin-bottom:4px;display:flex;align-items:center;gap:6px;">
              ${icon("video", 14)} New Content Unlocked! ${dot}
            </div>
            <div style="color:var(--text-2);line-height:1.4;">The video for <b style="color:var(--text-1)">${info.ch.title}</b> is now available!</div>
            <div style="color:var(--text-3);font-size:11px;margin-top:6px;font-weight:600;">${info.subj} &middot; Class ${info.cls}</div>
          </div>
        `;
      }
    });
    notifList.innerHTML = html;
  } else {
    badge.style.display = "none";
    notifList.innerHTML = `<div style="color:var(--text-3);font-size:13px;text-align:center;padding:20px 0;">No new updates yet. Check back later!</div>`;
  }
}

function clearNotifications() {
  let unreadNotifs = DB.get("unreadNotifs") || [];
  let readHistory = DB.get("readNotifHistory") || [];

  readHistory = [...unreadNotifs, ...readHistory].slice(0, 15);
  DB.set("readNotifHistory", readHistory);
  DB.set("unreadNotifs", []);

  document.getElementById("notif-badge").style.display = "none";
  checkNotifications();
  showToast("All caught up!", "info");
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

  updateDynamicNavigation(); // Updates all subject dropdowns & footers

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

  const user = DB.get("user");
  const stream = user ? user.stream || "Science" : "Science";
  const activeStreamSubjects = STREAM_SUBJECTS[stream];

  if (
    activeStreamSubjects &&
    activeStreamSubjects.includes(STATE.currentSubject)
  ) {
    showSubject(STATE.currentSubject, cls);
  } else {
    showSection("dashboard");
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

/* ===== NEW BOTTOM SHEET LOGIC ===== */
function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  const subjectsSheet = document.getElementById("subjectsSheet");
  const overlay = document.getElementById("mobileMenuOverlay");

  if (subjectsSheet && !subjectsSheet.classList.contains("hidden")) {
    subjectsSheet.classList.add("hidden");
  }

  const isOpen = !menu.classList.contains("hidden");
  if (isOpen) {
    closeMobileOverlays();
  } else {
    menu.classList.remove("hidden");
    overlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function toggleSubjectsSheet() {
  const sheet = document.getElementById("subjectsSheet");
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("mobileMenuOverlay");

  if (menu && !menu.classList.contains("hidden")) {
    menu.classList.add("hidden");
  }

  const isOpen = !sheet.classList.contains("hidden");
  if (isOpen) {
    closeMobileOverlays();
  } else {
    sheet.classList.remove("hidden");
    overlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function closeMobileOverlays() {
  const menu = document.getElementById("mobileMenu");
  const subjectsSheet = document.getElementById("subjectsSheet");
  const overlay = document.getElementById("mobileMenuOverlay");

  if (menu) menu.classList.add("hidden");
  if (subjectsSheet) subjectsSheet.classList.add("hidden");
  if (overlay) overlay.classList.add("hidden");

  document.body.style.overflow = "";
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
  const settings = Object.assign(
    { showProgress: true },
    DB.get("settings") || {},
  );

  const hour = new Date().getHours();
  const greet =
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  // DYNAMIC SUBJECTS FETCH
  const stream = user.stream || "Science";
  const subjects = STREAM_SUBJECTS[stream] || STREAM_SUBJECTS["Science"];

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
      <h3>Class ${cls} — ${user.stream} Subjects</h3>
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
          ${
            settings.showProgress
              ? `
          <div class="subj-prog-wrap">
            <div class="subj-prog-bar"><div class="spb-fill" style="width:${pct}%"></div></div>
            <span class="subj-pct">${pct}%</span>
          </div>`
              : `<div style="height:24px"></div>`
          }
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

// ===== VIDEO CARD & URL PARSING =====
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
    <div class="subj-hero" style="background:${SUBJ_COLORS[subj] || SUBJ_COLORS["Physics"]}">
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
      "Complete CHSE Physics — Mechanics, Thermodynamics, Waves, Optics, Modern Physics.",
    Chemistry:
      "Full CHSE Chemistry — Physical, Organic and Inorganic Chemistry.",
    Mathematics:
      "CHSE Mathematics — Algebra, Calculus, Coordinate Geometry, Vectors and Probability.",
    Biology:
      "Complete CHSE Biology — Cell Biology, Genetics, Ecology and Human Physiology.",
    IT: "CHSE Information Technology — Python Programming, DBMS, Web Technologies and Emerging Tech.",
    English:
      "CHSE English — Flamingo, Hornbill, Vistas, Snapshots with Writing Skills and Grammar.",
    Odia: "CHSE MIL Odia — ଗଦ୍ୟ, ପଦ୍ୟ, ଗଳ୍ପ, ଏକାଙ୍କ ଓ ବ୍ୟାକରଣ। ଉଭୟ ପ୍ରଥମ ଓ ଦ୍ୱିତୀୟ ବର୍ଷ।",
    Accountancy:
      "Complete CHSE Accountancy — Recording of Transactions, Partnership, Company Accounts and Financial Statements.",
    BSM: "CHSE Business Studies & Management — Forms of Organization, Principles of Management and Marketing.",
    BMS: "CHSE Business Mathematics & Statistics — Calculus, Probability, Determinants and Time Series.",
    Economics:
      "CHSE Economics — Microeconomics, Macroeconomics, Indian Economy and Statistical Tools.",
    History:
      "CHSE History — Ancient, Medieval and Modern India, early societies and global empires.",
    "Political Science":
      "CHSE Political Science — Political Theory, Indian Constitution, and Contemporary World Politics.",
    Logic:
      "CHSE Logic — Deductive and Inductive Logic, Syllogisms, and Scientific Methods.",
    Sociology:
      "CHSE Sociology — Understanding Society, Indian Institutions, Social Change and Development.",
  };
  return d[subj] || `Complete CHSE Syllabus for ${subj}.`;
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

  const settings = Object.assign({ compact: false }, DB.get("settings") || {});
  const isCompact = settings.compact;

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
      <div class="videos-grid" style="${isCompact ? "grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px;" : ""}">
        ${unit.chapters
          .map((ch) => {
            const isDone = completed[subj + "_" + cls + "_" + ch.id];
            const ytId = getYTId(ch.videoUrl);
            return `<div class="video-item" onclick="playVideo('${ch.id}','${subj}')" style="${isCompact ? "padding: 12px; align-items: center;" : ""}">
            <div class="vi-thumb" style="${isCompact ? "width: 80px; height: 50px;" : ""}">
              ${
                ytId
                  ? `<img src="https://img.youtube.com/vi/${ytId}/mqdefault.jpg" style="width:100%;height:100%;object-fit:cover;border-radius:7px" onerror="this.parentElement.style.background='var(--bg-4)'" alt="thumb"><div class="vi-thumb-overlay">${icon("play", 14)}</div>`
                  : `<div style="width:100%;height:100%;background:linear-gradient(135deg, #1f2937, #111827);display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:7px;color:var(--orange);border:1px solid rgba(255,255,255,0.05);">${icon("clock", 16)}<span style="font-size:8px;font-weight:800;margin-top:4px;text-transform:uppercase;letter-spacing:0.5px">Soon</span></div>`
              }
            </div>
            <div class="vi-info">
              <h4 style="${isCompact ? "font-size: 14px; margin-bottom: 2px;" : ""}">${ch.title}</h4>
              ${isCompact ? "" : `<p>${ch.desc.substring(0, 70)}...</p>`}
            </div>
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
        { l: "Subjects", v: "15+" },
        { l: "Streams", v: "3" },
        { l: "Classes", v: "11 & 12" },
      ],
      subjects: ["Physics", "Accountancy", "History", "IT", "English", "Odia"], // Just showing a snapshot here for visual appeal
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
          ) => `<div class="subj-card" onclick="showSubject('${s}','${STATE.currentClass}')" style="background:${SUBJ_COLORS[s] || SUBJ_COLORS["Physics"]}">
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
          if (screen.orientation && screen.orientation.lock)
            screen.orientation.lock("landscape").catch(() => {});
        })
        .catch(() => {
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

  if (screen.orientation && screen.orientation.lock)
    screen.orientation.lock("landscape").catch(() => {});

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
  if (screen.orientation && screen.orientation.unlock)
    screen.orientation.unlock();
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

// ===== YOUTUBE AUTOPLAY & API FIX =====
let ytPlayer;

function initYouTubePlayer() {
  if (!document.getElementById("ytIframe")) return;
  if (window.YT && YT.Player) {
    ytPlayer = new YT.Player("ytIframe", {
      events: {
        onStateChange: function (event) {
          if (event.data === YT.PlayerState.ENDED) {
            if (
              STATE.currentVideo &&
              STATE.currentSubject &&
              STATE.currentClass
            ) {
              const key =
                STATE.currentSubject +
                "_" +
                STATE.currentClass +
                "_" +
                STATE.currentVideo.id;
              const topics = DB.get("completedTopics") || {};
              if (!topics[key]) {
                topics[key] = new Date().toISOString();
                DB.set("completedTopics", topics);
                const btn = document.getElementById("markDoneBtn");
                if (btn) {
                  btn.classList.add("done");
                  btn.innerHTML = `${icon("check", 14)} Completed`;
                }
                showToast("Chapter auto-marked as complete!", "success");
              }
            }
            const settings = DB.get("settings") || {};
            if (settings.autoplay)
              setTimeout(() => {
                navigateVideo(1, STATE.currentSubject, STATE.currentClass);
              }, 1500);
          }
        },
      },
    });
  } else {
    setTimeout(initYouTubePlayer, 300);
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
    initYouTubePlayer();
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
              ? `<iframe id="ytIframe" src="https://www.youtube.com/embed/${ytId}?rel=0&modestbranding=1&enablejsapi=1&autoplay=1" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="${ch.title}"></iframe>`
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
  const s = subj || STATE.currentSubject;
  const c = cls || STATE.currentClass;
  const allChs = [];
  const units = SYLLABUS[s] && SYLLABUS[s][c] ? SYLLABUS[s][c] : [];
  units.forEach((u) => u.chapters.forEach((ch) => allChs.push(ch)));
  const idx = allChs.findIndex((ch) => ch.id === STATE.currentVideo.id);
  const next = allChs[idx + dir];
  if (next) playVideo(next.id, s);
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

// ===================================================================
// COMPLETE renderCareer() FUNCTION — FULLY RESPONSIVE DROP-IN
// Replaces the entire renderCareer() function in your script.js
// Do NOT change any other functions, IDs, class names or logic.
// ===================================================================

function renderCareer() {
  const user = DB.get("user");
  const defaultStream = user ? user.stream || "Science" : "Science";
  const activeTab = STATE.currentCareerStream || defaultStream;

  return `
<style>
/* ── Reset & Base ─────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; }

/* ── Wrapper ──────────────────────────────────────────────────── */
.cg-wrap { padding: 0 0 60px; width: 100%; }

/* ── Hero ─────────────────────────────────────────────────────── */
.cg-hero { margin-bottom: 24px; }
.cg-hero h2 {
  font-size: clamp(18px, 4vw, 26px);
  font-weight: 800;
  margin-bottom: 6px;
  line-height: 1.3;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
}
.cg-hero h2 svg { flex-shrink: 0; }
.cg-hero p { color: var(--text-2); font-size: clamp(13px, 2.5vw, 15px); line-height: 1.7; }

/* ── Stream Tabs ──────────────────────────────────────────────── */
.cg-stream-tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}
.cg-stab {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 16px;
  border-radius: 100px;
  border: 1px solid var(--border-md);
  background: var(--bg-1);
  cursor: pointer;
  font-size: clamp(12px, 2.5vw, 14px);
  font-weight: 700;
  color: var(--text-2);
  transition: all 0.2s;
  font-family: var(--font);
  white-space: nowrap;
}
.cg-stab:hover { background: var(--bg-2); color: var(--text-1); border-color: var(--border-hover); }
.cg-stab.active {
  background: linear-gradient(135deg, var(--blue), var(--purple));
  color: #fff;
  border-color: transparent;
  box-shadow: 0 4px 15px rgba(59,130,246,0.3);
}
.cg-stab svg { flex-shrink: 0; }

/* ── Panels ───────────────────────────────────────────────────── */
.cg-panel { display: none; animation: cgFadeUp 0.3s ease; }
.cg-panel.active { display: block; }
@keyframes cgFadeUp {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Stream Intro ─────────────────────────────────────────────── */
.cg-stream-intro {
  padding: 20px;
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-md);
  background: var(--bg-1);
  margin-bottom: 20px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.cg-intro-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cg-intro-text h3 { font-size: clamp(15px, 3vw, 18px); font-weight: 800; margin-bottom: 5px; }
.cg-intro-text p  { font-size: clamp(12px, 2.5vw, 14px); color: var(--text-2); line-height: 1.7; }

/* ── Quick Stats ──────────────────────────────────────────────── */
.cg-quickstats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 24px;
}
.cg-qs {
  padding: 14px 10px;
  background: var(--bg-1);
  border: 1px solid var(--border-md);
  border-radius: var(--radius-lg);
  text-align: center;
}
.cg-qs strong {
  display: block;
  font-size: clamp(16px, 4vw, 22px);
  font-weight: 800;
  margin-bottom: 3px;
  line-height: 1.2;
}
.cg-qs span {
  font-size: clamp(10px, 2vw, 12px);
  color: var(--text-3);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .5px;
}

/* ── Category Labels ──────────────────────────────────────────── */
.cg-cat-label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 800;
  color: var(--text-3);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 24px 0 12px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border-md);
}
.cg-cat-label svg { flex-shrink: 0; }

/* ── Cards Grid ───────────────────────────────────────────────── */
.cg-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 330px), 1fr));
  gap: 12px;
  margin-bottom: 8px;
}

/* ── Individual Card ──────────────────────────────────────────── */
.cgc {
  background: var(--bg-1);
  border: 1px solid var(--border-md);
  border-radius: var(--radius-xl);
  padding: 20px;
  cursor: default;
  transition: border-color 0.2s, box-shadow 0.2s;
  position: relative;
  overflow: hidden;
  /* Ensure no horizontal overflow on mobile */
  min-width: 0;
}
.cgc:hover { border-color: var(--border-hover); box-shadow: var(--shadow); }
.cgc.cgc-open { border-color: var(--blue-border); }

.cgc-head {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
}
.cgc-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cgc-title {
  font-size: clamp(14px, 3vw, 16px);
  font-weight: 800;
  margin-bottom: 3px;
  line-height: 1.3;
}
.cgc-tag {
  font-size: clamp(11px, 2vw, 12px);
  color: var(--text-3);
  font-weight: 600;
  /* Allow tag text to wrap on very small screens */
  word-break: break-word;
}

.cgc-desc {
  font-size: clamp(13px, 2.5vw, 14px);
  color: var(--text-2);
  line-height: 1.7;
  margin-bottom: 14px;
}

/* ── Pills ────────────────────────────────────────────────────── */
.cgc-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
}
.cgc-pill {
  font-size: clamp(11px, 2vw, 12px);
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 100px;
  white-space: nowrap;
}
.cgc-pill-salary { background: var(--green-dim); color: var(--green); border: 1px solid rgba(16,185,129,0.25); }
.cgc-pill-exam   { background: var(--blue-dim);  color: var(--blue);  border: 1px solid var(--blue-border); }
.cgc-pill-dur    { background: var(--orange-dim); color: var(--orange);border: 1px solid rgba(249,115,22,0.25); }

/* ── Toggle Button ────────────────────────────────────────────── */
.cgc-toggle-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 700;
  color: var(--blue);
  background: var(--blue-dim);
  border: 1px solid var(--blue-border);
  padding: 7px 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: var(--font);
  /* Full width on very small screens */
  max-width: 100%;
}
.cgc-toggle-btn:hover { background: rgba(59,130,246,0.2); }
.cgc-toggle-btn svg { transition: transform 0.2s; flex-shrink: 0; }
.cgc-toggle-btn.open svg { transform: rotate(180deg); }

/* ── Expanded Details ─────────────────────────────────────────── */
.cgc-details {
  display: none;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border-md);
  animation: cgFadeUp 0.2s ease;
  /* Prevent overflow */
  overflow: hidden;
  min-width: 0;
}
.cgc-details.visible { display: block; }

.cgc-drow {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
  align-items: flex-start;
  /* Allow wrap on tiny screens */
  flex-wrap: wrap;
  min-width: 0;
}
.cgc-drow svg { flex-shrink: 0; color: var(--text-3); margin-top: 2px; }
.cgc-dlabel {
  font-size: 11px;
  font-weight: 800;
  color: var(--text-3);
  /* On very small screens, take full width so val wraps below */
  min-width: 70px;
  flex-shrink: 0;
  padding-top: 1px;
  text-transform: uppercase;
  letter-spacing: .4px;
}
.cgc-dval {
  font-size: clamp(12px, 2.5vw, 13px);
  color: var(--text-2);
  line-height: 1.6;
  /* Break long words (URLs, compound words) */
  word-break: break-word;
  overflow-wrap: break-word;
  min-width: 0;
  flex: 1;
}
.cgc-dval strong { color: var(--text-1); font-weight: 700; }

/* ── Roadmap ──────────────────────────────────────────────────── */
.cgc-roadmap {
  margin-top: 14px;
  padding: 12px 14px;
  background: var(--bg-2);
  border-radius: var(--radius-lg);
  /* Prevent overflow */
  overflow: hidden;
}
.cgc-roadmap-label {
  font-size: 11px;
  font-weight: 800;
  color: var(--text-3);
  text-transform: uppercase;
  letter-spacing: .5px;
  margin-bottom: 10px;
}
.cgc-roadmap-steps {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
}
.cgc-rs {
  font-size: clamp(11px, 2vw, 12px);
  font-weight: 700;
  color: var(--text-1);
  background: var(--bg-1);
  border: 1px solid var(--border-md);
  padding: 4px 10px;
  border-radius: 100px;
  white-space: nowrap;
  /* Allow shrinking on tiny screens */
  max-width: 100%;
}
.cgc-rarrow { font-size: 13px; color: var(--text-3); }

/* ── Skills ───────────────────────────────────────────────────── */
.cgc-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
}
.cgc-skill {
  font-size: clamp(11px, 2vw, 12px);
  background: var(--bg-2);
  border: 1px solid var(--border-md);
  border-radius: 6px;
  padding: 3px 10px;
  color: var(--text-2);
  font-weight: 600;
  white-space: nowrap;
}

/* ── Alert Banner ─────────────────────────────────────────────── */
.cg-alert {
  margin-top: 24px;
  padding: 18px 20px;
  background: linear-gradient(135deg, rgba(59,130,246,0.06), rgba(139,92,246,0.06));
  border: 1px solid var(--blue-border);
  border-radius: var(--radius-xl);
  border-left: 4px solid var(--blue);
}
.cg-alert p {
  font-size: clamp(12px, 2.5vw, 14px);
  color: var(--text-2);
  line-height: 1.8;
}
.cg-alert strong { color: var(--text-1); }

/* ── Mobile-specific tweaks (≤ 480px) ────────────────────────── */
@media (max-width: 480px) {
  .cg-wrap { padding: 0 0 40px; }

  /* Stack the stream intro vertically on very small screens */
  .cg-stream-intro { flex-direction: column; gap: 12px; padding: 16px; }
  .cg-intro-icon { width: 40px; height: 40px; }

  /* Stream tabs: allow scrolling horizontally rather than ugly wrap */
  .cg-stream-tabs {
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    padding-bottom: 4px;
    /* Negative margin trick to let it bleed slightly */
    margin-left: -2px;
    margin-right: -2px;
    padding-left: 2px;
    padding-right: 2px;
  }
  .cg-stream-tabs::-webkit-scrollbar { display: none; }

  /* Cards always full-width */
  .cg-cards-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  /* Reduce card padding */
  .cgc { padding: 16px; }

  /* Detail rows: stack label above value */
  .cgc-drow { flex-direction: column; gap: 2px; }
  .cgc-dlabel { min-width: unset; }
  .cgc-drow svg { display: none; } /* hide tiny icon on very small */

  /* Toggle btn full-width */
  .cgc-toggle-btn { width: 100%; justify-content: center; }

  /* Quick stats stay 3-col but smaller */
  .cg-quickstats { gap: 8px; }
  .cg-qs { padding: 12px 6px; }
}

/* ── Small tablets (481–767px) ────────────────────────────────── */
@media (min-width: 481px) and (max-width: 767px) {
  .cg-cards-grid {
    grid-template-columns: 1fr;
  }

  .cg-stream-tabs {
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    padding-bottom: 4px;
  }
  .cg-stream-tabs::-webkit-scrollbar { display: none; }
}

/* ── Tablet landscape (768–1023px) ───────────────────────────── */
@media (min-width: 768px) and (max-width: 1023px) {
  .cg-cards-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}

/* ── Desktop (≥ 1024px) ───────────────────────────────────────── */
@media (min-width: 1024px) {
  .cg-cards-grid {
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  }
}
</style>

<div class="cg-wrap">
  <div class="cg-hero">
    <h2>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="26" height="26" style="vertical-align:-4px;color:var(--blue)">
        <path d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c-.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"/>
      </svg>
      Complete Career Guide — After 12th CHSE
    </h2>
    <p>Every career path available to you — Engineering, Medicine, Civil Services, Army, Navy, Air Force, Law, MBA, Study Abroad and more. Pick your stream and explore every door that opens.</p>
  </div>

  <div class="cg-stream-tabs">
    ${[
      { id: "Science", label: "Science", svgKey: "atom" },
      { id: "Commerce", label: "Commerce", svgKey: "chart" },
      { id: "Arts", label: "Arts & Humanities", svgKey: "book" },
      { id: "Defence", label: "Defence & Govt", svgKey: "shield" },
      { id: "Abroad", label: "Study Abroad", svgKey: "globe" },
    ]
      .map(
        (t) => `
      <button class="cg-stab ${activeTab === t.id ? "active" : ""}"
        onclick="cgSwitchStream('${t.id}',this)">
        ${cgSvg(t.svgKey, 16)} ${t.label}
      </button>`,
      )
      .join("")}
  </div>

  <!-- ========== SCIENCE ========== -->
  <div id="cgp-Science" class="cg-panel ${activeTab === "Science" ? "active" : ""}">
    ${cgIntro(
      "Science",
      "#1a3570",
      "#4f8ef7",
      "atom",
      "Science gives you the widest choice.",
      "Engineering, Medicine, Research, Defence, Law, Management and more. PCM unlocks engineering; PCB unlocks medicine; both together open every door on earth.",
    )}
    <div class="cg-quickstats">
      <div class="cg-qs"><strong style="background:linear-gradient(135deg,var(--blue),var(--purple));-webkit-background-clip:text;-webkit-text-fill-color:transparent">50+</strong><span>Career Paths</span></div>
      <div class="cg-qs"><strong style="color:var(--green)">₹4–80L</strong><span>Salary Range</span></div>
      <div class="cg-qs"><strong style="color:var(--orange)">Global</strong><span>Demand</span></div>
    </div>

    ${cgCatLabel("lightning", "Engineering & Technology")}
    <div class="cg-cards-grid">
      ${cgCard(
        "sci-jee",
        "#185FA5",
        "#E6F1FB",
        "cpu",
        "B.Tech / Engineering",
        "JEE Main · JEE Advanced · OJEE",
        "Build bridges, code AI, design chips, or launch satellites. Engineering is India's largest employment sector with global demand in every specialisation.",
        {
          salary: "₹4–60 LPA",
          exam: "JEE Main / JEE Adv",
          duration: "4 Years",
        },
        [
          {
            icon: "school",
            label: "Required",
            val: "PCM in 12th. Minimum 75% for IIT/NIT admission through JoSAA.",
          },
          {
            icon: "cert",
            label: "Exams",
            val: "JEE Main (NIT/IIIT), JEE Advanced (IIT), <strong>OJEE</strong> (Odisha state colleges), BITSAT (BITS Pilani)",
          },
          {
            icon: "briefcase",
            label: "Branches",
            val: "CS/IT, Mechanical, Civil, Electrical, Electronics, Chemical, Aerospace, AI/ML, Biomedical, Robotics",
          },
          {
            icon: "trend",
            label: "Growth",
            val: "IIT CS grads get ₹15L–1Cr packages. Global opportunities in USA, Germany, Canada, Singapore.",
          },
        ],
        [
          "Class 12 PCM",
          "JEE Prep (1–2yr)",
          "B.Tech (4yr)",
          "Job / M.Tech / MS Abroad",
        ],
        [
          "Mathematics",
          "Logical Thinking",
          "Coding",
          "Problem Solving",
          "Physics",
        ],
      )}

      ${cgCard(
        "sci-bsc",
        "#3B6D11",
        "#EAF3DE",
        "flask",
        "B.Sc + Research / IISc / IISER",
        "CUET · IISc BS · IISER Aptitude Test",
        "Pure science — Physics, Chemistry, Math, Biology, Data Science. Leads to research careers, PhD programmes, academia, or top tech and pharma roles.",
        { salary: "₹3–40 LPA", exam: "IISER / CUET", duration: "3–5 Years" },
        [
          {
            icon: "school",
            label: "Required",
            val: "PCM or PCB depending on subject. IISER/IISc BS for research track.",
          },
          {
            icon: "cert",
            label: "Exams",
            val: "IISER Aptitude Test, IISc BS Entrance, CUET for central universities, NEST",
          },
          {
            icon: "briefcase",
            label: "After B.Sc",
            val: "M.Sc → PhD, ISRO/DRDO Scientist, Data Scientist, Pharma Research, Professor",
          },
        ],
        [
          "PCM / PCB 12th",
          "B.Sc (3yr)",
          "M.Sc (2yr)",
          "PhD / Scientist / Professor",
        ],
        ["Research Aptitude", "Analysis", "Lab Work", "Statistics"],
      )}

      ${cgCard(
        "sci-neet",
        "#993C1D",
        "#FAECE7",
        "stethoscope",
        "MBBS / Medicine",
        "NEET-UG — requires PCB",
        "Become a doctor — India's most respected profession. Acute shortage means near-100% placement. Government MBBS seats are highly competitive but private options exist.",
        { salary: "₹6–80 LPA", exam: "NEET-UG", duration: "5.5 Years" },
        [
          {
            icon: "school",
            label: "Required",
            val: "PCB with min 50% (40% for SC/ST). Biology mandatory.",
          },
          {
            icon: "cert",
            label: "Exam",
            val: "NEET-UG — single national exam for MBBS, BDS, BAMS, BHMS, BUMS, BSc Nursing",
          },
          {
            icon: "briefcase",
            label: "Careers",
            val: "Doctor, Surgeon, Dentist, Ayurvedic, Hospital Management, Medical Research",
          },
          {
            icon: "globe",
            label: "Abroad",
            val: "MBBS in Russia/Philippines is cheaper. Must clear NExT exam to practice in India after returning.",
          },
        ],
        ["PCB 12th", "NEET Prep", "MBBS (5.5yr)", "MD/MS Specialisation"],
        ["Biology", "Memory", "Empathy", "Clinical Skills"],
      )}

      ${cgCard(
        "sci-arch",
        "#993556",
        "#FBEAF0",
        "building",
        "Architecture (B.Arch)",
        "NATA · JEE Paper 2",
        "Design buildings, cities, hospitals and spaces where people live and work. Combines creativity with structural engineering.",
        { salary: "₹4–30 LPA", exam: "NATA", duration: "5 Years" },
        [
          {
            icon: "school",
            label: "Required",
            val: "PCM with Mathematics mandatory. Drawing/sketching talent is a strong plus.",
          },
          {
            icon: "cert",
            label: "Exams",
            val: "NATA (National Aptitude Test in Architecture), JEE Paper 2 for NITs",
          },
          {
            icon: "briefcase",
            label: "Careers",
            val: "Architect, Urban Planner, Interior Designer, Landscape Architect, Construction Manager",
          },
        ],
        ["12th PCM", "NATA Exam", "B.Arch (5yr)", "Intern / Own Firm"],
        ["Creativity", "Spatial Thinking", "AutoCAD", "Design Sense"],
      )}
    </div>

    ${cgCatLabel("hospital", "Medicine & Allied Health")}
    <div class="cg-cards-grid">
      ${cgCard(
        "sci-pharma",
        "#0F6E56",
        "#E1F5EE",
        "pill",
        "Pharmacy (B.Pharm / D.Pharm)",
        "PCB/PCM · NEET optional",
        "Drug development, hospital pharmacy, pharmaceutical research. Growing MNC sector with global export opportunities. D.Pharm is only 2 years.",
        {
          salary: "₹3–20 LPA",
          exam: "State CET / Direct",
          duration: "2–4 Years",
        },
        [
          {
            icon: "briefcase",
            label: "Careers",
            val: "Clinical Research, Drug Inspector, Hospital Pharmacist, Pharma Sales, R&D at Sun Pharma/Dr. Reddy's/Cipla",
          },
          {
            icon: "cert",
            label: "Entry",
            val: "D.Pharm: Direct admission after 12th PCB. B.Pharm: State counselling or management quota.",
          },
        ],
        [
          "12th PCB",
          "D.Pharm (2yr) or B.Pharm (4yr)",
          "M.Pharm / MBA Pharma",
          "R&D / QC / Sales",
        ],
        ["Chemistry", "Drug Knowledge", "Lab Skills"],
      )}

      ${cgCard(
        "sci-nurse",
        "#993C1D",
        "#FAECE7",
        "heart",
        "BSc Nursing / GNM",
        "NEET · PCB — Global Demand",
        "High demand globally — especially in USA, UK, Canada, Australia. Government hospital nursing officers earn very well with full security and pension.",
        {
          salary: "₹3–25 LPA (₹50L+ abroad)",
          exam: "NEET / Direct",
          duration: "3–4 Years",
        },
        [
          {
            icon: "globe",
            label: "Abroad",
            val: "Nurses earn ₹30–60 LPA equivalent in USA/UK. NCLEX exam for USA, NMC test for UK.",
          },
          {
            icon: "briefcase",
            label: "Careers",
            val: "Staff Nurse, ICU Nurse, Nursing Officer (AIIMS/Railway/Govt), Nurse Educator, Head Nurse",
          },
        ],
        [
          "12th PCB",
          "BSc Nursing (4yr) / GNM (3yr)",
          "NCLEX / NMC",
          "USA / UK / Canada posting",
        ],
        ["Empathy", "Clinical Skills", "Patience", "Communication"],
      )}
    </div>

    ${cgCatLabel("brain", "Technology & Digital Careers")}
    <div class="cg-cards-grid">
      ${cgCard(
        "sci-bca",
        "#185FA5",
        "#E6F1FB",
        "code",
        "BCA / Computer Applications",
        "No entrance · PCM preferred",
        "Fastest entry into software development without engineering. Well-known path for students who love coding but couldn't crack JEE. Top up with MCA for senior roles.",
        { salary: "₹3–30 LPA", exam: "Merit / CUET", duration: "3 Years" },
        [
          {
            icon: "briefcase",
            label: "Roles",
            val: "Software Developer, Web Developer, App Developer, Data Analyst, UI/UX Designer",
          },
          {
            icon: "school",
            label: "Path",
            val: "BCA → MCA → Senior Developer / Engineering Manager. Alternatively, BCA → direct job + certifications.",
          },
        ],
        ["12th PCM", "BCA (3yr)", "MCA (2yr)", "Senior Developer / Manager"],
        ["Python", "Java", "Web Dev", "DSA", "Databases"],
      )}

      ${cgCard(
        "sci-ds",
        "#534AB7",
        "#EEEDFE",
        "lightning",
        "Data Science / AI / ML",
        "PCM · B.Tech CS or B.Sc Stats",
        "The #1 emerging field globally. Build intelligent systems, analyse big data, train AI models. India has 1 million+ unfilled data roles right now.",
        { salary: "₹6–80 LPA", exam: "JEE / CUET", duration: "3–4 Years" },
        [
          {
            icon: "briefcase",
            label: "Roles",
            val: "Data Scientist, ML Engineer, AI Researcher, Business Analyst, NLP Engineer, Prompt Engineer",
          },
          {
            icon: "trend",
            label: "Demand",
            val: "Google, Amazon, Flipkart pay ₹25–80L at entry to IIT/BITS CS grads. Remote work to USA companies common.",
          },
        ],
        [
          "12th PCM",
          "B.Tech CS / B.Sc Stats",
          "Specialise in ML/AI",
          "FAANG / Unicorn",
        ],
        ["Python", "Statistics", "ML Frameworks", "SQL", "Linear Algebra"],
      )}
    </div>
  </div>

  <!-- ========== COMMERCE ========== -->
  <div id="cgp-Commerce" class="cg-panel ${activeTab === "Commerce" ? "active" : ""}">
    ${cgIntro(
      "Commerce",
      "#064e3b",
      "#10b981",
      "chart",
      "Commerce is the gateway to business, finance, banking and law.",
      "CA, MBA, CS, CMA and banking careers are among India's most sought-after roles. Commerce students also have easy access to law, civil services, and data analytics.",
    )}
    <div class="cg-quickstats">
      <div class="cg-qs"><strong style="color:var(--blue)">30+</strong><span>Career Paths</span></div>
      <div class="cg-qs"><strong style="color:var(--green)">₹3–60L</strong><span>Salary Range</span></div>
      <div class="cg-qs"><strong style="color:var(--purple)">Global</strong><span>CA / ACCA / CPA</span></div>
    </div>

    ${cgCatLabel("cert", "Professional Finance Qualifications")}
    <div class="cg-cards-grid">
      ${cgCard(
        "com-ca",
        "#185FA5",
        "#E6F1FB",
        "briefcase",
        "Chartered Accountancy (CA)",
        "ICAI — India's most prestigious finance exam",
        "The gold standard of Indian finance. CA is mandatory for all companies, tax filing, and auditing. Pass rate is 5–10% making it extremely prestigious and well-paying.",
        { salary: "₹7–60 LPA", exam: "CA Foundation", duration: "4–5 Years" },
        [
          {
            icon: "cert",
            label: "Stages",
            val: "CA Foundation → Intermediate → Final + 3-year Articleship (practical training)",
          },
          {
            icon: "briefcase",
            label: "Careers",
            val: "CFO, Finance Director, Tax Consultant, Auditor, Financial Analyst, own CA firm",
          },
          {
            icon: "globe",
            label: "Global",
            val: "Convert to CPA (USA) or ACCA (UK) for international roles. Indian CAs at Big4 firms globally.",
          },
        ],
        [
          "12th Commerce",
          "CA Foundation",
          "Intermediate",
          "3yr Articleship",
          "CA Final",
          "CFO / Own Firm",
        ],
        [
          "Accounting",
          "Taxation",
          "Corporate Law",
          "Auditing",
          "Financial Reporting",
        ],
      )}

      ${cgCard(
        "com-cs",
        "#3B6D11",
        "#EAF3DE",
        "document",
        "Company Secretary (CS)",
        "ICSI — Corporate Governance",
        "Every listed company must have a CS. Handles legal compliance, board meetings, MCA filings. Less competition than CA with solid pay and stable demand.",
        { salary: "₹5–25 LPA", exam: "CS Foundation", duration: "3–4 Years" },
        [
          {
            icon: "cert",
            label: "Stages",
            val: "CS Foundation → Executive → Professional + 16-month training",
          },
          {
            icon: "briefcase",
            label: "Roles",
            val: "Company Secretary, Compliance Officer, Legal Manager, Corporate Lawyer (if also LLB)",
          },
        ],
        [
          "12th Commerce",
          "CS Foundation",
          "CS Executive",
          "CS Professional",
          "Company Secretary",
        ],
        [
          "Company Law",
          "SEBI Regulations",
          "Corporate Governance",
          "Contract Law",
        ],
      )}

      ${cgCard(
        "com-cma",
        "#854F0B",
        "#FAEEDA",
        "coin",
        "Cost & Management Accountant (CMA)",
        "ICMAI — Less competition than CA",
        "Specialises in cost control, budgeting, and management accounting. Fewer exam takers than CA with good pay. CMA USA certification adds strong international value.",
        { salary: "₹4–20 LPA", exam: "CMA Foundation", duration: "3–4 Years" },
        [
          {
            icon: "briefcase",
            label: "Roles",
            val: "Cost Accountant, Finance Manager, Management Consultant, Budget Analyst, Internal Auditor",
          },
          {
            icon: "globe",
            label: "Global",
            val: "CMA USA (Institute of Management Accountants) or CIMA UK adds international value. Strong in manufacturing sector.",
          },
        ],
        [
          "12th Commerce",
          "CMA Foundation",
          "CMA Inter",
          "CMA Final",
          "Finance Manager / CFO",
        ],
        ["Cost Accounting", "Budgeting", "Financial Analysis", "ERP Systems"],
      )}
    </div>

    ${cgCatLabel("bank", "Banking, Finance & Management")}
    <div class="cg-cards-grid">
      ${cgCard(
        "com-bank",
        "#185FA5",
        "#E6F1FB",
        "bank",
        "Banking (PO / Clerk / RBI / NABARD)",
        "IBPS · SBI · RBI Exams",
        "Government bank jobs — among the most stable and respected careers in India. PO salary + perks (housing, medical, pension) is better than most private sector jobs.",
        {
          salary: "₹4–15 LPA + all perks",
          exam: "IBPS PO / SBI PO",
          duration: "Graduation needed",
        },
        [
          {
            icon: "cert",
            label: "Exams",
            val: "IBPS PO/Clerk, SBI PO/Clerk, RBI Grade B, RBI Assistant, NABARD Grade A, Bank of Baroda specialist",
          },
          {
            icon: "briefcase",
            label: "Perks",
            val: "Housing loan at 2%, car loan, pension, medical for family, canteen — govt banking = unmatched job security.",
          },
          {
            icon: "trend",
            label: "Path Up",
            val: "Clerk → Officer → Scale II → Branch Manager → AGM → GM → MD/CMD of bank",
          },
        ],
        [
          "Graduation (any)",
          "IBPS / SBI Exam",
          "Probationary Officer",
          "Scale II Officer → Branch Manager",
        ],
        ["English", "Quantitative Aptitude", "Reasoning", "Current Affairs"],
      )}

      ${cgCard(
        "com-mba",
        "#534AB7",
        "#EEEDFE",
        "trophy",
        "MBA — IIM / Top B-Schools",
        "CAT · MAT · XAT · GMAT",
        "Management education that opens doors to Fortune 500 companies, startups, consulting firms, and C-suite roles worldwide. IIM packages average ₹25–35L.",
        {
          salary: "₹8–50 LPA",
          exam: "CAT after graduation",
          duration: "B.Com + 2yr MBA",
        },
        [
          {
            icon: "school",
            label: "Path",
            val: "B.Com/BBA → Work experience (1–3yr valued) → CAT/GMAT → IIM/Top B-School → Campus placement",
          },
          {
            icon: "briefcase",
            label: "Specialise",
            val: "Finance, Marketing, HR, Operations, Strategy, Consulting, Entrepreneurship",
          },
          {
            icon: "globe",
            label: "Abroad",
            val: "MBA from Harvard, Wharton, INSEAD, NUS via GMAT. ₹80L–2Cr+ starting salaries. Scholarship options exist.",
          },
        ],
        [
          "B.Com / BBA",
          "Work Experience",
          "CAT / GMAT",
          "IIM / Top B-School",
          "Senior Management",
        ],
        ["Leadership", "Strategy", "Communication", "Networking", "Analytics"],
      )}

      ${cgCard(
        "com-law",
        "#993C1D",
        "#FAECE7",
        "scale",
        "Law (LLB) — Commerce Track",
        "CLAT · Direct LLB after B.Com",
        "Commerce + Law = the ultimate combination for corporate law, M&A, IPO advisory, and international arbitration. NLU grads earn ₹15–25L fresh at Big Law firms.",
        {
          salary: "₹4–60 LPA",
          exam: "CLAT / AILET",
          duration: "5yr integrated or 3+3yr",
        },
        [
          {
            icon: "briefcase",
            label: "Roles",
            val: "Corporate Lawyer, Tax Lawyer, M&A Advisor, In-house Counsel, LegalTech Entrepreneur",
          },
          {
            icon: "trend",
            label: "LegalTech",
            val: "AI + Law = next billion-dollar opportunity. Legal startups raising millions globally. Early movers will dominate.",
          },
        ],
        [
          "12th Commerce",
          "5yr BA LLB / 3yr B.Com then LLB",
          "Bar Council Enrolment",
          "Junior Advocate → Partner → Senior Counsel",
        ],
        [
          "Contracts",
          "Taxation Law",
          "Securities Law",
          "Negotiation",
          "Drafting",
        ],
      )}
    </div>

    ${cgCatLabel("globe", "Commerce to Other Fields")}
    <div class="cg-cards-grid">
      ${cgCard(
        "com-actuary",
        "#0F6E56",
        "#E1F5EE",
        "chart",
        "Actuarial Science",
        "IAI — Very high salary, low competition",
        "Actuaries calculate financial risk for insurance, pension funds, and banks. One of the world's highest-paid professions. Very few people know about it — your advantage.",
        {
          salary: "₹8–60 LPA",
          exam: "IAI Exams (15 papers)",
          duration: "5–7 Years",
        },
        [
          {
            icon: "cert",
            label: "Exams",
            val: "Institute of Actuaries of India (IAI) — 15 papers taken over several years while working.",
          },
          {
            icon: "briefcase",
            label: "Roles",
            val: "Actuary, Risk Manager, Insurance Product Designer, Pension Fund Manager, Investment Analyst",
          },
          {
            icon: "globe",
            label: "Global",
            val: "Fellowship of Institute of Actuaries (FIA) UK or SOA USA accepted worldwide. London/Singapore roles pay £100K+.",
          },
        ],
        [
          "12th Commerce with Maths",
          "B.Sc Maths/Stats or B.Com",
          "IAI CT Exams",
          "Fellowship (FIAI)",
          "Chief Actuary",
        ],
        [
          "Statistics",
          "Mathematics",
          "Excel/R",
          "Risk Modelling",
          "Probability",
        ],
      )}
    </div>
  </div>

  <!-- ========== ARTS ========== -->
  <div id="cgp-Arts" class="cg-panel ${activeTab === "Arts" ? "active" : ""}">
    ${cgIntro(
      "Arts",
      "#7f1d1d",
      "#ef4444",
      "book",
      "Arts is the most versatile stream — do not underestimate it.",
      "Civil Services, Law, Journalism, Teaching, Psychology, Film, Design, Social Work — and everything that requires understanding human beings. Arts students dominate UPSC toppers lists.",
    )}
    <div class="cg-quickstats">
      <div class="cg-qs"><strong style="color:var(--blue)">40+</strong><span>Career Paths</span></div>
      <div class="cg-qs"><strong style="color:var(--purple)">UPSC</strong><span>India\'s Top Exam</span></div>
      <div class="cg-qs"><strong style="color:var(--orange)">Creative</strong><span>Unlimited Scope</span></div>
    </div>

    ${cgCatLabel("crown", "Civil Services & Government")}
    <div class="cg-cards-grid">
      ${cgCard(
        "art-ias",
        "#185FA5",
        "#E6F1FB",
        "crown",
        "IAS / IPS / IFS — Civil Services",
        "UPSC CSE — India's most prestigious career",
        "India's most powerful career. Run districts, shape national policy, represent India abroad as a diplomat. Arts students consistently top the UPSC exam every year.",
        {
          salary: "₹56K–2.5L/month",
          exam: "UPSC CSE",
          duration: "Graduation + 1–3yr prep",
        },
        [
          {
            icon: "cert",
            label: "Stages",
            val: "UPSC Prelims → Mains (9 papers written) → Personality Test (Interview)",
          },
          {
            icon: "briefcase",
            label: "Services",
            val: "IAS (District Collector/Secretary), IPS (Police/DGP), IFS (Ambassador/Diplomat), IRS (Tax), IES, IPS",
          },
          {
            icon: "school",
            label: "Reality",
            val: "~1000 selected from 10 lakh+ applicants. Needs 1–3 years dedicated preparation. But it IS achievable.",
          },
          {
            icon: "trend",
            label: "Growth",
            val: "Collector → Joint Secretary → Secretary to Govt of India → Cabinet Secretary (highest civil post in India)",
          },
        ],
        [
          "Any Graduation",
          "UPSC Prelims",
          "UPSC Mains (Written)",
          "IAS Interview",
          "IAS Academy (2yr training)",
          "District Collector",
        ],
        [
          "Current Affairs",
          "Essay Writing",
          "Ethics",
          "History",
          "Polity",
          "Economy",
        ],
      )}

      ${cgCard(
        "art-opsc",
        "#3B6D11",
        "#EAF3DE",
        "building",
        "Odisha Civil Services (OCS/OPS)",
        "OPSC — Odisha's own IAS equivalent",
        "Become an Odisha Administrative Service or Odisha Police Service officer. Same prestige as UPSC at state level. High chance of posting near your home district.",
        {
          salary: "₹40K–1.5L/month",
          exam: "OPSC OCS Exam",
          duration: "Graduation + prep",
        },
        [
          {
            icon: "cert",
            label: "Pattern",
            val: "OPSC exam pattern similar to UPSC. Prelims → Mains → Interview. Odia language paper included.",
          },
          {
            icon: "briefcase",
            label: "Roles",
            val: "Sub-Collector, SDM, DSP (Police), Treasury Officer, Block Development Officer (BDO), Tahasildar",
          },
        ],
        [
          "Any Graduation",
          "OPSC Prelims",
          "OPSC Mains",
          "Interview",
          "OAS / OPS Training",
        ],
        ["Odia Language", "Odisha GK", "General Studies", "Current Affairs"],
      )}
    </div>

    ${cgCatLabel("scale", "Law & Justice")}
    <div class="cg-cards-grid">
      ${cgCard(
        "art-law",
        "#993556",
        "#FBEAF0",
        "scale",
        "Law — LLB from NLU",
        "CLAT · AILET — 5yr integrated",
        "From courtroom advocacy to corporate boardrooms. Law from NLUs places you at par with IIT/IIM graduates. CLAT is your gateway — well-prepared Arts students crack it.",
        { salary: "₹4–60 LPA", exam: "CLAT", duration: "5 Years integrated" },
        [
          {
            icon: "cert",
            label: "Exam",
            val: "CLAT for 22 NLUs, AILET for NLU Delhi, LSAT India for private universities. English + Reasoning + Legal GK.",
          },
          {
            icon: "briefcase",
            label: "Specialise",
            val: "Criminal, Constitutional, Corporate, IP Law, International Law, Environmental Law, Human Rights",
          },
          {
            icon: "trend",
            label: "NLU Path",
            val: "NLSIU Bangalore / NALSAR Hyderabad / NLU Delhi → Big Law firm (Khaitan, AZB, Cyril Amarchand) → ₹15–25L fresh.",
          },
        ],
        [
          "12th Arts",
          "CLAT Prep",
          "5yr BA LLB",
          "Junior Advocate",
          "Senior Advocate / Judge / Partner",
        ],
        [
          "Legal Reasoning",
          "Reading",
          "Argumentation",
          "Constitutional Law",
          "Drafting",
        ],
      )}

      ${cgCard(
        "art-judge",
        "#854F0B",
        "#FAEEDA",
        "gavel",
        "Judiciary — Civil Judge / Magistrate",
        "State PCS-J after LLB",
        "Become a Civil Judge or Judicial Magistrate through State Judicial Service exam. One of the most respected and secure careers in Indian society.",
        {
          salary: "₹50K–2L/month",
          exam: "PCS-J / Odisha Judicial Exam",
          duration: "LLB + exam prep",
        },
        [
          {
            icon: "cert",
            label: "Odisha",
            val: "Odisha Judicial Service (OJS) conducted by Odisha High Court. Civil Judge (Junior Division) is entry post.",
          },
          {
            icon: "trend",
            label: "Path",
            val: "Civil Judge → Senior Civil Judge → District Judge → High Court Judge (via HC elevation / UPSC Higher Judiciary)",
          },
        ],
        [
          "LLB / BA LLB",
          "OJS / PCS-J Exam",
          "Civil Judge Training",
          "District Judge",
          "High Court Judge",
        ],
        [
          "Civil Procedure Code",
          "Evidence Act",
          "Constitutional Law",
          "Legal Drafting",
        ],
      )}
    </div>

    ${cgCatLabel("camera", "Media, Creative & Social")}
    <div class="cg-cards-grid">
      ${cgCard(
        "art-media",
        "#0F6E56",
        "#E1F5EE",
        "camera",
        "Journalism / Mass Communication",
        "BJMC / MJMC — Digital age boom",
        "TV anchor, print journalist, digital content creator, documentary filmmaker, public relations professional. Media is exploding in the digital age — YouTube alone has minted 100s of crores of rupees for content creators.",
        {
          salary: "₹3–30 LPA",
          exam: "IIMC Entrance / CUET",
          duration: "3 Years",
        },
        [
          {
            icon: "school",
            label: "Institutes",
            val: "IIMC Delhi, ACJ Chennai, Symbiosis Pune, Jamia Millia Delhi, Utkal University Bhubaneswar",
          },
          {
            icon: "briefcase",
            label: "Roles",
            val: "TV Reporter, Digital Creator, Documentary Filmmaker, PR Specialist, Social Media Manager, Podcast Host",
          },
        ],
        [
          "12th Arts",
          "BJMC (3yr)",
          "Internship at Media House",
          "Reporter / Editor / Creator",
        ],
        [
          "Writing",
          "Communication",
          "Current Affairs",
          "Video Editing",
          "Social Media",
        ],
      )}

      ${cgCard(
        "art-psych",
        "#534AB7",
        "#EEEDFE",
        "brain",
        "Psychology / Social Work / Counselling",
        "BA Psych · BSW — Mental health boom",
        "Mental health is the next healthcare frontier. India has only 0.3 psychiatrists per 100,000 population vs the global average of 1.7. Massive shortage means huge opportunity.",
        { salary: "₹3–25 LPA", exam: "CUET / Merit", duration: "3–5 Years" },
        [
          {
            icon: "briefcase",
            label: "Roles",
            val: "Clinical Psychologist, School Counsellor, HR Professional, Social Worker, Researcher, NGO Director",
          },
          {
            icon: "globe",
            label: "Abroad",
            val: "M.Sc → PhD in Psychology opens teaching and research in UK, USA, Australia. Very in-demand post-pandemic worldwide.",
          },
        ],
        [
          "BA Psychology",
          "M.Sc Clinical Psych",
          "RCI Registration",
          "Clinical Psychologist / Therapist",
        ],
        [
          "Empathy",
          "Active Listening",
          "Research Methods",
          "Ethics",
          "Counselling Techniques",
        ],
      )}

      ${cgCard(
        "art-design",
        "#993C1D",
        "#FAECE7",
        "palette",
        "Design — Fashion, Graphic, UX, NID",
        "NID · NIFT · CEED",
        "Creative professionals are among the highest-paid in startups and global companies. UX designers at tech companies earn as much as software engineers. NID is the IIT of design.",
        {
          salary: "₹4–40 LPA",
          exam: "NID DAT / NIFT / CEED",
          duration: "4 Years",
        },
        [
          {
            icon: "cert",
            label: "Exams",
            val: "NID Design Aptitude Test (DAT), NIFT Entrance, CEED for M.Des at IITs, UCEED for B.Des at IIT/IITB",
          },
          {
            icon: "briefcase",
            label: "Fields",
            val: "UX/UI Design, Fashion, Graphic, Product Design, Animation, Game Design, Interior, Industrial Design",
          },
        ],
        [
          "12th Any Stream",
          "NID / NIFT / UCEED",
          "B.Des (4yr)",
          "Designer at MNC / Startup / Own Studio",
        ],
        [
          "Sketching",
          "Creative Thinking",
          "Adobe Suite",
          "Figma",
          "User Research",
        ],
      )}
    </div>

    ${cgCatLabel("teach", "Teaching, Research & Academia")}
    <div class="cg-cards-grid">
      ${cgCard(
        "art-teach",
        "#3B6D11",
        "#EAF3DE",
        "chalkboard",
        "Teaching — School & College Professor",
        "OTET · CTET · NET · SET",
        "One of the most stable and respected professions. Government school teachers in Odisha earn ₹35K–80K/month with full job security, pension, and long holidays.",
        {
          salary: "₹35K–80K/month + pension",
          exam: "OTET / CTET / NET",
          duration: "Graduation + B.Ed",
        },
        [
          {
            icon: "cert",
            label: "School",
            val: "Graduation + B.Ed (2yr) → OTET / CTET → PGT/TGT teacher in Navodaya, KVS, State Govt Schools",
          },
          {
            icon: "cert",
            label: "College",
            val: "M.A → UGC NET/SET → Assistant Professor → Associate Professor → Professor (Vice Chancellor path)",
          },
        ],
        [
          "MA / M.Sc",
          "B.Ed (2yr)",
          "OTET / NET Exam",
          "Assistant Professor → Professor",
        ],
        ["Subject Knowledge", "Communication", "Patience", "Research Writing"],
      )}
    </div>
  </div>

  <!-- ========== DEFENCE ========== -->
  <div id="cgp-Defence" class="cg-panel ${activeTab === "Defence" ? "active" : ""}">
    ${cgIntro(
      "Defence",
      "#1e3a8a",
      "#3b82f6",
      "shield",
      "Defence & Government — honour, adventure, and lifetime security.",
      "India's armed forces and paramilitary services offer some of the most respected careers available after 12th — from any stream. Science PCM gives direct access to technical roles in Army, Navy and Air Force.",
    )}
    <div class="cg-quickstats">
      <div class="cg-qs"><strong style="color:var(--blue)">15+</strong><span>Defence Entries</span></div>
      <div class="cg-qs"><strong style="color:var(--green)">Pension</strong><span>Lifetime Security</span></div>
      <div class="cg-qs"><strong style="color:var(--orange)">Any Stream</strong><span>Can Apply</span></div>
    </div>

    ${cgCatLabel("sword", "Army, Navy, Air Force — Officer Entry After 12th")}
    <div class="cg-cards-grid">
      ${cgCard(
        "def-nda",
        "#185FA5",
        "#E6F1FB",
        "shield",
        "NDA — National Defence Academy",
        "UPSC NDA Exam — After 12th PCM",
        "The most prestigious officer entry. Join Army, Navy, or Air Force as a commissioned officer directly from 12th. Khadakwasla NDA training is legendary worldwide. You graduate as a Lieutenant.",
        {
          salary: "₹56K–2L+/month",
          exam: "UPSC NDA & NA",
          duration: "3yr NDA + 1yr IMA/INA/AFA",
        },
        [
          {
            icon: "school",
            label: "Eligibility",
            val: "12th PCM for Navy/Air Force. 12th any stream for Army. Age: 16.5–19.5 years. Unmarried male or female.",
          },
          {
            icon: "cert",
            label: "Exam",
            val: "UPSC NDA & NA Exam — held twice a year. Mathematics (300 marks) + General Ability Test (600 marks). Then SSB Interview (5 days at AFSB).",
          },
          {
            icon: "briefcase",
            label: "Service",
            val: "Army: Infantry/Artillery/Armoured. Navy: Executive/Engineering Branch. IAF: Flying (Pilot) / Technical / Ground Duty",
          },
          {
            icon: "trend",
            label: "Benefits",
            val: "Free housing, medical for family, pension, canteen, children education allowance, ex-serviceman quota in all govt jobs",
          },
        ],
        [
          "12th PCM / any stream",
          "UPSC NDA Exam",
          "SSB Interview (5 days)",
          "NDA Khadakwasla (3yr)",
          "IMA/INA/AFA (1yr)",
          "2nd Lieutenant / Sub Lieutenant / Flying Officer",
        ],
        [
          "Mathematics",
          "Physical Fitness",
          "Leadership",
          "GK & Current Affairs",
          "English",
        ],
      )}

      ${cgCard(
        "def-navy10",
        "#0F6E56",
        "#E1F5EE",
        "anchor",
        "Indian Navy — 10+2 (B.Tech) Entry",
        "Direct after 12th PCM — No UPSC needed",
        "The Navy's 10+2 Technical Entry Scheme lets you join the Navy directly after 12th PCM without writing UPSC NDA exam. You get a B.Tech degree during service. Travel the world on warships.",
        {
          salary: "₹56K–2L+/month",
          exam: "SSB Interview only",
          duration: "5yr training then service",
        },
        [
          {
            icon: "school",
            label: "Eligibility",
            val: "12th PCM with minimum 70%. Age 16.5–19.5 years. Unmarried. Direct SSB interview — no written exam like NDA.",
          },
          {
            icon: "briefcase",
            label: "Branches",
            val: "Executive (Ship command/Navigation), Engineering, Electrical, Naval Architecture, Aviation, Education, Logistics",
          },
          {
            icon: "globe",
            label: "Lifestyle",
            val: "Indian Navy visits 70+ countries — port calls, anti-piracy missions, joint exercises with US/UK/French Navy. Named warship command at Commander rank.",
          },
        ],
        [
          "12th PCM 70%+",
          "SSB Interview",
          "INS Chilka Training (6mo)",
          "Naval Academy Ezhimala (4yr B.Tech)",
          "Sub Lieutenant on warship",
        ],
        [
          "Physics",
          "Mathematics",
          "Physical Fitness",
          "Leadership",
          "Technical Aptitude",
        ],
      )}

      ${cgCard(
        "def-pilot",
        "#534AB7",
        "#EEEDFE",
        "plane",
        "IAF Pilot — Flying Branch",
        "NDA · AFCAT · After 12th PCM",
        "Fly fighter jets, transport aircraft, helicopters for the Indian Air Force. IAF pilot is one of the most elite and high-status careers in India — and one of the most exciting.",
        {
          salary: "₹56K–2L+/month",
          exam: "NDA / AFCAT / CDS",
          duration: "3–4yr training",
        },
        [
          {
            icon: "cert",
            label: "Entry",
            val: "NDA after 12th PCM is youngest entry (age 16.5). AFCAT after graduation. CDS for engineering grads.",
          },
          {
            icon: "school",
            label: "Medical",
            val: "Vision 6/6 without glasses (LASIK approved for some entries). Height 162.5cm minimum. Full medicals at AFSB Mysore/Gandhinagar.",
          },
          {
            icon: "briefcase",
            label: "Branches",
            val: "Flying Branch (Fighter/Transport/Helicopter), Technical (Aeronautical/Electronics), Ground Duty (Admin/Education/Meteorology)",
          },
        ],
        [
          "12th PCM",
          "UPSC NDA Exam",
          "AFSB Interview + Medicals",
          "AFA Dundigal Training (2yr)",
          "Flying Officer → Flight Lieutenant → Wing Commander → Air Marshal",
        ],
        [
          "Mathematics",
          "Physics",
          "Quick Reflexes",
          "Spatial Awareness",
          "Decision Making",
        ],
      )}
    </div>

    ${cgCatLabel("flame", "Agniveer — Soldiers / Sailors / Airmen (After 10th/12th)")}
    <div class="cg-cards-grid">
      ${cgCard(
        "def-agni",
        "#993C1D",
        "#FAECE7",
        "flame",
        "Agniveer — Army, Navy & Air Force",
        "Agnipath Scheme — 4 Year Service",
        "Serve India for 4 years with full military training. 25% are retained permanently. The rest receive ₹11.71 lakh tax-free corpus, skill certificates, and priority in CAPF, state police, Railway, and government jobs.",
        {
          salary: "₹30,000–40,000/month",
          exam: "Army/Navy/AF Agniveer Rally",
          duration: "4 Years",
        },
        [
          {
            icon: "school",
            label: "Army GD",
            val: "Agniveer GD: 10th pass, 45%. Agniveer Technical: 12th PCM 50%. Clerk/SKT: 12th 60% with English & Maths.",
          },
          {
            icon: "school",
            label: "Navy",
            val: "Agniveer SSR: 12th PCM 50%. MR (cook/steward): 10th pass. Appear in INET (Indian Navy Entrance Test).",
          },
          {
            icon: "school",
            label: "Air Force",
            val: "Agniveer Vayu Science: 12th PCM 50%. Agniveer Vayu Other: 12th any stream. Air Force Common Admission Test.",
          },
          {
            icon: "trend",
            label: "After 4yr",
            val: "₹11.71L tax-free corpus. Priority in CAPF, state police, Coast Guard, CISF, RPF, Railways. 10% Army soldier quota for re-joining. Age relaxation in all govt exams.",
          },
        ],
        [
          "10th / 12th Pass",
          "Agniveer Rally / INET",
          "Medical & Physical Test",
          "4yr Service with Full Training",
          "₹11.71L Corpus + Skill Certificates",
          "CAPF / Police / Railway Priority",
        ],
        [
          "Physical Fitness",
          "Discipline",
          "Teamwork",
          "Weapon Training",
          "Military Skills",
        ],
      )}
    </div>

    ${cgCatLabel("badge", "Paramilitary, Police & Coast Guard")}
    <div class="cg-cards-grid">
      ${cgCard(
        "def-coast",
        "#0F6E56",
        "#E1F5EE",
        "anchor",
        "Indian Coast Guard",
        "CG Navik / Assistant Commandant — After 12th PCM",
        "Protect India's 7,516 km coastline. Odisha has a long coast — Coast Guard is well-known and respected here. Navik (GD) is directly after 12th PCM.",
        {
          salary: "₹21,700–35,000/month",
          exam: "CG Navik Exam",
          duration: "After 12th PCM",
        },
        [
          {
            icon: "school",
            label: "Navik GD",
            val: "12th PCM 60%. No SSB. Written test + Physical Fitness Test. Training at Kochi then sea duty posting.",
          },
          {
            icon: "school",
            label: "Officer",
            val: "Assistant Commandant: Engineering/Science graduation. Direct SSB interview. Pay equivalent to Coast Guard Lieutenant.",
          },
        ],
        [
          "12th PCM 60%",
          "CG Navik Written Exam",
          "Physical Test",
          "Coast Guard Training Kochi",
          "Navik on patrol vessel → Yantrik → Inspector → Assistant Commandant",
        ],
        ["Physical Fitness", "Swimming", "Mathematics", "Technical Aptitude"],
      )}

      ${cgCard(
        "def-capf",
        "#854F0B",
        "#FAEEDA",
        "badge",
        "CAPF — BSF / CRPF / CISF / ITBP / SSB",
        "UPSC CAPF AC Exam — After Graduation",
        "Central Armed Police Forces protect India's borders, airports, nuclear facilities, and internal security. Assistant Commandant is an officer-level post with excellent pay and respect.",
        {
          salary: "₹44,900–1.5L/month",
          exam: "UPSC CAPF Exam",
          duration: "Graduation needed",
        },
        [
          {
            icon: "briefcase",
            label: "Forces",
            val: "BSF (Pakistan/Bangladesh border), CRPF (internal security), CISF (airports/nuclear plants), SSB (Nepal/Bhutan border), ITBP (Himalayan/China border), AR (Northeast India)",
          },
          {
            icon: "cert",
            label: "Sub-Insp",
            val: "SSC CPO exam for Sub-Inspector in BSF/CRPF/CISF after 12th or graduation. Lower competition than CAPF AC.",
          },
        ],
        [
          "Any Graduation",
          "UPSC CAPF Written Exam",
          "Physical Standards Test + Medical",
          "SSB Interview",
          "Assistant Commandant → Commandant → DIG → IG → DG",
        ],
        [
          "Physical Fitness",
          "General Studies",
          "Law & Constitution",
          "Leadership",
        ],
      )}

      ${cgCard(
        "def-police",
        "#993556",
        "#FBEAF0",
        "badge",
        "Odisha Police — SI / Constable / DSP",
        "OSSSC · OPSC OPS Exam",
        "Serve Odisha directly. Constable after 12th, Sub-Inspector after graduation. Posting in your home state with good pay, pension, and uniform pride.",
        {
          salary: "₹21,000–60,000/month",
          exam: "OSSSC / OP SI Exam",
          duration: "After 12th or Graduation",
        },
        [
          {
            icon: "cert",
            label: "Constable",
            val: "12th pass + physical test. Written exam by OSSSC. Training at Bhubaneswar Police Academy (6–9 months).",
          },
          {
            icon: "cert",
            label: "SI / DSP",
            val: "Sub-Inspector: Graduation + OSSSC SI exam. DSP: through OPSC OPS exam (like UPSC for Odisha police).",
          },
          {
            icon: "trend",
            label: "Promotion",
            val: "Constable → HC → ASI → SI → Inspector → DSP → SP → DIG → IG → DGP (Director General of Police)",
          },
        ],
        [
          "12th / Graduation",
          "OSSSC / OPSC Exam",
          "Physical & Medical Test",
          "Police Academy Training",
          "Constable / SI → Inspector → DSP → SP → DGP",
        ],
        ["Physical Fitness", "Odia Language", "General Knowledge", "Odisha GK"],
      )}
    </div>

    ${cgCatLabel("train", "Railway, SSC & Teaching")}
    <div class="cg-cards-grid">
      ${cgCard(
        "def-rrb",
        "#185FA5",
        "#E6F1FB",
        "train",
        "Indian Railways — RRB / NTPC / JE",
        "After 10th / 12th / Graduation — Any stream",
        "World's largest employer with 1.4 million employees. Loco Pilot, Station Master, Junior Engineer, Group D — Railways has massive vacancies every year for all qualification levels.",
        {
          salary: "₹19,000–60,000/month",
          exam: "RRB NTPC / JE / Group D",
          duration: "After 10th/12th/Grad",
        },
        [
          {
            icon: "cert",
            label: "NTPC",
            val: "12th or Graduation. Station Master, Goods Guard, Commercial Apprentice, Junior Account Assistant. Very popular.",
          },
          {
            icon: "cert",
            label: "Loco Pilot",
            val: "12th PCM + ITI. Drive trains. ALP (Assistant Loco Pilot) → Loco Pilot → Senior Loco Pilot.",
          },
          {
            icon: "cert",
            label: "JE",
            val: "Diploma/B.Tech Engineering. Junior Engineer in Civil/Electrical/Mechanical/S&T/IT departments.",
          },
          {
            icon: "cert",
            label: "Group D",
            val: "10th pass. Track maintainer, helper, porter. Largest single recruitment in India — lakhs of vacancies.",
          },
        ],
        [
          "10th / 12th / Diploma / Graduation",
          "RRB Exam (Computer Based Test)",
          "Document Verification",
          "Medical Exam",
          "Railway Employee → Promotion based on seniority and departmental exam",
        ],
        ["Mathematics", "General Awareness", "Reasoning", "English"],
      )}

      ${cgCard(
        "def-ssc",
        "#3B6D11",
        "#EAF3DE",
        "document",
        "SSC — Central Government Jobs",
        "SSC CGL / CHSL / MTS / CPO — Any stream",
        "Staff Selection Commission fills lakhs of central government vacancies annually. From 12th (CHSL) to graduation (CGL). Stable, pensioned jobs across every ministry and department.",
        {
          salary: "₹19,000–75,500/month",
          exam: "SSC CGL / CHSL / MTS",
          duration: "After 12th or Graduation",
        },
        [
          {
            icon: "cert",
            label: "CHSL",
            val: "12th pass. Lower Division Clerk, Postal Assistant, Data Entry Operator in central ministries. Salary ₹19,900–63,200.",
          },
          {
            icon: "cert",
            label: "CGL",
            val: "Graduation. Inspector Income Tax, Assistant Section Officer, Auditor, Accountant. Salary ₹25,000–75,500.",
          },
          {
            icon: "cert",
            label: "CPO",
            val: "Graduation. Sub-Inspector in BSF, CRPF, CISF, Delhi Police, ITBP through SSC CPO exam.",
          },
        ],
        [
          "12th / Graduation",
          "SSC Exam (Tier 1 + Tier 2)",
          "Skill Test (for some posts)",
          "Central Govt Job in Delhi/State HQ",
        ],
        ["English", "Quantitative Aptitude", "General Knowledge", "Reasoning"],
      )}

      ${cgCard(
        "def-teach",
        "#0F6E56",
        "#E1F5EE",
        "chalkboard",
        "Government Teacher — School & College",
        "OTET · CTET · TGT · PGT · NET — Any stream",
        "One of the most stable professions in India. Government school teachers in Odisha and KVS / Navodaya schools earn ₹35K–80K/month with pension, summer holidays and absolute job security.",
        {
          salary: "₹35,000–80,000/month + pension",
          exam: "OTET / CTET / UGC-NET",
          duration: "Graduation + B.Ed (2yr)",
        },
        [
          {
            icon: "cert",
            label: "Primary",
            val: "12th + D.El.Ed (2yr) → OTET Paper 1 → Primary school teacher (Class 1–5). Easiest entry.",
          },
          {
            icon: "cert",
            label: "TGT/PGT",
            val: "Graduation/Post-Grad + B.Ed → OTET Paper 2 / CTET → TGT (Class 6–10) / PGT (Class 11–12) in KVS/NVS/State.",
          },
          {
            icon: "cert",
            label: "Professor",
            val: "MA / M.Sc + UGC NET or SET → Assistant Professor → Associate Professor → Professor. Public university salary ₹57,700–1,31,400.",
          },
        ],
        [
          "Graduation → B.Ed → OTET/CTET → School Teacher",
          "OR",
          "MA/M.Sc → UGC NET → Assistant Professor → Professor",
        ],
        ["Subject Knowledge", "Patience", "Communication", "Child Psychology"],
      )}
    </div>
  </div>

  <!-- ========== ABROAD ========== -->
  <div id="cgp-Abroad" class="cg-panel ${activeTab === "Abroad" ? "active" : ""}">
    ${cgIntro(
      "Abroad",
      "#4c1d95",
      "#8b5cf6",
      "globe",
      "Study & work abroad — the world is open after 12th.",
      "USA, UK, Canada, Australia, Germany, Japan — all have routes for Indian/Odisha students. Costs vary from near-zero in Germany to ₹80L+ in the USA. Choose based on your goal and budget.",
    )}
    <div class="cg-quickstats">
      <div class="cg-qs"><strong style="color:var(--blue)">8+</strong><span>Top Destinations</span></div>
      <div class="cg-qs"><strong style="color:var(--green)">₹0</strong><span>Germany Tuition</span></div>
      <div class="cg-qs"><strong style="color:var(--orange)">PR Paths</strong><span>Available</span></div>
    </div>

    ${cgCatLabel("globe", "Countries — How to Get There & What It Costs")}
    <div class="cg-cards-grid">
      ${cgCard(
        "ab-usa",
        "#185FA5",
        "#E6F1FB",
        "building",
        "USA — Engineering, CS, MBA",
        "SAT · TOEFL · GRE — Highest salaries",
        "World's best tech universities — MIT, Stanford, Carnegie Mellon, Caltech. Highest-paying jobs on earth. OPT allows 3 years of US work after STEM MS degree.",
        {
          salary: "$70K–150K starting",
          exam: "SAT + TOEFL/IELTS",
          duration: "4yr UG / 2yr MS",
        },
        [
          {
            icon: "coin",
            label: "UG Cost",
            val: "$30,000–70,000/year tuition. Merit scholarships available. Many students get 50–100% scholarships at smaller universities.",
          },
          {
            icon: "coin",
            label: "MS Cost",
            val: "$20,000–50,000/year. Teaching Assistantship (TA) or Research Assistantship (RA) covers full tuition + ₹1.2L/month stipend. Very common in public universities.",
          },
          {
            icon: "cert",
            label: "Exams",
            val: "SAT (for UG), GRE (for MS/PhD), TOEFL / IELTS for English, GMAT (for MBA)",
          },
          {
            icon: "trend",
            label: "OPT/H1B",
            val: "3-year OPT work permit after STEM graduation → H1B lottery → Green Card. Most IIT graduates at FAANG earn $120K–200K/year.",
          },
        ],
        [
          "12th PCM + SAT prep",
          "Apply to US universities",
          "UG (4yr) or MS (2yr)",
          "OPT Work Permit (3yr)",
          "H1B Visa → Green Card → Citizenship",
        ],
        [
          "SAT/GRE Score",
          "TOEFL 100+",
          "Strong SOP",
          "Research Experience",
          "Coding / Research",
        ],
      )}

      ${cgCard(
        "ab-germany",
        "#854F0B",
        "#FAEEDA",
        "engine",
        "Germany — Free Tuition Engineering",
        "IELTS / German B2 — Near-zero cost",
        "Study at TU Munich, RWTH Aachen, or KIT for almost FREE. German public universities charge only €300–500/semester in admin fees — one of the world's best educational values.",
        {
          salary: "€40,000–80,000 starting",
          exam: "IELTS 6.5 / German B2",
          duration: "3yr Bachelor / 2yr Master",
        },
        [
          {
            icon: "coin",
            label: "Cost",
            val: "Tuition = €0 at public universities. Living costs: €800–1,200/month. Students can work 20hr/week.",
          },
          {
            icon: "cert",
            label: "Req",
            val: "Bachelor's: German B1/B2 OR English-taught programs with IELTS 6.5. APS verification certificate mandatory for Indians (₹15,000, takes 3–4 months).",
          },
          {
            icon: "trend",
            label: "PR Path",
            val: "18-month job seeker visa after graduation → Blue Card (skilled worker) → Permanent Residency in 21 months if employed. Fastest PR among major countries.",
          },
        ],
        [
          "Learn German B2 / IELTS",
          "APS Certificate (4 months)",
          "Apply to German Universities (Uni-Assist)",
          "Bachelor/Master (2–4yr)",
          "Blue Card Job → PR in 21 months",
        ],
        [
          "German Language (B2)",
          "IELTS 6.5",
          "APS Certificate",
          "Strong Academic Record",
        ],
      )}

      ${cgCard(
        "ab-canada",
        "#A32D2D",
        "#FCEBEB",
        "mappin",
        "Canada — Easiest PR Path",
        "IELTS — Express Entry Immigration",
        "Canada is the most straightforward path to permanent residency for Indians. Post-Graduate Work Permit (PGWP) allows up to 3 years work. Express Entry PR in 6–12 months.",
        {
          salary: "CAD $50,000–90,000 starting",
          exam: "IELTS 6.5",
          duration: "3–4yr degree",
        },
        [
          {
            icon: "coin",
            label: "Cost",
            val: "CAD $15,000–35,000/year tuition. Diploma from community college (CAD $12,000/yr) also leads to PR. Ontario / BC / Alberta are top provinces.",
          },
          {
            icon: "trend",
            label: "PR Path",
            val: "Study → PGWP (up to 3yr work permit) → Express Entry CRS score → PR (6–12 months) → Citizenship in 3 years",
          },
          {
            icon: "school",
            label: "Diploma",
            val: "2yr college diploma in IT, Business, Nursing, Trades is fastest and cheapest route to Canadian PR.",
          },
        ],
        [
          "IELTS 6.5",
          "Canadian University / College",
          "PGWP Work Permit (1–3yr)",
          "Express Entry PR (6–12 months)",
          "Canadian Citizenship (3yr)",
        ],
        [
          "IELTS English",
          "Work Experience",
          "NOC Occupation Code",
          "Provincial Nomination",
        ],
      )}

      ${cgCard(
        "ab-uk",
        "#534AB7",
        "#EEEDFE",
        "building",
        "UK — Russell Group Universities",
        "IELTS — Post-Study Work Visa",
        "UK has the best Law, Management, Finance, Arts, and Sciences universities. Oxford, Cambridge, Imperial, LSE, UCL. The Graduate Route visa allows 2 years work after graduation.",
        {
          salary: "£30,000–70,000 starting",
          exam: "IELTS 6.5–7.5",
          duration: "3yr UG / 1yr PG",
        },
        [
          {
            icon: "coin",
            label: "Cost",
            val: "£15,000–38,000/year tuition. 1-year Master's is cheapest — total cost similar to 2yr US Master's but far shorter.",
          },
          {
            icon: "trend",
            label: "Work Visa",
            val: "Graduate Route: 2 years work after UG, 3 years after PhD. No job offer needed to get the visa — great flexibility.",
          },
        ],
        [
          "12th + IELTS 7.0",
          "Apply via UCAS (UG) or direct (PG)",
          "1–3yr Degree",
          "Graduate Route Visa (2yr)",
          "Skilled Worker Visa → ILR → Citizenship",
        ],
        ["IELTS 7.0+", "Strong Personal Statement", "A-Level equivalent marks"],
      )}

      ${cgCard(
        "ab-australia",
        "#0F6E56",
        "#E1F5EE",
        "mappin",
        "Australia — Work-Friendly Student Visa",
        "IELTS — 485 Visa after study",
        "Australia allows 48 hours work per fortnight on student visa. After graduation, Temporary Graduate (485) visa gives 2–4 years work. Strong demand for nurses, engineers, and accountants.",
        {
          salary: "AUD $60,000–90,000 starting",
          exam: "IELTS 6.5",
          duration: "3–4yr degree",
        },
        [
          {
            icon: "coin",
            label: "Cost",
            val: "AUD $20,000–45,000/year. Students can earn AUD $25–35/hour part-time — helps cover living costs significantly.",
          },
          {
            icon: "trend",
            label: "PR Path",
            val: "485 Visa (2–4yr) → Skilled Independent Visa (189) or State Nomination (190) → PR. High demand for nursing, accounting, IT, engineering.",
          },
        ],
        [
          "IELTS 6.5",
          "Australian University / TAFE",
          "485 Graduate Visa",
          "Skilled Migration Visa (189/190)",
          "PR → Citizenship",
        ],
        ["IELTS English", "Occupation in Demand List", "Points Test Score"],
      )}

      ${cgCard(
        "ab-mbbsabroad",
        "#993C1D",
        "#FAECE7",
        "stethoscope",
        "MBBS Abroad — Russia, Philippines, Georgia",
        "NEET required — affordable option",
        "MBBS in Russia, Philippines, Kazakhstan, or Georgia costs ₹20–40 lakh total vs ₹50–80 lakh in Indian private colleges. Degrees are WHO-recognised. Must clear India's NExT exam to practice back home.",
        {
          salary: "Doctor salary in India after return",
          exam: "NEET UG required",
          duration: "6 Years",
        },
        [
          {
            icon: "globe",
            label: "Countries",
            val: "Russia (largest Indian MBBS destination), Philippines (US-style curriculum, full English medium), Kazakhstan, Kyrgyzstan, Georgia, Bangladesh",
          },
          {
            icon: "school",
            label: "Cost",
            val: "₹20–40 lakh total (tuition + hostel + food) for 6 years in Russia or Philippines. Significantly cheaper than Indian private MBBS (₹50–1Cr).",
          },
          {
            icon: "school",
            label: "Important",
            val: "Must clear NExT (National Exit Test) to get MCI/NMC registration and practice in India. Choose only NMC-approved foreign medical colleges — check nmc.org.in.",
          },
        ],
        [
          "12th PCB + NEET Score",
          "Apply to NMC-approved Foreign College",
          "MBBS (6yr including internship)",
          "Return to India → NExT Exam",
          "MBBS Doctor in India",
        ],
        ["NEET Score", "Biology", "PCB Knowledge", "Adaptability"],
      )}

      ${cgCard(
        "ab-japan",
        "#185FA5",
        "#E6F1FB",
        "world",
        "Japan / South Korea — Scholarships",
        "JLPT · TOPIK — Growing option",
        "Japan and South Korea offer government scholarships covering full tuition + living. MEXT scholarship for Japan is full-funded. Strong for engineering, anime/design/fashion industries.",
        {
          salary: "¥3M–5M JPY starting",
          exam: "JLPT N2 / TOPIK 4",
          duration: "4yr degree",
        },
        [
          {
            icon: "coin",
            label: "MEXT",
            val: "Japanese Government MEXT Scholarship: full tuition + ¥117,000/month stipend + flight ticket. Apply through Indian Embassy.",
          },
          {
            icon: "briefcase",
            label: "Industries",
            val: "Japan: Robotics, AI, Automotive (Toyota/Honda), Anime/Design. South Korea: Samsung/LG/Hyundai, K-Pop, Gaming.",
          },
        ],
        [
          "Learn Japanese N2 / Korean TOPIK",
          "MEXT Scholarship Application",
          "Japanese University (4yr)",
          "Job Hunting in Japan",
          "Permanent Residency (5yr)",
        ],
        [
          "Japanese N2",
          "Technical Skills",
          "Adaptability",
          "Cultural Openness",
        ],
      )}
    </div>

    <div class="cg-alert">
      <p><strong>Key exams for studying abroad:</strong> SAT (USA undergraduate), IELTS / TOEFL (English proficiency — required everywhere), GRE (USA/Canada graduate programs), GMAT (MBA globally), LSAT (Law in USA/UK/Canada). For Germany and France, German/French B2 level proficiency is required for most public university programs. Always verify visa rules on the official embassy website — rules change frequently.</p>
    </div>
  </div>

  <div class="cg-alert" style="margin-top:24px;">
    <p><strong>Stream restrictions after 12th are mostly a myth.</strong> Science students can enter law, arts, commerce, or management. Commerce students can study law, tech (BCA/BSc CS), or civil services. Arts students can do law, MBA, civil services, journalism, film, psychology — even engineering via lateral entry pathways. <strong>Your stream gives you a head start, not a wall.</strong> Talk to a career counsellor and always check official eligibility before making decisions.</p>
  </div>
</div>`;
}

// ===================================================================
// HELPER FUNCTIONS — same interface as original, fully responsive
// ===================================================================

function cgSwitchStream(streamId, btn) {
  STATE.currentCareerStream = streamId;
  document
    .querySelectorAll(".cg-panel")
    .forEach((p) => p.classList.remove("active"));
  document
    .querySelectorAll(".cg-stab")
    .forEach((b) => b.classList.remove("active"));
  const panel = document.getElementById("cgp-" + streamId);
  if (panel) panel.classList.add("active");
  if (btn) btn.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function cgToggleCard(id, btn) {
  const det = document.getElementById("cgdet-" + id);
  if (!det) return;
  const isOpen = det.classList.contains("visible");
  det.classList.toggle("visible", !isOpen);
  const card = document.getElementById("cgcard-" + id);
  if (card) card.classList.toggle("cgc-open", !isOpen);
  if (btn) {
    btn.classList.toggle("open", !isOpen);
    btn.querySelector("span").textContent = isOpen
      ? "View details"
      : "Hide details";
  }
}

function cgSvg(key, size) {
  const paths = {
    atom: '<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>',
    chart:
      '<path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/>',
    book: '<path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    globe:
      '<circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/>',
    lightning:
      '<path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>',
    hospital:
      '<path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21"/>',
    flask:
      '<path d="M9 3h6m-5 0v6.5L5.52 17A2 2 0 007 21h10a2 2 0 001.48-3.5L14 9.5V3"/><path d="M6 17h12"/>',
    cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2"/>',
    stethoscope:
      '<path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/>',
    building:
      '<path d="M6 2h12v20H6zM2 22h20M12 6h.01M12 10h.01M12 14h.01M12 18h.01M8 6h.01M8 10h.01M8 14h.01M8 18h.01M16 6h.01M16 10h.01M16 14h.01M16 18h.01"/>',
    pill: '<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7z"/><path d="M8.5 8.5 16 16"/>',
    heart:
      '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    brain:
      '<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z"/>',
    sword:
      '<polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" y1="19" x2="19" y2="13"/><line x1="16" y1="16" x2="20" y2="20"/><line x1="19" y1="21" x2="21" y2="19"/>',
    anchor:
      '<circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>',
    plane:
      '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 3 21 3s-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
    flame:
      '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
    badge:
      '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
    train:
      '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><path d="M8 21l4-4 4 4"/><path d="M2 17l3-3 3 3 4-4 3 3 3-3"/>',
    document:
      '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>',
    chalkboard:
      '<path d="M2 3h20v14H2z"/><path d="M8 21h8"/><path d="M12 17v4"/>',
    crown: '<path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z"/><path d="M2 20h20"/>',
    scale:
      '<path d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"/>',
    gavel:
      '<path d="m14 13-8.5 8.5a2.121 2.121 0 0 1-3-3L11 10"/><path d="m16 16 6-6"/><path d="m8 8 6-6"/><path d="m9 7 8 8"/>',
    camera:
      '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
    palette:
      '<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.477-1.083a1.688 1.688 0 0 1 1.153-2.927H16c3.313 0 6-2.687 6-6C22 6.5 17.523 2 12 2z"/>',
    briefcase:
      '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    coin: '<circle cx="12" cy="12" r="10"/><path d="M12 6v12M8 10h8M8 14h8"/>',
    bank: '<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2l10 7H2l10-7z"/>',
    trophy:
      '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2z"/>',
    cert: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="9 15 12 18 15 15"/><line x1="12" y1="12" x2="12" y2="18"/>',
    school:
      '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    trend:
      '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
    world:
      '<circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/>',
    mappin:
      '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    engine: '<path d="M2 20V4l20 8-20 8z"/>',
    teach: '<path d="M2 3h20v14H2z"/><path d="M8 21h8"/><path d="M12 17v4"/>',
  };
  const d = paths[key] || paths["building"];
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="${size}" height="${size}">${d}</svg>`;
}

function cgIntro(stream, fromColor, toColor, iconKey, bold, desc) {
  return `
<div class="cg-stream-intro">
  <div class="cg-intro-icon" style="background:linear-gradient(135deg,${fromColor},${toColor});color:#fff">
    ${cgSvg(iconKey, 24)}
  </div>
  <div class="cg-intro-text">
    <h3>${bold}</h3>
    <p>${desc}</p>
  </div>
</div>`;
}

function cgCatLabel(iconKey, label) {
  return `
<div class="cg-cat-label">
  ${cgSvg(iconKey, 14)} ${label}
</div>`;
}

function cgCard(
  id,
  iconColor,
  iconBg,
  iconKey,
  title,
  tag,
  desc,
  pills,
  details,
  roadmap,
  skills,
) {
  const pillHTML = `
    <span class="cgc-pill cgc-pill-salary">${pills.salary}</span>
    <span class="cgc-pill cgc-pill-exam">${pills.exam}</span>
    <span class="cgc-pill cgc-pill-dur">${pills.duration}</span>
  `;

  const svgMap = {
    school:
      '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    cert: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
    briefcase:
      '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/>',
    trend:
      '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
    coin: '<circle cx="12" cy="12" r="10"/><path d="M12 6v12"/>',
  };

  const detailsHTML = details
    .map((d) => {
      const svgPath = svgMap[d.icon] || svgMap["cert"];
      return `
    <div class="cgc-drow">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14">${svgPath}</svg>
      <span class="cgc-dlabel">${d.label}</span>
      <span class="cgc-dval">${d.val}</span>
    </div>`;
    })
    .join("");

  const roadmapHTML =
    roadmap && roadmap.length > 0
      ? `
  <div class="cgc-roadmap">
    <div class="cgc-roadmap-label">Roadmap</div>
    <div class="cgc-roadmap-steps">
      ${roadmap
        .map(
          (s, i) => `
        ${i > 0 ? '<span class="cgc-rarrow">→</span>' : ""}
        <span class="cgc-rs">${s}</span>
      `,
        )
        .join("")}
    </div>
  </div>`
      : "";

  const skillsHTML =
    skills && skills.length > 0
      ? `
  <div class="cgc-skills">
    ${skills.map((s) => `<span class="cgc-skill">${s}</span>`).join("")}
  </div>`
      : "";

  return `
<div class="cgc" id="cgcard-${id}">
  <div class="cgc-head">
    <div class="cgc-icon" style="background:${iconBg};color:${iconColor}">
      ${cgSvg(iconKey, 22)}
    </div>
    <div style="min-width:0;flex:1;">
      <div class="cgc-title">${title}</div>
      <div class="cgc-tag">${tag}</div>
    </div>
  </div>
  <p class="cgc-desc">${desc}</p>
  <div class="cgc-pills">${pillHTML}</div>
  <button class="cgc-toggle-btn" onclick="cgToggleCard('${id}',this)">
    <span>View details</span>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="14" height="14"><path d="M6 9l6 6 6-6"/></svg>
  </button>
  <div class="cgc-details" id="cgdet-${id}">
    ${detailsHTML}
    ${roadmapHTML}
    ${skillsHTML}
  </div>
</div>`;
}

function switchCareerStream(s) {
  STATE.currentCareerStream = s;
  const mc = document.getElementById("appMain");
  if (mc) mc.innerHTML = renderCareer();
}

// ===== PROGRESS =====
function renderProgress() {
  const completed = DB.get("completedTopics") || {};
  const history = DB.get("watchHistory") || [];
  const streak = DB.get("streak") || { count: 0 };
  const user = DB.get("user");
  const stream = user ? user.stream || "Science" : "Science";
  const subjects = STREAM_SUBJECTS[stream] || STREAM_SUBJECTS["Science"];
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
                const col = SUBJ_ACCENT[s] || "#4f8ef7";
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
  const stream = user.stream || "Science";
  const subjects = STREAM_SUBJECTS[stream] || STREAM_SUBJECTS["Science"];
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
            ${subjects
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
                <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px"><span style="color:${SUBJ_ACCENT[s] || "#4f8ef7"};font-weight:700">${s}</span><span>${done}/${total} chapters</span></div>
                <div class="sp-bar-track" style="height:6px"><div class="sp-bar-fill" style="width:${pct}%;background:${SUBJ_ACCENT[s] || "#4f8ef7"}"></div></div>
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
  updateDynamicNavigation();
  showToast("Profile saved!", "success");

  // Re-render profile dynamically
  if (STATE.currentSection === "profile") {
    showSection("profile");
  }
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

// ===== CUSTOM MODAL FOR DELETION =====
function createCustomModal(
  title,
  message,
  confirmText,
  confirmColor,
  onConfirm,
) {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.style.zIndex = "3000";
  overlay.innerHTML = `
    <div class="modal-card" style="max-width:400px;text-align:center;padding:32px 24px;">
      <div style="width:56px;height:56px;border-radius:50%;background:${confirmColor}22;color:${confirmColor};display:flex;align-items:center;justify-content:center;margin:0 auto 20px;">
        ${icon("trash", 28)}
      </div>
      <h2 style="font-size:22px;font-weight:800;margin-bottom:12px;">${title}</h2>
      <p style="color:var(--text-2);font-size:15px;margin-bottom:24px;line-height:1.6;">${message}</p>
      <div style="display:flex;gap:12px;justify-content:center;">
        <button class="btn-ghost" style="flex:1;" onclick="this.closest('.modal-overlay').remove()">Cancel</button>
        <button class="btn-primary" style="flex:1;background:${confirmColor};box-shadow:0 4px 15px ${confirmColor}30;" id="custom-modal-confirm">${confirmText}</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  document.getElementById("custom-modal-confirm").onclick = () => {
    onConfirm();
    overlay.remove();
  };
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
              <div class="class-toggle" style="display:flex">
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
            <div class="settings-row"><div class="sr-info"><h4>Delete account & reset</h4><p>Delete ALL data and start fresh — cannot be undone</p></div><button class="btn-ghost btn-sm" style="color:var(--red);border-color:var(--red-dim);background:var(--red-dim);" onclick="resetEverything()">${icon("trash", 13)} Delete Account</button></div>
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
  if (el) {
    if (settings[key]) el.classList.add("on");
    else el.classList.remove("on");
  }
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
  if (btn11) {
    btn11.classList.add("active");
    btn12.classList.remove("active");
  }
  if (cls === "12" && btn12) {
    btn12.classList.add("active");
    btn11.classList.remove("active");
  }
  showToast("Switched to Class " + cls, "info");
}

function clearData(key) {
  const labels = {
    watchHistory: "watch history",
    completedTopics: "all progress",
    savedVideos: "saved videos",
  };
  const label = labels[key] || key;
  createCustomModal(
    "Clear " + label.replace(/\b\w/g, (c) => c.toUpperCase()),
    `Are you sure you want to clear your ${label}? This cannot be undone.`,
    "Clear Data",
    "var(--red)",
    () => {
      DB.del(key);
      showToast(
        label.charAt(0).toUpperCase() + label.slice(1) + " cleared",
        "success",
      );
    },
  );
}

function resetEverything() {
  createCustomModal(
    "Delete Account & Data",
    "This will completely erase your profile, study progress, notes, settings, and watch history. This action <b>CANNOT be undone</b>. Are you absolutely sure?",
    "Delete Everything",
    "#ef4444",
    () => {
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
      showToast("Account deleted successfully. Restarting...", "info");
      setTimeout(() => location.reload(), 1500);
    },
  );
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
