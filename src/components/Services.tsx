import { images } from "@/config/images";
import Image from "next/image";
import { ArrowRight, BarChart, Users, Lightbulb } from "lucide-react";

const services = [
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Strategic Consulting",
    description: "Comprehensive market analysis and long-term planning to position your business for sustainable growth in competitive landscapes.",
    image: "service-1",
    link: "#contact"
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Digital Transformation",
    description: "Modernize your operations with cutting-edge technology integration, process automation, and workflow optimization.",
    image: "service-2",
    link: "#contact"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Organizational Change",
    description: "Expert guidance on mergers, acquisitions, and cultural alignment to ensure smooth transitions and team cohesion.",
    image: "service-3",
    link: "#contact"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Solutions Tailored to Your Ambitions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We offer a full suite of consulting services designed to address the unique challenges of modern enterprises. From strategy to execution, we are your partners in growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={images[service.image as keyof typeof images].src}
                  alt={images[service.image as keyof typeof images].alt}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                <a 
                  href={service.link}
                  className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}