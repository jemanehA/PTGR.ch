import React, { useState, useEffect } from 'react';
import BookConsultation from './BookConsultation';
import { Link } from 'react-router-dom';
import '../styles/Aboutus.css';

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
    <div style={{ paddingBottom: '10px' }}>
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
          <p className="page-indicator-text">Family Crypto Savings Program</p>
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
        <span className="current-page">Family Crypto Savings Program</span>
      </div>

      <div className="container afterheading-section">
        <div className="row">
          <div className="col-xl-5 col-lg-5 afterheading-left">
            <div className="afterheading-title">
              <h2 className="afterheading-main-title">
                <span className="topspan">Family Crypto Savings Program</span><br />
                Create a family saving plan that can help your children reach the goal
              </h2>
            </div>
          </div>
          <div className="col-xl-6 offset-xl-1 col-lg-7 afterheading-right">
            <div className="service-text">
              <p className="afterheading-highlight">
                It is designed to help kids take their first steps into investing, all with the guidance and support of their parents.
              </p>
              <p style={{ textAlign: 'justify' }}>
                It creates a safe and structured way for families to work together, teaching children the basics of saving and investing while giving them hands-on experience in managing digital assets. Parents provide oversight and mentorship, ensuring the right strategies are in place, while kids learn valuable skills that prepare them for a future in an increasingly digital economy. It’s a collaborative and empowering way to build financial habits as a family.
              </p>
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
  );
};

export default ForensicServices;