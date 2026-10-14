import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";
import { cn } from "@/lib/cn";

const LOGO_WIDTH = 2129;
const LOGO_HEIGHT = 653;

export function LogoImage({
  tone = "light",
  className,
  sizes,
  preload = false,
}: {
  tone?: "light" | "dark";
  className?: string;
  sizes: string;
  preload?: boolean;
}) {
  return (
    <Image
      src={tone === "light" ? "/images/koc-makina-logo-light.png" : "/images/koc-makina-logo.png"}
      alt={company.name}
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      sizes={sizes}
      preload={preload}
      className={cn("h-auto", className)}
    />
  );
}

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <Link href="/" aria-label={`${company.name} ana sayfa`} className="flex shrink-0 items-center">
      <LogoImage tone={tone} sizes="180px" preload className="w-[116px] sm:w-[172px]" />
    </Link>
  );
}
