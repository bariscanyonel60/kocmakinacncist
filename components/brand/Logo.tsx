import Link from "next/link";
import { company } from "@/data/company";
import { cn } from "@/lib/cn";

/** Kırpılmış kaynak (yazı alanı); navbar yüksekliğiyle birebir. */
const LOGO_WIDTH = 779;
const LOGO_HEIGHT = 600;
/** Navbar yüksekliği — logo yüksekliği buna eşit, genişlik oran korunur. */
export const NAV_LOGO_HEIGHT = 92;
/** 92 * (779/600) ≈ 119 */
const NAV_LOGO_WIDTH = Math.round((NAV_LOGO_HEIGHT * LOGO_WIDTH) / LOGO_HEIGHT);
/** Kırmızı Koç + mavi Makina + unvan — şeffaf, sıkı kırpılmış. */
const LOGO_SRC = "/images/koc-makina-logo-full-clear.png?v=20261114e";

export function LogoImage({
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
  sizes?: string;
  preload?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- yerel şeffaf PNG; Cloudinary loader kullanma
    <img
      src={LOGO_SRC}
      alt={company.name}
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      decoding="async"
      fetchPriority="low"
      className={cn("block bg-transparent object-contain object-left", className)}
    />
  );
}

export function Logo({ legalName: _legalName }: { tone?: "light" | "dark"; legalName?: string } = {}) {
  void _legalName;
  return (
    <Link
      href="/"
      aria-label={`${company.name} ana sayfa`}
      className="flex h-[92px] w-auto shrink-0 items-center overflow-hidden bg-transparent"
    >
      <LogoImage
        className="h-[92px] w-auto"
        sizes={`${NAV_LOGO_WIDTH}px`}
      />
    </Link>
  );
}
