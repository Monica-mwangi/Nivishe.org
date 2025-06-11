import React from "react";
import { motion } from "framer-motion";
import { Hammer, Mic, Scale, HeartHandshake, Flame, ArrowRight } from "lucide-react";

const Policy = () => {
  const proudActions = [
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Policy Advocacy",
      description: "Pushing for inclusive, trauma-informed mental health laws at local and national levels"
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Decision-Making Tables",
      description: "Shaping mental health policies from the ground up through committees like Nairobi County Technical Working Committee"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Amplifying Marginalized Voices",
      description: "Ensuring survivors, youth, refugees, women, and ethnic minorities lead conversations about their futures"
    }
  ];

  const whyItMatters = [
    {
      stat: "Less than 2%",
      description: "of Kenya's national health budget allocated to mental health"
    },
    // {
    //   stat: "0",
    //   description: "national mental health strategies reflecting lived realities of marginalized communities"
    // }
  ];

  const systemsChangeReasons = [
    "Maternal mental health remains unfunded",
    "Youth-led peer support programs stay isolated",
    "Healing spaces remain small instead of igniting wide-scale transformation"
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[100vh] min-h-[500px] flex items-center justify-center pt-16 overflow-hidden">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/images/policy-1.jpg"
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
                  Policy and Advocacy for Mental Health Justice
                </motion.h1>
      
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-sm"
                >
                  Changing the System, Not Just Surviving It.
                </motion.p>
              </div>
            </div>

      {/* What We're Proud Of */}
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
              We Are Proud To
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {proudActions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-white to-orange-50 p-6 rounded-xl shadow-lg border border-orange-100 hover:shadow-xl transition-all"
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

      {/* Why It Matters */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                  <span className="text-orange-600">Why This Matters</span>
                </h2>
                
                <p className="text-lg text-gray-600 mb-8">
                  We advocate for mental health as a human right, not a luxury. Because policies must be co-created with communities, not for them infused with the resilience, dreams, and wisdom of those who have lived through injustice and survived.
                </p>
                
                <div className="space-y-6">
                  {whyItMatters.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white p-5 rounded-xl shadow-sm border border-orange-200"
                    >
                      <div className="text-4xl font-bold text-orange-600 mb-2">{item.stat}</div>
                      <p className="text-gray-600">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-orange-500 to-amber-600 p-8 rounded-2xl text-white"
              >
                <h3 className="text-2xl font-bold mb-6 text-center">Our Philosophy</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-full mr-4 mt-1">
                      <Flame className="w-5 h-5" />
                    </div>
                    <div>
                      <p>Policies must be co-created with communities, not for them</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-full mr-4 mt-1">
                      <HeartHandshake className="w-5 h-5" />
                    </div>
                    <div>
                      <p>Infused with the resilience, dreams, and wisdom of those who've lived through injustice</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-full mr-4 mt-1">
                      <Scale className="w-5 h-5" />
                    </div>
                    <div>
                      <p>Mental health as a fundamental human right, not a luxury</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <div className="inline-block bg-black/20 px-4 py-2 rounded-lg">
                    <span className="font-medium">"Nothing about us without us"</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Systems Change Matters */}
      <section className="py-16 bg-gradient-to-r from-orange-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="text-orange-400">Why Systems Change Matters</span> to Nivishe
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl mb-12 max-w-3xl mx-auto"
            >
              Systems Change is the engine that drives every other pillar of our impact.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
              >
                <div className="text-5xl font-bold text-orange-400 mb-4">01</div>
                <h3 className="text-xl font-bold mb-4">Without Systemic Reform</h3>
                <ul className="space-y-3 text-left">
                  {systemsChangeReasons.map((reason, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
              >
                <div className="text-5xl font-bold text-orange-400 mb-4">02</div>
                <h3 className="text-xl font-bold mb-4">Our Approach</h3>
                <p className="mb-4">By centering healing within justice, health, and governance, Nivishe is building a world where:</p>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span><strong>Equity</strong> is foundational</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span><strong>Resilience</strong> is cultivated</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span><strong>Radical love</strong> is the norm—not the exception</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-orange-600 to-amber-700 p-6 rounded-xl"
              >
                <div className="text-5xl font-bold text-white mb-4">03</div>
                <h3 className="text-xl font-bold mb-4 text-white">Our Vision</h3>
                <p className="mb-4">We're creating systems that prioritize:</p>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start">
                    <span className="text-amber-200 font-bold mr-2">•</span>
                    <span>Community-led solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-200 font-bold mr-2">•</span>
                    <span>Trauma-informed policies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-200 font-bold mr-2">•</span>
                    <span>Equitable resource distribution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-200 font-bold mr-2">•</span>
                    <span>Inclusive decision-making</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Ready to be part of the movement to heal systems and not just symptoms?
            </h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <a
                href="/donate"
                className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg hover:shadow-orange-500/30"
              >
                    Donate
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 max-w-2xl mx-auto bg-gradient-to-r from-orange-500 to-amber-600 p-1 rounded-full"
            >
              <div className="bg-white p-6 rounded-full">
                <p className="text-lg font-medium text-gray-800">
                  "By centering healing within justice, health, and governance, we're building a world where equity, resilience, and radical love are the norms not the exceptions." 
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="py-8 bg-gray-900 text-gray-400 text-center">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Nivishe Foundation</p>
          <p className="mt-2 text-sm">Changing the System, Not Just Surviving It</p>
        </div>
      </footer> */}
    </div>
  );
};

export default Policy;