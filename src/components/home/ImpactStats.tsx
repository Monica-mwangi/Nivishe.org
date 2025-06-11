import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { impactStats } from '../../data/content';
import { Link } from 'react-router-dom';

const ImpactStats: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState(impactStats.map(() => 0));

  // Filter out specific cards
  const filteredStats = impactStats.filter(stat => 
    !stat.description.includes("caregivers, teachers, and frontline responders") &&
    !stat.description.includes("incarcerated youth and adults received")
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          startCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const startCounters = () => {
    filteredStats.forEach((stat, index) => {
      const target = parseInt(stat.figure.replace(/,/g, ''));
      const duration = 2000;
      const increment = target / (duration / 16);

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
      className="relative py-20"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/partner.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Transforming Lives
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            className="w-24 h-1 bg-orange-500 mx-auto mt-6"
          />
        </div>

        {/* Impact Stats Grid */}
        <div 
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12"
        >
          {filteredStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold text-orange-500 mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ type: 'spring', delay: index * 0.1 + 0.3 }}
              >
                {counters[index].toLocaleString()}+
              </motion.div>
              <p className="text-white text-sm md:text-base font-medium px-2">
                {stat.description.split(' ').slice(0, 5).join(' ')}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Impact CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Link
            to="/impact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300"
          >
            Read About Our Impact
          </Link>
        </motion.div>
      </div>

      {/* Clean Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-white -mb-px" />
    </section>
  );
};

export default ImpactStats;