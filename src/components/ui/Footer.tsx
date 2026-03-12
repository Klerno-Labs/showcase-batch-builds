import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";
import { Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold">About Us</h3>
            <p className="mt-2">Wagmore Dog Grooming is dedicated to providing the best care for your pets.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-2">
              {siteConfig.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Contact Info</h3>
            <p className="mt-2">Phone: (512) 555-1234</p>
            <p>Email: info@wagmoredog.com</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page">
                <Twitter />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">
                <Instagram />
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
                <Facebook />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>© {new Date().getFullYear()} Wagmore Dog Grooming. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};