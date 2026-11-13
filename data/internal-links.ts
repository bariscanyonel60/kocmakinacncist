export type InternalLink = {
  href: string;
  label: string;
  text: string;
};

/** Sayfalar arası iç linklenme için ortak küme. */
export const primaryInternalLinks: InternalLink[] = [
  {
    href: "/hizmetler/cnc-torna",
    label: "CNC Torna",
    text: "Dönel metal parçalar için CNC torna üretimi",
  },
  {
    href: "/hizmetler/cnc-isleme",
    label: "CNC İşleme",
    text: "Cep, delik ve prizmatik yüzeyler için CNC işleme",
  },
  {
    href: "/hizmetler/talasli-imalat",
    label: "Talaşlı İmalat",
    text: "Torna ve işlemeyi birleştiren talaşlı imalat planı",
  },
  {
    href: "/makine-parkuru",
    label: "Makine Parkuru",
    text: "15\" ve 8\" CNC torna ile 4 eksen işleme kapasitesi",
  },
  {
    href: "/istanbul-cnc-torna",
    label: "CNC Torna İstanbul",
    text: "İstanbul CNC torna ve talaşlı imalat talepleri",
  },
  {
    href: "/iletisim",
    label: "İletişim / Teklif",
    text: "Teknik çizimle teklif talebi oluşturun",
  },
];
