"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Phone } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className={cn("sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 transition-all duration-300")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <div className="text-primary font-heading text-2xl font-bold">
          {siteConfig.name}
        </div>
        <div className="hidden md:flex space-x-4">
          {siteConfig.links.menu.map((link) => (
            <a key={link.title} href={link.href} className="text-muted hover:text-primary transition-colors text-sm font-medium">
              {link.title}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <a href={`tel:${siteConfig.phone}`} className="flex items-center text-muted hover:text-primary transition-colors">
            <Phone className="mr-1" />
            {siteConfig.phone}
          </a>
          <button onClick={toggleMenu} aria-label={isOpen ? "Close menu" : "Open menu"} className="md:hidden">
            <span className="material-icons">{isOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  );
}