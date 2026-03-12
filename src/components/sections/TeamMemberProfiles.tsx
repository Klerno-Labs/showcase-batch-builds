"use client";

import { cn } from "@/lib/cn";

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
}

interface TeamMemberProfilesProps {
  teamMembers: TeamMember[];
}

export default function TeamMemberProfiles({ teamMembers }: TeamMemberProfilesProps) {
  return (
    <section className={cn("py-16 md:py-24 lg:py-32 bg-white")}>
      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8")}>
        <h2 className={cn("text-3xl sm:text-4xl font-bold text-center mb-8")}>Meet Our Team</h2>
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6")}>
          {teamMembers.map((member) => (
            <div key={member.name} className={cn("bg-gray-100 shadow-md rounded-lg p-6")}>
              <img src={member.image} alt={member.name} className={cn("rounded-full w-32 h-32 mx-auto mb-4")} />
              <h3 className={cn("text-xl font-semibold text-center")}>{member.name}</h3>
              <p className={cn("text-gray-600 text-center")}>{member.title}</p>
              <p className={cn("text-gray-700 text-center mt-2")}>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}