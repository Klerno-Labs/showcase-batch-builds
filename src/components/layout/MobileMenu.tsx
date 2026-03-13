"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export function MobileMenu({ isOpen, toggleMenu }: MobileMenuProps) {
  return (
    <div className={cn("fixed inset-0 z-40 bg-black/50 transition-opacity", isOpen ? "opacity-100" : "opacity-0 pointer-events-none")}>
      <div className={cn("fixed top-0 right-0 w-64 h-full bg-white shadow-lg transition-transform", isOpen ? "translate-x-0" : "translate-x-full")}>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={toggleMenu} aria-label="Close menu" className="text-gray-600">
            &times;
          </button>
        </div>
        <nav className="mt-4">
          <ul className="space-y-2">
            {siteConfig.links.menu.map((link) => (
              <li key={link.title}>
                <a href={link.href} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}