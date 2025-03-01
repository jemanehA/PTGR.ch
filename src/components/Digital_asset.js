import React, { useState, useEffect, useRef } from "react";
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
          #productsDropdown {
            background-color: rgb(20, 46, 82);
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            font-weight: bold;
          }
        `}
      </style>

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
        <source src="/assets/images/video/servicetwo.MP4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Fallback Background Color */}
      <div className="background-fallback" ref={fallbackRef}></div>

      {/* Content */}
      <div className="container">
        <div className="digital-assets-content">
          <h1>
            <span className="swatch-white">
              <strong>Leading with Research and Care</strong>
            </span>
          </h1>
          <p style={{ color: 'white' }}>
          Join our expert-led course and unlock the future of finance with confidence.
          </p>
          <div className="digital-assets-buttons">
            <Link href="#" className="ptgrbtn" onClick={animateServicesSection}> 
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>


      <div className="container menudisplay breadcrumb">
        <Link to="/" ><span className="homemenu">Home</span></Link> <span className="separators">&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span> <span className="current-page">Strategic Digital Asset Advisory (SDAA)</span>
      </div>
  

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