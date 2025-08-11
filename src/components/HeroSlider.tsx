import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Play } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Transform Your Digital Presence",
      subtitle: "Elevate your brand with cutting-edge digital solutions",
      description: "We help businesses unlock their full potential through innovative digital strategies, creative design, and powerful technology solutions.",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      primaryCTA: "Get Started Today",
      secondaryCTA: "Watch Our Story"
    },
    {
      id: 2,
      title: "Master Digital Skills",
      subtitle: "Learn from industry experts at Edel Academy",
      description: "Join thousands of professionals who have transformed their careers through our comprehensive digital marketing and design courses.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      primaryCTA: "Explore Courses",
      secondaryCTA: "Free Consultation"
    },
    {
      id: 3,
      title: "Results That Matter",
      subtitle: "Proven strategies, measurable impact",
      description: "Our data-driven approach has helped over 500+ businesses achieve remarkable growth and digital transformation success.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      primaryCTA: "View Case Studies",
      secondaryCTA: "Schedule Meeting"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 text-center text-white">
              <h2 className="text-sm uppercase tracking-wider text-orange-400 mb-4 animate-fade-in-up">
                {slide.subtitle}
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
                {slide.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
                <button className="btn-primary flex items-center justify-center space-x-2">
                  <span>{slide.primaryCTA}</span>
                  <ArrowRight size={20} />
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Play size={20} />
                  <span>{slide.secondaryCTA}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-2 rounded-full bg-white bg-opacity-20 text-white hover:bg-opacity-30 transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-2 rounded-full bg-white bg-opacity-20 text-white hover:bg-opacity-30 transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-orange-500' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;