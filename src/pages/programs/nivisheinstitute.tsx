import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Globe, Radio, GraduationCap } from "lucide-react";

const NivisheInstitute = () => {
  const programHighlights = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "300+ Fellows Trained",
      description: "Across 10 African countries"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "40,000+ Lives Impacted",
      description: "Through community mental health activities"
    },
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
      {/* Hero Section with Cover Image */}
      <div className="relative h-[100vh] min-h-[500px] flex items-center justify-center pt-16">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 z-10"></div>
        
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/graduation.jpg" 
            alt="African mental health education"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero content */}
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
          >
            <span className="text-orange-400">Nivishe</span> Institute
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-orange-200 mb-8 max-w-3xl mx-auto"
          >
            Reimagining African mental health education through research and empowerment
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a 
              href="#programs" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Explore Programs
            </a>
            {/* <a 
              href="#impact" 
              className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              See Our Impact
            </a> */}
          </motion.div>
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
              We're transforming mental health knowledge by centering African experiences, languages, 
              and healing traditions. Our institute bridges the gap between academic research and 
              community wisdom to create accessible, culturally-rooted mental health solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {programHighlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-orange-50 p-6 rounded-xl shadow-sm border border-orange-100"
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
            {/* Fellowship Program */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
            >
              <div className="bg-orange-500 p-4">
                <h3 className="text-xl md:text-2xl font-bold text-white">Mental Health Fellowship</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 italic">
                  "Building the next generation of mental health champions across Africa."
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>Localized learning in native languages and cultural contexts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>Peer-to-peer mental health support models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>Pan-African network of 300+ fellows across 10 countries</span>
                  </li>
                </ul>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-medium text-orange-700">
                    Impact: Directly reached 40,000+ community members through fellow-led activities
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Refugee Program */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
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
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
            >
              <div className="bg-orange-700 p-4">
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

            {/* Research Program */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
            >
              <div className="bg-orange-800 p-4">
                <h3 className="text-xl md:text-2xl font-bold text-white">Research & Knowledge Production</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 italic">
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
                  <p className="font-medium text-orange-700">
                    Impact: 10+ localized tools developed, reaching 5,000+ people
                  </p>
                </div>
              </div>
            </motion.div>
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
                "The Nivishe Fellowship taught me that healing is not just for therapists — it's for everyone. Now I am leading mental health circles in my refugee community."
              </p>
              <p className="font-bold">— Awel, 24, Sudanese refugee in Kenya</p>
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
              <p className="font-bold">— Rebecca, caregiver and capacity building trainee</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
        Nivishe Institute <span className="text-orange-500">Gallery</span>
      </h2>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Explore our work through these moments captured at the Nivishe Institute.
      </p>
    </div>

    {/* Image Gallery Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* Gallery Item 1 */}
      <div className="gallery-item overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img 
          src="/images/graduate-4.jpg" 
          // alt="Nivishe Institute Activity" 
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      
      {/* Gallery Item 2 */}
      <div className="gallery-item overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img 
          src="/images/graduate-0.jpg" 
          // alt="Community Workshop" 
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      
      {/* Gallery Item 3 */}
      <div className="gallery-item overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img 
          src="/images/graduate-1.jpg" 
          // alt="Fellowship Program" 
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      
      {/* Gallery Item 4 */}
      <div className="gallery-item overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img 
          src="/images/graduate-3.jpg" 
          // alt="Research Team" 
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      
      {/* Add more gallery items as needed */}
    </div>

    {/* Optional View More Button */}
    {/* <div className="text-center mt-12">
      <a 
        href="/gallery" 
        className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors shadow-md"
      >
        View Full Gallery
      </a>
    </div> */}
  </div>
</section>
    </div>
  );
};

export default NivisheInstitute;