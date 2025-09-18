// app/page.tsx
import ThemeToggle from "@/components/ThemeToggle";
import JournalApp from "@/components/JournalApp";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-2xl p-6 space-y-6">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Day Zero — Journaling MVP</h1>
          <p className="hidden dark:block text-xs opacity-70">Dark mode is ON</p>
          <ThemeToggle />
        </header>
        <JournalApp />
      </div>
    </main>
  );
}
