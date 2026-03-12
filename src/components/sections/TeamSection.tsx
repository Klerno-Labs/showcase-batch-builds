import { teamMembers } from "@/config/team";

export const TeamSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="mt-2">{member.title}</p>
              <p className="mt-4">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};