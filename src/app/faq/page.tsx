import { cn } from "@/lib/cn";

export const metadata = {
  title: "FAQ | Pegrio Business Solutions",
  description: "Frequently asked questions about Pegrio Business Solutions.",
};

export default function FAQ() {
  return (
    <main className="min-h-screen">
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold">What services do you offer?</h3>
              <p className="mt-2 text-base leading-relaxed">
                We offer consulting, data analysis, and workshops tailored to your business needs.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold">How can I contact you?</h3>
              <p className="mt-2 text-base leading-relaxed">
                You can reach us via the contact form on our website or by calling (512) 555-0199.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold">What are your business hours?</h3>
              <p className="mt-2 text-base leading-relaxed">
                Our hours are Monday to Friday from 8 am to 6 pm, and Saturday from 9 am to 2 pm.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}