import React from 'react';
import { Target, Eye, Heart, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses with innovative digital solutions that drive growth and create meaningful connections with their audiences."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the leading digital transformation partner, helping businesses thrive in an ever-evolving digital landscape."
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Excellence, integrity, innovation, and client-first approach guide everything we do in our pursuit of digital excellence."
    },
    {
      icon: TrendingUp,
      title: "Our Impact",
      description: "Over 500+ successful projects, 95% client retention rate, and thousands of professionals trained in digital skills."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">About Edel Digital</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a passionate team of digital experts dedicated to transforming businesses through 
            innovative strategies, cutting-edge technology, and comprehensive education.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6">
              Founded with a vision to bridge the gap between traditional business practices and 
              digital innovation, Edel Digital has grown from a small startup to a trusted partner 
              for businesses across various industries.
            </p>
            <p className="text-gray-600 mb-6">
              Our journey began with the belief that every business deserves access to world-class 
              digital solutions. Today, we continue to push boundaries, embrace new technologies, 
              and deliver exceptional results that exceed our clients' expectations.
            </p>
            <p className="text-gray-600">
              Through our comprehensive services and academy, we not only transform businesses but 
              also empower individuals with the skills needed to succeed in the digital age.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Our team at work"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg opacity-20"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="text-center card-hover bg-white p-8 rounded-xl shadow-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full mb-6">
                  <IconComponent className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;