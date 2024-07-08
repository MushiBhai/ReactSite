import React from 'react';
import './App.css';
// eslint-disable-next-line no-unused-vars
import Header from './components/header.jsx';
import HeroSection from './components/heroSection.jsx';
import Logos from './components/logosSection.jsx';
import Services from './components/Services.jsx';
import CtaSection from './components/CtaSection.jsx';
import CaseStudies from './components/CaseStudies.jsx';
import Working from './components/Working.jsx';
import Teams from './components/Teams.jsx';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Logos />
      <Services />
      <CtaSection />
      <CaseStudies />
      <Working />
      <Teams/>
    </div>
  );
}

export default App;
