"use client";

import { ReactNode } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import "@/styles/globals.css";

export const metadata = {
  title: "Wagmore Dog Grooming",
  description: "Loving pet care services including grooming, boarding, daycare, and veterinary wellness.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-text">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}