import type { ReactNode } from "react";

export function SectionHeading({
  index,
  eyebrow,
  title,
  text,
  invert = false,
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  text?: string;
  invert?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold tracking-[0.28em] text-accent uppercase">
        <span className="h-px w-8 bg-accent" aria-hidden="true" />
        {index ? `${index} / ${eyebrow}` : eyebrow}
      </p>
      <h2
        className={`font-display text-[clamp(2rem,4.8vw,4.4rem)] leading-[0.94] font-medium tracking-[-0.035em] uppercase ${invert ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {text ? (
        <p className={`mt-5 max-w-2xl text-base leading-relaxed md:text-lg ${invert ? "text-metal" : "text-muted"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}
