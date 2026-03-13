"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Mail, Phone, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-primary text-secondary-foreground pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent flex items-center justify-center text-primary font-heading font-bold text-xl">
                S
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Summit Legal Advisors
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Providing exceptional legal counsel with integrity and dedication since 1985. We fight for your rights and your future.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={`Visit our ${index} page`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-accent transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-heading font-bold text-lg text-white mb-6">Practice Areas</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-gray-400 hover:text-accent transition-colors">Corporate Law</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-accent transition-colors">Real Estate</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-accent transition-colors">Family Law</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-accent transition-colors">Probate & Estates</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg text-white mb-6">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-gray-400">{siteConfig.contact.address}</span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <a href={`tel:${siteConfig.contact.phone}`} className="text-gray-400 hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-400 hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors">Disclaimer</Link>
          </div>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-primary transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}