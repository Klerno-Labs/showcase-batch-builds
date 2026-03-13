import { siteConfig } from "@/config/site";

export const metadata = {
  title: "FAQ | " + siteConfig.name,
  description: "Frequently asked questions about Pegrio Business Solutions.",
  openGraph: {
    title: "FAQ | " + siteConfig.name,
    description: "Frequently asked questions about Pegrio Business Solutions.",
    url: siteConfig.url + "/faq",
    images: [],
  },
};

export default function FAQ() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-xl font-semibold">What services do you offer?</h3>
            <p className="mt-2 text-base leading-relaxed">
              We offer consulting, data analysis, and workshops tailored to your business needs.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">How can I contact you?</h3>
            <p className="mt-2 text-base leading-relaxed">
              You can contact us via our contact form or by calling (512) 555-0199.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">What are your business hours?</h3>
            <p className="mt-2 text-base leading-relaxed">
              Our business hours are Mon-Fri: 8am-6pm, Sat: 9am-2pm, Sun: Closed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}