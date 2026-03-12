"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold">Core Strength</Link>
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label="Open menu"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          <span className="material-icons">menu</span>
        </button>
        <div className="hidden md:flex items-center">
          <Phone className="mr-2" />
          <span>(512) 555-0199</span>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="py-2 hover:underline">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}