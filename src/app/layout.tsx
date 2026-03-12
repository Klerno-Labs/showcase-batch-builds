"use client";
import { Metadata } from "next";
import { cn } from "@/lib/cn";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Wagmore Dog Grooming",
  description: "Loving pet care services including grooming, boarding, daycare, and veterinary wellness.",
  openGraph: {
    title: "Wagmore Dog Grooming",
    description: "Loving pet care services including grooming, boarding, daycare, and veterinary wellness.",
    url: "https://example.com",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop"
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("bg-background text-text")}>
        {children}
      </body>
    </html>
  );
}