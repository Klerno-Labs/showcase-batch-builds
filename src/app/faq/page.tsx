import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Pegrio's services, pricing, and process.",
};

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "While we have experience across various sectors including healthcare, logistics, technology, and retail, our core expertise lies in operational strategy and data analytics which applies universally to any business looking to scale."
  },
  {
    question: "How long does a typical consulting engagement last?",
    answer: "It varies by project scope. Strategy workshops can be completed in 2-4 weeks, while full operational overhauls typically take 3-6 months. We offer both short-term project-based work and long-term retainers."
  },
  {
    question: "Do you work with startups or only established companies?",
    answer: "We work with both! For startups, we focus on scalable infrastructure and market entry strategy. For established firms, we focus on optimization, efficiency, and change management."
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer flexible pricing including hourly rates for ad-hoc advisory, project-based pricing for specific deliverables, and monthly retainers for ongoing partnership. Contact us for a custom quote."
  },
  {
    question: "Are your consultants local to Houston?",
    answer: "Yes, our core leadership team is based in Houston, though we serve clients globally. We believe in face-to-face interaction when possible for strategy sessions."
  }
];

export default function FAQPage() {
  return (
    <main>
      <section className="bg-gray-50 pt-16 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600">
              Everything you need to know about working with Pegrio.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          
          <div className="mt-16 text-center max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-sm border border-gray-100">
             <h3 className="text-xl font-bold text-gray-900 mb-3">Still have questions?</h3>
             <p className="text-gray-600 mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
             <a href="/contact" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
               Contact Us
             </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-0 text-gray-600 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
           <p className="pt-4">{answer}</p>
        </div>
      )}
    </div>
  );
}