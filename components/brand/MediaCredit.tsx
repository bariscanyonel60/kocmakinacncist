import { cn } from "@/lib/cn";

const MEDIA_URL = "https://bariscanyonel.com";

export function MediaCredit({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <a
      href={MEDIA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-baseline gap-1.5 font-semibold tracking-[0.04em] transition-opacity hover:opacity-90",
        compact ? "text-sm" : "text-base sm:text-lg",
        className,
      )}
      style={{
        color: "#ff1a2e",
        textShadow: "0 0 8px rgba(255, 26, 46, 0.75), 0 0 18px rgba(255, 26, 46, 0.45)",
      }}
    >
      <span className="font-medium tracking-[0.18em] uppercase opacity-90">Media</span>
      <span aria-hidden="true" className="opacity-80">
        :
      </span>
      <span className="font-bold tracking-[0.12em] uppercase">BCY DİJİTAL</span>
    </a>
  );
}
