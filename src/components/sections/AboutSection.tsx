"use client";

import { team } from "@/config/site";

interface TeamMember {
  name: string;
  title: string;
  bio: string;
}

interface AboutSectionProps {
  team: TeamMember[];
}

export function AboutSection({ team }: AboutSectionProps) {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.title}</p>
              <p className="mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}