import Link from "next/link";
import { primaryInternalLinks, type InternalLink } from "@/data/internal-links";

export function InternalLinks({
  title = "İlgili sayfalar",
  links = primaryInternalLinks,
  invert = false,
}: {
  title?: string;
  links?: InternalLink[];
  invert?: boolean;
}) {
  return (
    <section aria-labelledby="ic-link-baslik" className={invert ? "text-white" : "text-ink"}>
      <h2
        id="ic-link-baslik"
        className={`font-display text-2xl tracking-[-0.03em] uppercase md:text-3xl ${
          invert ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <ul className={`mt-6 divide-y ${invert ? "divide-white/15 border-y border-white/15" : "divide-ink/10 border-y border-ink/10"}`}>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`flex flex-col gap-1 py-4 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 ${
                invert ? "hover:text-white" : "hover:text-accent"
              }`}
            >
              <span className="font-display text-lg tracking-[-0.02em] uppercase">{link.label}</span>
              <span className={`text-sm ${invert ? "text-metal" : "text-muted"}`}>{link.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
