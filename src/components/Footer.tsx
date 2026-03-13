"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Facebook, Twitter, LinkedIn } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg">About Us</h3>
          <p className="text-sm">We are dedicated to providing top-notch business services.</p>
        </div>
        <div>
          <h3 className="font-bold text-lg">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg">Contact Info</h3>
          <p className="text-sm">4521 Westheimer Rd, Suite 200, Houston, TX 77027</p>
          <p className="text-sm">Phone: (512) 123-4567</p>
          <p className="text-sm">Email: <a href="mailto:info@business.com" className="hover:underline">info@business.com</a></p>
        </div>
        <div>
          <h3 className="font-bold text-lg">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
              <Facebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page">
              <Twitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page">
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-4">
        © {new Date().getFullYear()} Business Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;