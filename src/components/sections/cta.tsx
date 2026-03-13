import Image from "next/image";
import { images } from "@/config/images";

export function CtaSection() {
  const ctaImage = images["cta"];

  return (
    <section className="relative py-24 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Image
          src={ctaImage.src}
          alt={ctaImage.alt}
          fill
          className="object-cover"
          quality={90}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/80" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
          Ready to Scale Your Business?
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Join over 200 companies that have transformed their operations with
          Apex Strategic. Let's build your success story today.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-100 transition-all duration-200"
        >
          Schedule a Consultation
        </a>
      </div>
    </section>
  );
}