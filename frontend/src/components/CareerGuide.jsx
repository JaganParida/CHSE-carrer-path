import React, { useState } from "react";
import { useApp } from "../context/AppContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { CAREERS_DATA } from "../data/careersData.js";
import {
  IconChevronDown,
  IconCheck,
  IconArrowRight,
  IconBook,
  IconBookmark,
  IconSparkles,
  IconClock,
  IconUser,
  IconSearch,
} from "./Icons.jsx";

export const CareerGuide = () => {
  const { currentStream, setCurrentStream, setCurrentSection } = useApp();
  const { user, setAuthModalOpen, setAuthMode, showToast } = useAuth();

  const [activeStream, setActiveStream] = useState(currentStream || "Science");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCards, setExpandedCards] = useState({
    "sci-btech": true,
    "sci-mbbs": true,
    "com-ca": true,
    "art-civil": true,
  });

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>POST +2 HIGHER EDUCATION & CAREER BLUEPRINTS</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Complete Career Roadmaps After Class 12
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
            Detailed national entrance examinations, salary brackets (entry to senior), specific job roles, eligibility, top colleges, and year-by-year preparation milestones for Odisha students.
          </p>
        </div>

        {/* Stream Filter Switcher */}
        <div className="flex bg-zinc-900 p-1 rounded-lg border border-zinc-800 shrink-0 self-start md:self-auto">
          {["Science", "Commerce", "Arts"].map((st) => (
            <button
              key={st}
              onClick={() => {
                setActiveStream(st);
                setCurrentStream(st);
              }}
              className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${
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

      {/* Search & Utility Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-zinc-950 p-3.5 rounded-xl border border-zinc-850">
        <div className="relative w-full sm:w-80">
          <IconSearch size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search ${activeStream} careers, exams, or jobs...`}
            className="w-full pl-9 pr-3 py-2 rounded-lg bg-black border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-500 focus:border-zinc-400 outline-none transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={expandAll}
            className="px-2.5 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400 hover:text-white transition-colors"
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="px-2.5 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400 hover:text-white transition-colors"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Guest Sign-In Banner */}
      {!user && (
        <div className="p-4 sm:p-5 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 flex items-center justify-center shrink-0">
              <IconBook size={18} />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Save career goals to your student profile</div>
              <div className="text-xs text-zinc-400">Track target entrance exam deadlines and syllabus milestones across all your devices.</div>
            </div>
          </div>
          <button
            onClick={() => {
              setAuthMode("register");
              setAuthModalOpen(true);
            }}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-black bg-white hover:bg-zinc-200 shrink-0 transition-all shadow-sm"
          >
            Create Free Account
          </button>
        </div>
      )}

      {/* Career Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {careers.length === 0 ? (
          <div className="col-span-full p-12 text-center text-zinc-500 text-xs font-mono bg-zinc-950 border border-zinc-850 rounded-xl">
            No careers found matching "{searchQuery}".
          </div>
        ) : (
          careers.map((c) => {
            const isExpanded = Boolean(expandedCards[c.id]);

            return (
              <div
                key={c.id}
                className="rounded-xl bg-zinc-950 border border-zinc-850 p-6 sm:p-7 space-y-5 hover:border-zinc-700 transition-all shadow-sm"
              >
                {/* Header & Tag */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-black text-zinc-300 border border-zinc-800">
                      {c.tag}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      {c.duration}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    {c.title}
                  </h3>
                  <div className="mt-2 text-xs text-zinc-400 leading-relaxed font-sans">
                    <b className="text-zinc-300">Eligibility:</b> {c.eligibility}
                  </div>
                </div>

                {/* Salary Matrix Strip */}
                <div className="rounded-lg bg-black border border-zinc-800/80 p-3.5 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500 uppercase tracking-wider text-[10px]">Expected Package Brackets</span>
                    <span className="text-white font-bold">{c.salary}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-zinc-900 text-xs font-mono">
                    <div className="bg-zinc-950/80 p-2 rounded border border-zinc-850">
                      <div className="text-[10px] text-zinc-500">Entry / Fresher:</div>
                      <div className="text-zinc-200 font-semibold mt-0.5">{c.salaryDetails?.entry}</div>
                    </div>
                    <div className="bg-zinc-950/80 p-2 rounded border border-zinc-850">
                      <div className="text-[10px] text-zinc-500">Mid-Level (3-5y):</div>
                      <div className="text-zinc-200 font-semibold mt-0.5">{c.salaryDetails?.mid}</div>
                    </div>
                    <div className="bg-zinc-950/80 p-2 rounded border border-zinc-850">
                      <div className="text-[10px] text-zinc-500">Senior / Specialist:</div>
                      <div className="text-emerald-400 font-semibold mt-0.5">{c.salaryDetails?.senior}</div>
                    </div>
                  </div>
                </div>

                {/* Target Job Roles */}
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
                    Key Job Roles & Career Designations:
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

                {/* Expand Toggle */}
                <button
                  onClick={() => toggleExpand(c.id)}
                  className="w-full pt-4 border-t border-zinc-850 flex items-center justify-between text-xs font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  <span>{isExpanded ? "Hide detailed timeline & colleges" : "View step-by-step roadmap & top colleges"}</span>
                  <IconChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Step-by-Step Milestones & Detailed Section */}
                {isExpanded && (
                  <div className="space-y-5 pt-3 border-t border-zinc-850 animate-fadeIn">
                    {/* Top Institutes */}
                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
                        Top Institutions & Odisha Hubs:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {c.topInstitutes?.map((inst, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-black border border-zinc-800 text-zinc-300"
                          >
                            {inst}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Milestones list */}
                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-3">
                        Year-By-Year Milestone Timeline:
                      </h4>
                      <div className="space-y-2.5">
                        {c.roadmap?.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-3 text-xs text-zinc-300">
                            <span className="w-5 h-5 rounded-md bg-black border border-zinc-800 text-zinc-300 flex items-center justify-center font-mono font-bold text-[10px] shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="leading-relaxed">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Required Skills */}
                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
                        Essential Skills & Preparation Focus:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {c.skills?.map((s, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-2 flex items-center justify-between border-t border-zinc-850">
                      <button
                        onClick={() => handleSaveGoal(c.title)}
                        className="text-xs font-medium text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
                      >
                        <IconBookmark size={13} className="text-zinc-300" />
                        <span>Bookmark Goal</span>
                      </button>

                      <button
                        onClick={() => {
                          setCurrentSection("dashboard");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="text-xs font-medium text-white hover:text-zinc-300 flex items-center gap-1"
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
