import { quoteRequestTypes, type QuoteRequestType } from "@/lib/quote";

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ ok: false, message: "Talep okunamadı." }, { status: 400 });
  }
  const name = String(form.get("name") ?? "").trim();
  const phone = String(form.get("phone") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const requestType = String(form.get("requestType") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();

  const missing =
    name.length < 3 ||
    phone.length < 10 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    message.length < 20 ||
    !quoteRequestTypes.includes(requestType as QuoteRequestType);

  if (missing) {
    return Response.json({ ok: false, message: "Zorunlu alanlar eksik veya hatalı." }, { status: 400 });
  }

  // TODO: Teknik dosyaları (PDF, DXF, DWG, STEP, STP, IGES) güvenli depoya yaz.
  // TODO: Talep kaydını oluştur ve ekibe bildir. Başarılı yanıtı ancak bu adımlardan sonra dön.
  return Response.json(
    {
      ok: false,
      code: "NOT_IMPLEMENTED",
      message: "Form doğrulandı ancak gönderim altyapısı henüz bağlı değil. Talep kaydedilmedi.",
    },
    { status: 501 },
  );
}
