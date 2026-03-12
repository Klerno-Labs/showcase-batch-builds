export const FAQsSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">What services do you offer?</h3>
            <p>We offer grooming, boarding, daycare, and veterinary wellness services.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">How can I book an appointment?</h3>
            <p>You can book an appointment through our website or by calling us directly.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">What are your business hours?</h3>
            <p>We are open Monday to Friday from 8 AM to 6 PM, and Saturday from 9 AM to 2 PM. We are closed on Sundays.</p>
          </div>
        </div>
      </div>
    </section>
  );
};