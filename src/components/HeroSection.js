import React, { useEffect, useState, useRef } from 'react';
import '../styles/herosection.css'; // Import the CSS file for styling
import '../styles/onlyhero.css';

const HeroSection = () => {
  const [inView, setInView] = useState(false); // State to track visibility
  const videoRef = useRef(null); // Ref for the video element
  const fallbackRef = useRef(null); // Ref for the fallback background

  // Intersection Observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting); // Set state when the section is in view
        console.log('Section in view:', entry.isIntersecting); // Debugging
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    const section = document.getElementById('digital-assets-section'); // Select the section
    if (section) {
      observer.observe(section); // Start observing the section
    }

    return () => {
      if (section) {
        observer.unobserve(section); // Clean up the observer
      }
    };
  }, []);

  // Handle video load and error events
  useEffect(() => {
    const video = videoRef.current;
    const fallback = fallbackRef.current;

    if (video) {
      video.style.display = 'block'; // Show the video element
      video.play(); // Start playing the video

      video.addEventListener('loadeddata', () => {
        // Once the video is loaded, hide the fallback background
        if (fallback) {
          fallback.style.display = 'none';
        }
      });

      video.addEventListener('error', () => {
        // If the video fails to load, ensure the fallback background is visible
        if (fallback) {
          fallback.style.display = 'block';
        }
      });
    }
  }, []);
  const scrollToService = () => {
    const serviceSection = document.getElementById('services');
    if (serviceSection) {
      serviceSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
    <section
      id="digital-assets-section"
      className={`digital-assets-section ${inView ? 'in-view' : ''}`}
    >
      {/* Video Background */}
      <video
        id="background-video"
        className="background-video"
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        style={{ display: 'none' }} // Hide video initially
      >
        <source src="/assets/images/video/Aboutus5.MP4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Fallback Background Color */}
      <div className="background-fallback" ref={fallbackRef}></div>

      {/* Content */}
      <div className="container">
        <div className="digital-assets-content">
          <h1>
            <span className="swatch-white">
              <strong>Guiding Your Digital Assets</strong>
            </span>
          </h1>
          <p style={{ color: 'white' }}>
            We advise you strategically on Digital Assets. With Passion. With Knowledge. With Care. Join our
            expert-led course and unlock the future of finance.
          </p>
          <div className="digital-assets-buttons">
            <a  className="ptgrbtn" onClick={scrollToService}>
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;