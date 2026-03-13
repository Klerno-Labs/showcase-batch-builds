```typescript
import { images } from '@/config/images';

export const metadata = {
  title: 'Our Services | General Business',
  description: 'Explore the services we offer to help your business succeed.',
  openGraph: {
    title: 'Our Services | General Business',
    description: 'Explore the services we offer to help your business succeed.',
    url: 'https://example.com/services',
    images: [
      images.service-1.src,
    ],
  },
};

export default function Services() {
  return (
    <main>
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Services</h1>
          <p className="text-lg leading-relaxed text-gray-600 mt-4">
            We offer a range of services tailored to meet the unique needs of your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
            <div className="p-6 md:p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <img
                src={images['service-1'].src}
                alt={images['service-1'].alt}
                width={images['service-1'].width}
                height={images['service-1'].height}
                className="rounded-xl"
              />
              <h2 className="text-xl font-semibold mt-4">Consulting</h2>
              <p className="text-base leading-relaxed text-gray-600">
                Expert consulting services to guide your business strategy.
              </p>
            </div>
            <div className="p-6 md:p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <img
                src={images['service-2'].src}
                alt={images['service-2'].alt}
                width={images['service-2'].width}
                height={images['service-2'].height}
                className="rounded-xl"
              />
              <h2 className="text-xl font-semibold mt-4">Data Analysis</h2>
              <p className="text-base leading-relaxed text-gray-600">
                Comprehensive data analysis to inform your business decisions.
              </p>
            </div>
            <div className="p-6 md:p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <img
                src={images['service-3'].src}
                alt={images['service-3'].alt}
                width={images['service-3'].width}
                height={images['service-3'].height}
                className="rounded-xl"
              />
              <h2 className="text-xl font-semibold mt-4">Workshops</h2>
              <p className="text-base leading-relaxed text-gray-600">
                Interactive workshops to enhance team collaboration and skills.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
```