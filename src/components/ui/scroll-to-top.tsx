"use client";

import { useEffect, useState } from "react";
import { LuArrowUp } from "react-icons/lu";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-navy-800 text-white shadow-card transition-transform hover:-translate-y-0.5 dark:bg-signal-accent dark:text-navy-950"
    >
      <LuArrowUp size={18} />
    </button>
  );
}
