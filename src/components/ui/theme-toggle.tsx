"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { LuSun, LuMoon } from "react-icons/lu";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-9" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-9 w-9 items-center justify-center rounded-md border border-navy-300 text-navy-700 transition-colors hover:bg-navy-50 dark:border-navy-600 dark:text-mist dark:hover:bg-navy-800"
    >
      {isDark ? <LuSun size={16} /> : <LuMoon size={16} />}
    </button>
  );
}
