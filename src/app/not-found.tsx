import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-pad">
      <div className="container-page max-w-lg text-center">
        <p className="eyebrow mb-3">Error 404</p>
        <h1 className="font-display text-3xl font-semibold">Test failed: page not found</h1>
        <p className="mt-3 text-navy-500 dark:text-navy-300">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link href="/" className="btn-primary mt-7 inline-flex">
          Back to home
        </Link>
      </div>
    </div>
  );
}
