"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/cn";
import "@/styles/globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={cn("flex flex-col min-h-screen")}>
      <Header />
      <main className={cn("flex-grow")}>{children}</main>
      <Footer />
    </div>
  );
}