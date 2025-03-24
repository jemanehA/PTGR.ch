import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection'; 
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import InvestmentControl from '../components/InvestmentControl';
import EfficiencySection from '../components/EfficiencySection';
import CeoMessage from '../components/CeoMessage';
import AmazingPartners from '../components/AmazingPartners';
import Testimonial from '../components/Testimonial';
import Testimonialss from '../components/Testminoialss';
import '../styles/ptgrhome.css';
import '../styles/newhero.css';
function Home() {
  useEffect(() => {
    document.title = 'PTGR AG Home';
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return (
    <div>
    <HeroSection />
    <AboutSection/>
    <ServicesSection/>
 {/* <InvestmentControl/> */}
 {/* <section class="ptgr-token-section" style={{ backgroundImage: "url('/assets/images/ptgrba.png')" }}>
 <div class="ptgr-token-content">
    <h2 class="ptgr-token-heading">PTGR</h2>
    <p class="ptgr-token-subheading">The Future Of Finance</p>
    <p class="ptgr-token-description">
      The PTGR token’s utility extends beyond staking and community rewards: it offers holders reduced fees on SDAA services and access to exclusive investment opportunities.
    </p>

    <div className="ptgr-token-video">
  <video
    width="100%"
    height="auto"
    autoPlay
    muted
    loop
    controls
    style={{ borderRadius: '8px' }} // Use an object for the style prop
  >
    <source src="/assets/images/video/Test.MP4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
    <div class="ptgr-token-cta">
      <a href="#" class="btn btn-primary">Learn More</a>
      <a href="#" class="btn btn-secondary">Buy Now</a>
    </div>
  </div>
</section> */}
<section class="ptgr-token-section" style={{ backgroundImage: "url('/assets/images/ptgrba.png')" }}>
  <div class="ptgr-token-content">
    <img className='ptgr-token-img' src='/assets/images/ptgr-mod-alt-3.png' alt='PTGR Token' />
    <h2 class="ptgr-token-heading">PTGR Token</h2>
    <p class="max-md:leading-[80px] coming-soon-message">Coming Soon</p>
    <p class="stay-tuned-message">
      Stay tuned for the best token in the world 
      <div className='mt-4 md:mt-2'>Made in  
        <span class="switzerland-text">
          &nbsp;Switzerland &nbsp; 
          <img src="/assets/images/swizerlandflag.png" alt="Switzerland Flag" class="flag-icon" />
        </span> 
      </div>
    </p>
  </div>
</section>
 <EfficiencySection/>
<Testimonialss/>
 {/* <CeoMessage/> */}
<AmazingPartners/>
    </div>
  );
}

export default Home;
