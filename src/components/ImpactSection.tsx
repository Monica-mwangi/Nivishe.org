import React from 'react';
import { TrendingUp, Users, Award, Globe } from 'lucide-react';

const ImpactSection = () => {
  const impactStats = [
    {
      icon: Users,
      number: "500+",
      label: "Businesses Transformed",
      description: "From startups to enterprises, we've helped businesses of all sizes achieve digital success."
    },
    {
      icon: TrendingUp,
      number: "300%",
      label: "Average ROI Increase",
      description: "Our clients see an average return on investment increase of 300% within the first year."
    },
    {
      icon: Award,
      number: "15+",
      label: "Industry Awards",
      description: "Recognition for excellence in digital innovation and outstanding client results."
    },
    {
      icon: Globe,
      number: "25+",
      label: "Countries Served",
      description: "Global reach with local expertise, serving clients across multiple continents."
    }
  ];

  const testimonialStats = [
    "95% client retention rate",
    "4.9/5 average client satisfaction",
    "48-hour average response time",
    "100+ five-star reviews"
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Our Impact</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Measuring success through meaningful results and lasting partnerships 
            that drive real business transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-6">
                  <IconComponent className="text-white" size={24} />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-blue-100 mb-3">{stat.label}</div>
                <p className="text-blue-200 text-sm">{stat.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Why Clients Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonialStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-white font-semibold">{stat}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;