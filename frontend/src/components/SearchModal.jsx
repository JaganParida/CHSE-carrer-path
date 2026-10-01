import React, { useState, useEffect, useRef } from "react";
import { useApp } from "../context/AppContext.jsx";
import { SYLLABUS_DATA, STREAM_SUBJECTS } from "../data/syllabusData.js";
import { IconSearch, IconClose, IconVideo, IconBook, IconArrowRight } from "./Icons.jsx";

export default function SearchModal() {
  const {
    searchModalOpen,
    setSearchModalOpen,
    currentStream,
    currentClass,
    setCurrentSubject,
    playVideo,
    getChapterVideo,
  } = useApp();

  const [query, setQuery] = useState("");
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState("all");
  const inputRef = useRef(null);

  const subjectsList = STREAM_SUBJECTS[currentStream] || STREAM_SUBJECTS["Science"];

  useEffect(() => {
    if (searchModalOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
      setSelectedSubjectFilter("all");
    }
  }, [searchModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      }
      if (e.key === "Escape" && searchModalOpen) {
        setSearchModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [searchModalOpen, setSearchModalOpen]);

  if (!searchModalOpen) return null;

  // Flatten chapters from active syllabus
  const allChapters = [];
  subjectsList.forEach((subj) => {
    const units = SYLLABUS_DATA[subj]?.[currentClass] || [];
    units.forEach((unit) => {
      unit.chapters?.forEach((ch) => {
        const videoData = getChapterVideo(ch);
        allChapters.push({
          ...ch,
          subject: subj,
          unitName: unit.unit,
          videoUrl: videoData.videoUrl,
          isAvailable: videoData.isAvailable,
        });
      });
    });
  });

  const filtered = allChapters.filter((item) => {
    const matchesFilter = selectedSubjectFilter === "all" || item.subject === selectedSubjectFilter;
    if (!matchesFilter) return false;
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.subject.toLowerCase().includes(q) ||
      (item.unitName && item.unitName.toLowerCase().includes(q)) ||
      (item.desc && item.desc.toLowerCase().includes(q))
    );
  });

  const handleSelect = (item) => {
    setCurrentSubject(item.subject);
    playVideo(item, item.subject, currentClass);
    setSearchModalOpen(false);
  };

  return (
    <div
      onClick={() => setSearchModalOpen(false)}
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-fadeIn"
    >
      <div
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-900/90">
          <IconSearch size={18} className="text-blue-400 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search ${currentStream} Class ${currentClass} chapters, units, topics...`}
            className="w-full bg-transparent text-white placeholder-slate-500 text-sm outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800 mr-2"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setSearchModalOpen(false)}
            className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <IconClose size={18} />
          </button>
        </div>

        {/* Subject Filter Pills */}
        <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-950/50 border-b border-slate-800/80 overflow-x-auto text-xs">
          <span className="text-slate-500 uppercase tracking-wider text-[10px] font-bold mr-1">
            Subject:
          </span>
          <button
            onClick={() => setSelectedSubjectFilter("all")}
            className={`px-3 py-1 rounded-lg transition-colors whitespace-nowrap text-xs font-semibold ${
              selectedSubjectFilter === "all"
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-slate-800/80 text-slate-400 hover:text-slate-200"
            }`}
          >
            All
          </button>
          {subjectsList.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSubjectFilter(s)}
              className={`px-3 py-1 rounded-lg transition-colors whitespace-nowrap text-xs font-semibold ${
                selectedSubjectFilter === "s" || selectedSubjectFilter === s
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-slate-800/80 text-slate-400 hover:text-slate-200"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto divide-y divide-slate-800/60 p-2">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-slate-500">
              <IconBook size={32} className="mx-auto mb-2 text-slate-600" />
              <p className="text-sm font-semibold text-slate-300">No chapters found</p>
              <p className="text-xs mt-1 text-slate-500">
                Try searching with another keyword or select another subject filter
              </p>
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item)}
                className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/70 cursor-pointer transition-colors"
              >
                <div className="flex items-start gap-3 min-w-0 pr-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0 mt-0.5">
                    <IconVideo size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wide">
                        {item.subject}
                      </span>
                      <span className="text-slate-600 text-xs">·</span>
                      <span className="text-[11px] text-slate-400 truncate">
                        {item.unitName}
                      </span>
                    </div>
                    <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors truncate">
                      {item.title}
                    </div>
                    {item.desc && (
                      <p className="text-xs text-slate-400 truncate mt-0.5">
                        {item.desc}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      item.isAvailable
                        ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {item.isAvailable ? "Video HD" : "Syllabus"}
                  </span>
                  <div className="p-1.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all">
                    <IconArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-3">
            <span>
              <b>{filtered.length}</b> chapters found
            </span>
            <span>·</span>
            <span>Class {currentClass} · {currentStream}</span>
          </div>
          <div className="flex items-center gap-2 text-[10px]">
            <span className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono">
              ESC
            </span>
            <span>to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
