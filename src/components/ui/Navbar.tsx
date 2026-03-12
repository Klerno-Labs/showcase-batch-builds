import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";
import { Phone } from "lucide-react";
import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <Link href="/" className="text-xl font-bold">{siteConfig.name}</Link>
        <nav className="flex space-x-4">
          {siteConfig.links.menu.map((link) => (
            <Link key={link.label} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center">
          <Phone className="mr-2" />
          <span>{siteConfig.phone}</span>
        </div>
      </div>
    </header>
  );
};