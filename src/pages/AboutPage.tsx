import React from 'react';
import Section from '../components/ui/Section';
import { history, mission, vision, values } from '../data/content';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-16">
      <Section
        title="Our Story"
        subtitle="Learn about our journey, mission, and the values that drive us"
        className="bg-black"
        dark
      >
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="bg-yellow-400 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-black">Our Mission</h3>
            <p className="text-black">{mission}</p>
          </div>
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p>{vision}</p>
          </div>
        </div>
      </Section>

      <Section title="Our History" className="bg-gray-50">
        <div className="prose max-w-4xl mx-auto">
          {history.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-lg text-gray-700 mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section
        title="Our Values"
        subtitle="The principles that guide our work"
        className="bg-white"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.id}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default AboutPage;