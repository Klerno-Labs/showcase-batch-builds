"use client";
import { images } from "@/config/images";

const teamMembers = [
  {
    id: "1",
    name: "Emily R.",
    title: "Head Groomer",
    bio: "Emily has over 10 years of experience in pet grooming and is passionate about making pets look their best.",
    image: images.team1.src,
  },
  {
    id: "2",
    name: "John D.",
    title: "Veterinary Technician",
    bio: "John ensures that all pets are healthy and safe during their visits. His love for animals shines through in his work.",
    image: images.team1.src,
  },
];

const TeamSection = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {teamMembers.map(member => (
          <div key={member.id} className="bg-gray-50 p-6 rounded-lg shadow-md">
            <img src={member.image} alt={member.name} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.title}</p>
            <p className="mt-2">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;