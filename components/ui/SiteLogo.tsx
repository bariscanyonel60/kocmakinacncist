import Image from "next/image";
import { images } from "@/data/media";

type SiteLogoProps = {
  variant?: "dark" | "light";
  className?: string;
  priority?: boolean;
};

export function SiteLogo({ variant = "dark", className = "", priority = false }: SiteLogoProps) {
  const src = variant === "dark" ? images.logoOnDark : images.logo;

  return (
    <Image
      src={src}
      alt="Koç Makina"
      width={676}
      height={364}
      priority={priority}
      className={`h-auto w-full object-contain object-left ${className}`}
    />
  );
}
