// components/layout/PageLayout.tsx
import React from 'react';

interface PageLayoutProps {
  coverImage: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ coverImage, title, subtitle, children }) => {
  return (
    <div className="w-full">
      {/* Cover Image Section */}
      <div
        className="w-full h-[100vh] bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${coverImage})` }}
      >
        <div className="w-full bg-gradient-to-t from-black to-transparent pb-16 pt-32 px-4 md:px-8">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white">{title}</h1>
            {subtitle && (
              <p className="text-xl md:text-2xl text-white mt-4 max-w-3xl">{subtitle}</p>
            )}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-wrapper py-16 px-4 md:px-8">
        <div className="content container mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
