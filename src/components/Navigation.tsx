"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/Button";
import { siteConfig } from "@/config/site";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900">
              {siteConfig.name}
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-gray-600 hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary font-medium transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-primary font-medium transition-colors">
              Services
            </Link>
            <Link href="/faq" className="text-gray-600 hover:text-primary font-medium transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA & Phone (Desktop) */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a href={`tel:${siteConfig.contact.phone}`} className="text-sm font-semibold text-gray-900 flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              {siteConfig.contact.phone}
            </a>
            <Link href="/contact">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-4 space-y-4">
          <Link
            href="/"
            className="text-gray-900 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-gray-900"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-gray-600 hover:text-gray-900"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/faq"
            className="text-gray-600 hover:text-gray-900"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-gray-900"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="pt-4 border-t border-gray-100">
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block">
              <Button className="w-full">Get Started</Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}