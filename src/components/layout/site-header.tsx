"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { LuMenu, LuX } from "react-icons/lu";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { profile } from "@/data/profile";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/certifications", label: "Certifications" },
  { href: "/blog", label: "Blog" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-mist/80 bg-paper/85 backdrop-blur dark:border-navy-700/80 dark:bg-navy-950/85">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-lg font-semibold tracking-tightish">
          {profile.name.split(" ")[0]}
          <span className="text-signal-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  active
                    ? "text-navy-900 dark:text-white font-medium"
                    : "text-navy-500 hover:text-navy-900 dark:text-navy-300 dark:hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-navy-300 text-navy-700 lg:hidden dark:border-navy-600 dark:text-mist"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <LuX size={18} /> : <LuMenu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="container-page flex flex-col gap-1 border-t border-mist pb-4 pt-2 lg:hidden dark:border-navy-700"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2.5 text-sm text-navy-700 hover:bg-navy-50 dark:text-mist dark:hover:bg-navy-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
