import React, { useState, useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';  // Ensure Link is imported
import '../styles/CertifiedExpertCryptoProgram.css'; // Create this CSS file for styles
import PayPal from "./PayPal";
import BusinessAnalytics from './BusinessAnalytics';
import BlockchainApplicationCourses from './BlockchainApplicationCourses';
import DigitalWealthManagement from './DigitalWealthManagement';
import { useNavigate } from 'react-router-dom';
const Blockchainpage = () => {

  const perRef = useRef(null);

  useEffect(() => {
    // Scroll to the PER component with a 100px top offset when the page loads
    if (perRef.current) {
      const element = perRef.current;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 130; // 100px offset from the top

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);
  const navigate = useNavigate();
  const paymentDetails = [
    { label: 'Service Name', value: 'Certified Crypto Expert Course' },
    { label: 'Price', value: 'CHF 1.00' },
  ];
  
  const handleBookNowClick = () => {
    navigate('/payment-details', { state: { paymentDetails } });
  };
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
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalClose = (e) => {
    if (e.target.classList.contains('paypal-modal-overlay')) {
      setModalOpen(false);
    }
  };
  return (
    <div style={{marginBottom:'10px'}}>
      {/* Hero Section */}

      <style>
        {`
          #educationtopmenu {
            background-color: rgb(5, 21, 43);
            border-top-left-radius: 10px; /* Adjust the value as needed */
            border-top-right-radius: 10px; /* Adjust the value as needed */
          }
        `}
      </style>
 






      <section id="crypto-hero-section" className={`crypto-hero-section ${inView ? 'crypto-in-view' : ''}`}>
  <video className="crypto-hero-video-background" autoPlay muted loop playsInline>
    <source src="/assets/images/video/education.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="crypto-hero-overlay"></div> {/* Gradient overlay */}
  <div className="crypto-hero-content container">
    <div className="crypto-hero-text">
      <h1 className="crypto-header-title">
        <span className="crypto-title-line crypto-animate-text">Master Blockchain &</span>
        <span className="crypto-title-line crypto-animate-text crypto-delay-1">
          <span className="crypto-highlight-text">Cryptocurrency</span>
        </span>
      </h1>
      <p className="crypto-hero-subtitle crypto-animate-text crypto-delay-2">
        Join our expert-led course and unlock the future of finance.
      </p>
      <button className="ger-sturtedbtn crypto-animate-fade-in crypto-delay-3" onClick={handleBookNowClick}>
        Learn More
      </button>
    </div>
  </div>
  <div className="crypto-bouncing-circle"></div>
</section>
<div className="container menudisplay breadcrumb">
  <Link to="/" className="homemenu">Home</Link> <span className="separator">&gt;</span> <span className="current-page">Education</span>
</div>
<div class="container afterheading-section">
  <div class="row">
   
    <div class="col-xl-5 col-lg-5 afterheading-left">
      <div class="afterheading-title">
        <h2 class="afterheading-main-title"> <span className="topspan">Education</span><br></br>Dive into the world of digital assets and blockchain technology with our expert-led programs. </h2>
      </div>
    </div>
    
   
    <div class="col-xl-6 offset-xl-1 col-lg-7 afterheading-right">
 <div className="service-text">
 <p class="afterheading-highlight"> Transform your understanding of blockchain, Web3, and digital wealth management. </p>
      <p style={{textAlign:'justify'}}>
      Our courses are designed to provide you with the tools and knowledge to thrive in the rapidly evolving crypto landscape. Whether you're a beginner or an experienced professional, we have something for everyone. </p>

    </div>
    </div>
  </div>
</div>

<div><BusinessAnalytics/></div>

<div ref={perRef}>
<BlockchainApplicationCourses/></div>

<div><DigitalWealthManagement/></div>









  </div>

  
  );
};

export default Blockchainpage;