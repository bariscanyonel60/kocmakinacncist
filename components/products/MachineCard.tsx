import Image from "next/image";
import { machineSpecFields, specText, type Machine } from "@/data/machines";

export function MachineCard({ machine }: { machine: Machine }) {
  return (
    <article className="flex h-full flex-col border border-ink/10 bg-white">
      <div className="relative aspect-[16/10]">
        <Image src={machine.image} alt={machine.imageAlt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-2xl tracking-[-0.03em] uppercase">{machine.name}</h3>
        <dl className="mt-5">
          {machineSpecFields.map((field) => (
            <div key={field.key} className="grid grid-cols-2 gap-3 border-t border-ink/10 py-2.5 text-sm">
              <dt className="text-ink/55">{field.label}</dt>
              <dd className={specText(machine[field.key]) === "Bilgi eklenecek" ? "text-ink/40" : "text-ink"}>
                {specText(machine[field.key])}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
