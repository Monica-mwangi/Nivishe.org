import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Clock } from 'lucide-react'; // Added Clock icon
import { mission, vision, history } from '../../data/content'; // Added history import

const Mission: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-stretch mb-16"> {/* Added mb-16 */}
          
          {/* Mission Card */}
          <motion.div 
            className="md:w-1/2 flex"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col h-full bg-orange-500 p-6 md:p-10 rounded-lg shadow-xl relative">
              <div className="absolute -top-6 -left-6 bg-black rounded-full p-4">
                <Heart className="text-orange-500" size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
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
              <div className="absolute -top-6 -left-6 bg-orange-500 rounded-full p-4">
                <span className="text-black text-2xl font-bold">✨</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-orange-500">Our Vision</h2>
              <p className="text-lg text-white flex-grow">{vision}</p>
            </div>
          </motion.div>

        </div>

        {/* History Card */}
        <motion.div 
          className="w-full flex"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="w-full bg-gray-100 p-6 md:p-10 rounded-lg shadow-xl relative border-2 border-orange-500">
            <div className="absolute -top-6 -left-6 bg-orange-500 rounded-full p-4">
              <Clock className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our History</h2>
            <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
              {history}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Mission;