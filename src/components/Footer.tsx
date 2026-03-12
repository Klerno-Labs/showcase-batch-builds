"use client";
import Link from 'next/link';
import { Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold">About Us</h3>
            <p>We are a dedicated team providing top-notch services.</p>
          </div>
          <div>
            <h3 className="font-bold">Quick Links</h3>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
          <div>
            <h3 className="font-bold">Contact Info</h3>
            <p><Phone /> (512) 555-1234</p>
            <p>4521 Westheimer Rd, Suite 200, Houston, TX 77027</p>
            <p>info@business.com</p>
          </div>
          <div>
            <h3 className="font-bold">Follow Us</h3>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</Link>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>© {new Date().getFullYear()} Business Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;