```typescript
import { images } from "@/config/images";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aspen Dental Studio - Family Dentistry in Houston, TX",
  description: "Experience gentle, patient-first family dentistry at Aspen Dental Studio. Book your appointment today!",
  openGraph: {
    title: "Aspen Dental Studio - Family Dentistry in Houston, TX",
    description: "Experience gentle, patient-first family dentistry at Aspen Dental Studio. Book your appointment today!",
    images: [images.hero.src],
  },
};

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <SocialProofBar />
      <ServicesGrid />
      <AboutPreview />
      <TestimonialsSection />
      <CTABanner />
      <Footer />
    </main>
  );
}
```