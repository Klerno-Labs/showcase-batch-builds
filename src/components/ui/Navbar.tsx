"use client";
import { cn } from "@/lib/utils";
import { images } from "@/config/images";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={cn("sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100")}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img src={images["logo"].src} alt="Summit Electric Logo" className="h-12" />
        </a>
        <div className="hidden md:flex space-x-4">
          <a href="/about" className="text-gray-700 hover:underline">About</a>
          <a href="/services" className="text-gray-700 hover:underline">Services</a>
          <a href="/contact" className="text-gray-700 hover:underline">Contact</a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"} className="md:hidden">
          <span className="material-icons">menu</span>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full bg-white shadow-lg">
          <a href="#main" className="block px-4 py-2">Skip to content</a>
          <a href="/about" className="block px-4 py-2">About</a>
          <a href="/services" className="block px-4 py-2">Services</a>
          <a href="/contact" className="block px-4 py-2">Contact</a>
        </div>
      )}
    </nav>
  );
}