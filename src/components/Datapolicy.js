import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Terms.css'; // Optional for additional tweaks
import { Link } from 'react-router-dom';

const DataPolicy = () => {
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
                
                  <p className="page-indicator-text">Partners</p>
                  <p className='headertit'>We provide guidance into the world of digital investing.
                  <span className='headtit1'>Leading with research and with care.</span></p>
        
               
              </div>
              </section>
            
            
                    <div className="container menudisplay breadcrumb">
          <Link to="/" className="homemenu">Home</Link> <span className="separator">&gt;</span> <span className="current-page">Data Policy</span>
        </div>
    <div className="container py-5">

<div className='breakee'></div>
<div className="container py-0 afterheading-section">
        <div className="row">
          <div className="col-xl-4 col-lg-5 afterheading-left">
            <div className="afterheading-title">
              <h2 className="afterheading-main-title">
              Data Policy
              </h2>
            </div>
          </div>
          <div className="col-xl-7 offset-xl-1 col-lg-8 afterheading-right">
          <p className="afterheading-description">
          Data protection is of high priority for PTGR AG. The use of the Internet pages of the PTGR AG is possible without any indication of personal data; however, if a data subject wants to use special enterprise services via our website, processing of personal data could become necessary. If the processing of personal data is necessary and there is no statutory basis for such processing, we generally obtain consent from the data subject.
              </p>
              <p className="afterheading-description">
              The processing of personal data, such as the name, address, e-mail address, or telephone number of a data subject shall always be in line with the General Data Protection Regulation (GDPR), and in accordance with the country-specific data protection regulations applicable to PTGR AG. By means of this data protection declaration, our enterprise would like to inform the general public of the nature, scope, and purpose of the personal data we collect, use and process. Furthermore, data subjects are informed, by means of this data protection declaration, of the rights to which they are entitled.
        </p>
              <p className="afterheading-description">
              PTGR AG has implemented numerous technical and organizational measures to ensure protection of personal data processed through this website. However, Internet-based data transmissions may have security gaps, hence a full protection may not be guaranteed. For this reason, every data subject is free to transfer personal data to us via alternative means.</p>
          </div>
        </div>
      </div>







    </div></div>
  );
};

export default DataPolicy;
