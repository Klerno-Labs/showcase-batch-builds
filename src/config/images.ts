export const images = {
  "hero": {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Professional home renovation project",
    width: 1200,
    height: 800,
  },
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Modern kitchen renovation with marble countertops",
    width: 1200,
    height: 800,
  },
  "about": {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Craftsman working on home improvement",
    width: 1200,
    height: 800,
  },
  "service-1": {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Beautiful modern home exterior",
    width: 1200,
    height: 800,
  },
  "service-2": {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Luxurious modern bathroom renovation",
    width: 1200,
    height: 800,
  },
  "service-3": {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Professional tradesperson at work",
    width: 1200,
    height: 800,
  },
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Modern home interior with natural light",
    width: 1200,
    height: 800,
  },
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Elegant living room with contemporary design",
    width: 1200,
    height: 800,
  },
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Clean organized workshop tools",
    width: 1200,
    height: 800,
  },
  "cta": {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Stunning home exterior at golden hour",
    width: 1200,
    height: 800,
  },
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Modern home with landscaped garden",
    width: 1200,
    height: 800,
  },
  "gallery-4": {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Contemporary house front entrance",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;