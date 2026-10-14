"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLink } from "@/components/ui/ArrowLink";

const ease = [0.22, 1, 0.36, 1] as const;

const specs = [
  { k: "01", v: "CNC Torna" },
  { k: "02", v: "CNC Freze" },
  { k: "03", v: "Prototip & Seri" },
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
          alt="CNC tornada kesici uç, çelik mil, ayna ve punta ile süren metal işleme"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[64%_center] md:object-[70%_center]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/10 to-ink/45" />

      <div className="relative mx-auto flex min-h-[88svh] max-w-[1440px] flex-col justify-end px-5 pt-28 pb-8 md:min-h-[92svh] md:px-10 md:pb-10">
        <motion.p className="eyebrow text-white/80" {...rise(0.05)}>
          <span className="mr-3 inline-block h-px w-8 bg-accent align-middle" />
          Koç Makina CNC · İstanbul
        </motion.p>
        <h1 className="display mt-5 max-w-[16ch] text-[clamp(2.3rem,8.4vw,7.4rem)]">
          <span className="-mt-[0.1em] block overflow-hidden pt-[0.1em] pb-[0.05em]">
            <motion.span className="block" {...line(0.12)}>
              Hassas üretim.
            </motion.span>
          </span>
          <span className="-mt-[0.1em] block overflow-hidden pt-[0.1em] pb-[0.05em]">
            <motion.span className="block text-white/90" {...line(0.24)}>
              Güçlü teknoloji.
            </motion.span>
          </span>
        </h1>
        <motion.p
          className="mt-6 font-display text-sm tracking-[0.16em] text-white uppercase md:text-base"
          {...rise(0.38)}
        >
          CNC Torna, CNC Freze ve Hassas Talaşlı İmalat Çözümleri
        </motion.p>
        <motion.p className="mt-4 max-w-xl text-base leading-relaxed text-mist md:text-lg" {...rise(0.46)}>
          İstanbul&apos;da prototipten seri üretime, yüksek hassasiyet gerektiren metal parçalar için güvenilir üretim
          çözümleri.
        </motion.p>
        <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row" {...rise(0.56)}>
          <ArrowLink href="/iletisim#teklif" arrow={false}>
            Teklif Al
          </ArrowLink>
          <ArrowLink href="/hizmetler" variant="outline">
            Üretim Kabiliyetleri
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
      </div>
    </section>
  );
}
