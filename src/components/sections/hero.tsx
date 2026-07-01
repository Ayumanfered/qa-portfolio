"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { CheckMark } from "@/components/ui/check-mark";

const RUN_STEPS = [
  "Requirements traced",
  "Test cases designed",
  "Edge cases covered",
  "Regression passed",
  "Ready to ship"
];

export function Hero() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow mb-4">{profile.role}</p>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tightish sm:text-5xl lg:text-[3.4rem]">
            {profile.tagline}
          </h1>
          <p className="mt-6 max-w-lg text-base text-navy-500 dark:text-navy-300">
            {profile.shortBio}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/projects" className="btn-primary">
              View case studies
            </Link>
            <Link href={profile.resumeFile} className="btn-secondary">
              Download CV
            </Link>
          </div>

          <div className="ledger-rule mt-10 mb-6" />
          <p className="case-id">Based in {profile.location} · Open to remote &amp; on-site roles</p>
        </div>

        {/* Signature element: animated test-run ledger */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="card-surface relative overflow-hidden p-6 sm:p-8"
        >
          <div className="flex items-center justify-between border-b border-mist pb-4 dark:border-navy-700">
            <span className="case-id">RUN #2026-0630</span>
            <span className="rounded-full bg-signal-pass/10 px-2.5 py-1 text-xs font-medium text-signal-pass">
              ALL PASSED
            </span>
          </div>
          <ul className="mt-5 space-y-4">
            {RUN_STEPS.map((step, i) => (
              <motion.li
                key={step}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.18, duration: 0.4 }}
                className="flex items-center gap-3 text-sm"
              >
                <CheckMark />
                <span className="text-navy-700 dark:text-mist">{step}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
