import { revalidateTag } from "next/cache";
import { cloudinaryUploadConfigured } from "@/lib/cloudinary-upload";
import {
  defaultServiceAdminItems,
  getServiceAdminItems,
  saveServiceAdminItems,
  type ServiceAdminItem,
} from "@/lib/services-content";

export async function GET() {
  const items = await getServiceAdminItems();
  return Response.json({ ok: true, items });
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

  let body: { items?: ServiceAdminItem[] };
  try {
    body = (await request.json()) as { items?: ServiceAdminItem[] };
  } catch {
    return Response.json({ ok: false, error: "INVALID_JSON" }, { status: 400 });
  }

  if (!Array.isArray(body.items)) {
    return Response.json({ ok: false, error: "VALIDATION", fields: ["items"] }, { status: 422 });
  }

  const allowed = new Set(defaultServiceAdminItems().map((item) => item.slug));
  for (const item of body.items) {
    if (!item?.slug || !allowed.has(item.slug)) {
      return Response.json({ ok: false, error: "UNKNOWN_SLUG", message: `Bilinmeyen hizmet: ${item?.slug}` }, { status: 422 });
    }
    if (!item.title?.trim()) {
      return Response.json({ ok: false, error: "VALIDATION", fields: ["title"], message: "Başlık zorunlu." }, { status: 422 });
    }
  }

  try {
    const items = await saveServiceAdminItems(body.items);
    revalidateTag("services-content", "max");
    return Response.json({ ok: true, items });
  } catch (error) {
    const message = error instanceof Error ? error.message : "UNKNOWN";
    return Response.json({ ok: false, error: message }, { status: 500 });
  }
}
