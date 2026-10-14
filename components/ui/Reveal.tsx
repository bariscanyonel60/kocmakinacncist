"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

export function Reveal({ delay = 0, y = 24, children, ...rest }: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) return <motion.div {...rest}>{children}</motion.div>;

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Başlık satırlarını alttan maskeyle çıkarır. */
export function RevealLines({ lines, className }: { lines: readonly string[]; className?: string }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <span className={className}>
        {lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </span>
    );
  }

  return (
    <motion.span className={className} initial="hidden" whileInView="shown" viewport={{ once: true, amount: 0.3 }}>
      {lines.map((line, index) => (
        <span key={line} className="-mt-[0.1em] block overflow-hidden pt-[0.1em] pb-[0.06em]">
          <motion.span
            className="block"
            variants={{
              hidden: { y: "140%" },
              shown: { y: "0%", transition: { duration: 0.8, delay: index * 0.08, ease } },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/** Görseli clip-path ile açar. */
export function ImageReveal({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div className={className} initial="hidden" whileInView="shown" viewport={{ once: true, amount: 0.2 }}>
      <motion.div
        className="absolute inset-0"
        variants={{
          hidden: { clipPath: "inset(0 0 100% 0)" },
          shown: { clipPath: "inset(0 0 0% 0)", transition: { duration: 1.1, ease } },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
