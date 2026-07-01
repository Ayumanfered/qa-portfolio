import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LuArrowLeft } from "react-icons/lu";
import { blogPosts } from "@/data/profile";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="section-pad">
      <article className="container-page max-w-2xl">
        <Link href="/blog" className="flex items-center gap-2 text-sm text-navy-500 hover:text-navy-800 dark:text-navy-400 dark:hover:text-mist">
          <LuArrowLeft size={15} /> All posts
        </Link>

        <p className="case-id mt-8">{post.date}</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tightish sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.map((t) => (
            <span key={t} className="rounded-full bg-navy-50 px-2.5 py-1 text-xs text-navy-600 dark:bg-navy-800 dark:text-navy-300">
              {t}
            </span>
          ))}
        </div>

        <div className="ledger-rule my-8" />

        <div className="space-y-5 text-navy-600 dark:text-navy-300">
          <p>{post.excerpt}</p>
          <p>
            This is placeholder body copy. Replace this paragraph with the full article content —
            either by editing this file directly per post, or by wiring this route up to a CMS or
            MDX content source if the blog will be updated frequently.
          </p>
          <p>
            A good structure for posts like this: state the problem plainly, walk through the
            concrete approach with examples from real test cycles, and close with what you'd do
            differently next time. Specifics beat generalities — readers come here for the
            real workflow, not abstractions.
          </p>
        </div>
      </article>
    </div>
  );
}
