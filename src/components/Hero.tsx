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

      {/* Overlay — cobalt-to-cyan gradient matching logo */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A35BF]/80 via-[#1A35BF]/60 to-[#00C2E8]/40" />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-sm">
            {heading}
          </h1>
          {subtext && (
            <p className="mt-4 text-lg text-blue-50 leading-relaxed">
              {subtext}
            </p>
          )}
          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className="mt-8 inline-block px-8 py-3 bg-[#00C2E8] text-[#0D1F7A] font-semibold rounded hover:bg-[#33D4F5] transition-colors text-base shadow-lg"
            >
              {ctaLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
