const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of electrical services including installations, repairs, and renovations.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, we are fully licensed and insured for your peace of mind.",
  },
  {
    question: "Do you provide emergency services?",
    answer: "Absolutely! We offer 24/7 emergency repair services.",
  },
];

export const FAQs: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
      <div className="mt-4 max-w-2xl mx-auto">
        {faqs.map((faq) => (
          <div key={faq.question} className="mb-4">
            <h3 className="font-semibold">{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};