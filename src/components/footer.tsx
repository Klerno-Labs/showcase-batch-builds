import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import Link from "next/link";

const FOOTER_LINKS = {
  About: [
    { name: "Our Story", href: "#about" },
    { name: "Team", href: "#about" },
    { name: "Careers", href: "#" },
  ],
  Quick: [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#services" },
    { name: "FAQ", href: "#faq" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight">Summit Ridge</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering businesses to reach new heights through strategic innovation and operational excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Twitter page"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn page"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {FOOTER_LINKS.About.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {FOOTER_LINKS.Quick.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>4521 Westheimer Rd<br />Suite 200, Houston, TX 77027</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+17135550123" className="hover:text-white transition-colors">
                  (713) 555-0123
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@summitridge.com" className="hover:text-white transition-colors">
                  info@summitridge.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-6 sm:px-6 lg:px-8 md:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Summit Ridge Consulting. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            {FOOTER_LINKS.Legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-500 hover:text-gray-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 rounded-full bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}