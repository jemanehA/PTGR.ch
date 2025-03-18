
import React, { useState,useEffect,useRef } from "react";
import '../styles/EventComponnent.css'; // Import the CSS file for styling
import { Link ,useLocation} from 'react-router-dom';  // Ensure Link is imported
import Blogs from "./Blogs";
import blogs from "../assets/blogs.json"

const Bloglist = () => {
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
          #NewDropdown {
            background-color: rgb(5, 21, 43);
            border-top-left-radius: 10px; /* Adjust the value as needed */
            border-top-right-radius: 10px; /* Adjust the value as needed */
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
      <span className="crypto-title-line crypto-animate-text">Dive Into Expert Insights</span><br/>
      <span className="crypto-title-line crypto-animate-text crypto-delay-1">
        <span className="crypto-highlight-text">Exploring the Future of Finance & Innovation.</span>
      </span>
    </h1>
    <p className="crypto-hero-subtitle crypto-animate-text crypto-delay-2">
      Stay informed with in-depth articles, industry trends, and thought leadership to fuel your growth.
    </p>

  </div>
</div>
        <div className="about-bouncing-circle"></div>
      </section>

      <div className="container menudisplay breadcrumb">
        <Link to="/" ><span className="homemenu">Home</span></Link> <span className="separators">&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span> <span className="current-page">Blogs</span>
      </div>
  


<div class="container afterheading-section">
  <div class="row">
   
    <div class="col-xl-5 col-lg-5 afterheading-left">
      <div class="afterheading-title">
        <h2 class="afterheading-main-title">Exploring the Future of Finance & Innovation. </h2>
      </div>
    </div>
    
   
    <div class="col-xl-6 offset-xl-1 col-lg-7 afterheading-right">
      <div class="afterheading-content">
        <p class="afterheading-highlight">
        Stay Updated with the Latest in Crypto and Blockchain.
   </p>
        <p class="afterheading-description">
        We regularly share valuable insights through our blog, where we cover important updates and trends in the crypto market. Each month, we dive deep into the latest changes, highlight key investment strategies, and discuss how you can profit from the evolving landscape of digital assets and blockchain technology.</p>
        <p class="afterheading-description">
        Don’t miss out on any of our updates—subscribe to our blog for expert insights and exclusive discussions.</p>
      </div>
    </div>
  </div>
</div>


<div ref={eventsSectionRef}>
<Blogs type='Blogs' blogs={blogs}/>
      </div>

</div>
  );
};

export default Bloglist;
