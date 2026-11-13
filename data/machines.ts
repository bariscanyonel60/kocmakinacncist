import { images } from "@/data/media";

export type Machine = {
  id: string;
  name: string;
  summary: string;
  image: string;
  imageAlt: string;
  brand: string;
  model: string;
  capacity: string;
  maxDiameter: string;
  maxLength: string;
  axis: string;
  tolerance: string;
};

/**
 * Kapasite alanları firma kartvizitindeki tezgah tanımlarından doldurulur.
 * Marka, model, çap/boy mm ve tolerans doğrulanmadan boş bırakılır; arayüz "Bilgi eklenecek" gösterir.
 * Fotoğraflar yöntemi anlatan temsili görsellerdir.
 */
export const machines: Machine[] = [
  {
    id: "cnc-torna",
    name: "CNC Torna",
    summary: "Dönel metal parçaların tornalanması için kullanılan CNC torna teknolojisi.",
    image: images.cncChuck,
    imageAlt: "CNC torna aynasında bağlanmış metal iş parçası, temsili görsel",
    brand: "",
    model: "",
    capacity: '15" CNC Torna • 8" CNC Torna',
    maxDiameter: "",
    maxLength: "",
    axis: "",
    tolerance: "",
  },
  {
    id: "cnc-isleme",
    name: "CNC İşleme",
    summary: "Prizmatik yüzey, cep ve delik operasyonları için CNC işleme teknolojisi.",
    image: images.hero,
    imageAlt: "Kesici takımın metal parçaya temas ettiği CNC işleme anı, temsili görsel",
    brand: "",
    model: "",
    capacity: "CNC işleme • Freze",
    maxDiameter: "",
    maxLength: "",
    axis: "4 eksen",
    tolerance: "",
  },
  {
    id: "uzun-parca",
    name: "Uzun Parça Tornalama",
    summary: "Kayar otomat tipi tezgahlarda değerlendirilen uzun ve ince dönel parçalar.",
    image: images.swiss,
    imageAlt: "CNC kayar otomat tezgahının iç çalışma alanı, temsili görsel",
    brand: "",
    model: "",
    capacity: "",
    maxDiameter: "",
    maxLength: "",
    axis: "",
    tolerance: "",
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
