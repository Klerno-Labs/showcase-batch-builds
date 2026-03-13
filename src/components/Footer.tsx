import { cn } from "@/lib/cn";
import { siteConfig } from "@/config/site";
import { Facebook, Twitter, Linkedin } from "lucide-react";

import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-bold">About Us</h3>
            <p className="mt-2 text-sm">
              We are dedicated to helping businesses thrive through innovative solutions.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Quick Links</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="/" className="text-white hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Contact Info</h3>
            <p className="mt-2 text-sm">{siteConfig.address}</p>
            <p className="mt-2 text-sm">{siteConfig.phone}</p>
            <p className="mt-2 text-sm">{siteConfig.email}</p>
          </div>
          <div>
            <h3 className="font-bold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page">
                <Twitter />
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
                <Facebook />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}