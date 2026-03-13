import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://apexstrategic.com"),
  title: {
    default: "Apex Strategic Solutions | Houston Business Consulting",
    template: "%s | Apex Strategic Solutions"
  },
  description: "Empowering Houston businesses with data-driven strategy, digital transformation, and operational consulting. Achieve sustainable growth with Apex.",
  openGraph: {
    title: "Apex Strategic Solutions",
    description: "Strategic growth for modern businesses.",
    url: "https://apexstrategic.com",
    siteName: "Apex Strategic Solutions",
    images: [
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Apex Strategic Solutions",
              "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
              "@id": "https://apexstrategic.com",
              "url": "https://apexstrategic.com",
              "telephone": "+17135550198",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4521 Westheimer Rd, Suite 200",
                "addressLocality": "Houston",
                "addressRegion": "TX",
                "postalCode": "77027",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 29.7374,
                "longitude": -95.4615
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/apexstrategic",
                "https://www.linkedin.com/company/apexstrategic"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}