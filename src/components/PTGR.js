import React, { useState, useEffect } from "react";
import '../styles/ptgr.css';
import '../styles/contactus.css';
import { Link, useLocation } from 'react-router-dom';
import ContactFormModal from "./ContactFormModal";

const PTGR = () => {
  const location = useLocation();

  const camTopMenu = document.getElementById("camtopmenu");

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.card');
      const windowHeight = window.innerHeight;

      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight - 100) {
          card.classList.add('fadeIn');
        } else {
          card.classList.remove('fadeIn');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (camTopMenu) camTopMenu.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('home');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  const animateServicesSection = () => {
    const servicesSection = document.getElementById('learnmoreptgr');
  
    // Add a class to trigger the animation
    servicesSection.classList.add('animate-section');
  
    // Optional: Scroll to the section for better visibility
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  };


  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="maincontentdiv">
      <style>
        {`
          #camtopmenu {
            background-color: rgb(5, 21, 43);
            border-top-left-radius: 10px; /* Adjust the value as needed */
            border-top-right-radius: 10px; /* Adjust the value as needed */
          }
        `}
      </style>


      <section id="crypto-hero-section" className={`crypto-hero-section ${inView ? 'crypto-in-view' : ''}`}>
          <video className="crypto-hero-video-background" autoPlay muted loop playsInline>
            <source src="/assets/images/video/cam.MP4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="crypto-hero-overlay"></div> {/* Gradient overlay */}
          <div className="crypto-hero-content container">
            <div className="crypto-hero-text">
            <div class="crypto-header">
              <h1 className="crypto-header-title">
                <span className="crypto-title-line crypto-animate-text">We provide guidance into the world of digital investing.</span>
                <span className="crypto-title-line crypto-animate-text crypto-delay-1">
                  <span className="crypto-highlight-text">Leading with research and with care.</span>
                </span>
              </h1>
              <p className="crypto-hero-subtitle crypto-animate-text crypto-delay-2">
              Join our expert-led course and gain valuable insights into the world of digital investing.
              </p></div>
              <button className="ger-sturtedbtn crypto-animate-fade-in crypto-delay-3" onClick={animateServicesSection}> 
  Learn More <i className="fas fa-play"></i>
</button>
            </div>
          </div>
          <div className="crypto-bouncing-circle"></div>
        </section>


      <div className="container menudisplay breadcrumb">
        <Link to="/" className="homemenu">Home</Link> <span className="separator">&gt;</span> <span className="current-page">PTGR Investment Strategies</span>
      </div>

      <div className="container afterheading-section" id="learnmoreptgr">
        <div className="row">
          <div className="col-xl-5 col-lg-5 afterheading-left">
            <div className="afterheading-title">
              <h2 className="afterheading-main-title">
                Professionally managed journey into the world of digital finance investment.
              </h2>
            </div>
          </div>
          <div className="col-xl-6 offset-xl-1 col-lg-7 afterheading-right">
            <div className="afterheading-content">
              <p className="afterheading-highlight">
                We will safely guide you into the world of digital finance by providing access to
                tailor-made portfolios well suited for every customer risk profile.
              </p>
              <p className="afterheading-description">
                In cooperation with professional research institutes, projects undergo an extensive
                due diligence process before taking on a strategic position.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="strategydiv">
        <div className="container ">
          <p className="content-description">
            At PTGR, we understand that every customer is unique. The most important differentiator is the appetite and tolerance for investment risk.
          </p>
          <div className="cards-container">
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-lock custom-icon"></i>
              </div>
              <h4>PTGR Solid Strategy</h4>
              <p className="description">
              Targets stable growth with minimal risk, ideal for conservative investors. Features large-cap assets like Bitcoin and Ethereum for steady and reliable consistent returns.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-balance-scale custom-icon"></i>
              </div>
              <h4>PTGR Balanced Strategy</h4>
              <p className="description">
              A blend of stability and growth, aimed at moderate returns.
              Suitable for investors accepting some volatility for gains, including a mix of large- cap and promising mid-tier cryptos.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-rocket custom-icon"></i>
              </div>
              <h4>PTGR Growth Strategy</h4>
              <p className="description">
              High-growth approach for aggressive investors. Focuses on newer projects and high-potential DeFi tokens, accepting market volatility for significant returns.
              </p>
            </div>
          </div>
          <div className="ico-token-cta">
  <Link to={{ pathname: "/ContactUsForm", state: { from: location.pathname } }}>
    <button className="cta-button">Contact Us</button>
  </Link>
</div>



        </div>
      </div>
    </div>
  );
};

export default PTGR;
