"use client";

import { useEffect, useRef, useState } from "react";
import { processSteps } from "@/data/process";
import { Container } from "@/components/ui/Container";
import { RevealLines } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function ProcessTimeline({ detailed = false, index }: { detailed?: boolean; index?: string }) {
  const [active, setActive] = useState(0);
  const mobileItems = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const position = mobileItems.current.indexOf(entry.target as HTMLLIElement);
          if (position >= 0) setActive(position);
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    for (const item of mobileItems.current) if (item) observer.observe(item);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-ink-2 text-white">
      <Container className="py-20 lg:py-28">
        <p className="eyebrow text-accent">{index ? `${index} / Süreç` : "Süreç"}</p>
        <h2 className="display mt-4 max-w-4xl text-[clamp(2.3rem,5vw,4.8rem)]">
          <RevealLines lines={["Fikirden", "üretime"]} />
        </h2>

        <div className="relative mt-14 hidden lg:block">
          <div className="h-px bg-white/15">
            <div
              className="h-px bg-accent transition-[width] duration-500 ease-out"
              style={{ width: `${((active + 1) / processSteps.length) * 100}%` }}
            />
          </div>
          <ol className="grid grid-cols-6 gap-px bg-white/10">
            {processSteps.map((step, position) => (
              <li
                key={step.number}
                onMouseEnter={() => setActive(position)}
                className={cn(
                  "bg-ink-2 p-5 transition-colors duration-300 xl:p-6",
                  position === active ? "bg-ink" : "hover:bg-ink",
                )}
              >
                <p
                  className={cn(
                    "inline-flex h-8 min-w-8 items-center justify-center font-display text-sm transition-colors duration-300",
                    position <= active ? "bg-accent text-white" : "border border-white/20 text-accent",
                  )}
                >
                  {step.number}
                </p>
                <h3 className="mt-6 font-display text-lg tracking-[-0.02em] break-words hyphens-manual uppercase xl:text-xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{detailed ? step.detail : step.summary}</p>
              </li>
            ))}
          </ol>
        </div>

        <ol className="mt-10 border-l border-white/15 lg:hidden">
          {processSteps.map((step, position) => (
            <li
              key={step.number}
              ref={(node) => {
                mobileItems.current[position] = node;
              }}
              className="relative pb-8 pl-6"
            >
              <span
                className={cn(
                  "absolute top-1 -left-px h-2.5 w-2.5 -translate-x-1/2 transition-colors duration-300",
                  position <= active ? "bg-accent" : "bg-white/30",
                )}
              />
              <p className="text-xs tracking-[0.18em] text-accent">{step.number}</p>
              <h3
                className={cn(
                  "mt-2 font-display text-2xl uppercase transition-colors duration-300",
                  position === active ? "text-white" : "text-white/70",
                )}
              >
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{detailed ? step.detail : step.summary}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
