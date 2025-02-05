import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../styles/cryptoAssetManagement.css";

const CryptoAssetManagement = () => {
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

  const animateServicesSection = () => {
    const servicesSection = document.getElementById('corefunctionality');

    // Add a class to trigger the animation
    servicesSection.classList.add('animate-section');

    // Optional: Scroll to the section for better visibility
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  };

  // Core functions configuration
  const coreFunctions = [
    {
      id: 1,
      icon: "/assets/images/amlf.png",
      title: "Anti-Money Laundering (AML) Compliance",
      description: "We conduct ongoing risk assessments, monitor transactions, and implement robust anti-money laundering practices, overseen by a dedicated compliance team.",
    },
    {
      id: 2,
      icon: "/assets/images/risk.jpg",
      title: "Risk Assessment and Compliance",
      description: "We monitor and assess emerging financial and operational risks, applying targeted controls and immediate response strategies.",
    },
    {
      id: 3,
      icon: "/assets/images/transparent.jpg",
      title: "Transparent Governance",
      description: "We commit to accessible communication on policies and standards, ensuring transparency to partners and clients.",
    },
    {
      id: 4,
      icon: "/assets/images/aud.jpeg",
      title: "Regular Audits and Reporting",
      description: "We voluntarily undergo external audits and provide compliance reports to FINMA, maintaining financial and operational standards.",
    },
    {
      id: 5,
      icon: "/assets/images/ada.jpeg",
      title: "Continuous Adaptation and Proactivity",
      description: "We continuously review and update our regulatory framework to stay ahead of changes in financial laws and market risks.",
    },
  ];

  return (
    <div>
      <style>
        {`
          #camtopmenu {
            background-color: rgb(5, 21, 43);
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
          }
        `}
      </style>

      <section id="crypto-hero-section" className={`crypto-hero-section ${inView ? 'crypto-in-view' : ''}`}>
        <video className="crypto-hero-video-background" autoPlay muted loop playsInline>
          <source src="/assets/images/video/cam.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="crypto-hero-overlay"></div>
        <div className="crypto-hero-content container">
          <div className="crypto-hero-text">
            <div className="crypto-header">
              <h1 className="crypto-header-title">
                <span className="crypto-title-line crypto-animate-text">We provide guidance into the world of digital investing.</span>
                <span className="crypto-title-line crypto-animate-text crypto-delay-1">
                  <span className="crypto-highlight-text">Leading with research and with care.</span>
                </span>
              </h1>
              <p className="crypto-hero-subtitle crypto-animate-text crypto-delay-2">
                Join our expert-led course and gain valuable insights into the world of digital investing.
              </p>
            </div>
            <button className="ger-sturtedbtn crypto-animate-fade-in crypto-delay-3" onClick={animateServicesSection}>
              Get Started <i className="fas fa-play"></i>
            </button>
          </div>
        </div>
        <div className="crypto-bouncing-circle"></div>
      </section>

      <div className="container menudisplay breadcrumb">
        <Link to="/">Home</Link> <span className="separator">&gt;</span> <span className="current-page">PTGR is the SRO</span>
      </div>

      <div className="container afterheading-section">
        <div className="row">
          <div className="col-xl-5 col-lg-5 afterheading-left">
            <div className="afterheading-title">
              <h2 className="afterheading-main-title">PTGR AG becomes a Self-Regulated Organization (SRO)</h2>
            </div>
          </div>
          <div className="col-xl-6 offset-xl-1 col-lg-7 afterheading-right">
            <div className="afterheading-content">
              <p className="afterheading-highlight">
                We are proud to share that starting March 2025 (date TBC), PTGR AG will officially become a Self-Regulated Organization (SRO).
              </p>
              <p className="afterheading-description">
                As a Self-Regulated Organization (SRO), we operate with structured autonomy, adhering to the high standards set by the Swiss Financial Market Supervisory Authority (FINMA). Our goal is to foster trust and ensure regulatory compliance. The responsibilities of an SRO are multifaceted: maintaining strict internal controls while proactively addressing evolving regulatory changes.
              </p>
              <p className="afterheading-lessnot">
                For more on FINMA's regulations, visit{" "}
                <a href="https://www.finma.ch/en/supervision/self-regulatory-organisations-sros/" target="_blank" className="finma-link">
                  FINMA's Official Website
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="strategydiv">
        <div className="container mt-5" style={{ paddingBottom: '10px' }}>
          <h4 className="middlesub">Our Commitment to Self-Regulation</h4>
          <p className="main-text">
            Our SRO status underscores our dedication to providing a safe, compliant, and transparent environment. By independently anticipating regulatory needs and adhering to FINMA’s strict guidelines, we strengthen client confidence, operational security, and financial integrity.
          </p>
          <div className="finma-info-container">
            <p className="finma-description">
              For more on FINMA's regulations, visit{" "}
              <a href="https://www.finma.ch/en/supervision/self-regulatory-organisations-sros/" target="_blank" className="finma-link">
                FINMA's Official Website
              </a>.
            </p>
            <img src="/assets/images/FINMALogo.png" alt="FINMA Logo" className="finma-logo" />
          </div>
        </div>
      </div>

      <section className="core-functions-section" id="corefunctionality">
        <h4 className="section-title">Core Functions and Responsibilities</h4>
        <div className="core-functions">
          {coreFunctions.map((func) => (
            <div className="function-card" key={func.id}>
              <div className="function-icon">
                <img src={func.icon} alt={func.title} />
              </div>
              <h5>{func.title}</h5>
              <p>{func.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="insurance-assets-section text-center p-4 bg-light shadow-sm rounded">
        <div className="assets-icon-container mx-auto">
          <i className="fas fa-shield-alt icon-shield text-primary"></i>
        </div>
        <h4 className="middlesub">Insurance for Assets</h4>
        <p className="main-text">
          As PTGR becomes the licensed SRO, this means the liquid assets deposited with us are insured in Switzerland by Esisuisse up to 100,000 CHF, and all invested assets are protected.
        </p>
      </div>
    </div>
  );
};

export default CryptoAssetManagement;