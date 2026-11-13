export const quoteRequestTypes = ["CNC Torna", "CNC Freze", "Prototip", "Seri Üretim", "Diğer"] as const;

export type QuoteRequestType = (typeof quoteRequestTypes)[number];

const genericMimes = ["", "application/octet-stream"];

/** Uzantı başına kabul edilen MIME türleri. CAD dosyalarında tarayıcı çoğu zaman boş ya da octet-stream gönderir. */
export const drawingMimeTypes = {
  ".pdf": ["application/pdf"],
  ".zip": ["application/zip", "application/x-zip-compressed", "multipart/x-zip"],
  ".dxf": ["image/vnd.dxf", "image/x-dxf", "application/dxf", "application/x-dxf"],
  ".dwg": ["image/vnd.dwg", "image/x-dwg", "application/acad", "application/dwg", "application/x-dwg"],
  ".step": ["application/step", "model/step", "application/x-step"],
  ".stp": ["application/step", "model/step", "application/x-step"],
  ".iges": ["model/iges", "application/iges"],
  ".igs": ["model/iges", "application/iges"],
} as const;

export type DrawingExtension = keyof typeof drawingMimeTypes;

export const allowedDrawingExtensions = Object.keys(drawingMimeTypes) as DrawingExtension[];

export const maxDrawingFiles = 5;
/** Vercel istek gövdesi sınırı (~4,5 MB) nedeniyle toplam boyut. */
export const maxDrawingBytes = 4 * 1024 * 1024;

export type QuoteInput = {
  name: string;
  company: string;
  phone: string;
  email: string;
  requestType: string;
  material: string;
  quantity: string;
  deadline: string;
  message: string;
  files: File[];
};

export type QuoteField = keyof QuoteInput;

export type QuoteErrors = Partial<Record<QuoteField, string>>;

export function extensionOf(filename: string) {
  const index = filename.lastIndexOf(".");
  return index === -1 ? "" : filename.slice(index).toLowerCase();
}

function isDrawingExtension(extension: string): extension is DrawingExtension {
  return extension in drawingMimeTypes;
}

export function fileError(file: File): string | null {
  const extension = extensionOf(file.name);
  if (!isDrawingExtension(extension)) return "Kabul edilen dosyalar: PDF, STEP, STP, DXF, DWG, IGES ve ZIP.";
  const mime = file.type.toLowerCase();
  const allowed: readonly string[] = drawingMimeTypes[extension];
  if (!genericMimes.includes(mime) && !allowed.includes(mime)) {
    return `${file.name} dosyasının türü uzantısıyla uyuşmuyor.`;
  }
  if (file.size === 0) return `${file.name} boş görünüyor.`;
  return null;
}

export function validateQuote(input: QuoteInput): QuoteErrors {
  const errors: QuoteErrors = {};
  if (input.name.trim().length < 3) errors.name = "Ad soyad en az 3 karakter olmalıdır.";
  if (input.phone.replace(/\D/g, "").length < 10) errors.phone = "Telefon numarası eksik görünüyor.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email.trim())) {
    errors.email = "Geçerli bir e-posta adresi yazın.";
  }
  if (!quoteRequestTypes.includes(input.requestType as QuoteRequestType)) {
    errors.requestType = "Üretim türü seçin.";
  }
  if (input.material.length > 120) errors.material = "Malzeme alanı en fazla 120 karakter olabilir.";
  if (input.quantity.length > 60) errors.quantity = "Adet alanı en fazla 60 karakter olabilir.";
  if (input.deadline.length > 60) errors.deadline = "Termin alanı en fazla 60 karakter olabilir.";
  if (input.message.trim().length < 20) {
    errors.message = "Açıklama en az 20 karakter olmalıdır. Parçayı, toleransı ve yüzey isteğini kısaca yazın.";
  } else if (input.message.length > 5000) {
    errors.message = "Açıklama en fazla 5000 karakter olabilir.";
  }
  if (input.files.length > maxDrawingFiles) {
    errors.files = `En fazla ${maxDrawingFiles} dosya ekleyebilirsiniz.`;
  }
  if (!errors.files) {
    for (const file of input.files) {
      const problem = fileError(file);
      if (problem) {
        errors.files = problem;
        break;
      }
    }
  }
  if (!errors.files && input.files.reduce((total, file) => total + file.size, 0) > maxDrawingBytes) {
    errors.files = "Dosyaların toplam boyutu en fazla 4 MB olabilir. Büyük dosyaları ZIP ile küçültün.";
  }
  return errors;
}
