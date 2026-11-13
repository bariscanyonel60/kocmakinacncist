import { notFound } from "next/navigation";
import { ServiceView } from "@/components/services/ServiceView";
import { getServiceBySlug, getServices } from "@/lib/services-content";
import { pageMeta } from "@/lib/seo";

export async function generateStaticParams() {
  const list = await getServices();
  return list.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};
  return pageMeta({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/hizmetler/${service.slug}`,
    image: service.image,
    imageAlt: service.imageAlt,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();
  return <ServiceView service={service} />;
}
