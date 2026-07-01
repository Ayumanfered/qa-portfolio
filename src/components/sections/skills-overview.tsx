import { skillCategories } from "@/data/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function SkillsOverview() {
  const featured = skillCategories.slice(0, 4);

  return (
    <section className="section-pad bg-navy-900 text-mist dark:bg-navy-950">
      <div className="container-page">
        <SectionHeading eyebrow="Capability map" caseId="SKILLS" title="Where I bring the most coverage" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-navy-700 bg-navy-800/40 p-5">
                <p className="font-display text-base font-semibold">{cat.name}</p>
                <ul className="mt-4 space-y-3">
                  {cat.items.slice(0, 3).map((item) => (
                    <li key={item.label}>
                      <div className="mb-1 flex justify-between text-xs text-navy-300">
                        <span>{item.label}</span>
                        <span className="font-mono">{item.level}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-navy-700">
                        <div
                          className="h-full rounded-full bg-signal-accent"
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
    </section>
  );
}
