import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../styles/digitalasset.css';

const Digital_asset = () => {
  const [inView, setInView] = useState(false);

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
    const servicesSection = document.getElementById('digitalassetservices');
    servicesSection.classList.add('animate-section');
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  };

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

      <section id="about-hero-section" className={`about-hero-section ${inView ? 'about-in-view' : ''}`}>
        <video className="about-hero-video-background" autoPlay muted loop playsInline>
          <source src="/assets/images/video/global.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content container">
          <div className="crypto-hero-text">
            <h1 className="crypto-header-title">
              <span className="crypto-title-line crypto-animate-text">Leading with </span><br />
              <span className="crypto-title-line crypto-animate-text crypto-delay-1">
                <span className="crypto-highlight-text">Research and with care.</span>
              </span>
            </h1>
            <p className="crypto-hero-subtitle crypto-animate-text crypto-delay-2">
              We provide guidance into the world of digital investing.
            </p>
            <button className="ger-sturtedbtn crypto-animate-fade-in crypto-delay-3" onClick={animateServicesSection}>
              Learn More <i className="fas fa-play"></i>
            </button>
          </div>
        </div>
        <div className="about-bouncing-circle"></div>
      </section>

      <div className="container menudisplay breadcrumb"></div>

      <div className="container afterheading-section">
        <div className="row">
          <div className="col-xl-5 col-lg-5 afterheading-left">
            <div className="afterheading-title">
              <h2 className="afterheading-main-title">
                <span className="topspan">Strategic Digital Asset Advisory (SDAA)</span><br />
                The entry into the world of digital investing
              </h2>
            </div>
          </div>
          <div className="col-xl-6 offset-xl-1 col-lg-7 afterheading-right">
            <div className="afterheading-content">
              <p className="afterheading-highlight">
                We create tailor-made investment portfolios so that our clients can best benefit from development in blockchain technology.
              </p>
              <p className="afterheading-description">
                Solid in-house research and external research collaborations are at the forefront of our investment philosophy. In our research, we rely not only on internal analytics resources but also cooperate with external professional research institutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digital_asset;