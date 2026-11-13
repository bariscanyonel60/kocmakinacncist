import { company } from "@/data/company";
import type { FaqItem } from "@/data/faq";
import { images } from "@/data/media";
import type { CustomerReview } from "@/data/reviews";
import { getSiteUrl } from "@/lib/seo";

type Crumb = { name: string; path: string };

function organizationBase() {
  const url = getSiteUrl();
  const data: Record<string, unknown> = {
    "@type": "Organization",
    name: company.name,
    url,
    logo: new URL(images.logo, url).toString(),
    areaServed: {
      "@type": "City",
      name: company.city,
    },
  };

  if (company.email) data.email = company.email;
  if (company.phone) data.telephone = company.phone;
  if (company.address) {
    data.address = {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: company.city,
      addressCountry: "TR",
    };
  }

  const sameAs = [company.instagram, company.linkedin].filter(Boolean);
  if (sameAs.length > 0) data.sameAs = sameAs;

  return data;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    ...organizationBase(),
  };
}

export function localBusinessSchema() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    url,
    logo: new URL(images.logo, url).toString(),
    image: new URL(images.logo, url).toString(),
    description:
      "İstanbul’da CNC torna, CNC işleme ve hassas talaşlı imalat alanında parça üretimi.",
    address: {
      "@type": "PostalAddress",
      addressLocality: company.city,
      addressCountry: "TR",
      ...(company.address ? { streetAddress: company.address } : {}),
    },
    areaServed: {
      "@type": "City",
      name: company.city,
    },
    ...(company.phone ? { telephone: company.phone } : {}),
    ...(company.email ? { email: company.email } : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.name,
    url: getSiteUrl(),
    inLanguage: "tr-TR",
    publisher: organizationBase(),
  };
}

export function breadcrumbSchema(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, getSiteUrl()).toString(),
    })),
  };
}

export function serviceSchema(input: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: new URL(input.path, getSiteUrl()).toString(),
    areaServed: {
      "@type": "City",
      name: company.city,
    },
    provider: organizationBase(),
  };
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** Gerçek yorum yoksa null döner — sahte AggregateRating üretilmez. */
export function reviewsSchema(items: CustomerReview[]) {
  if (items.length === 0) return null;

  const ratingValue =
    Math.round((items.reduce((sum, item) => sum + item.rating, 0) / items.length) * 10) / 10;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    url: getSiteUrl(),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount: items.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: items.map((item) => ({
      "@type": "Review",
      author: { "@type": "Person", name: item.author },
      datePublished: item.datePublished,
      reviewBody: item.body,
      reviewRating: {
        "@type": "Rating",
        ratingValue: item.rating,
        bestRating: 5,
        worstRating: 1,
      },
    })),
  };
}
