import Link from "next/link";
import { ArrowUp, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{siteConfig.name}</h3>
            <p className="text-gray-400 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex space-x-4 pt-2">
              <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" aria-label="Visit our GitHub page" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex flex-col">
                <span className="font-medium text-white">Address</span>
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium text-white">Phone</span>
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex flex-col">
                <span className="font-medium text-white">Email</span>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <p className="text-gray-400 mb-6">{siteConfig.contact.hours}</p>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center text-sm text-gray-400 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            Back to top <ArrowUp className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}