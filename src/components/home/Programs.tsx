import React from 'react';
import { Heart, GraduationCap, Scale, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { programs } from '../../data/content';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'heart':
      return <Heart size={32} className="text-orange-500" />;
    case 'graduation-cap':
      return <GraduationCap size={32} className="text-orange-500" />;
    case 'scale':
      return <Scale size={32} className="text-orange-500" />;
    case 'users':
      return <Users size={32} className="text-orange-500" />;
    default:
      return <Heart size={32} className="text-orange-500" />;
  }
};

const Programs: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Pillars</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our model is designed to create sustainable, scalable impact across four strategic pillars.
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500 h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-black rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                {getIcon(program.icon)}
              </div>
              <h3 className="text-xl font-bold mb-3">{program.title}</h3>
              <p className="text-gray-600 flex-grow">{program.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
        <Link to="/programs/hhj">
                      {/* <Button 
                variant="primary" 
                size="lg"
                className="text-white" // Add this
              >
                Learn More About Our Programs
              </Button> */}
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Programs;