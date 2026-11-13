import type { FaqItem } from "@/data/faq";

export function FaqList({ items, invert = false }: { items: FaqItem[]; invert?: boolean }) {
  return (
    <div className={invert ? "divide-y divide-white/10 border-y border-white/10" : "divide-y divide-ink/10 border-y border-ink/10"}>
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary
            className={`flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left font-display text-lg leading-snug tracking-[-0.02em] uppercase md:text-xl [&::-webkit-details-marker]:hidden ${invert ? "text-white" : "text-ink"}`}
          >
            {item.question}
            <span className="mt-1 shrink-0 text-accent transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
              +
            </span>
          </summary>
          <p className={`max-w-3xl pb-6 text-base leading-relaxed ${invert ? "text-metal" : "text-muted"}`}>
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
