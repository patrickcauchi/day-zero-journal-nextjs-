// components/JournalApp.tsx
"use client";
import { useEffect, useState } from "react";
import EntryForm from "@/components/EntryForm";
import EntryList, { Entry } from "@/components/EntryList";

const KEY = "dz.entries.v1";

export default function JournalApp() {
  const [entries, setEntries] = useState<Entry[]>([]);

  // load once on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  // save whenever entries change
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(entries));
    } catch {}
  }, [entries]);

  function addEntry(x: { title: string; content: string }) {
    const e: Entry = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      title: x.title,
      content: x.content,
    };
    setEntries(prev => [...prev, e]);
  }

  function deleteEntry(id: string) {
    setEntries(prev => prev.filter(e => e.id !== id));
  }

  return (
    <div className="space-y-6">
      <EntryForm onAdd={addEntry} />
      <EntryList entries={entries} onDelete={deleteEntry} />
    </div>
  );
}
