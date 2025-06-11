import React from "react";
import { motion } from "framer-motion";

const DigitalInnovationLab = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[100vh] min-h-[500px] flex items-center justify-center pt-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
                 <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            alt="Digital mental health tools"
            className="w-full h-full object-cover object-center"
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
            Nivishe Digital & Innovation Lab
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
          >
            Breaking barriers with digital tools for mental health awareness.
          </motion.p>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Innovation in Mental Health Education
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              With the rise of digital tools, we’re using comic books, Virtual Reality (VR), and AI-driven resources to make mental health education more accessible and engaging.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              These innovative tools help break down barriers, especially in communities where traditional mental health services might be stigmatized or inaccessible. Our comics, for instance, are designed to engage young people and help them navigate mental health challenges in a language and format they can relate to.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              And our VR and AI tools are creating immersive, interactive experiences that educate and raise awareness about mental health in a fun, non-threatening way.
            </p>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4 text-orange-600">Why this matters:</h3>
              <p className="text-lg text-gray-600">
                When innovation meets empathy, mental health support becomes inclusive and effective. We’re shaping the future of well-being through creativity and technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalInnovationLab;
