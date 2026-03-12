"use client";

import { ReactNode } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import "@/styles/globals.css";

export const metadata = {
  title: "Core Strength CrossFit",
  description: "Premium fitness facility offering personalized training, group classes, and holistic wellness programs.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}