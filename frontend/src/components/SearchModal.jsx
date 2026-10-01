import React, { useState, useEffect, useRef } from "react";
import { useApp } from "../context/AppContext.jsx";
import { SYLLABUS_DATA, STREAM_SUBJECTS } from "../data/syllabusData.js";
import { IconSearch, IconClose, IconBook, IconArrowRight } from "./Icons.jsx";

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
        className="relative w-full max-w-2xl bg-[#111215] border border-[#27292f] rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-[#1f2127] bg-[#0c0d0f]">
          <IconSearch size={16} className="text-zinc-400 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search ${currentStream} Class ${currentClass} chapters, units, topics...`}
            className="w-full bg-transparent text-zinc-100 placeholder-zinc-500 text-xs sm:text-sm outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-[11px] text-zinc-400 hover:text-white px-2 py-0.5 rounded-md bg-[#18191d] border border-[#23252a] mr-2 transition-colors"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setSearchModalOpen(false)}
            className="p-1 text-zinc-400 hover:text-white hover:bg-[#18191d] rounded-md transition-colors"
          >
            <IconClose size={16} />
          </button>
        </div>

        {/* Subject Filter Pills */}
        <div className="flex items-center gap-1.5 px-4 py-2 bg-[#111215] border-b border-[#1f2127] overflow-x-auto text-xs custom-scrollbar">
          <span className="text-zinc-500 uppercase tracking-wider text-[10px] font-mono mr-1">
            Subject:
          </span>
          <button
            onClick={() => setSelectedSubjectFilter("all")}
            className={`px-2.5 py-1 rounded-md transition-colors whitespace-nowrap text-xs font-semibold ${
              selectedSubjectFilter === "all"
                ? "bg-zinc-100 text-zinc-950 shadow-sm"
                : "bg-[#0c0d0f] text-zinc-400 border border-[#23252a] hover:text-zinc-200"
            }`}
          >
            All
          </button>
          {subjectsList.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSubjectFilter(s)}
              className={`px-2.5 py-1 rounded-md transition-colors whitespace-nowrap text-xs font-semibold ${
                selectedSubjectFilter === s
                  ? "bg-zinc-100 text-zinc-950 shadow-sm"
                  : "bg-[#0c0d0f] text-zinc-400 border border-[#23252a] hover:text-zinc-200"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto divide-y divide-[#1f2127] custom-scrollbar">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-xs text-zinc-500 space-y-1">
              <p className="font-semibold text-zinc-400">No matching chapters found</p>
              <p>Try searching with another keyword or subject.</p>
            </div>
          ) : (
            filtered.map((item, index) => (
              <div
                key={item.id || index}
                onClick={() => handleSelect(item)}
                className="p-3.5 hover:bg-[#18191d] cursor-pointer flex items-center justify-between gap-3 transition-colors group"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-[#0c0d0f] border border-[#23252a] text-zinc-300 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-zinc-400 transition-colors">
                    <IconBook size={14} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-zinc-100 group-hover:text-white transition-colors truncate">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-zinc-400 flex items-center gap-2 mt-0.5 truncate font-mono">
                      <span className="text-zinc-300 font-semibold">{item.subject}</span>
                      <span>·</span>
                      <span className="truncate">{item.unitName}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {item.isAvailable && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#0c0d0f] text-zinc-300 border border-[#23252a]">
                      Video Ready
                    </span>
                  )}
                  <div className="w-7 h-7 rounded-md bg-[#0c0d0f] border border-[#23252a] text-zinc-400 group-hover:text-zinc-100 flex items-center justify-center transition-colors">
                    <IconArrowRight size={12} />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-[#0c0d0f] border-t border-[#1f2127] flex items-center justify-between text-[11px] text-zinc-500 font-mono">
          <span>{filtered.length} chapters available</span>
          <div className="flex items-center gap-3">
            <span>[ESC] to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
