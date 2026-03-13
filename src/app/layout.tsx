import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://pegrio.com"),
  title: {
    default: "Pegrio | Strategic Business Consulting",
    template: "%s | Pegrio"
  },
  description: "Empowering businesses through strategic innovation, digital transformation, and data-driven consulting. Trusted by over 500 companies in Houston and beyond.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pegrio.com",
    title: "Pegrio | Strategic Business Consulting",
    description: "Empowering businesses through strategic innovation, digital transformation, and data-driven consulting.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Pegrio Office",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Pegrio",
  "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
  "telephone": "(713) 555-0199",
  "email": "info@pegrio.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4521 Westheimer Rd, Suite 200",
    "addressLocality": "Houston",
    "addressRegion": "TX",
    "postalCode": "77027",
    "addressCountry": "US"
  },
  "url": "https://pegrio.com",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  },
  "priceRange": "$$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}