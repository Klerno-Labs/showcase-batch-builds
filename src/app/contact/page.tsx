import { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/config/site";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Summit Legal Advisors for a free consultation.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Schedule a confidential consultation. We are here to listen to your story and help you understand your legal options.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary mb-8">Contact Information</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-accent w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Phone</h3>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-text-muted hover:text-accent transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-accent w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Email</h3>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-text-muted hover:text-accent transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-accent w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Office</h3>
                    <p className="text-text-muted">
                      {siteConfig.contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-accent w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Hours</h3>
                    <p className="text-text-muted">
                      Mon-Fri: 8am - 6pm<br/>
                      Sat: 9am - 2pm
                    </p>
                  </div>
                </div>
              </div>

              {/* Static Map Placeholder (Gray style) */}
              <div className="rounded-xl overflow-hidden shadow-lg grayscale border border-gray-200">
                <iframe
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.contact.address)}&output=embed`}
                ></iframe>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary mb-8">Send a Message</h2>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}