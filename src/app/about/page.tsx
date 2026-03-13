import { Metadata } from "next";
import { images } from "@/config/images";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Pegrio's history, mission, and the team behind our success.",
  openGraph: {
    images: [images["hero-alt"].src],
  },
};

export default function AboutPage() {
  const team = [
    {
      name: "Alex Rivera",
      role: "Chief Executive Officer",
      bio: "With over 15 years in strategic consulting, Alex leads Pegrio with a vision for sustainable, data-backed growth.",
      image: "team-1",
    },
    {
      name: "Jordan Lee",
      role: "Head of Analytics",
      bio: "Jordan transforms complex datasets into clear, actionable strategies that drive ROI for our clients.",
      image: "gallery-1",
    },
    {
      name: "Casey Smith",
      role: "Director of Operations",
      bio: "Casey ensures that every project runs smoothly, bridging the gap between big ideas and flawless execution.",
      image: "gallery-2",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pb-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Driving Change, Delivering Value
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We are a collective of thinkers, builders, and problem-solvers dedicated to elevating businesses to their peak potential.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Our Story
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                Pegrio started with a simple observation: businesses often have access to data, but lack the narrative that connects it to strategy. Founded in Houston, TX, we set out to bridge that gap.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                Over the last decade, we have evolved from a small boutique consultancy to a full-service strategic partner. Our approach remains the same—listen first, analyze second, and execute with precision.
              </p>
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
                <div>
                  <p className="text-4xl font-bold text-blue-600">10+</p>
                  <p className="text-sm text-slate-500 mt-1">Years Active</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-blue-600">200+</p>
                  <p className="text-sm text-slate-500 mt-1">Projects</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-blue-600">50M+</p>
                  <p className="text-sm text-slate-500 mt-1">Revenue Generated</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-blue-600">98%</p>
                  <p className="text-sm text-slate-500 mt-1">Retention</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={images["hero-alt"].src}
                alt={images["hero-alt"].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Meet The Leadership
            </h2>
            <p className="text-lg text-slate-600">
              Experienced professionals guiding your path to success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-64 w-full relative">
                  <Image
                    src={images[member.image as keyof typeof images].src}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Join Our Team</h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
          We are always looking for talented individuals to join our growing family.
        </p>
        <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-slate-900">
          <Link href="/contact">View Openings</Link>
        </Button>
      </section>
    </>
  );
}