import { images } from '@/config/images';
import { siteConfig } from '@/config/site';
import AboutSection from '@/components/sections/AboutSection';
import TeamMemberProfiles from '@/components/sections/TeamMemberProfiles';

export default function About() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center my-8">About Us</h1>
      <AboutSection
        history="Summit Real Estate was founded with the mission to provide exceptional real estate services to our community. Our team of experienced professionals is dedicated to helping clients navigate the complex world of real estate."
        values={[
          "Integrity",
          "Customer Focus",
          "Innovation",
          "Community Engagement"
        ]}
      />
      <TeamMemberProfiles />
    </>
  );
}