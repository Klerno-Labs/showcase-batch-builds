import { HeroSplit } from "@/components/sections/HeroSplit";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { CallToAction } from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <HeroSplit
        headline="Smile with Confidence, Not with Anxiety"
        subtext="Experience gentle, patient-first dental care at Aspen Dental Studio."
        ctaText="Book Your Appointment"
      />
      <TrustBar />
      <ServicesGrid />
      <Testimonials />
      <CallToAction />
    </>
  );
}