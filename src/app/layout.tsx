"use client";

import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import { cn } from "@/lib/cn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        <main className={cn("pt-20")}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}