export function CheckMark({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="9" cy="9" r="8.25" className="stroke-signal-pass" strokeWidth="1.2" />
      <path
        d="M5 9.3L7.7 12L13 6.3"
        className="stroke-signal-pass animate-check-draw"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="24"
        strokeDashoffset="24"
      />
    </svg>
  );
}
