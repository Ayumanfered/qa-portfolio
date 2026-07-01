import Link from "next/link";
import { profile } from "@/data/profile";

export function ContactCta() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="card-surface flex flex-col items-start gap-6 p-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow mb-3">Let&apos;s talk quality</p>
            <h2 className="font-display text-2xl font-semibold tracking-tightish sm:text-3xl">
              Hiring, or have a release that needs a second pair of eyes?
            </h2>
            <p className="mt-2 text-sm text-navy-500 dark:text-navy-300">
              I usually reply within one business day.
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <Link href="/contact" className="btn-primary">
              Get in touch
            </Link>
            <Link href={profile.resumeFile} className="btn-secondary">
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
