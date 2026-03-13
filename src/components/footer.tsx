"use client";

import Link from "next/link";
import { ArrowUp, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{siteConfig.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Elevating businesses through strategic innovation, operational excellence, and data-driven growth. We build partnerships that last.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span>{siteConfig.links.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone className="h-5 w-5 shrink-0" />
                <a href={`tel:${siteConfig.links.phone}`} className="hover:text-white">
                  {siteConfig.links.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="h-5 w-5 shrink-0" />
                <a href={`mailto:${siteConfig.links.email}`} className="hover:text-white">
                  {siteConfig.links.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Connect
            </h4>
            <div className="flex space-x-4 mb-8">
              {siteConfig.links.socials.map((social) => {
                const Icon =
                  social.icon === "twitter"
                    ? Twitter
                    : social.icon === "linkedin"
                    ? Linkedin
                    : Instagram;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.name} page`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <div className="space-y-2 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white block">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white block">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="mt-4 md:mt-0 flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}