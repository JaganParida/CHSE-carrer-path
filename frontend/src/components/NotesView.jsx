import React, { useState, useEffect } from "react";
import { useApp } from "../context/AppContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { resolveChapterInfo } from "../data/syllabusData.js";
import {
  IconDownload,
  IconNote,
  IconEdit,
  IconCheck,
  IconArrowRight,
  IconArrowLeft,
  IconSearch,
  IconSparkles,
  IconTrash,
  IconSync,
} from "./Icons.jsx";

export const NotesView = () => {
  const { notes, saveNote, deleteNote, fetchUserNotes, showToast, setCurrentSection } = useApp();
  const { user } = useAuth();

  const noteKeys = Object.keys(notes).filter((k) => notes[k]?.text?.trim());
  const [filterQuery, setFilterQuery] = useState("");
  const [activeKey, setActiveKey] = useState(noteKeys[0] || null);
  const [mobileTab, setMobileTab] = useState("list"); // "list" | "editor" on mobile
  const [isRefreshing, setIsRefreshing] = useState(false);

  const currentKey = activeKey && notes[activeKey]?.text?.trim() ? activeKey : noteKeys[0] || null;
  const activeNote = currentKey ? notes[currentKey] : null;
  const chapterMeta = currentKey ? resolveChapterInfo(currentKey) : null;

  // Manual save to DB on button click
  const [editText, setEditText] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState("Saved to DB");

  useEffect(() => {
    if (activeNote) {
      setEditText(activeNote.text || "");
      setSaveStatus("Saved to DB");
    } else {
      setEditText("");
      setSaveStatus("");
    }
  }, [currentKey, activeNote?.text]);

  const isDirty = activeNote ? editText !== (activeNote.text || "") : Boolean(editText.trim());

  const handleTextChange = (e) => {
    setEditText(e.target.value);
    setSaveStatus("Unsaved changes");
  };

  const handleSave = async () => {
    if (!currentKey) return;
    setIsSaving(true);
    setSaveStatus("Saving to DB...");
    const res = await saveNote(currentKey, editText, activeNote?.subject || chapterMeta?.subject || "General");
    setIsSaving(false);
    if (res?.success) {
      setSaveStatus("Saved to DB");
    } else {
      setSaveStatus("Save failed");
    }
  };

  const handleDelete = async () => {
    if (!currentKey) return;
    const label = chapterMeta?.title || currentKey;
    if (window.confirm(`Delete notes for "${label}"? This will permanently delete from MongoDB database.`)) {
      await deleteNote(currentKey);
      setActiveKey(null);
    }
  };

  const handleRefresh = async () => {
    if (fetchUserNotes) {
      setIsRefreshing(true);
      await fetchUserNotes();
      setIsRefreshing(false);
      showToast("Refreshed latest notes from database.", "info");
    }
  };

  const filteredKeys = noteKeys.filter((key) => {
    if (!filterQuery.trim()) return true;
    const q = filterQuery.toLowerCase();
    const noteText = (notes[key]?.text || "").toLowerCase();
    const subj = (notes[key]?.subject || "").toLowerCase();
    const metaTitle = (resolveChapterInfo(key)?.title || "").toLowerCase();
    return (
      key.toLowerCase().includes(q) ||
      noteText.includes(q) ||
      subj.includes(q) ||
      metaTitle.includes(q)
    );
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-5 border-b border-white/[0.06]">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#0c0d10] border border-white/[0.06] text-zinc-300 text-xs font-mono mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-200"></span>
            <span>PERSONAL STUDY NOTEPAD</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            My Chapter Notes
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl leading-relaxed">
            Personal revision notes captured while watching video lectures. Stored securely in MongoDB database and exportable anytime as plain text.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="px-3 py-2 rounded-lg bg-[#0c0d10] hover:bg-zinc-900 border border-white/[0.08] text-xs font-semibold text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors disabled:opacity-50"
            title="Refresh notes from MongoDB database"
          >
            <IconSync size={13} className={isRefreshing ? "animate-spin" : ""} />
            <span>{isRefreshing ? "Refreshing..." : "Refresh DB"}</span>
          </button>
          <button
            onClick={handleExportAll}
            className="px-3.5 py-2 rounded-lg bg-white hover:bg-zinc-200 text-xs font-semibold text-black flex items-center gap-2 shadow-sm transition-colors"
          >
            <IconDownload size={14} className="text-black" />
            <span>Export All (.txt)</span>
          </button>
        </div>
      </div>

      {/* Mobile-Only Tab Switcher */}
      <div className="md:hidden flex bg-[#0c0d10] p-1 rounded-lg border border-white/[0.06]">
        <button
          onClick={() => setMobileTab("list")}
          className={`flex-1 py-1.5 rounded-md text-xs font-semibold transition-all ${
            mobileTab === "list"
              ? "bg-white text-black shadow-sm"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          Saved Notes ({noteKeys.length})
        </button>
        <button
          onClick={() => setMobileTab("editor")}
          className={`flex-1 py-1.5 rounded-md text-xs font-semibold transition-all ${
            mobileTab === "editor"
              ? "bg-white text-black shadow-sm"
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
          className={`md:col-span-4 bg-[#0c0d10] rounded-xl border border-white/[0.06] p-4 sm:p-5 space-y-3 max-h-[640px] flex flex-col shadow-sm ${
            mobileTab === "editor" ? "hidden md:flex" : "flex"
          }`}
        >
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Saved Chapters
            </span>
            <span className="px-2 py-0.5 rounded-md bg-black/60 border border-white/[0.06] text-[10px] text-zinc-300 font-mono font-medium">
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
                className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-black/60 border border-white/[0.06] text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-white/20 transition-colors"
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
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-all shadow-sm"
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
                const meta = resolveChapterInfo(k);
                const title = meta?.title || k;
                return (
                  <div
                    key={k}
                    onClick={() => {
                      setActiveKey(k);
                      setMobileTab("editor");
                    }}
                    className={`p-3 rounded-lg cursor-pointer transition-all border ${
                      isSelected
                        ? "bg-white text-black shadow-sm font-semibold border-white"
                        : "bg-black/60 border-white/[0.04] hover:border-white/[0.12] text-zinc-300"
                    }`}
                  >
                    <div className="text-xs font-semibold truncate flex items-center justify-between">
                      <span className="truncate">{title}</span>
                      <span className={`text-[10px] font-mono shrink-0 ml-2 ${isSelected ? "text-zinc-600" : "text-zinc-500"}`}>
                        {n.subject || meta?.subject || "CHSE"}
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
          className={`md:col-span-8 bg-[#0c0d10] rounded-xl border border-white/[0.06] p-4 sm:p-6 space-y-4 shadow-sm ${
            mobileTab === "list" ? "hidden md:block" : "block"
          }`}
        >
          {activeNote && currentKey ? (
            <>
              {/* Top Bar inside Editor */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2 min-w-0">
                  <button
                    onClick={() => setMobileTab("list")}
                    className="md:hidden p-1.5 rounded-lg bg-black/60 border border-white/[0.06] text-zinc-400 hover:text-white"
                    title="Back to notes list"
                  >
                    <IconArrowLeft size={14} />
                  </button>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-white truncate max-w-[200px] sm:max-w-md">
                      {chapterMeta?.title || currentKey}
                    </h3>
                    <div className="text-[11px] text-zinc-400 font-mono mt-0.5 flex items-center gap-2">
                      <span>Subject: {activeNote.subject || chapterMeta?.subject || "General"}</span>
                      {chapterMeta?.class && <span>· Class {chapterMeta.class}</span>}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {saveStatus && (
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        isDirty
                          ? "bg-amber-500/10 text-amber-300 border border-amber-500/20"
                          : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      }`}
                    >
                      {saveStatus}
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={handleSave}
                    disabled={isSaving || !isDirty}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm ${
                      isDirty
                        ? "bg-white hover:bg-zinc-200 text-black ring-1 ring-white/50 cursor-pointer"
                        : "bg-[#18191d] text-zinc-400 border border-white/[0.08] hover:text-white"
                    } disabled:opacity-40 disabled:cursor-not-allowed`}
                    title="Persist note to MongoDB Atlas database"
                  >
                    <IconCheck size={12} className={isDirty ? "text-black" : "text-emerald-400"} />
                    <span>{isSaving ? "Saving..." : isDirty ? "Save Note to DB" : "Saved"}</span>
                  </button>

                  <button
                    onClick={handleDelete}
                    className="p-1.5 rounded-lg bg-black/60 border border-white/[0.06] text-zinc-400 hover:text-rose-400 hover:border-rose-500/30 transition-colors"
                    title="Delete note from database"
                  >
                    <IconTrash size={14} />
                  </button>

                  <button
                    onClick={handleExportSingle}
                    className="p-1.5 rounded-lg bg-black/60 border border-white/[0.06] text-zinc-300 hover:text-white hover:border-white/20 transition-colors"
                    title="Export single note"
                  >
                    <IconDownload size={14} />
                  </button>
                </div>
              </div>

              <textarea
                rows="14"
                value={editText}
                onChange={handleTextChange}
                placeholder="Write your key points, formulas, definitions, and exam reminders here... Click 'Save Note to DB' to save in database."
                className="w-full p-3.5 sm:p-4 rounded-lg bg-black/60 border border-white/[0.06] text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-white/20 resize-none font-sans leading-relaxed transition-colors"
              ></textarea>
            </>
          ) : (
            <div className="py-20 text-center text-zinc-500 text-sm space-y-3">
              <IconNote size={32} className="mx-auto text-zinc-600" />
              <p className="font-semibold text-zinc-200 text-sm sm:text-base">Select a chapter note from the list to view or edit</p>
              <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                Every video lecture has its own dedicated notebook saved securely in MongoDB database.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesView;
