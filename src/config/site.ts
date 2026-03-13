export const siteConfig = {
  name: "Aspen Dental Studio",
  description: "Your trusted partner for comprehensive family dentistry with a gentle, patient-first approach.",
  url: "https://example.com",
  email: "info@aspendentalstudio.com",
  phone: "(512) 555-0199",
  address: "4521 Westheimer Rd, Suite 200, Houston, TX 77027",
  hours: {
    monday: "8am - 6pm",
    tuesday: "8am - 6pm",
    wednesday: "8am - 6pm",
    thursday: "8am - 6pm",
    friday: "8am - 6pm",
    saturday: "9am - 2pm",
    sunday: "Closed",
  },
  socialLinks: {
    facebook: "https://facebook.com/aspendentalstudio",
    instagram: "https://instagram.com/aspendentalstudio",
    twitter: "https://twitter.com/aspendentalstudio",
  },
  links: {
    menu: [
      { title: "Home", href: "/" },
      { title: "About", href: "/about" },
      { title: "Services", href: "/services" },
      { title: "Contact", href: "/contact" },
    ],
  },
} as const;