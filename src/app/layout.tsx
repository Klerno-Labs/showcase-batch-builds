import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://summitridge.com"),
  title: {
    default: "Summit Ridge Consulting | Strategic Business Solutions",
    template: "%s | Summit Ridge Consulting",
  },
  description: "Premier business consulting firm in Houston, TX specializing in strategic planning, digital transformation, and financial advisory services.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://summitridge.com",
    siteName: "Summit Ridge Consulting",
    title: "Summit Ridge Consulting | Strategic Business Solutions",
    description: "Premier business consulting firm in Houston, TX specializing in strategic planning, digital transformation, and financial advisory services.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Summit Ridge Consulting Office",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit Ridge Consulting | Strategic Business Solutions",
    description: "Premier business consulting firm in Houston, TX specializing in strategic planning, digital transformation, and financial advisory services.",
    images: ["https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=630&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
        
        {/* Structured Data for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BusinessService",
              name: "Summit Ridge Consulting",
              image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
              address: {
                "@type": "PostalAddress",
                streetAddress: "4521 Westheimer Rd, Suite 200",
                addressLocality: "Houston",
                addressRegion: "TX",
                postalCode: "77027",
                addressCountry: "US",
              },
              url: "https://summitridge.com",
              telephone: "+17135550123",
              email: "info@summitridge.com",
              priceRange: "$$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}