import { images } from "@/config/images";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-8 z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium border border-primary-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Now accepting new clients for Q2
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.15]">
            Strategic Growth for <span className="text-primary-600">Modern Businesses</span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
            We transform complex challenges into actionable strategies. From digital transformation to market expansion, our Houston-based team drives results that matter.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group">
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" href="#about">
              View Our Work
            </Button>
          </div>
          
          <div className="pt-8 flex items-center gap-6 text-sm text-gray-500">
            <div className="flex -space-x-2">
               {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    {/* Placeholder avatars using solid colors for demo, ideally real photos */}
                    <div className={`w-full h-full ${i%2===0 ? 'bg-primary-200' : 'bg-primary-100'}`} />
                  </div>
               ))}
            </div>
            <p>Trusted by 50+ Texas businesses</p>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
            <Image
              src={images.hero.src}
              alt={images.hero.alt}
              width={images.hero.width}
              height={images.hero.height}
              priority={true}
              className="object-cover w-full h-[500px] lg:h-[600px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
          </div>
          
          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden sm:block max-w-xs border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Revenue Growth</p>
                <p className="text-2xl font-bold text-gray-900">+145%</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">Average client increase in the first year.</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.div>
    </section>
  );
}