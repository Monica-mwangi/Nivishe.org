import React from "react";
import { motion } from "framer-motion";
import { Palette, Codesandbox, Home, Users } from "lucide-react";

const CommunityHealing = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, title: "1 in 4", description: "People affected by mental health disorders" },
    { icon: <Home className="w-8 h-8" />, title: "70%+", description: "In informal settlements needing support" },
    { icon: <Codesandbox className="w-8 h-8" />, title: "80%", description: "Lack access to care in low-income countries" },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[100vh] min-h-[500px] flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 z-10"></div>
        <div className="absolute inset-0 z-0">
          <img
            src="/images/community.jpg"
            alt="Community healing"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
          >
            <span className="text-white">Community-Centered Healing</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
          >
            Cultivating innovation through cultural resonance and creative care
          </motion.p>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-orange-50 p-6 rounded-xl text-center"
              >
                <div className="text-orange-600 mb-4 mx-auto">{item.icon}</div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
            Our <span className="text-orange-600">Innovative Approaches</span>
          </h2>

          {/* Healing Through Play */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg mb-12 overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="bg-orange-600 p-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Healing Through Creative Expression
              </h3>
            </div>
            <div className="p-8 grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Art therapy sessions using local materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Community storytelling circles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Music and dance therapy programs</span>
                  </li>
                </ul>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-semibold text-orange-600">
                    "Reducing anxiety and depression symptoms through cultural expression"
                  </p>
                </div>
              </div>
              <div className="border-l border-orange-100 pl-8">
                <h4 className="text-xl font-bold mb-4 text-orange-600">Impact</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 40% reduction in trauma symptoms</li>
                  <li>• 65% improved community cohesion</li>
                  <li>• 500+ participants monthly</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Digital Innovation Lab */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg mb-12 overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="bg-orange-600 p-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Nivishe Digital Innovation Lab
              </h3>
            </div>
            <div className="p-8 grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>AI-powered mental health chatbots</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>VR trauma therapy experiences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Interactive mental health comics</span>
                  </li>
                </ul>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-semibold text-orange-600">
                    "Reaching 10,000+ youth through digital innovation"
                  </p>
                </div>
              </div>
              <div className="border-l border-orange-100 pl-8">
                <h4 className="text-xl font-bold mb-4 text-orange-600">Features</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Local language support</li>
                  <li>• Offline-capable tools</li>
                  <li>• Gamified learning modules</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Safe Spaces */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="bg-orange-600 p-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Safe Healing Spaces
              </h3>
            </div>
            <div className="p-8 grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Trauma-informed design principles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>24/7 community support hubs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Peer-led counseling sessions</span>
                  </li>
                </ul>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-semibold text-orange-600">
                    "Kibra Center serves 200+ weekly visitors"
                  </p>
                </div>
              </div>
              <div className="border-l border-orange-100 pl-8">
                <h4 className="text-xl font-bold mb-4 text-orange-600">Services</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Free counseling sessions</li>
                  <li>• Crisis intervention</li>
                  <li>• Community resource hub</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-center">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-orange-600/20 p-8 rounded-2xl backdrop-blur-sm"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Join the Healing Revolution
            </h2>
            <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
              Help us create more safe spaces and innovative mental health solutions
            </p>
            <div className="flex justify-center gap-4">
               <a
              href="/volunteer"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors shadow-lg"
            >
              Support Us
            </a>
              {/* <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600/10 px-6 py-3 rounded-lg font-medium transition-colors">
                Support Innovation
              </button> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CommunityHealing;