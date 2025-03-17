import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Ensure Link is imported
import BookConsultation from './BookConsultation'; // Importing the form component
import '../styles/Aboutus.css'; // Import your styles
import Web3cards from './web3cards';

const Isows1 = () => {
  const [inView, setInView] = useState(false); // State to track visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  const animateServicesSection = () => {
    const servicesSection = document.getElementById('web3courses');
  
    // Add a class to trigger the animation
    servicesSection.classList.add('animate-section');
  
    // Optional: Scroll to the section for better visibility
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <style>
        {`
          #sw3ctopmenu {
            background-color: rgb(5, 21, 43);
            border-top-left-radius: 10px; /* Adjust the value as needed */
            border-top-right-radius: 10px; /* Adjust the value as needed */
          }
        `}
      </style>

      {/* Hero Section */}


      <section id="crypto-hero-section" className={`crypto-hero-section ${inView ? 'crypto-in-view' : ''}`}>
  <video className="crypto-hero-video-background" autoPlay muted loop playsInline>
    <source src="/assets/images/video/Error-Page.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="crypto-hero-overlay"></div> {/* Gradient overlay */}
  <div className="crypto-hero-content container">
  <div className="crypto-hero-text">
  <h1 className="crypto-header-title">
    <span className="crypto-title-line crypto-animate-text">Partner with us for</span><br/>
    <span className="crypto-title-line crypto-animate-text crypto-delay-1">
      <span className="crypto-highlight-text">Strategic Web 3.0 Consultancy</span>
    </span>
  </h1>
  <p className="crypto-hero-subtitle crypto-animate-text crypto-delay-2">
    Your roadmap to harnessing the power of decentralized technologies.
  </p>
  <button className="ger-sturtedbtn crypto-animate-fade-in crypto-delay-3" onClick={animateServicesSection}> 
  Learn More 
</button>
</div>
  </div>
  <div className="crypto-bouncing-circle"></div>
</section>

      {/* Breadcrumb */}
      <div className="container menudisplay breadcrumb">
        <Link to="/" className="homemenu">Home</Link> <span className="separator">&gt;</span> <span className="current-page">Strategic Web 3.0 Consultancy</span>
      </div>

      {/* Introductory Content */}
      <div className="container afterheading-section">
        <div className="row">
          <div className="col-xl-5 col-lg-5 afterheading-left">
            <div className="afterheading-title">
              <h2 className="afterheading-main-title">
                <span className="topspan">Strategic Web 3.0 Consultancy</span><br></br>
                Empowering your digital evolution with innovative Web 3.0 solutions.
              </h2>
            </div>
          </div>
          <div className="col-xl-6 offset-xl-1 col-lg-7 afterheading-right">
            <div className="afterheading-content">
              <p className="afterheading-highlight">
                Empowering your digital journey with innovative solutions in Blockchain & IT Solutions, Payment & Custody Solutions, RWA Tokenization, Strategic ICO Solutions, and Metaverse technologies.
              </p>
              <p className="afterheading-description">
                We are the one-stop shop destination for all our clients who need advanced digital asset services for their physical assets. Our main service offerings are the ones listed below.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Web3cards Component */}
      <Web3cards />

      {/* CTA Section */}
      <div
        className="ico-token-cta"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '30px',
          marginTop: '30px',
        }}
      >
        <Link to="/BookConsultations">
          <button className="cta-button">Ready to Launch? Book a Consultation</button>
        </Link>
      </div>
    </div>
  );
};

export default Isows1;