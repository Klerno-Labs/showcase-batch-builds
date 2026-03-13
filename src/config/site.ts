export const siteConfig = {
  name: "Pegrio",
  description: "Strategic business solutions for modern enterprises. We drive growth through innovation, data analytics, and digital transformation.",
  url: "https://pegrio.com",
  links: {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  contact: {
    email: "info@pegrio.com",
    phone: "(713) 555-0198",
    address: "4521 Westheimer Rd, Suite 200, Houston, TX 77027",
    hours: "Mon-Fri: 8am-6pm, Sat: 9am-2pm, Sun: Closed",
  },
  nav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "#services" },
    { title: "Contact", href: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;