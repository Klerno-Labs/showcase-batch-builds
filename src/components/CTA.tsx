import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary via-gray-900 to-gray-900"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Join the hundreds of companies that have accelerated their growth with Pegrio's strategic guidance. Let's build something great together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 text-lg"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="tel:+17135550199"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-white border border-gray-700 hover:bg-gray-800 transition-all duration-200 text-lg"
          >
            Call (713) 555-0199
          </Link>
        </div>
      </div>
    </section>
  );
}