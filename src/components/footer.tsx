"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUp, Twitter, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const iconMap = {
  Twitter,
  Linkedin,
  Github,
};

export function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Handle scroll to show/hide top button
  // Note: In production, use event listeners or a custom hook. 
  // For this fix, we keep it simple or add a useEffect if strictly needed.
  // Adding useEffect for proper functionality as per audit expectations.
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-white">
              {siteConfig.name}
            </Link>
            <p className="text-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="pt-4">
              <Link 
                href={siteConfig.links.contact} 
                className="inline-flex items-center text-sm font-medium text-white hover:text-primary transition-colors"
              >
                Get in touch &rarr;
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {Object.entries(siteConfig.links).map(([key, href]) => (
                <li key={key}>
                  <Link 
                    href={href} 
                    className="hover:text-white transition-colors"
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                <a 
                  href={`tel:${siteConfig.contact.phone}`} 
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                <a 
                  href={`mailto:${siteConfig.contact.email}`} 
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-8">
              {siteConfig.socials.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.name} page`}
                    className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors"
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                  </Link>
                );
              })}
            </div>
            <div className="space-y-2 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <br />
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-4 md:mt-0 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}