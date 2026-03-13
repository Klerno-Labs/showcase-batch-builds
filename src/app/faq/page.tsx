const FAQPage = () => {
  return (
    <main className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">What services do you offer?</h2>
            <p className="text-gray-600">We offer a range of business services including consulting, marketing solutions, and financial advisory.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">How can I contact you?</h2>
            <p className="text-gray-600">You can reach us via our contact form or by calling (512) 123-4567.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">What are your business hours?</h2>
            <p className="text-gray-600">Our business hours are Monday to Friday from 8 AM to 6 PM, and Saturday from 9 AM to 2 PM.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FAQPage;