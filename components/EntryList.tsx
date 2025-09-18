"use client";

export type Entry = { id: string; createdAt: string; title: string; content: string };

export default function EntryList({ entries, onDelete }: { entries: Entry[]; onDelete: (id: string) => void }) {
  if (!entries.length) return <p className="text-sm text-slate-500">No entries yet.</p>;

  return (
    <div className="space-y-3">
      {entries.slice().reverse().map(e => (
        <div
          key={e.id}
          className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="font-semibold">{e.title || "(No title)"}</div>
              <div className="text-xs text-slate-500">{new Date(e.createdAt).toLocaleString()}</div>
            </div>
            <div className="flex gap-2">
              <button className="text-xs rounded-lg border px-2 py-1 opacity-60 dark:border-slate-700" disabled>
                Ask Coach
              </button>
              <button onClick={() => onDelete(e.id)} className="text-xs text-red-600 hover:underline">
                Delete
              </button>
            </div>
          </div>
          <p className="mt-3 whitespace-pre-wrap text-sm">{e.content}</p>
        </div>
      ))}
    </div>
  );
}
