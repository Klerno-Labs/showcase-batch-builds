import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: ["/images/hero.jpg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: siteConfig.name,
            description: siteConfig.description,
            address: {
              "@type": "PostalAddress",
              streetAddress: siteConfig.address,
              addressLocality: "Houston",
              addressRegion: "TX",
              postalCode: "77027",
              addressCountry: "US",
            },
            telephone: siteConfig.phone,
            openingHours: [
              "Mo-Fr 08:00-18:00",
              "Sa 09:00-14:00",
              "Su Closed",
            ],
            sameAs: [
              siteConfig.socialLinks.facebook,
              siteConfig.socialLinks.instagram,
              siteConfig.socialLinks.twitter,
            ],
          })}
        </script>
      </body>
    </html>
  );
}