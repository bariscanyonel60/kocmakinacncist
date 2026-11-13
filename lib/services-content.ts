import { cacheLife, cacheTag } from "next/cache";
import { services as defaultServices, type Service } from "@/data/services";
import {
  adminRawPublicId,
  fetchCloudinaryRawJson,
  uploadCloudinaryRawJson,
} from "@/lib/cloudinary-raw";

export type ServiceAdminItem = {
  slug: string;
  number: string;
  title: string;
  short: string;
  image: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  published: boolean;
  sortOrder: number;
};

const CONTENT_PUBLIC_ID = adminRawPublicId("services");

function toAdminItem(service: Service, index: number): ServiceAdminItem {
  return {
    slug: service.slug,
    number: service.number,
    title: service.title,
    short: service.short,
    image: service.image,
    imageAlt: service.imageAlt,
    seoTitle: service.seoTitle,
    seoDescription: service.seoDescription,
    h1: service.h1,
    intro: service.intro,
    published: true,
    sortOrder: index,
  };
}

export function defaultServiceAdminItems(): ServiceAdminItem[] {
  return defaultServices.map((service, index) => toAdminItem(service, index));
}

function normalizeAdminItems(items: ServiceAdminItem[] | null | undefined): ServiceAdminItem[] {
  const defaults = defaultServiceAdminItems();
  const bySlug = new Map(defaults.map((item) => [item.slug, item]));

  if (Array.isArray(items)) {
    for (const raw of items) {
      if (!raw || typeof raw.slug !== "string") continue;
      const base = bySlug.get(raw.slug);
      if (!base) continue;
      bySlug.set(raw.slug, {
        slug: raw.slug,
        number: typeof raw.number === "string" && raw.number.trim() ? raw.number.trim() : base.number,
        title: typeof raw.title === "string" && raw.title.trim() ? raw.title.trim() : base.title,
        short: typeof raw.short === "string" ? raw.short.trim() : base.short,
        image: typeof raw.image === "string" && raw.image.trim() ? raw.image.trim() : base.image,
        imageAlt: typeof raw.imageAlt === "string" ? raw.imageAlt.trim() : base.imageAlt,
        seoTitle: typeof raw.seoTitle === "string" && raw.seoTitle.trim() ? raw.seoTitle.trim() : base.seoTitle,
        seoDescription:
          typeof raw.seoDescription === "string" && raw.seoDescription.trim()
            ? raw.seoDescription.trim()
            : base.seoDescription,
        h1: typeof raw.h1 === "string" && raw.h1.trim() ? raw.h1.trim() : base.h1,
        intro: typeof raw.intro === "string" ? raw.intro.trim() : base.intro,
        published: typeof raw.published === "boolean" ? raw.published : base.published,
        sortOrder: typeof raw.sortOrder === "number" && Number.isFinite(raw.sortOrder) ? raw.sortOrder : base.sortOrder,
      });
    }
  }

  return Array.from(bySlug.values()).sort((a, b) => a.sortOrder - b.sortOrder || a.slug.localeCompare(b.slug));
}

function mergeService(base: Service, overlay: ServiceAdminItem): Service {
  return {
    ...base,
    number: overlay.number,
    title: overlay.title,
    short: overlay.short,
    image: overlay.image,
    imageAlt: overlay.imageAlt,
    seoTitle: overlay.seoTitle,
    seoDescription: overlay.seoDescription,
    h1: overlay.h1,
    intro: overlay.intro,
  };
}

async function loadAdminItems(): Promise<ServiceAdminItem[]> {
  const payload = await fetchCloudinaryRawJson<{ items?: ServiceAdminItem[] } | ServiceAdminItem[]>(CONTENT_PUBLIC_ID);
  if (!payload) return defaultServiceAdminItems();
  const items = Array.isArray(payload) ? payload : payload.items;
  return normalizeAdminItems(items);
}

export async function getServiceAdminItems(): Promise<ServiceAdminItem[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("services-content");
  return loadAdminItems();
}

export async function getServices(): Promise<Service[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("services-content");

  const overlays = await loadAdminItems();
  const result: Service[] = [];
  for (const overlay of overlays.filter((item) => item.published)) {
    const base = defaultServices.find((service) => service.slug === overlay.slug);
    if (!base) continue;
    result.push(mergeService(base, overlay));
  }
  return result;
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  const list = await getServices();
  return list.find((service) => service.slug === slug);
}

export async function relatedServicesContent(slugs: string[]): Promise<Service[]> {
  const list = await getServices();
  return slugs
    .map((slug) => list.find((service) => service.slug === slug))
    .filter((service): service is Service => Boolean(service));
}

export async function saveServiceAdminItems(items: ServiceAdminItem[]) {
  const normalized = normalizeAdminItems(items);
  await uploadCloudinaryRawJson(CONTENT_PUBLIC_ID, { items: normalized }, "services.json");
  return normalized;
}
