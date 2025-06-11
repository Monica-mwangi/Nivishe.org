import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { boardMembers, staffMembers, partners } from '../../data/content';
import Button from '../ui/Button';

const TeamSection: React.FC = () => {
  const [openMemberId, setOpenMemberId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenMemberId(prevId => (prevId === id ? null : id));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Founder</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the Founder leading our mission to transform mental health across Kenya.
          </p>
          <div className="w-24 h-1 bg-orange-400 mx-auto mt-6"></div>
        </div>

        {/* Founder */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg mb-24">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 w-full h-100 overflow-hidden rounded-lg">
              <img 
                src="/images/Amisa-Rashid.jpg" 
                alt="Amisa Rashid" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 w-full">
              <h3 className="text-2xl font-bold mb-4">Meet Our Founder: Amisa Rashid</h3>
              <p className="text-gray-700 text-lg">
                Amisa Rashid is the visionary behind Nivishe Foundation. With a deep passion for mental health advocacy, she has dedicated her life to empowering communities, shaping mental health policy, and fostering inclusive well-being initiatives in Kenya. Her leadership has driven the organization to national recognition, emphasizing compassion, resilience, and innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        {/*
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
                Our Team
              </h2>
              <div className="w-20 h-1 bg-orange-600 mx-auto mb-6"></div>
            </motion.div>
            
            <div className="mb-16 overflow-hidden">
              <motion.div 
                className="flex gap-6 py-4"
                animate={{
                  x: ['0%', '-100%'],
                }}
                transition={{
                  duration: 40,
                  ease: 'linear',
                  repeat: Infinity,
                }}
              >
                {[...staffMembers, ...staffMembers].map((member, index) => (
                  <motion.div
                    key={`${member.id}-${index}`}
                    className="min-w-[300px] md:min-w-[350px] text-center border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col flex-shrink-0 bg-white"
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  >
                    <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-orange-600/20">
                      <motion.img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                        style={{ objectPosition: 'top' }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div className="flex-grow flex flex-col">
                      <h4 className="text-xl font-bold mb-2 text-gray-800">{member.name}</h4>
                      <div className="text-orange-600 font-medium">
                        {member.role}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
        */}

        {/* Board of Directors */}
        {/* 
        <div className="mb-16 mt-20">
          <h3 className="text-3xl font-bold mb-12 text-center">Board of Directors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {boardMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="text-center border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative w-full aspect-square overflow-hidden rounded-xl mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-contain"
                    style={{ objectPosition: 'top' }}
                  />
                  <button 
                    onClick={() => toggleAccordion(member.id)}
                    className="absolute bottom-4 right-4 bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold hover:bg-orange-600 shadow-lg transition-all"
                  >
                    {openMemberId === member.id ? '−' : '+'}
                  </button>
                </div>
                <div className="flex-grow flex flex-col">
                  <h4 className="text-2xl font-bold mt-6 mb-2 text-gray-800">{member.name}</h4>
                  {openMemberId === member.id && (
                    <div className="mt-4 text-orange-600 font-medium text-base transition-all duration-300 ease-in-out">
                      {member.role}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        */}

        {/* Partners Section */}
        {/*
        <div className="mt-9">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Partners</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We collaborate with these outstanding organizations to amplify our impact.
            </p>
            <div className="w-24 h-1 bg-orange-400 mx-auto mt-6"></div>
          </div>

          <div className="mb-16">
            <h4 className="text-xl font-semibold text-center mb-8">Funding Partners</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {partners.filter(partner => partner.type === 'funding').map(partner => (
                <motion.div
                  key={partner.id}
                  className="flex flex-col items-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="h-32 w-full flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h4 className="text-xl font-semibold text-center mb-8">Strategic Partners</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {partners.filter(partner => partner.type === 'strategic').map(partner => (
                <motion.div
                  key={partner.id}
                  className="flex flex-col items-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="h-32 w-full flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default TeamSection;
