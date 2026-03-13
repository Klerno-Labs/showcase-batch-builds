import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const testimonials = [
    {
      name: "Maria L.",
      role: "CEO, Lumina Tech",
      content: "Apex completely transformed our go-to-market strategy. We saw a 40% increase in qualified leads within three months. Their team feels like an extension of our own.",
      rating: 5
    },
    {
      name: "James T.",
      role: "Founder, Houston Logistics",
      content: "I was skeptical about consulting firms, but Apex was different. They didn't just give us a report; they helped us implement the changes and trained our staff.",
      rating: 5
    },
    {
      name: "Elena R.",
      role: "Director of Ops, Sterling Group",
      content: "The data analytics implementation was a game changer. We finally have real-time visibility into our margins. Best investment we made this year.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Trusted by Houston's <span className="text-primary-600">Best Leaders</span>
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here is what our partners have to say about working with Apex Strategic.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 relative border border-gray-100"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary-200" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary-500 text-primary-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}