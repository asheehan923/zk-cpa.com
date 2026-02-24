import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0D1F7A] text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-3">
              <Image
                src="/images/logos/Logo Transparency w.o tagline.png"
                alt="Zarrinkelk CPAs logo"
                width={40}
                height={40}
                className="object-contain brightness-0 invert"
              />
              <span className="text-white font-bold text-base leading-tight">
                Zarrinkelk CPAs, Inc.
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mt-2 max-w-sm">
              Tax Accounting & Bookkeeping for Small Businesses and Medium to
              High Net Worth Individuals. Serving Orange County since 1982.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#00C2E8] font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-[#00C2E8] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#00C2E8] font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <address className="not-italic space-y-2 text-sm text-gray-400">
              <p>6789 Quail Hill Parkway, Suite 510</p>
              <p>Irvine, CA 92603</p>
              <p className="mt-3">
                <a href="tel:9498746515" className="hover:text-[#00C2E8] transition-colors">
                  949-874-6515
                </a>
              </p>
              <p>
                <a
                  href="mailto:majid@zk-cpa.com"
                  className="hover:text-[#00C2E8] transition-colors"
                >
                  majid@zk-cpa.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>&copy; {year} Zarrinkelk CPAs, Inc. All rights reserved.</span>
          <div className="flex items-center gap-4">
            {legalLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="hover:text-[#00C2E8] transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
