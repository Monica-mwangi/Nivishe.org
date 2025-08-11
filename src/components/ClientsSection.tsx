import React from 'react';

const ClientsSection = () => {
  const clients = [
    {
      name: "TechStart Inc.",
      logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      industry: "Technology"
    },
    {
      name: "GreenEarth Co.",
      logo: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      industry: "Sustainability"
    },
    {
      name: "FinanceFlow",
      logo: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      industry: "Financial Services"
    },
    {
      name: "HealthCare Plus",
      logo: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      industry: "Healthcare"
    },
    {
      name: "EduLearn",
      logo: "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      industry: "Education"
    },
    {
      name: "RetailMax",
      logo: "https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      industry: "E-commerce"
    },
    {
      name: "FoodieConnect",
      logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      industry: "Food & Beverage"
    },
    {
      name: "TravelWise",
      logo: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      industry: "Travel & Tourism"
    }
  ];

  const caseStudies = [
    {
      client: "TechStart Inc.",
      challenge: "Low online visibility and poor conversion rates",
      solution: "Comprehensive SEO strategy and website redesign",
      result: "400% increase in organic traffic, 250% boost in conversions",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      client: "GreenEarth Co.",
      challenge: "Brand awareness and digital presence gaps",
      solution: "Brand identity redesign and social media campaign",
      result: "300% growth in social following, 180% increase in brand recognition",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      client: "FinanceFlow",
      challenge: "Complex user journey and low engagement",
      solution: "UX optimization and personalized content strategy",
      result: "500% improvement in user engagement, 220% increase in leads",
      image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Trusted by Leading Brands</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to partner with innovative companies across various industries, 
            helping them achieve remarkable digital transformation.
          </p>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {clients.map((client, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center card-hover">
              <div className="text-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-16 h-16 object-cover rounded-lg mx-auto mb-3"
                />
                <h4 className="font-semibold text-gray-900 text-sm">{client.name}</h4>
                <p className="text-xs text-gray-500">{client.industry}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Success Stories</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                <img
                  src={study.image}
                  alt={study.client}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{study.client}</h4>
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-700 mb-1">Challenge:</h5>
                    <p className="text-gray-600 text-sm mb-3">{study.challenge}</p>
                    <h5 className="font-semibold text-gray-700 mb-1">Solution:</h5>
                    <p className="text-gray-600 text-sm mb-3">{study.solution}</p>
                    <h5 className="font-semibold text-gray-700 mb-1">Result:</h5>
                    <p className="text-blue-600 font-medium text-sm">{study.result}</p>
                  </div>
                  <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200">
                    Read Full Case Study →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="btn-primary">View All Case Studies</button>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;