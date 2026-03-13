import { images } from "@/config/images";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import Link from "next/link";

export const metadata = {
  title: "Home | Pegrio Business Solutions",
  description: "Welcome to Pegrio Business Solutions, your partner in achieving business excellence.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Elevate Your Business
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-white">
            Partner with us for innovative solutions that drive success.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact" className="bg-primary text-white py-3 px-6 rounded-lg shadow-lg hover:brightness-110 transition">
              Get Started
            </Link>
            <Link href="/about" className="border border-white text-white py-3 px-6 rounded-lg hover:bg-white hover:text-gray-900 transition">
              Learn More
            </Link>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-8 border-2 border-white rounded-full animate-bounce" />
        </div>
        <img
          src={images.hero.src}
          alt={images.hero.alt}
          width={images.hero.width}
          height={images.hero.height}
          priority={true}
          className="absolute inset-0 object-cover w-full h-full"
        />
      </section>
      {/* Additional sections can be added here */}
    </main>
  );
}