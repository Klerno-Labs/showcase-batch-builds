import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Maria L.",
    role: "CEO, TechFlow Inc.",
    content:
      "Apex Strategic completely transformed our operational workflow. We've seen a 40% increase in efficiency within just three months. Their team is professional, insightful, and results-driven.",
  },
  {
    name: "James T.",
    role: "Director of Operations, LogiCorp",
    content:
      "I was skeptical about consulting firms, but Apex proved me wrong. They didn't just give us a report; they worked with our staff to implement real changes that stuck. Highly recommended for any growing business.",
  },
  {
    name: "Sarah C.",
    role: "Founder, GreenSpace",
    content:
      "The digital transformation services provided by Apex were top-notch. They migrated our entire infrastructure to the cloud with zero downtime. The ongoing support has been invaluable.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Don't just take our word for it. Here is what business leaders are
            saying about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl relative"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
              <div className="absolute top-6 right-6 text-gray-200">
                <span className="text-6xl font-serif leading-none">&ldquo;</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}