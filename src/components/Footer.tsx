import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1B2A4A] text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-2">Zarrinkelk CPAs</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Tax Accounting & Bookkeeping for Small Businesses and Medium to
              High Net Worth Individuals.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#C9A84C] font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-[#C9A84C] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#C9A84C] font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <address className="not-italic space-y-2 text-sm text-gray-400">
              <p>6789 Quail Hill Parkway, Suite 510</p>
              <p>Irvine, CA 92603</p>
              <p className="mt-3">
                <a href="tel:9498746515" className="hover:text-[#C9A84C] transition-colors">
                  949-874-6515
                </a>
              </p>
              <p>
                <a
                  href="mailto:majid@zk-cpa.com"
                  className="hover:text-[#C9A84C] transition-colors"
                >
                  majid@zk-cpa.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-gray-500">
          &copy; {year} Zarrinkelk CPAs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
