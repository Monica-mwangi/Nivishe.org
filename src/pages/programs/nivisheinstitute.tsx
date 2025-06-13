import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Globe } from "lucide-react";

const NivisheInstitute = () => {
  const programHighlights = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "500+ Refugees Supported",
      description: "Specialized trauma healing programs"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "10+ Educational Tools",
      description: "Culturally adapted resources"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[100vh] min-h-[500px] flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 z-10"></div>
        <div className="absolute inset-0 z-0 top-[68px]">
          <img
            src="/images/graduation.jpg" 
            alt="African mental health education"
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
            <span className="text-white">Nivishe Thematic Fellowship</span>

          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
          >
            Healing in exile. Hope in belonging.
          </motion.p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              <span className="text-orange-500">African-Centered</span> Mental Health Education
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              The Fellowship’s first thematic expansion trains displaced and refugee youth to address the intersection of trauma, loss, and resilience inherent in displacement. Through trauma-informed mental health first aid, peer support models, and resilience-building strategies, it integrates native languages, cultural traditions, and storytelling to ensure culturally resonant healing. By empowering fellows as peer leaders, the initiative fosters self-healing and community-led psychosocial support in camps, settlements, and urban displaced populations, driving sustainable recovery.
            </p>
            
            <div className="flex justify-center flex-wrap gap-6 mt-12">
              {programHighlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-orange-50 p-6 rounded-xl shadow-sm border border-orange-100 max-w-xs w-full"
                >
                  <div className="text-orange-500 mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
            Our <span className="text-orange-500">Programs</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Refugee Program */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
            >
              <div className="bg-orange-600 p-4">
                <h3 className="text-xl md:text-2xl font-bold text-white">Refugee & Displaced Youth Program</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 italic">
                  "Healing in exile. Hope in belonging."
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>Trauma-informed support for displaced populations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>Healing through native languages and storytelling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>Peer leadership in refugee camps and settlements</span>
                  </li>
                </ul>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-medium text-orange-700">
                    Impact: Supported 500+ displaced youth and families with trauma healing
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Capacity Building */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
            >
              <div className="bg-orange-600 p-4">
                <h3 className="text-xl md:text-2xl font-bold text-white">Community Capacity Building</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  "When caregivers heal, children thrive."
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>Training teachers in emotional literacy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>Creating trauma-informed schools and homes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>300+ caregivers and teachers trained</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Centered Research Program */}
            <div className="col-span-full flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 w-full max-w-2xl"
              >
                <div className="bg-orange-600 p-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white text-center">Research & Knowledge Production</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 italic text-center">
                    "Our realities, our stories, our solutions."
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      <span>Community-led mental health research</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      <span>Comic books and infographics in local languages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      <span>Audio storytelling via community radio</span>
                    </li>
                  </ul>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="font-medium text-orange-700 text-center">
                      Impact: 10+ localized tools developed, reaching 5,000+ people
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            In <span className="text-orange-100">Their Words</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-orange-600 p-8 rounded-xl shadow-lg"
            >
              <p className="italic text-lg mb-4">
                "The Nivishe Fellowship taught me that healing is not just for therapists it's for everyone. Now I am leading mental health circles in my refugee community."
              </p>
              <p className="font-bold">Awel, 24, Sudanese refugee in Kenya</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-orange-600 p-8 rounded-xl shadow-lg"
            >
              <p className="italic text-lg mb-4">
                "Training teachers saved lives in our village. Children who were once labeled 'bad' are now seen as grieving or hurting. That shift changed everything."
              </p>
              <p className="font-bold">Rebecca, caregiver and capacity building trainee</p>
            </motion.div>
          </div>
        </div>
      </section>

         {/* Gallery Section (Commented Out) */}
      {/*
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="gallery-item overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img 
            src="/images/graduate-4.jpg" 
            alt="Nivishe Institute Activity" 
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="gallery-item overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img 
            src="/images/graduate-5.jpg" 
            alt="Community Workshop" 
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="gallery-item overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img 
            src="/images/graduate-1.jpg" 
            alt="Fellowship Program" 
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="gallery-item overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img 
            src="/images/graduate-3.jpg" 
            alt="Research Team" 
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      </div>

      <div className="text-center mt-12">
        <a 
          href="/gallery" 
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors shadow-md"
        >
          View Full Gallery
        </a>
      </div>
      */}
    </div>
    
  );
};

export default NivisheInstitute;