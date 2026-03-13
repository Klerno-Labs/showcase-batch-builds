import { siteConfig } from "@/config/site";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold">About Us</h3>
            <p className="mt-2">{siteConfig.description}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              {siteConfig.links.menu.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p className="mt-2">{siteConfig.address}</p>
            <p className="mt-2">{siteConfig.phone}</p>
            <p className="mt-2">{siteConfig.email}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="mt-2 flex space-x-4">
              <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
                <Facebook />
              </a>
              <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">
                <Instagram />
              </a>
              <a href={siteConfig.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}