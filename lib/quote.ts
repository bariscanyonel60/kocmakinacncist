export const quoteRequestTypes = [
  "CNC Torna",
  "CNC İşleme",
  "Talaşlı İmalat",
  "Prototip Üretim",
  "Seri Üretim",
  "Özel Parça",
  "Diğer",
] as const;

export type QuoteRequestType = (typeof quoteRequestTypes)[number];

export const allowedDrawingExtensions = [".pdf", ".dxf", ".dwg", ".step", ".stp", ".iges", ".igs"] as const;

export const maxDrawingFiles = 5;
export const maxDrawingBytes = 8 * 1024 * 1024;

export type QuoteField = "name" | "company" | "phone" | "email" | "requestType" | "message" | "files";

export type QuoteErrors = Partial<Record<QuoteField, string>>;

export function extensionOf(filename: string) {
  const index = filename.lastIndexOf(".");
  return index === -1 ? "" : filename.slice(index).toLowerCase();
}

export function validateQuote(input: {
  name: string;
  company: string;
  phone: string;
  email: string;
  requestType: string;
  message: string;
  files: File[];
}): QuoteErrors {
  const errors: QuoteErrors = {};
  if (input.name.trim().length < 3) errors.name = "Ad soyad en az 3 karakter olmalıdır.";
  if (input.phone.trim().length < 10) errors.phone = "Telefon numarası eksik görünüyor.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email.trim())) {
    errors.email = "Geçerli bir e-posta adresi yazın.";
  }
  if (!quoteRequestTypes.includes(input.requestType as QuoteRequestType)) {
    errors.requestType = "Talep türü seçin.";
  }
  if (input.message.trim().length < 20) {
    errors.message = "Mesaj en az 20 karakter olmalıdır. Parça, malzeme ve adedi kısaca yazın.";
  }
  if (input.files.length > maxDrawingFiles) {
    errors.files = `En fazla ${maxDrawingFiles} dosya seçebilirsiniz.`;
  }
  for (const file of input.files) {
    const extension = extensionOf(file.name);
    if (!allowedDrawingExtensions.includes(extension as (typeof allowedDrawingExtensions)[number])) {
      errors.files = "Kabul edilen dosyalar: PDF, DXF, DWG, STEP, STP, IGES.";
      break;
    }
    if (file.size > maxDrawingBytes) {
      errors.files = "Her dosya en fazla 8 MB olabilir.";
      break;
    }
  }
  return errors;
}
