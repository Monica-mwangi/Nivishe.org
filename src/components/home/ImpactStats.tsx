import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { impactStats } from '../../data/content';

const ImpactStats: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState(impactStats.map(() => 0));

  // Intersection Observer for scroll trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          startCounters(); // Trigger counter animation
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Animate counters
  const startCounters = () => {
    impactStats.forEach((stat, index) => {
      const target = parseInt(stat.figure.replace(/,/g, ''));
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, 16);
    });
  };

  return (
    <section 
      className="relative py-20 bg-black/60 overflow-hidden"
      style={{
        backgroundImage: "url('/images/partner.jpg')", // Add your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            At Nivishe Foundation, impact is not just measured by numbers — it's measured by healing.
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="relative overflow-hidden bg-white/50 p-6 rounded-lg shadow-2xl text-center flex flex-col items-center hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0.5, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* <div className="mb-4 bg-orange-500 rounded-full h-16 w-16 flex items-center justify-center">
                <span className="text-white text-xl font-bold">{index + 1}</span>
              </div> */}
              
              <motion.h3
                className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2"
                initial={{ opacity: 0.5 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1.5, delay: index * 0.1 + 0.3 }}
              >
                {counters[index].toLocaleString()}+
              </motion.h3>
              
              <p className="text-gray-700">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg
          className="relative block w-full h-[100px]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
};

export default ImpactStats;