"use client";

import { ReactNode } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import "@/styles/globals.css";

export const metadata = {
  title: "Aspen Dental Studio",
  description: "Your trusted partner in family dentistry.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}