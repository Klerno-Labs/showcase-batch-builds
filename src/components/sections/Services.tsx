import { images } from "@/config/images";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Users, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

export function Services() {
  const services = [
    {
      title: "Business Strategy",
      description: "Comprehensive roadmaps for market entry, competitive positioning, and operational efficiency.",
      image: images["service-1"],
      icon: Lightbulb,
      price: "Starting at $2,500/mo"
    },
    {
      title: "Data Analytics",
      description: "Turn raw data into actionable insights. We implement dashboards and KPI tracking that drive decisions.",
      image: images["service-2"],
      icon: BarChart3,
      price: "Project-based pricing"
    },
    {
      title: "Team Optimization",
      description: "Workshops, organizational restructuring, and leadership coaching to maximize your human capital.",
      image: images["service-3"],
      icon: Users,
      price: "Starting at $1,800/workshop"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Solutions That <span className="text-primary-600">Move the Needle</span>
          </h2>
          <p className="text-lg text-gray-600">
            We don't do one-size-fits-all. Every engagement is tailored to your specific industry, size, and growth stage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  width={service.image.width}
                  height={service.image.height}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                  <service.icon className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-1">{service.description}</p>
                
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {service.price}
                  </span>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center text-sm font-semibold text-gray-700 group-hover:text-primary-600 transition-colors"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}