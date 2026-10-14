import Link from "next/link";
import { company, phoneHref } from "@/data/company";

export function StickyCall() {
  const tel = phoneHref(company.phone);

  return (
    <>
      <div className="h-14 md:hidden" aria-hidden="true" />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink text-white md:hidden">
        <div className={tel ? "grid grid-cols-2" : "grid grid-cols-1"}>
          {tel ? (
            <a href={tel} className="inline-flex min-h-14 items-center justify-center px-4 text-xs font-semibold tracking-[0.16em] uppercase">
              Ara · {company.phone}
            </a>
          ) : null}
          <Link
            href="/iletisim#teklif"
            className="inline-flex min-h-14 items-center justify-center bg-accent px-4 text-xs font-semibold tracking-[0.16em] uppercase"
          >
            Teklif Al
          </Link>
        </div>
      </div>
      {tel ? (
        <a
          href={tel}
          className="fixed right-6 bottom-6 z-40 hidden min-h-12 items-center bg-accent px-5 py-3 text-xs font-semibold tracking-[0.16em] text-white uppercase md:inline-flex"
        >
          Ara · {company.phone}
        </a>
      ) : null}
    </>
  );
}
