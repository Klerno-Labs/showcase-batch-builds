const ServicesPage = () => {
  return (
    <main className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
        <ul className="space-y-4">
          <li className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold">Consulting Services</h2>
            <p className="text-gray-600">We offer expert consulting services to help businesses streamline their operations and improve efficiency. Pricing: $150 - $300 per hour.</p>
          </li>
          <li className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold">Marketing Solutions</h2>
            <p className="text-gray-600">Our marketing solutions are designed to enhance your brand visibility and drive customer engagement. Pricing: $500 - $2,000 per project.</p>
          </li>
          <li className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold">Financial Advisory</h2>
            <p className="text-gray-600">We provide financial advisory services to help you make informed decisions for your business. Pricing: $200 - $400 per hour.</p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default ServicesPage;