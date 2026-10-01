import React, { useState } from "react";
import { CAREERS_DATA } from "../data/careersData.js";
import { IconChevronDown, IconCheck } from "./Icons.jsx";

export const CareerGuide = () => {
  const [activeStream, setActiveStream] = useState("Science");
  const [expandedCards, setExpandedCards] = useState({ "sci-btech": true });

  const careers = CAREERS_DATA[activeStream] || [];

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Complete Career Guide — After Class 12 CHSE
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
          Verified career roadmaps, top national entrance exams, salary brackets, and skill requirements for Odisha students.
        </p>
      </div>

      {/* Stream Tabs */}
      <div className="flex gap-2 border-b border-slate-800 pb-3 overflow-x-auto scrollbar-none">
        {["Science", "Commerce", "Arts"].map((st) => (
          <button
            key={st}
            onClick={() => setActiveStream(st)}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeStream === st
                ? "bg-brand-600 text-white shadow-lg shadow-brand-500/20"
                : "bg-obsidian-850 text-slate-400 hover:text-white"
            }`}
          >
            {st} Stream Careers
          </button>
        ))}
      </div>

      {/* Career Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {careers.map((c) => {
          const isExpanded = expandedCards[c.id];
          return (
            <div
              key={c.id}
              className="glass-panel rounded-2xl border border-slate-800 p-6 space-y-4 hover:border-slate-700 transition-colors shadow-lg"
            >
              <div>
                <div className="text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 w-fit mb-2">
                  {c.tag}
                </div>
                <h3 className="text-lg font-extrabold text-white">{c.title}</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">{c.desc}</p>
              </div>

              {/* Pills Row */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Salary: {c.salary}
                </span>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  Exam: {c.exam}
                </span>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  Duration: {c.duration}
                </span>
              </div>

              {/* Expand Toggle */}
              <button
                onClick={() => toggleExpand(c.id)}
                className="w-full pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-slate-400 hover:text-white transition-colors"
              >
                <span>{isExpanded ? "Hide detailed roadmap" : "View step-by-step roadmap"}</span>
                <IconChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                />
              </button>

              {/* Expanded Roadmap & Skills */}
              {isExpanded && (
                <div className="space-y-4 pt-2 border-t border-slate-800/80 animate-fade-in">
                  <div>
                    <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                      Milestone Roadmap
                    </h4>
                    <div className="space-y-2">
                      {c.roadmap.map((step, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200">
                          <span className="w-5 h-5 rounded-full bg-brand-600/30 border border-brand-500/40 text-brand-300 flex items-center justify-center font-bold text-[10px] shrink-0">
                            {idx + 1}
                          </span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                      Key Required Skills
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {c.skills.map((s, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-obsidian-900 border border-slate-800 text-slate-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CareerGuide;

