"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { RevealLines } from "@/components/ui/Reveal";

export function PrecisionStatement() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative flex min-h-[62svh] items-center overflow-hidden bg-ink text-white md:min-h-[72svh]">
      <motion.div className="absolute -inset-y-[10%] inset-x-0" style={reduce ? undefined : { y }}>
        <Image
          src="/images/torna-detay.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
      <div className="absolute inset-0 bg-ink/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-24 md:px-10">
        <p className="eyebrow text-accent">Hassasiyet</p>
        <blockquote className="display mt-6 max-w-5xl text-[clamp(2.1rem,5.6vw,5.4rem)]">
          <RevealLines lines={["Hassasiyet bizim için", "bir detay değil,", "üretimin temelidir."]} />
        </blockquote>
      </div>
    </section>
  );
}
