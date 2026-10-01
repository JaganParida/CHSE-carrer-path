import React, { useState } from "react";
import { useApp } from "../context/AppContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { CAREERS_DATA } from "../data/careersData.js";
import {
  IconChevronDown,
  IconCheck,
  IconArrowRight,
  IconBookmark,
  IconSearch,
} from "./Icons.jsx";

export const CareerGuide = () => {
  const { currentStream, setCurrentStream, setCurrentSection } = useApp();
  const { user, setAuthModalOpen, setAuthMode, showToast } = useAuth();

  const [activeStream, setActiveStream] = useState(currentStream || "Science");
  const [searchQuery, setSearchQuery] = useState("");

  // Default: ALL cards are CLOSED initially per user request
  const [expandedCards, setExpandedCards] = useState({});

  const rawCareers = CAREERS_DATA[activeStream] || [];
  const careers = rawCareers.filter((c) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      c.title.toLowerCase().includes(q) ||
      c.tag.toLowerCase().includes(q) ||
      c.exam.toLowerCase().includes(q) ||
      c.jobs.some((j) => j.toLowerCase().includes(q))
    );
  });

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const all = {};
    careers.forEach((c) => (all[c.id] = true));
    setExpandedCards(all);
  };

  const collapseAll = () => {
    setExpandedCards({});
  };

  const handleSaveGoal = (careerTitle) => {
    if (!user) {
      if (setAuthMode) setAuthMode("login");
      if (setAuthModalOpen) setAuthModalOpen(true);
      return;
    }
    if (showToast) {
      showToast(`Bookmarked: ${careerTitle}`, "success");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 font-sans">
      {/* Clean Minimal Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-2">
            Higher Education Advisory
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Career Roadmaps After Class 12
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed font-normal">
            National entrance exams, salary brackets (entry to senior), specific job roles, and year-by-year preparation milestones.
          </p>
        </div>

        {/* Stream Filter Switcher */}
        <div className="flex bg-[#0e0f12] p-1 rounded-lg border border-white/[0.08] shrink-0 self-start md:self-auto">
          {["Science", "Commerce", "Arts"].map((st) => (
            <button
              key={st}
              onClick={() => {
                setActiveStream(st);
                setCurrentStream(st);
              }}
              className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all ${
                activeStream === st
                  ? "bg-white text-black shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {st} Stream
            </button>
          ))}
        </div>
      </div>

      {/* Clean Search & Expand Controls (No heavy double borders) */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <IconSearch size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search ${activeStream} careers, exams, or jobs...`}
            className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#0e0f12] border border-white/[0.08] text-xs text-zinc-100 placeholder-zinc-500 focus:border-white/30 outline-none transition-colors"
          />
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto text-xs font-mono">
          <button
            onClick={expandAll}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Expand All
          </button>
          <span className="text-zinc-700">·</span>
          <button
            onClick={collapseAll}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Career Cards Grid (Clean, Sleek, Collapsed by Default) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
        {careers.length === 0 ? (
          <div className="col-span-full p-12 text-center text-zinc-500 text-xs font-mono bg-[#0c0d0f] border border-white/[0.06] rounded-xl">
            No careers found matching "{searchQuery}".
          </div>
        ) : (
          careers.map((c) => {
            const isExpanded = Boolean(expandedCards[c.id]);

            return (
              <div
                key={c.id}
                className="rounded-xl bg-[#0c0d0f] border border-white/[0.06] hover:border-white/[0.12] transition-colors overflow-hidden"
              >
                {/* Card Summary Header (Always Visible) */}
                <div className="p-5 sm:p-6 space-y-3.5">
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span className="text-zinc-400 font-medium">{c.tag}</span>
                    <span>{c.duration}</span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {c.title}
                    </h3>
                    <div className="mt-1.5 text-xs text-zinc-400 leading-relaxed font-sans line-clamp-2">
                      <span className="text-zinc-300 font-medium">Eligibility:</span> {c.eligibility}
                    </div>
                  </div>

                  {/* Clean Flat Salary Strip (No nested bordered sub-boxes!) */}
                  <div className="pt-2 flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500 text-[11px]">Salary Bracket</span>
                    <span className="text-white font-bold">{c.salary}</span>
                  </div>

                  {/* Toggle Button */}
                  <button
                    onClick={() => toggleExpand(c.id)}
                    className="w-full pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-medium text-zinc-400 hover:text-white transition-colors select-none"
                  >
                    <span>{isExpanded ? "Hide detailed roadmap" : "View salary breakdown & milestones"}</span>
                    <IconChevronDown
                      size={14}
                      className={`text-zinc-500 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Expanded Detailed Section (Rendered Only When Opened) */}
                {isExpanded && (
                  <div className="px-5 pb-6 pt-1 sm:px-6 sm:pb-6 border-t border-white/[0.06] bg-black/40 space-y-5 animate-fadeIn">
                    {/* Clean Salary Hierarchy (Flat Typography, Zero Box Borders) */}
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
                        Salary Progression By Experience
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono py-1">
                        <div>
                          <div className="text-[10px] text-zinc-500">Entry / Fresher</div>
                          <div className="text-zinc-200 font-medium mt-0.5">{c.salaryDetails?.entry}</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-zinc-500">Mid-Level (3-5y)</div>
                          <div className="text-zinc-200 font-medium mt-0.5">{c.salaryDetails?.mid}</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-zinc-500">Senior / Specialist</div>
                          <div className="text-emerald-400 font-medium mt-0.5">{c.salaryDetails?.senior}</div>
                        </div>
                      </div>
                    </div>

                    {/* Target Job Roles */}
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
                        Target Job Roles & Designations
                      </div>
                      <div className="space-y-1.5">
                        {c.jobs.map((job, jIdx) => (
                          <div key={jIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                            <IconCheck size={12} className="text-emerald-400 shrink-0" />
                            <span>{job}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Top Colleges */}
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
                        Top Institutions & Odisha Hubs
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {c.topInstitutes?.map((inst, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-zinc-300"
                          >
                            {inst}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Milestone Timeline */}
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-2.5">
                        Year-By-Year Milestone Timeline
                      </div>
                      <div className="space-y-2">
                        {c.roadmap?.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                            <span className="font-mono text-zinc-500 text-[10px] shrink-0 mt-0.5">
                              0{idx + 1}.
                            </span>
                            <span className="leading-relaxed">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Required Skills */}
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
                        Preparation Skills
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {c.skills?.map((s, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded text-xs font-mono bg-white/[0.04] text-zinc-400"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                      <button
                        onClick={() => handleSaveGoal(c.title)}
                        className="text-xs font-medium text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
                      >
                        <IconBookmark size={13} className="text-zinc-400" />
                        <span>Bookmark Goal</span>
                      </button>

                      <button
                        onClick={() => {
                          setCurrentSection("dashboard");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="text-xs font-semibold text-white hover:text-zinc-300 flex items-center gap-1"
                      >
                        <span>Study Syllabus</span>
                        <IconArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CareerGuide;
