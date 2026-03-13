import Image from "next/image";
import Link from "next/link";
import { images } from "@/config/images";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* About Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                Driving Success Through Innovation
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 mb-6">
                Founded in Houston, Pegrio Solutions has spent the last decade helping businesses navigate the complexities of the modern market. We believe in data-driven strategies that yield tangible results.
              </p>
              <p className="text-lg leading-relaxed text-gray-600 mb-8">
                Our team of expert consultants brings experience from Fortune 500 companies and agile startups alike, providing a unique perspective that bridges the gap between big-picture vision and operational excellence.
              </p>
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-150"
              >
                Partner With Us
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={images["about"].src}
                alt={images["about"].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Testimonials />
      <Contact />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Pegrio Solutions",
            "image": "https://pegrio.com" + images["hero"].src,
            "@id": "https://pegrio.com",
            "url": "https://pegrio.com",
            "telephone": "+17135550199",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4521 Westheimer Rd, Suite 200",
              "addressLocality": "Houston",
              "addressRegion": "TX",
              "postalCode": "77027",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 29.7379,
              "longitude": -95.4635
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "08:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://www.linkedin.com/company/pegrio",
              "https://twitter.com/pegriosolutions"
            ]
          })
        }}
      />
    </>
  );
}