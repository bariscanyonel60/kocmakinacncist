export type Machine = {
  id: string;
  name: string;
  type: string;
  brand: string;
  model: string;
  capacity: string;
  maxDiameter: string;
  maxLength: string;
  axis: string;
  control: string;
  rpm: string;
  tolerance: string;
  summary: string;
  image: string;
  imageAlt: string;
};

/**
 * Kartvizit park özeti: 15" / 8" CNC torna, CNC işleme, 4 eksen CNC işleme, torna, freze.
 * Marka / model / rpm doğrulanmadığı için boş bırakıldı (AGENTS.md).
 */
export const machines: Machine[] = [
  {
    id: "cnc-torna",
    name: "CNC Torna",
    type: "CNC torna tezgâhı",
    brand: "",
    model: "",
    capacity: '15" ve 8" CNC torna',
    maxDiameter: '15" / 8"',
    maxLength: "",
    axis: "",
    control: "",
    rpm: "",
    tolerance: "",
    summary: "Dönel metal parçaların tornalanması için kullanılan CNC torna teknolojisi.",
    image: "/images/cnc-torna-taret.jpg",
    imageAlt: "CNC torna taretinde sıralanmış kesici takımlar ve ayna",
  },
  {
    id: "cnc-isleme",
    name: "CNC İşleme",
    type: "CNC freze / işleme merkezi",
    brand: "",
    model: "",
    capacity: "CNC işleme",
    maxDiameter: "",
    maxLength: "",
    axis: "4 eksen",
    control: "",
    rpm: "",
    tolerance: "",
    summary: "Prizmatik yüzey, cep ve delik operasyonları için CNC işleme teknolojisi.",
    image: "/images/cnc-freze-talas.jpg",
    imageAlt: "CNC frezede metal parça işlenirken oluşan talaş ve kesici takım",
  },
  {
    id: "uzun-parca-tornalama",
    name: "Uzun Parça Tornalama",
    type: "Torna kapasitesi",
    brand: "",
    model: "",
    capacity: "",
    maxDiameter: "",
    maxLength: "",
    axis: "",
    control: "",
    rpm: "",
    tolerance: "",
    summary: "Kayar otomat tipi tezgâhlarda değerlendirilen uzun ve ince dönel parçalar.",
    image: "/images/cnc-torna-mil.jpg",
    imageAlt: "CNC tornada punta destekli uzun çelik milin işlenmesi",
  },
];

export const machineSpecFields = [
  { key: "brand", label: "Marka" },
  { key: "model", label: "Model" },
  { key: "control", label: "Kontrol ünitesi" },
  { key: "capacity", label: "İşleme kapasitesi" },
  { key: "maxDiameter", label: "Maksimum çap" },
  { key: "maxLength", label: "Maksimum uzunluk" },
  { key: "axis", label: "Eksen" },
  { key: "rpm", label: "Devir (rpm)" },
  { key: "tolerance", label: "Hassasiyet" },
] as const;

export const machineSummaryFields = [
  { key: "control", label: "Kontrol" },
  { key: "axis", label: "Eksen" },
  { key: "capacity", label: "Maks. işleme" },
  { key: "rpm", label: "Devir" },
] as const;

export function specText(value: string) {
  return value.trim() ? value : "Bilgi eklenecek";
}
