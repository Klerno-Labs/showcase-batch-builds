import { images } from "@/config/images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Cta() {
  return (
    <section className="relative py-20 md:py-32 bg-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={images.cta.src}
          alt={images.cta.alt}
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
          Ready to Scale Your Business?
        </h2>
        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
          Join hundreds of successful companies that have leveraged Pegrio's expertise to achieve their goals. Let's build something great together.
        </p>
        <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-50 text-base font-semibold shadow-xl">
          <Link href="/contact">Schedule a Consultation</Link>
        </Button>
      </div>
    </section>
  );
}