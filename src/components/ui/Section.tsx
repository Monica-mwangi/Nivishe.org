import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  id?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  title,
  subtitle,
  id,
  dark = false,
}) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 ${dark ? 'bg-gray-900 text-white' : 'bg-white text-black'} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-8">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${dark ? 'text-yellow-400' : 'text-black'}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg md:text-xl max-w-3xl mx-auto ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
                {subtitle}
              </p>
            )}
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-6"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;