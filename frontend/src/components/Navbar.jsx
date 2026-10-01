import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useApp } from "../context/AppContext.jsx";
import { STREAM_SUBJECTS } from "../data/syllabusData.js";
import {
  IconLogo,
  IconSearch,
  IconCrown,
  IconChevronDown,
  IconCheck,
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

  const streamRef = useRef(null);
  const subjectsRef = useRef(null);
  const userMenuRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (streamRef.current && !streamRef.current.contains(e.target)) {
        setStreamDropdownOpen(false);
      }
      if (subjectsRef.current && !subjectsRef.current.contains(e.target)) {
        setSubjectsDropdownOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeSubjects = STREAM_SUBJECTS[currentStream] || STREAM_SUBJECTS["Science"];

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/95 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo and Brand */}
        <div className="flex items-center gap-6">
          <div
            onClick={() => {
              setCurrentSection("dashboard");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 cursor-pointer group select-none"
          >
            <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:bg-blue-500 transition-colors">
              <IconLogo size={18} />
            </div>
            <div>
              <div className="text-base font-black tracking-tight text-white flex items-center gap-1">
                Odisha<span className="text-blue-500">Learn</span>
              </div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider -mt-0.5">
                CHSE Odisha (+2)
              </div>
            </div>
          </div>

          {/* Stream Selector Dropdown */}
          <div className="relative" ref={streamRef}>
            <button
              onClick={() => {
                setStreamDropdownOpen(!streamDropdownOpen);
                setSubjectsDropdownOpen(false);
              }}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-200 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>{currentStream} Stream</span>
              <IconChevronDown size={14} className="text-slate-400" />
            </button>

            {streamDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 rounded-2xl bg-slate-900 border border-slate-700/80 p-1.5 shadow-2xl z-50 animate-fadeIn">
                {["Science", "Commerce", "Arts"].map((st) => (
                  <button
                    key={st}
                    onClick={() => {
                      setCurrentStream(st);
                      setStreamDropdownOpen(false);
                      setCurrentSection("dashboard");
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors ${
                      currentStream === st
                        ? "bg-blue-600 text-white"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <span>{st} Stream</span>
                    {currentStream === st && <IconCheck size={14} />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Class Toggle (11 / 12) */}
          <div className="hidden lg:flex items-center bg-slate-900 border border-slate-800 rounded-xl p-0.5">
            <button
              onClick={() => setCurrentClass("11")}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                currentClass === "11"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Class 11
            </button>
            <button
              onClick={() => setCurrentClass("12")}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                currentClass === "12"
                  ? "bg-blue-600 text-white shadow-sm"
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
            onClick={() => {
              setCurrentSection("dashboard");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
              currentSection === "dashboard"
                ? "text-blue-400 bg-blue-500/10"
                : "text-slate-300 hover:text-white hover:bg-slate-900"
            }`}
          >
            Dashboard
          </button>

          {/* Subjects Dropdown */}
          <div className="relative" ref={subjectsRef}>
            <button
              onClick={() => {
                setSubjectsDropdownOpen(!subjectsDropdownOpen);
                setStreamDropdownOpen(false);
              }}
              className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors ${
                currentSection === "subject"
                  ? "text-blue-400 bg-blue-500/10"
                  : "text-slate-300 hover:text-white hover:bg-slate-900"
              }`}
            >
              <span>Subjects</span>
              <IconChevronDown size={13} className="text-slate-400" />
            </button>

            {subjectsDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 rounded-2xl bg-slate-900 border border-slate-700/80 p-2 shadow-2xl z-50 animate-fadeIn">
                <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
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
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-slate-200 hover:bg-slate-800 hover:text-blue-400 transition-colors"
                  >
                    {subj}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => {
              setCurrentSection("career");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
              currentSection === "career"
                ? "text-blue-400 bg-blue-500/10"
                : "text-slate-300 hover:text-white hover:bg-slate-900"
            }`}
          >
            Career Paths
          </button>

          <button
            onClick={() => {
              setCurrentSection("progress");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
              currentSection === "progress"
                ? "text-blue-400 bg-blue-500/10"
                : "text-slate-300 hover:text-white hover:bg-slate-900"
            }`}
          >
            Progress
          </button>

          <button
            onClick={() => {
              setCurrentSection("notes");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
              currentSection === "notes"
                ? "text-blue-400 bg-blue-500/10"
                : "text-slate-300 hover:text-white hover:bg-slate-900"
            }`}
          >
            My Notes
          </button>

          {/* Admin Studio Nav Button */}
          <button
            onClick={() => {
              setCurrentSection("admin");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
              currentSection === "admin"
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm"
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
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-400 transition-colors"
            title="Search topics and syllabus (Ctrl+K)"
          >
            <IconSearch size={14} />
            <span className="hidden sm:inline">Search...</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-slate-950 border border-slate-700/60 rounded text-slate-400">
              ⌘K
            </kbd>
          </button>

          {/* User Auth Section */}
          {user ? (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 p-1 pl-2 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="text-xs font-bold text-slate-200 max-w-[100px] truncate hidden md:inline">
                  {user.name.split(" ")[0]}
                </span>
                <IconChevronDown size={14} className="text-slate-400 mr-1" />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 rounded-2xl bg-slate-900 border border-slate-700/80 p-2 shadow-2xl z-50 animate-fadeIn">
                  <div className="px-3 py-2 border-b border-slate-800 mb-1">
                    <div className="text-xs font-bold text-white truncate">{user.name}</div>
                    <div className="text-[11px] text-slate-400 truncate">{user.email}</div>
                    <div className="mt-1 flex items-center gap-1.5">
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          isAdmin
                            ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                            : "bg-blue-500/20 text-blue-300"
                        }`}
                      >
                        {isAdmin ? "Admin User" : `Class ${user.class} · ${user.stream}`}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setCurrentSection("admin");
                      setUserMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-amber-300 hover:bg-amber-500/10 flex items-center gap-2"
                  >
                    <IconCrown size={14} />
                    <span>Admin Studio</span>
                  </button>

                  <button
                    onClick={() => {
                      setCurrentSection("progress");
                      setUserMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:bg-slate-800"
                  >
                    My Study Progress
                  </button>

                  <button
                    onClick={() => {
                      setCurrentSection("notes");
                      setUserMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:bg-slate-800"
                  >
                    My Notes
                  </button>

                  <div className="my-1 border-t border-slate-800"></div>

                  <button
                    onClick={() => {
                      logout();
                      setUserMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-rose-400 hover:bg-rose-500/10"
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
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setAuthMode("register");
                  setAuthModalOpen(true);
                }}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20 transition-all"
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
