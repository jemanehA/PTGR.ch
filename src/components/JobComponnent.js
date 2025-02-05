import React, { useState, useEffect } from "react";
import '../styles/JobComponnent.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';  // Ensure Link is imported

const JobComponnent = () => {
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
    const servicesSection = document.getElementById('openjobs');
  
    // Add a class to trigger the animation
    servicesSection.classList.add('animate-section');
  
    // Optional: Scroll to the section for better visibility
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  };
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
    <span className="crypto-title-line crypto-animate-text">Join us and contribute</span><br/>
    <span className="crypto-title-line crypto-animate-text crypto-delay-1">
      <span className="crypto-highlight-text">to innovative solutions.</span>
    </span>
  </h1>
            <p className="crypto-hero-subtitle crypto-animate-text crypto-delay-2">
            Explore career opportunities in the digital investing field.
            </p>
            <button className="ger-sturtedbtn crypto-animate-fade-in crypto-delay-3" onClick={animateServicesSection}> 
  Apply Now <i className="fas fa-play"></i>
</button>
          </div>
        </div>
        <div className="about-bouncing-circle"></div>
      </section>
      {/* Breadcrumb */}
      <div className="container menudisplay breadcrumb">
        <Link to="/" className="homemenu">Home</Link> <span className="separator">&gt;</span> <span className="current-page">Jobs</span>
      </div>

      <div class="container afterheading-section">
  <div class="row">
   
    <div class="col-xl-5 col-lg-5 afterheading-left">
      <div class="afterheading-title">
        <h2 class="afterheading-main-title"><span className="topspan">Jobs</span><br></br>Explore career opportunities in the digital investing field.</h2>
      </div>
    </div>
    
   
    <div class="col-xl-6 offset-xl-1 col-lg-7 afterheading-right">
      <div class="afterheading-content">
        <p class="afterheading-highlight">
        We have an ingenious business model that we and our customers are very proud of and that is the key to our success. This is why our company is growing fast!
              
   </p>
        <p class="afterheading-description">
        If you are interested, please contact us directly by email at <a href="mailto:info@ptgr.ch" className="contact-link">info@ptgr.ch</a>, use the LinkedIn message option, or simply give us a call. We are looking forward to finding the right puzzle for PTGR AG with you!
        </p>
      </div>
    </div>
  </div>
</div>
<div className="ico-token-cta">
            <a href='#openjobs'><button className="cta-button">View Open Positions</button></a>
          </div>

      {/* Container 2: Our Forensic Services Include */}
      <div className="">
        <div className="container my-5">
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-3 mb-4">
              <div className="customecard fixed-size-card text-center">
                <div className="card-body">
                  <i className="fas fa-clock fa-3x mb-3"></i>
                  <h5 className="card-title">Flexible Working Hours Offered</h5>
                  <p className="card-text">
                    Take advantage of remote work options and flexible working hours to maintain your work-life balance, because the well-being of our team always comes first.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-3 mb-4">
              <div className="customecard fixed-size-card text-center">
                <div className="card-body">
                  <i className="fas fa-handshake fa-3x mb-3"></i>
                  <h5 className="card-title">Attractive Working Conditions</h5>
                  <p className="card-text">
                    We offer a highly competitive salary as well as various bonus awards and other benefits for your commitment to the future growth of our company.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-3 mb-4">
              <div className="customecard fixed-size-card text-center">
                <div className="card-body">
                  <i className="fas fa-users fa-3x mb-3"></i>
                  <h5 className="card-title">Active Market Influences</h5>
                  <p className="card-text">
                    Become part of the leading digital asset consulting company in Switzerland and actively shape the Future of Finance together for lasting impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-3 mb-4">
              <div className="customecard fixed-size-card text-center">
                <div className="card-body">
                  <i className="fas fa-gift fa-3x mb-3"></i>
                  <h5 className="card-title">Teambuilding</h5>
                  <p className="card-text">
                    Our fast-paced and productive environment is complemented by regular social events, fostering collaboration, creativity, and team bonding throughout the year, enhancing performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Open Positions Section */}
      <div className="container my-5" id="openjobs">
        <h2 className="text-center mb-4">Open Positions</h2>

        {/* Job 1 */}
        <div className="row mb-4">
          <div className="col-md-12">
            <div className="d-flex justify-content-between mb-3">
              <span className="badge bg-success">Remote</span>
            </div>
            <h4 className="font-weight-bold job-title mb-3">Broker in Finance on a part-time or full-time basis</h4>
            <p className="job-description mb-3">
              The future of digital finance has begun. Join us on this journey. Are you a sales professional with a background in the business, investment or finance sector and would you like to be rewarded for your success? Then you’ve come to the right place. For our fast-growing company in the digital finance sector, we are looking for a Broker in Finance (m/f/d) 100%!
            </p>
            <div className="d-flex justify-content-start gap-3">
              <a href="#" className="btn btn-primary">Apply Now</a>
              <a href="#" className="btn btn-secondary">Job Detail</a>
            </div>
          </div>
        </div>

        {/* Job 2 */}
        <div className="row mb-4">
          <div className="col-md-12">
            <div className="d-flex justify-content-between mb-3">
              <span className="badge bg-warning">Hybrid</span>
            </div>
            <h4 className="font-weight-bold job-title mb-3">Sales Manager on a part-time or full-time basis</h4>
            <p className="job-description mb-3">
              The future of digital finance has begun. Join us on this journey. Are you a sales professional with a background in the business, investment or finance sector and would you like to be rewarded for your success? Then you’ve come to the right place. For our fast-growing company in the digital finance sector, we are looking for a Sales Manager (m/f/d) 100% with immediate effect.
            </p>
            <div className="d-flex justify-content-start gap-3">
              <a href="#" className="btn btn-primary">Apply Now</a>
              <a href="#" className="btn btn-secondary">Job Detail</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobComponnent;