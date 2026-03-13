import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/config/images";
import { ArrowRight, BarChart3, Megaphone, Layers, Code, Zap } from "lucide-react";

const services = [
  {
    title: "Strategic Planning",
    desc: "Comprehensive business roadmaps that align your team and resources with your long-term vision.",
    price: "Starting at $5,000",
    image: "service-1",
    icon: Target,
  },
  {
    title: "Data Analytics",
    desc: "Turn raw data into actionable insights with our advanced reporting and visualization services.",
    price: "Starting at $3,500/mo",
    image: "service-2",
    icon: BarChart3,
  },
  {
    title: "Process Optimization",
    desc: "Streamline operations and eliminate waste to boost efficiency and reduce costs.",
    price: "Starting at $4,500",
    image: "service-3",
    icon: Layers,
  },
  {
    title: "Digital Marketing",
    desc: "Full-funnel marketing strategies from SEO and content to paid acquisition and retention.",
    price: "Starting at $4,000/mo",
    image: "gallery-1",
    icon: Megaphone,
  },
  {
    title: "Web Development",
    desc: "High-performance websites and web applications built to convert visitors into customers.",
    price: "Starting at $8,000",
    image: "gallery-2",
    icon: Code,
  },
  {
    title: "Change Management",
    desc: "Navigate organizational shifts smoothly with expert communication and training programs.",
    price: "Custom Quote",
    image: "gallery-3",
    icon: Zap,
  },
];

// Fix icon import for Target
import { Target } from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Services Designed for Growth
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From high-level strategy to tactical execution, we provide the full spectrum of business services you need to scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={images[service.image as keyof typeof images].src}
                    alt={images[service.image as keyof typeof images].alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {service.price}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 min-h-[3rem]">{service.desc}</p>
                  <a
                    href="/contact"
                    className="text-primary font-semibold inline-flex items-center hover:underline"
                  >
                    Get Started <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}