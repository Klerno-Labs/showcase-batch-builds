import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { ContactForm } from "@/components/sections/contact-form";
import { Footer } from "@/components/footer";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaSection } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Apex Strategic | Business Consulting & Solutions",
  description: "Expert strategic consulting and innovative business solutions in Houston, TX. We help businesses optimize operations and accelerate growth.",
  openGraph: {
    title: "Apex Strategic | Business Consulting & Solutions",
    description: "Expert strategic consulting and innovative business solutions in Houston, TX.",
    images: [{ url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop" }],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* About Section Placeholder (Simplified for single file structure) */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                Your Trusted Partner in Growth
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2010, Apex Strategic has helped over 200 businesses
                achieve their operational goals. We believe in a data-driven
                approach combined with human creativity to solve complex
                challenges.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team consists of industry veterans with diverse backgrounds
                in finance, technology, and management. We don't just give
                advice; we work alongside you to implement sustainable change.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
               {/* Using a generic about image placeholder logic */}
               <div className="h-96 w-full bg-gray-200 flex items-center justify-center text-gray-500">
                  [About Image Placeholder]
               </div>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Testimonials />
      <CtaSection />
      <ContactForm />
      <Footer />
    </main>
  );
}