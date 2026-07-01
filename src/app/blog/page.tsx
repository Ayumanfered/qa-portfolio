import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on QA best practices, ERP testing, automation, and software quality engineering."
};

export default function BlogIndexPage() {
  return (
    <div className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Writing"
          caseId="BLOG"
          title="Notes on quality engineering"
          description="Short, practical write-ups from real test cycles — not theory for its own sake."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06}>
              <Link href={`/blog/${post.slug}`} className="card-surface group block h-full p-6">
                <p className="case-id">{post.date}</p>
                <h3 className="mt-2 font-display text-lg font-semibold group-hover:text-signal-accent">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-navy-500 dark:text-navy-300">{post.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {post.tags.map((t) => (
                    <span key={t} className="rounded-full bg-navy-50 px-2.5 py-1 text-xs text-navy-600 dark:bg-navy-800 dark:text-navy-300">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
