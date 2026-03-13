import { Metadata } from "next";
import { HeroSplit } from "@/components/sections/hero-split";
import { CTASection } from "@/components/sections/cta-section";
import { images } from "@/config/images";
import Image from "next/image";
import { Scale, UserCheck, FileText, Award } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "Summit Legal Advisors - Top rated law firm in Houston.",
};

const services = [
  { icon: Scale, title: "Corporate Law", desc: "Strategic counsel for businesses of all sizes, from formation to complex litigation.", link: "/services" },
  { icon: FileText, title: "Real Estate", desc: "Protecting your property investments with aggressive representation in disputes and transactions.", link: "/services" },
  { icon: UserCheck, title: "Family Law", desc: "Compassionate guidance through divorce, custody, and sensitive domestic matters.", link: "/services" },
];

const verdicts = [
  { amount: "$2.5M", case: "Wrongful Termination", type: "Employment Law" },
  { amount: "$1.8M", case: "Breach of Contract", type: "Corporate Litigation" },
  { amount: "$850K", case: "Property Dispute", type: "Real Estate" },
];

export default function Home() {
  return (
    <>
      <HeroSplit />
      
      {/* Trust Bar */}
      <div className="bg-gray-50 border-y border-gray-200 py-8 overflow-hidden">
        <div className="container mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale">
           {/* Simple text placeholders for logos to avoid external SVG dependencies */}
           <span className="font-heading font-bold text-xl">Super Lawyers</span>
           <span className="font-heading font-bold text-xl">Martindale-Hubbell</span>
           <span className="font-heading font-bold text-xl">Best Lawyers in America</span>
           <span className="font-heading font-bold text-xl">Texas Bar Association</span>
           <span className="font-heading font-bold text-xl">National Trial Lawyers</span>
        </div>
      </div>

      {/* Practice Areas */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Our Practice Areas</h2>
            <p className="text-lg text-text-muted">
              We specialize in complex legal matters that require sophisticated strategy and aggressive advocacy.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Link key={i} href={service.link} className="group block bg-white border border-gray-100 p-8 rounded-xl shadow-card hover:shadow-hover transition-all duration-300 border-t-4 border-transparent hover:border-accent">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-text-muted mb-4 leading-relaxed">{service.desc}</p>
                <span className="font-accent text-sm font-bold uppercase tracking-wide text-primary group-hover:underline">Learn More</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-block font-bold text-primary hover:text-accent underline underline-offset-4 decoration-2">View All Practice Areas</Link>
          </div>
        </div>
      </section>

      {/* Verdicts Section */}
      <section id="verdicts" className="py-24 bg-primary text-white relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Proven Results</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                We don't just practice law; we deliver justice. Our track record speaks for itself, with millions recovered for our clients in high-stakes litigation.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Award className="text-accent w-5 h-5" />
                  <span>Top 100 Trial Lawyers in Texas</span>
                </li>
                <li className="flex items-center gap-3">
                  <Award className="text-accent w-5 h-5" />
                  <span>Multi-million dollar verdicts secured</span>
                </li>
              </ul>
              <Link href="/contact" className="text-accent font-bold hover:text-white transition-colors underline underline-offset-4">See Case Results &rarr;</Link>
            </div>
            <div className="grid gap-6">
              {verdicts.map((v, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-lg">
                  <div className="text-3xl font-heading font-bold text-accent mb-2">{v.amount}</div>
                  <div className="text-xl font-bold text-white mb-1">{v.case}</div>
                  <div className="text-sm text-gray-400 uppercase tracking-widest">{v.type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Attorney Spotlight */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src={images["about"].src}
                alt={images["about"].alt}
                width={images["about"].width}
                height={images["about"].height}
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-accent text-primary p-8 rounded-xl shadow-xl hidden md:block">
                <div className="text-4xl font-heading font-bold">35+</div>
                <div className="text-sm font-bold uppercase tracking-wider">Years Experience</div>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">Why Choose Summit Legal?</h2>
              <p className="text-lg text-text-muted mb-6 leading-relaxed">
                Founded in 1985, Summit Legal Advisors has been a pillar of the Houston legal community. We combine old-school values of integrity and hard work with modern legal strategies.
              </p>
              <p className="text-text-muted mb-8 leading-relaxed">
                Unlike large firms where you are just a file number, we provide personalized attention to every case. Our partners are directly involved in strategy and execution, ensuring the best possible outcome for you and your family.
              </p>
              <Link href="/about" className="font-accent font-bold uppercase tracking-wide text-primary border-b-2 border-accent pb-1 hover:text-accent transition-colors">Meet Our Partners</Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}