import { revalidateTag } from "next/cache";
import type { Machine } from "@/data/machines";
import { cloudinaryUploadConfigured } from "@/lib/cloudinary-upload";
import { getMachines, saveMachines } from "@/lib/machines-content";

export async function GET() {
  const items = await getMachines();
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

  let body: { items?: Machine[] };
  try {
    body = (await request.json()) as { items?: Machine[] };
  } catch {
    return Response.json({ ok: false, error: "INVALID_JSON" }, { status: 400 });
  }

  if (!Array.isArray(body.items) || body.items.length === 0) {
    return Response.json(
      { ok: false, error: "VALIDATION", fields: ["items"], message: "En az bir makine gerekli." },
      { status: 422 },
    );
  }

  for (const item of body.items) {
    if (!item?.id?.trim() || !item?.name?.trim()) {
      return Response.json(
        { ok: false, error: "VALIDATION", fields: ["id", "name"], message: "Kimlik ve ad zorunlu." },
        { status: 422 },
      );
    }
  }

  try {
    const items = await saveMachines(body.items);
    revalidateTag("machines-content", "max");
    return Response.json({ ok: true, items });
  } catch (error) {
    const message = error instanceof Error ? error.message : "UNKNOWN";
    return Response.json({ ok: false, error: message }, { status: 500 });
  }
}
