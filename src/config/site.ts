export const siteConfig = {
  name: "Summit Legal Advisors",
  description: "Experienced law firm providing trusted legal counsel in business, real estate, and personal matters.",
  url: "https://summitlegaladvisors.com",
  links: {
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  contact: {
    phone: "(512) 555-0123",
    email: "info@summitlegaladvisors.com",
    address: "4521 Westheimer Rd, Suite 200, Houston, TX 77027",
  },
  nav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Practice Areas", href: "/services" },
    { title: "Results", href: "/#verdicts" },
    { title: "Contact", href: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;