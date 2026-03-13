import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "While we have deep experience in logistics, finance, and technology, our strategic frameworks are industry-agnostic. We tailor our methodologies to fit the specific nuances of your market."
  },
  {
    question: "How long does a typical consulting engagement last?",
    answer: "Engagements vary based on scope. A diagnostic audit typically takes 2-4 weeks, while full-scale digital transformation projects can span 6-18 months. We offer flexible phased approaches."
  },
  {
    question: "Do you work with startups or only enterprise clients?",
    answer: "We work with both! For startups, we focus on scalability and go-to-market strategy. For enterprises, we focus on optimization and change management."
  },
  {
    question: "What makes Pegrio different from other firms?",
    answer: "We prioritize implementation over theory. We don't just hand you a deck and walk away; our team integrates with yours to ensure strategies are actually executed and measured."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Common questions about our process, pricing, and partnership model.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed animate-fade-in-up">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}