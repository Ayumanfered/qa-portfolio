import type { Metadata } from "next";
import { experience } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { CheckMark } from "@/components/ui/check-mark";

export const metadata: Metadata = {
  title: "Experience",
  description: "Career timeline, roles, and accomplishments in software quality assurance."
};

export default function ExperiencePage() {
  const ordered = [...experience].reverse();

  return (
    <div className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Career timeline"
          caseId="EXPERIENCE"
          title="Roles, responsibility, and what shipped"
        />

        <div className="relative border-l border-mist pl-8 dark:border-navy-700 sm:pl-10">
          {ordered.map((job, i) => (
            <Reveal key={job.id} delay={i * 0.08} className="relative mb-14 last:mb-0">
              <span className="absolute -left-[2.55rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-paper bg-signal-accent dark:border-navy-950 sm:-left-[3.05rem]" />
              <p className="case-id">{job.period}</p>
              <h3 className="mt-2 font-display text-xl font-semibold">{job.role}</h3>
              <p className="text-sm text-navy-500 dark:text-navy-400">{job.company}</p>
              <p className="mt-3 max-w-2xl text-sm text-navy-600 dark:text-navy-300">{job.summary}</p>
              <ul className="mt-4 space-y-2.5">
                {job.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-navy-600 dark:text-navy-300">
                    <CheckMark className="mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
