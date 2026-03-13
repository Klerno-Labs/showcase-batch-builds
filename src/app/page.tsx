import { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Home",
  description: "Pegrio helps businesses navigate complexity and achieve sustainable growth through strategic consulting.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Pegrio?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine deep industry expertise with a data-driven approach to deliver measurable results. Our team is dedicated to your success.
          </p>
        </div>
      </section>
      <FAQ />
      <CTA />
      <Contact />
    </>
  );
}