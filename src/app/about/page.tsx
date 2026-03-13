import Image from "next/image";
import { Target, Users, Lightbulb } from "lucide-react";
import { images } from "@/config/images";

export const metadata = {
  title: "About Us",
  description: "Learn about Pegrio's history, our team of expert consultants, and our mission to help Houston businesses grow.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-50 pt-16 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                Building Houston's Future, One Strategy at a Time
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2015, Pegrio started with a simple belief: that every business, regardless of size, deserves access to Fortune 500-level strategic insights.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We are a team of data scientists, operational experts, and creative thinkers dedicated to solving complex problems. We don't just give advice; we work shoulder-to-shoulder with you to implement it.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary-600">150+</div>
                  <div className="text-sm text-gray-500 font-medium">Clients Served</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary-600">$50M+</div>
                  <div className="text-sm text-gray-500 font-medium">Revenue Generated</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary-600">8</div>
                  <div className="text-sm text-gray-500 font-medium">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={images.about.src}
                  alt={images.about.alt}
                  width={images.about.width}
                  height={images.about.height}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide every client engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Results-Driven",
                desc: "We measure our success by your ROI. Every strategy we propose is tied to a measurable outcome."
              },
              {
                icon: Users,
                title: "Collaborative Spirit",
                desc: "We view ourselves as an extension of your team, ensuring seamless integration and knowledge transfer."
              },
              {
                icon: Lightbulb,
                title: "Innovative Thinking",
                desc: "We leverage the latest technologies and methodologies to give you a competitive edge."
              }
            ].map((value, idx) => (
              <div key={idx} className="text-center p-6 rounded-xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mx-auto mb-4">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Meet the Leadership
            </h2>
            <p className="text-lg text-gray-600">
              Experienced professionals dedicated to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Rivera",
                role: "CEO & Founder",
                bio: "Former VP of Strategy at a Fortune 500 firm with 15+ years in operational optimization."
              },
              {
                name: "David Chen",
                role: "Head of Analytics",
                bio: "PhD in Data Science, specializing in predictive modeling for supply chain and logistics."
              },
              {
                name: "Elena Rodriguez",
                role: "Director of Consulting",
                bio: "Expert in change management and organizational development, certified Agile coach."
              }
            ].map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 group">
                 <div className="aspect-[4/3] bg-gray-200 overflow-hidden relative">
                    <Image 
                      src={idx === 0 ? "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop" : idx === 1 ? "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop" : "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop"}
                      alt={member.name}
                      width={600}
                      height={600}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                 </div>
                 <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <div className="text-primary-600 font-medium text-sm mb-3">{member.role}</div>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}