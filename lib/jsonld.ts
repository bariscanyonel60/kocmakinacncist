import { company, filled } from "@/data/company";
import type { Faq } from "@/data/faq";
import { cloudinaryImageUrl } from "@/lib/cloudinary";

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function organizationJsonLd() {
  const sameAs = [company.instagram, company.linkedin].filter(filled);
  const data: Record<string, unknown> = {
    "@type": ["Organization", "LocalBusiness"],
    name: company.name,
    url: company.siteUrl,
    image: new URL(
      cloudinaryImageUrl("/images/cnc-torna-kesim.jpg", { width: 1200 }),
      company.siteUrl,
    ).toString(),
    description:
      "İstanbul'da CNC torna, CNC işleme ve talaşlı imalat yapan üretim firması.",
    address: {
      "@type": "PostalAddress",
      addressLocality: company.city,
      addressCountry: "TR",
    },
    areaServed: {
      "@type": "City",
      name: company.city,
    },
  };

  if (filled(company.address)) {
    data.address = {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: company.city,
      addressCountry: "TR",
    };
  }
  if (filled(company.phone)) data.telephone = company.phone;
  if (filled(company.email)) data.email = company.email;
  if (sameAs.length) data.sameAs = sameAs;

  return data;
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    name: company.name,
    url: company.siteUrl,
    inLanguage: "tr-TR",
    publisher: { "@type": "Organization", name: company.name },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, company.siteUrl).toString(),
    })),
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function serviceJsonLd(input: { name: string; description: string; path: string }) {
  return {
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: new URL(input.path, company.siteUrl).toString(),
    serviceType: input.name,
    areaServed: company.city,
    provider: { "@type": "Organization", name: company.name, url: company.siteUrl },
  };
}

export function reviewsJsonLd(
  reviews: { author: string; body: string; date?: string }[],
) {
  if (reviews.length === 0) return null;
  return {
    "@type": "Organization",
    name: company.name,
    url: company.siteUrl,
    review: reviews.map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.author },
      reviewBody: review.body,
      ...(review.date ? { datePublished: review.date } : {}),
    })),
  };
}

export function graphJsonLd(nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
