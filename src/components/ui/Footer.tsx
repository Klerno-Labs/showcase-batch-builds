"use client";
import React from 'react';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/cn';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className={cn('bg-gray-900 text-white py-8')}>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg">About Us</h3>
          <p className="mt-2">We are dedicated to providing exceptional real estate services.</p>
        </div>
        <div>
          <h3 className="font-bold text-lg">Quick Links</h3>
          <ul className="mt-2">
            {siteConfig.links.nav.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg">Contact Info</h3>
          <p className="mt-2">{siteConfig.phone}</p>
          <p>{siteConfig.email}</p>
          <p>{siteConfig.address}</p>
        </div>
        <div>
          <h3 className="font-bold text-lg">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href={siteConfig.links.social[0].href} target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
              <Facebook />
            </a>
            <a href={siteConfig.links.social[1].href} target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page">
              <Twitter />
            </a>
            <a href={siteConfig.links.social[2].href} target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;