"use client";
import React from 'react';
import { images } from '@/config/images';

const teamMembers = [
  { name: "John D.", title: "Realtor", bio: "Expert in residential properties with 10 years of experience.", image: images.team-1.src },
  { name: "Sarah K.", title: "Broker", bio: "Specializing in commercial real estate transactions.", image: images.team-1.src },
];

const TeamMemberProfiles: React.FC = () => {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center mb-8">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-md">
            <img src={member.image} alt={member.name} className="rounded-full mb-4" />
            <h3 className="text-2xl font-semibold">{member.name}</h3>
            <p className="text-lg">{member.title}</p>
            <p className="mt-2">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMemberProfiles;