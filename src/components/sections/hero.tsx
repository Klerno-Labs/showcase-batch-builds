import Link from "next/link";
import Image from "next/image";
import { images } from "@/config/images";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              Elevate Your Business With{" "}
              <span className="text-blue-600">Strategic Insight</span>
            </h1>
            <p className="text-lg leading-relaxed text-slate-600 max-w-xl">
              Pegrio delivers data-driven strategies and innovative solutions to propel your
              enterprise forward. Transform your operations and unlock sustainable growth today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="text-base">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <Image
              src={images.hero.src}
              alt={images.hero.alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent mix-blend-multiply" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce text-slate-400">
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <ChevronDown className="h-5 w-5" />
      </div>
    </section>
  );
}