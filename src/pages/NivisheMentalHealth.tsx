import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Globe, ArrowRight } from "lucide-react";

const NivisheFellowship = () => {
  const highlights = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "300+ Fellows",
      description: "Trained across 10 countries"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "40,000+ Reached",
      description: "Through peer-led sessions"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Pan-African Network",
      description: "Diverse mental health advocates"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[100vh] min-h-[500px] flex items-center justify-center pt-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/graduating.jpg"
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
            className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-md"
          >
            Nivishe Mental Health Fellowship
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-sm"
          >
            Building the next generation of mental health champions across Africa
          </motion.p>
        </div>
      </div>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              <span className="text-orange-600">Community-Driven</span> Mental Health Leadership
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our flagship program equips youth leaders with knowledge and tools to become mental health change-makers. Fellows combine neuroscience, counseling psychology, and cultural wisdom to create localized solutions.
            </p>

            <div className="flex justify-center flex-wrap gap-6 mt-12">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-orange-50 p-6 rounded-xl shadow-sm border border-orange-100 max-w-xs w-full"
                >
                  <div className="text-orange-600 mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Unique Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
            Our <span className="text-orange-600">Approach</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
            >
              <h3 className="text-2xl font-bold mb-6 text-orange-600">What makes us Unique</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span className="flex-1"><strong>Localized learning:</strong> Fellows study mental health, basic counseling psychology, and neuroscience in ways grounded in their own local languages and cultural contexts.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span className="flex-1"><strong>Peer-to-peer model:</strong> Fellows act as community mental health champions and referral pathways, helping community members access further care when needed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span className="flex-1"><strong>Ripple effect approach:</strong> Every Fellow must design and deliver a community mental health session using art, storytelling, local languages, or whichever culturally resonant methods will make the greatest impact.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span className="flex-1"><strong>Pan-African vision:</strong> Fellows come from across Sub-Saharan Africa, building a diverse, dynamic network of mental health advocates</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-orange-600 p-8 rounded-xl shadow-lg text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Fellow Impact</h3>
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="font-bold mb-2">Community Sessions</p>
                  <p>Fellows design interventions using art, storytelling, and local languages</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="font-bold mb-2">Capacity Building</p>
                  <p>Training includes neuroscience basics and trauma-informed care</p>
                </div>
                {/* <a 
                  href="/fellowship-stories" 
                  className="inline-flex items-center mt-6 text-white hover:text-orange-100 transition-colors"
                >
                  Explore Fellow Stories
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-orange-600/30 p-8 rounded-2xl backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Become a Mental Health Champion
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our Pan-African network of change-makers creating culturally-rooted mental health solutions
            </p>
            <a
              href="/fellowships"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors shadow-lg"
            >
              Apply Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NivisheFellowship;
