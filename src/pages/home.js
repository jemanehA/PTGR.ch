import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection'; 
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import InvestmentControl from '../components/InvestmentControl';
import EfficiencySection from '../components/EfficiencySection';
import CeoMessage from '../components/CeoMessage';
import AmazingPartners from '../components/AmazingPartners';
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return (
    <div>
    <HeroSection />
    <AboutSection/>
    <ServicesSection/>
 <InvestmentControl/>
 <EfficiencySection/>
 <CeoMessage/>
<AmazingPartners/>
    </div>
  );
}

export default Home;
