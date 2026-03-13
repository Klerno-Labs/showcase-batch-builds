import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/ContactForm";
import { images } from "@/config/images";
import { siteConfig } from "@/config/site";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: siteConfig.name,
            image: images.hero.src,
            telephone: siteConfig.contact.phone,
            address: {
              "@type": "PostalAddress",
              streetAddress: "4521 Westheimer Rd, Suite 200",
              addressLocality: "Houston",
              addressRegion: "TX",
              postalCode: "77027",
              addressCountry: "US",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
              ],
              opens: "08:00",
              closes: "18:00"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 w-full">
          <div className="max-w-2xl">
            <motion.div {...fadeIn}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                Driving Innovation Through Strategic Consulting
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Pegrio Solutions empowers businesses to scale with cutting-edge technology and data-driven strategies. We turn complexity into clarity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Your Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-400">
          <ChevronDown className="h-8 w-8" />
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              { title: "Expert Strategy", desc: "Tailored roadmaps designed to meet your unique business challenges." },
              { title: "Tech Excellence", desc: "Leveraging the latest tools to build scalable, secure systems." },
              { title: "Proven Results", desc: "A track record of delivering measurable ROI for our partners." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeIn} className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to propel your business forward.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Strategic Consulting",
                desc: "Navigate market shifts with confidence. We provide the insights you need to make informed decisions.",
                image: images["service-1"],
                link: "/services"
              },
              {
                title: "Digital Transformation",
                desc: "Modernize your operations. We integrate digital technologies to transform your service delivery.",
                image: images["service-2"],
                link: "/services"
              },
              {
                title: "Data Analytics",
                desc: "Unlock the power of your data. We turn raw numbers into actionable intelligence.",
                image: images["service-3"],
                link: "/services"
              }
            ].map((service, i) => (
              <motion.div key={i} variants={fadeIn} className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{service.desc}</p>
                  <Link href={service.link} className="text-primary font-semibold hover:underline flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={images.cta.src}
            alt={images.cta.alt}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 {...fadeIn} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Scale Your Business?
          </motion.h2>
          <motion.p {...fadeIn} className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their operations with Pegrio.
          </motion.p>
          <motion.div {...fadeIn}>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Start Your Project Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-lg text-gray-600">See what our partners have to say.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Maria L.", role: "CEO, TechFlow", quote: "Pegrio completely revolutionized our workflow. We've seen a 40% increase in efficiency in just three months." },
              { name: "James T.", role: "Director, Apex Logistics", quote: "Their data analytics team found savings we didn't know existed. Incredible ROI." },
              { name: "Sarah J.", role: "Founder, GreenStart", quote: "Professional, insightful, and results-oriented. They truly understand the modern business landscape." }
            ].map((testimonial, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="bg-gray-50 p-8 rounded-xl relative">
                <div className="text-primary/20 text-6xl absolute top-4 right-6">"</div>
                <div className="flex mb-4 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 relative z-10">{testimonial.quote}</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}