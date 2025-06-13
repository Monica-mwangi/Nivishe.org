import React from 'react';
import { motion } from 'framer-motion';
import { boardMembers, staffMembers,partners } from '../data/content';

const AboutUs = () => {
  const principles = [
    {
      title: "Community-Led and Contextualized",
      description: "We believe those closest to the problem are closest to the solution. Our work is rooted in the wisdom, knowledge, and participation of the communities we serve."
    },
    {
      title: "Feminist and Survivor-Centered",
      description: "We recognize the structural inequities that impact women, girls, and survivors of violence. Our programming ensures safety, agency, and voice for those most impacted."
    },
    {
      title: "Healing Justice",
      description: "We adopt a holistic approach to mental health that centers collective care, cultural identity, and systemic change."
    },
    {
      title: "Intersectional and Inclusive",
      description: "We acknowledge the multiple and overlapping systems of oppression that impact mental well-being and intentionally design programs that reach people across lines of gender, ethnicity, ability, class, and geography."
    },
    {
      title: "Innovation with Impact",
      description: "We blend traditional knowledge with cutting-edge tools like art, technology, and data for meaningful mental health transformation."
    }
  ];

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <div className="relative h-[100vh] min-h-[500px] flex items-center justify-center pt-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/About-3.jpg"
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
            About Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-sm"
          >
            Transforming Mental Health Access, One Community at a Time
          </motion.p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 border-l-4 border-orange-600"
              >
                <h2 className="text-2xl font-bold mb-4 text-orange-600">Our Mission</h2>
                <p className="text-lg text-justify">
                  We improve access to dignified, culturally sensitive and affordable mental health 
                  services and literacy in Kenya's low income and marginalized communities.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 border-l-4 border-orange-600"
              >
                <h2 className="text-2xl font-bold mb-4 text-orange-600">Our Vision</h2>
                <p className="text-lg text-justify">
                  A world where every individual, regardless of their background, can access dignified,
                  culturally sensitive, and transformative mental health care and interventions
                  ensuring communities to heal, thrive, and lead with resilience.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* History / Our Why */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
                Our History & Why
              </h2>
              <div className="w-20 h-1 bg-orange-600 mx-auto mb-6"></div>
            </motion.div>
            
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-justify"
              >
                Mental health is a human right yet for millions across Africa, it remains a distant dream.
                In Kenya alone, an estimated 1 in 4 people experience mental health conditions during their
                lifetime (World Health Organization), but fewer than 10% ever receive the support they need.
                For communities living in poverty, displacement, or marginalization including Nubian,
                refugee, and indigenous groups this gap is even wider.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-justify"
              >
                Nivishe Foundation was born from a deeply personal understanding of these injustices. Our
                founder grew up witnessing how mental health challenges were not only neglected, but often
                met with stigma, silence, or punishment. Access to care was rare, and when it existed, it often
                ignored the cultural realities of the people it intended to serve.
              </motion.p>
              
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-2xl italic border-l-4 border-orange-600 pl-6 py-3 my-8 text-orange-700"
              >
                "What would it mean to truly center dignity, culture, and community in mental health?"
              </motion.blockquote>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-justify"
              >
                Nivishe, meaning "clothe me" in Kiswahili, symbolizes our mission to wrap marginalized
                communities in understanding, empathy, and healing restoring what structural inequality
                has stripped away.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-lg text-justify"
              >
                We don't just provide services; we create safe spaces, build local leadership, and reimagine
                mental health interventions through African eyes and experiences. We believe in solutions
                by the community, for the community where lived experience is valued as deeply as
                clinical knowledge.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-lg font-semibold text-justify"
              >
                Today, our work continues to answer that original call: To ensure that no one, no matter their story, is left unseen, unheard, or unsupported.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
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
              Our Guiding Principles
            </h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              The core values that shape every aspect of our work
            </p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold mb-4 text-orange-600">{principle.title}</h3>
                <p className="text-gray-700">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
              Board of Directors
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
              {[...boardMembers, ...boardMembers].map((member, index) => (
                <motion.div
                  key={`${member.id}-${index}`}
                  className="min-w-[300px] md:min-w-[350px] text-center border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col flex-shrink-0 bg-white"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  {/* Rounded profile image */}
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

      {/* Staff Team */}
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
                  {/* Rounded profile image */}
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
       <div className="mt-9">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Partners</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We collaborate with these outstanding organizations to amplify our impact.
          </p>
          <div className="w-24 h-1 bg-orange-400 mx-auto mt-6"></div>
        </div>
      
        {/* Funding Partners */}
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
      
        {/* Strategic Partners */}
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

      {/* CTA */}
      {/* <section className="py-20 bg-orange-600 text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Join Our Healing Movement
            </h2>
            <p className="text-xl mb-10 text-white max-w-2xl mx-auto">
              Be part of transforming mental health care in marginalized communities
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* <a
                href="/get-involved"
                className="bg-white hover:bg-amber-100 text-orange-600 px-6 py-3 rounded-lg font-medium transition-colors shadow-lg"
              >
                Get Involved
              </a> */}
              {/* <a
                href="/donate"
                className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg"
              >
                Support Our Work
              </a>
            </div>
          </motion.div>
        </div>
      // </section> */} 
    </div>
  );
};

export default AboutUs;