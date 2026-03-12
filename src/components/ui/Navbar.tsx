"use client";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="flex justify-between items-center p-4">
        <div className="text-xl font-bold">Wagmore Dog Grooming</div>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-gray-700 hover:text-primary">Home</a>
          <a href="/about" className="text-gray-700 hover:text-primary">About</a>
          <a href="/services" className="text-gray-700 hover:text-primary">Services</a>
          <a href="/contact" className="text-gray-700 hover:text-primary">Contact</a>
        </div>
        <button aria-label="Open menu" className="md:hidden">
          {/* Hamburger icon */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;