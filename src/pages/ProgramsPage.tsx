import React from 'react';
import Section from '../components/ui/Section';
import { programs } from '../data/content';
import { Heart, GraduationCap, Scale, Users } from 'lucide-react';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'heart':
      return <Heart size={48} className="text-orange-400" />;
    case 'graduation-cap':
      return <GraduationCap size={48} className="text-orange-400" />;
    case 'scale':
      return <Scale size={48} className="text-orange-400" />;
    case 'users':
      return <Users size={48} className="text-orange-400" />;
    default:
      return <Heart size={48} className="text-orange-400" />;
  }
};

const ProgramsPage: React.FC = () => {
  return (
    <div className="pt-16">
      <Section
        title="Our Programs"
        subtitle="Transforming mental health through comprehensive, community-centered approaches"
        className="bg-black"
        dark
      >
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white p-8 rounded-lg transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="bg-black rounded-full p-4 w-20 h-20 flex items-center justify-center mb-6">
                {getIcon(program.icon)}
              </div>
              <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default ProgramsPage;