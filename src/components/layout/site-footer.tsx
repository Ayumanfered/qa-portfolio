import Link from "next/link";
import { LuLinkedin, LuGithub, LuSend, LuMail } from "react-icons/lu";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-mist dark:border-navy-700">
      <div className="container-page flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold">{profile.name}</p>
          <p className="mt-1 max-w-sm text-sm text-navy-500 dark:text-navy-300">{profile.role}</p>
          <p className="case-id mt-4">STATUS: OPEN TO OPPORTUNITIES</p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-navy-600 hover:text-navy-900 dark:text-navy-300 dark:hover:text-white">
            <LuMail size={15} /> {profile.email}
          </a>
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-navy-600 hover:text-navy-900 dark:text-navy-300 dark:hover:text-white">
            <LuLinkedin size={15} /> LinkedIn
          </a>
          <a href={profile.social.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-navy-600 hover:text-navy-900 dark:text-navy-300 dark:hover:text-white">
            <LuGithub size={15} /> GitHub
          </a>
          <a href={profile.social.telegram} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-navy-600 hover:text-navy-900 dark:text-navy-300 dark:hover:text-white">
            <LuSend size={15} /> Telegram
          </a>
        </div>
      </div>

      <div className="ledger-rule" />

      <div className="container-page flex flex-col gap-2 py-6 text-xs text-navy-400 sm:flex-row sm:items-center sm:justify-between dark:text-navy-400">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p className="font-mono">ADDIS ABABA, ETHIOPIA </p>
      </div>
    </footer>
  );
}
