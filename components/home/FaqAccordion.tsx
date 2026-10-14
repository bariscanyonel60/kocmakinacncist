"use client";

import { useId, useState } from "react";
import type { Faq } from "@/data/faq";
import { cn } from "@/lib/cn";

export function FaqAccordion({ faqs, className }: { faqs: Faq[]; className?: string }) {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className={cn("border-b border-ink/10", className)}>
      {faqs.map((faq, position) => {
        const expanded = open === position;
        const buttonId = `${baseId}-q${position}`;
        const panelId = `${baseId}-a${position}`;
        return (
          <div key={faq.question} className="border-t border-ink/10">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? null : position)}
                className="group flex w-full items-center justify-between gap-6 py-5 text-left text-base font-medium md:text-lg"
              >
                <span className={cn("transition-colors", expanded ? "text-accent" : "group-hover:text-accent")}>
                  {faq.question}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "grid h-8 w-8 shrink-0 place-items-center border text-lg leading-none transition-colors duration-300",
                    expanded ? "border-accent bg-accent text-white" : "border-ink/15 text-accent",
                  )}
                >
                  <span className={cn("transition-transform duration-300", expanded && "rotate-45")}>+</span>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!expanded}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none",
                expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-6 leading-relaxed text-ink/75">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
