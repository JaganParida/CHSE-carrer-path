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
  const { user, isAdmin, setAuthModalOpen, setAuthMode } = useAuth();

  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-950 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand info */}
          <div className="md:col-span-1 space-y-3">
            <div
              onClick={() => {
                setCurrentSection("dashboard");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <IconLogo size={18} />
              </div>
              <span className="font-extrabold text-base text-white tracking-tight">
                Odisha<span className="text-blue-500">Learn</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Curated YouTube masterclasses and syllabus navigator for Council of Higher Secondary Education, Odisha (+2).
            </p>
            <div className="flex items-center gap-2 pt-1 text-slate-400 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>CHSE Odisha Official Syllabus (2026–2027)</span>
            </div>
          </div>

          {/* Academic Streams */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
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
                    className={`hover:text-blue-400 transition-colors text-left ${
                      currentStream === s.id ? "text-blue-400 font-bold" : "text-slate-400"
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
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
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
                  className={`hover:text-blue-400 transition-colors text-left ${
                    currentClass === "12" ? "text-blue-400 font-bold" : "text-slate-400"
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
                  className={`hover:text-blue-400 transition-colors text-left ${
                    currentClass === "11" ? "text-blue-400 font-bold" : "text-slate-400"
                  }`}
                >
                  Class 11 (+2 1st Year)
                </button>
              </li>
              <li className="text-slate-400">CHSE Odisha Board Approved Structure</li>
              <li className="text-slate-400">5-Unit Biology Curriculum Compliance</li>
            </ul>
          </div>

          {/* Platform Management */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Admin & Management
            </h4>
            <div className="space-y-2.5">
              <p className="text-slate-400 leading-relaxed">
                Educators and administrators can add, edit, or configure YouTube syllabus lectures across all streams.
              </p>
              {isAdmin ? (
                <button
                  onClick={() => {
                    setCurrentSection("admin");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 transition-colors text-xs font-bold"
                >
                  <IconCrown size={14} className="text-amber-400" />
                  <span>Open Admin Studio</span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    setAuthMode("login");
                    setAuthModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors text-xs font-medium border border-slate-700"
                >
                  <IconCrown size={14} className="text-amber-400" />
                  <span>Admin / Student Sign In</span>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} OdishaLearn (CHSE Odisha). Production MERN educational platform.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-400">
              <IconCheck size={14} className="text-emerald-400" />
              100% Free & Open Access
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              Secure Session Persistence
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
