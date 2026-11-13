import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary: "bg-accent text-white hover:bg-[#c4191e]",
  secondary: "border border-white/35 text-white hover:border-accent",
  ghost: "border border-ink/15 text-ink hover:border-accent hover:text-accent",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-3 px-5 text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
