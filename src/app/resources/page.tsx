import type { Metadata } from "next";
import { LuDownload, LuFileText } from "react-icons/lu";
import { resources } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Resources",
  description: "Downloadable QA templates: test plans, test cases, defect reports, and SOP examples."
};

export default function ResourcesPage() {
  return (
    <div className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Toolkit"
          caseId="RESOURCES"
          title="Downloadable resources"
          description="Templates and references I actually use. Place the corresponding files in /public to make these downloads live."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {resources.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.06}>
              <a
                href={r.file}
                download
                className="card-surface flex items-center justify-between gap-4 p-5 transition-shadow hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy-50 text-navy-600 dark:bg-navy-800 dark:text-navy-300">
                    <LuFileText size={18} />
                  </span>
                  <div>
                    <p className="font-medium text-navy-800 dark:text-mist">{r.name}</p>
                    <p className="text-sm text-navy-500 dark:text-navy-400">{r.description}</p>
                  </div>
                </div>
                <LuDownload className="shrink-0 text-navy-400" size={18} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
