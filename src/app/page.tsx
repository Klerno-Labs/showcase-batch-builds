import { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { Cta } from "@/components/sections/cta";
import { ContactForm } from "@/components/contact-form";
import { images } from "@/config/images";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home",
  description: "Strategic business solutions for modern enterprises.",
  openGraph: {
    images: [images.hero.src],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      
      {/* About Teaser Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={images.about.src}
                alt={images.about.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Who We Are
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                Founded in 2015, Pegrio has helped over 200 businesses navigate the complexities of the digital age. We believe that true growth comes from a combination of human insight and data-driven precision.
              </p>
              <p className="text-base leading-relaxed text-slate-600">
                Our team consists of industry veterans, data scientists, and creative strategists working in unison to deliver results that matter. We don't just give advice; we partner with you to implement change.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      
      {/* Contact Section on Home */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Get In Touch
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                Have a project in mind? We'd love to hear from you. Fill out the form and our team will get back to you within 24 hours.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Visit Us</h4>
                    <p className="text-slate-600">4521 Westheimer Rd, Suite 200</p>
                    <p className="text-slate-600">Houston, TX 77027</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Call Us</h4>
                    <p className="text-slate-600">(713) 555-0198</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}