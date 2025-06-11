import React from "react";

const TraumaSection = () => {
  return (
    <div className="trauma-section text-center p-6">
      {/* Larger heading (e.g., text-3xl) */}
      <h2 className="bg-orange-400 inline-block px-4 py-2 rounded text-3xl font-bold text-black">
        Our Story
      </h2>
      
      {/* Larger paragraph (e.g., text-lg) */}
      <p className="text-black text-lg max-w-2xl mx-auto mt-4">
  Mental health remains inaccessible for millions across Africa, with <strong>1 in 4 Kenyans</strong> experiencing mental health conditions (WHO) yet fewer than <strong>10%</strong> receiving support. Born from lived experience, Nivishe Foundation emerged to answer: <strong>"What would it mean to truly center dignity, culture, and community in mental health?"</strong> Our name ("clothe me" in Kiswahili) embodies wrapping communities in healing. We <strong>create safe spaces</strong>, <strong>build local leadership</strong>, and <strong>reimagine mental health interventions</strong> by the community, for the community. To ensure that no one, no matter their story, is left<strong> unseen, unheard, or unsupported.</strong>
</p>
    </div>
  );
};

export default TraumaSection;