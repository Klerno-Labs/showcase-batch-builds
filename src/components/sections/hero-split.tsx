import Image from "next/image";
import Link from "next/link";
import { images } from "@/config/images";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSplit() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-24 overflow-hidden bg-background">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 border border-accent/20">
            <CheckCircle className="w-4 h-4" />
            Top Rated Firm in Houston
          </div>
          <h1 className="font-heading text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
            Justice Without <br />
            <span className="text-accent">Compromise.</span>
          </h1>
          <p className="text-lg text-text-muted mb-8 max-w-lg leading-relaxed">
            Summit Legal Advisors provides aggressive representation for complex business, real estate, and personal legal matters. When your future is on the line, experience matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" variant="primary">
              <Link href="/contact">Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/#verdicts">View Results</Link>
            </Button>
          </div>
          <div className="mt-12 flex items-center gap-8 text-sm font-semibold text-text-muted">
            <div>
              <span className="block text-3xl font-heading text-primary">35+</span>
              <span>Years Experience</span>
            </div>
            <div className="w-px h-12 bg-muted"></div>
            <div>
              <span className="block text-3xl font-heading text-primary">$50M+</span>
              <span>Recovered</span>
            </div>
            <div className="w-px h-12 bg-muted"></div>
            <div>
              <span className="block text-3xl font-heading text-primary">98%</span>
              <span>Success Rate</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative lg:h-[600px] w-full"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10 lg:hidden" />
          <Image
            src={images["hero"].src}
            alt={images["hero"].alt}
            width={images["hero"].width}
            height={images["hero"].height}
            priority
            className="object-cover w-full h-full rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}