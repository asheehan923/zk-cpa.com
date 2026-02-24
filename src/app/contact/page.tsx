import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Zarrinkelk CPAs. Visit our office in Irvine, CA or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header — light gray fade, consistent with Hero style */}
      <section
        className="relative w-full py-20 flex items-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/65 to-white/20" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <p className="text-[#00AEEF] font-semibold text-sm uppercase tracking-wider mb-3">
            Reach Out
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A35BF]">
            Get In Touch With Us
          </h1>
          <p className="mt-4 text-[#3A6AE8] text-lg">
            Our Offices — Visit us for personalized financial consultations.
          </p>
        </div>
      </section>

      {/* Split Layout */}
      <section className="py-20 bg-[#F7F8FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#1A35BF] mb-6">Contact Information</h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#1A35BF] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A35BF] text-sm">Office Address</p>
                    <address className="not-italic text-gray-600 text-sm mt-1 leading-relaxed">
                      6789 Quail Hill Parkway, Suite 510<br />
                      Irvine, CA 92603
                    </address>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#1A35BF] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A35BF] text-sm">Phone</p>
                    <a href="tel:9498746515" className="text-gray-600 text-sm mt-1 block hover:text-[#00AEEF] transition-colors">
                      949-874-6515
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#1A35BF] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A35BF] text-sm">Email</p>
                    <a href="mailto:majid@zk-cpa.com" className="text-gray-600 text-sm mt-1 block hover:text-[#00AEEF] transition-colors">
                      majid@zk-cpa.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Maps — free embed, no API key */}
              <div className="mt-8 rounded-xl overflow-hidden shadow-md h-56">
                <iframe
                  title="Zarrinkelk CPAs — 6789 Quail Hill Pkwy Suite 510, Irvine CA"
                  src="https://maps.google.com/maps?q=6789+Quail+Hill+Pkwy+Suite+510+Irvine+CA+92603&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href="https://maps.google.com/maps?q=6789+Quail+Hill+Pkwy+Suite+510+Irvine+CA+92603"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm text-[#00AEEF] hover:text-[#1A35BF] transition-colors font-medium"
              >
                Open in Google Maps
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Form */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-[#1A35BF] mb-2">Send Us a Message</h2>
              <p className="text-gray-500 text-sm mb-6">
                Fill out the form below and we&apos;ll get back to you within one business day.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
