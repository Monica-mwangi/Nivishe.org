import React from 'react';
import Hero from '../components/home/Hero';
import TraumaSection from '../components/home/TraumaSection';
// import Mission from '../components/home/Mission';
import ProgramsSection from '../components/home/ProgramSection';
import ImpactStats from '../components/home/ImpactStats';
// import Programs from '../components/home/Programs';
import TeamSection from '../components/home/TeamSection';
import NewsSection from '../components/home/NewsSection';
// import FellowshipCTA from '../components/home/FellowshipCTA';
import Testimonials from '../components/home/Testimonials';
import DownloadProfileSection from '../components/home/OrganizationProfile';
// import ContactCTA from '../components/home/ContactCTA';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <TraumaSection/>
      {/* <Mission /> */}
      <ProgramsSection/>
      <ImpactStats />
      {/* <Programs /> */}
      <TeamSection />
      {/* <FellowshipCTA /> */}
      <Testimonials />

      <DownloadProfileSection />
       <NewsSection />

     
      {/* <ContactCTA /> */}
    </div>
  );
};

export default HomePage;