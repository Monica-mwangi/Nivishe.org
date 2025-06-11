import React from "react";
import { motion } from "framer-motion";

const SafeHealingSpaces = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[100vh] min-h-[500px] flex items-center justify-center pt-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/safe.jpg" // Replace with an appropriate image path
            alt="Safe healing space"
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
            Safe Healing Spaces
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
          >
            Where healing begins with safety, dignity, and community.
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Trauma-Informed Spaces at Nivishe
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              We believe that healing begins in safe, supportive environments. With trauma-informed spaces both at the Nivishe Center in Kibra and within communities, individuals can seek refuge from the pressures and stigmas often associated with mental health.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              The Nivishe Center, located in the heart of Kibra, a community known for its resilience amid socio-economic challenges provides an open door to marginalized individuals who would otherwise lack access to mental health care due to financial or social barriers.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              With more than 70% of individuals in informal settlements facing mental health challenges, our center offers much-needed respite, counseling, and community support all while ensuring dignity, confidentiality, and inclusion.
            </p>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4 text-orange-600">Why it matters:</h3>
              <p className="text-lg text-gray-600">
                Healing cannot happen without safety. Our spaces empower individuals to begin their journey toward mental wellness in environments that respect their humanity and lived experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SafeHealingSpaces;
