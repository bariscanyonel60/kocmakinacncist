import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yönetim | Koç Makina",
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminRootLayout({ children }: LayoutProps<"/admin">) {
  return <div className="min-h-full bg-[#f4f5f6] text-ink">{children}</div>;
}
