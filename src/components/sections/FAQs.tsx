const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of electrical services including residential, commercial, and emergency repairs.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, we are fully licensed and insured to provide electrical services.",
  },
  {
    question: "What are your business hours?",
    answer: "We are open Monday to Friday from 8am to 6pm, and Saturday from 9am to 2pm.",
  },
];

const FAQs: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
      <div className="mt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b py-4">
            <h3 className="font-semibold">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;