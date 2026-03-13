import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { images } from "@/config/images";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Our Services",
  description: "Explore Pegrio's comprehensive consulting services including strategic planning, data analytics, and professional training.",
};

const services = [
  {
    id: 1,
    title: "Strategic Consulting",
    price: "Starting at $2,500/mo",
    description: "Comprehensive business strategy development including market analysis, competitive positioning, and long-term growth planning. Perfect for businesses preparing for scaling or pivoting.",
    features: [
      "Competitive Market Analysis",
      "SWOT & Risk Assessment",
      "3-Year Roadmap Development",
      "Quarterly Strategy Reviews"
    ],
    image: images["service-1"]
  },
  {
    id: 2,
    title: "Data Analytics & BI",
    price: "Project-Based Pricing",
    description: "Turn your data into decisions. We implement cutting-edge dashboards, automate reporting pipelines, and train your team to interpret key metrics effectively.",
    features: [
      "Custom Dashboard Design (PowerBI/Tableau)",
      "Data Pipeline Automation",
      "Predictive Modeling",
      "Staff Training & Documentation"
    ],
    image: images["service-2"]
  },
  {
    id: 3,
    title: "Corporate Workshops",
    price: "Starting at $1,500/session",
    description: "Interactive training sessions tailored to your team's specific needs. From leadership alignment to technical upskilling, we bring the classroom to your conference room.",
    features: [
      "Custom Curriculum Design",
      "On-site or Virtual Delivery",
      "Pre & Post-Assessment",
      "Take-home Resource Kits"
    ],
    image: images["service-3"]
  },
  {
    id: 4,
    title: "Process Optimization",
    price: "Starting at $3,000/mo",
    description: "Identify bottlenecks and streamline workflows. We map your current processes and implement lean methodologies to reduce waste and increase throughput.",
    features: [
      "Process Mapping & Auditing",
      "Lean/Six Sigma Implementation",
      "Workflow Automation Setup",
      "KPI Monitoring Systems"
    ],
    image: images.gallery1 // Using gallery slot as an example or reuse
  }
];

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-gray-50 pt-16 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Solutions for Every Stage of Growth
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you are a startup finding your footing or an established enterprise seeking optimization, our service tiers are designed to fit your budget and goals.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {services.map((service) => (
              <div key={service.id} className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
                <div className="w-full md:w-1/3 aspect-square md:aspect-[4/5] rounded-xl overflow-hidden relative flex-shrink-0">
                  <Image
                    src={service.id === 1 ? service.image.src : service.id === 2 ? service.image.src : service.id === 3 ? service.image.src : images.gallery1.src}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="text-primary-600 font-semibold mb-2">{service.price}</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                  <p className="text-gray-600 mb-6 flex-1">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="w-full md:w-auto">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            We understand that every business is unique. Contact us to discuss a tailored package that addresses your specific challenges.
          </p>
          <Button asChild variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-primary-600">
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}