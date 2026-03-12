"use client";
import Link from 'next/link';
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-bold">Aspen Dental Studio</h2>
            <p>Providing quality dental care with a patient-first approach.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Patient Info</h3>
            <ul>
              <li><Link href="/insurance">Insurance</Link></li>
              <li><Link href="/new-patients">New Patients</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p>(512) 555-1234</p>
            <p>4521 Westheimer Rd, Suite 200, Houston, TX 77027</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>© {new Date().getFullYear()} Aspen Dental Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;