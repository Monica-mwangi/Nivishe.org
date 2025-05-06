import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { boardMembers, staffMembers } from '../../data/content';
import Button from '../ui/Button';

const TeamSection: React.FC = () => {
  const [openMemberId, setOpenMemberId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenMemberId(prevId => (prevId === id ? null : id));
  };

  const getMemberDescription = (id: string) => {
    const descriptions: { [key: string]: string } = {
      '1': 'Amisa is the visionary founder behind Nivishe, with a strong commitment to mental health advocacy and policy reform.',
      '2': 'Mariam ensures the smooth operation of all programs and partnerships, driving efficiency and excellence across the organization.',
      '3': 'Nanjala oversees financial strategy and accountability, maintaining integrity and transparency in resource management.',
      '4': 'Brian leads the research initiatives and grant acquisition to support evidence-based mental health programs.',
      '5': 'Miriam provides strategic and administrative support to the executive team, ensuring seamless coordination of activities.',
      '6': 'Cate directs the implementation of community programs, focusing on inclusion, equity, and sustainable impact.',
      '7': 'Wycliffe provides governance support with decades of experience in nonprofit leadership.',
      '8': 'Lucy brings legal oversight and expertise in child rights and mental health law.',
      '9': 'John ensures compliance and board-level accountability in the foundation’s operations.'
    };
    return descriptions[id] || 'More information about this team member will go here.';
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated professionals leading our mission to transform mental health across Kenya.
          </p>
          <div className="w-24 h-1 bg-orange-400 mx-auto mt-6"></div>
        </div>

        {/* Founder */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg mb-24">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 w-full h-80 overflow-hidden rounded-lg">
              <img 
                src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
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
        <div className="mb-16 mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Leadership Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {staffMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="text-center border border-gray-200 rounded-lg p-4 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative w-full h-64 overflow-hidden rounded-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                  <button 
                    onClick={() => toggleAccordion(member.id)}
                    className="absolute bottom-2 right-2 bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold hover:bg-orange-500 shadow-md"
                  >
                    {openMemberId === member.id ? '−' : '+'}
                  </button>
                </div>
                <h4 className="text-xl font-bold mt-4 mb-1">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>

                {openMemberId === member.id && (
                  <div className="mt-4 text-gray-700 text-sm transition-all duration-300 ease-in-out">
                    {getMemberDescription(member.id)}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Board of Directors with Accordion */}
        <div className="mb-16 mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Board of Directors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="text-center border border-gray-200 rounded-lg p-4 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative w-full h-64 overflow-hidden rounded-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                  <button 
                    onClick={() => toggleAccordion(member.id)}
                    className="absolute bottom-2 right-2 bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold hover:bg-orange-500 shadow-md"
                  >
                    {openMemberId === member.id ? '−' : '+'}
                  </button>
                </div>
                <h4 className="text-xl font-bold mt-4 mb-1">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>

                {openMemberId === member.id && (
                  <div className="mt-4 text-gray-700 text-sm transition-all duration-300 ease-in-out">
                    {getMemberDescription(member.id)}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          {/* <Button variant="primary">View All Team Members</Button> */}
        </div>

        {/* Partners Section */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold mb-8">Our Partners</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="h-24 flex items-center justify-center">
                <img 
                  src={`https://via.placeholder.com/150?text=Partner+${i}`} 
                  alt={`Partner ${i}`}
                  className="h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
