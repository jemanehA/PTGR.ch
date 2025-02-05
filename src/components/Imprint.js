import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Terms.css'; // Optional for additional tweaks
import '../styles/interm.css';
import { Link } from 'react-router-dom';

const Imprint = () => {
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
    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);
  return (
            <div>
        
              <section className={`hero-section ${inView ? 'in-view' : ''}`}>
                    <div className="video-container1">
                      <video autoPlay muted loop playsInline id="hero-video">
                      <source src="/assets/images/video/Aboutus.MP4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className=" headingcontnetdiv container">
                
                  <p className="page-indicator-text">Imprint</p>
                  <p className='headertit'>We provide guidance into the world of digital investing.
                  <span className='headtit1'>Leading with research and with care.</span></p>
        
               
              </div>
              </section>
            
            
                    <div className="container menudisplay breadcrumb">
          <Link to="/" className="homemenu">Home</Link> <span className="separator">&gt;</span> <span className="current-page">Imprint</span>
        </div>
    <div className="container py-2">

<div className='breakee'></div>
<div className="container py-0 afterheading-section">
<div className="row">
  <div className="col-xl-4 col-lg-5 interm-afterheading-left">
    <div className="interm-afterheading-title">
      <h2 className="afterheading-main-title">
        Imprint
      </h2>
    </div>
  </div>
  <div className="col-xl-7 offset-xl-1 col-lg-8 interm-afterheading-right">
    <h3 className="interm-company-name">PTGR AG</h3>
    <p><strong>CEO and Founder:</strong> Dr. Pan Theo Grosse-Ruyken</p>
    <p><strong>Address:</strong> Ibelweg 18a, CH-6300 Zug, SWITZERLAND</p>
    <p><strong>Email:</strong> <a href="mailto:Info@ptgr.ch">Info@ptgr.ch</a></p>
    <p><strong>Company Registration Number (CRN):</strong> CH-170.3.046.884-0</p>
    <p><strong>Place of Jurisdiction:</strong> Zug, Switzerland</p>

    <div className="interm-copyright">
      <p>&copy; 2023 PTGR AG. All rights reserved.</p>
      <p>All texts, graphics, and content are protected by copyright. Reproduction or use of any part of this content without written consent from PTGR AG is prohibited.</p>
    </div>
  </div>
</div>

      </div>





</div>

    </div>
  );
};

export default Imprint;
