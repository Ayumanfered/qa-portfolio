import type { Metadata } from "next";
import { LuMail, LuLinkedin, LuGithub, LuSend, LuMapPin, LuDownload } from "react-icons/lu";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name} for QA leadership, consulting, or collaboration.`
};

const LINKS = [
  { icon: LuMail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: LuLinkedin, label: "LinkedIn", href: profile.social.linkedin },
  { icon: LuGithub, label: "GitHub", href: profile.social.github },
  { icon: LuSend, label: "Telegram", href: profile.social.telegram }
];

export default function ContactPage() {
  return (
    <div className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Get in touch"
          caseId="CONTACT"
          title="Open to QA leadership roles and consulting"
        />

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6">
            <p className="flex items-center gap-2.5 text-sm text-navy-500 dark:text-navy-300">
              <LuMapPin size={16} /> {profile.location}
            </p>
            <ul className="space-y-3">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-center gap-3 text-sm text-navy-600 hover:text-navy-900 dark:text-navy-300 dark:hover:text-white"
                  >
                    <l.icon size={16} /> {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <a href={profile.resumeFile} className="btn-secondary w-full sm:w-auto">
              <LuDownload size={15} /> Download CV
            </a>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
