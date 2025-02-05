import React, { useState, useEffect } from "react";
import '../styles/Aboutus.css'; // Import the CSS file for styling
import AmazingPartners from '../components/AmazingPartners';
import { Link } from 'react-router-dom';  // Ensure Link is imported
import '../styles/abouthero.css';

const AboutSection = () => {
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

  const features = [
    {
      title: 'People',
      description: 'We look at each customer individually and provide all-round advice according to their needs.',
      icon: 'fas fa-user',
    },
    {
      title: 'Passion',
      description: 'It is only thanks to our passion that we achieve the goals we set.',
      icon: 'fas fa-heart',
    },
    {
      title: 'Performance',
      description: 'Performance matters and we are happy to exceed targets wherever possible.',
      icon: 'fas fa-trophy',
    },
    {
      title: 'Portfolio management',
      description: 'We show you how to build your portfolio in the best possible and diversified way.',
      icon: 'fas fa-chart-line',
    },
    {
      title: 'Blockchain and Cryptos',
      description: 'We show you what the real key factors are and educate you professionally.',
      icon: 'fab fa-bitcoin',
    },
    {
      title: 'Trading',
      description: 'You will learn with us how intelligent and profit-oriented trading works.',
      icon: 'fas fa-exchange-alt',
    },
    {
      title: 'Tactical coins',
      description: 'We invest in projects with real use cases and high chances of success.',
      icon: 'fas fa-coins',
    },
    {
      title: 'Risk management',
      description: 'We show you how to profit from volatility when others lose.',
      icon: 'fas fa-shield-alt',
    },
  ];

  return (
    <div>
      <style>
        {`
          #aboutustopmenu {
            background-color: rgb(5, 21, 43);
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
          }
        `}
      </style>

      {/* Hero Section */}
      <section id="crypto-hero-section" className={`crypto-hero-section ${inView ? 'crypto-in-view' : ''}`}>
        <video className="crypto-hero-video-background" autoPlay muted loop playsInline>
          <source src="/assets/images/video/Aboutus.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="crypto-hero-overlay"></div> {/* Gradient overlay */}
        <div className="crypto-hero-content container">
          <div className="crypto-hero-text">
            <h1 className="crypto-header-title">
              <span className="">PTGR AG</span><br />
              <span className="crypto-title-line crypto-animate-text crypto-delay-1">
                <span className="crypto-highlight-text">The future of Digital finance</span>
              </span>
            </h1>
            <p className="crypto-hero-subtitle crypto-animate-text crypto-delay-2">
              We innovate, strategize, and execute—transforming finance, technology, and investments into unparalleled success.
            </p>
            {/* <button className="crypto-enroll-button crypto-animate-fade-in crypto-delay-3">
              Learn More
            </button> */}
          </div>
        </div>
        <div className="about-bouncing-circle"></div>
      </section>

      {/* Breadcrumb */}
      <div className="container menudisplay breadcrumb">
        <Link to="/" className="homemenu">Home</Link> <span className="separator">&gt;</span> <span className="current-page">Who we are</span>
      </div>

      {/* Features Section */}
      <div className="container py-5 features-section">
        <p className="features-intro">
          We are a team of professionals from investment banking, private banking, portfolio management, trading, IT, risk management, blockchain, and cryptoassets.
        </p>
        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <div className="feature-card h-100">
                <div className="cardabout">
                  <i className={`${feature.icon} custom-icon`} style={{ fontSize: '2rem' }}></i>
                  <h5 className="card-title">{feature.title}</h5>
                  <p className="card-text">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advisory Board Section */}
      <div className="panaboutusadvisory py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <h2 className="middlesubwhitge" style={{color:'white'}}>Advisory Board - Who is behind PTGR AG?</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img
                src="/assets/images/pan-final.jpg.webp"
                className="img-fluid rounded-3 shadow-lg border border-light ceo-image"
                alt="CEO of PTGR AG - Dr. Pan Theo Grosse-Ruyken"
                style={{ maxWidth: '250px' }}
              />
              <h5 className="text-white mt-3">CEO of PTGR AG</h5>
              <h6 className="text-white">Dr. Pan Theo Grosse-Ruyken</h6>
              <a
                href="https://www.linkedin.com/in/dr-pan-grosse-ruyken-87278a92/?originalSubdomain=ch"
                className="btn btn-outline-light btn-lg mt-3 linkedin-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
            <div className="col-md-8 text-white">
              <h4 className="mb-4 text-white text-center">Message from the CEO</h4>
              <p className="ceo-message">
                <strong>Dr. Pan Theo Grosse-Ruyken</strong><br />
                PTGR stands for the initials of the founder and business owner: Dr. Pan Theo Grosse-Ruyken. He is the CEO of PTGR AG and an accomplished professional with significant experience in business development, strategic marketing, revenue growth, and supply chain management globally.
                <br />
                <br />
                I have had the privilege of steering several successful business initiatives across various industries, including wealth management and fintech, and I’m excited to lead PTGR AG into the future, leveraging innovative solutions, particularly in the areas of blockchain and digital assets.
                PTGR AG was officially founded in January 2022, after operating as a one-man business since 2014. With my experience and vision for sustainable growth, I aim to lead PTGR AG to new heights, ensuring that we continue to innovate and provide value to our clients and partners.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key to Success Section */}
      <div className="partnerss">
        <div className="container py-5">
          <div className="row text-center mb-5">
            <h2 className="subtitle">Our Key to Success</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="success-key">
                Our key to success? <span className="highlighted-text">Unique.</span>
              </h1>
              <h3 className="sub-heading">We value people, passion, and performance.</h3>
              <div className="aboutusbtn">
                <Link to="/ContactUsForm" className="cta-button">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="subtitlelittle">Why invest with us?</h2>
              <ul className="service-list">
                <li>
                  <span>We have more than 7+ years of experience in the crypto market and thus the correspondingly well-founded knowledge to advise our customers in the highest quality.</span>
                </li>
                <li>
                  <span>With us, each client is considered individually and advised on their needs and goals. Professionalism, passion, and transparency are our keywords for your success.</span>
                </li>
                <li>
                  <span>We are Crypto Valley Member and belong to the first movers and are a rising pioneer in the crypto market Switzerland.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Partners Section */}
      <div className="container py-5 strategic-partners">
        <AmazingPartners />
      </div>
    </div>
  );
};

export default AboutSection;