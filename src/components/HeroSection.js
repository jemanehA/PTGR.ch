import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  // Ensure Link is imported
import '../styles/herosection.css'; // Import the CSS file for styling
import '../styles/onlyhero.css';

const HeroSection = () => {
  const [inView, setInView] = useState(false); // State to track visibility

  // Intersection Observer to detect when the section is in view
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
    const servicesSection = document.getElementById('services');
  
    // Add a class to trigger the animation
    servicesSection.classList.add('animate-section');
  
    // Optional: Scroll to the section for better visibility
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to safely manipulate DOM
  function fetchCryptoData() {
    try {
      // Safely attempt to get the element by ID
      const element = document.getElementById('home'); // The section with ID 'home'
      if (element) {
        element.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Example of DOM manipulation
      } else {
        console.warn('Element with ID "home" not found');
      }
    } catch (error) {
      // Catch and log any errors
      console.error('Error manipulating DOM:', error);
    }
  }

  // Call fetchCryptoData on component mount
  useEffect(() => {
    fetchCryptoData();
  }, []);

  return (

          <section id="crypto-hero-section" className={`crypto-hero-section ${inView ? 'crypto-in-view' : ''}`}>
          <video className="crypto-hero-video-background" autoPlay muted loop playsInline>
            <source src="/assets/images/video/swiss_video1.MP4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="crypto-hero-overlay"></div> {/* Gradient overlay */}
          <div className="crypto-hero-content container">
            <div className="crypto-hero-text">
            <div class="crypto-header">
              <h1 className="crypto-header-title">
                <span className="crypto-title-line crypto-animate-text">We advise you strategically on Digital Assets.</span>
                <span className="crypto-title-line crypto-animate-text crypto-delay-1">
                  <span className="crypto-highlight-text">With Passion. With Knowledge. With Care</span>
                </span>
              </h1>
              <p className="crypto-hero-subtitle crypto-animate-text crypto-delay-2">
                Join our expert-led course and unlock the future of finance.Join our expert-led course and unlock the future of finance.
              </p></div>
              <Link className="ger-sturtedbtn crypto-animate-fade-in crypto-delay-3" onClick={animateServicesSection}> 
  Get Started <i className="fas fa-play"></i>
</Link>
            </div>
          </div>
          <div className="crypto-bouncing-circle"></div>
        </section>
  );
};

export default HeroSection;
