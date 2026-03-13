import { images } from "@/config/images";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";

export const metadata = {
  title: siteConfig.name,
  description: "Welcome to Pegrio Business Solutions, your partner in business growth.",
  openGraph: {
    title: siteConfig.name,
    description: "Welcome to Pegrio Business Solutions, your partner in business growth.",
    url: siteConfig.url,
    images: [images.hero.src],
  },
};

export default function Home() {
  return (
    <motion.section
      className="min-h-[80vh] flex flex-col justify-center items-center bg-gray-50"
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
          Elevate Your Business
        </h1>
        <p className="mt-4 text-lg leading-relaxed">
          Partner with us for innovative solutions that drive growth and success.
        </p>
        <div className="mt-8">
          <a href="#contact" className="bg-primary text-white py-3 px-6 rounded-lg shadow-lg hover:brightness-110 transition">
            Get Started
          </a>
        </div>
      </div>
      <motion.div
        className="absolute bottom-4 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <span className="text-2xl">⬇️</span>
      </motion.div>
    </motion.section>
  );
}