export function PatternDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      role="presentation"
      viewBox="0 0 240 16"
      preserveAspectRatio="xMidYMid meet"
      className={`h-4 w-full text-brand-green/25 ${className}`}
    >
      {Array.from({ length: 20 }).map((_, i) => (
        <rect
          key={i}
          x={i * 12 + 4}
          y="4"
          width="8"
          height="8"
          rx="2"
          transform={`rotate(45 ${i * 12 + 8} 8)`}
          fill={i % 5 === 2 ? "var(--gold)" : "currentColor"}
        />
      ))}
    </svg>
  );
}
