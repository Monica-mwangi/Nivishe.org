import React from "react";

const TraumaSection = () => {
  return (
    <div className="trauma-section text-center p-6">
      {/* Larger heading (e.g., text-3xl) */}
      <h2 className="bg-orange-400 inline-block px-4 py-2 rounded text-3xl font-bold text-black">
        Ignored Trauma Harms Communities
      </h2>
      
      {/* Larger paragraph (e.g., text-lg) */}
      <p className="text-black text-lg max-w-2xl mx-auto mt-4">
      Ignored trauma can have long-lasting effects on individuals and entire communities, leading to cycles of
      pain, instability, and social disconnection. When mental health struggles go unaddressed, they manifest in 
      various ways, such as increased violence, substance abuse, and diminished economic opportunities.
      Without proper support systems, people suffer in silence, unable to heal or reach their full potential. By
      acknowledging and addressing trauma through community-based interventions, we can foster resilience,
      break harmful cycles, and create a healthier, more cohesive society.
      </p>
    </div>
  );
};

export default TraumaSection;