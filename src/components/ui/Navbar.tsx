"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { images } from "@/config/images";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <img src={images["hero"].src} alt="Logo" className="h-10" />
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-gray-700">Home</a>
          <a href="/about" className="text-gray-700">About</a>
          <a href="/services" className="text-gray-700">Services</a>
          <a href="/contact" className="text-gray-700">Contact</a>
        </div>
        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          <span className="block w-6 h-1 bg-gray-700"></span>
          <span className="block w-6 h-1 bg-gray-700 mt-1"></span>
          <span className="block w-6 h-1 bg-gray-700 mt-1"></span>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="/" className="block text-gray-700">Home</a>
          <a href="/about" className="block text-gray-700">About</a>
          <a href="/services" className="block text-gray-700">Services</a>
          <a href="/contact" className="block text-gray-700">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;