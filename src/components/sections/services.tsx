import Image from "next/image";
import { images } from "@/config/images";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "service-1",
    title: "Strategic Consulting",
    description:
      "Data-driven strategies to optimize operations and accelerate growth. We analyze your market position to uncover hidden opportunities.",
  },
  {
    id: "service-2",
    title: "Digital Transformation",
    description:
      "Modernize your infrastructure with cutting-edge technology solutions. From cloud migration to automation, we future-proof your business.",
  },
  {
    id: "service-3",
    title: "Brand Development",
    description:
      "Craft a compelling narrative that resonates with your audience. Our design and content teams build brands that stand out and last.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Comprehensive Business Solutions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We combine industry expertise with innovative thinking to deliver
            results that matter.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            // Fix Issue #2: Use bracket notation for hyphenated keys
            const imageData = images[service.id as keyof typeof images];
            
            if (!imageData) return null;

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col h-full"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={imageData.src}
                    alt={imageData.alt}
                    width={imageData.width}
                    height={imageData.height}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    Learn more
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}