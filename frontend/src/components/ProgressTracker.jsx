import React, { useMemo, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useApp } from "../context/AppContext.jsx";
import { STREAM_SUBJECTS, SYLLABUS_DATA, resolveChapterInfo } from "../data/syllabusData.js";
import {
  IconCheck,
  IconFire,
  IconVideo,
  IconClock,
  IconSparkles,
  IconBook,
  IconBookmark,
  IconBookmarkFilled,
  IconPlay,
  IconTrash,
  IconArrowRight,
} from "./Icons.jsx";
import { calculateStreak } from "../utils/streak.js";

export const ProgressTracker = () => {
  const { user, setAuthModalOpen, setAuthMode } = useAuth();
  const {
    currentStream,
    currentClass,
    setCurrentClass,
    setCurrentSection,
    setCurrentSubject,
    playVideo,
    toggleComplete,
    toggleSave,
    getChapterVideo,
  } = useApp();

  const completedMap = user?.completedTopics || {};
  const savedIds = user?.savedVideos || [];
  const streak = calculateStreak(completedMap);
  const subjects = STREAM_SUBJECTS[currentStream] || STREAM_SUBJECTS["Science"];

  const heatmapScrollRef = useRef(null);

  // Auto-scroll to current week on mobile mount
  useEffect(() => {
    if (heatmapScrollRef.current) {
      heatmapScrollRef.current.scrollLeft = heatmapScrollRef.current.scrollWidth;
    }
  }, []);

  // Map user actual completions by YYYY-MM-DD
  const actualDatesMap = useMemo(() => {
    const counts = {};
    Object.values(completedMap).forEach((val) => {
      let dStr = null;
      if (typeof val === "string") {
        dStr = val.slice(0, 10);
      } else if (val && typeof val === "object" && val.completedAt) {
        dStr = String(val.completedAt).slice(0, 10);
      }
      if (dStr) {
        counts[dStr] = (counts[dStr] || 0) + 1;
      }
    });
    return counts;
  }, [completedMap]);

  // Generate 52 weeks across all 12 calendar months (364 days ending on Saturday of current week)
  const { weeks, monthLabels, totalYearActivity } = useMemo(() => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 is Sun, 6 is Sat
    const endDate = new Date(today);
    endDate.setDate(today.getDate() + (6 - dayOfWeek));

    const startDate = new Date(endDate);
    startDate.setDate(endDate.getDate() - (52 * 7) + 1);

    const weeksList = [];
    const labels = [];
    let lastMonth = -1;
    let lastLabelWeek = -10;
    let totalCompleted = 0;

    for (let w = 0; w < 52; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        const curDate = new Date(startDate);
        curDate.setDate(startDate.getDate() + (w * 7 + d));
        const dateStr = curDate.toISOString().slice(0, 10);
        const isFuture = curDate > today;

        let count = 0;
        let level = 0;

        if (!isFuture) {
          if (actualDatesMap[dateStr]) {
            count = actualDatesMap[dateStr];
            level = count >= 4 ? 3 : count >= 2 ? 2 : 1;
            totalCompleted += count;
          }
        }

        days.push({
          date: curDate,
          dateStr,
          formatted: curDate.toLocaleDateString("en-IN", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
          isFuture,
          count,
          level,
        });
      }

      // Check month boundary - capture each month across the full 12-month period
      const checkDayObj = days[3] || days[0];
      const checkDate = checkDayObj?.date;
      if (checkDate instanceof Date && !isNaN(checkDate)) {
        const m = checkDate.getMonth();
        if (m !== lastMonth && (w - lastLabelWeek >= 3) && (52 - w >= 2)) {
          labels.push({
            weekIndex: w,
            label: checkDate.toLocaleString("en-US", { month: "short" }),
          });
          lastMonth = m;
          lastLabelWeek = w;
        }
      }

      weeksList.push(days);
    }

    return { weeks: weeksList, monthLabels: labels, totalYearActivity: totalCompleted };
  }, [actualDatesMap, streak]);

  const getSubjDone = (subj) => {
    const units = SYLLABUS_DATA[subj]?.[currentClass] || [];
    let total = 0;
    let done = 0;
    units.forEach((u) => {
      u.chapters?.forEach((ch) => {
        total++;
        if (completedMap[ch.id]) done++;
      });
    });
    return { total, done, pct: total ? Math.round((done / total) * 100) : 0 };
  };

  const savedChapterList = useMemo(() => {
    return savedIds
      .map((id) => {
        const meta = resolveChapterInfo(id);
        if (!meta) {
          return {
            id,
            meta: {
              title: `Chapter ${id}`,
              subject: "Saved Lecture",
              class: currentClass,
              stream: currentStream,
              unit: "Study Resource",
            },
            video: getChapterVideo({ id, title: `Chapter ${id}` }),
            isDone: Boolean(completedMap[id]),
          };
        }
        const video = getChapterVideo({
          id,
          title: meta.title,
          videoUrl: meta.videoUrl,
        });
        return {
          id,
          meta,
          video,
          isDone: Boolean(completedMap[id]),
        };
      })
      .filter(Boolean);
  }, [savedIds, completedMap, getChapterVideo, currentClass, currentStream]);

  const totalMinutes = Object.keys(completedMap).length * 45;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-7 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/[0.06]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0c0d10] border border-white/[0.06] text-zinc-300 text-xs font-mono mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>ACADEMIC ANALYTICS & RETENTION MATRIX</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Study Progress & Mastery
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl leading-relaxed">
            Monitor completed syllabus units, revision bookmarks, daily learning consistency, and exam readiness.
          </p>
        </div>

        {/* Class Switcher */}
        <div className="flex bg-[#0c0d10] p-1 rounded-lg border border-white/[0.06] shrink-0 self-start sm:self-auto">
          {["11", "12"].map((cls) => (
            <button
              key={cls}
              onClick={() => setCurrentClass(cls)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all ${
                currentClass === cls
                  ? "bg-white text-black shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Class {cls} (+2)
            </button>
          ))}
        </div>
      </div>

      {/* Guest Student Sign In Prompt Banner */}
      {!user && (
        <div className="p-4 sm:p-5 rounded-xl bg-[#0c0d10] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/[0.04] text-zinc-200 flex items-center justify-center shrink-0">
              <IconCheck size={18} />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Create a free student account to save your progress</div>
              <div className="text-xs text-zinc-400">Chapters and topics marked as complete will be permanently synchronized across all your devices.</div>
            </div>
          </div>
          <button
            onClick={() => {
              setAuthMode("register");
              setAuthModalOpen(true);
            }}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-black bg-white hover:bg-zinc-200 shrink-0 transition-all shadow-sm"
          >
            Create Account
          </button>
        </div>
      )}

      {/* Key Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div className="bg-[#0c0d10] p-4 sm:p-5 rounded-xl border border-white/[0.06] shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
            <IconCheck size={16} />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-white font-mono">{Object.keys(completedMap).length}</div>
          <div className="text-xs text-zinc-400 font-medium mt-1">Chapters Mastered</div>
        </div>

        <div className="bg-[#0c0d10] p-4 sm:p-5 rounded-xl border border-white/[0.06] shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
            <IconFire size={16} />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-white font-mono">{streak} {streak === 1 ? "Day" : "Days"}</div>
          <div className="text-xs text-zinc-400 font-medium mt-1">Active Study Streak</div>
        </div>

        <div className="bg-[#0c0d10] p-4 sm:p-5 rounded-xl border border-white/[0.06] shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-white/[0.04] text-zinc-300 flex items-center justify-center mb-3">
            <IconVideo size={16} />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-white font-mono">{savedIds.length}</div>
          <div className="text-xs text-zinc-400 font-medium mt-1">Saved for Revision</div>
        </div>

        <div className="bg-[#0c0d10] p-4 sm:p-5 rounded-xl border border-white/[0.06] shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-white/[0.04] text-zinc-300 flex items-center justify-center mb-3">
            <IconClock size={16} />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-white font-mono">
            {hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`}
          </div>
          <div className="text-xs text-zinc-400 font-medium mt-1">Total Study Time</div>
        </div>
      </div>

      {/* Redesigned 12-Month 52-Week Activity Heatmap Card */}
      <div className="bg-[#0c0d10] rounded-xl p-5 sm:p-7 border border-white/[0.06] shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-white">Daily Study Activity Heatmap</h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              52-week consistency matrix tracking lecture completions over 12 months
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/60 border border-white/[0.06] text-xs text-zinc-300 font-mono self-start sm:self-auto">
            <IconFire size={13} className={streak > 0 ? "text-amber-400" : "text-zinc-500"} />
            <span>{streak} {streak === 1 ? "day streak active" : streak > 0 ? "days streak active" : "day streak"}</span>
          </div>
        </div>

        {/* 52-Week 12-Month Calendar Grid */}
        <div className="overflow-x-auto pb-3 custom-scrollbar" ref={heatmapScrollRef}>
          <div className="min-w-[800px] space-y-2">
            {/* Header: Exact 12 Months Aligned over 52 Columns */}
            <div
              className="text-[10px] font-mono text-zinc-400 pl-8 pr-1 relative h-4 select-none"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(52, minmax(0, 1fr))",
                columnGap: "3px",
              }}
            >
              {monthLabels.map((m, i) => (
                <span
                  key={i}
                  style={{ gridColumnStart: m.weekIndex + 1 }}
                  className="whitespace-nowrap font-medium"
                >
                  {m.label}
                </span>
              ))}
            </div>

            <div className="flex gap-2.5">
              {/* Day Labels (Sun to Sat with Mon, Wed, Fri labeled) */}
              <div
                className="text-[9px] font-mono text-zinc-500 w-6 shrink-0 select-none py-[1px]"
                style={{
                  display: "grid",
                  gridTemplateRows: "repeat(7, 11px)",
                  rowGap: "3px",
                  alignItems: "center",
                }}
              >
                <span></span>
                <span>Mon</span>
                <span></span>
                <span>Wed</span>
                <span></span>
                <span>Fri</span>
                <span></span>
              </div>

              {/* 52-Column Day Grid */}
              <div
                className="flex-1"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(52, minmax(0, 1fr))",
                  columnGap: "3px",
                }}
              >
                {weeks.map((week, wIdx) => (
                  <div
                    key={wIdx}
                    style={{
                      display: "grid",
                      gridTemplateRows: "repeat(7, 11px)",
                      rowGap: "3px",
                    }}
                  >
                    {week.map((day, dIdx) => {
                      const bg =
                        day.isFuture
                          ? "bg-transparent border border-white/[0.02] opacity-20 pointer-events-none"
                          : day.level === 3
                          ? "bg-white border border-white"
                          : day.level === 2
                          ? "bg-zinc-400 border border-zinc-400"
                          : day.level === 1
                          ? "bg-zinc-700 border border-zinc-600"
                          : "bg-[#111215] border border-white/[0.04]";

                      return (
                        <div
                          key={dIdx}
                          className={`w-full aspect-square rounded-[2px] ${bg} transition-transform hover:scale-125 cursor-pointer`}
                          title={
                            day.isFuture
                              ? "Upcoming date"
                              : `${day.count > 0 ? `${day.count} topic${day.count > 1 ? "s" : ""} completed` : "No activity"} on ${day.formatted}`
                          }
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-zinc-500 pt-3 border-t border-white/[0.06] font-mono gap-2">
          <span>Continuous 12-Month Board Exam Preparation History</span>
          <div className="flex items-center gap-1.5 self-end sm:self-auto">
            <span>Less</span>
            <div className="w-3 h-3 rounded-[2px] bg-[#111215] border border-white/[0.04]"></div>
            <div className="w-3 h-3 rounded-[2px] bg-zinc-700"></div>
            <div className="w-3 h-3 rounded-[2px] bg-zinc-400"></div>
            <div className="w-3 h-3 rounded-[2px] bg-white"></div>
            <span>More</span>
          </div>
        </div>
      </div>

      {/* Subject-Wise Progress Bars */}
      <div className="bg-[#0c0d10] rounded-xl p-5 sm:p-7 border border-white/[0.06] shadow-sm space-y-5">
        <div>
          <h3 className="text-base font-bold text-white">
            Subject Breakdown — Class {currentClass} ({currentStream} Stream)
          </h3>
          <p className="text-xs text-zinc-400 mt-0.5">
            Syllabus coverage calculated per official CHSE Odisha guidelines
          </p>
        </div>

        <div className="space-y-3">
          {subjects.map((subj) => {
            const { total, done, pct } = getSubjDone(subj);
            return (
              <div key={subj} className="space-y-2 p-3.5 rounded-lg bg-black/60 border border-white/[0.04]">
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-white text-sm font-semibold">{subj}</span>
                  <span className="text-zinc-400 font-mono">
                    <b className="text-white font-bold">{done}</b> of {total} chapters ({pct}%)
                  </span>
                </div>
                <div className="w-full h-1.5 bg-black/80 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white transition-all duration-500 rounded-full"
                    style={{ width: `${pct}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bookmarked Videos & Watch Later Section */}
      <div id="saved-videos" className="bg-[#0c0d10] rounded-xl p-5 sm:p-7 border border-white/[0.06] shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.04]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <IconBookmarkFilled size={16} />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Bookmarked Videos & Watch Later</h3>
              <p className="text-xs text-zinc-400 mt-0.5">
                Saved lectures and chapters preserved in your account for rapid revision
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-zinc-300 self-start sm:self-auto">
            <span className="text-amber-400 font-bold">{savedChapterList.length}</span>
            <span>saved {savedChapterList.length === 1 ? "video" : "videos"}</span>
          </div>
        </div>

        {savedChapterList.length === 0 ? (
          <div className="py-12 px-4 rounded-xl bg-black/40 border border-dashed border-white/[0.08] text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-white/[0.04] text-zinc-500 mx-auto flex items-center justify-center">
              <IconBookmark size={22} />
            </div>
            <div className="space-y-1 max-w-sm mx-auto">
              <div className="text-sm font-semibold text-white">No bookmarked videos yet</div>
              <p className="text-xs text-zinc-400">
                Click the bookmark icon next to any chapter in the syllabus or video player to bookmark it for quick exam prep.
              </p>
            </div>
            <button
              onClick={() => {
                setCurrentSection("syllabus");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-all shadow-sm"
            >
              <span>Browse Syllabus</span>
              <IconArrowRight size={13} />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedChapterList.map((item) => (
              <div
                key={item.id}
                className="group rounded-xl bg-black/60 border border-white/[0.06] hover:border-white/[0.18] p-4 flex flex-col justify-between gap-3.5 transition-all shadow-sm"
              >
                {/* Top: Thumbnail & Details */}
                <div className="space-y-3">
                  {/* Video Thumbnail Preview */}
                  <div
                    onClick={() => playVideo(item.video, item.meta.subject, item.meta.class)}
                    className="relative aspect-video rounded-lg overflow-hidden bg-black/80 border border-white/[0.06] cursor-pointer select-none flex items-center justify-center group/thumb"
                    title={`Watch: ${item.meta.title}`}
                  >
                    {item.video?.thumbnailUrl ? (
                      <>
                        <img
                          src={item.video.thumbnailUrl}
                          alt={item.meta.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover/thumb:scale-105"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover/thumb:bg-black/20 transition-colors flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-white/95 text-black flex items-center justify-center shadow-lg transition-transform group-hover/thumb:scale-110">
                            <IconPlay size={13} className="ml-0.5" />
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-[#0e0f12] text-zinc-500 p-2 text-center">
                        <IconClock size={18} className="text-zinc-500 mb-1" />
                        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-tight">Coming Soon</span>
                      </div>
                    )}
                  </div>

                  {/* Metadata and Title */}
                  <div>
                    <div className="flex items-center gap-1.5 flex-wrap mb-1.5">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/[0.06]">
                        {item.meta.subject}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400">
                        Class {item.meta.class}
                      </span>
                      {item.isDone && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 inline-flex items-center gap-1 ml-auto">
                          <IconCheck size={10} /> Done
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-semibold text-white line-clamp-2 leading-snug group-hover:text-zinc-100">
                      {item.meta.title}
                    </h4>
                    {item.meta.unit && (
                      <p className="text-[11px] text-zinc-400 font-mono mt-1 truncate">
                        {item.meta.unit}
                      </p>
                    )}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between gap-2">
                  <button
                    onClick={() => playVideo(item.video, item.meta.subject, item.meta.class)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-zinc-200 text-black text-xs font-semibold transition-all shadow-sm flex-1 justify-center"
                  >
                    <IconPlay size={12} />
                    <span>Watch</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleComplete(item.id)}
                    className={`p-2 rounded-lg border text-xs transition-colors ${
                      item.isDone
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                        : "bg-white/[0.03] border-white/[0.06] text-zinc-400 hover:text-white"
                    }`}
                    title={item.isDone ? "Mark as Incomplete" : "Mark as Completed"}
                  >
                    <IconCheck size={14} />
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleSave(item.id)}
                    className="p-2 rounded-lg border bg-white/[0.03] border-white/[0.06] text-zinc-400 hover:text-red-400 hover:border-red-500/30 transition-colors"
                    title="Remove from saved bookmarks"
                  >
                    <IconTrash size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressTracker;
