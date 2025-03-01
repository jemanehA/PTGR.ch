import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';  // Ensure Link is imported
import BookConsultation from './BookConsultation'; // Importing the form component
import '../styles/Aboutus.css'; // Import your styles
import Web3cards from './web3cards';
import { useLocation } from 'react-router-dom';

const Isows = () => {
  const location = useLocation();
  const cardId = location.state?.cardId;
  const web3CardsRef = useRef(null); // Ref for the Web3cards component

  useEffect(() => {
    // Scroll to the top of the page smoothly when the component mounts
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    if (cardId && web3CardsRef.current) {
      // Scroll to the Web3cards component
      web3CardsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [cardId]);

  const [inView, setInView] = useState(false); // State to track visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const videoRef = useRef(null); // Ref for the video element
  const fallbackRef = useRef(null); // Ref for the fallback background

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

  return (
    <div>
      <style>
        {`
          #SW3SDropdown {
            background-color: rgb(20, 46, 82);
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            font-weight: bold;
          }
        `}
      </style>

      {/* Hero Section */}
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
          <source src="/assets/images/video/Error-Page.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Fallback Background Color */}
        <div className="background-fallback" ref={fallbackRef}></div>

        {/* Content */}
        <div className="container">
          <div className="digital-assets-content">
            <h1>
              <span className="swatch-white">
                <strong>Empower Your Digital Transformation</strong>
              </span>
            </h1>
            <p style={{ color: 'white' }}>
              Partner with us for a tailored roadmap to leverage the power of decentralized technologies and drive your success forward.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container menudisplay breadcrumb">
        <Link to="/" ><span className="homemenu">Home</span></Link> <span className="separators">&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span> <span className="current-page">Strategic Web 3.0 Consultancy</span>
      </div>
      {/* Introductory Content */}
      <div className="container afterheading-section">
        <div className="row">
          <div className="col-xl-5 col-lg-5 afterheading-left">
            <div className="afterheading-title">
              <h2 className="afterheading-main-title">
                <span className="topspan">Strategic Web 3.0 Consultancy</span><br></br>
                Empowering your digital evolution with innovative Web 3.0 solutions.
              </h2>
            </div>
          </div>
          <div className="col-xl-6 offset-xl-1 col-lg-7 afterheading-right">
            <div className="afterheading-content">
              <p className="afterheading-highlight">
                Empowering your digital journey with innovative solutions in ICO setup, tokenization, custody, payments, and metaverse technologies.
              </p>
              <p className="afterheading-description">
                We are the one-stop shop destination for all our clients who need advanced digital asset services for their physical assets. Our main service offerings are the ones listed below.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Web3cards Component */}
      <Web3cards ref={web3CardsRef} />

      {/* CTA Section */}

    </div>
  );
};

export default Isows;