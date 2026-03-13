import Image from "next/image";
import { images } from "@/config/images";
import { BarChart3, Users, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Strategic Planning",
    description:
      "Comprehensive roadmaps tailored to your market position. We analyze trends and competitor moves to keep you ahead.",
    icon: Lightbulb,
    image: "service-1",
  },
  {
    title: "Data Analytics",
    description:
      "Turn raw data into actionable intelligence. Our advanced dashboards provide real-time visibility into your KPIs.",
    icon: BarChart3,
    image: "service-2",
  },
  {
    title: "Team Optimization",
    description:
      "Enhance workforce productivity through structured workshops and modern management methodologies.",
    icon: Users,
    image: "service-3",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Our Expertise
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            We provide a suite of high-impact services designed to address the complexities of the modern business landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={images[service.image as keyof typeof images].src}
                  alt={images[service.image as keyof typeof images].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors duration-300" />
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}