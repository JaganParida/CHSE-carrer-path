import React, { useState } from "react";
import { useApp } from "../context/AppContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { IconDownload, IconNote, IconEdit, IconCheck, IconArrowRight, IconSearch, IconSparkles } from "./Icons.jsx";

export const NotesView = () => {
  const { notes, saveNote, showToast, setCurrentSection } = useApp();
  const { user, setAuthModalOpen, setAuthMode } = useAuth();

  const noteKeys = Object.keys(notes).filter((k) => notes[k]?.text?.trim());
  const [filterQuery, setFilterQuery] = useState("");
  const [activeKey, setActiveKey] = useState(noteKeys[0] || null);

  // If activeKey is not in noteKeys and noteKeys has items, pick first
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/25 text-blue-400 text-xs font-bold mb-2">
            <IconSparkles size={14} />
            <span>PERSONAL STUDY NOTEPAD</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            My Chapter Notes
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl leading-relaxed">
            Personal revision notes captured while watching video lectures. Automatically cached and exportable anytime as plain text.
          </p>
        </div>

        <button
          onClick={handleExportAll}
          className="self-start sm:self-auto px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-white flex items-center gap-2 shadow-lg transition-colors"
        >
          <IconDownload size={14} className="text-blue-400" />
          <span>Export All Notes (.txt)</span>
        </button>
      </div>

      {/* Guest Sign In Prompt */}
      {!user && (
        <div className="p-4 sm:p-5 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
              <IconNote size={20} />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Save notes to your permanent student account</div>
              <div className="text-xs text-slate-400">Notes are currently cached locally in this browser. Sign in to sync across your phone and PC.</div>
            </div>
          </div>
          <button
            onClick={() => {
              setAuthMode("login");
              setAuthModalOpen(true);
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shrink-0 transition-all shadow-md shadow-blue-500/20"
          >
            Sign In to Sync
          </button>
        </div>
      )}

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left: Notes List */}
        <div className="md:col-span-4 bg-slate-900 rounded-3xl border border-slate-800 p-5 space-y-3 max-h-[640px] flex flex-col shadow-xl">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Saved Chapters
            </span>
            <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[10px] text-white font-mono font-bold">
              {noteKeys.length}
            </span>
          </div>

          {/* Quick Search inside notes */}
          {noteKeys.length > 0 && (
            <div className="relative">
              <IconSearch size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                placeholder="Filter saved notes..."
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>
          )}

          {/* Notes scroll list */}
          <div className="space-y-1.5 overflow-y-auto flex-1 pr-1">
            {noteKeys.length === 0 ? (
              <div className="py-16 text-center text-xs text-slate-500 space-y-3">
                <IconNote size={32} className="mx-auto text-slate-600" />
                <p>No notes written yet. Start watching any syllabus video lecture to jot notes.</p>
                <button
                  onClick={() => setCurrentSection("dashboard")}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/25 text-xs font-bold hover:bg-blue-600 hover:text-white transition-all"
                >
                  <span>Browse Syllabus</span>
                  <IconArrowRight size={12} />
                </button>
              </div>
            ) : filteredKeys.length === 0 ? (
              <div className="py-8 text-center text-xs text-slate-500">
                No notes match "{filterQuery}"
              </div>
            ) : (
              filteredKeys.map((k) => {
                const n = notes[k];
                const isSelected = k === currentKey;
                return (
                  <div
                    key={k}
                    onClick={() => setActiveKey(k)}
                    className={`p-3 rounded-2xl cursor-pointer transition-all border ${
                      isSelected
                        ? "bg-blue-600/15 border-blue-500/40 text-white shadow-sm"
                        : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700 text-slate-300"
                    }`}
                  >
                    <div className="text-xs font-bold truncate flex items-center justify-between">
                      <span className="truncate">{k}</span>
                      <span className="text-[10px] text-blue-400 font-mono shrink-0 ml-2">
                        {n.subject || "CHSE"}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 truncate mt-1">
                      {n.text}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right: Note Content / Editor */}
        <div className="md:col-span-8 bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-7 space-y-4 shadow-xl">
          {activeNote && currentKey ? (
            <>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <h3 className="text-lg font-black text-white">{currentKey}</h3>
                  <div className="text-xs text-blue-400 font-semibold mt-0.5">
                    Subject: {activeNote.subject || "General"}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleExportSingle}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="Export single note"
                  >
                    <IconDownload size={14} />
                  </button>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {activeNote.updatedAt
                      ? `Saved ${new Date(activeNote.updatedAt).toLocaleTimeString()}`
                      : "Auto-saved"}
                  </span>
                </div>
              </div>

              <textarea
                rows="16"
                value={activeNote.text}
                onChange={(e) => saveNote(currentKey, e.target.value, activeNote.subject)}
                placeholder="Write your key points, formulas, definitions, and exam reminders here..."
                className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none font-sans leading-relaxed"
              ></textarea>
            </>
          ) : (
            <div className="py-28 text-center text-slate-500 text-sm space-y-3">
              <IconNote size={36} className="mx-auto text-slate-600" />
              <p className="font-bold text-slate-300 text-base">Select a chapter note from the list to view or edit</p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
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
