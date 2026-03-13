import { Metadata } from "next";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "General Business | Your Trusted Partner",
  description: "Providing exceptional business services to help you succeed.",
  openGraph: {
    title: "General Business | Your Trusted Partner",
    description: "Providing exceptional business services to help you succeed.",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop"
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen", inter.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}