"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

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

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink text-white">
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={reduce ? { duration: 0 } : { duration: 1.6, ease }}
      >
        <Image
          src="/images/cnc-torna-kesim.jpg"
          alt="CNC tornada kesici uç, çelik mil, ayna ve punta ile süren metal işleme"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/82 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-end px-5 pt-28 pb-8 md:px-10 md:pb-10">
        <motion.p className="eyebrow text-white/80" {...rise(0.05)}>
          <span className="mr-3 inline-block h-px w-8 bg-accent align-middle" />
          KOC Makina CNC · İstanbul
        </motion.p>
        <h1 className="display mt-5 max-w-[16ch] text-[clamp(2.05rem,8.4vw,7.1rem)]">
          <motion.span className="block" {...rise(0.16)}>
            Hassas üretim.
          </motion.span>
          <motion.span className="block" {...rise(0.28)}>
            Güçlü teknoloji.
          </motion.span>
        </h1>
        <motion.p className="mt-6 max-w-xl text-base leading-relaxed text-mist md:text-lg" {...rise(0.4)}>
          CNC torna ve hassas talaşlı imalat çözümleriyle projelerinizi yüksek kalite standartlarında üretime dönüştürüyoruz.
        </motion.p>
        <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row" {...rise(0.5)}>
          <Link
            href="/iletisim"
            className="inline-flex min-h-12 items-center justify-center bg-accent px-6 py-4 text-xs font-semibold tracking-[0.18em] uppercase transition-colors hover:bg-white hover:text-ink"
          >
            Teklif Al
          </Link>
          <Link
            href="/hizmetler"
            className="inline-flex min-h-12 items-center justify-center border border-white/30 px-6 py-4 text-xs font-semibold tracking-[0.18em] uppercase transition-colors hover:border-accent hover:text-accent"
          >
            Hizmetleri İncele →
          </Link>
        </motion.div>

        <dl className="mt-12 grid border-t border-white/15 sm:grid-cols-3">
          {specs.map((item) => (
            <div key={item.k} className="border-b border-white/15 py-4 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0">
              <dt className="text-[11px] tracking-[0.22em] text-metal">{item.k}</dt>
              <dd className="mt-2 font-display text-lg tracking-[0.08em] uppercase">{item.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
