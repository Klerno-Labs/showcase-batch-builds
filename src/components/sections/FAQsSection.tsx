"use client";
const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer grooming, boarding, daycare, and veterinary wellness services.",
  },
  {
    question: "How can I book an appointment?",
    answer: "You can book an appointment through our website or by calling us directly.",
  },
  {
    question: "What are your business hours?",
    answer: "We are open Monday to Friday from 8am to 6pm, and Saturday from 9am to 2pm.",
  },
];

const FAQsSection = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
      <div className="mt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQsSection;