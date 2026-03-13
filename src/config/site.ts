import { images } from "./images";

export const siteConfig = {
  name: "Summit Strategy Group",
  description: "Elevating businesses through strategic innovation, operational excellence, and data-driven growth.",
  url: "https://summitstrategygroup.com",
  ogImage: images.hero.src,
  links: {
    email: "info@summitstrategygroup.com",
    phone: "(512) 555-0123",
    address: "4521 Westheimer Rd, Suite 200, Houston, TX 77027",
    socials: [
      { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
      { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
    ],
  },
  navItems: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "FAQ", href: "/faq" },
    { title: "Contact", href: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;