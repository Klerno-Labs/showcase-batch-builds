const services = [
  { name: "Women's Haircut", price: "$65+", description: "Stylish cuts tailored to you." },
  { name: "Men's Haircut", price: "$45+", description: "Classic and modern styles." },
  { name: "Balayage", price: "$150+", description: "Soft, natural highlights." },
];

const ServicesAccordion = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.name} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
              <p className="font-bold">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesAccordion;