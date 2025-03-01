
import React, { useState,useEffect, useRef  } from "react";
import '../styles/EventComponnent.css'; // Import the CSS file for styling
import { Link ,useLocation} from 'react-router-dom';  // Ensure Link is imported
import EventsSection from "./EventsSection";

const EventComponent = () => {
  const location = useLocation();
  React.useEffect(() => {
    if (location.state?.scrollPos) {
      window.scrollTo(0, location.state.scrollPos);
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
          #NewDropdown {
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
                                        <source src="/assets/images/video/event.MP4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                      </video>
                                
                                      {/* Fallback Background Color */}
                                      <div className="background-fallback" ref={fallbackRef}></div>
                                
                                      {/* Content */}
                                      <div className="container">
                                        <div className="digital-assets-content">
                                          <h1>
                                            <span className="swatch-white">
                                              <strong>Exclusive Events in Finance & Innovation</strong>
                                            </span>
                                          </h1>
                                          <p style={{ color: 'white' }}>
                                          Gain industry insights, expand your network, and discover growth opportunities in the evolving finance landscape.
                                          </p>
                                          <div className="digital-assets-buttons">
                      
                                          </div>
                                        </div>
                                      </div>
                                    </section>

      <div className="container menudisplay breadcrumb">
        <Link to="/" ><span className="homemenu">Home</span></Link> <span className="separators">&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span> <span className="current-page">Events</span>
      </div>



<div class="container afterheading-section">
  <div class="row">
   
    <div class="col-xl-5 col-lg-5 afterheading-left">
      <div class="afterheading-title">
        <h2 class="afterheading-main-title">Upcoming Events </h2>
      </div>
    </div>
    
   
    <div class="col-xl-6 offset-xl-1 col-lg-7 afterheading-right">
      <div class="afterheading-content">
        <p class="afterheading-highlight">
        Don’t miss any more highlights. Be part of our events.
   </p>
        <p class="afterheading-description">
        We hold regular virtual events or on-site events. Once a month, we hold a Cryptomarket Talk, where we address the most important changes in the crypto market. In addition, we show monthly what our investment strategies are and how you can profit from the market with us.</p>
        <p class="afterheading-description">
        Be there and register directly at the link at the individual event that interests you.</p>
      </div>
    </div>
  </div>
</div>

<EventsSection/>


</div>
  );
};

export default EventComponent;
