import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-black rounded-xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 text-orange-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Get in Touch With Us
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Whether you're interested in our programs, want to support our mission, or need more information, we'd love to hear from you.
              </motion.p>
              
              <motion.div 
                className="space-y-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-start">
                  <Mail className="mr-3 text-orange-500 mt-1" size={20} />
                  <div>
                    <p className="font-bold text-white">Email</p>
                    <p className="text-gray-300">info@nivishe.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mr-3 text-orange-500 mt-1" size={20} />
                  <div>
                    <p className="font-bold text-white">Phone</p>
                    <p className="text-gray-300">+254 700 000 000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="mr-3 text-orange-500 mt-1" size={20} />
                  <div>
                    <p className="font-bold text-white">Location</p>
                    <p className="text-gray-300">Nairobi, Kenya</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button className="bg-black text-white">Contact Us</Button>

              </motion.div>
            </div>
            
            <div className="bg-orange-500 p-8 md:p-12">
              <motion.form
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-white">Send us a message</h3>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <div>
                  <Button variant="secondary" className="w-full">
                    Send Message
                  </Button>
                </div>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;