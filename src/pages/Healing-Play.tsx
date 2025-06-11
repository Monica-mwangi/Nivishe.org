import React from "react";
import { motion } from "framer-motion";

const CreativeHealing = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[100vh] min-h-[500px] flex items-center justify-center pt-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/healing.jpg" // Replace with an appropriate image path
            alt="Art therapy in action"
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
            <span className="text-white">Creative Healing and Expression</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
          >
            Healing through storytelling, art, and music.
          </motion.p>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Creative Expression as a Path to Healing
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Art therapy, storytelling, and other culturally resonant methods are more than just creative outlets they are powerful tools for mental health recovery. Studies show that creative expression can significantly reduce symptoms of anxiety, depression, and trauma.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              At Nivishe, we use visual arts, music, and storytelling to help individuals unlock their emotions and process their experiences in safe and supportive environments. These activities not only foster emotional healing but also promote community cohesion and resilience.
            </p>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4 text-orange-600">Why this matters:</h3>
              <p className="text-lg text-gray-600">
                Whether it's painting, singing, or sharing personal stories, creative methods reconnect people to their inner strength. They validate lived experiences and foster spaces where healing becomes a collective journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreativeHealing;
