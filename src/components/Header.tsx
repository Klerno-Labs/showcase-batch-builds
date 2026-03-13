"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/config/site";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <Link href="/" className="text-xl font-bold text-gray-900">
          {siteConfig.name}
        </Link>
        <button
          aria-label="Open menu"
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-gray-900 hover:bg-gray-200"
        >
          <Menu />
        </button>
        <nav className={`md:flex md:items-center ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li>
              <Link href="/" className="text-gray-900 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-900 hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-900 hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-900 hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-gray-900 hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}