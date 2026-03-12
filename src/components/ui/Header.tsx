"use client";
import React from 'react';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/cn';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className={cn('sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100')}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">{siteConfig.name}</Link>
        <nav>
          <ul className="flex space-x-4">
            {siteConfig.links.nav.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;