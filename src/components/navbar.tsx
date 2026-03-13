"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100"
          : "bg-white/80 backdrop-blur-md"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight text-gray-900">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary font-semibold"
                    : "text-gray-600"
                )}
              >
                {item.title}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.links.phone}`}
              className="hidden lg:flex items-center space-x-2 text-sm font-medium text-gray-900 hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              <span>{siteConfig.links.phone}</span>
            </a>
            <Link
              href="/contact"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:brightness-110"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="md:hidden rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-20 z-40 bg-white border-b border-gray-100 transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-1 p-4">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block rounded-lg px-3 py-3 text-base font-medium",
                pathname === item.href
                  ? "bg-primary/10 text-primary"
                  : "text-gray-600 hover:bg-gray-50"
              )}
            >
              {item.title}
            </Link>
          ))}
          <div className="my-4 border-t border-gray-100 pt-4">
            <a
              href={`tel:${siteConfig.links.phone}`}
              className="flex items-center space-x-3 text-gray-900 mb-4"
            >
              <Phone className="h-5 w-5 text-primary" />
              <span className="font-medium">{siteConfig.links.phone}</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full rounded-lg bg-primary px-4 py-3 text-center font-medium text-white hover:brightness-110"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}