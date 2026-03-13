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
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Modern open office workspace with natural light flooding in",
    width: 1200,
    height: 800,
  },

  // Alternative hero image (used on inner pages or as fallback)
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop",
    alt: "Professional team collaborating on a project in a bright office",
    width: 1200,
    height: 800,
  },

  // About page or About section on homepage
  "about": {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=800&fit=crop",
    alt: "Business professionals engaged in a serious meeting in a modern room",
    width: 1200,
    height: 800,
  },

  // First service card image
  "service-1": {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop",
    alt: "Creative professionals brainstorming together with sticky notes",
    width: 1200,
    height: 800,
  },

  // Second service card image
  "service-2": {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    alt: "Data analytics dashboard on a computer screen showing growth metrics",
    width: 1200,
    height: 800,
  },

  // Third service card image
  "service-3": {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop",
    alt: "Team workshop session with colleagues discussing strategy",
    width: 1200,
    height: 800,
  },

  // Gallery image 1
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=800&fit=crop",
    alt: "Professional handshake sealing a business deal",
    width: 1200,
    height: 800,
  },

  // Gallery image 2
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&h=800&fit=crop",
    alt: "Modern conference room with a beautiful city view",
    width: 1200,
    height: 800,
  },

  // Team member photo
  "team-1": {
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&h=800&fit=crop",
    alt: "Diverse team celebrating success with high fives",
    width: 1200,
    height: 800,
  },

  // Gallery image 3
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1531297461136-82lw9z21167e?w=1200&h=800&fit=crop",
    alt: "Technology workspace with multiple screens showing code",
    width: 1200,
    height: 800,
  },

  // Call-to-action section background
  "cta": {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop",
    alt: "Innovation concept with light bulb and technology elements",
    width: 1200,
    height: 800,
  },

  // Testimonials section background or decoration
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&fit=crop",
    alt: "Professional business environment focusing on collaboration",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;