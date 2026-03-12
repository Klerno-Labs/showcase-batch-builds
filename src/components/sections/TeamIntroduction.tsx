const teamMembers = [
  {
    name: "John D.",
    role: "Master Electrician",
    bio: "With over 15 years of experience, John leads our team with expertise and dedication.",
  },
  {
    name: "Emily R.",
    role: "Electrical Technician",
    bio: "Emily is passionate about delivering safe and efficient electrical solutions.",
  },
  {
    name: "Michael S.",
    role: "Apprentice Electrician",
    bio: "Michael is learning the trade and is committed to providing excellent service.",
  },
];

const TeamIntroduction: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md">
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamIntroduction;