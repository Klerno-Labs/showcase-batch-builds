```typescript
export const metadata = {
  title: 'FAQ | General Business',
  description: 'Frequently asked questions about our services.',
  openGraph: {
    title: 'FAQ | General Business',
    description: 'Frequently asked questions about our services.',
    url: 'https://example.com/faq',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop',
    ],
  },
};

export default function FAQ() {
  return (
    <main>
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Frequently Asked Questions</h1>
          <p className="text-lg leading-relaxed text-gray-600 mt-4">
            Here are some common questions we receive from our clients.
          </p>
          <div className="mt-8 space-y-4">
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold">What services do you offer?</h2>
              <p className="text-base leading-relaxed text-gray-600">
                We offer consulting, data analysis, and workshops tailored to your business needs.
              </p>
            </div>
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold">How can I contact you?</h2>
              <p className="text-base leading-relaxed text-gray-600">
                You can reach us through our contact form or by calling (512) 555-1234.
              </p>
            </div>
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold">What are your business hours?</h2>
              <p className="text-base leading-relaxed text-gray-600">
                Our hours are Monday to Friday, 8 AM to 6 PM, and Saturday 9 AM to 2 PM.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
```