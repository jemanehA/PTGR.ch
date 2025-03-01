import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/CertifiedExpertCryptoProgram.css';
import PayPal from '../components/PayPal';
import BusinessAnalytics from '../components/BusinessAnalytics';
import BlockchainApplicationCourses from '../components/BlockchainApplicationCourses';
import DigitalWealthManagement from '../components/DigitalWealthManagement';
import AfterHeadingSection from './AfterHeadingSection';

const Blockchainpage = () => {
  const navigate = useNavigate();
  const perRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const paymentDetails = [
    { label: 'Service Name', value: 'Certified Crypto Expert Course' },
    { label: 'Price', value: 'CHF 1.00' },
  ];

  useEffect(() => {
    const scrollToPer = () => {
      if (perRef.current) {
        perRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    const timeoutId = setTimeout(scrollToPer, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('home');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleBookNowClick = () => {
    const servicesSection = document.getElementById('Educations');
    servicesSection.classList.add('animate-section');
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  };

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
    <div style={{ marginBottom: '10px' }}>
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
                                            {/* <Link href="#" className="btn btn-primary" onClick={handleBookNowClick}> 
                                              Get Started
                                            </Link> */}
                                          </div>
                                        </div>
                                      </div>
                                    </section>
      <div className="container menudisplay breadcrumb">
        <Link to="/" ><span className="homemenu">Home</span></Link> <span className="separators">&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span> <span className="current-page">Education</span>
      </div>
      <AfterHeadingSection />

      <div ref={perRef}>
        <BusinessAnalytics />
      </div>
      <div>
        <BlockchainApplicationCourses />
      </div>
      <div>
        <DigitalWealthManagement />
      </div>
    </div>
  );
};

export default Blockchainpage;