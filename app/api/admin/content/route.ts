import { revalidateTag } from "next/cache";
import { defaultSiteContent, getSiteContent, saveSiteContent, type SiteContent } from "@/lib/site-content";
import { cloudinaryUploadConfigured } from "@/lib/cloudinary-upload";

export async function GET() {
  const content = await getSiteContent();
  return Response.json({ ok: true, content });
}

export async function PUT(request: Request) {
  if (!cloudinaryUploadConfigured()) {
    return Response.json(
      {
        ok: false,
        error: "CLOUDINARY_NOT_CONFIGURED",
        message: "CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET ve cloud name gerekli.",
      },
      { status: 501 },
    );
  }

  let body: Partial<SiteContent>;
  try {
    body = (await request.json()) as Partial<SiteContent>;
  } catch {
    return Response.json({ ok: false, error: "INVALID_JSON" }, { status: 400 });
  }

  const content: SiteContent = {
    legalName: typeof body.legalName === "string" ? body.legalName.trim() : defaultSiteContent.legalName,
    about: typeof body.about === "string" ? body.about.trim() : defaultSiteContent.about,
    footerBlurb: typeof body.footerBlurb === "string" ? body.footerBlurb.trim() : defaultSiteContent.footerBlurb,
  };

  if (!content.legalName) {
    return Response.json({ ok: false, error: "VALIDATION", fields: ["legalName"] }, { status: 422 });
  }

  try {
    await saveSiteContent(content);
    revalidateTag("site-content", "max");
    return Response.json({ ok: true, content });
  } catch (error) {
    const message = error instanceof Error ? error.message : "UNKNOWN";
    return Response.json({ ok: false, error: message }, { status: 500 });
  }
}
