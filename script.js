/* ===================================================
   OdishaLearn — CHSE Odisha Platform Script
   Complete Class 11 & 12 Syllabus (2025-26)
   =================================================== */

// ===== SVG ICON LIBRARY =====
const ICONS = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/></svg>`,
  map: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"/></svg>`,
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
  link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"/><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  bell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/></svg>`,
  fire: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"/><path d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"/></svg>`,
  target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/></svg>`,
  graduation: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5z"/></svg>`,
  video: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/></svg>`,
  listBullet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/></svg>`,
  folder: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 4v16m8-8H4"/></svg>`,
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
  academic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5z"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/></svg>`,
  trophy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"/></svg>`,
  odia: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3C7 3 4 7 4 12s3 9 8 9 8-4 8-9-3-9-8-9z"/><path d="M8 12c0-2 1.5-4 4-4s4 2 4 4-1.5 4-4 4"/><path d="M12 8v8"/></svg>`,
  grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>`,
  hospital: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"/></svg>`,
  bank: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"/></svg>`,
  scale: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"/></svg>`,
  briefcase: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="12.01"/></svg>`,
  brain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2C9.5 2 7 4 7 7c0 1-.3 1.9-.8 2.6C5.5 10.5 5 11.7 5 13c0 3 2.5 5.5 5.5 6.5v1.5c0 .5.5 1 1 1h1c.5 0 1-.5 1-1V19.5c3-1 5.5-3.5 5.5-6.5 0-1.3-.5-2.5-1.2-3.4-.5-.7-.8-1.6-.8-2.6C17 4 14.5 2 12 2z"/></svg>`,
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
// Aap yahan apne YouTube links add kar sakte hain `videoUrl` mein.
const SYLLABUS = {
  Physics: {
    11: [
      {
        unit: "Unit I: Physical World and Measurement",
        chapters: [
          {
            id: "ph11_1_1",
            title: "Physical World",
            desc: "Scope and excitement of Physics. Physics, technology and society. Fundamental forces in nature. Nature of physical laws.",
            videoUrl: "https://youtu.be/tx76BJIqOd4?si=bCBWKIt53tHIdKB0",
          },
          {
            id: "ph11_1_2",
            title: "Units and Measurements",
            desc: "Need for measurement. Units of measurement. Systems of units. SI units. Significant figures. Errors in measurement. Dimensional analysis and applications.",
            videoUrl: "https://youtu.be/tx76BJIqOd4?si=bCBWKIt53tHIdKB0",
          },
        ],
      },
      {
        unit: "Unit II: Kinematics",
        chapters: [
          {
            id: "ph11_2_1",
            title: "Motion in a Straight Line",
            desc: "Frame of reference. Displacement. Velocity. Acceleration. Equations of motion. Relative velocity. Graphs of motion.",
            videoUrl: "https://youtu.be/HYQdPGN3ZXQ?si=amC5Zsss7loZndIc",
          },
          {
            id: "ph11_2_2",
            title: "Motion in a Plane",
            desc: "Scalar and vector quantities. Position and displacement vectors. Addition and subtraction of vectors. Projectile motion. Uniform circular motion. Relative velocity in 2D.",
            videoUrl: "https://youtu.be/JYdznU0Zps0?si=BHFX9siB6jeBBU-a",
          },
        ],
      },
      {
        unit: "Unit III: Laws of Motion",
        chapters: [
          {
            id: "ph11_3_1",
            title: "Laws of Motion",
            desc: "Aristotle's fallacy. Newton's first law of motion. Momentum and Newton's second law. Newton's third law. Conservation of momentum. Friction. Circular motion dynamics.",
            videoUrl: "https://youtu.be/PLQ0_vZF25o?si=yttDw84w2dIBe_w3",
          },
        ],
      },
      {
        unit: "Unit IV: Work, Energy and Power",
        chapters: [
          {
            id: "ph11_4_1",
            title: "Work, Energy and Power",
            desc: "Work done by a constant and variable force. Kinetic energy. Work-energy theorem. Power. Potential energy. Conservation of mechanical energy. Collisions.",
            videoUrl: "https://youtu.be/eACeA8W0tCQ?si=p8JWqvXs2vxo5jZB",
          },
        ],
      },
      {
        unit: "Unit V: Motion of System of Particles and Rigid Body",
        chapters: [
          {
            id: "ph11_5_1",
            title: "System of Particles and Rotational Motion",
            desc: "Centre of mass. Moment of inertia. Torque. Angular momentum. Conservation of angular momentum. Rolling motion. Equilibrium of rigid bodies.",
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
            desc: "Kepler's laws of planetary motion. Universal law of gravitation. Gravitational potential energy. Escape speed. Earth satellites. Orbital velocity. Weightlessness.",
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
            desc: "Stress and strain. Hooke's law. Elastic moduli — Young's modulus, bulk modulus, shear modulus. Applications.",
            videoUrl: "",
          },
          {
            id: "ph11_7_2",
            title: "Mechanical Properties of Fluids",
            desc: "Pressure. Pascal's law. Buoyancy. Bernoulli's theorem. Viscosity. Stokes' law. Reynolds number. Surface tension.",
            videoUrl: "",
          },
          {
            id: "ph11_7_3",
            title: "Thermal Properties of Matter",
            desc: "Temperature scales. Thermal expansion. Specific heat capacity. Calorimetry. Change of state. Heat transfer — conduction, convection, radiation.",
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
            desc: "Thermal equilibrium. Zeroth law. First law of thermodynamics. Isothermal and adiabatic processes. Second law. Heat engines and refrigerators.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit IX: Behaviour of Perfect Gases and Kinetic Theory",
        chapters: [
          {
            id: "ph11_9_1",
            title: "Kinetic Theory",
            desc: "Equation of state of a perfect gas. Kinetic theory of gases. Degrees of freedom. Specific heat capacities. Mean free path.",
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
            desc: "Periodic and oscillatory motion. Simple harmonic motion. Uniform circular motion and SHM. Energy in SHM. Damped and forced oscillations. Resonance.",
            videoUrl: "",
          },
          {
            id: "ph11_10_2",
            title: "Waves",
            desc: "Wave motion. Speed of travelling wave. Principle of superposition. Reflection. Doppler effect. Standing waves and normal modes. Beats.",
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
            desc: "Electric charge. Conductors and insulators. Coulomb's law. Electric field. Electric field lines. Electric flux. Gauss's theorem and applications.",
            videoUrl: "",
          },
          {
            id: "ph12_1_2",
            title: "Electrostatic Potential and Capacitance",
            desc: "Electric potential. Equipotential surfaces. Relation between field and potential. Potential energy of a system. Conductors in electrostatic field. Capacitors and capacitance. Dielectrics.",
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
            desc: "Electric current. Drift velocity. Ohm's law. Resistance. Resistivity. Combination of resistors. Kirchhoff's laws. Wheatstone bridge. Potentiometer.",
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
            desc: "Magnetic force. Motion in magnetic field. Biot-Savart law. Ampere's law. Solenoid and toroid. Moving coil galvanometer. Cyclotron.",
            videoUrl: "",
          },
          {
            id: "ph12_3_2",
            title: "Magnetism and Matter",
            desc: "Bar magnet. Gauss's law of magnetism. Terrestrial magnetism. Magnetisation. Magnetic susceptibility. Diamagnetic, paramagnetic, ferromagnetic materials.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit IV: Electromagnetic Induction and Alternating Currents",
        chapters: [
          {
            id: "ph12_4_1",
            title: "Electromagnetic Induction",
            desc: "Faraday's laws of induction. Lenz's law. Inductance. Mutual inductance. AC generator. Energy stored in inductor.",
            videoUrl: "",
          },
          {
            id: "ph12_4_2",
            title: "Alternating Current",
            desc: "AC voltage. Phasors. AC through R, L, C. LCR series circuit. Resonance. Power factor. Transformer.",
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
            desc: "Displacement current. Maxwell's equations. Electromagnetic waves and their characteristics. Electromagnetic spectrum — radio, microwaves, IR, UV, X-rays, gamma rays.",
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
            desc: "Reflection and refraction at plane and curved surfaces. TIR. Refraction through prism. Optical instruments — microscope, telescope.",
            videoUrl: "",
          },
          {
            id: "ph12_6_2",
            title: "Wave Optics",
            desc: "Huygens principle. Interference — Young's double slit experiment. Diffraction — single slit. Polarisation.",
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
            desc: "Wave-particle duality. Photoelectric effect. Einstein's photoelectric equation. De Broglie hypothesis. Davisson-Germer experiment.",
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
            desc: "Thomson model. Rutherford experiment. Bohr model. Hydrogen spectrum. X-rays.",
            videoUrl: "",
          },
          {
            id: "ph12_8_2",
            title: "Nuclei",
            desc: "Nuclear composition and size. Binding energy. Nuclear reactions. Radioactivity. Nuclear fission and fusion.",
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
            desc: "Energy bands. Semiconductor diode. Zener diode. Transistor — characteristic, amplifier and switch. Logic gates. Integrated circuits.",
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
            desc: "Elements of communication system. Bandwidth of signals and transmission medium. Propagation of EM waves. Modulation — amplitude and frequency. Internet and mobile communication.",
            videoUrl: "",
          },
        ],
      },
    ],
  },

  Chemistry: {
    11: [
      {
        unit: "Unit I: Some Basic Concepts of Chemistry",
        chapters: [
          {
            id: "ch11_1_1",
            title: "Some Basic Concepts of Chemistry",
            desc: "Importance of chemistry. Nature of matter. Properties of matter and their measurement. Laws of chemical combination. Dalton's atomic theory. Mole concept and molar mass. Stoichiometry.",
            videoUrl: "https://youtu.be/1t9Dq4wyhBw?si=FaTSdI_8t5uv-V3w",
          },
        ],
      },
      {
        unit: "Unit II: Structure of Atom",
        chapters: [
          {
            id: "ch11_2_1",
            title: "Structure of Atom",
            desc: "Discovery of electron, proton and neutron. Atomic models — Thomson, Rutherford, Bohr. Quantum mechanical model. Quantum numbers. Electronic configuration. Aufbau principle.",
            videoUrl: "https://youtu.be/S7uLXHDTamo?si=fdWb0nNCqeO-rcq_",
          },
        ],
      },
      {
        unit: "Unit III: Classification of Elements and Periodicity",
        chapters: [
          {
            id: "ch11_3_1",
            title: "Classification of Elements and Periodicity in Properties",
            desc: "Mendeleev's periodic table. Modern periodic law. Long form of the periodic table. Periodic trends — atomic radius, ionization enthalpy, electron gain enthalpy, electronegativity.",
            videoUrl: "https://youtu.be/2qFfEuUzqmk?si=Fl64PrYj_lfgpsG4",
          },
        ],
      },
      {
        unit: "Unit IV: Chemical Bonding and Molecular Structure",
        chapters: [
          {
            id: "ch11_4_1",
            title: "Chemical Bonding and Molecular Structure",
            desc: "Kössel-Lewis approach. Ionic bond. Covalent bond. VSEPR theory. Hybridisation. Bond parameters. Molecular orbital theory.",
            videoUrl: "https://youtu.be/qle-q0CxtJk?si=i0HEtU98nkJHQieN",
          },
        ],
      },
      {
        unit: "Unit V: States of Matter: Gases and Liquids",
        chapters: [
          {
            id: "ch11_5_1",
            title: "States of Matter: Gases and Liquids",
            desc: "Three states of matter. Gas laws — Boyle's, Charles', Gay-Lussac's. Avogadro's law. Ideal gas equation. Kinetic molecular theory. van der Waals equation. Liquefaction of gases.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit VI: Thermodynamics",
        chapters: [
          {
            id: "ch11_6_1",
            title: "Thermodynamics",
            desc: "System and surroundings. First law of thermodynamics. Enthalpy. Hess's law. Entropy. Gibbs energy. Spontaneity.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit VII: Equilibrium",
        chapters: [
          {
            id: "ch11_7_1",
            title: "Equilibrium",
            desc: "Equilibrium in physical and chemical processes. Law of chemical equilibrium. Le Chatelier's principle. Ionic equilibrium. pH. Buffer solutions. Solubility product.",
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
            desc: "Concept of oxidation and reduction. Oxidation number. Balancing redox reactions. Electrochemical series.",
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
            desc: "Position of hydrogen in periodic table. Isotopes. Preparation and properties of hydrogen. Water and its structure. Heavy water. Hydrogen peroxide. Hydrogen as a fuel.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit X: The s-Block Elements",
        chapters: [
          {
            id: "ch11_10_1",
            title: "The s-Block Elements",
            desc: "Group 1 and Group 2 elements. Electronic configuration. General characteristics. Anomalous properties of lithium and beryllium. Important compounds — NaOH, NaCl, Na2CO3, CaCO3.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit XI: Some p-Block Elements",
        chapters: [
          {
            id: "ch11_11_1",
            title: "Some p-Block Elements",
            desc: "Introduction to p-block. Group 13 — boron family. Group 14 — carbon family. Allotropes. Important compounds and their uses.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit XII: Organic Chemistry — Basic Principles",
        chapters: [
          {
            id: "ch11_12_1",
            title: "Organic Chemistry: Some Basic Principles and Techniques",
            desc: "General introduction. Classification and IUPAC nomenclature. Electronic displacement effects. Purification of organic compounds. Qualitative and quantitative analysis.",
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
            desc: "Classification of hydrocarbons. Alkanes — nomenclature, isomerism, reactions. Alkenes — structure, reactions, Markovnikov's rule. Alkynes. Aromatic hydrocarbons. Carcinogenicity and toxicity.",
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
            desc: "Environmental pollution. Atmospheric pollution — tropospheric and stratospheric. Water pollution. Soil pollution. Industrial waste. Strategies to control environmental pollution. Green chemistry.",
            videoUrl: "",
          },
        ],
      },
    ],
    12: [
      {
        unit: "Unit I: The Solid State",
        chapters: [
          {
            id: "ch12_1_1",
            title: "The Solid State",
            desc: "Amorphous and crystalline solids. Crystal lattices and unit cells. Close-packed structures. Packing efficiency. Imperfections in solids. Electrical and magnetic properties.",
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
            desc: "Types of solutions. Expressing concentration. Vapour pressure of solutions. Raoult's law. Colligative properties — lowering of VP, elevation in BP, depression in FP, osmotic pressure. Abnormal molar masses.",
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
            desc: "Electrochemical cells. Galvanic cells. Nernst equation. Conductance of electrolytic solutions. Electrolytic cells. Batteries. Fuel cells. Corrosion.",
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
            desc: "Rate of a chemical reaction. Factors affecting rate. Rate expression and rate constant. Order and molecularity. Integrated rate equations. Temperature dependence — Arrhenius equation.",
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
            desc: "Adsorption — physisorption and chemisorption. Catalysis. Colloids. Types of colloids. Emulsions. Colloids in industry.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit VI: General Principles and Processes of Isolation of Elements",
        chapters: [
          {
            id: "ch12_6_1",
            title: "General Principles and Processes of Isolation of Elements",
            desc: "Occurrence of metals. Concentration of ores. Extraction of crude metal. Thermodynamic principles. Electrochemical principles. Refining. Uses of aluminium, copper, zinc and iron.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit VII: The p-Block Elements",
        chapters: [
          {
            id: "ch12_7_1",
            title: "The p-Block Elements (Group 15–18)",
            desc: "Group 15 — nitrogen family: N2, NH3, HNO3, phosphorus allotropes. Group 16 — oxygen family: O2, ozone, sulphuric acid. Group 17 — halogens. Group 18 — noble gases.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit VIII: The d- and f-Block Elements",
        chapters: [
          {
            id: "ch12_8_1",
            title: "The d- and f-Block Elements",
            desc: "Electronic configuration. Properties of transition elements. Potassium permanganate. Potassium dichromate. Lanthanoids and actinoids.",
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
            desc: "Werner's theory. IUPAC nomenclature. Bonding in coordination compounds. Isomerism. Stability. Applications in analytical chemistry, extraction of metals and biological systems.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit X: Haloalkanes and Haloarenes",
        chapters: [
          {
            id: "ch12_10_1",
            title: "Haloalkanes and Haloarenes",
            desc: "Classification. IUPAC nomenclature. Preparation. Physical and chemical properties. SN1 and SN2 mechanisms. Polyhalogen compounds.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit XI: Alcohols, Phenols and Ethers",
        chapters: [
          {
            id: "ch12_11_1",
            title: "Alcohols, Phenols and Ethers",
            desc: "Classification. IUPAC nomenclature. Preparation and properties of alcohols. Phenols — acidity, reactions. Ethers — preparation and reactions. Williamson synthesis.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit XII: Aldehydes, Ketones and Carboxylic Acids",
        chapters: [
          {
            id: "ch12_12_1",
            title: "Aldehydes, Ketones and Carboxylic Acids",
            desc: "Nomenclature. Structure of carbonyl group. Preparation. Nucleophilic addition. Aldol condensation. Cannizzaro reaction. Acidic strength and reactions of carboxylic acids.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit XIII: Organic Compounds Containing Nitrogen",
        chapters: [
          {
            id: "ch12_13_1",
            title: "Organic Compounds Containing Nitrogen",
            desc: "Structure and classification of amines. Preparation and properties. Diazonium salts — preparation and reactions. Coupling reactions.",
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
            desc: "Carbohydrates — classification, structure. Proteins — structure. Vitamins — classification. Nucleic acids — DNA and RNA structure. Enzymes.",
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
            desc: "Classification of polymers. Types of polymerisation. Some commercially important polymers — polyethylene, nylon, polyester, bakelite, rubber. Biodegradable polymers.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit XVI: Chemistry in Everyday Life",
        chapters: [
          {
            id: "ch12_16_1",
            title: "Chemistry in Everyday Life",
            desc: "Drugs and their classification. Drug-target interaction. Therapeutic action. Chemicals in food — preservatives, antioxidants. Cleansing agents.",
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
            desc: "Sets and their representations. Empty, finite, infinite sets. Subsets. Power set. Venn diagrams. Union and intersection. Complement. Cartesian product.",
            videoUrl: "https://youtu.be/F_7WUK7htRg?si=g-5qcUxRivEyfJMO",
          },
          {
            id: "ma11_1_2",
            title: "Relations and Functions",
            desc: "Ordered pairs. Cartesian product of sets. Relations — domain, codomain, range. Types of functions. Composition and invertible functions. Binary operations.",
            videoUrl: "https://youtu.be/4VXUlNRlT3c?si=1xms6gtlPi5IbnFH",
          },
          {
            id: "ma11_1_3",
            title: "Trigonometric Functions",
            desc: "Positive and negative angles. Measuring angles. Trigonometric functions. Graphs. Sum and difference formulae. Multiple and sub-multiple angles. General solutions.",
            videoUrl: "https://youtu.be/kcSMOgFRp6w?si=hiIWyIeRseTAy71S",
          },
        ],
      },
      {
        unit: "Unit II: Algebra",
        chapters: [
          {
            id: "ma11_2_1",
            title: "Principle of Mathematical Induction",
            desc: "Motivation. Principle of mathematical induction and simple applications.",
            videoUrl: "",
          },
          {
            id: "ma11_2_2",
            title: "Complex Numbers and Quadratic Equations",
            desc: "Imaginary number. Complex numbers. Modulus. Conjugate. Argand plane. Polar form. Square root. Quadratic equations with complex roots.",
            videoUrl: "",
          },
          {
            id: "ma11_2_3",
            title: "Linear Inequalities",
            desc: "Inequalities. Algebraic solutions of linear inequalities in one variable. Graphical solution of linear inequalities in two variables.",
            videoUrl: "",
          },
          {
            id: "ma11_2_4",
            title: "Permutations and Combinations",
            desc: "Fundamental principle of counting. Factorial. Permutations — nPr. Combinations — nCr and properties. Applications.",
            videoUrl: "",
          },
          {
            id: "ma11_2_5",
            title: "Binomial Theorem",
            desc: "History. Statement of binomial theorem for positive integral indices. Pascal's triangle. General and middle term. Simple applications.",
            videoUrl: "",
          },
          {
            id: "ma11_2_6",
            title: "Sequences and Series",
            desc: "Sequences and series. Arithmetic progression — AP. Geometric progression — GP. Arithmetic mean and geometric mean. Sum to n terms. Infinite GP. Special series.",
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
            desc: "Slope of a line. Various forms of equations of lines. Distance of a point from a line. Angle between two lines. Family of lines.",
            videoUrl: "",
          },
          {
            id: "ma11_3_2",
            title: "Conic Sections",
            desc: "Sections of a cone. Circle — standard form. Parabola. Ellipse. Hyperbola — standard equations and properties.",
            videoUrl: "",
          },
          {
            id: "ma11_3_3",
            title: "Introduction to Three Dimensional Geometry",
            desc: "Coordinate axes. Coordinate planes. Coordinates of a point. Distance between two points. Section formula.",
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
            desc: "Intuitive idea of limits. Limits of polynomials, rational and trigonometric functions. Derivatives — introduction. Algebra of derivatives. Derivatives of polynomial and trigonometric functions.",
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
            desc: "Mathematically acceptable statements. Connecting words — and, or, there exists, for all. Negation. Contradiction. Converse and contrapositive.",
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
            desc: "Measures of dispersion. Range. Mean deviation. Variance and standard deviation. Analysis of frequency distributions.",
            videoUrl: "",
          },
          {
            id: "ma11_6_2",
            title: "Probability",
            desc: "Random experiments. Events. Axiomatic approach. Addition theorem. Conditional probability. Multiplication theorem. Independent events. Bayes' theorem.",
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
            desc: "Types of relations — reflexive, symmetric, transitive, equivalence. Types of functions — one-one, onto, bijective. Composition. Invertible functions. Binary operations.",
            videoUrl: "",
          },
          {
            id: "ma12_1_2",
            title: "Inverse Trigonometric Functions",
            desc: "Basic concepts. Properties. Principal value branch. Graphs. Elementary properties of inverse trigonometric functions.",
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
            desc: "Concept and notation. Order. Equality. Types. Zero matrix. Transpose. Symmetric and skew-symmetric. Addition, multiplication and scalar multiplication. Invertible matrices.",
            videoUrl: "",
          },
          {
            id: "ma12_2_2",
            title: "Determinants",
            desc: "Determinant of a matrix. Properties. Cofactors. Adjoint. Inverse. Applications — area of triangle, Cramer's rule. Consistency of system of equations.",
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
            desc: "Continuity of a function. Differentiability. Derivatives of composite, implicit, inverse trigonometric, exponential, logarithmic functions. Rolle's and Lagrange's mean value theorems.",
            videoUrl: "",
          },
          {
            id: "ma12_3_2",
            title: "Applications of Derivatives",
            desc: "Rate of change. Increasing and decreasing functions. Tangents and normals. Approximations. Maxima and minima — first and second derivative tests.",
            videoUrl: "",
          },
          {
            id: "ma12_3_3",
            title: "Integrals",
            desc: "Integration as inverse of differentiation. Integration by substitution, partial fractions, by parts. Definite integrals. Fundamental theorem of calculus.",
            videoUrl: "",
          },
          {
            id: "ma12_3_4",
            title: "Applications of Integrals",
            desc: "Area under simple curves. Area between curves using definite integration. Applications to real-world situations.",
            videoUrl: "",
          },
          {
            id: "ma12_3_5",
            title: "Differential Equations",
            desc: "Definition, order and degree. General and particular solutions. Formation of DE. Solution — variable separable, homogeneous, linear.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit IV: Vector Algebra and Three Dimensional Geometry",
        chapters: [
          {
            id: "ma12_4_1",
            title: "Vector Algebra",
            desc: "Vectors and scalars. Direction cosines. Types of vectors. Addition. Scalar and vector products. Scalar triple product.",
            videoUrl: "",
          },
          {
            id: "ma12_4_2",
            title: "Three Dimensional Geometry",
            desc: "Direction cosines and ratios. Straight line in space. Angle between lines, planes. Skew lines. Shortest distance. Equation of a plane.",
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
            desc: "Introduction. Related terminology — constraints, objective function, feasible region. Graphical method. Types of LP problems — diet, manufacturing, transportation.",
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
            desc: "Conditional probability. Multiplication theorem. Independent events. Total probability. Bayes' theorem. Random variable. Probability distribution. Bernoulli trials. Binomial distribution.",
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
            desc: "What is living? Biodiversity. Taxonomic categories. Taxonomical aids — herbarium, botanical gardens, museum, zoological parks, keys.",
            videoUrl: "",
          },
          {
            id: "bi11_1_2",
            title: "Biological Classification",
            desc: "Two kingdom classification. Five kingdom classification — Monera, Protista, Fungi, Plantae, Animalia. Viruses, viroids, lichens.",
            videoUrl: "",
          },
          {
            id: "bi11_1_3",
            title: "Plant Kingdom",
            desc: "Algae, Bryophytes, Pteridophytes, Gymnosperms, Angiosperms. Plant life cycles and alternation of generations.",
            videoUrl: "",
          },
          {
            id: "bi11_1_4",
            title: "Animal Kingdom",
            desc: "Basis of classification. Non-chordata — Porifera to Echinodermata. Chordata — Cyclostomata to Mammalia. Salient features.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit II: Structural Organisation in Animals and Plants",
        chapters: [
          {
            id: "bi11_2_1",
            title: "Morphology of Flowering Plants",
            desc: "Morphology of root, stem, leaf. Modifications. Inflorescence. Flower, fruit and seed. Description of families — Fabaceae, Solanaceae, Liliaceae.",
            videoUrl: "",
          },
          {
            id: "bi11_2_2",
            title: "Anatomy of Flowering Plants",
            desc: "Plant tissues. Tissue systems. Anatomy of dicotyledonous and monocotyledonous plants. Secondary growth.",
            videoUrl: "",
          },
          {
            id: "bi11_2_3",
            title: "Structural Organisation in Animals",
            desc: "Tissues. Animal organ and organ system. Morphology of cockroach and frog.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit III: Cell Structure and Function",
        chapters: [
          {
            id: "bi11_3_1",
            title: "Cell — The Unit of Life",
            desc: "Cell theory. Prokaryotic and eukaryotic cells. Cell membrane, cell wall, chloroplast, mitochondria, ribosome, ER, Golgi apparatus, nucleus.",
            videoUrl: "",
          },
          {
            id: "bi11_3_2",
            title: "Biomolecules",
            desc: "Primary and secondary metabolites. Chemical composition. Structure of proteins, polysaccharides. Enzymes — chemical nature, properties, inhibition.",
            videoUrl: "",
          },
          {
            id: "bi11_3_3",
            title: "Cell Cycle and Cell Division",
            desc: "Cell cycle. Mitosis. Meiosis. Significance of mitosis and meiosis.",
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
            desc: "Means of transport. Water potential. Osmosis. Plasmolysis. Imbibition. Long-distance transport — ascent of sap. Transpiration. Phloem transport.",
            videoUrl: "",
          },
          {
            id: "bi11_4_2",
            title: "Mineral Nutrition",
            desc: "Essential mineral elements. Criteria and mechanism of absorption. Deficiency symptoms. Nitrogen metabolism — fixation, assimilation.",
            videoUrl: "",
          },
          {
            id: "bi11_4_3",
            title: "Photosynthesis in Higher Plants",
            desc: "Light reactions. Calvin cycle. Photorespiration. C4 pathway. CAM plants. Factors affecting photosynthesis.",
            videoUrl: "",
          },
          {
            id: "bi11_4_4",
            title: "Respiration in Plants",
            desc: "Cellular respiration. Glycolysis. Fermentation. Aerobic respiration — Krebs cycle. Electron transport system. Respiratory quotient.",
            videoUrl: "",
          },
          {
            id: "bi11_4_5",
            title: "Plant Growth and Development",
            desc: "Seed germination. Growth regulators — auxins, gibberellins, cytokinins, abscisic acid, ethylene. Photoperiodism. Vernalisation.",
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
            desc: "Alimentary canal. Digestive glands. Digestion of carbohydrates, proteins, fats. Absorption. Disorders.",
            videoUrl: "",
          },
          {
            id: "bi11_5_2",
            title: "Breathing and Exchange of Gases",
            desc: "Respiratory organs. Mechanism of breathing. Regulation. Exchange and transport of gases. Disorders.",
            videoUrl: "",
          },
          {
            id: "bi11_5_3",
            title: "Body Fluids and Circulation",
            desc: "Blood — composition and functions. Blood groups. Coagulation. Heart — structure and cardiac cycle. Blood vessels. Lymph. Regulation.",
            videoUrl: "",
          },
          {
            id: "bi11_5_4",
            title: "Excretory Products and their Elimination",
            desc: "Modes of excretion. Kidneys — structure and function. Urine formation. Regulation. Disorders. Dialysis.",
            videoUrl: "",
          },
          {
            id: "bi11_5_5",
            title: "Locomotion and Movement",
            desc: "Types of movement. Muscle types. Skeletal muscle structure. Mechanism of contraction. Skeletal system. Joints. Disorders.",
            videoUrl: "",
          },
          {
            id: "bi11_5_6",
            title: "Neural Control and Coordination",
            desc: "Neuron. Nerve impulse. Transmission across synapse. CNS. Reflex action. Brain — structure and functions. Sense organs.",
            videoUrl: "",
          },
          {
            id: "bi11_5_7",
            title: "Chemical Coordination and Integration",
            desc: "Endocrine system. Hormones — nature, mechanism of action. Pituitary, thyroid, adrenal, pancreas, gonads. Disorders.",
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
            desc: "Modes of reproduction — asexual and sexual. Asexual reproduction — binary fission, sporulation, budding, fragmentation, vegetative propagation.",
            videoUrl: "",
          },
          {
            id: "bi12_1_2",
            title: "Sexual Reproduction in Flowering Plants",
            desc: "Flower — male and female gametophyte. Pollination. Fertilisation. Double fertilisation. Seed and fruit development. Apomixis and polyembryony.",
            videoUrl: "",
          },
          {
            id: "bi12_1_3",
            title: "Human Reproduction",
            desc: "Male reproductive system. Female reproductive system. Gametogenesis. Menstrual cycle. Fertilisation and implantation. Pregnancy and placenta. Parturition and lactation.",
            videoUrl: "",
          },
          {
            id: "bi12_1_4",
            title: "Reproductive Health",
            desc: "Reproductive health problems and strategies. Population explosion. Birth control. Contraception. Sexually transmitted infections. Infertility. ART.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit II: Genetics and Evolution",
        chapters: [
          {
            id: "bi12_2_1",
            title: "Principles of Inheritance and Variation",
            desc: "Mendel's laws. Inheritance of one and two genes. Sex determination. Linkage and recombination. Mutation. Chromosomal disorders.",
            videoUrl: "",
          },
          {
            id: "bi12_2_2",
            title: "Molecular Basis of Inheritance",
            desc: "DNA as genetic material. DNA replication. Transcription. Genetic code. Translation. Gene regulation. Human genome project. DNA fingerprinting.",
            videoUrl: "",
          },
          {
            id: "bi12_2_3",
            title: "Evolution",
            desc: "Origin of life. Theories of evolution. Evidences. Adaptive radiation. Hardy-Weinberg principle. Speciation. Human evolution.",
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
            desc: "Common diseases. Immunity — innate and acquired. Vaccination. Cancer. AIDS. Drugs and alcohol abuse.",
            videoUrl: "",
          },
          {
            id: "bi12_3_2",
            title: "Strategies for Enhancement in Food Production",
            desc: "Animal husbandry. Plant breeding. Single cell protein. Tissue culture. Biofortification.",
            videoUrl: "",
          },
          {
            id: "bi12_3_3",
            title: "Microbes in Human Welfare",
            desc: "Microbes in household and industrial products. Biogas. Biocontrol agents. Biofertilisers. Sewage treatment.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit IV: Biotechnology",
        chapters: [
          {
            id: "bi12_4_1",
            title: "Biotechnology — Principles and Processes",
            desc: "Principles of biotechnology. Tools of recombinant DNA technology. Processes — PCR, gel electrophoresis, cloning, transformation.",
            videoUrl: "",
          },
          {
            id: "bi12_4_2",
            title: "Biotechnology and its Applications",
            desc: "Applications in agriculture — Bt crops, pest resistant plants. In medicine — insulin, gene therapy. Ethical issues. Biosafety.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit V: Ecology and Environment",
        chapters: [
          {
            id: "bi12_5_1",
            title: "Organisms and Populations",
            desc: "Organisms and its environment. Habitat and niche. Population attributes. Population growth — logistic and exponential. Life history variation. Population interactions.",
            videoUrl: "",
          },
          {
            id: "bi12_5_2",
            title: "Ecosystem",
            desc: "Ecosystem — structure and function. Productivity. Decomposition. Energy flow. Nutrient cycling. Ecosystem services.",
            videoUrl: "",
          },
          {
            id: "bi12_5_3",
            title: "Biodiversity and Conservation",
            desc: "Biodiversity — concept, patterns, importance. Loss of biodiversity. Biodiversity conservation — in situ and ex situ. Hotspots. IUCN categories.",
            videoUrl: "",
          },
          {
            id: "bi12_5_4",
            title: "Environmental Issues",
            desc: "Air and water pollution. Solid waste management. Agro-chemicals. Radioactive waste. Greenhouse effect. Ozone depletion. Deforestation. Case studies.",
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
            title: "Introduction to Computer System",
            desc: "History and generations of computers. Types and characteristics of computers. Components — CPU, memory, storage, I/O devices. Number system conversions.",
            videoUrl: "",
          },
          {
            id: "it11_1_2",
            title: "Computer Hardware and Software",
            desc: "Classification of hardware. System software and application software. Programming languages — low-level and high-level. Operating system functions.",
            videoUrl: "",
          },
          {
            id: "it11_1_3",
            title: "Operating System Basics",
            desc: "Functions and types of OS. Process management. Memory management. File management. Introduction to Linux and Windows commands.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit II: Office Automation Tools",
        chapters: [
          {
            id: "it11_2_1",
            title: "Word Processing",
            desc: "Creating and editing documents. Formatting text and paragraphs. Tables. Mail merge. Headers, footers and page numbers. Templates.",
            videoUrl: "",
          },
          {
            id: "it11_2_2",
            title: "Spreadsheet",
            desc: "Working with worksheets. Formulas and built-in functions. Charts and graphs. Sorting and filtering. Conditional formatting. Pivot tables.",
            videoUrl: "",
          },
          {
            id: "it11_2_3",
            title: "Presentation Software",
            desc: "Creating slide decks. Slide layouts and themes. Animations and transitions. Embedding objects. Slide show settings.",
            videoUrl: "",
          },
          {
            id: "it11_2_4",
            title: "Database Management System",
            desc: "Database concepts. Creating tables and relationships. Queries. Forms and reports. Introduction to SQL basics.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit III: Internet and Networking",
        chapters: [
          {
            id: "it11_3_1",
            title: "Internet Basics",
            desc: "Evolution of internet. WWW. Browsers and search engines. Email. FTP. Cloud services. E-commerce. Social media.",
            videoUrl: "",
          },
          {
            id: "it11_3_2",
            title: "Computer Networking Basics",
            desc: "Network types — LAN, WAN, MAN. Network topologies. OSI model. TCP/IP protocol. IP addressing. Network devices.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit IV: Programming Concepts",
        chapters: [
          {
            id: "it11_4_1",
            title: "Problem Solving Techniques",
            desc: "Problem analysis. Algorithm design. Flowcharts and pseudocode. Debugging. Testing strategies.",
            videoUrl: "",
          },
          {
            id: "it11_4_2",
            title: "Introduction to Programming",
            desc: "Programming paradigms. Structured programming. Introduction to C/Python. Variables, data types, operators, expressions.",
            videoUrl: "",
          },
          {
            id: "it11_4_3",
            title: "Python Programming Basics",
            desc: "Python syntax. Variables and data types. Input/output. Operators. Strings. Control structures — if-else, loops. Lists and tuples.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit V: Cyber Safety",
        chapters: [
          {
            id: "it11_5_1",
            title: "Cyber Ethics and Safety",
            desc: "Cybercrime — types and prevention. Privacy and data security. Netiquette. Intellectual property rights. IT Act 2000. Safe browsing practices.",
            videoUrl: "",
          },
          {
            id: "it11_5_2",
            title: "Digital Communication",
            desc: "Digital literacy. Online collaboration tools. Video conferencing. Digital payments. E-governance services.",
            videoUrl: "",
          },
        ],
      },
    ],
    12: [
      {
        unit: "Unit I: Advanced Python Programming",
        chapters: [
          {
            id: "it12_1_1",
            title: "Python Advanced Concepts",
            desc: "Control flow — if-elif-else, for, while, break, continue, pass. Nested loops. List comprehension. Lambda functions.",
            videoUrl: "",
          },
          {
            id: "it12_1_2",
            title: "Functions and Modules",
            desc: "Defining functions. Default, keyword, *args, **kwargs arguments. Scope and lifetime. Recursion. Built-in modules — math, random, datetime.",
            videoUrl: "",
          },
          {
            id: "it12_1_3",
            title: "File Handling",
            desc: "Opening and closing files. Reading and writing text files. CSV file handling. Exception handling — try, except, finally. Custom exceptions.",
            videoUrl: "",
          },
          {
            id: "it12_1_4",
            title: "Exception Handling",
            desc: "Types of errors. Try-except block. Multiple exceptions. Finally clause. Raising exceptions. Custom exception classes. Debugging techniques.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit II: Database Management System",
        chapters: [
          {
            id: "it12_2_1",
            title: "Database Concepts",
            desc: "DBMS vs RDBMS. ER model — entities, attributes, relationships. Normalization — 1NF, 2NF, 3NF. Keys — primary, foreign, candidate.",
            videoUrl: "",
          },
          {
            id: "it12_2_2",
            title: "SQL Queries",
            desc: "DDL — CREATE, ALTER, DROP. DML — INSERT, UPDATE, DELETE. DQL — SELECT, WHERE, ORDER BY, GROUP BY. Aggregate functions. Joins — inner, outer, cross.",
            videoUrl: "",
          },
          {
            id: "it12_2_3",
            title: "Database Connectivity",
            desc: "Python-MySQL connectivity using mysql.connector. Executing DDL and DML through Python. Fetching records. CRUD operations from Python.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit III: Web Technologies",
        chapters: [
          {
            id: "it12_3_1",
            title: "Web Development Basics",
            desc: "How the web works. Client-server model. Static vs dynamic websites. Web hosting. Domain names. Introduction to HTML structure.",
            videoUrl: "",
          },
          {
            id: "it12_3_2",
            title: "HTML and CSS",
            desc: "HTML tags — semantic elements, forms, tables, multimedia. CSS — selectors, properties, box model, flexbox. Responsive web design basics.",
            videoUrl: "",
          },
          {
            id: "it12_3_3",
            title: "Internet and Web Security",
            desc: "HTTP vs HTTPS. SSL/TLS. Phishing and malware. Firewall and antivirus. Safe password practices. Two-factor authentication.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Unit IV: Emerging Technologies",
        chapters: [
          {
            id: "it12_4_1",
            title: "Cyber Security",
            desc: "Advanced cyber threats — ransomware, DDoS, social engineering. Encryption basics. Ethical hacking concepts. Digital forensics. Cybersecurity careers.",
            videoUrl: "",
          },
          {
            id: "it12_4_2",
            title: "Cloud Computing Basics",
            desc: "Cloud computing concepts. Service models — IaaS, PaaS, SaaS. Deployment models — public, private, hybrid. Popular cloud platforms. Cloud in education and industry.",
            videoUrl: "",
          },
          {
            id: "it12_4_3",
            title: "Artificial Intelligence Basics",
            desc: "Introduction to AI and ML. Types of ML — supervised, unsupervised. Neural networks overview. Applications — image recognition, NLP, chatbots. Ethical issues in AI.",
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
            title: "The Portrait of a Lady — Khushwant Singh",
            desc: "A moving account of the changing relationship between the author and his grandmother, reflecting on the passage of time, tradition, and modernity.",
            videoUrl: "",
          },
          {
            id: "en11_1_2",
            title: "We're Not Afraid to Die — Gordon Cook & Alan East",
            desc: "A gripping survival narrative of a family's journey through a fierce storm in the South Atlantic, demonstrating courage, teamwork and determination.",
            videoUrl: "",
          },
          {
            id: "en11_1_3",
            title: "Discovering Tut: The Saga Continues",
            desc: "Explores the scientific investigation of King Tutankhamun's mummy using CT scanning, blending ancient Egyptian history with modern forensic science.",
            videoUrl: "",
          },
          {
            id: "en11_1_4",
            title: "Landscape of the Soul — Nathalie Trouveroy",
            desc: "Compares Eastern and Western art traditions through Chinese painting anecdotes, exploring the philosophy of art, space, and the inner world.",
            videoUrl: "",
          },
          {
            id: "en11_1_5",
            title: "The Ailing Planet: The Green Movement's Role",
            desc: "A thought-provoking essay on environmental degradation, the green movement, and humanity's shared responsibility to protect the planet.",
            videoUrl: "",
          },
          {
            id: "en11_1_6",
            title: "The Browning Version — Terence Rattigan",
            desc: "A play excerpt exploring the relationship between a repressed schoolmaster and a perceptive student, themes of self-respect and human dignity.",
            videoUrl: "",
          },
          {
            id: "en11_1_7",
            title: "The Adventure — Jayant Narlikar",
            desc: "A fascinating sci-fi story exploring an alternate history where Maratha power survived, combining quantum physics with historical speculation.",
            videoUrl: "",
          },
          {
            id: "en11_1_8",
            title: "Silk Road — Nick Middleton",
            desc: "A travelogue of the author's journey from Ravu to Mount Kailash through Tibet, capturing the Himalayan landscape, culture and customs.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Hornbill — Poetry",
        chapters: [
          {
            id: "en11_2_1",
            title: "A Photograph — Shirley Toulson",
            desc: "A lyrical poem on loss and memory, in which a photograph of the poet's deceased mother evokes grief, nostalgia, and the relentless passage of time.",
            videoUrl: "",
          },
          {
            id: "en11_2_2",
            title: "The Laburnum Top — Ted Hughes",
            desc: "A nature poem describing the arrival of a goldfinch on a laburnum tree and the sudden burst of life it brings, symbolising energy and transience.",
            videoUrl: "",
          },
          {
            id: "en11_2_3",
            title: "The Voice of the Rain — Walt Whitman",
            desc: "A philosophical poem in which rain speaks to the poet, comparing itself to song and exploring the cyclic nature of life and eternal return.",
            videoUrl: "",
          },
          {
            id: "en11_2_4",
            title: "Childhood — Markus Natten",
            desc: "A contemplative poem tracing the moment a child loses innocence, becoming aware of hypocrisy and individuality in the journey to adulthood.",
            videoUrl: "",
          },
          {
            id: "en11_2_5",
            title: "Father to Son — Elizabeth Jennings",
            desc: "A poignant poem about the communication gap between generations, a father's bewilderment at his son's estrangement, and the longing for connection.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Snapshots — Supplementary Reader",
        chapters: [
          {
            id: "en11_3_1",
            title: "The Summer of the Beautiful White Horse — William Saroyan",
            desc: "Story of two Armenian boys, Aram and Mourad, who borrow a horse secretly, exploring themes of honesty, pride, and boyhood innocence.",
            videoUrl: "",
          },
          {
            id: "en11_3_2",
            title: "The Address — Marga Minco",
            desc: "A post-World War II story of a Dutch woman searching for her mother's belongings, exploring trauma, memory, identity and the meaning of home.",
            videoUrl: "",
          },
          {
            id: "en11_3_3",
            title: "Ranga's Marriage — Masti Venkatesha Iyengar",
            desc: "A humorous story set in a south Indian village, portraying changing attitudes toward marriage through the story of an educated young man.",
            videoUrl: "",
          },
          {
            id: "en11_3_4",
            title: "Albert Einstein at School",
            desc: "An account of Einstein's difficult school years in Munich, his unconventional thinking, conflict with rigid education, and his eventual exit from school.",
            videoUrl: "",
          },
          {
            id: "en11_3_5",
            title: "Mother's Day — J.B. Priestley",
            desc: "A witty one-act play in which a mother switches bodies with her daughter to teach the family to value and respect her tireless domestic contributions.",
            videoUrl: "",
          },
          {
            id: "en11_3_6",
            title: "The Ghat of the Only World — Amitav Ghosh",
            desc: "A tribute to the Kashmiri poet Agha Shahid Ali, reflecting on friendship, mortality, loss, and the act of memorialising through writing.",
            videoUrl: "",
          },
          {
            id: "en11_3_7",
            title: "Birth — A.J. Cronin",
            desc: "A story of a young doctor who saves a seemingly stillborn baby through determined medical effort, capturing the joy and responsibility of new life.",
            videoUrl: "",
          },
          {
            id: "en11_3_8",
            title: "The Tale of Melon City",
            desc: "A satirical poem about an absurd king whose decree leads to a series of comical misadventures and eventually to an unexpected and ironic ruler.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Writing Skills and Grammar",
        chapters: [
          {
            id: "en11_4_1",
            title: "Note Making and Summarising",
            desc: "Reading comprehension passages. Techniques of note-making with headings and abbreviations. Writing an accurate and concise summary.",
            videoUrl: "",
          },
          {
            id: "en11_4_2",
            title: "Letter and Application Writing",
            desc: "Format of formal and informal letters. Letter to the editor. Job application letter. Complaint and request letters.",
            videoUrl: "",
          },
          {
            id: "en11_4_3",
            title: "Essay, Report and Speech Writing",
            desc: "Descriptive and argumentative essays. Report writing — format and language. Speech writing — structure, tone and persuasion.",
            videoUrl: "",
          },
          {
            id: "en11_4_4",
            title: "Grammar — Tenses, Voice and Narration",
            desc: "All tenses with examples. Active and passive voice transformation. Direct and indirect speech. Common grammatical errors. Clauses.",
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
            title: "The Last Lesson — Alphonse Daudet",
            desc: "Franz, a French boy, realises on the day of the last French lesson that the Prussians have banned French. A moving story of patriotism and language.",
            videoUrl: "",
          },
          {
            id: "en12_1_2",
            title: "Lost Spring — Anees Jung",
            desc: "Explores the lives of two children — Saheb, a ragpicker from Seemapuri, and Mukesh from Firozabad — trapped in cycles of poverty and child labour.",
            videoUrl: "",
          },
          {
            id: "en12_1_3",
            title: "Deep Water — William O. Douglas",
            desc: "The author's personal account of his near-drowning as a child, his life-long fear of water, and his final conquest of that fear through determined effort.",
            videoUrl: "",
          },
          {
            id: "en12_1_4",
            title: "The Rattrap — Selma Lagerlöf",
            desc: "A peddler who sells rattraps views the world as a rattrap. A crofter's kindness and a young woman's trust redeem him. A story of human goodness.",
            videoUrl: "",
          },
          {
            id: "en12_1_5",
            title: "Indigo — Louis Fischer",
            desc: "An account of Gandhi's Champaran movement of 1917, where he championed the cause of indigo farmers exploited by British planters. Satyagraha in action.",
            videoUrl: "",
          },
          {
            id: "en12_1_6",
            title: "Poets and Pancakes — Asokamitran",
            desc: "A witty account of life inside Gemini Studios in Chennai — the make-up department, the owner, Subbu's versatility, and a mystery Englishman's visit.",
            videoUrl: "",
          },
          {
            id: "en12_1_7",
            title: "The Interview — Christopher Silvester",
            desc: "An essay exploring the nature, history and importance of interviews, with views of famous personalities including V.S. Naipaul and Umberto Eco.",
            videoUrl: "",
          },
          {
            id: "en12_1_8",
            title: "Going Places — A.R. Barton",
            desc: "Sophie, a dreamy teenager, fantasises about Danny Casey, an Irish footballer, exploring themes of adolescent hero-worship and the gap between dream and reality.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Flamingo — Poetry",
        chapters: [
          {
            id: "en12_2_1",
            title: "My Mother at Sixty-Six — Kamala Das",
            desc: "The poet's anxiety about her ageing mother's mortality, written during a car journey, with powerful imagery contrasting life and decay.",
            videoUrl: "",
          },
          {
            id: "en12_2_2",
            title: "Keeping Quiet — Pablo Neruda",
            desc: "A call for a moment of universal stillness and introspection as an antidote to violence, haste and self-destruction. A meditation on peace.",
            videoUrl: "",
          },
          {
            id: "en12_2_3",
            title: "A Thing of Beauty — John Keats",
            desc: "From Endymion. Beauty is a joy forever. Keats enumerates nature's beautiful things that remove the pall of negativity from our lives.",
            videoUrl: "",
          },
          {
            id: "en12_2_4",
            title: "A Roadside Stand — Robert Frost",
            desc: "City folk ignore a roadside stand set up by poor rural people. Frost explores the urban-rural divide with irony and sympathy for the marginalised.",
            videoUrl: "",
          },
          {
            id: "en12_2_5",
            title: "Aunt Jennifer's Tigers — Adrienne Rich",
            desc: "A feminist poem exploring female oppression through the contrast between Aunt Jennifer's vibrant needlework tigers and her oppressed real life.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Vistas — Supplementary Reader",
        chapters: [
          {
            id: "en12_3_1",
            title: "The Third Level — Jack Finney",
            desc: "Charley finds a mysterious third level at Grand Central Station leading to 1894. Explores escapism from modern anxiety and the longing for a simpler world.",
            videoUrl: "",
          },
          {
            id: "en12_3_2",
            title: "The Tiger King — Kalki",
            desc: "A satirical story about the Maharaja of Pratibandapuram who vows to kill a hundred tigers to defeat a prophecy, exploring irony, power and absurdity.",
            videoUrl: "",
          },
          {
            id: "en12_3_3",
            title: "Journey to the End of the Earth — Tishani Doshi",
            desc: "The author's voyage to Antarctica on a student programme, reflecting on Earth's history, climate change, and the need for environmental awareness.",
            videoUrl: "",
          },
          {
            id: "en12_3_4",
            title: "The Enemy — Pearl S. Buck",
            desc: "A Japanese doctor saves an enemy American soldier during World War II, exploring the conflict between duty to country and universal humanitarian compassion.",
            videoUrl: "",
          },
          {
            id: "en12_3_5",
            title: "On the Face of It — Susan Hill",
            desc: "A play about Derry, a disfigured boy, and Mr. Lamb, an old man with a tin leg. Their unlikely friendship highlights disability, loneliness and acceptance.",
            videoUrl: "",
          },
          {
            id: "en12_3_6",
            title: "Memories of Childhood — Zitkala-Sa & Bama",
            desc: "Two autobiographical narratives — a Native American woman's experience of cultural oppression in boarding school, and a Tamil Dalit girl's experience of caste discrimination.",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "Writing Skills and Grammar",
        chapters: [
          {
            id: "en12_4_1",
            title: "Reading Comprehension",
            desc: "Unseen passages — factual and discursive. Techniques of comprehension. Note-making. Vocabulary in context. Inference and critical reading.",
            videoUrl: "",
          },
          {
            id: "en12_4_2",
            title: "Formal Writing — Letters and Applications",
            desc: "Business letters — complaint, order, enquiry. Official applications. Letter to the editor. CV and cover letter writing.",
            videoUrl: "",
          },
          {
            id: "en12_4_3",
            title: "Creative Writing — Article, Speech, Report",
            desc: "Article writing for newspapers and magazines. Speech writing — debates and occasions. Report writing — formal and newspaper format.",
            videoUrl: "",
          },
          {
            id: "en12_4_4",
            title: "Advanced Grammar",
            desc: "Error correction. Gap filling. Sentence transformation. Clauses — noun, adjective, adverb. Modals. Reported speech. Conditionals.",
            videoUrl: "",
          },
        ],
      },
    ],
  },

  // ODIA — Current CHSE MIL Odia Syllabus (2025-26)
  Odia: {
    11: [
      {
        unit: "ଗଦ୍ୟ (Prose)",
        chapters: [
          {
            id: "od11_1_1",
            title: "ରେଶମ ପଦର",
            desc: "ଲେଖକ: ଗୋପୀନାଥ ମହାନ୍ତି। ଓଡ଼ିଆ ଗ୍ରାମ ଜୀବନ, ଆଦିବାସୀ ସଂସ୍କୃତି ଓ ମଣିଷ ସ୍ୱଭାବ ଚିତ୍ରଣ। ଗଦ୍ୟ ଶୈଳୀ ଓ ଭାଷା ଅଧ୍ୟୟନ।",
            videoUrl: "",
          },
          {
            id: "od11_1_2",
            title: "ଝେଲମ୍ ନଦୀରେ ସନ୍ଧ୍ୟା",
            desc: "ଲେଖକ: କୁଞ୍ଜବିହାରୀ ଦାସ। ବ୍ୟକ୍ତିଗତ ଅନୁଭୂତି ଓ ପ୍ରକୃତି ବର୍ଣ୍ଣନା। ଝେଲମ ନଦୀ ତୀରରେ ସୂର୍ୟାସ୍ତ ଦ୍ୱାରା ଜୀବନ ଦର୍ଶନ ଅଭିବ୍ୟକ୍ତି।",
            videoUrl: "",
          },
          {
            id: "od11_1_3",
            title: "ମଧୁବାବୁ",
            desc: "ଲେଖକ: ଚିନ୍ତାମଣି ଆଚାର୍ଯ୍ୟ। ସ୍ୱାଧୀନ ଭାରତ ଆନ୍ଦୋଳନ ଓ ରାଜନୀତିକ ନେତାଙ୍କ ଚରିତ୍ର, ଦ୍ୱନ୍ଦ ଓ ଜୀବନ ଚିତ୍ର।",
            videoUrl: "",
          },
          {
            id: "od11_1_4",
            title: "ଗାଁ ମଜଲିସ",
            desc: "ଲେଖକ: ହରେକୃଷ୍ଣ ମହତାବ। ଓଡ଼ିଆ ଗ୍ରାମ ସମାଜ, ସ୍ଥାନୀୟ ସ୍ୱଶାସନ, ଗ୍ରାମ ବୈଠକ ଓ ଜନ ଜୀବନ ଚିତ୍ରଣ।",
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
            desc: "କବି: ସାରଳା ଦାସ। ଓଡ଼ିଆ ଆଦି ମହାଭାରତ ଅନୁବାଦ ଓ ସୃଷ୍ଟି, ସାରଳା ଦାସଙ୍କ ରଚନାଶୈଳୀ ଓ ଭକ୍ତି ଭାବ।",
            videoUrl: "",
          },
          {
            id: "od11_2_2",
            title: "ଶାପ ମୋଚନ",
            desc: "କବି: ଜଗନ୍ନାଥ ଦାସ। ଭାଗବତ କବି ଜଗନ୍ନାଥ ଦାସଙ୍କ ଭକ୍ତ ଚରିତ୍ର, ଶ୍ରୀ ଜଗନ୍ନାଥ ଭକ୍ତି ଓ ଓଡ଼ିଆ ଭାଗବତ ମହାକାବ୍ୟ ପ୍ରସଙ୍ଗ।",
            videoUrl: "",
          },
          {
            id: "od11_2_3",
            title: "ହିମକାଳ",
            desc: "କବି: ଦୀନକୃଷ୍ଣ ଦାସ। ଶୀତ ଋତୁ ଚିତ୍ରଣ, ପ୍ରକୃତି ଓ ଜୀବନ ଦର୍ଶନ, ଓଡ଼ିଆ ପ୍ରାଚୀନ ଛନ୍ଦ ଶୈଳୀ।",
            videoUrl: "",
          },
          {
            id: "od11_2_4",
            title: "ମିତ୍ରତା",
            desc: "କବି: ଉପେନ୍ଦ୍ର ଭଞ୍ଜ। ଭଞ୍ଜ ଯୁଗ, ଶ୍ରୃଙ୍ଗାର ରସ, ମିତ୍ର ଭାବ ଓ ଓଡ଼ିଆ ଶ୍ରେଷ୍ଠ ଛନ୍ଦ ଶୈଳୀ।",
            videoUrl: "",
          },
          {
            id: "od11_2_5",
            title: "ପଯ଼ରେ ପଶୁଛି ଶରଣ",
            desc: "କବି: ଭୀମ ଭୋଇ। ମହାଭାବ ଭକ୍ତ ଭୀମ ଭୋଇଙ୍କ ଭଗବଦ ଭକ୍ତି, ଆତ୍ମ ସମର୍ପଣ ଓ ଓଡ଼ିଆ ଭଜନ ପରମ୍ପରା।",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "ଏକାଙ୍କିକା (One Act Play)",
        chapters: [
          {
            id: "od11_3_1",
            title: "ଅତ୍ୟାଚାରିତ",
            desc: "ଲେଖକ: ପ୍ରାଣବନ୍ଧୁ କର। ଏକାଙ୍କ ନାଟକ — ସାମାଜିକ ଅତ୍ୟାଚାର, ଶୋଷଣ ଓ ମଣିଷ ଚରିତ୍ର ଉପରେ ଦ୍ୱନ୍ଦ ଚିତ୍ରଣ।",
            videoUrl: "",
          },
          {
            id: "od11_3_2",
            title: "ଭାଲୁ ଉପଦ୍ରବ",
            desc: "ଲେଖକ: ବିଜୟ ମିଶ୍ର। ଗ୍ରାମ ଜୀବନ, ହାସ୍ୟ ରସ ଓ ଗ୍ରାମ ସମସ୍ୟା ଉପରେ ଏକ ମନୋରଞ୍ଜକ ଏକାଙ୍କ ନାଟ।",
            videoUrl: "",
          },
          {
            id: "od11_3_3",
            title: "ସୀମିତ ସମ୍ପର୍କ",
            desc: "ଲେଖକ: କାର୍ତ୍ତିକ ଚନ୍ଦ୍ର ରଥ। ଆଧୁନିକ ଜୀବନ, ପ୍ରିୟଜନ ସୀମିତ ଯୋଗାଯୋଗ ଓ ସୟ ବ୍ୟବଧାନ ଉପରେ ଆଧାରିତ ଏକ ଭାବଗ୍ରାହୀ ଏକାଙ୍କ।",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "ଲେଖନ ଓ ବ୍ୟାକରଣ (Writing and Grammar)",
        chapters: [
          {
            id: "od11_4_1",
            title: "ଅବବୋଧ ପରୀକ୍ଷଣ ଓ ସମ୍ବାଦ ଲେଖନ",
            desc: "ଗଦ୍ୟ ଅଂଶ ପଢ଼ି ବୁଝା। ସଂଖ୍ୟ ସ୍ୱ ଉତ୍ତର। ଖବର ଲେଖା ଫର୍ମ୍ୟାଟ — ଶୀର୍ଷ, ସ୍ଥାନ, ତାରିଖ, ଅନ୍ତ ଓ ଅଂଶ।",
            videoUrl: "",
          },
          {
            id: "od11_4_2",
            title: "ପ୍ରବନ୍ଧ ଓ ପତ୍ର ଲେଖନ",
            desc: "ବିଭିନ୍ନ ବିଷୟ ଉପରେ ରଚନା ଲେଖା। ବ୍ୟକ୍ତିଗତ ଓ ଦାପ୍ତାରୀ ପତ୍ର ଲେଖନ ପ୍ରଣାଳୀ।",
            videoUrl: "",
          },
          {
            id: "od11_4_3",
            title: "ବ୍ୟାକରଣ — ବିଶେଷ୍ୟ, ବିଶେଷଣ, ସର୍ବନାମ",
            desc: "ଓଡ଼ିଆ ବ୍ୟାକରଣ — ବିଶେଷ୍ୟ ପ୍ରକାର, ବିଶେଷଣ, ସର୍ବନାମ ଭେଦ ଓ ବ୍ୟବହାର। ଅବ୍ୟୟ ଓ କ୍ରିୟା ପ୍ରୟୋଗ।",
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
            desc: "ଲେଖକ: ବିଶ୍ୱନାଥ କର। ଇତିହାସ ଦର୍ଶନ, ଐତିହ୍ୟ ଓ ଆଧୁନିକ ଜ୍ଞାନ ମଧ୍ୟରେ ସଂଘର୍ଷ। ଭଲ ଗଦ୍ୟ ଶୈଳୀ ଓ ଦାର୍ଶନିକ ଚିନ୍ତା।",
            videoUrl: "",
          },
          {
            id: "od12_1_2",
            title: "ସ୍ୱାଧୀନ ଦେଶର ଶିକ୍ଷା ଚିନ୍ତା",
            desc: "ଲେଖକ: ଗୋଲୋକ ବିହାରୀ ଧଳ। ସ୍ୱାଧୀନ ଭାରତ ଶିକ୍ଷା ଆଦର୍ଶ, ଶିକ୍ଷା ଗୁଣ ଓ ସ୍ୱଦେଶ ଉନ୍ନୟନ ଲାଗି ଶିକ୍ଷାର ଭୂମିକା।",
            videoUrl: "",
          },
          {
            id: "od12_1_3",
            title: "ପୁଷ୍ପପୁରରେ ବର୍ଷାବରଣ",
            desc: "ଲେଖକ: କୃଷ୍ଣଚନ୍ଦ୍ର ପାଣିଗ୍ରାହୀ। ଓଡ଼ିଶୀ ସଂଗୀତ ଓ ନୃତ୍ୟ ଉପରେ ଆଧାରିତ। ବ୍ୟଙ୍ଗ ଶୈଳୀ ଓ ସାଂସ୍କୃତିକ ଚେତନା।",
            videoUrl: "",
          },
          {
            id: "od12_1_4",
            title: "ତିନି ତୁଣ୍ଡରେ",
            desc: "ଲେଖକ: ଭୁବନେଶ୍ୱର ବେହେରା। ଆଧୁନିକ ଓଡ଼ିଆ ଗଦ୍ୟ, ସାମାଜିକ ଜ୍ଞାନ ଓ ହ୍ୟୁମରଯୁକ୍ତ ଚରିତ୍ର ଚିତ୍ରଣ।",
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
            desc: "କବି: ରାଧାନାଥ ରାୟ। ମହାକବି ରାଧାନାଥ ରାୟଙ୍କ ଶ୍ରେଷ୍ଠ ରଚନା। ଆଦର୍ଶ ଚରିତ୍ର, ନୈତିକ ଦ୍ୱନ୍ଦ ଓ ସ୍ୱ ଉନ୍ନୟନ ଭାବ।",
            videoUrl: "",
          },
          {
            id: "od12_2_2",
            title: "ତପସ୍ୱିନୀର ପତ୍ର",
            desc: "କବି: ଗଙ୍ଗାଧର ମେହେର। ମହାକବି ଗଙ୍ଗାଧର ମେହେରଙ୍କ ପ୍ରସ୍ ରଚନା। ନାରୀ ଚରିତ୍ର, ଭ୍ରାତୃ ଭକ୍ତି ଓ ଆଦ୍ୟ ଓଡ଼ିଆ ସ୍ତ୍ରୀ ଅଧିକାର ଭଦ୍ ଦ୍ୱ।",
            videoUrl: "",
          },
          {
            id: "od12_2_3",
            title: "ବନ୍ଦୀର ବିରହ ବ୍ୟଥା",
            desc: "କବି: ଗୋପବନ୍ଧୁ ଦାସ। ଦେଶ ସ୍ୱାଧୀନତା ସଂଗ୍ରାମ, ଜାଲ ଭୀତ ଜୀବନ ଓ ଓଡ଼ିଶାର ଗୋପ ବନ୍ଧୁଙ୍କ ରାଜନୈତିକ ଦ୍ୱନ୍ଦ।",
            videoUrl: "",
          },
          {
            id: "od12_2_4",
            title: "ବାର୍ତ୍ତା",
            desc: "କବି: ସଚ୍ଚିଦାନନ୍ଦ ରାଉତରାୟ। ଆଧୁନିକ ଓଡ଼ିଆ ଛନ୍ଦ ଓ ଭାଷା। ଜୀବନ ଦର୍ଶନ, ଆଧ୍ୟାତ୍ମ ଭାବ ଓ ସ୍ୱ ଚିନ୍ତା।",
            videoUrl: "",
          },
          {
            id: "od12_2_5",
            title: "ପିଙ୍ଗଳାର ଅଭିସାର",
            desc: "କବି: ରାଧାମୋହନ ଗଡ଼ନାୟକ। ଶ୍ରୃଙ୍ଗାର ରସ, ଭଗବଦ ଭକ୍ତ ଓ ଓଡ଼ିଆ ଶାସ୍ତ୍ରୀୟ ଛନ୍ଦ।",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "ଗଳ୍ପ (Short Stories)",
        chapters: [
          {
            id: "od12_3_1",
            title: "ସଭ୍ୟ ଜମିଦାର",
            desc: "ଲେଖକ: ଫକୀରମୋହନ ସେନାପତି। ଓଡ଼ିଆ ଗଳ୍ପ ସ୍ଥପତି ଫକୀରମୋହନଙ୍କ ବ୍ୟଙ୍ଗ ଶୈଳୀ। ଜମିଦାର ଶ୍ରେଣୀ ଓ ଗ୍ରାମ ଜୀବନ ଚିତ୍ରଣ।",
            videoUrl: "",
          },
          {
            id: "od12_3_2",
            title: "ପତାକା ଉତ୍ତୋଳନ",
            desc: "ଲେଖକ: ସୁରେନ୍ଦ୍ର ମହାନ୍ତି। ସ୍ୱାଧୀନ ଭାରତ ଓ ଦେଶ ଭକ୍ତି ଭାଵ। ଆଦ ଓ ନ୍ ଭ ର ତ ଉ ଲ ଲ ସ ର ଅ ନ ୁ ଭ ୂ ତ ି।",
            videoUrl: "",
          },
          {
            id: "od12_3_3",
            title: "ରୂପନାରାୟଣ ସାହୁ",
            desc: "ଲେଖକ: ଅଖିଳ ମୋହନ ପଟ୍ଟନାୟକ। ଓଡ଼ିଆ ଗ୍ରାମ ଓ ବ୍ୟବସାୟ ଜ ୀ ବ ନ, ସ ା ଧ ୁ ଚ ର ି ତ ୍ ର ଓ ମ ା ନ ବ ି କ ମ ୂ ଲ ୍ ୟ ।",
            videoUrl: "",
          },
          {
            id: "od12_3_4",
            title: "ଆକାଶ କଇଁଚ",
            desc: "ଲେଖକ: ମନୋଜ ଦାସ। ଦ୍ୱ ୀ ପ ଭ ା ଷ ୀ ଲ େ ଖ କ ମ ନ ୋ ଜ ଦ ା ସ ଙ ୍ କ ଶ ୍ ର େ ଷ ୍ ଠ ଓ ଡ ଼ ି ଆ ଗ ଳ ୍ ପ। ଜ ୀ ବ ନ, ସ ୍ ୱ ପ ୍ ନ ଓ ବ ା ସ ୍ ତ ବ ।",
            videoUrl: "",
          },
        ],
      },
      {
        unit: "ଲେଖନ ଓ ବ୍ୟାକରଣ (Writing and Grammar)",
        chapters: [
          {
            id: "od12_4_1",
            title: "ଅବବୋଧ ଓ ସୃଜନାତ୍ମକ ରଚନା",
            desc: "ଗ ଦ ୍ ୟ ଅ ଂ ଶ ବ ୁ ଝ ା। ସ ୃ ଜ ନ ା ତ ୍ ମ କ ର ଚ ନ ା ଲ େ ଖ ା। ଦ ର ଖ ା ସ ୍ ତ ଓ ପ ତ ୍ ର ଲ େ ଖ ନ।",
            videoUrl: "",
          },
          {
            id: "od12_4_2",
            title: "ସଂକ୍ଷିପ୍ତକରଣ ଓ ଭ୍ରମ ସଂଶୋଧନ",
            desc: "ଗ ଦ ୍ ୟ ଅ ଂ ଶ ର ସ ଂ କ ୍ ଷ ି ପ ୍ ତ ସ ା ର। ଭ ୁ ଲ ଥ ି ବ ା ବ ା କ ୍ ୟ ଶ ୁ ଦ ୍ ଧ ।",
            videoUrl: "",
          },
          {
            id: "od12_4_3",
            title: "ବ୍ୟାକରଣ — ରୂଢି, ଏକପଦୀ, ସମୋଚ୍ଚାରିତ ଓ ବିପରୀତ ଶବ୍ଦ",
            desc: "ରୂ ଢ ି ପ ୍ ର ୟ ୋ ଗ। ଏ କ ପ ଦ ୀ କ ର ଣ। ସ ମ ୋ ଚ ୍ ଚ ା ର ି ତ ଭ ି ନ ୍ ନ ା ର ୍ ଥ ।ବ ି ପ ର ୀ ତ ଶ ବ ୍ ଦ।",
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
      desc: "Build the future through technology. Branches include CS, EC, Mechanical, Civil, Chemical and more. Strong demand across all sectors.",
      eligibility: "PCM in Class 12 with 60%+",
      exams: "JEE Main, JEE Advanced, OJEE",
      skills: "Mathematics, Physics, Problem-solving, Programming",
      salary: "₹4–60 LPA",
      scope:
        "AI, robotics, green energy — massive demand across India and globally.",
    },
    {
      title: "MBBS / Medicine",
      tag: "NEET-UG",
      icon: "hospital",
      color: "#f87171",
      desc: "Become a doctor — one of India's most respected careers. Leads to specialisations in surgery, cardiology, neurology, psychiatry and more.",
      eligibility: "PCB in Class 12 with 50%+",
      exams: "NEET-UG",
      skills: "Biology, Anatomy, Patient communication, Clinical skills",
      salary: "₹6–80 LPA",
      scope: "Acute doctor shortage in India — massive rural and urban demand.",
    },
    {
      title: "Data Science and AI",
      tag: "Tech / Analytics",
      icon: "brain",
      color: "#9d6fff",
      desc: "Extract intelligence from data to drive decisions. Machine learning and AI are transforming every industry from finance to healthcare.",
      eligibility: "PCM background, strong Mathematics",
      exams: "JEE, GATE, BITS, IISc entrances",
      skills: "Python, Statistics, Machine learning, SQL",
      salary: "₹8–80 LPA",
      scope: "Fastest growing field in India — 2M+ jobs projected by 2026.",
    },
    {
      title: "NDA and Defence Services",
      tag: "NDA / CDS",
      icon: "star",
      color: "#34d399",
      desc: "Serve the nation as an Army, Navy, or Air Force officer. Prestigious, disciplined career with unmatched pay, perks and national pride.",
      eligibility: "PCM for Air Force, any stream for Army/Navy",
      exams: "NDA Written Exam, SSB Interview",
      skills: "Leadership, General knowledge, Physical fitness",
      salary: "₹56,000–2.5L/month + benefits",
      scope: "Stable, respected career with excellent growth trajectory.",
    },
    {
      title: "Research Scientist",
      tag: "ISRO / DRDO / CSIR",
      icon: "atom",
      color: "#22d3ee",
      desc: "Push boundaries at ISRO, DRDO, IISc, CSIR. Contribute to India's space, defence and scientific programmes.",
      eligibility: "PCM, top academic record required",
      exams: "KVPY, IIT JAM, CSIR-NET, GATE",
      skills: "Domain expertise, Research methodology, Analytical thinking",
      salary: "₹5–35 LPA plus grants",
      scope:
        "ISRO and DRDO recruiting at record levels. Strong government support.",
    },
    {
      title: "Civil Engineering",
      tag: "Construction / Urban",
      icon: "briefcase",
      color: "#fb923c",
      desc: "Design and build bridges, roads, buildings, dams and smart cities. India's infrastructure boom makes this one of the most demanded fields.",
      eligibility: "PCM in Class 12",
      exams: "JEE, OJEE, state engineering entrances",
      skills: "Mathematics, Design, CAD, Project management",
      salary: "₹4–30 LPA",
      scope:
        "Smart cities, metro projects, rural infrastructure — massive national push.",
    },
  ],
  Commerce: [
    {
      title: "Chartered Accountant",
      tag: "CA / ICAI",
      icon: "briefcase",
      color: "#4f8ef7",
      desc: "CA is among India's most respected and highest-paying qualifications. Every company, bank and government body needs CAs for audit, tax and finance.",
      eligibility: "Any stream, strong accounts and mathematics",
      exams: "CA Foundation, Intermediate, Final (ICAI)",
      skills: "Accounting, Taxation, Audit, Financial reporting",
      salary: "₹7–60 LPA",
      scope:
        "Mandatory for all registered companies. Global demand through ICAI network.",
    },
    {
      title: "MBA and Management",
      tag: "CAT / MAT",
      icon: "graduation",
      color: "#9d6fff",
      desc: "Management education opens doors to marketing, finance, HR, operations and strategy roles in top MNCs and Indian corporates globally.",
      eligibility: "Any graduate (any stream)",
      exams: "CAT, MAT, XAT, GMAT for IIMs and top B-schools",
      skills: "Leadership, Communication, Analytical thinking, Strategy",
      salary: "₹8–50 LPA (IIM graduates average ₹25+ LPA)",
      scope:
        "Essential qualification for senior corporate roles across all industries.",
    },
    {
      title: "Banking and Finance",
      tag: "IBPS / SBI",
      icon: "bank",
      color: "#34d399",
      desc: "Career in retail, corporate or investment banking. Fintech revolution is creating new roles in digital payments, crypto and algorithmic trading.",
      eligibility: "Any stream, Commerce preferred",
      exams: "IBPS PO, SBI PO, RBI Grade B, NABARD",
      skills: "Finance, Communication, Numeracy, Customer handling",
      salary: "₹4–25 LPA",
      scope:
        "Fintech boom plus traditional banking — huge recruitment cycle every year.",
    },
    {
      title: "Company Secretary",
      tag: "CS / ICSI",
      icon: "document",
      color: "#22d3ee",
      desc: "Manage corporate governance, legal compliance and shareholder relations. Every listed company requires a qualified Company Secretary.",
      eligibility: "Any stream, Commerce preferred",
      exams: "CS Foundation, Executive and Professional (ICSI)",
      skills: "Corporate law, Communication, Compliance, Ethics",
      salary: "₹5–30 LPA",
      scope:
        "MCA mandate and regulatory growth driving increased demand across sectors.",
    },
  ],
  Arts: [
    {
      title: "Civil Services (IAS/IPS/IFS)",
      tag: "UPSC / OPSC",
      icon: "trophy",
      color: "#4f8ef7",
      desc: "India's most prestigious career path. Lead governance, shape policy and represent India internationally as an IAS, IPS or IFS officer.",
      eligibility: "Any graduate — any stream",
      exams: "UPSC CSE Prelims, Mains and Personality Test",
      skills: "General studies, Essay writing, Current affairs, Ethics, Odia",
      salary: "₹56,000–2.5L/month plus official perks",
      scope:
        "Unmatched authority, impact and societal respect. Odisha OPSC also available.",
    },
    {
      title: "Law (LLB / LLM)",
      tag: "CLAT / Law Entrance",
      icon: "scale",
      color: "#9d6fff",
      desc: "Practice as an advocate, corporate lawyer, judge or legal advisor. Law underpins every sector — corporate, criminal, family, tax and constitutional.",
      eligibility: "Any stream (5-year BA LLB or 3-year LLB after graduation)",
      exams: "CLAT, AILET, LSAT India, Odisha state law entrances",
      skills: "Logical reasoning, Communication, Research, Drafting",
      salary: "₹4–60 LPA",
      scope:
        "LegalTech, corporate law and public interest litigation growing rapidly.",
    },
    {
      title: "Journalism and Mass Communication",
      tag: "Media / Digital",
      icon: "video",
      color: "#fb923c",
      desc: "Tell stories that matter. Build a career in digital journalism, TV broadcasting, documentary filmmaking or content creation.",
      eligibility: "Any stream, strong English and regional language skills",
      exams:
        "IIMC entrance, Symbiosis, Xavier School of Communications, AJKMCRC",
      skills: "Writing, Reporting, Video production, Social media",
      salary: "₹3–25 LPA",
      scope:
        "Digital media boom — content creators and investigative journalists in high demand.",
    },
    {
      title: "Psychology and Counselling",
      tag: "Mental Health",
      icon: "brain",
      color: "#22d3ee",
      desc: "Understand human behaviour and help people through mental health challenges. India faces a critical shortage of trained psychologists and counsellors.",
      eligibility: "Any stream, Science preferred for clinical psychology",
      exams: "DU, JNU, NIMHANS entrance, state university entrances",
      skills: "Empathy, Active listening, Research, Clinical assessment",
      salary: "₹4–20 LPA",
      scope:
        "India's growing mental health awareness — massive shortage of professionals.",
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

// ===== INIT =====
function init() {
  // Load custom video URLs into syllabus on startup
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

  const user = DB.get("user");
  if (!user) {
    showOnboarding();
  } else {
    launchApp();
  }

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      openSearch();
    }
    if (e.key === "Escape") closeSearch();
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      document
        .querySelectorAll(".dropdown-menu")
        .forEach((m) => m.classList.remove("open"));
    }
  });

  window.addEventListener("scroll", () => {
    const nav = document.getElementById("landingNav");
    if (nav)
      nav.style.background =
        window.scrollY > 40 ? "rgba(12,12,14,0.97)" : "rgba(12,12,14,0.85)";
  });
}

// ===== ONBOARDING =====
let obClass = "",
  obStream = "";
function showOnboarding() {
  document.getElementById("onboardingModal").classList.remove("hidden");
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
  launchApp();
  showToast("Welcome, " + name + "! Ready to ace CHSE?", "success");
}

// ===== LAUNCH APP =====
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

// ===== NAVIGATION =====
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

// ===== ICON HELPER =====
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
        <h4>${watchHistory.length}</h4>
        <p>Videos Watched</p>
        <div class="stat-glow" style="background:var(--blue)"></div>
      </div>
      <div class="stat-card">
        <div class="sc-icon-wrap" style="background:var(--green-dim);color:var(--green)">${icon("check", 18)}</div>
        <h4>${Object.keys(completed).length}</h4>
        <p>Topics Done</p>
        <div class="stat-glow" style="background:var(--green)"></div>
      </div>
      <div class="stat-card">
        <div class="sc-icon-wrap" style="background:var(--orange-dim);color:var(--orange)">${icon("fire", 18)}</div>
        <h4>${streak.count}</h4>
        <p>Day Streak</p>
        <div class="stat-glow" style="background:var(--orange)"></div>
      </div>
      <div class="stat-card">
        <div class="sc-icon-wrap" style="background:var(--purple-dim);color:var(--purple)">${icon("clock", 18)}</div>
        <h4>${watchHistory.length > 0 ? Math.floor((watchHistory.length * 40) / 60) + "h" : "0m"}</h4>
        <p>Study Time</p>
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
          const acc = SUBJ_ACCENT[s];
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

// ===== VIDEO CARD =====
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
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
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
        <div class="unit-chevron ${isOpen ? "open" : ""}" id="chev-${ui}">
          ${icon("chevronDown", 17)}
        </div>
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
                  ? `<img src="https://img.youtube.com/vi/${ytId}/mqdefault.jpg" style="width:100%;height:100%;object-fit:cover;border-radius:7px" onerror="this.parentElement.style.background='var(--bg-4)'" alt="thumb">
                     <div class="vi-thumb-overlay">${icon("play", 14)}</div>`
                  : `<div style="width:100%;height:100%;background:linear-gradient(135deg, #1f2937, #111827);display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:7px;color:var(--orange);border:1px solid rgba(255,255,255,0.05);">
                       ${icon("clock", 16)}
                       <span style="font-size:8px;font-weight:800;margin-top:4px;text-transform:uppercase;letter-spacing:0.5px">Soon</span>
                     </div>`
              }
            </div>
            <div class="vi-info">
              <h4>${ch.title}</h4>
              <p>${ch.desc.substring(0, 70)}...</p>
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

// ===== VIDEO PLAYER =====
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
      <button class="btn-ghost btn-sm" onclick="showSubject('${subj}','${cls}')">
        ${icon("arrowLeft", 14)} ${subj}
      </button>
      <span class="bc-sep">/</span>
      <span class="bc-text">${unitName.length > 40 ? unitName.substring(0, 40) + "..." : unitName}</span>
      <span class="bc-sep">/</span>
      <span class="bc-title">${ch.title.length > 35 ? ch.title.substring(0, 35) + "..." : ch.title}</span>
    </div>

    <div class="player-layout">
      <div class="player-main">
        <div class="video-container" id="videoContainer" style="position:relative;">
          ${
            ytId
              ? `<iframe src="https://www.youtube.com/embed/${ytId}?rel=0&modestbranding=1" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="${ch.title}"></iframe>`
              : `<div style="width:100%;height:100%;background:linear-gradient(135deg, #0f172a, #1f2937);display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:12px;color:#f3f4f6;text-align:center;position:absolute;inset:0;">
                   <div style="width:80px;height:80px;background:rgba(255,255,255,0.05);border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:20px;color:var(--orange);box-shadow:0 0 30px rgba(251, 146, 60, 0.1);">
                     ${icon("clock", 40)}
                   </div>
                   <h2 style="font-size:24px;font-weight:800;margin-bottom:12px;letter-spacing:0.5px;">Video Coming Soon!</h2>
                   <p style="color:#9ca3af;font-size:15px;max-width:400px;line-height:1.5;">Our educators are preparing the best quality content for <strong style="color:white;">${ch.title}</strong>. Check back shortly!</p>
                 </div>`
          }
        </div>

        <div class="player-controls">
          <button class="pc-btn" title="Previous chapter" onclick="navigateVideo(-1,'${subj}','${cls}')">
            ${icon("skipBack", 15)}
          </button>
          <button class="pc-btn" title="Next chapter" onclick="navigateVideo(1,'${subj}','${cls}')">
            ${icon("skipForward", 15)}
          </button>
          <button class="pc-btn ${isSaved ? "saved" : ""}" title="Bookmark" onclick="toggleSave('${ch.id}',this)" id="saveBtn">
            ${isSaved ? icon("bookmarkFilled", 15) : icon("bookmark", 15)}
          </button>
          <div class="pc-sep"></div>
          <button class="mark-done-btn ${isDone ? "done" : ""}" id="markDoneBtn" onclick="markComplete('${ch.id}','${subj}','${cls}')">
            ${icon("check", 14)} ${isDone ? "Completed" : "Mark Complete"}
          </button>
        </div>

        <div class="player-info-card">
          <div class="pic-header">
            <div>
              <h2 class="pic-title">${ch.title}</h2>
              <div class="pic-meta">
                <span style="color:${acc};font-weight:700">${subj}</span>
                <span class="meta-dot"></span>
                <span>Class ${cls}</span>
                <span class="meta-dot"></span>
                <span>${unitName.split(":")[0]}</span>
              </div>
            </div>
          </div>
          <p class="pic-desc">${ch.desc}</p>

          <div class="player-tabs">
            <button class="ptab active" onclick="switchPlayerTab('notes',this)">${icon("pen", 13)} Notes</button>
            <button class="ptab" onclick="switchPlayerTab('resources',this)">${icon("folder", 13)} Resources</button>
            <button class="ptab" onclick="switchPlayerTab('url',this)">${icon("link", 13)} Video URL</button>
          </div>
          <div id="ptab-notes" class="tab-pane active">
            <p class="tab-hint">Notes save automatically as you type.</p>
            <textarea class="notes-area" id="videoNotes" placeholder="Start typing notes for this chapter..." oninput="autoSaveNote('${ch.id}',this.value)">${note}</textarea>
          </div>
          <div id="ptab-resources" class="tab-pane">
            ${[
              "NCERT Chapter PDF",
              "Formula Sheet",
              "Practice Questions",
              "Previous Year Questions (PYQ)",
            ]
              .map(
                (r) =>
                  `<div class="resource-row">
                ${icon("document", 15)} ${r}
                <span class="resource-soon">Coming soon</span>
              </div>`,
              )
              .join("")}
          </div>
          <div id="ptab-url" class="tab-pane">
            <p class="tab-hint">Add or update the YouTube video URL for this chapter:</p>
            <div class="url-form">
              <input type="url" id="ytUrlUpdate" placeholder="https://youtube.com/watch?v=..." value="${ch.videoUrl || ""}">
              <button class="btn-primary" onclick="saveVideoUrl('${ch.id}','${subj}','${cls}')">
                ${icon("play", 13)} Save and Play
              </button>
            </div>
            <p class="url-hint">Supports youtube.com/watch?v=... or youtu.be/ links</p>
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
                <h4>${vid.title}</h4>
                <span>${vid.unit ? vid.unit.split(":")[0] : ""}</span>
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

function saveVideoUrl(chId, subj, cls) {
  const input =
    document.getElementById("ytUrlUpdate") ||
    document.getElementById("ytUrlInput");
  if (!input) return;
  const url = input.value.trim();
  if (!url) {
    showToast("Please enter a valid YouTube URL", "error");
    return;
  }
  if (!url.includes("youtube.com") && !url.includes("youtu.be")) {
    showToast("Please enter a YouTube URL", "error");
    return;
  }
  const customUrls = DB.get("videoUrls") || {};
  customUrls[chId] = url;
  DB.set("videoUrls", customUrls);
  if (SYLLABUS[subj] && SYLLABUS[subj][cls]) {
    for (const unit of SYLLABUS[subj][cls]) {
      const ch = unit.chapters.find((c) => c.id === chId);
      if (ch) {
        ch.videoUrl = url;
        break;
      }
    }
  }
  showToast("Video URL saved! Loading...", "success");
  setTimeout(() => playVideo(chId, subj), 500);
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

// ===== CAREER =====
function renderCareer() {
  const stream = STATE.currentCareerStream;
  const careers = CAREERS[stream] || CAREERS.Science;
  return `
  <div>
    <div class="section-head">
      <h2>Career Paths</h2>
      <p>Explore your future — entrance exams, skills and salary expectations</p>
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
            <div class="career-icon" style="background:${c.color}15;color:${c.color}">${icon(c.icon, 22)}</div>
            <div>
              <h3>${c.title}</h3>
              <div class="career-ctag">${c.tag}</div>
            </div>
          </div>
          <p class="career-desc">${c.desc}</p>
          <div class="career-details">
            <div class="cd-row"><span>Eligibility</span><span>${c.eligibility}</span></div>
            <div class="cd-row"><span>Entrance Exams</span><span>${c.exams}</span></div>
            <div class="cd-row"><span>Key Skills</span><span>${c.skills}</span></div>
            <div class="cd-row"><span>Future Scope</span><span>${c.scope}</span></div>
          </div>
          <div class="salary-pill">${c.salary}</div>
        </div>`,
        )
        .join("")}
    </div>
  </div>`;
}

function switchCareerStream(s) {
  STATE.currentCareerStream = s;
  document.getElementById("appMain").innerHTML = renderCareer();
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
    <div class="exam-info-row">
      ${d.stats.map((s) => `<div class="eir-card"><h4>${s.v}</h4><p>${s.l}</p></div>`).join("")}
    </div>
    <div class="row-header" style="margin-bottom:14px"><h3>Subjects for ${exam}</h3></div>
    <div class="subject-cards" style="grid-template-columns:repeat(auto-fill,minmax(160px,1fr))">
      ${d.subjects
        .map(
          (s) => `
        <div class="subj-card" onclick="showSubject('${s}','${STATE.currentClass}')" style="background:${SUBJ_COLORS[s]}">
          <div class="subj-bg-grid"></div>
          <div class="subj-card-icon">${icon(SUBJ_ICON_KEY[s] || "book", 28)}</div>
          <h3>${s}</h3>
          <div class="subj-count">Class ${STATE.currentClass}</div>
        </div>`,
        )
        .join("")}
    </div>
  </div>`;
}

// ===== PROGRESS =====
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

  // Build heatmap data
  const activityMap = {};
  history.forEach((h) => {
    const d = new Date(h.ts).toDateString();
    activityMap[d] = (activityMap[d] || 0) + 1;
  });

  const today = new Date();
  const weeks = [];
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - 182);
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
      week.push(
        `<div class="hm-day ${level} ${isToday ? "today" : ""}" title="${ds}: ${cnt} videos"></div>`,
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
            <h3>Study Activity — Last 6 Months</h3>
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
              (s) =>
                `<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 0;border-bottom:1px solid var(--border)">
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
                      ? `<div style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--border)">
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
        <div class="es-icon">${icon("bookmark", 48)}</div>
        <h3>No saved videos yet</h3>
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
    <div class="video-grid">
      ${videos.map((v) => videoCard(v.ch, v.subj, v.progress)).join("")}
    </div>
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
        <div class="nlp-hdr">
          <h3>Notes (${noteIds.length})</h3>
          <button class="btn-icon" onclick="exportAllNotes()" title="Export all">${icon("download", 14)}</button>
        </div>
        ${
          noteIds.length === 0
            ? `<p style="padding:20px;color:var(--text-3);font-size:13px;text-align:center">No notes yet.<br>Take notes while watching videos.</p>`
            : noteIds
                .map((id) => {
                  const info = findVideoById(id);
                  return info
                    ? `<div class="note-item ${STATE.activeNote === id ? "active" : ""}" onclick="selectNote('${id}')">
                <h4>${info.ch.title}</h4>
                <p>${info.subj} &middot; ${notes[id].substring(0, 30)}...</p>
              </div>`
                    : "";
                })
                .filter(Boolean)
                .join("")
        }
      </div>
      <div class="notes-editor-panel" id="notesEditor">
        ${
          STATE.activeNote && notes[STATE.activeNote]
            ? renderNoteEditor(STATE.activeNote, notes[STATE.activeNote])
            : `<div style="display:flex;align-items:center;justify-content:center;height:100%;flex-direction:column;gap:12px;color:var(--text-3)">
              ${icon("pen", 32)}
              <p style="font-size:13px">Select a note to view and edit</p>
            </div>`
        }
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
  <div class="ne-body">
    <textarea class="ne-textarea" id="noteEditorArea" oninput="autoSaveNote('${id}',this.value)">${content}</textarea>
  </div>
  <div class="ne-footer">
    <span style="font-size:11px;color:var(--text-3)">${info.subj} &middot; Class ${info.cls}</span>
  </div>`;
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
          <div class="profile-avatar-img">
            ${avatarUrl ? `<img src="${avatarUrl}" alt="avatar">` : initial}
          </div>
          <label class="avatar-edit" title="Change photo">
            ${icon("pen", 12)}
            <input type="file" accept="image/*" style="display:none" onchange="changeAvatar(this)">
          </label>
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
            <div class="field-wrap">
              <label>Full Name</label>
              <input type="text" id="pf-name" value="${user.name}">
            </div>
            <div class="field-wrap">
              <label>Class</label>
              <select id="pf-class">
                <option value="11" ${user.class === "11" ? "selected" : ""}>Class 11</option>
                <option value="12" ${user.class === "12" ? "selected" : ""}>Class 12</option>
              </select>
            </div>
            <div class="field-wrap">
              <label>Stream</label>
              <select id="pf-stream">
                <option value="Science" ${user.stream === "Science" ? "selected" : ""}>Science</option>
                <option value="Commerce" ${user.stream === "Commerce" ? "selected" : ""}>Commerce</option>
                <option value="Arts" ${user.stream === "Arts" ? "selected" : ""}>Arts</option>
              </select>
            </div>
            <div class="field-wrap">
              <label>School / College</label>
              <input type="text" id="pf-school" value="${user.school || ""}" placeholder="Your institution name">
            </div>
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
                <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px">
                  <span style="color:${SUBJ_ACCENT[s]};font-weight:700">${s}</span>
                  <span>${done}/${total} chapters</span>
                </div>
                <div class="sp-bar-track" style="height:6px">
                  <div class="sp-bar-fill" style="width:${pct}%;background:${SUBJ_ACCENT[s]}"></div>
                </div>
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
  const settings = DB.get("settings") || {
    notifications: true,
    autoplay: false,
    darkMode: true,
  };
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
              `<div class="sn-item ${tab === s.id ? "active" : ""}" onclick="switchSettingsTab('${s.id}')">
            ${icon(s.ikey, 15)} ${s.label}
          </div>`,
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
                  `<div class="settings-row">
                <div class="sr-info"><h4>${r.label}</h4><p>${r.desc}</p></div>
                <div class="toggle ${settings[r.key] ? "on" : ""}" onclick="toggleSetting('${r.key}',this)"></div>
              </div>`,
              )
              .join("")}
          </div>
          <div class="settings-section">
            <h3>Display</h3>
            <div class="settings-row">
              <div class="sr-info"><h4>Active Class</h4><p>Switch between Class 11 and Class 12 syllabus</p></div>
              <div class="class-toggle">
                <button class="ct-btn ${STATE.currentClass === "11" ? "active" : ""}" onclick="switchGlobalClass('11')">11</button>
                <button class="ct-btn ${STATE.currentClass === "12" ? "active" : ""}" onclick="switchGlobalClass('12')">12</button>
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
                  `<div class="settings-row">
                <div class="sr-info"><h4>${r.label}</h4><p>${r.desc}</p></div>
                <div class="toggle ${settings[r.key] ? "on" : ""}" onclick="toggleSetting('${r.key}',this)"></div>
              </div>`,
              )
              .join("")}
          </div>`
              : `
          <div class="settings-section">
            <h3>Data Management</h3>
            <div class="settings-row">
              <div class="sr-info"><h4>Export all notes</h4><p>Download all your notes as a text file</p></div>
              <button class="btn-ghost btn-sm" onclick="exportAllNotes()">${icon("download", 13)} Export</button>
            </div>
            <div class="settings-row">
              <div class="sr-info"><h4>Clear watch history</h4><p>Remove all video watch records</p></div>
              <button class="btn-ghost btn-sm" onclick="clearData('watchHistory')">Clear</button>
            </div>
            <div class="settings-row">
              <div class="sr-info"><h4>Reset all progress</h4><p>Clear completed topics — cannot be undone</p></div>
              <button class="btn-ghost btn-sm" style="color:var(--red);border-color:var(--red-dim)" onclick="clearData('completedTopics')">Reset</button>
            </div>
          </div>`
        }
      </div>
    </div>
  </div>`;
}

function switchSettingsTab(tab) {
  STATE.settingsTab = tab;
  document.getElementById("appMain").innerHTML = renderSettings();
}

function toggleSetting(key, el) {
  const settings = DB.get("settings") || {};
  settings[key] = !settings[key];
  DB.set("settings", settings);
  el.classList.toggle("on", !!settings[key]);
}

function clearData(key) {
  if (confirm("Are you sure? This cannot be undone.")) {
    DB.del(key);
    showToast("Data cleared", "info");
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

// ===== HEATMAP (Progress page) =====
function initHeatmap() {
  const grid = document.getElementById("heatmapGrid");
  if (!grid) return;
  // Already rendered inline in renderProgress
}

// ===== START =====
window.addEventListener("DOMContentLoaded", init);
