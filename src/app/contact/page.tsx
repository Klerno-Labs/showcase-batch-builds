import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/config/site";
import { MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Pegrio for strategic consulting services.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-16 md:pb-24 bg-slate-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Let's Talk Business
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Reach out to us for inquiries, project proposals, or just to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
              <p className="text-slate-600 mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Office</h3>
                  <p className="text-slate-600">{siteConfig.contact.address}</p>
                  <Link 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Get directions
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <Link href={`mailto:${siteConfig.contact.email}`} className="text-slate-600 hover:text-blue-600">
                    {siteConfig.contact.email}
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Phone</h3>
                  <Link href={`tel:${siteConfig.contact.phone}`} className="text-slate-600 hover:text-blue-600">
                    {siteConfig.contact.phone}
                  </Link>
                  <p className="text-sm text-slate-500 mt-1">{siteConfig.contact.hours}</p>
                </div>
              </div>
            </div>

            {/* Fake Map Placeholder - Static for performance/privacy */}
            <div className="mt-8 rounded-xl overflow-hidden shadow-md bg-slate-200 h-64 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[url('https://imgs.search.brave.com/5c8989185d89c0f3b7e8a2e3e7a6c8a2e3f7b1a8c5d8e2f1a2b3c4d5e6f7a8b9c/500/300')] bg-cover bg-center opacity-50 grayscale" />
              <div className="relative z-10 bg-white/90 p-4 rounded-lg shadow-lg text-center">
                <p className="font-bold text-slate-900">Pegrio HQ</p>
                <p className="text-sm text-slate-600">Houston, TX</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}