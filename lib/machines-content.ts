import { cacheLife, cacheTag } from "next/cache";
import { machines as defaultMachines, type Machine } from "@/data/machines";
import {
  adminRawPublicId,
  fetchCloudinaryRawJson,
  uploadCloudinaryRawJson,
} from "@/lib/cloudinary-raw";

const CONTENT_PUBLIC_ID = adminRawPublicId("machines");

function sanitizeMachine(raw: Partial<Machine>, fallback?: Machine): Machine | null {
  const id = typeof raw.id === "string" && raw.id.trim() ? raw.id.trim() : fallback?.id;
  if (!id) return null;

  const pick = (key: keyof Machine) => {
    const value = raw[key];
    if (typeof value === "string") return value.trim();
    return fallback?.[key] ?? "";
  };

  return {
    id,
    name: pick("name") || fallback?.name || id,
    type: pick("type"),
    brand: pick("brand"),
    model: pick("model"),
    capacity: pick("capacity"),
    maxDiameter: pick("maxDiameter"),
    maxLength: pick("maxLength"),
    axis: pick("axis"),
    control: pick("control"),
    rpm: pick("rpm"),
    tolerance: pick("tolerance"),
    summary: pick("summary"),
    image: pick("image") || fallback?.image || "/images/cnc-torna-taret.jpg",
    imageAlt: pick("imageAlt") || fallback?.imageAlt || "",
  };
}

export function defaultMachineItems(): Machine[] {
  return defaultMachines.map((machine) => ({ ...machine }));
}

function normalizeMachines(items: Machine[] | null | undefined): Machine[] {
  if (!Array.isArray(items) || items.length === 0) return defaultMachineItems();

  const result: Machine[] = [];
  for (const raw of items) {
    if (!raw || typeof raw !== "object") continue;
    const fallback = defaultMachines.find((machine) => machine.id === raw.id);
    const machine = sanitizeMachine(raw, fallback);
    if (machine) result.push(machine);
  }
  return result.length > 0 ? result : defaultMachineItems();
}

export async function getMachines(): Promise<Machine[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("machines-content");

  const payload = await fetchCloudinaryRawJson<{ items?: Machine[] } | Machine[]>(CONTENT_PUBLIC_ID);
  if (!payload) return defaultMachineItems();
  const items = Array.isArray(payload) ? payload : payload.items;
  return normalizeMachines(items);
}

export async function saveMachines(items: Machine[]) {
  const normalized = normalizeMachines(items);
  await uploadCloudinaryRawJson(CONTENT_PUBLIC_ID, { items: normalized }, "machines.json");
  return normalized;
}
