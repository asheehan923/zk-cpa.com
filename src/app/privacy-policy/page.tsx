import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Zarrinkelk CPAs, Inc.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#F7F8FA] min-h-screen">
      {/* Header */}
      <div className="bg-[#1A35BF] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="mt-2 text-blue-200 text-sm">Last updated: January 1, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 prose prose-blue max-w-none text-gray-700 leading-relaxed space-y-8">

          <section>
            <h2 className="text-xl font-bold text-[#1A35BF] mb-3">1. Introduction</h2>
            <p>
              Zarrinkelk CPAs, Inc. (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your
              personal information and your right to privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you visit our website
              zk-cpa.com or engage our professional services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1A35BF] mb-3">2. Information We Collect</h2>
            <p>We may collect information that you voluntarily provide, including:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
              <li>Name, email address, and phone number submitted via our contact form</li>
              <li>Financial and tax information shared during professional engagements</li>
              <li>Business information relevant to the services we provide</li>
            </ul>
            <p className="mt-3">
              We do not sell, trade, or rent your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1A35BF] mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
              <li>Respond to your inquiries and provide requested services</li>
              <li>Deliver tax, accounting, and financial advisory services</li>
              <li>Comply with applicable legal, regulatory, and professional obligations</li>
              <li>Improve our website and client experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1A35BF] mb-3">4. Confidentiality</h2>
            <p>
              As a licensed CPA firm, we are bound by professional standards of confidentiality
              under California CPA regulations and the AICPA Code of Professional Conduct. All
              client financial information is treated with the highest level of discretion and
              confidentiality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1A35BF] mb-3">5. Third-Party Services</h2>
            <p>
              Our website uses Formspree to process contact form submissions. Formspree&apos;s
              privacy policy governs information submitted through that service. We do not use
              tracking pixels, behavioral advertising, or third-party analytics that collect
              personally identifiable information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1A35BF] mb-3">6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your
              personal information against unauthorized access, alteration, disclosure, or
              destruction. However, no method of internet transmission is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1A35BF] mb-3">7. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of personal information we
              hold about you by contacting us at{" "}
              <a href="mailto:majid@zk-cpa.com" className="text-[#00AEEF] hover:underline">
                majid@zk-cpa.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1A35BF] mb-3">8. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <address className="not-italic mt-3 text-sm space-y-1">
              <p className="font-semibold">Zarrinkelk CPAs, Inc.</p>
              <p>6789 Quail Hill Parkway, Suite 510, Irvine, CA 92603</p>
              <p>Phone: <a href="tel:9498746515" className="text-[#00AEEF] hover:underline">949-874-6515</a></p>
              <p>Email: <a href="mailto:majid@zk-cpa.com" className="text-[#00AEEF] hover:underline">majid@zk-cpa.com</a></p>
            </address>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-[#00AEEF] hover:text-[#1A35BF] transition-colors">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
