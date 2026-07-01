export function SectionHeading({
  eyebrow,
  caseId,
  title,
  description
}: {
  eyebrow: string;
  caseId?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="mb-3 flex items-center gap-3">
        <span className="eyebrow">{eyebrow}</span>
        {caseId && <span className="case-id">/ {caseId}</span>}
      </div>
      <h2 className="font-display text-3xl font-semibold tracking-tightish sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-navy-500 dark:text-navy-300">{description}</p>}
    </div>
  );
}
