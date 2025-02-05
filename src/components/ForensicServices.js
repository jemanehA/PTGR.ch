import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookConsultation from './BookConsultation';
import '../styles/ForensicServices.css';

const ForensicServices = () => {
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
          <p className="page-indicator-text">Forensic Services</p>
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
        <span className="current-page">Forensic Services</span>
      </div>

      <div className="container afterheading-section">
        <div className="row">
          <div className="col-xl-5 col-lg-5 afterheading-left">
            <div className="afterheading-title">
              <h2 className="afterheading-main-title">
                <span className="topspan">Forensic Services</span><br />
                Protecting Investors and Businesses from Digital Asset Frauds
              </h2>
            </div>
          </div>
          <div className="col-xl-6 offset-xl-1 col-lg-7 afterheading-right">
            <div className="service-text">
              <p style={{ textAlign: 'justify' }}>
                <span><strong>Protecting Investors and Businesses from Digital Asset Fraud:</strong></span>
                As the digital asset landscape grows, so does the risk of fraudulent schemes, including phishing scams, fake ICOs, Ponzi schemes, and "rug pulls," which can lead to significant financial losses. PTGR AG’s forensic services are specifically designed to mitigate these risks, offering expert support to individuals and businesses affected by crypto fraud.
              </p>
              <ul className="service-list">
                <li><span><strong>Fraud Detection and Investigation</strong>: Identifying and investigating crypto fraud.</span></li>
                <li><span><strong>Asset Recovery Support</strong>: Assisting in recovering lost digital assets.</span></li>
                <li><span><strong>Risk Mitigation Strategies</strong>: Providing tailored advice on securing digital investments.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="pad">
          <p>
            PTGR AG has a record of supporting customers in forensic services. We have documented cases where we assisted clients in tracking and documenting significant fraud-related losses, resulting in successful asset recovery. Our thorough investigation and legally compliant reports enabled clients to pursue justice confidently, providing additional evidence for court cases.
          </p>
          <p>
            If you’re a victim of potential crypto fraud or financial loss due to a scam, PTGR AG can provide tailored guidance and offer their assistance. Contact us for a consultation or to discuss a customized forensic report to support your case in court.
          </p>
        </div>
      </div>

      <div className="strategydiv">
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-md-12">
              <h3 className="subtitle">Our Forensic Services</h3>
              <div className="container mt-5">
                <div className="row">
                  {[
                    { icon: 'fas fa-search-dollar', title: 'Comprehensive Fraud Analysis', description: 'Our team of experts employs advanced blockchain analytics tools and Open Source Intelligence (OSINT) to trace fraudulent transactions, map asset flow, and identify patterns indicating malicious activity.' },
                    { icon: 'fas fa-gavel', title: 'Professional Reporting for Legal Proceedings', description: 'Providing informed guidance aligned with international regulatory landscapes, we help clients navigate AML and VASP licensing requirements within complex legal frameworks.' },
                    { icon: 'fas fa-globe-americas', title: 'Global Regulatory Insight', description: 'Providing informed guidance aligned with international regulatory landscapes, we help clients navigate AML and VASP licensing requirements within complex legal frameworks.' }
                  ].map((service, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex align-items-stretch">
                      <div className="how-it-works-step text-center p-4 rounded shadow-sm">
                        <i className={`${service.icon} how-it-works-step-icon`} aria-hidden="true"></i>
                        <h5 className="fw-bold">{service.title}</h5>
                        <p className="text-muted">{service.description}</p>
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

export default ForensicServices;