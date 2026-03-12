"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={cn("sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100")}>
      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center")}>
        <Link href="/" className={cn("text-2xl font-bold")}>
          Summit Real Estate
        </Link>
        <nav className={cn("hidden md:flex space-x-4")}>
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className={cn("text-gray-800 hover:text-primary")}>
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className={cn("md:hidden bg-white border-t border-gray-100")}>
          <nav className={cn("flex flex-col space-y-2 p-4")}>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className={cn("text-gray-800 hover:text-primary")}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}