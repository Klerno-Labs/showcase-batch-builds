import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold">About Us</h3>
          <p className="mt-2">Learn more about our mission and values.</p>
        </div>
        <div>
          <h3 className="font-bold">Quick Links</h3>
          <ul className="mt-2">
            {siteConfig.navigation.map((link) => (
              <li key={link.title}>
                <Link href={link.href} className="hover:underline">{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Contact Info</h3>
          <p className="mt-2">{siteConfig.address}</p>
          <p>{siteConfig.phone}</p>
          <p>{siteConfig.email}</p>
        </div>
        <div>
          <h3 className="font-bold">Follow Us</h3>
          <ul className="mt-2">
            <li>
              <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
            </li>
            <li>
              <a href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
            <li>
              <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center py-4 border-t border-gray-700">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}