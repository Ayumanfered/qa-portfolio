import { testimonials } from "@/data/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Testimonials() {
  return (
    <section className="section-pad bg-navy-50 dark:bg-navy-900/40">
      <div className="container-page">
        <SectionHeading eyebrow="What colleagues say" caseId="FEEDBACK" title="Trusted on the releases that mattered" />
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <blockquote className="card-surface h-full p-7">
                <p className="font-display text-lg leading-relaxed text-navy-800 dark:text-mist">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-5 text-sm text-navy-500 dark:text-navy-300">
                  <span className="font-medium text-navy-700 dark:text-mist">{t.name}</span> — {t.role}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
