import { images } from "@/config/images";

const teamMembers = [
  { name: "Sophia R.", role: "Senior Stylist", bio: "Expert in color and cutting techniques." },
  { name: "Liam D.", role: "Barber", bio: "Specializes in men's grooming and styling." },
  { name: "Olivia K.", role: "Colorist", bio: "Passionate about creating vibrant color transformations." },
];

const TeamGrid = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white p-6 rounded-lg shadow-md">
              <img src={images["team-1"].src} alt={`${member.name} - ${member.role}`} className="rounded-xl mb-4" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <p className="text-gray-500">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;