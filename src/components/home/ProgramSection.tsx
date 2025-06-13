import React from "react";
import { useNavigate } from "react-router-dom";

const ProgramsSection = () => {
  const navigate = useNavigate();

  const programs = [
    {
      id: "hhj",
      title: "Maternal Child, and Adolescent Mental Health",
      bgImage: "/images/healing-journey.jpg",
      path: "/programs/hhj",
    },
    {
      id: "binti",
      title: "Nivishe Institute for Mental Health Learning and Research",
      bgImage: "/images/nivishe-institute.jpg",
      path: "/institute/fellowship",
    },
    {
      id: "child-wellbeing",
      title: "Systems Change: Health, Justice Reform and Policy Advocacy",
      bgImage: "/images/childwell.jpg",
      path: "/criminal",
    },
    {
      id: "nivishe",
      title: "Community-centred Healing and Innovation",
      bgImage: "/images/wellness.jpg",
      path: "/healing",
    },
  ];

  const handleReadMore = (path) => {
    navigate(path);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Pillars
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="relative rounded-xl overflow-hidden shadow-lg h-80 group cursor-pointer"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${program.bgImage})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300" />
              </div>

              {/* Title at bottom (always visible) */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-xl font-bold">
                  {program.title}
                </h3>
              </div>

              {/* Hover Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => handleReadMore(program.path)}
                  className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition shadow-lg"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;