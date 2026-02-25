import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Trusted Orange County CPAs | Zarrinkelk CPAs",
  description:
    "Expert accounting and financial services for individuals and businesses in Orange County, CA.",
};

const services = [
  {
    title: "Tax Preparation",
    description:
      "Comprehensive tax preparation services tailored to individuals and businesses, ensuring compliance and maximizing deductions.",
    imageSrc: "/images/accounting-1.jpg",
  },
  {
    title: "Financial Planning",
    description:
      "Strategic financial planning personalized to your goals, guiding you towards long-term wealth accumulation and security.",
    imageSrc: "/images/accounting-2.jpg",
  },
  {
    title: "Business Advisory",
    description:
      "Specialized advisory services providing insight, strategies, and solutions to enhance operations and profitability.",
    imageSrc: "/images/accounting-3.jpg",
  },
  {
    title: "Accounting Services",
    description:
      "Accurate and efficient accounting services to maintain records and streamline your financial management.",
    imageSrc: "/images/accounting-4.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        heading="Elevate Your Finances with Zarrinkelk CPAs"
        subtext="Expert accounting and financial services for individuals and businesses"
        ctaLabel="Get Started"
        ctaHref="/contact"
        imageSrc="/images/hero-bg.jpg"
        imageAlt="Orange County California palm trees"
      />

      {/* Services Teaser */}
      <section className="py-20 bg-[#F7F8FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#00AEEF] font-semibold text-sm uppercase tracking-wider mb-3">
              What We Do
            </p>
            <h2 className="text-3xl font-bold text-[#2b3947]">Services Offered</h2>
            <p className="mt-3 text-gray-500 text-lg max-w-2xl mx-auto">
              Tailored financial solutions for businesses and high net worth individuals in Orange County.
            </p>
            <div className="mt-4 mx-auto w-16 h-1 bg-[#00C2E8] rounded" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-block px-8 py-3 border-2 border-[#2b3947] text-[#2b3947] font-semibold rounded hover:bg-[#2b3947] hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About mini-section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#00AEEF] font-semibold text-sm uppercase tracking-wider mb-3">
                About Us
              </p>
              <h2 className="text-3xl font-bold text-[#2b3947] mb-4">
                Trusted Accounting Excellence
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Zarrinkelk CPAs, we consistently deliver exceptional results to our clients.
                Our meticulous approach, combined with strategic financial advice, sets us apart
                as a trusted partner in financial success.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                With a focus on privately-held businesses and high net-worth individuals,
                Zarrinkelk CPAs has a proven track record of delivering tailored solutions
                that meet each client&apos;s unique needs.
              </p>
              <Link
                href="/about"
                className="inline-block px-6 py-3 bg-[#00C2E8] text-[#1e2c38] font-semibold rounded hover:bg-[#33D4F5] transition-colors"
              >
                Meet Our Team
              </Link>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/pexels-timmossholder-3936201 (1).jpg"
                alt="Zarrinkelk CPAs team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Mockup */}
      <section className="py-20 bg-[#F7F8FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logos/3D Mockup.jpg"
                alt="Zarrinkelk CPAs — Clarity, Integrity, Insight"
                className="w-full max-w-md rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <p className="text-[#00AEEF] font-semibold text-sm uppercase tracking-wider mb-3">
                Our Promise
              </p>
              <h2 className="text-3xl font-bold text-[#2b3947] mb-2">
                Clarity. Integrity. Insight.
              </h2>
              <div className="w-16 h-1 bg-[#00C2E8] rounded mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                These three principles have guided Zarrinkelk CPAs since 1982. We believe
                that great financial guidance starts with clear communication, an unwavering
                commitment to honesty, and the insight that only decades of experience can
                provide.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you&apos;re a business owner navigating growth or an individual
                planning for the future, you deserve an advisor who sees the full picture —
                and tells you the truth about it.
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-[#2b3947] text-white font-semibold rounded hover:bg-[#3a4f61] transition-colors"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-[#2b3947] to-[#00AEEF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Schedule a consultation with our team today.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-[#2b3947] font-bold rounded hover:bg-blue-50 transition-colors text-base shadow"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
