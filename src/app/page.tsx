import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { CTA } from "@/components/sections/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Houston's premier business consulting firm for strategy and growth.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTA />
    </>
  );
}