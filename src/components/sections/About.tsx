import { images } from "@/config/images";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function About() {
  const features = [
    {
      title: "Data-Driven Decisions",
      description: "We move beyond guesswork. Our strategies are built on rigorous market analysis and performance metrics.",
      icon: "📊"
    },
    {
      title: "Local Expertise",
      description: "Deep roots in the Houston business landscape means we understand the unique challenges of the Texas market.",
      icon: "🤝"
    },
    {
      title: "Sustainable Scaling",
      description: "We don't just fix problems; we build systems that allow your business to grow efficiently for years to come.",
      icon: "🚀"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={images.about.src}
                alt={images.about.alt}
                width={images.about.width}
                height={images.about.height}
                className="object-cover w-full h-[500px]"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-primary-50 rounded-2xl -rotate-3" />
            <div className="absolute -z-10 -top-6 -left-6 w-full h-full bg-primary-100 rounded-2xl rotate-3" />
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                Your Partners in <span className="text-primary-600">Long-Term Success</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2015, Apex Strategic Solutions was born from a simple idea: businesses deserve consulting that actually works, not just slide decks. We combine Fortune 500 experience with the agility of a boutique firm.
              </p>
            </motion.div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center text-2xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}