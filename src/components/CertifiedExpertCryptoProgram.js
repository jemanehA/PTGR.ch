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
    navigate('/payment-details', { state: { paymentDetails } });
  };

  const handleModalClose = (e) => {
    if (e.target.classList.contains('paypal-modal-overlay')) {
      setModalOpen(false);
    }
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <style>
        {`
          #educationtopmenu {
            background-color: rgb(5, 21, 43);
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
          }
        `}
      </style>

      <section id="crypto-hero-section" className={`crypto-hero-section ${inView ? 'crypto-in-view' : ''}`}>
        <video className="crypto-hero-video-background" autoPlay muted loop playsInline>
          <source src="/assets/images/video/education.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="crypto-hero-overlay"></div>
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
        <Link to="/" className="homemenu">Home</Link>
        <span className="separator">&gt;</span>
        <span className="current-page">Education</span>
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