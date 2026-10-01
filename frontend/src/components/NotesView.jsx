import React, { useState } from "react";
import { useApp } from "../context/AppContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import {
  IconDownload,
  IconNote,
  IconEdit,
  IconCheck,
  IconArrowRight,
  IconArrowLeft,
  IconSearch,
  IconSparkles,
} from "./Icons.jsx";

export const NotesView = () => {
  const { notes, saveNote, showToast, setCurrentSection } = useApp();
  const { user } = useAuth();

  const noteKeys = Object.keys(notes).filter((k) => notes[k]?.text?.trim());
  const [filterQuery, setFilterQuery] = useState("");
  const [activeKey, setActiveKey] = useState(noteKeys[0] || null);
  const [mobileTab, setMobileTab] = useState("list"); // "list" | "editor" on mobile

  const currentKey = activeKey && notes[activeKey]?.text?.trim() ? activeKey : noteKeys[0] || null;
  const activeNote = currentKey ? notes[currentKey] : null;

  const filteredKeys = noteKeys.filter((key) => {
    if (!filterQuery.trim()) return true;
    const q = filterQuery.toLowerCase();
    const noteText = (notes[key]?.text || "").toLowerCase();
    const subj = (notes[key]?.subject || "").toLowerCase();
    return key.toLowerCase().includes(q) || noteText.includes(q) || subj.includes(q);
  });

  const handleExportAll = () => {
    if (noteKeys.length === 0) {
      showToast("No notes to export yet.", "info");
      return;
    }

    let textContent = "CHSETUBE — CHSE ODISHA (+2) STUDY NOTES\n";
    textContent += "================================================\n\n";

    noteKeys.forEach((key) => {
      const n = notes[key];
      textContent += `CHAPTER: ${key}\nSUBJECT: ${n.subject || "General"}\n`;
      textContent += `UPDATED: ${n.updatedAt ? new Date(n.updatedAt).toLocaleDateString() : "Recent"}\n`;
      textContent += `------------------------------------------------\n`;
      textContent += `${n.text}\n\n================================================\n\n`;
    });

    const blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `CHSE_Study_Notes_${new Date().toISOString().slice(0, 10)}.txt`;
    link.click();
    URL.revokeObjectURL(url);
    showToast("Notes exported successfully!", "success");
  };

  const handleExportSingle = () => {
    if (!activeNote || !currentKey) return;
    let textContent = `CHSETUBE — CHSE ODISHA STUDY NOTE\n`;
    textContent += `CHAPTER: ${currentKey}\n`;
    textContent += `SUBJECT: ${activeNote.subject || "General"}\n`;
    textContent += `------------------------------------------------\n\n`;
    textContent += activeNote.text;

    const blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${currentKey.replace(/[^a-zA-Z0-9]/g, "_")}_Notes.txt`;
    link.click();
    URL.revokeObjectURL(url);
    showToast("Chapter note exported!", "success");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-5 border-b border-[#1f2127]">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#111215] border border-[#23252a] text-zinc-300 text-xs font-mono mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-200"></span>
            <span>PERSONAL STUDY NOTEPAD</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight">
            My Chapter Notes
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl leading-relaxed">
            Personal revision notes captured while watching video lectures. Automatically cached and exportable anytime as plain text.
          </p>
        </div>

        <button
          onClick={handleExportAll}
          className="self-start sm:self-auto px-3.5 py-2 rounded-lg bg-zinc-100 hover:bg-white text-xs font-semibold text-zinc-950 flex items-center gap-2 shadow-sm transition-colors"
        >
          <IconDownload size={14} className="text-zinc-950" />
          <span>Export All Notes (.txt)</span>
        </button>
      </div>

      {/* Mobile-Only Tab Switcher */}
      <div className="md:hidden flex bg-[#111215] p-1 rounded-lg border border-[#23252a]">
        <button
          onClick={() => setMobileTab("list")}
          className={`flex-1 py-1.5 rounded-md text-xs font-semibold transition-all ${
            mobileTab === "list"
              ? "bg-zinc-100 text-zinc-950 shadow-sm"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          Saved Notes ({noteKeys.length})
        </button>
        <button
          onClick={() => setMobileTab("editor")}
          className={`flex-1 py-1.5 rounded-md text-xs font-semibold transition-all ${
            mobileTab === "editor"
              ? "bg-zinc-100 text-zinc-950 shadow-sm"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          Notebook Editor
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
        {/* Left: Notes List */}
        <div
          className={`md:col-span-4 bg-[#111215] rounded-xl border border-[#23252a] p-4 sm:p-5 space-y-3 max-h-[640px] flex flex-col shadow-sm ${
            mobileTab === "editor" ? "hidden md:flex" : "flex"
          }`}
        >
          <div className="flex items-center justify-between pb-2 border-b border-[#1f2127]">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Saved Chapters
            </span>
            <span className="px-2 py-0.5 rounded-md bg-[#0c0d0f] border border-[#23252a] text-[10px] text-zinc-300 font-mono font-medium">
              {noteKeys.length}
            </span>
          </div>

          {/* Quick Search inside notes */}
          {noteKeys.length > 0 && (
            <div className="relative">
              <IconSearch size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                placeholder="Filter saved notes..."
                className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-[#0c0d0f] border border-[#23252a] text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors"
              />
            </div>
          )}

          {/* Notes scroll list */}
          <div className="space-y-1.5 overflow-y-auto flex-1 pr-1 custom-scrollbar">
            {noteKeys.length === 0 ? (
              <div className="py-12 text-center text-xs text-zinc-500 space-y-3">
                <IconNote size={28} className="mx-auto text-zinc-600" />
                <p>No notes written yet. Start watching any syllabus video lecture to jot notes.</p>
                <button
                  onClick={() => setCurrentSection("dashboard")}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 text-zinc-950 text-xs font-semibold hover:bg-white transition-all shadow-sm"
                >
                  <span>Browse Syllabus</span>
                  <IconArrowRight size={12} />
                </button>
              </div>
            ) : filteredKeys.length === 0 ? (
              <div className="py-8 text-center text-xs text-zinc-500">
                No notes match "{filterQuery}"
              </div>
            ) : (
              filteredKeys.map((k) => {
                const n = notes[k];
                const isSelected = k === currentKey;
                return (
                  <div
                    key={k}
                    onClick={() => {
                      setActiveKey(k);
                      setMobileTab("editor");
                    }}
                    className={`p-3 rounded-lg cursor-pointer transition-all border ${
                      isSelected
                        ? "bg-zinc-100 text-zinc-950 shadow-sm font-semibold border-white"
                        : "bg-[#0c0d0f] border-[#23252a] hover:border-[#343842] text-zinc-300"
                    }`}
                  >
                    <div className="text-xs font-semibold truncate flex items-center justify-between">
                      <span className="truncate">{k}</span>
                      <span className={`text-[10px] font-mono shrink-0 ml-2 ${isSelected ? "text-zinc-600" : "text-zinc-500"}`}>
                        {n.subject || "CHSE"}
                      </span>
                    </div>
                    <div className={`text-[11px] truncate mt-1 ${isSelected ? "text-zinc-800" : "text-zinc-400"}`}>
                      {n.text}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right: Note Content / Editor */}
        <div
          className={`md:col-span-8 bg-[#111215] rounded-xl border border-[#23252a] p-4 sm:p-6 space-y-4 shadow-sm ${
            mobileTab === "list" ? "hidden md:block" : "block"
          }`}
        >
          {activeNote && currentKey ? (
            <>
              {/* Top Bar inside Editor */}
              <div className="flex items-center justify-between pb-3 border-b border-[#1f2127]">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setMobileTab("list")}
                    className="md:hidden p-1.5 rounded-lg bg-[#0c0d0f] border border-[#23252a] text-zinc-400 hover:text-white"
                    title="Back to notes list"
                  >
                    <IconArrowLeft size={14} />
                  </button>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-zinc-100 truncate max-w-[200px] sm:max-w-md">
                      {currentKey}
                    </h3>
                    <div className="text-[11px] text-zinc-400 font-mono mt-0.5">
                      Subject: {activeNote.subject || "General"}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleExportSingle}
                    className="p-1.5 rounded-lg bg-[#0c0d0f] border border-[#23252a] text-zinc-300 hover:text-zinc-100 hover:border-zinc-400 transition-colors"
                    title="Export single note"
                  >
                    <IconDownload size={14} />
                  </button>
                  <span className="text-[11px] text-zinc-500 font-mono hidden sm:inline">
                    {activeNote.updatedAt
                      ? `Saved ${new Date(activeNote.updatedAt).toLocaleTimeString()}`
                      : "Auto-saved"}
                  </span>
                </div>
              </div>

              <textarea
                rows="14"
                value={activeNote.text}
                onChange={(e) => saveNote(currentKey, e.target.value, activeNote.subject)}
                placeholder="Write your key points, formulas, definitions, and exam reminders here..."
                className="w-full p-3.5 sm:p-4 rounded-lg bg-[#0c0d0f] border border-[#23252a] text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-zinc-400 resize-none font-sans leading-relaxed transition-colors"
              ></textarea>
            </>
          ) : (
            <div className="py-20 text-center text-zinc-500 text-sm space-y-3">
              <IconNote size={32} className="mx-auto text-zinc-600" />
              <p className="font-semibold text-zinc-200 text-sm sm:text-base">Select a chapter note from the list to view or edit</p>
              <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                Every video lecture has its own dedicated notebook that autosaves in real time.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesView;
