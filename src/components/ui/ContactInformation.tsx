const ContactInformation = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Information</h2>
        <p className="text-lg text-gray-700 text-center">You can reach us at:</p>
        <div className="text-center mt-4">
          <p className="text-gray-900">Phone: (512) 555-1234</p>
          <p className="text-gray-900">Email: info@luxecutsstudio.com</p>
          <p className="text-gray-900">Address: 4521 Westheimer Rd, Suite 200, Houston, TX 77027</p>
          <p className="text-gray-900">Hours: Mon-Fri: 8am-6pm, Sat: 9am-2pm, Sun: Closed</p>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;