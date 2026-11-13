import { extensionOf, validateQuote } from "@/lib/quote";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function singleLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").slice(0, 120);
}

const signatures: Record<string, number[]> = {
  ".pdf": [0x25, 0x50, 0x44, 0x46],
  ".zip": [0x50, 0x4b, 0x03, 0x04],
};

function matchesSignature(extension: string, bytes: Uint8Array) {
  const signature = signatures[extension];
  return !signature || signature.every((byte, index) => bytes[index] === byte);
}

function attachmentName(original: string) {
  const extension = extensionOf(original);
  return `teklif-${crypto.randomUUID().slice(0, 8)}${extension}`;
}

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ ok: false, message: "Talep okunamadı." }, { status: 400 });
  }

  const input = {
    name: String(form.get("name") ?? "").trim(),
    company: String(form.get("company") ?? "").trim(),
    phone: String(form.get("phone") ?? "").trim(),
    email: String(form.get("email") ?? "").trim(),
    requestType: String(form.get("requestType") ?? "").trim(),
    material: String(form.get("material") ?? "").trim(),
    quantity: String(form.get("quantity") ?? "").trim(),
    deadline: String(form.get("deadline") ?? "").trim(),
    message: String(form.get("message") ?? "").trim(),
    files: form.getAll("files").filter((entry): entry is File => entry instanceof File && entry.size > 0),
  };

  const errors = validateQuote(input);
  if (Object.keys(errors).length > 0) {
    return Response.json(
      { ok: false, message: errors.files ?? "Zorunlu alanlar eksik veya hatalı." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.QUOTE_FROM_EMAIL;
  const to = process.env.QUOTE_TO_EMAIL;
  if (!apiKey || !from || !to) {
    return Response.json(
      {
        ok: false,
        code: "NOT_CONFIGURED",
        message: "Gönderim altyapısı henüz yapılandırılmadı. Talep iletilmedi.",
      },
      { status: 501 },
    );
  }

  const rows: [string, string][] = [
    ["Ad soyad", input.name],
    ["Firma", input.company || "-"],
    ["Telefon", input.phone],
    ["E-posta", input.email],
    ["Üretim türü", input.requestType],
    ["Malzeme", input.material || "-"],
    ["Adet", input.quantity || "-"],
    ["Termin", input.deadline || "-"],
  ];

  const attachments: { filename: string; content: string }[] = [];
  const fileNames: string[] = [];
  for (const file of input.files) {
    const bytes = new Uint8Array(await file.arrayBuffer());
    if (!matchesSignature(extensionOf(file.name), bytes)) {
      return Response.json(
        { ok: false, message: `${singleLine(file.name)} dosyasının içeriği uzantısıyla uyuşmuyor.` },
        { status: 400 },
      );
    }
    const filename = attachmentName(file.name);
    fileNames.push(`${filename} (${singleLine(file.name)})`);
    attachments.push({ filename, content: Buffer.from(bytes).toString("base64") });
  }

  const text = [
    ...rows.map(([label, value]) => `${label}: ${value}`),
    `Dosyalar: ${fileNames.length ? fileNames.join(", ") : "-"}`,
    "",
    input.message,
  ].join("\n");

  const html = `
    <h2 style="font-family:sans-serif">Yeni teklif talebi</h2>
    <table style="font-family:sans-serif;border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="padding:4px 12px 4px 0;color:#666">${label}</td><td style="padding:4px 0"><strong>${escapeHtml(value)}</strong></td></tr>`,
        )
        .join("")}
      <tr><td style="padding:4px 12px 4px 0;color:#666">Dosyalar</td><td style="padding:4px 0">${fileNames.length ? escapeHtml(fileNames.join(", ")) : "-"}</td></tr>
    </table>
    <p style="font-family:sans-serif;white-space:pre-wrap">${escapeHtml(input.message)}</p>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: to.split(",").map((address) => address.trim()),
        reply_to: input.email,
        subject: `Teklif talebi: ${singleLine(input.requestType)} - ${singleLine(input.name)}`,
        text,
        html,
        attachments,
      }),
      signal: AbortSignal.timeout(15000),
    });
    if (!response.ok) {
      console.error("Resend gönderimi başarısız", response.status, await response.text());
      return Response.json(
        { ok: false, message: "Talep şu an iletilemedi. Lütfen biraz sonra tekrar deneyin." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Resend isteği başarısız", error);
    return Response.json(
      { ok: false, message: "Talep şu an iletilemedi. Lütfen biraz sonra tekrar deneyin." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
