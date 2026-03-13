"use client";
import { siteConfig } from "@/config/site";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold">About Us</h3>
          <p className="mt-2 text-sm">
            We are dedicated to providing innovative solutions that help businesses thrive.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Contact Info</h3>
          <p className="mt-2 flex items-center">
            <Phone className="mr-2" />
            {siteConfig.phone}
          </p>
          <p className="mt-2 flex items-center">
            <Mail className="mr-2" />
            {siteConfig.email}
          </p>
          <p className="mt-2">{siteConfig.address}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <ul className="mt-2 space-y-2">
            <li><a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a></li>
            <li><a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
            <li><a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}