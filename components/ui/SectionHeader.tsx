import { RevealLines } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  tone = "light",
  action,
  className,
}: {
  index?: string;
  eyebrow: string;
  title: readonly string[];
  description?: string;
  tone?: "light" | "dark";
  action?: React.ReactNode;
  className?: string;
}) {
  const onDark = tone === "dark";

  return (
    <div className={cn("flex flex-col justify-between gap-6 md:flex-row md:items-end", className)}>
      <div>
        <p className="eyebrow text-accent">
          {index ? <span className="mr-2">{index} /</span> : null}
          {eyebrow}
        </p>
        <h2 className="display mt-4 text-[clamp(2.3rem,5vw,4.8rem)]">
          <RevealLines lines={title} />
        </h2>
        {description ? (
          <p className={cn("mt-5 max-w-xl text-base leading-relaxed", onDark ? "text-mist" : "text-ink/70")}>
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
