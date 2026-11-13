import Link from "next/link";
import { cn } from "@/lib/cn";

const button = "min-h-12 justify-center px-6 py-4";

const variants = {
  primary: `${button} bg-accent text-white hover:bg-white hover:text-ink`,
  dark: `${button} bg-ink text-white hover:bg-accent`,
  outline: `${button} border border-white/30 hover:border-accent hover:text-accent`,
  text: "border-b border-current py-1 hover:border-accent hover:text-accent",
} as const;

export function ArrowLink({
  href,
  children,
  variant = "primary",
  arrow = true,
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 text-xs font-semibold tracking-[0.18em] uppercase transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
      {arrow ? (
        <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      ) : null}
    </Link>
  );
}
