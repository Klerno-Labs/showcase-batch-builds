// ── Image Configuration ──────────────────────────────────────────────
// ✏️  HOW TO CHANGE IMAGES:
// 1. Find the slot you want to change below (e.g. "hero", "about", "service-1")
// 2. Replace the "src" URL with your own image URL
// 3. Update the "alt" text to describe the new image
// 4. Save — every component on the site updates automatically
//
// All components import from this file. This is the ONLY file you need
// to edit to swap any image on the entire website.

export const images = {
  // Homepage hero banner — the first image visitors see
  "hero": {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2071&auto=format&fit=crop",
    alt: "Modern open office space with natural light",
    width: 1200,
    height: 800,
  },

  // Alternative hero image (used on inner pages or as fallback)
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop",
    alt: "Professional business environment",
    width: 1200,
    height: 800,
  },

  // About page or About section on homepage
  "about": {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076&auto=format&fit=crop",
    alt: "Diverse team of professionals meeting",
    width: 1200,
    height: 800,
  },

  // First service card image
  "service-1": {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2073&auto=format&fit=crop",
    alt: "Legal documents and pen on desk",
    width: 1200,
    height: 800,
  },

  // Second service card image
  "service-2": {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1974&auto=format&fit=crop",
    alt: "Modern real estate architecture",
    width: 1200,
    height: 800,
  },

  // Third service card image
  "service-3": {
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2069&auto=format&fit=crop",
    alt: "Hands joined together in agreement",
    width: 1200,
    height: 800,
  },

  // Gallery image 1
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop",
    alt: "Attorney reviewing case files",
    width: 1200,
    height: 800,
  },

  // Gallery image 2
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop",
    alt: "Law library with leather books",
    width: 1200,
    height: 800,
  },

  // Team member photo
  "team-1": {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop",
    alt: "Senior Attorney Portrait",
    width: 800,
    height: 800,
  },

  // Gallery image 3
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
    alt: "Justice scales abstract",
    width: 1200,
    height: 800,
  },

  // Call-to-action section background
  "cta": {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop",
    alt: "Attorney working late at office",
    width: 1200,
    height: 800,
  },

  // Testimonials section background or decoration
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
    alt: "Corporate meeting room",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;