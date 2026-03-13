import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://pegrio.com"),
  title: {
    default: "Pegrio Solutions | Business Consulting & Strategy",
    template: "%s | Pegrio Solutions",
  },
  description: "Pegrio Solutions provides top-tier business consulting, strategic planning, and operational optimization for modern enterprises.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pegrio.com",
    siteName: "Pegrio Solutions",
    title: "Pegrio Solutions | Business Consulting & Strategy",
    description: "Expert business consulting services to drive growth and efficiency.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
        width: 1200,
        height: 800,
        alt: "Pegrio Solutions Office",
      },
    ],
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
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}