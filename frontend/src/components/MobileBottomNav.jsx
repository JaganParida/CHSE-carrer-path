import React from "react";
import { useApp } from "../context/AppContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import {
  IconDashboard,
  IconVideo,
  IconChart,
  IconNote,
  IconMap,
  IconCrown,
} from "./Icons.jsx";

export default function MobileBottomNav() {
  const { currentSection, setCurrentSection, currentVideo } = useApp();
  const { isAdmin } = useAuth();

  const navItems = [
    { id: "dashboard", label: "Syllabus", icon: IconDashboard },
    { id: "player", label: "Lecture", icon: IconVideo, disabled: !currentVideo },
    { id: "progress", label: "Progress", icon: IconChart },
    { id: "notes", label: "Notes", icon: IconNote },
    { id: "career", label: "Careers", icon: IconMap },
  ];

  if (isAdmin) {
    navItems.push({ id: "admin", label: "Admin", icon: IconCrown });
  }

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/90 px-2 py-1 safe-area-bottom">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentSection === item.id;
          const isDisabled = item.disabled;

          return (
            <button
              key={item.id}
              disabled={isDisabled}
              onClick={() => {
                if (!isDisabled) {
                  setCurrentSection(item.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all relative ${
                isActive
                  ? "text-blue-400 font-bold"
                  : isDisabled
                  ? "text-slate-600 opacity-40 cursor-not-allowed"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <div className={`p-1 rounded-lg transition-transform ${isActive ? "scale-110" : ""}`}>
                <Icon size={18} />
              </div>
              <span className="text-[10px] tracking-tight mt-0.5">{item.label}</span>
              {isActive && (
                <span className="absolute bottom-0.5 w-1 h-1 bg-blue-500 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
