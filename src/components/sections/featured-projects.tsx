import Link from "next/link";
import { projects } from "@/data/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function FeaturedProjects() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Selected work"
          caseId="PROJECTS"
          title="Case studies from real releases"
          description="Each project below reflects ownership of the testing strategy end to end — not just execution."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <Link href={`/projects#${p.slug}`} className="card-surface group block h-full p-6 transition-shadow hover:shadow-lg">
                <p className="case-id">CASE / {String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-display text-lg font-semibold group-hover:text-signal-accent">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-navy-500 dark:text-navy-300">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-navy-50 px-2.5 py-1 text-xs text-navy-600 dark:bg-navy-800 dark:text-navy-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
