import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { images } from "@/config/images";

export const metadata = {
  title: "Services",
  description: "Explore our comprehensive range of business consulting and technology services.",
};

export default function ServicesPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      title: "Strategic Consulting",
      desc: "We help you identify opportunities and mitigate risks with comprehensive market analysis and strategic planning.",
      image: images["service-1"],
      features: ["Market Analysis", "Growth Roadmaps", "Risk Assessment"]
    },
    {
      title: "Digital Transformation",
      desc: "Modernize your legacy systems and processes to stay competitive in a rapidly evolving digital landscape.",
      image: images["service-2"],
      features: ["Cloud Migration", "Process Automation", "System Integration"]
    },
    {
      title: "Data Analytics",
      desc: "Turn raw data into actionable insights. We build the dashboards and reports that drive decision-making.",
      image: images["service-3"],
      features: ["Predictive Modeling", "Custom Dashboards", "Data Warehousing"]
    },
    {
      title: "Cybersecurity",
      desc: "Protect your assets with our enterprise-grade security solutions and compliance auditing.",
      image: images.hero,
      features: ["Threat Detection", "Compliance Audits", "Security Training"]
    },
    {
      title: "Marketing Optimization",
      desc: "Maximize your ROI with data-driven marketing strategies that target the right audience.",
      image: images["hero-alt"],
      features: ["SEO & SEM", "Content Strategy", "Conversion Optimization"]
    },
    {
      title: "Staffing Solutions",
      desc: "Find the talent you need to scale. We specialize in placing top-tier tech and strategy professionals.",
      image: images.cta,
      features: ["Executive Search", "Temp Staffing", "Team Building"]
    }
  ];

  return (
    <>
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
              Comprehensive Business Solutions
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              From high-level strategy to technical implementation, Pegrio provides a full spectrum of services designed to accelerate your growth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full group border border-gray-100">
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
                  <p className="text-gray-600 mb-6 flex-grow">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat, j) => (
                      <li key={j} className="flex items-center text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex items-center font-semibold text-primary hover:underline">
                    Get a Quote <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}