import React, { useState } from "react";
import { useApp } from "../context/AppContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { IconDownload, IconNote, IconEdit, IconCheck, IconArrowRight } from "./Icons.jsx";

export const NotesView = () => {
  const { notes, saveNote, showToast, setCurrentSection } = useApp();
  const { user, setAuthModalOpen, setAuthMode } = useAuth();

  const noteKeys = Object.keys(notes).filter((k) => notes[k]?.text?.trim());
  const [activeKey, setActiveKey] = useState(noteKeys[0] || null);
  const activeNote = activeKey ? notes[activeKey] : null;

  const handleExportAll = () => {
    if (noteKeys.length === 0) {
      showToast("No notes to export yet.", "info");
      return;
    }

    let textContent = "ODISHALEARN (CHSETUBE) — CHSE ODISHA STUDY NOTES\n";
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            My Chapter Notes
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Personal notes taken while watching video lectures. Automatically saved and exportable anytime.
          </p>
        </div>

        <button
          onClick={handleExportAll}
          className="self-start sm:self-auto px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-white flex items-center gap-2 shadow"
        >
          <IconDownload size={14} className="text-blue-400" />
          <span>Export All Notes (.txt)</span>
        </button>
      </div>

      {/* Guest Sign In Prompt */}
      {!user && (
        <div className="p-4 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
              <IconNote size={18} />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Save notes to your permanent account</div>
              <div className="text-xs text-slate-400">Notes are currently cached locally in this browser. Sign in to sync across all your devices.</div>
            </div>
          </div>
          <button
            onClick={() => {
              setAuthMode("login");
              setAuthModalOpen(true);
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shrink-0 transition-all shadow-md shadow-blue-500/20"
          >
            Sign In to Sync Notes
          </button>
        </div>
      )}

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left: Notes List */}
        <div className="md:col-span-4 bg-slate-900 rounded-2xl border border-slate-800 p-4 space-y-2 max-h-[600px] overflow-y-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-800 flex items-center justify-between">
            <span>Saved Chapters</span>
            <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[10px] text-white font-mono">
              {noteKeys.length}
            </span>
          </div>

          {noteKeys.length === 0 ? (
            <div className="py-12 text-center text-xs text-slate-500 space-y-3">
              <IconNote size={28} className="mx-auto text-slate-600" />
              <p>No notes written yet. Start watching any syllabus video lecture to take personal notes.</p>
              <button
                onClick={() => setCurrentSection("dashboard")}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-semibold hover:bg-blue-600/30 transition-colors"
              >
                <span>Browse Syllabus</span>
                <IconArrowRight size={12} />
              </button>
            </div>
          ) : (
            noteKeys.map((k) => {
              const n = notes[k];
              const isSelected = k === activeKey;
              return (
                <div
                  key={k}
                  onClick={() => setActiveKey(k)}
                  className={`p-3 rounded-xl cursor-pointer transition-colors ${
                    isSelected
                      ? "bg-blue-600/20 border border-blue-500/40 text-white"
                      : "hover:bg-slate-800/80 border border-transparent text-slate-300"
                  }`}
                >
                  <div className="text-xs font-bold truncate">{k}</div>
                  <div className="text-[11px] text-slate-400 truncate mt-0.5">{n.text}</div>
                </div>
              );
            })
          )}
        </div>

        {/* Right: Note Content / Editor */}
        <div className="md:col-span-8 bg-slate-900 rounded-2xl border border-slate-800 p-6 space-y-4">
          {activeNote ? (
            <>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <h3 className="text-base font-extrabold text-white">{activeKey}</h3>
                  <div className="text-xs text-blue-400 font-semibold mt-0.5">
                    Subject: {activeNote.subject || "General"}
                  </div>
                </div>
                <div className="text-[11px] text-slate-400">
                  {activeNote.updatedAt
                    ? `Saved: ${new Date(activeNote.updatedAt).toLocaleTimeString()}`
                    : "Auto-saved"}
                </div>
              </div>

              <textarea
                rows="14"
                value={activeNote.text}
                onChange={(e) => saveNote(activeKey, e.target.value, activeNote.subject)}
                placeholder="Write your key points, formulas, definitions, and exam reminders here..."
                className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none font-sans"
              ></textarea>
            </>
          ) : (
            <div className="py-24 text-center text-slate-500 text-sm space-y-2">
              <IconNote size={32} className="mx-auto text-slate-600" />
              <p className="font-semibold text-slate-300">Select a chapter note from the list to view or edit</p>
              <p className="text-xs text-slate-500">Every lecture has its own dedicated notebook that autosaves in real time.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesView;
