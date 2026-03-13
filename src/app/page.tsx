import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/sections/ContactForm";
import { images } from "@/config/images";

export const metadata = {
  title: "Home",
  description: "Transform your business with Pegrio's strategic consulting and data analytics solutions based in Houston, TX.",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            priority
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/70 md:bg-gradient-to-r md:from-white md:via-white/80 md:to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Scaling businesses through <span className="text-primary-600">strategic innovation</span>.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
              We partner with Houston's leading organizations to streamline operations, leverage data, and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/50 backdrop-blur-sm">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-sm font-medium text-gray-600">
               <div className="flex items-center gap-2">
                 <CheckCircle2 className="h-5 w-5 text-green-600" />
                 <span>Data-Driven Results</span>
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle2 className="h-5 w-5 text-green-600" />
                 <span>Expert Consultants</span>
               </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gray-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Expert Solutions for Modern Challenges
            </h2>
            <p className="text-lg text-gray-600">
              From high-level strategy to on-the-ground implementation, we provide the tools you need to succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Strategic Consulting",
                desc: "Comprehensive roadmaps to navigate market shifts and optimize organizational performance.",
                image: images["service-1"],
                link: "/services"
              },
              {
                title: "Data Analytics",
                desc: "Transform raw data into actionable insights with our advanced visualization and reporting tools.",
                image: images["service-2"],
                link: "/services"
              },
              {
                title: "Workshops & Training",
                desc: "Upskill your teams with customized training programs designed around your specific industry needs.",
                image: images["service-3"],
                link: "/services"
              }
            ].map((service, idx) => (
              <div key={idx} className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    width={service.image.width}
                    height={service.image.height}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-1">{service.desc}</p>
                  <Link href={service.link} className="text-primary-600 font-medium hover:text-primary-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview / CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.cta.src}
            alt={images.cta.alt}
            fill
            className="object-cover"
            quality={85}
          />
          <div className="absolute inset-0 bg-gray-900/85" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Ready to elevate your business?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Join over 150+ Houston businesses that have transformed their operations with Pegrio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-gray-900 px-8 text-lg">
                <Link href="/contact">Schedule Consultation</Link>
             </Button>
             <Button asChild size="lg" className="bg-primary-600 hover:bg-primary-700 text-white px-8 text-lg">
                <Link href="/about">Meet the Team</Link>
             </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Trusted by Local Leaders
            </h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it. Here is what our partners have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria L.",
                role: "COO, TechFlow Systems",
                text: "Pegrio's data analytics overhaul saved us 20% in operational costs within the first quarter. The team was professional, efficient, and truly understood our pain points."
              },
              {
                name: "James T.",
                role: "Founder, Lone Star Logistics",
                text: "I was skeptical about consulting firms, but Pegrio proved me wrong. Their strategic planning session was the most productive day my leadership team has had in years."
              },
              {
                name: "Sarah J.",
                role: "Director, Houston MedGroup",
                text: "The workshops they provided for our staff were incredible. Engaging, relevant, and immediately applicable. We look forward to a long partnership."
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
                <div className="flex text-primary-600 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic relative">
                  <span className="text-6xl text-gray-200 absolute -top-4 -left-2 font-serif">&ldquo;</span>
                  {testimonial.text}
                </p>
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                Let's discuss your future
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form and one of our senior consultants will reach out within 24 hours to schedule your initial discovery call.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Visit Our Office</h4>
                    <p className="text-gray-600">4521 Westheimer Rd, Suite 200<br />Houston, TX 77027</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Call Us</h4>
                    <p className="text-gray-600">(713) 555-0123</p>
                    <p className="text-sm text-gray-500">Mon-Fri 8am-6pm</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}