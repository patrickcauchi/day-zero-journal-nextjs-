// components/EntryList.tsx
"use client";

export type Entry = {
  id: string;
  createdAt: string; // ISO datetime
  title: string;
  content: string;
};

export default function EntryList({ entries, onDelete }: { entries: Entry[]; onDelete: (id: string) => void }) {
  if (!entries.length) {
    return <p className="text-sm text-slate-500">No entries yet.</p>;
  }

  return (
    <div className="space-y-3">
      {entries.slice().reverse().map(e => (
        <div key={e.id} className="rounded-xl bg-white shadow p-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="font-semibold">{e.title || "(No title)"}</div>
              <div className="text-xs text-slate-500">{new Date(e.createdAt).toLocaleString()}</div>
            </div>
            <div className="flex gap-2">
              <button className="text-xs rounded border px-2 py-1" disabled>Ask Coach</button>
              <button onClick={() => onDelete(e.id)} className="text-xs text-red-600">Delete</button>
            </div>
          </div>
          <p className="mt-3 whitespace-pre-wrap text-sm">{e.content}</p>
        </div>
      ))}
    </div>
  );
}
