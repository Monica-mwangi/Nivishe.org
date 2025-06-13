import React from "react";
import { motion } from "framer-motion";
import { Shield, HeartPulse, Scale, LockKeyhole, Users, ArrowRight, BookOpen } from "lucide-react";

const JusticeHealthProgram = () => {
  const programFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trauma-Informed Training",
      description: "Educating police and prison staff on mental health literacy"
    },
    {
      icon: <HeartPulse className="w-8 h-8" />,
      title: "Psychosocial Support",
      description: "Healing interventions for incarcerated individuals"
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "System Transformation",
      description: "Shifting from punishment to healing approaches"
    }
  ];

  const statistics = [
    {
      value: "70%",
      label: "of incarcerated individuals have mental health conditions"
    },
    {
      value: "90%",
      label: "reduction in violent incidents with trauma-informed care"
    },
    {
      value: "3x",
      label: "higher incarceration rate for marginalized youth"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Section */}
      <div className="relative h-[100vh] min-h-[500px] flex items-center justify-center pt-16 overflow-hidden">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/images/Justice-1.jpg"
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
                  Criminal and Health Justice Nexus Program
                </motion.h1>
      
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-sm"
                >
                  Healing from Within: Transforming Justice and Health Systems!
                </motion.p>
              </div>
            </div>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
            >
              <span className="text-orange-600">Breaking Cycles</span> of Trauma and Incarceration
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 mb-8"
            >
              Our groundbreaking program bridges the gap between criminal justice and mental healthcare, 
              transforming systems that have historically perpetuated cycles of trauma and inequality.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programFeatures.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="text-orange-600 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text">Why This Matters</span> in Kenya
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-orange-700 p-2 rounded-full mr-4 mt-1">
                    <LockKeyhole className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Marginalized Youth Disproportionately Affected</h3>
                    <p className="text-justify">Communities like the Nubians face systemic barriers leading to higher incarceration rates with minimal mental health support.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-700 p-2 rounded-full mr-4 mt-1">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Intergenerational Trauma</h3>
                    <p className="text-justify">Without intervention, cycles of trauma, poverty, and criminalization repeat across generations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-700 p-2 rounded-full mr-4 mt-1">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Lack of Mental Health Literacy</h3>
                    <p className="text-justify">Frontline responders often lack training to recognize and appropriately respond to mental health crises.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">The Global Challenge</h3>
              
              <div className="space-y-6">
                {statistics.map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/10 p-5 rounded-xl border border-white/20"
                  >
                    <div className="text-4xl font-bold text-orange-300 mb-2">{stat.value}</div>
                    <p>{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
            >
              Our <span className="text-orange-600">Transformative</span> Approach
            </motion.h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-orange-50 p-8 rounded-xl border border-orange-100"
              >
                <h3 className="text-2xl font-bold mb-6 text-orange-800">Training for Justice Professionals</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">•</span>
                    <span className="flex-1"><strong>Mental Health First Aid:</strong> Equipping police officers with skills to de-escalate mental health crises</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">•</span>
                    <span className="flex-1"><strong>Trauma-Informed Practices:</strong> Training prison wardens to recognize and respond to trauma</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">•</span>
                    <span className="flex-1"><strong>Crisis Intervention:</strong> Preparing frontline responders for mental health emergencies</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-amber-50 p-8 rounded-xl border border-amber-100"
              >
                <h3 className="text-2xl font-bold mb-6 text-amber-800">Healing for Incarcerated Individuals</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-2">•</span>
                    <span className="flex-1"><strong>Child-Centered Interventions:</strong> Specialized support for incarcerated youth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-2">•</span>
                    <span className="flex-1"><strong>Trauma Therapy:</strong> Evidence-based approaches for healing and rehabilitation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-2">•</span>
                    <span className="flex-1"><strong>Reintegration Programs:</strong> Preparing individuals for successful community reentry</span>
                  </li>
                </ul>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 bg-gradient-to-r from-orange-500 to-amber-600 p-8 rounded-xl text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Our Vision for Transformation</h3>
              <p className="text-lg max-w-3xl mx-auto text-justify">
                We're turning prisons from places of punishment into spaces of potential healing, 
                breaking intergenerational cycles of trauma, and building systems that prioritize 
                dignity, rehabilitation, and second chances.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
            >
              Transforming <span className="text-orange-600">Lives</span> and <span className="text-orange-600">Systems</span>
            </motion.h2>
            <p className="text-lg text-gray-600">
              Real stories of change from our program participants
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-orange-600 mb-4">
                <Shield className="w-10 h-10 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Officer Transformation</h3>
              <p className="text-gray-600 italic">
                "The trauma-informed training changed how I approach every situation. I now see people in crisis, not criminals."
              </p>
              <p className="mt-4 text-sm text-gray-500">- Police Officer, Nairobi</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-orange-600 mb-4">
                <HeartPulse className="w-10 h-10 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Healing Journey</h3>
              <p className="text-gray-600 italic">
                "For the first time, I understood my trauma and how it affected my choices. This program gave me hope."
              </p>
              <p className="mt-4 text-sm text-gray-500">- Program Participant, Mombasa</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-orange-600 mb-4">
                <Users className="w-10 h-10 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Community Impact</h3>
              <p className="text-gray-600 italic">
                "Seeing our youth receive proper mental health support instead of punishment is transforming our community."
              </p>
              <p className="mt-4 text-sm text-gray-500">- Community Elder, Nubian Village</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-gradient-to-r from-orange-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Break the Chains of Trauma and Incarceration
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join us in transforming justice and health systems to prioritize healing and human dignity
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/donate"
                className="bg-white text-orange-900 hover:bg-orange-100 px-8 py-3 rounded-lg font-bold text-lg transition-colors shadow-lg"
              >
                Support Our Mission
              </a>
              {/* <a
                href="#"
                className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-bold text-lg transition-colors"
              >
                Learn More
              </a> */}
            {/* </div>
          </motion.div>
        </div>
      </section> */} 

      
    </div>
  );
};

export default JusticeHealthProgram;