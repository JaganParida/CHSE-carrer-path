import React, { useState, useEffect } from "react";
import { useApp } from "../context/AppContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { SYLLABUS_DATA, STREAM_SUBJECTS, resolveChapterInfo } from "../data/syllabusData.js";
import {
  IconCrown,
  IconPlay,
  IconCheck,
  IconEdit,
  IconLink,
  IconPlus,
  IconTrash,
  IconVideo,
  IconClose,
  IconSparkles,
  IconUser,
  IconChart,
  IconSearch,
  IconClock,
  IconChevronDown,
} from "./Icons.jsx";
import { calculateStreak } from "../utils/streak.js";

export const AdminStudio = () => {
  const { isAdmin, user, setAuthModalOpen, setAuthMode } = useAuth();
  const {
    currentStream,
    setCurrentStream,
    currentClass,
    setCurrentClass,
    setCurrentSection,
    adminUpdateVideoLink,
    adminClearVideoLink,
    getChapterVideo,
    playVideo,
    showToast,
  } = useApp();

  // Top-level tab switcher: Video Manager vs Student Progress
  const [adminTab, setAdminTab] = useState("videos"); // "videos" | "students"

  // Video Manager states
  const [activeTabStream, setActiveTabStream] = useState(currentStream);
  const [activeTabClass, setActiveTabClass] = useState(currentClass);
  const subjectsList = STREAM_SUBJECTS[activeTabStream] || STREAM_SUBJECTS["Science"];
  const [selectedSubject, setSelectedSubject] = useState(subjectsList[0] || "Physics");
  const [filterMode, setFilterMode] = useState("all");

  const [editingChapter, setEditingChapter] = useState(null);
  const [inputUrl, setInputUrl] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");

  // Student Progress & Activity states
  const [students, setStudents] = useState([]);
  const [loadingStudents, setLoadingStudents] = useState(false);
  const [studentSearch, setStudentSearch] = useState("");
  const [studentStreamFilter, setStudentStreamFilter] = useState("all");
  const [expandedStudentId, setExpandedStudentId] = useState(null);

  // Fetch students progress from backend
  const fetchStudents = async () => {
    setLoadingStudents(true);
    try {
      const headers = {};
      const localToken = localStorage.getItem("chsetube_token");
      if (localToken) headers["Authorization"] = `Bearer ${localToken}`;

      const res = await fetch("/api/admin/students", {
        headers,
        credentials: "include",
      });
      const data = await res.json();
      if (data.success && Array.isArray(data.students)) {
        setStudents(data.students);
      }
    } catch (err) {
      console.warn("Failed to fetch students from backend, showing empty/local list.", err);
    } finally {
      setLoadingStudents(false);
    }
  };

  const handleDeleteStudent = async (studentId, studentName) => {
    if (!window.confirm(`Are you sure you want to permanently delete student "${studentName}"?`)) {
      return;
    }
    try {
      const headers = {};
      const localToken = localStorage.getItem("chsetube_token");
      if (localToken) headers["Authorization"] = `Bearer ${localToken}`;

      const res = await fetch(`/api/admin/students/${studentId}`, {
        method: "DELETE",
        headers,
        credentials: "include",
      });
      const data = await res.json();
      if (data.success) {
        showToast(data.message || `Deleted ${studentName}`, "success");
        setStudents((prev) => prev.filter((s) => s.id !== studentId));
      } else {
        showToast(data.message || "Failed to delete student.", "error");
      }
    } catch (err) {
      showToast("Network error deleting student.", "error");
    }
  };

  useEffect(() => {
    if (adminTab === "students" && isAdmin) {
      fetchStudents();
    }
  }, [adminTab, isAdmin]);

  // If user is not an admin, deny access completely
  if (!user || !isAdmin) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center animate-fadeIn">
        <div className="bg-[#111215] border border-[#23252a] rounded-xl p-8 sm:p-10 shadow-sm space-y-5">
          <div className="w-12 h-12 rounded-lg bg-[#18191d] border border-[#27292f] text-zinc-400 flex items-center justify-center mx-auto shadow-sm">
            <IconCrown size={22} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-zinc-100 tracking-tight">Admin Access Required</h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
              This area is restricted to authorized platform administrators only.
            </p>
          </div>
          <div className="pt-2">
            <button
              onClick={() => setCurrentSection("dashboard")}
              className="px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold transition-all shadow-sm"
            >
              Return to Student Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Chapters computation for Video Manager
  const syllabus = SYLLABUS_DATA[selectedSubject]?.[activeTabClass] || [];
  const allChapters = [];
  syllabus.forEach((unit) => {
    unit.chapters?.forEach((ch) => {
      allChapters.push({ ...ch, unitName: unit.unit });
    });
  });

  const totalChapters = allChapters.length;
  const activeChapters = allChapters.filter((ch) => getChapterVideo(ch).isAvailable).length;
  const coveragePercent = totalChapters ? Math.round((activeChapters / totalChapters) * 100) : 0;

  const filteredChapters = allChapters.filter((ch) => {
    const isAvail = getChapterVideo(ch).isAvailable;
    if (filterMode === "active") return isAvail;
    if (filterMode === "missing") return !isAvail;
    return true;
  });

  const openEditor = (ch) => {
    const effective = getChapterVideo(ch);
    setEditingChapter(ch);
    setInputUrl(effective.videoUrl || "");
    setInputTitle(effective.title || "");
    setInputDesc(effective.desc || "");
  };

  const handleSaveVideo = (e) => {
    e.preventDefault();
    if (!editingChapter) return;
    adminUpdateVideoLink(editingChapter.id, inputUrl, inputTitle, inputDesc);
    setEditingChapter(null);
  };

  // Filtered Students list
  const filteredStudents = students.filter((s) => {
    const matchesStream = studentStreamFilter === "all" || s.stream === studentStreamFilter;
    if (!matchesStream) return false;
    if (!studentSearch.trim()) return true;
    const q = studentSearch.toLowerCase();
    return s.name?.toLowerCase().includes(q) || s.email?.toLowerCase().includes(q);
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
      {/* Top Admin Header with Tab Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#1f2127]">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#111215] border border-[#23252a] text-zinc-300 text-xs font-mono mb-1.5">
            <IconCrown size={14} className="text-zinc-200" />
            <span>PLATFORM ADMINISTRATOR CONSOLE</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight">
            Admin Studio & Analytics
          </h1>
        </div>

        {/* Studio Primary Tabs */}
        <div className="flex bg-[#111215] p-1 rounded-lg border border-[#23252a] shrink-0 self-start sm:self-auto">
          <button
            onClick={() => setAdminTab("videos")}
            className={`px-3.5 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all ${
              adminTab === "videos"
                ? "bg-zinc-100 text-zinc-950 shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <IconVideo size={13} />
            <span>Video Link Manager</span>
          </button>
          <button
            onClick={() => setAdminTab("students")}
            className={`px-3.5 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all ${
              adminTab === "students"
                ? "bg-zinc-100 text-zinc-950 shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <IconChart size={13} />
            <span>Student Progress & Activity</span>
          </button>
        </div>
      </div>

      {/* TAB 1: VIDEO LINK MANAGER */}
      {adminTab === "videos" && (
        <div className="space-y-6 animate-fadeIn">
          {/* Header Banner */}
          <div className="rounded-xl bg-[#111215] p-5 sm:p-6 border border-[#23252a] shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-zinc-100 tracking-tight">
                  Curriculum YouTube Lecture Link Manager
                </h2>
                <p className="text-xs text-zinc-400 mt-1 max-w-2xl leading-relaxed">
                  Assign or modify YouTube lecture videos for any CHSE Odisha stream, class, subject, or chapter. Changes reflect immediately across student portals and sync to MongoDB.
                </p>
              </div>

              <div className="flex flex-col sm:items-end gap-1.5 shrink-0 bg-[#0c0d0f] p-3.5 rounded-lg border border-[#23252a]">
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                  {selectedSubject} (Class {activeTabClass}) Coverage
                </div>
                <div className="text-xl font-bold text-zinc-100 flex items-baseline gap-1 font-mono">
                  <span>{activeChapters} / {totalChapters}</span>
                  <span className="text-xs font-normal text-zinc-400">({coveragePercent}%)</span>
                </div>
                <div className="w-36 h-1.5 bg-[#18191d] rounded-full overflow-hidden mt-1">
                  <div
                    className="h-full bg-zinc-200 transition-all duration-500 rounded-full"
                    style={{ width: `${coveragePercent}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Selectors Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {/* Stream Selector */}
            <div className="bg-[#111215] p-3.5 rounded-xl border border-[#23252a]">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                1. Select Stream
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {["Science", "Commerce", "Arts"].map((st) => (
                  <button
                    key={st}
                    onClick={() => {
                      setActiveTabStream(st);
                      setSelectedSubject(STREAM_SUBJECTS[st][0]);
                    }}
                    className={`py-1.5 px-2 rounded-md text-xs font-semibold transition-all ${
                      activeTabStream === st
                        ? "bg-zinc-100 text-zinc-950 shadow-sm"
                        : "bg-[#0c0d0f] text-zinc-400 border border-[#23252a] hover:text-zinc-200"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Class Selector */}
            <div className="bg-[#111215] p-3.5 rounded-xl border border-[#23252a]">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                2. Select Class
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {["11", "12"].map((cls) => (
                  <button
                    key={cls}
                    onClick={() => setActiveTabClass(cls)}
                    className={`py-1.5 px-2 rounded-md text-xs font-semibold transition-all ${
                      activeTabClass === cls
                        ? "bg-zinc-100 text-zinc-950 shadow-sm"
                        : "bg-[#0c0d0f] text-zinc-400 border border-[#23252a] hover:text-zinc-200"
                    }`}
                  >
                    Class {cls}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Mode */}
            <div className="bg-[#111215] p-3.5 rounded-xl border border-[#23252a]">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                3. Chapter Filter
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: "all", label: "All" },
                  { id: "active", label: "Has Video" },
                  { id: "missing", label: "Missing" },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFilterMode(f.id)}
                    className={`py-1.5 px-2 rounded-md text-[11px] font-semibold transition-all ${
                      filterMode === f.id
                        ? "bg-zinc-100 text-zinc-950 shadow-sm"
                        : "bg-[#0c0d0f] text-zinc-400 border border-[#23252a] hover:text-zinc-200"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Subject Pills Bar */}
          <div className="flex gap-2 overflow-x-auto pb-1 custom-scrollbar">
            {subjectsList.map((subj) => (
              <button
                key={subj}
                onClick={() => setSelectedSubject(subj)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
                  selectedSubject === subj
                    ? "bg-zinc-100 text-zinc-950 border-white shadow-sm"
                    : "bg-[#111215] text-zinc-400 border-[#23252a] hover:text-zinc-200"
                }`}
              >
                <span>{subj}</span>
              </button>
            ))}
          </div>

          {/* Chapters Table */}
          <div className="bg-[#111215] rounded-xl border border-[#23252a] overflow-hidden shadow-sm">
            <div className="p-4 border-b border-[#1f2127] flex items-center justify-between">
              <div>
                <h2 className="text-sm sm:text-base font-bold text-zinc-100 flex items-center gap-2">
                  <span>{selectedSubject}</span>
                  <span className="text-xs font-normal text-zinc-400">· Class {activeTabClass} · {activeTabStream} Stream</span>
                </h2>
                <div className="text-xs text-zinc-400 mt-0.5">
                  Showing {filteredChapters.length} chapters
                </div>
              </div>
            </div>

            <div className="divide-y divide-[#1f2127]">
              {filteredChapters.length === 0 ? (
                <div className="p-10 text-center text-zinc-500 text-xs">
                  No chapters match the selected filter.
                </div>
              ) : (
                filteredChapters.map((ch) => {
                  const video = getChapterVideo(ch);
                  return (
                    <div
                      key={ch.id}
                      className="p-3.5 sm:p-4 hover:bg-[#16181d] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-3.5"
                    >
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        <div className="w-24 sm:w-28 aspect-video rounded-lg overflow-hidden bg-[#0c0d0f] border border-[#23252a] shrink-0 relative group">
                          {video.youtubeId ? (
                            <>
                              <img
                                src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                                alt={video.title}
                                className="w-full h-full object-cover"
                              />
                              <button
                                onClick={() => playVideo(ch, selectedSubject, activeTabClass)}
                                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity"
                                title="Test video"
                              >
                                <IconPlay size={16} />
                              </button>
                            </>
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-zinc-500 gap-1 text-[10px] font-mono">
                              <IconVideo size={14} />
                              <span>No link</span>
                            </div>
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 mb-1 flex-wrap font-mono">
                            <span className="text-[10px] uppercase px-1.5 py-0.5 rounded bg-[#0c0d0f] text-zinc-400 border border-[#23252a]">
                              {ch.unitName?.split(":")[0] || "Unit"}
                            </span>
                            {video.isAvailable ? (
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/[0.08] text-zinc-200 border border-white/[0.1] flex items-center gap-1">
                                <IconCheck size={10} /> Active YouTube Link
                              </span>
                            ) : (
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#0c0d0f] text-zinc-500 border border-[#23252a]">
                                Missing Link
                              </span>
                            )}
                          </div>

                          <h3 className="text-xs sm:text-sm font-semibold text-zinc-100 truncate">{video.title}</h3>
                          <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5">{video.desc}</p>

                          <div className="text-[11px] text-zinc-500 mt-1 font-mono truncate">
                            {video.videoUrl ? (
                              <a
                                href={video.videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-zinc-300 flex items-center gap-1"
                              >
                                <IconLink size={11} /> {video.videoUrl}
                              </a>
                            ) : (
                              <span className="text-zinc-600">No URL assigned</span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                        <button
                          onClick={() => openEditor(ch)}
                          className="px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                        >
                          <IconEdit size={12} />
                          <span>{video.isAvailable ? "Edit Link" : "Add Link"}</span>
                        </button>

                        {video.isAvailable && (
                          <button
                            onClick={() => adminClearVideoLink(ch.id)}
                            className="p-1.5 rounded-lg bg-[#0c0d0f] hover:bg-rose-500/10 border border-[#23252a] text-zinc-400 hover:text-rose-400 transition-colors"
                            title="Remove link"
                          >
                            <IconTrash size={13} />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: STUDENT PROGRESS & ACTIVITY */}
      {adminTab === "students" && (
        <div className="space-y-6 animate-fadeIn">
          {/* Summary Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
            <div className="bg-[#111215] p-4 rounded-xl border border-[#23252a]">
              <div className="text-xs font-mono text-zinc-400 uppercase">Registered Students</div>
              <div className="text-2xl font-bold text-zinc-100 mt-1 font-mono">{students.length}</div>
            </div>
            <div className="bg-[#111215] p-4 rounded-xl border border-[#23252a]">
              <div className="text-xs font-mono text-zinc-400 uppercase">Science Enrolled</div>
              <div className="text-2xl font-bold text-zinc-100 mt-1 font-mono">
                {students.filter((s) => s.stream === "Science").length}
              </div>
            </div>
            <div className="bg-[#111215] p-4 rounded-xl border border-[#23252a]">
              <div className="text-xs font-mono text-zinc-400 uppercase">Commerce Enrolled</div>
              <div className="text-2xl font-bold text-zinc-100 mt-1 font-mono">
                {students.filter((s) => s.stream === "Commerce").length}
              </div>
            </div>
            <div className="bg-[#111215] p-4 rounded-xl border border-[#23252a]">
              <div className="text-xs font-mono text-zinc-400 uppercase">Arts Enrolled</div>
              <div className="text-2xl font-bold text-zinc-100 mt-1 font-mono">
                {students.filter((s) => s.stream === "Arts").length}
              </div>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#111215] p-3.5 rounded-xl border border-[#23252a]">
            <div className="relative w-full sm:w-72">
              <IconSearch size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                value={studentSearch}
                onChange={(e) => setStudentSearch(e.target.value)}
                placeholder="Search by student name or email..."
                className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-[#0c0d0f] border border-[#23252a] text-xs text-zinc-100 placeholder-zinc-500 focus:border-zinc-400 outline-none"
              />
            </div>

            <div className="flex items-center gap-1.5 self-start sm:self-auto">
              <span className="text-xs text-zinc-400 font-mono mr-1">Stream:</span>
              {["all", "Science", "Commerce", "Arts"].map((st) => (
                <button
                  key={st}
                  onClick={() => setStudentStreamFilter(st)}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                    studentStreamFilter === st
                      ? "bg-zinc-100 text-zinc-950 shadow-sm"
                      : "bg-[#0c0d0f] text-zinc-400 border border-[#23252a] hover:text-zinc-200"
                  }`}
                >
                  {st === "all" ? "All Streams" : st}
                </button>
              ))}
            </div>
          </div>

          {/* Students List Table */}
          <div className="bg-[#111215] rounded-xl border border-[#23252a] overflow-hidden shadow-sm">
            <div className="p-4 border-b border-[#1f2127] flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-zinc-100">Student Progress & Video Completion Log</h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Inspect which student completed which chapter video and the exact time of completion.
                </p>
              </div>
              <button
                onClick={fetchStudents}
                className="px-2.5 py-1 rounded-md bg-[#0c0d0f] border border-[#23252a] text-xs text-zinc-300 hover:text-white transition-colors"
              >
                Refresh List
              </button>
            </div>

            {loadingStudents ? (
              <div className="p-12 text-center text-xs text-zinc-400 font-mono">
                Loading student records from database...
              </div>
            ) : filteredStudents.length === 0 ? (
              <div className="p-12 text-center text-xs text-zinc-500">
                {studentSearch ? `No students found matching "${studentSearch}".` : "No registered students yet."}
              </div>
            ) : (
              <div className="divide-y divide-[#1f2127]">
                {filteredStudents.map((s) => {
                  const isExpanded = expandedStudentId === s.id;
                  const completedEntries = Object.entries(s.completedTopics || {});

                  return (
                    <div key={s.id} className="p-4 hover:bg-[#141518] transition-colors">
                      {/* Top Row: Student Basic Info */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-[#0c0d0f] border border-[#23252a] text-zinc-200 font-bold text-xs flex items-center justify-center">
                            {s.name ? s.name.charAt(0).toUpperCase() : "S"}
                          </div>
                          <div>
                            <div className="text-xs sm:text-sm font-bold text-zinc-100 flex items-center gap-2">
                              <span>{s.name}</span>
                              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#0c0d0f] border border-[#23252a] text-zinc-300">
                                {s.stream} · Class {s.class}
                              </span>
                            </div>
                            <div className="text-xs text-zinc-400 font-mono mt-0.5">{s.email}</div>
                          </div>
                        </div>

                        {/* Metrics: Completed, Streak, Registered */}
                        <div className="flex items-center gap-2 sm:gap-3 self-end sm:self-center shrink-0">
                          <div className="text-right">
                            <div className="text-xs font-bold text-zinc-100 font-mono">
                              {s.completedCount} chapters done
                            </div>
                            <div className="text-[11px] text-zinc-500 font-mono">
                              Streak: {calculateStreak(s.completedTopics)}d · Bookmarks: {s.savedCount}
                            </div>
                          </div>

                          <button
                            onClick={() => setExpandedStudentId(isExpanded ? null : s.id)}
                            className="p-1.5 rounded-lg bg-[#0c0d0f] border border-[#23252a] text-zinc-400 hover:text-white transition-colors"
                            title={isExpanded ? "Collapse" : "View completed chapters & timeline"}
                          >
                            <IconChevronDown
                              size={14}
                              className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                            />
                          </button>

                          <button
                            onClick={() => handleDeleteStudent(s.id, s.name)}
                            className="p-1.5 rounded-lg bg-[#0c0d0f] hover:bg-rose-500/20 border border-[#23252a] hover:border-rose-500/40 text-zinc-500 hover:text-rose-400 transition-colors"
                            title={`Delete student ${s.name}`}
                          >
                            <IconTrash size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Expanded Drawer: Exact Chapters & Completion Timestamps */}
                      {isExpanded && (
                        <div className="mt-3.5 pt-3.5 border-t border-[#1e2025] space-y-3 bg-[#0c0d0f] p-3.5 sm:p-4 rounded-lg animate-fadeIn">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-zinc-400 gap-1 pb-1 border-b border-[#1a1c22]">
                            <span className="font-semibold text-zinc-200">
                              Detailed Completion Timeline ({completedEntries.length} topics mastered)
                            </span>
                            <span className="text-[11px] text-zinc-500">Student ID: {s.id}</span>
                          </div>

                          {completedEntries.length === 0 ? (
                            <div className="text-xs text-zinc-500 py-4 text-center">
                              This student has not marked any chapters complete yet.
                            </div>
                          ) : (
                            <div className="space-y-2 max-h-80 overflow-y-auto custom-scrollbar pr-1">
                              {completedEntries.map(([chapterKey, timeVal], idx) => {
                                let formattedTime = "Completed";
                                if (timeVal && timeVal !== "true") {
                                  try {
                                    formattedTime = new Date(timeVal).toLocaleString("en-IN", {
                                      day: "numeric",
                                      month: "short",
                                      year: "numeric",
                                      hour: "2-digit",
                                      minute: "2-digit",
                                      second: "2-digit",
                                    });
                                  } catch (e) {
                                    formattedTime = String(timeVal);
                                  }
                                }

                                const info = resolveChapterInfo(chapterKey);

                                return (
                                  <div
                                    key={idx}
                                    className="p-3 rounded-lg bg-[#111215] border border-[#23252a] flex flex-col md:flex-row md:items-center justify-between gap-2.5 transition-colors hover:border-[#353842]"
                                  >
                                    <div className="flex items-start gap-2.5 min-w-0">
                                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                                        <IconCheck size={12} />
                                      </div>
                                      <div className="min-w-0">
                                        <div className="flex items-center gap-1.5 mb-1 flex-wrap font-mono">
                                          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#0c0d0f] border border-[#27292f] text-zinc-200">
                                            {info.subject} · Class {info.class}
                                          </span>
                                          <span className="text-[10px] text-zinc-400 truncate max-w-sm">
                                            {info.unitName}
                                          </span>
                                        </div>
                                        <div className="text-xs sm:text-sm font-semibold text-zinc-100 truncate">
                                          {info.title}
                                        </div>
                                        <div className="text-[10px] font-mono text-zinc-500 mt-0.5">
                                          Code: {chapterKey}
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-mono self-end md:self-center shrink-0 bg-[#0c0d0f] px-2.5 py-1 rounded border border-[#1e2025]">
                                      <IconClock size={12} className="text-zinc-500" />
                                      <span>{formattedTime}</span>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}

                          {s.savedVideos && s.savedVideos.length > 0 && (
                            <div className="pt-3 border-t border-[#1e2025] space-y-2">
                              <span className="text-[11px] font-mono text-zinc-400 block font-semibold">
                                Bookmarked Videos for Revision ({s.savedVideos.length}):
                              </span>
                              <div className="space-y-1.5">
                                {s.savedVideos.map((vid, vIdx) => {
                                  const bInfo = resolveChapterInfo(vid);
                                  return (
                                    <div
                                      key={vIdx}
                                      className="flex items-center justify-between p-2 rounded-md bg-[#111215] border border-[#1e2025] text-xs font-mono"
                                    >
                                      <div className="flex items-center gap-2 truncate">
                                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#0c0d0f] border border-[#23252a] text-zinc-300 shrink-0">
                                          {bInfo.subject} · Cl {bInfo.class}
                                        </span>
                                        <span className="text-zinc-200 truncate">{bInfo.title}</span>
                                      </div>
                                      <span className="text-[10px] text-zinc-500 shrink-0 ml-2">ID: {vid}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Edit Video Link Modal */}
      {editingChapter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-lg bg-[#111215] rounded-xl border border-[#27292f] p-6 sm:p-7 shadow-2xl">
            <div className="flex items-center justify-between mb-4 border-b border-[#1f2127] pb-3">
              <div>
                <h3 className="text-base font-bold text-zinc-100 flex items-center gap-2">
                  <IconCrown size={16} />
                  <span>Update YouTube Video Link</span>
                </h3>
                <div className="text-xs text-zinc-400 mt-0.5 font-mono">
                  Chapter: {editingChapter.id} · {selectedSubject}
                </div>
              </div>
              <button
                onClick={() => setEditingChapter(null)}
                className="p-1.5 rounded-lg bg-[#0c0d0f] border border-[#23252a] text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <IconClose size={16} />
              </button>
            </div>

            <form onSubmit={handleSaveVideo} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                  YouTube Video URL or Video ID <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. https://youtu.be/P_r3N9pC5p4 or https://www.youtube.com/watch?v=..."
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0c0d0f] border border-[#23252a] focus:border-zinc-400 text-sm text-zinc-100 placeholder-zinc-500 font-mono outline-none transition-colors"
                />
                <p className="text-[11px] text-zinc-500 mt-1">
                  Accepts full YouTube watch URLs, short youtu.be links, or raw video IDs.
                </p>
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                  Chapter Title
                </label>
                <input
                  type="text"
                  value={inputTitle}
                  onChange={(e) => setInputTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0c0d0f] border border-[#23252a] text-sm text-zinc-100 focus:border-zinc-400 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                  Description / Key Topics
                </label>
                <textarea
                  rows="3"
                  value={inputDesc}
                  onChange={(e) => setInputDesc(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0c0d0f] border border-[#23252a] text-sm text-zinc-100 focus:border-zinc-400 resize-none outline-none leading-relaxed transition-colors"
                ></textarea>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#1f2127]">
                <button
                  type="button"
                  onClick={() => setEditingChapter(null)}
                  className="px-4 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-white bg-[#0c0d0f] border border-[#23252a] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg text-xs font-semibold text-zinc-950 bg-zinc-100 hover:bg-white shadow-sm transition-all"
                >
                  Save & Publish Video
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminStudio;
