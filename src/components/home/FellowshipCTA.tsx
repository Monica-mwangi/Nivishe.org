import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const FellowshipCTA: React.FC = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-orange-500 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-orange-500 translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-orange-500"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Join the Nivishe Mental Health Fellowship
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Applications are now open for Cohort 5! Become a mental health leader in your community through our transformative fellowship program.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/fellowships">
              <Button variant="primary" size="lg">Apply Now</Button>
            </Link>
            {/* <Button variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">Learn More</Button> */}
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-orange-500 text-xl font-bold mb-2">10</h3>
              <p className="text-white">African Countries</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-orange-500 text-xl font-bold mb-2">300+</h3>
              <p className="text-white">Fellowship Graduates</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-orange-500 text-xl font-bold mb-2">12</h3>
              <p className="text-white">Weeks Program</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FellowshipCTA;