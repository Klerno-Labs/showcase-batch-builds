const Gallery = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop" alt="Gallery Image 1" className="rounded-xl mb-4" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop" alt="Gallery Image 2" className="rounded-xl mb-4" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop" alt="Gallery Image 3" className="rounded-xl mb-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;