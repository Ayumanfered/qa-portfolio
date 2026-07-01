import type { Metadata } from "next";
import { LuExternalLink, LuGithub } from "react-icons/lu";
import { projects } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { CheckMark } from "@/components/ui/check-mark";

export const metadata: Metadata = {
  title: "Projects",
  description: "QA case studies covering ERP, HRMS, and API regression work."
};

export default function ProjectsPage() {
  return (
    <div className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Selected work"
          caseId="PROJECTS"
          title="Case studies"
          description="Each entry covers ownership end to end: approach, responsibilities, and measured business impact."
        />

        <div className="space-y-10">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <article id={p.slug} className="card-surface scroll-mt-24 p-7 sm:p-9">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="case-id">CASE / {String(i + 1).padStart(2, "0")}</p>
                    <h3 className="mt-2 font-display text-2xl font-semibold">{p.title}</h3>
                  </div>
                  <div className="flex gap-2">
                    {p.links.demo && (
                      <a href={p.links.demo} target="_blank" rel="noreferrer" className="btn-secondary px-3 py-2 text-xs">
                        <LuExternalLink size={14} /> Demo
                      </a>
                    )}
                    {p.links.github && (
                      <a href={p.links.github} target="_blank" rel="noreferrer" className="btn-secondary px-3 py-2 text-xs">
                        <LuGithub size={14} /> Code
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-4 max-w-2xl text-navy-600 dark:text-navy-300">{p.description}</p>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {p.technologies.map((t) => (
                    <span key={t} className="rounded-full bg-navy-50 px-2.5 py-1 text-xs text-navy-600 dark:bg-navy-800 dark:text-navy-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="ledger-rule my-7" />

                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <p className="eyebrow mb-3">Responsibilities</p>
                    <ul className="space-y-2.5">
                      {p.responsibilities.map((r) => (
                        <li key={r} className="flex items-start gap-2.5 text-sm text-navy-600 dark:text-navy-300">
                          <CheckMark className="mt-0.5 shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-5">
                    <div>
                      <p className="eyebrow mb-2">Testing approach</p>
                      <p className="text-sm text-navy-600 dark:text-navy-300">{p.testingApproach}</p>
                    </div>
                    <div>
                      <p className="eyebrow mb-2">Business impact</p>
                      <p className="text-sm font-medium text-signal-pass">{p.businessImpact}</p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
