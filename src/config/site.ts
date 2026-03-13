import type { MetadataRoute } from "next";

export const siteConfig = {
  name: "Pegrio Solutions",
  description: "Transforming businesses through innovative strategy and technology. We deliver results that drive growth.",
  url: "https://pegrionext.com",
  ogImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=630&fit=crop",
  links: {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
  },
  contact: {
    phone: "(512) 555-0123",
    email: "contact@pegrionext.com",
    address: "4521 Westheimer Rd, Suite 200, Houston, TX 77027",
  },
};

export type SiteConfig = typeof siteConfig;