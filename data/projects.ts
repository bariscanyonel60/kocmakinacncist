export type ProductionProject = {
  slug: string;
  title: string;
  process: string;
  material: string;
  sector: string;
  image: string;
  imageAlt: string;
};

/**
 * "Üretimden parçalar" bölümü. Yalnızca gerçekten üretilmiş, paylaşım izni olan parçalar girilir.
 * Liste boşken bölüm sitede gösterilmez.
 * TODO: Replace with verified company data.
 *
 * Örnek kayıt (yayına girmez):
 * {
 *   slug: "paslanmaz-mil",
 *   title: "Paslanmaz Mil",
 *   process: "CNC Torna",
 *   material: "AISI 304",
 *   sector: "Makine Sanayi",
 *   image: "/images/....jpg",
 *   imageAlt: "...",
 * }
 */
export const projects: ProductionProject[] = [];
