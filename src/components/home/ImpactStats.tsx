import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { impactStats } from '../../data/content';

const ImpactStats: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-br from-orange-500 via-orange-500 to-orange-500">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Impact</h2>
        <p className="text-lg text-gray-800 max-w-2xl mx-auto">
          At Nivishe Foundation, impact is not just measured by numbers — it's measured by healing, empowerment, and systemic change.
        </p>
        <div className="w-24 h-1 bg-black mx-auto mt-6"></div>
      </div>
  
      <div 
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {impactStats.map((stat, index) => (
          <motion.div
            key={stat.id}
            className="relative overflow-hidden bg-white/90 p-6 rounded-t-lg shadow-md text-center flex flex-col items-center transform hover:-translate-y-1 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="mb-4 bg-black rounded-full h-16 w-16 flex items-center justify-center">
              <span className="text-orange-500 text-xl font-bold">{index + 1}</span>
            </div>
            <motion.h3
              className="text-3xl sm:text-4xl font-bold text-black mb-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1.5, delay: index * 0.1 + 0.3 }}
            >
              {stat.figure}
            </motion.h3>
            <p className="text-gray-700">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  
    {/* SECTION BOTTOM CONCAVE CURVE */}
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
      <svg
        className="relative block w-full h-[100px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"
          className="fill-white"
        ></path>
      </svg>
    </div>
  </section>
  

  );
};

export default ImpactStats;