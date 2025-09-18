"use client";
import { useState } from "react";

export default function EntryForm({ onAdd }: { onAdd: (x: { title: string; content: string }) => void }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const t = title.trim(), c = content.trim();
    if (!t && !c) return;
    onAdd({ title: t, content: c });
    setTitle(""); setContent("");
  }

  const inputCls =
    "w-full rounded-lg border px-3 py-2 outline-none " +
    "border-slate-300 bg-white text-slate-900 placeholder-slate-400 " +
    "focus:ring-2 focus:ring-slate-400 " +
    "dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:ring-slate-600";

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        className={inputCls}
        placeholder="Title (optional)"
      />
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        rows={4}
        className={inputCls}
        placeholder="What happened today?"
      />
      <button
        className="rounded-lg bg-slate-900 px-4 py-2 text-white hover:opacity-90 dark:bg-slate-200 dark:text-slate-900"
      >
        Save
      </button>
    </form>
  );
}
