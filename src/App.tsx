import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import FellowshipsPage from './pages/FellowshipsPage';

// import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
import HHJProgram from './pages/programs/hhj';
import BintiWellnessProgram from './pages/programs/binti';
import ChildAndAdolescentWellbeing from './pages/programs/child-wellbeing';
import NivisheInstitute from './pages/programs/nivisheinstitute';
import QuarterlyReports from './pages/Quarterly-Reports'; 
import NewsPage from './pages/News-Insights';
import ResearchPapersPage from './pages/ResearchPapers';
import NivisheFellowship from './pages/NivisheMentalHealth';
import SystemsChange from './pages/SystemsChange';
import CommunityHealing from './pages/CommunityCentred';
import Newsletter from './pages/NewsLetter';
import NewsAnnouncements from './pages/NewsAnnouncements';
import ComicBooksPublications from './pages/ComicBooksPublications';
import PerspectiveBlog from './pages/PerspectiveBlog';
import ImpactStories from './pages/ImpactStories';
import Tales from './pages/Tales';
import AboutUs from './pages/StrategyAbout';
import ResourcesPage from './pages/Resources';

import VolunteerPage from './pages/volunteer';
import PartnershipPage from './pages/partner';
// import ImpactPage from './pages/impact';
import ImpactStats from './pages/impact';
import CommunityCapacity from './pages/Community';
import CommunityResearch from './pages/Research';
import JusticeHealthProgram from './pages/Criminal';
import Policy from './pages/Policy';
import CreativeHealing from './pages/Healing-Play';
import DigitalInnovationLab from './pages/Digital';
import SafeHealingSpaces from './pages/SafeHealing';



const App: React.FC = () => {
  useEffect(() => {
    document.title = 'Nivishe Foundation | Mental Health for All';
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/about" element={<AboutPage />} /> */}
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/fellowships" element={<FellowshipsPage />} />
            {/* <Route path="/news" element={<NewsPage />} /> */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/programs/hhj" element={<HHJProgram />} />
            <Route path="/programs/binti" element={<BintiWellnessProgram/>} />
            <Route path="/programs/child-wellbeing" element={<ChildAndAdolescentWellbeing/>} />
            <Route path="/programs/nivishe" element={<NivisheInstitute/>} />
            <Route path="/volunteer" element={<VolunteerPage/>} />
            <Route path="/partnerships" element={<PartnershipPage/>} />
            <Route path="/impact" element={<ImpactStats/>} />
            <Route path='/reports' element={<QuarterlyReports/>} />
            <Route path='/news-insights' element={<NewsPage/>} />
            <Route path='/research' element={<ResearchPapersPage/>} />
            <Route path='/institute/fellowship' element={<NivisheFellowship/>} />
            <Route path='/systems-change' element={<SystemsChange/>} />
            <Route path='/community-innovation' element={<CommunityHealing/>} />
            <Route path='/news-letter' element={<Newsletter/>} />
            <Route path='/announcements' element={<NewsAnnouncements/>} />
            <Route path='/publication' element={<ComicBooksPublications/>} />
            <Route path='/blogs' element={<PerspectiveBlog/>} />
            <Route path='/impact-stories' element={<ImpactStories/>} />
            <Route path='/tales' element={<Tales/>} />
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/capacity-building' element={<CommunityCapacity/>} />
            <Route path='/knowledge-research' element={<CommunityResearch/>}/>
            <Route path='/Criminal' element={<JusticeHealthProgram/>}/>
            <Route path='/policy' element={<Policy/>}/>
            <Route path='/healing' element={<CreativeHealing/>}/>
            <Route path='/Digital'element={<DigitalInnovationLab/>}/>
            <Route path='/safe-healing' element={<SafeHealingSpaces/>}/>
            <Route path='/resources' element={<ResourcesPage/>} />
            {/* <Route path='/about' element={<AboutUs/>} /> */}

            {/* <Route path="/impact" element={<ImpactPage/>}/> */}
            {/* <Route path="/impact" element={<ImpactStats/>} /> */}
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;