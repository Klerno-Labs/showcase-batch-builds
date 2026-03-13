import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/config/images";
import { CheckCircle2, Users, Target, Award } from "lucide-react";

export default function AboutPage() {
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
              Building the Future of Business Since 2015
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Summit Strategy Group was founded on a simple belief: every business has untapped potential waiting to be unlocked. We exist to find it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]"
            >
              <Image
                src={images.about.src}
                alt={images.about.alt}
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                It started in a small coffee shop in downtown Houston. Three former corporate strategists realized that mid-market companies were underserved by high-priced consultants who left behind slide decks instead of results.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We decided to change that. We built Summit Strategy Group to be different—hands-on, accountable, and deeply invested in our clients' success. Today, we've helped over 200 businesses across Texas and beyond achieve sustainable growth.
              </p>
              <ul className="space-y-3">
                {["Over 200 clients served", "$50M+ revenue generated for clients", "95% client retention rate"].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide every decision we make.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Precision", desc: "We rely on data, not guesswork. Every recommendation is precise and actionable." },
              { icon: Users, title: "Partnership", desc: "We work alongside your team, sharing risks and celebrating wins together." },
              { icon: Award, title: "Excellence", desc: "We settle for nothing less than outstanding quality in everything we deliver." },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="p-8 bg-white rounded-xl shadow-sm text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}