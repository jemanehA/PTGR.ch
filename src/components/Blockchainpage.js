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
   const videoRef = useRef(null); // Ref for the video element
    const fallbackRef = useRef(null); // Ref for the fallback background
    useEffect(() => {
      const video = videoRef.current;
      const fallback = fallbackRef.current;
  
      if (video) {
        video.style.display = 'block'; // Show the video element
        video.play(); // Start playing the video
  
        video.addEventListener('loadeddata', () => {
          // Once the video is loaded, hide the fallback background
          if (fallback) {
            fallback.style.display = 'none';
          }
        });
  
        video.addEventListener('error', () => {
          // If the video fails to load, ensure the fallback background is visible
          if (fallback) {
            fallback.style.display = 'block';
          }
        });
      }
    }, []);
      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setInView(entry.isIntersecting); // Set state when the section is in view
            console.log('Section in view:', entry.isIntersecting); // Debugging
          },
          { threshold: 0.5 } // Trigger when 50% of the section is in view
        );
    
        const section = document.getElementById('digital-assets-section'); // Select the section
        if (section) {
          observer.observe(section); // Start observing the section
        }
    
        return () => {
          if (section) {
            observer.unobserve(section); // Clean up the observer
          }
        };
      }, []);
  return (
    <div style={{marginBottom:'10px'}}>
      {/* Hero Section */}

      <style>
        {`
          #educationDropdown {
            background-color: rgb(20, 46, 82);
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            font-weight: bold;
          }
        `}
      </style>
 






                                      <section
                                      id="digital-assets-section"
                                      className={`digital-assets-section ${inView ? 'in-view' : ''}`}
                                    >
                                      {/* Video Background */}
                                      <video
                                        id="background-video"
                                        className="background-video"
                                        ref={videoRef}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        style={{ display: 'none' }} // Hide video initially
                                      >
                                        <source src="/assets/images/video/networkbackgroundhd.MP4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                      </video>
                                
                                      {/* Fallback Background Color */}
                                      <div className="background-fallback" ref={fallbackRef}></div>
                                
                                      {/* Content */}
                                      <div className="container">
                                        <div className="digital-assets-content">
                                          <h1>
                                            <span className="swatch-white">
                                              <strong>Master Blockchain & Cryptocurrency</strong>
                                            </span>
                                          </h1>
                                          <p style={{ color: 'white' }}>
                                          Join our expert-led course and unlock the future of finance.
                                          </p>
                                          <div className="digital-assets-buttons">
 
                                          </div>
                                        </div>
                                      </div>
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