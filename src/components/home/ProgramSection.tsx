import React from "react";
import { useNavigate } from "react-router-dom";

const ProgramsSection = () => {
  const navigate = useNavigate();
  
  const programs = [
    {
      id: "hhj",
      title: "The Healing Journey",
      description: "A transformative program for personal trauma recovery and emotional healing.",
      bgImage: "/images/healing-journey.jpg",
      path: "/programs/hhj"
    },
    {
      id: "binti",
      title: "Binti Wellness Circles",
      description: "Safe spaces for women to connect, heal, and grow together in community.",
      bgImage: "/images/wellness.jpg",
      path: "/programs/binti"
    },
    {
      id: "child-wellbeing",
      title: "Child and Adolescent Well-being",
      description: "Specialized support for young people's mental health and development.",
      bgImage: "/images/child-wellbeing.jpg",
      path: "/programs/child-wellbeing"
    },
    {
      id: "nivishe",
      title: "Nivishe Institute for Mental Health",
      description: "Research and education advancing mental health knowledge and practice.",
      bgImage: "/images/nivishe-institute.jpg",
      path: "/programs/nivishe"
    },
  ];

  const handleReadMore = (path) => {
    navigate(path);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Programs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <div 
              key={program.id}
              className="relative rounded-xl overflow-hidden shadow-lg h-80 group"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${program.bgImage})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
              </div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                <p className="mb-4">{program.description}</p>
                <button 
                  onClick={() => handleReadMore(program.path)}
                  className="self-start px-4 py-2 bg-black text-white font-medium rounded-lg "
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