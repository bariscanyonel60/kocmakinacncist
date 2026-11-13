import Link from "next/link";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Sayfa yolu" className="border-b border-ink/10 bg-paper">
      <ol className="mx-auto flex max-w-[1440px] flex-wrap gap-x-3 gap-y-2 px-5 py-4 text-xs tracking-[0.14em] text-ink/60 uppercase md:px-10">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-3">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {last ? (
                <span className="text-ink" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-accent">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
