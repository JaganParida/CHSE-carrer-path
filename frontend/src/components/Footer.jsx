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
    <footer className="mt-20 border-t border-[#1f1f1f] bg-black text-neutral-400 text-xs">
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
              <div className="w-8 h-8 rounded-xl bg-white text-black flex items-center justify-center font-bold">
                <IconLogo size={18} />
              </div>
              <span className="font-extrabold text-base text-white tracking-tight">
                CHSE<span className="text-neutral-400">Tube</span>
              </span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Curated YouTube masterclasses and syllabus navigator for Council of Higher Secondary Education, Odisha (+2).
            </p>
            <div className="flex items-center gap-2 pt-1 text-neutral-500 text-[11px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>CHSE Odisha Official Syllabus (2026–2027)</span>
            </div>
          </div>

          {/* Academic Streams */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-3">
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
                    className={`hover:text-white transition-colors text-left ${
                      currentStream === s.id ? "text-white font-bold" : "text-neutral-400"
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
            <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-3">
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
                  className={`hover:text-white transition-colors text-left ${
                    currentClass === "12" ? "text-white font-bold" : "text-neutral-400"
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
                  className={`hover:text-white transition-colors text-left ${
                    currentClass === "11" ? "text-white font-bold" : "text-neutral-400"
                  }`}
                >
                  Class 11 (+2 1st Year)
                </button>
              </li>
              <li className="text-neutral-500">CHSE Odisha Board Approved Structure</li>
              <li className="text-neutral-500">5-Unit Biology Curriculum Compliance</li>
            </ul>
          </div>

          {/* Platform Management */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-3">
              Admin & Management
            </h4>
            <div className="space-y-2.5">
              <p className="text-neutral-400 leading-relaxed">
                Educators and administrators can add, edit, or configure YouTube syllabus lectures across all streams.
              </p>
              {isAdmin ? (
                <button
                  onClick={() => {
                    setCurrentSection("admin");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors text-xs font-semibold"
                >
                  <IconCrown size={14} />
                  <span>Open Admin Studio</span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    setAuthMode("login");
                    setAuthModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black text-neutral-300 hover:text-white hover:bg-[#141414] transition-colors text-xs font-medium border border-[#262626]"
                >
                  <IconCrown size={14} />
                  <span>Admin / Student Sign In</span>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[#1f1f1f] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 font-mono">
          <p>© {new Date().getFullYear()} CHSETube (CHSE Odisha). Production educational platform.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-neutral-400">
              <IconCheck size={14} className="text-white" />
              100% Free & Open Access
            </span>
            <span className="flex items-center gap-1.5 text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              Secure Session Persistence
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
