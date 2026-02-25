import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Zarrinkelk CPAs, Inc.",
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#F7F8FA] min-h-screen">
      {/* Header */}
      <div className="bg-[#2b3947] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Terms of Service</h1>
          <p className="mt-2 text-blue-200 text-sm">Last updated: January 1, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 text-gray-700 leading-relaxed space-y-8">

          <section>
            <h2 className="text-xl font-bold text-[#2b3947] mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website zk-cpa.com, you agree to be bound by these Terms
              of Service. If you do not agree to these terms, please do not use this website.
              These terms apply to all visitors, users, and others who access the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2b3947] mb-3">2. Professional Services Disclaimer</h2>
            <p>
              The information provided on this website is for general informational purposes only
              and does not constitute professional accounting, tax, legal, or financial advice.
              No CPA-client relationship is formed by viewing or contacting us through this website
              alone. An engagement letter signed by both parties is required before any
              professional services begin.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2b3947] mb-3">3. Use of Website</h2>
            <p>You agree to use this website only for lawful purposes. You must not:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
              <li>Use the site in any way that violates applicable local, state, or federal laws</li>
              <li>Transmit unsolicited or unauthorized advertising material</li>
              <li>Attempt to gain unauthorized access to any part of the site</li>
              <li>Reproduce or distribute site content without written permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2b3947] mb-3">4. Intellectual Property</h2>
            <p>
              All content on this website — including text, graphics, logos, and images — is the
              property of Zarrinkelk CPAs, Inc. and is protected by applicable copyright and
              trademark laws. You may not reproduce or redistribute any content without our
              express written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2b3947] mb-3">5. Limitation of Liability</h2>
            <p>
              Zarrinkelk CPAs, Inc. shall not be liable for any indirect, incidental, special,
              or consequential damages arising from your use of this website or reliance on any
              information presented herein. We make no warranties, expressed or implied, regarding
              the accuracy or completeness of the information on this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2b3947] mb-3">6. Third-Party Links</h2>
            <p>
              This website may contain links to third-party websites. These links are provided
              for convenience only. Zarrinkelk CPAs, Inc. has no control over the content of
              those sites and accepts no responsibility for them or for any loss or damage that
              may arise from your use of them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2b3947] mb-3">7. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws
              of the State of California, without regard to its conflict of law provisions. Any
              disputes shall be resolved in the courts of Orange County, California.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2b3947] mb-3">8. Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms of Service at any time. Changes will
              be effective immediately upon posting to this page. Your continued use of the
              website after any changes constitutes your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2b3947] mb-3">9. Contact</h2>
            <p>For questions about these Terms, contact us at:</p>
            <address className="not-italic mt-3 text-sm space-y-1">
              <p className="font-semibold">Zarrinkelk CPAs, Inc.</p>
              <p>6789 Quail Hill Parkway, Suite 510, Irvine, CA 92603</p>
              <p>Email: <a href="mailto:majid@zk-cpa.com" className="text-[#00AEEF] hover:underline">majid@zk-cpa.com</a></p>
            </address>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-[#00AEEF] hover:text-[#2b3947] transition-colors">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
