import { Metadata } from "next";
import { CTASection } from "@/components/sections/cta-section";
import { Scale, Building2, Users, FileCheck, Gavel, Briefcase } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Practice Areas",
  description: "Full list of legal services provided by Summit Legal Advisors.",
};

const services = [
  { icon: Briefcase, title: "Corporate Law", desc: "Entity formation, mergers & acquisitions, contract negotiation, and shareholder disputes." },
  { icon: Scale, title: "Civil Litigation", desc: "Aggressive representation in breach of contract, fraud, and partnership dissolution cases." },
  { icon: Building2, title: "Real Estate", desc: "Commercial and residential transactions, title disputes, construction litigation, and zoning issues." },
  { icon: Users, title: "Family Law", desc: "Divorce, child custody and support, prenuptial agreements, and adoption proceedings." },
  { icon: Gavel, title: "Probate & Estates", desc: "Wills, trusts, estate planning, and probate administration to protect your legacy." },
  { icon: FileCheck, title: "Estate Planning", desc: "Comprehensive strategies to minimize tax liability and ensure your wishes are honored." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">Our Practice Areas</h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            We provide comprehensive legal solutions tailored to your specific needs. Explore our areas of expertise below.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white border border-gray-100 p-8 rounded-xl shadow-card hover:shadow-lg transition-all duration-300 border-t-4 border-transparent hover:border-accent">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-text-muted mb-6 leading-relaxed min-h-[60px]">{service.desc}</p>
                <Link href="/contact" className="inline-flex items-center font-accent text-sm font-bold uppercase tracking-wide text-primary hover:text-accent transition-colors">
                  Contact Specialist
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">Don't see your specific issue?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Law is complex, and many issues overlap. Contact us for a consultation to discuss your unique situation.
          </p>
          <Link href="/contact" className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}