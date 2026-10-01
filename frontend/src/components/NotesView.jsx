import React, { useState } from "react";
import { useApp } from "../context/AppContext.jsx";
import { IconDownload, IconTrash, IconBook, IconEdit } from "./Icons.jsx";

export const NotesView = () => {
  const { notes, saveNote, showToast } = useApp();
  const noteKeys = Object.keys(notes).filter((k) => notes[k]?.text?.trim());

  const [activeKey, setActiveKey] = useState(noteKeys[0] || null);
  const activeNote = activeKey ? notes[activeKey] : null;

  const handleExportAll = () => {
    if (noteKeys.length === 0) {
      showToast("No notes to export yet.", "info");
      return;
    }

    let textContent = "CHSETUBE — CHSE ODISHA STUDY NOTES\n";
    textContent += "========================================\n\n";

    noteKeys.forEach((key) => {
      const n = notes[key];
      textContent += `CHAPTER: ${key}\nSUBJECT: ${n.subject || "General"}\n`;
      textContent += `UPDATED: ${n.updatedAt ? new Date(n.updatedAt).toLocaleDateString() : "Recent"}\n`;
      textContent += `----------------------------------------\n`;
      textContent += `${n.text}\n\n========================================\n\n`;
    });

    const blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `CHSETube_Study_Notes_${new Date().toISOString().slice(0, 10)}.txt`;
    link.click();
    URL.revokeObjectURL(url);
    showToast("Notes exported successfully!", "success");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            My Chapter Notes
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Personal chapter notes written while watching lectures. Automatically stored and exportable.
          </p>
        </div>

        <button
          onClick={handleExportAll}
          className="self-start sm:self-auto px-4 py-2 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 border border-slate-700 text-xs font-bold text-slate-200 flex items-center gap-2 shadow"
        >
          <IconDownload size={14} />
          <span>Export All Notes (.txt)</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left: Notes List */}
        <div className="md:col-span-4 glass-panel rounded-2xl border border-slate-800 p-4 space-y-2 max-h-[600px] overflow-y-auto">
          <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-800">
            Saved Chapters ({noteKeys.length})
          </div>

          {noteKeys.length === 0 ? (
            <div className="py-12 text-center text-xs text-slate-500">
              No notes taken yet. Watch a lecture and write notes in the video player.
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
                      ? "bg-brand-600/20 border border-brand-500/40 text-white"
                      : "hover:bg-obsidian-850 border border-transparent text-slate-300"
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
        <div className="md:col-span-8 glass-panel rounded-2xl border border-slate-800 p-6 space-y-4">
          {activeNote ? (
            <>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <h3 className="text-base font-extrabold text-white">{activeKey}</h3>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Subject: {activeNote.subject || "General"}
                  </div>
                </div>
              </div>

              <textarea
                rows="12"
                value={activeNote.text}
                onChange={(e) => saveNote(activeKey, e.target.value, activeNote.subject)}
                className="w-full p-4 rounded-xl bg-obsidian-950 border border-slate-800 text-sm text-slate-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 resize-none font-sans"
              ></textarea>
            </>
          ) : (
            <div className="py-24 text-center text-slate-500 text-sm">
              Select a chapter note from the list on the left to read or edit.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesView;

