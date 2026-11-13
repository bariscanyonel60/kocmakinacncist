import Link from "next/link";

export function Breadcrumb({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Sayfa yolu">
      <p className="mb-3 text-[10px] tracking-[0.22em] text-metal/80 uppercase">Sayfa yolu</p>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] tracking-[0.16em] text-metal uppercase">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.path}-${item.name}`} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {last ? (
                <span className="text-white" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-white">
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
