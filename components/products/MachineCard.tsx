import Image from "next/image";
import Link from "next/link";
import { machineSpecFields, machineSummaryFields, specText, type Machine } from "@/data/machines";
import { cn } from "@/lib/cn";

export function MachineCard({ machine, compact = false }: { machine: Machine; compact?: boolean }) {
  const fields = compact ? machineSummaryFields : machineSpecFields;
  const filledSpecs = fields.filter((field) => machine[field.key].trim().length > 0);

  return (
    <article id={compact ? undefined : machine.id} className="group flex h-full scroll-mt-28 flex-col border border-ink/10 bg-white">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={machine.image}
          alt={machine.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          quality={60}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] tracking-[0.2em] text-accent uppercase">{machine.type}</p>
        {compact ? (
          <p className="mt-2 font-display text-2xl tracking-[-0.03em] uppercase">{machine.name}</p>
        ) : (
          <h3 className="mt-2 font-display text-2xl tracking-[-0.03em] uppercase">{machine.name}</h3>
        )}
        {machine.summary ? (
          <p className="mt-3 text-sm leading-relaxed text-ink/70">{machine.summary}</p>
        ) : null}
        {filledSpecs.length > 0 ? (
          <dl className="mt-5">
            {fields.map((field) => {
              const raw = machine[field.key];
              if (!raw.trim()) return null;
              const value = specText(raw);
              return (
                <div key={field.key} className="grid grid-cols-2 gap-3 border-t border-ink/10 py-2.5 text-sm">
                  <dt className="text-ink/55">{field.label}</dt>
                  <dd className={cn(value === "Bilgi eklenecek" ? "text-ink/40" : "text-ink")}>{value}</dd>
                </div>
              );
            })}
          </dl>
        ) : (
          <p className="mt-5 border-t border-ink/10 pt-4 text-sm text-ink/40">Teknik değer bilgisi eklenecek</p>
        )}
        {compact ? (
          <Link
            href={`/makine-parkuru#${machine.id}`}
            className="mt-auto inline-flex items-center gap-2 border-t border-ink/10 pt-4 text-xs font-semibold tracking-[0.18em] uppercase hover:text-accent"
          >
            Teknik detay <span aria-hidden="true">→</span>
          </Link>
        ) : null}
      </div>
    </article>
  );
}
