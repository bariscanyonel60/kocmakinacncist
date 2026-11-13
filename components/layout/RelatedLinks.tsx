import Link from "next/link";

export function RelatedLinks({
  title = "İlgili sayfalar",
  links,
}: {
  title?: string;
  links: { href: string; label: string }[];
}) {
  return (
    <nav aria-label={title} className="border-t border-ink/10">
      <p className="eyebrow text-accent">{title}</p>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="group flex items-center justify-between gap-4 border-b border-ink/10 py-3 text-sm hover:text-accent">
              <span>{link.label}</span>
              <span aria-hidden="true" className="tracking-[0.16em] transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
