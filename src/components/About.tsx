import { images } from "@/config/images";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <Image
                src={images["about"].src}
                alt={images["about"].alt}
                width={images["about"].width}
                height={images["about"].height}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Stats Badge */}
            <div className="absolute -bottom-8 -right-8 bg-gray-900 text-white p-6 rounded-2xl shadow-xl hidden sm:block">
              <p className="text-4xl font-bold text-primary mb-1">15+</p>
              <p className="text-sm text-gray-300">Years of Excellence</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">
              Building the Future of Business in Houston
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Founded in 2008, Pegrio started with a simple mission: to provide clear, actionable strategies for businesses facing complex market shifts. We believe that true partnership goes beyond delivering reports—it's about embedding ourselves in your vision to drive tangible results.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our team consists of industry veterans, data scientists, and creative thinkers who share a passion for solving the impossible. We don't just adapt to change; we anticipate it.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Proven track record with 500+ clients",
                "Data-driven decision making frameworks",
                "Dedicated post-implementation support"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white" />
                 ))}
              </div>
              <p className="text-sm font-medium text-gray-600">
                Join our growing community of <span className="text-gray-900">successful partners</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}