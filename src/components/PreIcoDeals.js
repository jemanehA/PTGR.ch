import React, { useState, useEffect } from 'react';
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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <style>
        {`
          #servicetopmenu {
            background-color: rgb(5, 21, 43);
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
          }
        `}
      </style>

      <section className={`hero-section ${inView ? 'in-view' : ''}`}>
        <div className="video-container1">
          <video autoPlay muted loop playsInline id="hero-video">
            <source src="/assets/images/video/cam.MP4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="headingcontnetdiv container">
          <p className="page-indicator-text">Pre-ICO Deals</p>
          <p className="headertit">
            We provide guidance into the world of digital investing.
            <span className="headtit1">Leading with research and with care.</span>
          </p>
          <Link to="/Aboutus">
            <a className="card-button">
              Get Started <i className="fas fa-play"></i>
            </a>
          </Link>
        </div>
      </section>

      <div className="container menudisplay breadcrumb">
        <Link to="/" className="homemenu">Home</Link>
        <span className="separator">&gt;</span>
        <span className="current-page">Pre-ICO Deals</span>
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

      <div className="strategydiv">
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-md-12">
              <h3 className="subtitle">How It Works</h3>
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
            <Link to="/BookConsultations">
              <button className="cta-button">Ready to Launch? Book a Consultation</button>
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