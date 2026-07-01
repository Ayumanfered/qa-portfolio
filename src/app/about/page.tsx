import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { CheckMark } from "@/components/ui/check-mark";

export const metadata: Metadata = {
  title: "About",
  description: `Career background, education, and values of ${profile.name}.`
};

const VALUES = [
  {
    title: "Traceability over assumption",
    body: "Every test case ties back to a requirement. If I can't trace why something is tested, it gets re-scoped or cut."
  },
  {
    title: "Risk before coverage",
    body: "100% coverage on low-risk paths is wasted effort. I prioritize by business impact and failure likelihood first."
  },
  {
    title: "Quality is a team sport",
    body: "QA works best embedded in planning, not bolted on at the end. I push for shift-left testing wherever I land."
  },
  {
    title: "Documentation is a deliverable",
    body: "A clean SOP or test plan outlives any single release — I write for the next person, not just this sprint."
  }
];

export default function AboutPage() {
  return (
    <div className="section-pad">
      <div className="container-page">
        <SectionHeading eyebrow="About" caseId="PROFILE" title="The career journey, briefly" />

        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="space-y-5 text-navy-600 dark:text-navy-300">
            <p>{profile.shortBio}</p>
            <p>
              My path into QA started with manual testing on enterprise tooling, where I learned that
              good testing is mostly good thinking: understanding what a system is actually for before
              deciding how hard to push on it. From there I moved into ERP and financial platforms,
              where the cost of a missed edge case is measured in real money and real audits — and where
              structured, risk-based test strategy stopped being optional.
            </p>
            <p>
              Today I lead QA across ERP, HRMS, and procurement modules, balancing manual exploratory
              testing with targeted automation, and writing the SOPs that keep a growing QA team aligned
              with ISO 9001 expectations.
            </p>

            <div className="ledger-rule my-8" />

            <div>
              <h3 className="font-display text-xl font-semibold">Education</h3>
              <ul className="mt-4 space-y-3">
                {profile.education.map((ed) => (
                  <li key={ed.degree} className="flex items-start gap-3">
                    <CheckMark className="mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-navy-800 dark:text-mist">{ed.degree}</p>
                      <p className="text-sm text-navy-500 dark:text-navy-400">
                        {ed.school} · {ed.years}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <p className="case-id mb-2">Working Values</p>
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07}>
                <div className="card-surface p-5">
                  <p className="font-medium text-navy-800 dark:text-mist">{v.title}</p>
                  <p className="mt-1.5 text-sm text-navy-500 dark:text-navy-300">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
