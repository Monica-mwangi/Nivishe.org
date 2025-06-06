import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
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


import VolunteerPage from './pages/volunteer';
import PartnershipPage from './pages/partner';
// import ImpactPage from './pages/impact';
import ImpactStats from './pages/impact';


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