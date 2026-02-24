import Link from "next/link";

interface HeroProps {
  heading: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc: string;
  imageAlt: string;
}

export default function Hero({
  heading,
  subtext,
  ctaLabel,
  ctaHref,
  imageSrc,
}: HeroProps) {
  return (
    <section
      className="relative w-full h-[480px] md:h-[560px] flex items-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url('${imageSrc}')` }}
      aria-label="Page header"
    >
      {/* Light gray fade overlay — left-heavy for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/65 to-white/20" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A35BF] leading-tight">
            {heading}
          </h1>
          {subtext && (
            <p className="mt-4 text-lg text-[#3A6AE8] leading-relaxed">
              {subtext}
            </p>
          )}
          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className="mt-8 inline-block px-8 py-3 bg-[#1A35BF] text-white font-semibold rounded hover:bg-[#2244D0] transition-colors text-base shadow-md"
            >
              {ctaLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
