import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const onDark = tone === "light";

  return (
    <Link href="/" className={cn("flex items-center gap-3", onDark ? "text-white" : "text-ink")}>
      <span
        className={cn(
          "relative grid h-10 w-10 shrink-0 place-items-center border",
          onDark ? "border-white/25" : "border-ink/15",
        )}
      >
        <span className="absolute left-0 top-0 h-2.5 w-2.5 border-l-2 border-t-2 border-accent" />
        <span className="font-display text-sm font-semibold tracking-tight">K</span>
      </span>
      <span className="leading-none">
        <span className="block font-display text-[15px] font-semibold tracking-[0.16em]">KOC MAKİNA</span>
        <span className={cn("mt-1 block text-[10px] tracking-[0.26em]", onDark ? "text-metal" : "text-ink/55")}>
          CNC · İSTANBUL
        </span>
      </span>
    </Link>
  );
}
