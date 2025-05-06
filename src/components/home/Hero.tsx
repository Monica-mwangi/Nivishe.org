import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateOpacity = () => {
    // Start fading at 100px scroll, complete fade by 300px
    const opacity = 1 - Math.min(1, Math.max(0, (scrollPosition - 100) / 200));
    return opacity;
  };

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/cover.jpg" 
          alt="Mental health support" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      {/* Text content */}
      <div 
        className="container mx-auto px-4 relative z-10 text-center"
        style={{ opacity: calculateOpacity() }}
      >
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-orange-500">Clothing</span> Communities in <span className="text-orange-500">Care</span> and <span className="text-orange-500">Healing</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transforming mental health access in Kenya's marginalized communities
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link to="/programs/binti">
                        <Button variant="primary" size="lg">Our Programs</Button>
                      </Link>
     
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 1.5 
        }}
        onClick={scrollToNextSection}
        style={{ opacity: calculateOpacity() }}
      >
        <ArrowDown className="text-orange-500" size={32} />
      </motion.div>
    </div>
  );
};

export default Hero;