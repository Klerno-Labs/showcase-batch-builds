"use client";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <Link href="/" className="text-xl font-bold">{siteConfig.name}</Link>
        <nav className="flex space-x-4">
          {siteConfig.navigation.map((link) => (
            <Link key={link.title} href={link.href} className="hover:underline">
              {link.title}
            </Link>
          ))}
        </nav>
        <div className="flex items-center">
          <Phone className="mr-2" aria-label="Call us" />
          <span>{siteConfig.phone}</span>
        </div>
      </div>
    </header>
  );
}