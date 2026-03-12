"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold">
          Wagmore Dog Grooming
        </Link>
        <nav className={cn("md:flex space-x-4", isOpen ? "block" : "hidden")}>
          {siteConfig.links.map((link) => (
            <Link key={link.label} href={link.href} className="text-gray-700 hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <button onClick={toggleMenu} aria-label={isOpen ? "Close menu" : "Open menu"} className="md:hidden">
          {isOpen ? "✖" : "☰"}
        </button>
        <div className="hidden md:flex items-center">
          <Phone className="mr-2" />
          <span>(512) 555-1234</span>
        </div>
      </div>
    </header>
  );
};