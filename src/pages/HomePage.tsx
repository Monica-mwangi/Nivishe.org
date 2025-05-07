import React from 'react';
import Hero from '../components/home/Hero';
import Mission from '../components/home/Mission';
import ImpactStats from '../components/home/ImpactStats';
import Programs from '../components/home/Programs';
import TeamSection from '../components/home/TeamSection';
// import NewsSection from '../components/home/NewsSection';
import FellowshipCTA from '../components/home/FellowshipCTA';
import Testimonials from '../components/home/Testimonials';
import ContactCTA from '../components/home/ContactCTA';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <ImpactStats />
      <Programs />
      <TeamSection />
      <FellowshipCTA />
      <Testimonials />
      {/* <NewsSection /> */}
      <ContactCTA />
    </div>
  );
};

export default HomePage;