"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm border-gray-100"
          : "bg-white/80 backdrop-blur-md border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
              P
            </div>
            <span className="text-2xl font-bold text-gray-900 tracking-tight">
              Pegrio
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary relative",
                  pathname === link.href
                    ? "text-primary"
                    : "text-gray-600"
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA & Phone */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+17135550123"
              className="flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              <Phone size={18} />
              <span>(713) 555-0123</span>
            </a>
            <Link href="#contact">
              <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-medium hover:brightness-110 transition-all shadow-sm hover:shadow-md">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-20 bg-white transform transition-transform duration-300 ease-in-out overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col p-6 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-medium text-gray-900 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-6 border-t border-gray-100">
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-primary text-white text-center px-6 py-3 rounded-lg font-medium hover:brightness-110 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}