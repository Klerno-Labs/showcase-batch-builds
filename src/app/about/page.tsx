import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/config/images";

export const metadata = {
  title: "About Us",
  description: "Learn more about Pegrio Solutions and our mission to empower businesses through innovation.",
};

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
      {/* Hero Header */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 {...fadeIn} className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
              Building the Future of Business
            </motion.h1>
            <motion.p {...fadeIn} className="text-lg text-gray-600 leading-relaxed">
              Founded on the principles of integrity and innovation, Pegrio Solutions has grown from a small Houston consultancy to a nationally recognized leader in business strategy.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn} className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={images.about.src}
                alt={images.about.alt}
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div {...fadeIn} className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-lg text-gray-600">
                It started with a simple observation: businesses were drowning in data but starving for insights. In 2015, Pegrio Solutions was born to bridge that gap.
              </p>
              <p className="text-gray-600">
                We believe that technology should serve people, not the other way around. Our team of seasoned experts works tirelessly to demystify the digital landscape, providing our clients with clear, actionable strategies that drive real growth.
              </p>
              <p className="text-gray-600">
                Today, we are proud to partner with organizations ranging from ambitious startups to Fortune 500 companies, all united by a desire to lead their industries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide every decision we make.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Integrity", desc: "We operate with transparency and honesty in every interaction." },
              { title: "Innovation", desc: "We constantly seek better, faster, and smarter ways to solve problems." },
              { title: "Collaboration", desc: "Your success is our success. We work as an extension of your team." },
              { title: "Excellence", desc: "We don't settle for 'good enough'. We strive for exceptional." },
              { title: "Agility", desc: "The market changes fast. We help you move faster." },
              { title: "Impact", desc: "We measure our success by the value we create for you." }
            ].map((value, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-gray-600">Meet the minds behind Pegrio Solutions.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Alex Rivera", role: "CEO & Founder", bio: "Visionary leader with 15+ years in strategic consulting." },
              { name: "Elena Chen", role: "CTO", bio: "Tech innovator specializing in scalable architecture." },
              { name: "David Smith", role: "Head of Strategy", bio: "Data-driven expert transforming complex markets." }
            ].map((member, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.2 }} className="text-center">
                <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                   <Image
                    src={images["team-1"].src} 
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 px-4">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}