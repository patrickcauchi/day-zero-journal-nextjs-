// app/page.tsx
import JournalApp from "@/components/JournalApp";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-2xl p-6 space-y-6">
        <h1 className="text-2xl font-bold">Day Zero — Journaling MVP</h1>
        <JournalApp />
      </div>
    </main>
  );
}
