import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Zarrinkelk CPAs",
    default: "Zarrinkelk CPAs | Trusted Orange County CPAs",
  },
  description:
    "Tax Accounting & Bookkeeping for Small Businesses and Medium to High Net Worth Individuals. Serving Orange County, CA.",
  keywords: ["CPA", "tax preparation", "accounting", "bookkeeping", "Orange County", "Irvine", "financial planning"],
  openGraph: {
    siteName: "Zarrinkelk CPAs",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased text-gray-900 bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
