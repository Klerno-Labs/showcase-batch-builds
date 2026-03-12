export const images = {
  // Homepage hero banner — the first image visitors see
  hero: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Modern office workspace with natural light",
    width: 1200,
    height: 800,
  },

  // Alternative hero image (used on inner pages or as fallback)
  heroAlt: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Professional team collaborating in bright office",
    width: 1200,
    height: 800,
  },

  // About page or About section on homepage
  about: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Business professionals in modern meeting room",
    width: 1200,
    height: 800,
  },

  // First service card image
  service1: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Creative professionals working together",
    width: 1200,
    height: 800,
  },

  // Second service card image
  service2: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Data analytics dashboard on screen",
    width: 1200,
    height: 800,
  },

  // Third service card image
  service3: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Team workshop and brainstorming session",
    width: 1200,
    height: 800,
  },

  // Gallery image 1
  gallery1: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Professional handshake in business setting",
    width: 1200,
    height: 800,
  },

  // Gallery image 2
  gallery2: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Modern conference room with city view",
    width: 1200,
    height: 800,
  },

  // Team member photo
  team1: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Diverse team celebrating success",
    width: 1200,
    height: 800,
  },

  // Gallery image 3
  gallery3: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Technology workspace with multiple screens",
    width: 1200,
    height: 800,
  },

  // Call-to-action section background
  cta: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Innovation and technology concept",
    width: 1200,
    height: 800,
  },

  // Testimonials section background or decoration
  testimonialBg: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Professional business environment",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;