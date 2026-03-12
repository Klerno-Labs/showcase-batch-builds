"use client";

import { cn } from "@/lib/cn";
import { Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { platform: "Facebook", href: "https://facebook.com", icon: <Facebook size={24} /> },
  { platform: "Twitter", href: "https://twitter.com", icon: <Twitter size={24} /> },
  { platform: "Instagram", href: "https://instagram.com", icon: <Instagram size={24} /> },
];

export default function Footer() {
  return (
    <footer className={cn("bg-gray-900 text-white py-8")}>
      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8")}>
        <div className={cn("flex justify-between items-center")}>
          <p className={cn("text-sm")}>© {new Date().getFullYear()} Summit Real Estate. All rights reserved.</p>
          <div className={cn("flex space-x-4")}>
            {socialLinks.map((link) => (
              <Link key={link.platform} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit our ${link.platform} page`}>
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}