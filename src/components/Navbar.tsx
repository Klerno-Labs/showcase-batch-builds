"use client";
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="text-lg font-bold">Business Logo</Link>
        <button aria-label="Open menu" onClick={toggleMenu}>
          {isOpen ? 'Close' : 'Menu'}
        </button>
        <div className={cn("absolute top-0 left-0 w-full bg-white transition-transform transform", { 'translate-y-0': isOpen, 'translate-y-[-100%]': !isOpen })}>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/faq">FAQ</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;