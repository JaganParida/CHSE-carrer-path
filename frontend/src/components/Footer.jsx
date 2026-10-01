import React from "react";
import { useApp } from "../context/AppContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { IconLogo, IconCheck, IconCrown } from "./Icons.jsx";

export default function Footer() {
  const {
    currentStream,
    setCurrentStream,
    currentClass,
    setCurrentClass,
    setCurrentSection,
  } = useApp();
  const { user, isAdmin } = useAuth();

  return (
    <footer className="mt-16 border-t border-[#1f2127] bg-[#090a0c] text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand info */}
          <div className="space-y-3">
            <div
              onClick={() => {
                setCurrentSection("dashboard");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="w-7 h-7 rounded-md bg-zinc-100 text-zinc-950 flex items-center justify-center font-bold">
                <IconLogo size={15} />
              </div>
              <span className="font-bold text-sm text-zinc-100 tracking-tight">
                CHSE<span className="text-zinc-400">Tube</span>
              </span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Curated YouTube masterclasses and syllabus navigator for Council of Higher Secondary Education, Odisha (+2).
            </p>
            <div className="flex items-center gap-2 pt-1 text-zinc-500 text-[11px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>CHSE Odisha Official Syllabus (2026–2027)</span>
            </div>
          </div>

          {/* Academic Streams */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-200 mb-3">
              Academic Streams
            </h4>
            <ul className="space-y-2">
              {[
                { id: "Science", label: "Science (PCM / Biology / IT)" },
                { id: "Commerce", label: "Commerce (Accounts / BST)" },
                { id: "Arts", label: "Arts (Pol Science / History)" },
              ].map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => {
                      setCurrentStream(s.id);
                      setCurrentSection("dashboard");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`hover:text-zinc-200 transition-colors text-left ${
                      currentStream === s.id ? "text-zinc-100 font-semibold" : "text-zinc-400"
                    }`}
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Classes & Standards */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-200 mb-3">
              Curriculum Standard
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    setCurrentClass("12");
                    setCurrentSection("dashboard");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`hover:text-zinc-200 transition-colors text-left ${
                    currentClass === "12" ? "text-zinc-100 font-semibold" : "text-zinc-400"
                  }`}
                >
                  Class 12 (+2 2nd Year)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentClass("11");
                    setCurrentSection("dashboard");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`hover:text-zinc-200 transition-colors text-left ${
                    currentClass === "11" ? "text-zinc-100 font-semibold" : "text-zinc-400"
                  }`}
                >
                  Class 11 (+2 1st Year)
                </button>
              </li>
              <li className="text-zinc-500">CHSE Odisha Board Approved Structure</li>
              <li className="text-zinc-500">5-Unit Biology Curriculum Compliance</li>
            </ul>
          </div>

          {/* Higher Education Resources (NO admin button shown to students/guests!) */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-200 mb-3">
              Higher Education Advisory
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <button
                  onClick={() => {
                    setCurrentSection("career");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-zinc-200 transition-colors text-left"
                >
                  Engineering (JEE / OJEE) Roadmaps
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentSection("career");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-zinc-200 transition-colors text-left"
                >
                  Medical (NEET / OUAT) Roadmaps
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentSection("career");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-zinc-200 transition-colors text-left"
                >
                  Chartered Accountancy (CA / CMA)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentSection("career");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-zinc-200 transition-colors text-left"
                >
                  Civil Services (UPSC / OPSC) Prep
                </button>
              </li>
            </ul>

            {/* ONLY visible to authenticated Administrators */}
            {isAdmin && (
              <div className="pt-3 mt-3 border-t border-[#1f2127]">
                <button
                  onClick={() => {
                    setCurrentSection("admin");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#111215] text-amber-300 border border-[#23252a] hover:border-amber-400/40 text-[11px] font-mono transition-colors"
                >
                  <IconCrown size={12} />
                  <span>Admin Studio Console</span>
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="pt-6 border-t border-[#1f2127] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-mono">
          <p>© {new Date().getFullYear()} CHSETube (CHSE Odisha). Free educational platform.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <IconCheck size={13} className="text-emerald-400" />
              100% Free & Open Access
            </span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Official Syllabus Mapped
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
