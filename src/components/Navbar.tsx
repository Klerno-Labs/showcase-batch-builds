"use client";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <div className="text-xl font-bold">Business Logo</div>
        <nav className={cn("flex items-center space-x-4", isOpen ? "block" : "hidden")}>
          <Link href="/" className="text-gray-900 hover:underline">Home</Link>
          <Link href="/about" className="text-gray-900 hover:underline">About</Link>
          <Link href="/services" className="text-gray-900 hover:underline">Services</Link>
          <Link href="/contact" className="text-gray-900 hover:underline">Contact</Link>
          <Link href="/faq" className="text-gray-900 hover:underline">FAQ</Link>
          <a href="tel:(512)123-4567" className="flex items-center text-gray-900 hover:underline">
            <Phone className="mr-1" aria-hidden="true" />
            (512) 123-4567
          </a>
        </nav>
        <button onClick={toggleMenu} aria-label="Open menu" className="md:hidden">
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;