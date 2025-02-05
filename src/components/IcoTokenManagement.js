import React, { useState, useEffect } from 'react';
import BookConsultation from './BookConsultation';
import { Link } from 'react-router-dom';
import '../styles/IcoTokenManagement.css';

const IcoTokenManagement = () => {
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
          <p className="page-indicator-text">ICO & Token Management Service</p>
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
        <span className="current-page">ICO & Token Management Service</span>
      </div>

      <div className="container afterheading-section">
        <div className="row">
          <div className="col-xl-5 col-lg-5 afterheading-left">
            <div className="afterheading-title">
              <h2 className="afterheading-main-title">
                <span className="topspan">ICO & Token Management Service</span><br />
                Tailor made services for successful, seamless & efficient ICO launch
              </h2>
            </div>
          </div>
          <div className="col-xl-6 offset-xl-1 col-lg-7 afterheading-right">
            <div className="service-text">
              <p className="afterheading-highlight">
                We offer comprehensive ICO (Initial Coin Offering) management services, transforming ambitious projects into successful ventures by providing tailored guidance through each stage of the ICO process.
              </p>
              <p style={{ textAlign: 'justify' }}>
                Our expertise in blockchain, fundraising, and regulatory compliance ensures seamless and efficient ICO launches, connecting projects with a global investor base.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="strategydiv">
        <div className="container mt-5">
          <h3 className="subtitle">Four Phases of PTGR AG’s ICO Management Process</h3>
          <div className="row">
            {[
              { icon: 'fas fa-clipboard-list', title: 'Phase 1: Project Assessment & Strategy Development', description: 'We define a clear vision, establish key objectives, and assess market potential. This stage includes crafting a whitepaper, identifying target audiences, and developing a unique value proposition.' },
              { icon: 'fas fa-gavel', title: 'Phase 2: Legal & Regulatory Compliance', description: 'We ensure that all regulatory requirements are met, focusing on KYC/AML protocols and token classifications to build a legally compliant framework.' },
              { icon: 'fas fa-bullhorn', title: 'Phase 3: Marketing & Community Engagement', description: 'We design targeted marketing campaigns, utilizing content marketing, social media outreach, and community engagement to build a strong investor community.' },
              { icon: 'fas fa-hand-holding-usd', title: 'Phase 4: Token Sale & Fundraising Execution', description: 'We manage the token issuance process, ensuring secure and transparent transactions, while maximizing fundraising potential.' }
            ].map((phase, index) => (
              <div key={index} className="col-md-3">
                <div className="prresios-phase" style={{ backgroundColor: '#FFFFFF' }}>
                  <i className={`${phase.icon} prresios-token-phase-icon`} style={{ color: "#1b4672" }}></i>
                  <h4>{phase.title}</h4>
                  <p>{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ico-token-container ico-token-container-3">
          <h3 className="middlesub">Why PTGR AG for ICO Management?</h3>
          <p className="ico-token-description">
            PTGR AG combines in-depth blockchain expertise with a strategic fundraising approach, guiding clients through each phase to launch a successful and compliant ICO. Our track record and resources ensure sustainable growth and investor engagement.
          </p>
        </div>

        <div className="ico-token-cta" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingBottom: '40px' }}>
          <Link to="/BookConsultations">
            <button className="cta-button">Ready to Launch? Book a Consultation</button>
          </Link>
        </div>
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
  );
};

export default IcoTokenManagement;