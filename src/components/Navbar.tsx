"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/config/site";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-bold text-gray-900">
          {siteConfig.name}
        </Link>
        <nav className={cn("hidden md:flex gap-8")}>
          {siteConfig.links.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-900 hover:text-gray-600">
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-gray-900"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 translate-x-0 transition-transform duration-300">
          {siteConfig.links.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-900" onClick={toggleMenu}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;