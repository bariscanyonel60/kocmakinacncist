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
  image: string;
  imageAlt: string;
};

/**
 * Marka, model ve kapasite alanları bilinçli olarak boştur.
 * Gerçek değerler girilene kadar arayüz "Bilgi eklenecek" gösterir.
 * TODO: Replace with verified company data.
 */
export const machines: Machine[] = [
  {
    id: "cnc-torna",
    name: "CNC Torna",
    type: "CNC torna tezgâhı",
    brand: "",
    model: "",
    capacity: "",
    maxDiameter: "",
    maxLength: "",
    axis: "",
    control: "",
    rpm: "",
    tolerance: "",
    image: "/images/cnc-torna-taret.jpg",
    imageAlt: "CNC torna taretinde sıralanmış kesici takımlar ve ayna",
  },
  {
    id: "cnc-isleme",
    name: "CNC Freze",
    type: "CNC freze / işleme merkezi",
    brand: "",
    model: "",
    capacity: "",
    maxDiameter: "",
    maxLength: "",
    axis: "",
    control: "",
    rpm: "",
    tolerance: "",
    image: "/images/cnc-freze-talas.jpg",
    imageAlt: "CNC frezede metal parça işlenirken oluşan talaş ve kesici takım",
  },
  {
    id: "cnc-torna-2",
    name: "CNC Torna",
    type: "CNC torna tezgâhı",
    brand: "",
    model: "",
    capacity: "",
    maxDiameter: "",
    maxLength: "",
    axis: "",
    control: "",
    rpm: "",
    tolerance: "",
    image: "/images/cnc-taret-talas.jpg",
    imageAlt: "Soğutma sıvısı altında çalışan CNC torna tareti",
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
