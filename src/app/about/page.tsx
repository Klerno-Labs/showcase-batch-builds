export const metadata = {
  title: "About Us - Wagmore Dog Grooming",
  description: "Learn more about Wagmore Dog Grooming and our team.",
  openGraph: {
    title: "About Us - Wagmore Dog Grooming",
    description: "Learn more about Wagmore Dog Grooming and our team.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
  },
};

const AboutPage = () => {
  return (
    <main>
      <section className="pt-20">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p>At Wagmore Dog Grooming, we believe every pet deserves the best care. Our team is dedicated to providing top-notch grooming services in a loving environment.</p>
      </section>
    </main>
  );
};

export default AboutPage;