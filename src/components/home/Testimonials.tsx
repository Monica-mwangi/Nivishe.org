import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { fellows } from '../../data/content';

const testimonialsWithQuotes = fellows.filter(fellow => fellow.testimonial);

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsWithQuotes.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsWithQuotes.length) % testimonialsWithQuotes.length);
  };

  if (testimonialsWithQuotes.length === 0) return null;

  const current = testimonialsWithQuotes[currentIndex];

  return (
    <section className="py-20 bg-orange-400">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Voices of Impact</h2>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            Hear from the people whose lives have been transformed through our programs.
          </p>
          <div className="w-24 h-1 bg-black mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-6 md:-translate-x-12">
            <button 
              onClick={prevTestimonial}
              className="bg-black text-yellow-400 p-2 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-6 md:translate-x-12">
            <button 
              onClick={nextTestimonial}
              className="bg-black text-yellow-400 p-2 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <motion.div
            key={current.id}
            className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="bg-black rounded-full p-4">
                <Quote className="text-yellow-400" size={32} />
              </div>
            </div>
            
            <div className="mb-8 mt-6">
              <p className="text-lg md:text-xl italic text-gray-700 mb-6">"{current.testimonial}"</p>
              
              <div className="flex items-center justify-center">
                <div className="mr-4 w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-400">
                  <img 
                    src={current.image} 
                    alt={current.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-lg">{current.name}</h4>
                  <p className="text-gray-600">{current.cohort}, {current.country}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-6">
              {testimonialsWithQuotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 mx-1 rounded-full ${
                    index === currentIndex ? 'bg-black' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;