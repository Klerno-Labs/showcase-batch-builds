import { Metadata } from "next";
import Link from "next/link";
import { images } from "@/config/images";
import { CTASection } from "@/components/sections/cta-section";
import { Shield, Users, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the history and values of Summit Legal Advisors.",
};

const values = [
  { icon: Shield, title: "Integrity First", desc: "We adhere to the highest ethical standards, providing honest assessments even when the truth is difficult." },
  { icon: Users, title: "Client-Centric", desc: "Your goals are our. We listen, understand, and tailor our strategy to your specific needs." },
  { icon: Target, title: "Aggressive Advocacy", desc: "We fight tirelessly for your rights, whether in the boardroom or the courtroom." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary text-white py-32">
        <div className="container mx-auto px-6 text-center">
          <p className="text-accent font-accent font-bold uppercase tracking-widest mb-4">Since 1985</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">Our History & Values</h1>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg mx-auto text-text-muted">
            <p className="first-letter:text-5xl first-letter:font-heading first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3">
              ummit Legal Advisors began with a simple belief: that everyone deserves access to top-tier legal representation. Over the last three decades, we have grown from a small boutique firm into one of Houston's most respected names in business and personal litigation.
            </p>
            <p>
              We have weathered economic shifts and changes in the legal landscape, but our core mission has never wavered. We take pride in our deep roots in the community and our long-standing relationships with local courts and businesses.
            </p>
            <p>
              Today, our firm handles cases ranging from multi-million dollar corporate disputes to sensitive family matters, always with the same level of dedication and attention to detail.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-lg text-text-muted">
              The principles that guide every decision we make.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-card text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-text-muted">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Meet The Team</h2>
            <p className="text-lg text-text-muted">
              Experienced attorneys ready to fight for you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group">
                <div className="overflow-hidden rounded-xl mb-4">
                  <img
                    src={images["team-1"].src}
                    alt="Attorney"
                    width={400}
                    height={400}
                    className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary">James Sterling</h3>
                <p className="text-accent text-sm font-bold uppercase tracking-wide mb-2">Senior Partner</p>
                <p className="text-sm text-text-muted line-clamp-2">
                  Specializing in corporate litigation and high-stakes contract disputes with over 25 years of experience.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Work with Us?"
        buttonText="Schedule a Meeting"
      />
    </>
  );
}