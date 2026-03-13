"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "h-20 bg-white/90 backdrop-blur-md shadow-sm border-b border-muted"
            : "h-24 bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary flex items-center justify-center text-accent font-heading font-bold text-2xl">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-primary leading-none tracking-tight">
                Summit Legal
              </span>
              <span className="font-accent text-xs text-accent tracking-widest uppercase leading-none mt-1">
                Advisors
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-accent text-sm font-semibold uppercase tracking-wide transition-colors hover:text-accent",
                  pathname === item.href ? "text-primary" : "text-secondary"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 text-secondary hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-body font-medium">{siteConfig.contact.phone}</span>
            </a>
            <Button asChild variant="primary">
              <Link href="/contact">Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Open menu"
            className="lg:hidden p-2 text-primary"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col pt-24 px-6 lg:hidden"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              className="absolute top-6 right-6 p-2 text-primary"
            >
              <X className="w-6 h-6" />
            </button>
            <nav className="flex flex-col gap-6">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-heading text-2xl text-primary hover:text-accent transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pb-8">
              <Button asChild variant="primary" className="w-full">
                <Link href="/contact">Get a Consultation</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}