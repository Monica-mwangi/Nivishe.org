import React from "react";
import { motion } from "framer-motion";
import { Scale, Shield, HeartHandshake, BookOpen } from "lucide-react";

const SystemsChange = () => {
  const stats = [
    { icon: <Shield className="w-8 h-8" />, title: "70%", description: "Incarcerated individuals with mental health conditions" },
    { icon: <Scale className="w-8 h-8" />, title: "<2%", description: "Kenya's mental health budget allocation" },
    { icon: <HeartHandshake className="w-8 h-8" />, title: "200+", description: "Frontline responders trained" },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[100vh] min-h-[500px] flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 z-10"></div>
        <div className="absolute inset-0 z-0 top-[68px] ">
          <img
            src="/images/Systems.jpg"
            alt="Systemic change"
            className="w-full h-full object-cover object-[0%_30%]"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
          >
            <span className="text-white">Radical Systems Change</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
          >
          Build a future where healing is not only personal but systemic.
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
            Our <span className="text-orange-600">Systemic Interventions</span>
          </h2>

          {/* Criminal Justice Program */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg mb-12 overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="bg-orange-600 p-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Criminal & Health Justice Nexus Program
              </h3>
            </div>
            <div className="p-8 grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span>Trauma-informed training for police & prison staff</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span>Psychosocial support for incarcerated youth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span>Community-led prison reform initiatives</span>
                  </li>
                </ul>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-semibold text-orange-600">
                    "70% of incarcerated individuals live with mental health conditions - 
                    we're transforming punishment into healing"
                  </p>
                </div>
              </div>
              <div className="border-l border-orange-100 pl-8">
                <h4 className="text-xl font-bold mb-4 text-orange-600">Impact Focus</h4>
                <p className="mb-4">Breaking cycles of intergenerational trauma for:</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Nubian communities in Kenya</li>
                  <li>• Refugee populations</li>
                  <li>• Disproportionately incarcerated youth</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Policy Advocacy Program */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="bg-orange-600 p-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Policy & Advocacy for Mental Health Justice
              </h3>
            </div>
            <div className="p-8 grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span>Co-creating national mental health policies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span>Amplifying marginalized voices in governance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span>Advocating for budget allocations</span>
                  </li>
                </ul>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-semibold text-orange-600">
                    "Championing mental health as a human right, not a privilege"
                  </p>
                </div>
              </div>
              <div className="border-l border-orange-100 pl-8">
                <h4 className="text-xl font-bold mb-4 text-orange-600">Key Participation</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Nairobi County Technical Committee</li>
                  <li>• National Mental Health Taskforce</li>
                  <li>• UNHCR Partnership Forums</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-orange-600 text-center">
              Why Systemic Healing Matters
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Without Change:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Maternal health remains underfunded</li>
                  <li>• Youth programs stay isolated</li>
                  <li>• Healing spaces remain small-scale</li>
                </ul>
              </div>
              <div className="bg-orange-600 p-6 rounded-xl shadow-sm text-white">
                <h3 className="text-xl font-bold mb-4">With Systemic Change:</h3>
                <ul className="space-y-3">
                  <li>• Equity becomes institutionalized</li>
                  <li>• Resilience builds community fabric</li>
                  <li>• Radical love becomes the norm</li>
                </ul>
              </div>
            </div>
          </div>
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
              Ready to Transform Systems?
            </h2>
            <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
              Join our movement to heal institutions and create equitable futures
            </p>
            <div className="flex justify-center gap-4">
              {/* <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Read Our Blogs
              </button> */}
               <a
              href="/partnerships"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors shadow-lg"
            >
              Partner with us
            </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SystemsChange;