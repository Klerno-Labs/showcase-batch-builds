const addOns = [
  { name: "Deep Conditioning Treatment", price: "$30", description: "Revitalize your hair with our nourishing treatment." },
  { name: "Scalp Massage", price: "$20", description: "Relax and rejuvenate with a soothing scalp massage." },
];

const AddOnsSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Add-Ons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addOns.map((addOn) => (
            <div key={addOn.name} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{addOn.name}</h3>
              <p className="text-gray-600">{addOn.description}</p>
              <p className="font-bold">{addOn.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddOnsSection;