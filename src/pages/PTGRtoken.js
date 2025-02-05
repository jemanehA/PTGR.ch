import React, { useState,useEffect } from "react";
import { Link } from 'react-router-dom';  // Ensure Link is imported
const PTGRToken = () => {
  const [inView, setInView] = useState(false); // State to track visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting); // Set state when the section is in view
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    const section = document.getElementById('home'); // Select the section
    if (section) {
      observer.observe(section); // Start observing the section
    }

    return () => {
      if (section) {
        observer.unobserve(section); // Clean up the observer
      }
    };
  }, []);
  // State to control modal visibility
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    console.log("Modal opened:", true);
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    console.log("Modal Close:", true);
    setModalOpen(false);
  };

  const animateServicesSection = () => {
    const servicesSection = document.getElementById('digitalassetservices');
  
    // Add a class to trigger the animation
    servicesSection.classList.add('animate-section');
  
    // Optional: Scroll to the section for better visibility
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  };
  //working on showing a full list
  

  // Fetch crypto prices from CoinGecko API

  return (
    <div>
      <style>
        {`
          #ptgrDropdown {
            background-color: rgb(5, 21, 43);
            border-top-left-radius: 10px; /* Adjust the value as needed */
            border-top-right-radius: 10px; /* Adjust the value as needed */
          }
        `}
      </style>



    <section id="about-hero-section" className={`about-hero-section ${inView ? 'about-in-view' : ''}`}>
        <video className="about-hero-video-background" autoPlay muted loop playsInline>
          <source src="/assets/images/video/PTGR.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="about-ptgr-overlay"></div>
        <div className="about-hero-content container">
          <div className="crypto-hero-text">
          <h1 className="crypto-header-title">
    <span className="crypto-title-line crypto-animate-text" style={{fontSize:'80px'}}>PTGR Token </span><br/>
    <span className="crypto-title-line crypto-animate-text crypto-delay-1">
      <span className="crypto-highlight-text">The Future Of Finance.</span>
    </span>
  </h1>
            <p className="crypto-hero-subtitle crypto-animate-text crypto-delay-2">
            We provide guidance into the world of digital investing.
            </p>
            <button className="ger-sturtedbtn crypto-animate-fade-in crypto-delay-3" onClick={animateServicesSection}> 
  Learn More <i className="fas fa-play"></i>
</button>            &nbsp;&nbsp;&nbsp; <button className="ger-sturtedbtn crypto-animate-fade-in crypto-delay-3"  style={{backgroundColor:'#88600a'}}onClick={animateServicesSection}> 
  Buy PTGR Token 
</button>
          </div>
        </div>
        <div className="about-bouncing-circle"></div>
      </section>

    <div className="container menudisplay breadcrumb">

</div>


<div class="container afterheading-section">
  <div class="row">
   
    <div class="col-xl-5 col-lg-5 afterheading-left">
      <div class="afterheading-title">
        <h2 class="afterheading-main-title"><span className="topspan">PTGR Token</span><br></br>Connecting You to the Best Investments.</h2>
      </div>
    </div>
    
   
    <div class="col-xl-6 offset-xl-1 col-lg-7 afterheading-right">
      <div class="afterheading-content">
 
        <p class="afterheading-description">
        Founded in 2014 and transformed into a public limited company in 2023, PTGR AG is a leading Digital Asset Advisory Firm in Switzerland. We specialize in portfolio diversification, education, metaverse development, tokenization, and blockchain business integration.</p>
      </div>
    </div>
  </div>
</div>



</div>
  );
};

export default PTGRToken;
