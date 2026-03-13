import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pegrio.com"),
  title: {
    default: "Pegrio | Strategic Business Solutions",
    template: "%s | Pegrio"
  },
  description: "Pegrio delivers expert strategic consulting, data analytics, and professional workshops to drive business growth and efficiency in Houston, TX.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pegrio.com",
    siteName: "Pegrio",
    title: "Pegrio | Strategic Business Solutions",
    description: "Partner with Pegrio for scalable business strategies and data-driven insights.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Pegrio Office Space",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pegrio | Strategic Business Solutions",
    description: "Expert strategic consulting and data analytics.",
    images: ["https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=630&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Pegrio",
              "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
              "@id": "https://pegrio.com",
              "url": "https://pegrio.com",
              "telephone": "+17135550123",
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
                "longitude": -95.4618 
              },
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
              "sameAs": [
                "https://www.facebook.com/pegrio",
                "https://www.twitter.com/pegrio",
                "https://www.linkedin.com/company/pegrio"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}