interface SectionHeadingProps {
  label: string;
  accent: string;
  id?: string;
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeading({ label, accent, id, tone = "light", className = "" }: SectionHeadingProps) {
  const accentIndex = label.lastIndexOf(accent);
  const hasAccent = accentIndex >= 0;
  const before = hasAccent ? label.slice(0, accentIndex) : label;
  const after = hasAccent ? label.slice(accentIndex + accent.length) : "";

  return (
    <h2
      id={id}
      className={className}
      style={{ fontSize: "32px", fontWeight: 700, lineHeight: 1.2, color: tone === "dark" ? "#ffffff" : "#111111" }}
    >
      {before}
      {hasAccent && (
        <span className="relative inline-block">
          <span className="relative z-10">{accent}</span>
          <span aria-hidden="true" className="absolute bottom-0 left-0 h-2 w-full bg-[#6EDFA3]" />
        </span>
      )}
      {after}
    </h2>
  );
}
