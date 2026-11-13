import Image from "next/image";
import { machineSpecFields, machines } from "@/data/machines";

export function MachineList() {
  return (
    <div className="space-y-16">
      {machines.map((machine) => (
        <article key={machine.id} className="grid gap-8 border-t border-ink/15 pt-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[280px]">
            <Image
              src={machine.image}
              alt={machine.imageAlt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl tracking-[-0.03em] uppercase">{machine.name}</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{machine.summary}</p>
            <dl className="mt-6">
              {machineSpecFields.map((field) => (
                <div key={field.key} className="grid grid-cols-[1fr_1fr] gap-4 border-t border-ink/10 py-3 text-sm">
                  <dt className="text-muted">{field.label}</dt>
                  <dd className="text-right text-ink">{machine[field.key] || "Bilgi eklenecek"}</dd>
                </div>
              ))}
            </dl>
          </div>
        </article>
      ))}
    </div>
  );
}
