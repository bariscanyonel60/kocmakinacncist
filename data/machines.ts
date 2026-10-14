export type Machine = {
  id: string;
  name: string;
  brand: string;
  model: string;
  capacity: string;
  maxDiameter: string;
  maxLength: string;
  axis: string;
  tolerance: string;
  image: string;
  imageAlt: string;
};

/**
 * Marka, model ve kapasite alanları bilinçli olarak boştur.
 * Gerçek değerler girilene kadar arayüz "Bilgi eklenecek" gösterir.
 */
export const machines: Machine[] = [
  {
    id: "cnc-torna",
    name: "CNC Torna",
    brand: "",
    model: "",
    capacity: "",
    maxDiameter: "",
    maxLength: "",
    axis: "",
    tolerance: "",
    image: "/images/cnc-torna-taret.jpg",
    imageAlt: "CNC torna taretinde sıralanmış kesici takımlar ve ayna",
  },
  {
    id: "cnc-isleme",
    name: "CNC İşleme",
    brand: "",
    model: "",
    capacity: "",
    maxDiameter: "",
    maxLength: "",
    axis: "",
    tolerance: "",
    image: "/images/cnc-freze-talas.jpg",
    imageAlt: "CNC frezede metal parça işlenirken oluşan talaş ve kesici takım",
  },
  {
    id: "cnc-torna-2",
    name: "CNC Torna",
    brand: "",
    model: "",
    capacity: "",
    maxDiameter: "",
    maxLength: "",
    axis: "",
    tolerance: "",
    image: "/images/cnc-taret-talas.jpg",
    imageAlt: "Soğutma sıvısı altında çalışan CNC torna tareti",
  },
];

export const machineSpecFields = [
  { key: "brand", label: "Marka" },
  { key: "model", label: "Model" },
  { key: "capacity", label: "İşleme kapasitesi" },
  { key: "maxDiameter", label: "Maksimum çap" },
  { key: "maxLength", label: "Maksimum uzunluk" },
  { key: "axis", label: "Eksen" },
  { key: "tolerance", label: "Hassasiyet" },
] as const;

export function specText(value: string) {
  return value.trim() ? value : "Bilgi eklenecek";
}
