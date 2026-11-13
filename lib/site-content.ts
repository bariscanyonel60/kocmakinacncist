import { createHash } from "node:crypto";
import { cacheLife, cacheTag } from "next/cache";
import { company } from "@/data/company";

export type SiteContent = {
  legalName: string;
  about: string;
  footerBlurb: string;
};

export const defaultSiteContent: SiteContent = {
  legalName: company.legalName,
  about:
    "İstanbul Başakşehir İkitelli'de CNC torna, CNC işleme ve hassas talaşlı imalat. Teknik çizimden parçaya.",
  footerBlurb:
    "İstanbul Başakşehir İkitelli'de CNC torna, CNC işleme ve hassas talaşlı imalat. Teknik çizimden parçaya.",
};

const CONTENT_PUBLIC_ID = `${process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER || "koc-makina"}/_admin/site-content`;

function cloudinaryAuth() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  if (!cloudName || !apiKey || !apiSecret) return null;
  return { cloudName, apiKey, apiSecret };
}

export async function getSiteContent(): Promise<SiteContent> {
  "use cache";
  cacheLife("hours");
  cacheTag("site-content");

  const config = cloudinaryAuth();
  if (!config) return defaultSiteContent;

  try {
    const url = `https://res.cloudinary.com/${config.cloudName}/raw/upload/${CONTENT_PUBLIC_ID}.json`;
    const response = await fetch(url, { signal: AbortSignal.timeout(5000) });
    if (!response.ok) return defaultSiteContent;
    const payload = (await response.json()) as Partial<SiteContent>;
    return {
      legalName: payload.legalName?.trim() || defaultSiteContent.legalName,
      about: payload.about?.trim() || defaultSiteContent.about,
      footerBlurb: payload.footerBlurb?.trim() || defaultSiteContent.footerBlurb,
    };
  } catch {
    return defaultSiteContent;
  }
}

export async function saveSiteContent(content: SiteContent) {
  const config = cloudinaryAuth();
  if (!config) {
    throw Object.assign(new Error("CLOUDINARY_NOT_CONFIGURED"), { status: 501, error: "CLOUDINARY_NOT_CONFIGURED" });
  }

  const bodyJson = JSON.stringify(content, null, 2);
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const params: Record<string, string> = {
    overwrite: "true",
    public_id: CONTENT_PUBLIC_ID,
    timestamp,
  };
  const signature = createHash("sha1")
    .update(
      Object.keys(params)
        .sort()
        .map((name) => `${name}=${params[name]}`)
        .join("&") + config.apiSecret,
    )
    .digest("hex");

  const form = new FormData();
  form.set("file", new Blob([bodyJson], { type: "application/json" }), "site-content.json");
  for (const [field, value] of Object.entries(params)) form.set(field, value);
  form.set("api_key", config.apiKey);
  form.set("signature", signature);

  const response = await fetch(`https://api.cloudinary.com/v1_1/${config.cloudName}/raw/upload`, {
    method: "POST",
    body: form,
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) {
    const payload = (await response.json().catch(() => ({}))) as { error?: { message?: string } };
    throw Object.assign(new Error(payload.error?.message ?? "SITE_CONTENT_SAVE_FAILED"), {
      status: response.status,
      error: "SITE_CONTENT_SAVE_FAILED",
    });
  }
}
