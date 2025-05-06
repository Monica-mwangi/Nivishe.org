import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { mission, vision } from '../../data/content';

const Mission: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Ensure both cards stretch to equal height */}
        <div className="flex flex-col md:flex-row gap-12 items-stretch">
          
          {/* Mission Card */}
          <motion.div 
            className="md:w-1/2 flex"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col h-full bg-orange-500 p-6 md:p-10 rounded-lg shadow-xl relative">
              {/* Icon at the top-left */}
              <div className="absolute -top-6 -left-6 bg-black rounded-full p-4">
                <Heart className="text-orange-500" size={32} />
              </div>
              
              <h2 className="text-3xl font-bold mb-4 text-black">Our Mission</h2>
              
              {/* This paragraph will expand to make the heights equal */}
              <p className="text-lg text-black flex-grow">{mission}</p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            className="md:w-1/2 flex"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col h-full bg-black p-6 md:p-10 rounded-lg shadow-xl relative">
              {/* Icon at the top-left */}
              <div className="absolute -top-6 -left-6 bg-orange-500 rounded-full p-4">
                <span className="text-black text-2xl font-bold">✨</span>
              </div>

              <h2 className="text-3xl font-bold mb-4 text-yellow-400">Our Vision</h2>

              {/* This paragraph will expand to make the heights equal */}
              <p className="text-lg text-white flex-grow">{vision}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Mission;
