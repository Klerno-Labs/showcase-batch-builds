import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";
import { Facebook, Instagram } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-bold">{siteConfig.name}</h2>
            <p>{siteConfig.address}</p>
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.email}</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
              <Facebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">
              <Instagram />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};