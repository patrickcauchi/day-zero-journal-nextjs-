// components/ThemeToggle.tsx
"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  // Set initial state from localStorage or OS preference
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = localStorage.theme === "dark" || (!("theme" in localStorage) && prefersDark);
    document.documentElement.classList.toggle("dark", initial);
    setDark(initial);
  }, []);

  if (dark === null) return null; // avoid SSR mismatch blink

  function toggle() {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.theme = next ? "dark" : "light"; } catch {}
    setDark(next); // re-render label
  }

  return (
    <button
      onClick={toggle}
      className="rounded-lg border px-3 py-1 text-sm dark:border-slate-700"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
