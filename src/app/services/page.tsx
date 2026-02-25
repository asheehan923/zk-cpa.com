import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Tax preparation, financial planning, business advisory, and accounting services for individuals and businesses in Orange County, CA.",
};

const services = [
  {
    title: "Tax Preparation",
    description:
      "Comprehensive tax preparation services tailored to individuals and businesses, ensuring compliance and maximizing deductions to optimize financial outcomes.",
    imageSrc: "/images/accounting-1.jpg",
  },
  {
    title: "Financial Planning",
    description:
      "Strategic financial planning personalized to your goals, guiding you towards long-term wealth accumulation and a secure financial future.",
    imageSrc: "/images/accounting-2.jpg",
  },
  {
    title: "Business Advisory",
    description:
      "Specialized business advisory services providing insight, strategies, and solutions to enhance operations, profitability, and overall business success.",
    imageSrc: "/images/accounting-3.jpg",
  },
  {
    title: "Accounting Services",
    description:
      "Accurate and efficient accounting services to maintain records, track financial transactions, and streamline accounting processes for better financial management.",
    imageSrc: "/images/accounting-4.jpg",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        heading="Our Services"
        subtext="Comprehensive financial services tailored to your unique needs."
        imageSrc="/images/services-bg.jpg"
        imageAlt="Zarrinkelk CPAs services"
      />

      {/* Services Grid */}
      <section className="py-20 bg-[#F7F8FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#00AEEF] font-semibold text-sm uppercase tracking-wider mb-3">
              What We Offer
            </p>
            <h2 className="text-3xl font-bold text-[#2b3947]">
              Financial Services for Every Need
            </h2>
            <div className="mt-4 mx-auto w-16 h-1 bg-[#00C2E8] rounded" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#00AEEF] font-semibold text-sm uppercase tracking-wider mb-3">
            Why Zarrinkelk CPAs
          </p>
          <h2 className="text-3xl font-bold text-[#2b3947] mb-6">
            A Partner You Can Trust
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
            {[
              { icon: "⚖️", title: "Compliance Focused", desc: "We stay current on tax law so you stay compliant and penalty-free." },
              { icon: "🎯", title: "Tailored Solutions", desc: "No two clients are alike. Every engagement is customized to your situation." },
              { icon: "🤝", title: "Long-Term Partnership", desc: "We build lasting relationships based on trust, transparency, and results." },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <span className="text-4xl mb-3">{item.icon}</span>
                <h3 className="text-lg font-semibold text-[#2b3947] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-[#2b3947] to-[#00AEEF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Contact us today for a complimentary consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-[#2b3947] font-bold rounded hover:bg-blue-50 transition-colors text-base shadow"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
