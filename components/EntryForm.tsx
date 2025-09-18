// components/EntryForm.tsx
"use client";
import { useState } from "react";

export default function EntryForm({ onAdd }: { onAdd: (x: { title: string; content: string }) => void }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const t = title.trim(), c = content.trim();
    if (!t && !c) return;           // ignore empty
    onAdd({ title: t, content: c }); // up to parent
    setTitle(""); setContent("");    // reset
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="w-full rounded border p-2"
        placeholder="Title (optional)"
      />
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        rows={4}
        className="w-full rounded border p-2"
        placeholder="What happened today?"
      />
      <button className="rounded bg-black px-4 py-2 text-white">Save</button>
    </form>
  );
}
