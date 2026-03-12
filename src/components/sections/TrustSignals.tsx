const trustBadges = [
  "Licensed and Insured",
  "Certified Electricians",
  "5-Star Rated Service",
];

export const TrustSignals: React.FC = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center">Why Choose Us?</h2>
      <ul className="mt-4 max-w-2xl mx-auto text-center">
        {trustBadges.map((badge) => (
          <li key={badge} className="text-lg">{badge}</li>
        ))}
      </ul>
    </section>
  );
};