import AboutSection from "@/components/sections/AboutSection";
import TeamMemberProfiles from "@/components/sections/TeamMemberProfiles";
import { images } from "@/config/images";

export const metadata = {
  title: "About Us | Summit Real Estate",
  description: "Learn more about Summit Real Estate and our dedicated team.",
  openGraph: {
    title: "About Us | Summit Real Estate",
    description: "Learn more about Summit Real Estate and our dedicated team.",
    image: images.hero.src,
  },
};

export default function About() {
  return (
    <>
      <AboutSection
        history="Summit Real Estate was founded with a mission to provide exceptional real estate services to our community. Our team is dedicated to helping clients navigate the complexities of buying and selling properties."
        values={["Integrity", "Client Focus", "Excellence"]}
      />
      <TeamMemberProfiles
        teamMembers={[
          {
            name: "John D.",
            title: "Realtor",
            bio: "Expert in residential properties with 10 years of experience.",
            image: images.team-1.src,
          },
          {
            name: "Sarah K.",
            title: "Broker",
            bio: "Specializing in commercial real estate transactions.",
            image: images.team-1.src,
          },
          {
            name: "Maria L.",
            title: "Marketing Specialist",
            bio: "Passionate about showcasing properties through innovative marketing strategies.",
            image: images.team-1.src,
          },
        ]}
      />
    </>
  );
}