import ContactForm from "@/components/sections/ContactForm";
import { MapPin, Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Pegrio. Schedule a consultation or visit our Houston office at Westheimer Rd.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-gray-50 pt-16 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600">
              Whether you have a question about our services, pricing, or just want to say hello, we are here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Office</div>
                      <div className="text-gray-600">
                        4521 Westheimer Rd, Suite 200<br />
                        Houston, TX 77027
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <a href="tel:+17135550123" className="text-primary-600 hover:text-primary-700">
                        (713) 555-0123
                      </a>
                      <div className="text-sm text-gray-500">Mon-Fri 8am-6pm</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <a href="mailto:info@pegrio.com" className="text-primary-600 hover:text-primary-700">
                        info@pegrio.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden relative">
                 {/* Using a static image for map to avoid API keys in this template */}
                 <img 
                   src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=600&h=400&fit=crop" 
                   alt="Map Location" 
                   className="w-full h-full object-cover grayscale"
                 />
                 <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <a href="https://maps.google.com/?q=4521+Westheimer+Rd+Houston+TX" target="_blank" rel="noopener noreferrer" className="bg-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm text-gray-900 hover:bg-gray-50 transition-colors">
                      Open in Google Maps
                    </a>
                 </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}