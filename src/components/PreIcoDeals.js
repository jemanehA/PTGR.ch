import React, { useState, useEffect, useRef } from 'react';
import BookConsultation from './BookConsultation';
import { Link } from 'react-router-dom';
import '../styles/PreIcoDeals.css';

const PreIcoDeals = () => {
  const [inView, setInView] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  const animateServicesSection = () => {
    const servicesSection = document.getElementById('strategydiv');
    servicesSection.classList.add('animate-section');
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  };
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
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
    <div>
      <style>
        {`
          #productsDropdown {
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
              <source src="/assets/images/video/cam.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
      
            {/* Fallback Background Color */}
            <div className="background-fallback" ref={fallbackRef}></div>
      
            {/* Content */}
            <div className="container">
              <div className="digital-assets-content">
                <h1>
                  <span className="swatch-white">
                    <strong>Your Guide to Digital Investing</strong>
                  </span>
                </h1>
                <p style={{ color: 'white' }}>
                We provide expert guidance in the world of digital investing—leading with research and care. Join our expert-led course and unlock the future of finance.
                </p>
                <div className="digital-assets-buttons">
                  <a href="#" className="ptgrbtn" onClick={animateServicesSection}> 
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </section>

      <div className="container menudisplay breadcrumb">
        <Link to="/" ><span className="homemenu">Home</span></Link> <span className="separators">&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span> <span className="current-page">Pre-ICO Deals</span>
      </div>
      <div className="container afterheading-section">
        <div className="row">
          <div className="col-xl-5 col-lg-5 afterheading-left">
            <div className="afterheading-title">
              <h2 className="afterheading-main-title">
                <span className="topspan">Pre-ICO Deals</span><br />
                Exclusive access to <br />hand-picked ICO/IDO projects
              </h2>
            </div>
          </div>
          <div className="col-xl-6 offset-xl-1 col-lg-7 afterheading-right">
            <div className="service-text">
              <p className="afterheading-highlight">
                We provide access to carefully hand-picked ICO/IDO projects, based on their innovation, team strength, and tokenomics viability.
              </p>
              <p style={{ textAlign: 'justify' }}>
                Together with cooperating external experts, we perform thorough analysis of all projects before we invest in them and offer them up to our clients.
              </p>
              <ul className="service-list">
                <li><span><strong>Comprehensive Project Analysis</strong></span></li>
                <li><span><strong>Step-by-Step Participation Guide</strong>: A thorough guide covering registration, eligibility, and the process for purchasing tokens, making complex procedures accessible and straightforward.</span></li>
                <li><span><strong>Strategic Investment Advice</strong>: Guidance on navigating the risks and opportunities of ICO/IDO investments, including access to attractive launch prices, understanding vesting conditions, and assessing potential gains against risks like dilution and total loss.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="strategydiv" id="strategydiv">
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-md-12">
              <h2 className="section-title">How It Works</h2>
              <p className="how-it-works-description">
                Our simple, investor-focused process guarantees clarity and confidence at every stage:
              </p>
              <div className="container mt-5">
                <div className="row">
                  {[
                    { icon: 'fas fa-file-alt', title: 'Project Briefing', description: 'Receive a comprehensive overview of each carefully selected ICO/IDO project, highlighting its unique value proposition, potential market impact, and key financial metrics.' },
                    { icon: 'fas fa-info-circle', title: 'Detailed Information & Fees', description: 'We provide all essential details, including tokenomics, roadmap, lock-up periods, vesting schedules, and associated fees.' },
                    { icon: 'fas fa-calculator', title: 'Determine Investment Amount', description: 'Based on your personal goals and risk tolerance, decide on the amount you want to invest in the selected project.' },
                    { icon: 'fas fa-dollar-sign', title: 'Investment Confirmation', description: 'Once you make your decision, we send an official confirmation of your investment with all relevant terms.' },
                    { icon: 'fas fa-bell', title: 'Token Listing Notification', description: 'We monitor the progress of each project and notify you promptly once the token is listed on a public exchange.' },
                    { icon: 'fas fa-arrow-right', title: 'Token Transfer', description: 'After the listing, your pre-ICO tokens are securely transferred to your wallet.' }
                  ].map((step, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex align-items-stretch">
                      <div className="how-it-works-step text-center p-4 rounded shadow-sm">
                        <i className={`${step.icon} how-it-works-step-icon mb-3`}></i>
                        <h5 className="fw-bold">{step.title}</h5>
                        <p className="text-muted">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="ico-token-cta" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingBottom: '40px' }}>
        <Link to="/BookConsultations?consultationType=Pre-ICO Deals">
          <button className="cta-button">Request Consultation Now</button>
        </Link>
          </div>

          {isModalOpen && (
            <div className="book-custom-modal">
              <div className="book-modal-content">
                <span className="book-close-button" onClick={closeModal}>&times;</span>
                <BookConsultation />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreIcoDeals;