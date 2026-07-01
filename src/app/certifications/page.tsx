import type { Metadata } from "next";
import { LuBadgeCheck } from "react-icons/lu";
import { certifications } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Professional certifications in software testing, quality, and Agile delivery."
};

export default function CertificationsPage() {
  return (
    <div className="section-pad">
      <div className="container-page">
        <SectionHeading eyebrow="Credentials" caseId="CERTS" title="Certifications" />
        <div className="grid gap-5 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.06}>
              <div className="card-surface flex items-start gap-4 p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-signal-accent/10 text-signal-accent">
                  <LuBadgeCheck size={20} />
                </span>
                <div>
                  <p className="font-medium text-navy-800 dark:text-mist">{c.name}</p>
                  <p className="mt-1 text-sm text-navy-500 dark:text-navy-400">
                    {c.issuer} · {c.year}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
