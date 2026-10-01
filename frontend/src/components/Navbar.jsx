import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useApp } from "../context/AppContext.jsx";
import { STREAM_SUBJECTS } from "../data/syllabusData.js";
import {
  IconLogo,
  IconSearch,
  IconCrown,
  IconUser,
  IconChevronDown,
  IconDashboard,
  IconBook,
} from "./Icons.jsx";

export const Navbar = () => {
  const { user, isAdmin, logout, setAuthModalOpen, setAuthMode } = useAuth();
  const {
    currentSection,
    setCurrentSection,
    currentStream,
    setCurrentStream,
    currentClass,
    setCurrentClass,
    setCurrentSubject,
    setSearchModalOpen,
  } = useApp();

  const [streamDropdownOpen, setStreamDropdownOpen] = useState(false);
  const [subjectsDropdownOpen, setSubjectsDropdownOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const activeSubjects = STREAM_SUBJECTS[currentStream] || STREAM_SUBJECTS["Science"];

  return (
    <header className="sticky top-0 z-40 w-full glass-nav border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo and Brand */}
        <div className="flex items-center gap-6">
          <div
            onClick={() => setCurrentSection("dashboard")}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-500 p-0.5 shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform flex items-center justify-center text-white">
              <IconLogo size={20} />
            </div>
            <div>
              <div className="text-base font-extrabold tracking-tight text-white flex items-center gap-1.5">
                Odisha<span className="text-brand-400">Learn</span>
              </div>
              <div className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase -mt-0.5">
                CHSE Odisha
              </div>
            </div>
          </div>

          {/* Stream Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setStreamDropdownOpen(!streamDropdownOpen);
                setSubjectsDropdownOpen(false);
              }}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-obsidian-850 hover:bg-obsidian-800 border border-slate-800 text-xs font-bold text-slate-200 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>{currentStream} Stream</span>
              <IconChevronDown size={14} className="text-slate-400" />
            </button>

            {streamDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 rounded-xl glass-panel p-1.5 shadow-2xl z-50">
                {["Science", "Commerce", "Arts"].map((st) => (
                  <button
                    key={st}
                    onClick={() => {
                      setCurrentStream(st);
                      setStreamDropdownOpen(false);
                      setCurrentSection("dashboard");
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-between ${
                      currentStream === st
                        ? "bg-brand-600/20 text-brand-400 border border-brand-500/30"
                        : "text-slate-300 hover:bg-obsidian-800"
                    }`}
                  >
                    <span>{st} Stream</span>
                    {currentStream === st && <span className="text-[10px] font-bold text-brand-400">ACTIVE</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Class Toggle (11 / 12) */}
          <div className="hidden lg:flex items-center bg-obsidian-900 border border-slate-800 rounded-lg p-0.5">
            <button
              onClick={() => setCurrentClass("11")}
              className={`px-3 py-1 rounded-md text-xs font-extrabold transition-all ${
                currentClass === "11"
                  ? "bg-brand-600 text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Class 11
            </button>
            <button
              onClick={() => setCurrentClass("12")}
              className={`px-3 py-1 rounded-md text-xs font-extrabold transition-all ${
                currentClass === "12"
                  ? "bg-brand-600 text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Class 12
            </button>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          <button
            onClick={() => setCurrentSection("dashboard")}
            className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
              currentSection === "dashboard"
                ? "text-brand-400 bg-brand-500/10"
                : "text-slate-300 hover:text-white hover:bg-obsidian-850"
            }`}
          >
            Dashboard
          </button>

          {/* Subjects Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setSubjectsDropdownOpen(!subjectsDropdownOpen);
                setStreamDropdownOpen(false);
              }}
              className={`px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${
                currentSection === "subject"
                  ? "text-brand-400 bg-brand-500/10"
                  : "text-slate-300 hover:text-white hover:bg-obsidian-850"
              }`}
            >
              <span>Subjects</span>
              <IconChevronDown size={13} className="text-slate-400" />
            </button>

            {subjectsDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 rounded-xl glass-panel p-1.5 shadow-2xl z-50">
                <div className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                  Class {currentClass} — {currentStream}
                </div>
                {activeSubjects.map((subj) => (
                  <button
                    key={subj}
                    onClick={() => {
                      setCurrentSubject(subj);
                      setCurrentSection("subject");
                      setSubjectsDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:bg-obsidian-800 hover:text-brand-400 transition-colors"
                  >
                    {subj}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setCurrentSection("career")}
            className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
              currentSection === "career"
                ? "text-brand-400 bg-brand-500/10"
                : "text-slate-300 hover:text-white hover:bg-obsidian-850"
            }`}
          >
            Career Paths
          </button>

          <button
            onClick={() => setCurrentSection("progress")}
            className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
              currentSection === "progress"
                ? "text-brand-400 bg-brand-500/10"
                : "text-slate-300 hover:text-white hover:bg-obsidian-850"
            }`}
          >
            Progress
          </button>

          <button
            onClick={() => setCurrentSection("notes")}
            className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
              currentSection === "notes"
                ? "text-brand-400 bg-brand-500/10"
                : "text-slate-300 hover:text-white hover:bg-obsidian-850"
            }`}
          >
            My Notes
          </button>

          {/* Admin Studio Nav Button */}
          <button
            onClick={() => setCurrentSection("admin")}
            className={`px-3 py-1.5 rounded-lg text-xs font-extrabold flex items-center gap-1.5 transition-all ${
              currentSection === "admin"
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-lg shadow-amber-500/10"
                : "text-amber-400/90 hover:text-amber-300 bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/20"
            }`}
          >
            <IconCrown size={14} className="text-amber-400" />
            <span>Admin Studio</span>
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Command Search Button */}
          <button
            onClick={() => setSearchModalOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-obsidian-850 hover:bg-obsidian-800 border border-slate-800 text-xs font-medium text-slate-400 transition-colors"
            title="Search topics and syllabus (Ctrl+K)"
          >
            <IconSearch size={14} />
            <span className="hidden sm:inline">Search...</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-obsidian-900 border border-slate-700/60 rounded text-slate-400">
              ⌘K
            </kbd>
          </button>

          {/* User Auth Section */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 p-1 pl-2 rounded-full bg-obsidian-850 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-500 to-brand-600 flex items-center justify-center text-xs font-extrabold text-white">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="text-xs font-bold text-slate-200 max-w-[100px] truncate hidden md:inline">
                  {user.name.split(" ")[0]}
                </span>
                <IconChevronDown size={14} className="text-slate-400 mr-1" />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 rounded-xl glass-panel p-2 shadow-2xl z-50">
                  <div className="px-3 py-2 border-b border-slate-800/80 mb-1">
                    <div className="text-xs font-extrabold text-white truncate">{user.name}</div>
                    <div className="text-[11px] text-slate-400 truncate">{user.email}</div>
                    <div className="mt-1 flex items-center gap-1.5">
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        isAdmin ? "bg-amber-500/20 text-amber-400 border border-amber-500/30" : "bg-brand-500/20 text-brand-300"
                      }`}>
                        {isAdmin ? "Admin User" : `Class ${user.class} · ${user.stream}`}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setCurrentSection("admin");
                      setUserMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-amber-300 hover:bg-amber-500/10 flex items-center gap-2"
                  >
                    <IconCrown size={14} />
                    <span>Admin Studio</span>
                  </button>

                  <button
                    onClick={() => {
                      setCurrentSection("progress");
                      setUserMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:bg-obsidian-800"
                  >
                    My Study Progress
                  </button>

                  <button
                    onClick={() => {
                      setCurrentSection("notes");
                      setUserMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:bg-obsidian-800"
                  >
                    My Notes
                  </button>

                  <div className="my-1 border-t border-slate-800/80"></div>

                  <button
                    onClick={() => {
                      logout();
                      setUserMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-bold text-rose-400 hover:bg-rose-500/10"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setAuthMode("login");
                  setAuthModalOpen(true);
                }}
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-200 hover:bg-obsidian-800 transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setAuthMode("register");
                  setAuthModalOpen(true);
                }}
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:brightness-110 shadow-md shadow-brand-500/20 transition-all"
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

