import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  heading: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc: string;
  imageAlt: string;
  overlay?: boolean;
}

export default function Hero({
  heading,
  subtext,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt,
  overlay = true,
}: HeroProps) {
  return (
    <section className="relative w-full h-[480px] md:h-[560px] flex items-center">
      {/* Background image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-[#1B2A4A]/70" />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            {heading}
          </h1>
          {subtext && (
            <p className="mt-4 text-lg text-gray-200 leading-relaxed">
              {subtext}
            </p>
          )}
          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className="mt-8 inline-block px-8 py-3 bg-[#C9A84C] text-[#1B2A4A] font-semibold rounded hover:bg-[#d9bc72] transition-colors text-base"
            >
              {ctaLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
