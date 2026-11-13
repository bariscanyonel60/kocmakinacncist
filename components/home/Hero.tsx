"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLink } from "@/components/ui/ArrowLink";

const ease = [0.22, 1, 0.36, 1] as const;

const specs = [
  { k: "01", v: "CNC Torna" },
  { k: "02", v: "Hassas İşleme" },
  { k: "03", v: "Talaşlı İmalat" },
];

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? { initial: false as const, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        };

  const line = (delay: number) =>
    reduce
      ? { initial: false as const, animate: { y: "0%" } }
      : {
          initial: { y: "140%" },
          animate: { y: "0%" },
          transition: { duration: 0.9, delay, ease },
        };

  return (
    <section className="relative min-h-[88svh] overflow-hidden bg-ink text-white md:min-h-[92svh]">
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={reduce ? { duration: 0 } : { duration: 1.6, ease }}
      >
        <Image
          src="/images/cnc-torna-kesim.jpg"
          alt="CNC tornada kesici uç, çelik mil, ayna ve punta ile süren metal işleme — Koç Makina İstanbul"
          fill
          preload
          sizes="100vw"
          quality={65}
          className="object-cover object-[72%_center] sm:object-[64%_center] md:object-[70%_center]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/60 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/50" />

      <div className="relative mx-auto flex min-h-[88svh] max-w-[1440px] flex-col justify-end px-5 pt-[calc(92px+2.5rem)] pb-10 md:min-h-[92svh] md:px-10 md:pb-12">
        <motion.p className="eyebrow text-white/80" {...rise(0.05)}>
          <span className="mr-3 inline-block h-px w-8 bg-accent align-middle" />
          KOC Makina CNC · İstanbul
        </motion.p>
        <h1 className="display mt-4 max-w-[15ch] text-[clamp(2.1rem,6.8vw,5.8rem)] md:mt-5">
          <span className="-mt-[0.1em] block overflow-hidden pt-[0.1em] pb-[0.05em]">
            <motion.span className="block" {...line(0.12)}>
              Hassas CNC üretim.
            </motion.span>
          </span>
          <span className="-mt-[0.1em] block overflow-hidden pt-[0.1em] pb-[0.05em]">
            <motion.span className="block text-white/90" {...line(0.24)}>
              İstanbul&apos;da torna ve freze.
            </motion.span>
          </span>
        </h1>
        <motion.p
          className="mt-6 max-w-xl text-[clamp(0.95rem,2.2vw,1.125rem)] leading-relaxed text-mist"
          {...rise(0.38)}
        >
          İstanbul&apos;da CNC torna, CNC freze ve hassas talaşlı imalat çözümleri. Teknik çizimlerinizi üretime
          dönüştüren mühendislik odaklı yaklaşım.
        </motion.p>
        <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center" {...rise(0.46)}>
          <ArrowLink href="/#teklif-al" arrow={false}>
            Teknik çizim gönder
          </ArrowLink>
          <ArrowLink href="/#yetenekler" variant="outline">
            Üretim yeteneklerimiz
          </ArrowLink>
        </motion.div>

        <dl className="mt-12 grid border-t border-white/15 sm:grid-cols-3">
          {specs.map((item) => (
            <div
              key={item.k}
              className="border-b border-white/15 py-4 sm:border-r sm:border-b-0 sm:px-5 sm:first:pl-0 sm:last:border-r-0"
            >
              <dt className="text-[11px] tracking-[0.22em] text-metal">{item.k}</dt>
              <dd className="mt-2 font-display text-lg tracking-[0.08em] uppercase">{item.v}</dd>
            </div>
          ))}
        </dl>

        <motion.a
          href="/#yetenekler"
          className="mt-8 hidden w-fit items-center gap-3 text-[10px] tracking-[0.28em] text-white/55 uppercase transition-colors hover:text-white md:inline-flex"
          aria-label="Aşağı kaydır — üretim yetenekleri"
          {...rise(0.55)}
        >
          Kaydır
          <span
            aria-hidden="true"
            className={reduce ? "inline-block h-8 w-px bg-white/40" : "hero-scroll-line inline-block h-8 w-px bg-white/40"}
          />
        </motion.a>
      </div>
    </section>
  );
}
