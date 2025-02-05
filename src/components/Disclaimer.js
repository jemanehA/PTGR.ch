import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Terms.css'; // Optional for additional tweaks
import { Link } from 'react-router-dom';

const Disclaimer = () => {
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
            
              <p className="page-indicator-text">Disclaimer</p>
              <p className='headertit'>We provide guidance into the world of digital investing.
              <span className='headtit1'>Leading with research and with care.</span></p>
    
           
          </div>
          </section>
        
        
                <div className="container menudisplay breadcrumb">
      <Link to="/" className="homemenu">Home</Link> <span className="separator">&gt;</span> <span className="current-page">Disclaimer</span>
    </div>
    <div className="container py-2">

<div className='breakee'></div>
<div className="container py-0 afterheading-section">
        <div className="row">
          <div className="col-xl-4 col-lg-5 afterheading-left">
            <div className="afterheading-title">
              <h2 className="afterheading-main-title">
              Disclaimer
              </h2>
            </div>
          </div>
          <div className="col-xl-7 offset-xl-1 col-lg-8 afterheading-right">
          <p className="afterheading-description">
          The author assumes no liability whatsoever with regard to the correctness, accuracy, up-to-dateness, reliability and completeness of the information provided. Liability claims against the author for damages of a material or immaterial nature arising from access to or use or non-use of the published information, from misuse of the connection or from technical faults are excluded. All offers are non-binding. The author expressly reserves the right to change, supplement or delete parts of the pages or the entire offer without special notice or to temporarily or permanently cease publication.
          </p>
          <h2>Disclaimer for links</h2>
              <p className="afterheading-description">
              References and links to third-party websites are outside our area of responsibility. Any responsibility for such websites is rejected. Access to and use of such websites is at the user’s own risk.
        </p>
        <h2>Copyrights</h2>
              <p className="afterheading-description">
              The copyright and all other rights to content, images, photographs or other files on this website belong exclusively to PTGR AG or the specially named copyright holders. The written consent of the copyright holder must be obtained in advance for the reproduction of any elements.</p>
          </div>
        </div>
      </div>






</div>
    </div>
  );
};

export default Disclaimer;
