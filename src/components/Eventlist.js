import React, { useState, useEffect, useRef } from "react";
import '../styles/EventComponnent.css'; // Import the CSS file for styling
import { Link, useLocation } from 'react-router-dom';  // Ensure Link is imported
import EventsSection from "./EventsSection";

const Eventlist = () => {
  const location = useLocation();
  const eventsSectionRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollPos) {
      window.scrollTo(0, location.state.scrollPos);
    } else {
      // Scroll to the EventsSection when the page loads
      eventsSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.state]);
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
      
      <section id="crypto-hero-section" className={`crypto-hero-section ${inView ? 'crypto-in-view' : ''}`}>
        <video className="crypto-hero-video-background" autoPlay muted loop playsInline>
          <source src="/assets/images/video/event.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="crypto-hero-overlay"></div> {/* Gradient overlay */}
        <div className="crypto-hero-content container">
          <div className="crypto-hero-text">
            <h1 className="crypto-header-title">
              <span className="crypto-title-line crypto-animate-text">Discover Exclusive Events</span><br/>
              <span className="crypto-title-line crypto-animate-text crypto-delay-1">
                <span className="crypto-highlight-text">Shaping the Future of Finance & Innovation.</span>
              </span>
            </h1>
            <p className="crypto-hero-subtitle crypto-animate-text crypto-delay-2">
              Stay ahead with the latest industry insights, networking, and growth opportunities.
            </p>

          </div>
        </div>
        <div className="about-bouncing-circle"></div>
      </section>

      <div className="container menudisplay breadcrumb">
        <Link to="/" className="homemenu">Home</Link> 
        <span className="separator">&gt;</span> 
        <span className="current-page">Events</span>
      </div>

      <div className="container afterheading-section">
        <div className="row">
          <div className="col-xl-5 col-lg-5 afterheading-left">
            <div className="afterheading-title">
              <h2 className="afterheading-main-title">Upcoming Events </h2>
            </div>
          </div>

          <div className="col-xl-6 offset-xl-1 col-lg-7 afterheading-right">
            <div className="afterheading-content">
              <p className="afterheading-highlight">
                Don’t miss any more highlights. Be part of our events.
              </p>
              <p className="afterheading-description">
                We hold regular virtual events or on-site events. Once a month, we hold a Cryptomarket Talk, where we address the most important changes in the crypto market. In addition, we show monthly what our investment strategies are and how you can profit from the market with us.
              </p>
              <p className="afterheading-description">
                Be there and register directly at the link at the individual event that interests you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add a ref to EventsSection */}
      <div ref={eventsSectionRef}>
        <EventsSection />
      </div>
    </div>
  );
};

export default Eventlist;
