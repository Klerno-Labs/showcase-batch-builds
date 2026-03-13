import { images } from "./images";

export const siteConfig = {
  name: "Pegrio",
  description: "Pegrio delivers innovative business solutions tailored to drive growth and efficiency for modern enterprises.",
  url: "https://pegrio.com",
  ogImage: images["hero"].src,
  links: {
    home: "/",
    about: "/about",
    services: "/services",
    contact: "/contact",
  },
  contact: {
    email: "info@pegrio.com",
    phone: "(713) 555-0198",
    address: "4521 Westheimer Rd, Suite 200, Houston, TX 77027",
  },
  socials: [
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: "Twitter",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: "Linkedin",
    },
    {
      name: "GitHub",
      href: "https://github.com",
      icon: "Github",
    },
  ],
};