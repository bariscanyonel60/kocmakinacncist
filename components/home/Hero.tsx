"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const ease = [0.22, 1, 0.36, 1] as const;

const facts = [
  { number: "01", label: "CNC Torna" },
  { number: "02", label: "Hassas İşleme" },
  { number: "03", label: "Talaşlı İmalat" },
];

export function Hero() {
  const reduce = useReducedMotion();

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        };

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink text-white">
      <motion.div
        className="absolute inset-0"
        initial={reduce ? undefined : { scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={reduce ? undefined : { duration: 1.8, ease }}
      >
        <Image
          src="/images/hero.webp"
          alt="CNC freze kesicisinin metal parçayı işlediği yakın plan"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_22%] md:object-[62%_center]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/10 md:bg-gradient-to-r md:from-ink md:via-ink/88 md:to-ink/25" />
      <div className="tech-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="pointer-events-none absolute top-24 left-5 hidden h-16 w-16 border-t border-l border-white/25 md:block lg:left-12" aria-hidden="true" />
      <div className="pointer-events-none absolute right-5 bottom-8 hidden h-16 w-16 border-r border-b border-white/25 md:block lg:right-12" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-end px-5 pt-28 pb-8 md:px-8 lg:px-12 lg:pb-12">
        <motion.p {...fade(0.05)} className="text-[11px] font-semibold tracking-[0.28em] text-white/80 uppercase">
          KOC Makina CNC · İstanbul
        </motion.p>
        <h1 className="mt-5 max-w-[16ch] font-display text-[clamp(1.85rem,8.4vw,6.6rem)] leading-[0.9] font-medium tracking-[-0.04em] uppercase">
          <motion.span {...fade(0.16)} className="block">
            Hassas üretim.
          </motion.span>
          <motion.span {...fade(0.28)} className="block">
            Güçlü teknoloji.
          </motion.span>
        </h1>
        <motion.p {...fade(0.4)} className="mt-6 max-w-xl text-base leading-relaxed text-white/78 md:text-lg">
          CNC torna ve hassas talaşlı imalat çözümleriyle projelerinizi yüksek kalite standartlarında üretime dönüştürüyoruz.
        </motion.p>
        <motion.div {...fade(0.52)} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/iletisim">Teklif Al</Button>
          <Button href="/hizmetler" variant="secondary">
            Hizmetleri İncele
            <span aria-hidden="true">→</span>
          </Button>
        </motion.div>

        <ul className="mt-12 grid border-t border-white/15 sm:grid-cols-3">
          {facts.map((fact) => (
            <li
              key={fact.number}
              className="flex items-center gap-4 border-white/15 py-4 sm:border-l sm:px-6 sm:first:border-l-0 sm:first:pl-0"
            >
              <span className="font-display text-xs text-accent">{fact.number}</span>
              <span className="text-[11px] tracking-[0.2em] uppercase">{fact.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
