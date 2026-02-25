import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import StatCounter from "@/components/StatCounter";
import TeamCard from "@/components/TeamCard";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Zarrinkelk CPAs — trusted Orange County accountants with over 40 years of experience serving businesses and high net worth individuals.",
};

const stats = [
  { value: "40+", label: "Years of Experience" },
  { value: "1982", label: "Consulting Since" },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        heading="Empowering Financial Success Through Expertise"
        subtext="Trusted by businesses and individuals throughout Orange County, CA."
        imageSrc="/images/about-bg.jpg"
        imageAlt="Zarrinkelk CPAs office"
      />

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/who-we-are.jpg"
                alt="Who we are"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-[#00AEEF] font-semibold text-sm uppercase tracking-wider mb-3">
                Our Story
              </p>
              <h2 className="text-3xl font-bold text-[#2b3947] mb-4">
                Trusted Accounting Excellence
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Zarrinkelk CPAs, we consistently deliver exceptional results to our clients.
                Our meticulous approach, combined with strategic financial advice, sets us apart
                as a trusted partner in financial success.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a focus on privately-held businesses and high net-worth individuals,
                Zarrinkelk CPAs has a proven track record of clients achieving their financial
                goals. Our experienced team ensures that every client receives tailored solutions
                that meet their unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#E8F6FD]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#00C2E8]/30">
            {stats.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#00AEEF] font-semibold text-sm uppercase tracking-wider mb-3">
              Our Team
            </p>
            <h2 className="text-3xl font-bold text-[#2b3947]">Meet Our Expert</h2>
            <div className="mt-4 mx-auto w-16 h-1 bg-[#00C2E8] rounded" />
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Photo */}
            <div className="flex justify-center md:justify-end">
              <div className="text-center">
                <div className="relative w-52 h-52 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-[#00C2E8]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/majid-photo.jpg"
                    alt="Majid Zarrinkelk"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#2b3947]">Majid Zarrinkelk</h3>
                <p className="text-[#00AEEF] font-medium text-sm mt-1">Certified Public Accountant</p>
                <p className="text-gray-500 text-xs mt-1">CPA, CA License</p>
              </div>
            </div>

            {/* Extended bio */}
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                Majid Zarrinkelk is a California-licensed Certified Public Accountant with over
                40 years of experience in tax planning, accounting, and financial advisory
                services. Since establishing his practice in 1982, Majid has built a reputation
                throughout Orange County for delivering precise, proactive, and personalized
                financial guidance.
              </p>
              <p>
                His practice focuses on the unique needs of privately-held businesses — from
                startups to established mid-market companies — as well as medium to high net
                worth individuals seeking comprehensive tax strategies and wealth management
                support. Clients trust Majid not only for his deep technical expertise but for
                his commitment to understanding the full picture of their financial lives.
              </p>
              <p>
                Majid is known for a hands-on, relationship-driven approach. He works closely
                with each client to develop proactive tax minimization strategies, ensure
                regulatory compliance, and provide clear guidance through significant financial
                decisions — whether structuring a business entity, managing an estate, or
                planning for retirement.
              </p>
              <p className="text-[#2b3947] font-medium italic">
                &ldquo;My goal is simple: help my clients keep more of what they earn and make
                informed decisions with confidence.&rdquo;
                <span className="block text-gray-500 font-normal not-italic mt-1">— Majid Zarrinkelk, CPA</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-16 bg-gradient-to-r from-[#2b3947] to-[#00AEEF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Explore Our Services
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            From tax preparation to business advisory — we have you covered.
          </p>
          <Link
            href="/services"
            className="inline-block px-10 py-4 bg-white text-[#2b3947] font-bold rounded hover:bg-blue-50 transition-colors text-base shadow"
          >
            View Services
          </Link>
        </div>
      </section>
    </>
  );
}
