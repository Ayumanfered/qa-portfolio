import type { Metadata } from "next";
import { skillCategories } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Skills",
  description: "Full breakdown of QA skills across manual, automation, API, ERP, and quality systems."
};

export default function SkillsPage() {
  return (
    <div className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Capability map"
          caseId="SKILLS"
          title="Full coverage breakdown"
          description="Self-rated proficiency, grouped by discipline. Bars reflect hands-on production experience, not certifications alone."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.name} delay={(i % 2) * 0.08}>
              <div className="card-surface h-full p-6">
                <h3 className="font-display text-lg font-semibold">{cat.name}</h3>
                <ul className="mt-5 space-y-4">
                  {cat.items.map((item) => (
                    <li key={item.label}>
                      <div className="mb-1.5 flex justify-between text-sm">
                        <span className="text-navy-700 dark:text-mist">{item.label}</span>
                        <span className="font-mono text-xs text-navy-400">{item.level}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-navy-100 dark:bg-navy-800">
                        <div
                          className="h-full rounded-full bg-navy-700 dark:bg-signal-accent"
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
