import React from 'react';
import { Palette, Code, TrendingUp, Megaphone, Globe, BarChart3 } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Design & Identity",
      description: "Create compelling brand identities that resonate with your audience and stand out in the marketplace.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Build responsive, fast, and user-friendly websites that convert visitors into customers.",
      features: ["Responsive Design", "E-commerce Solutions", "CMS Development", "Performance Optimization"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Grow your online presence with data-driven marketing strategies that deliver measurable results.",
      features: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Email Marketing"]
    },
    {
      icon: Megaphone,
      title: "Social Media Management",
      description: "Engage your audience across all platforms with strategic content and community management.",
      features: ["Content Creation", "Community Management", "Influencer Partnerships", "Social Analytics"]
    },
    {
      icon: Globe,
      title: "Digital Strategy",
      description: "Develop comprehensive digital strategies that align with your business goals and drive growth.",
      features: ["Digital Audits", "Competitive Analysis", "Growth Planning", "Technology Consulting"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Make informed decisions with comprehensive analytics and actionable business intelligence.",
      features: ["Performance Tracking", "ROI Analysis", "Custom Dashboards", "Business Intelligence"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to accelerate your business growth and 
            establish a powerful online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="card-hover bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full mb-6">
                  <IconComponent className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;