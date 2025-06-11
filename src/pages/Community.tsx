import React from "react";
import { motion } from "framer-motion";

const CommunityCapacity = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[100vh] min-h-[500px] flex items-center justify-center pt-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Building.jpg"
            alt="Mental health champions"
            className="w-full h-full object-cover object-center brightness-90 contrast-105 saturate-110 transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 z-10" />
        </div>

        {/* Text Content */}
     <div className="container mx-auto px-4 relative z-20 text-center">
               <motion.h1 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6 }}
                 className="text-4xl md:text-6xl font-bold mb-4 text-white"
               >
                 <span className="text-white">Community Capacity Building</span>
               </motion.h1>
               
               <motion.p
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                 className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
               >
               When caregivers heal, children thrive.
               </motion.p>
             </div>
      </div>

      {/* Training Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Beyond youth leaders, Nivishe trains teachers, caregivers, social workers, and frontline responders to:
            </h2>
            
            <ul className="list-disc pl-6 text-lg text-gray-600 mb-8 space-y-4">
              <li>Recognize signs of emotional distress in children and adolescents.</li>
              <li>Provide basic, culturally appropriate mental health support.</li>
              <li>Create emotionally safe environments in homes, schools, and community centers.</li>
            </ul>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4 text-orange-600">Why this matters:</h3>
              <p className="text-lg text-gray-600">
                A teacher who knows how to support a grieving child. A caregiver who understands trauma. A frontline worker who knows when to refer. These are small acts of care that create systemic change.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityCapacity;