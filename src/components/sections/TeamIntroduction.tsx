const teamMembers = [
  {
    name: "John D.",
    role: "Master Electrician",
    bio: "With over 15 years of experience, John leads our team with expertise and dedication.",
  },
  {
    name: "Emily R.",
    role: "Project Manager",
    bio: "Emily ensures every project runs smoothly and meets our high standards.",
  },
  {
    name: "Michael S.",
    role: "Technician",
    bio: "Michael is our skilled technician, known for his attention to detail and customer service.",
  },
];

export const TeamIntroduction: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {teamMembers.map((member) => (
          <div key={member.name} className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <p className="mt-2">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};