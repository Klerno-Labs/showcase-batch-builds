import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Pegrio Solutions and our services.",
};

export default function FAQPage() {
  const faqs = [
    {
      q: "What industries do you specialize in?",
      a: "While we have experience across various sectors, we specialize in Technology, Logistics, Finance, and Healthcare. Our adaptable methodology allows us to quickly understand niche markets."
    },
    {
      q: "How long does a typical consulting project take?",
      a: "Project timelines vary based on scope. A standard strategic audit takes 2-4 weeks, while full digital transformation projects can span 3-12 months. We provide a detailed roadmap during the discovery phase."
    },
    {
      q: "Do you work with small businesses or only enterprises?",
      a: "We work with businesses of all sizes! We have tailored packages for startups and small businesses looking to scale, as well as robust solutions for enterprise clients."
    },
    {
      q: "What is your pricing model?",
      a: "We offer flexible pricing including hourly consulting rates, fixed-price project fees, and retainer agreements for ongoing support. We'll discuss the best option for your budget and goals."
    },
    {
      q: "Are your solutions remote or on-site?",
      a: "We are a hybrid-first organization. We can operate 100% remotely, or we can deploy teams to your location depending on the project requirements and your preference."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Have questions? We have answers. If you can't find what you're looking for, reach out to our team.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-4">Can't find the answer you're looking for? Please chat to our friendly team.</p>
          <a href="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900">{question}</span>
        <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div 
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </motion.div>
  );
}