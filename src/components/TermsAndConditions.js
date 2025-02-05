import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Terms.css'; // Optional for additional tweaks
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
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
        
          <p className="page-indicator-text">Term and Conditions</p>
          <p className='headertit'>We provide guidance into the world of digital investing.
          <span className='headtit1'>Leading with research and with care.</span></p>

       
      </div>
      </section>
    
    
            <div className="container menudisplay breadcrumb">
  <Link to="/" className="homemenu">Home</Link> <span className="separator">&gt;</span> <span className="current-page">Conditions</span>
</div>
<div className='breakee'></div>
<div className="container py-2">
<div className="container py-0 afterheading-section">
        <div className="row">
          <div className="col-xl-4 col-lg-5 afterheading-left">
            <div className="afterheading-title">
              <h2 className="afterheading-main-title">
              Conditions
              </h2>
            </div>
          </div>
          <div className="col-xl-7 offset-xl-1 col-lg-8 afterheading-right">
            <div className="afterheading-content">
            <h2 className="terms-subtitle h4 text-dark">1. Scope</h2>
        <p className="terms-paragraph">
          1.1. These General Terms and Conditions (hereinafter “GTC”) regulate the contractual relationship between PTGR AG 
          (hereinafter “Company” or “we”) and its customers (hereinafter “Customer” or “you”) for consulting services and 
          training in the area of digital assets and education (hereinafter “Services”).
        </p>
      

     
        <h2 className="terms-subtitle h4 text-dark">2. Conclusion of Contract</h2>
        <p className="terms-paragraph">2.1. Our offers and prices are subject to change and non-binding.</p>
        <p className="terms-paragraph">2.2. A contract is concluded when we confirm your request in writing or electronically or when we begin providing the services.</p>

        <h2 className="terms-subtitle h4 text-dark">3. Benefits</h2>
        <p className="terms-paragraph">
          3.1. We provide consulting services and training in the field of digital assets and education in accordance with the conditions specified in the contract or order confirmation.
        </p>
        <p className="terms-paragraph">3.2. The details of the services, including scope, duration, and prices, will be set out in a separate contract or offer.</p>

        <h2 className="terms-subtitle h4 text-dark">4. Prices and Payment Terms</h2>
        <p className="terms-paragraph">4.1. The prices for our services are agreed in the order confirmation or in the contract.</p>
        <p className="terms-paragraph">4.2. Payments are due within three (3) days or, depending on the offer, immediately from the invoice date.</p>

        <h2 className="terms-subtitle h4 text-dark">5. Liability</h2>
        <p className="terms-paragraph">5.1. Our liability is limited to intent and gross negligence.</p>
        <p className="terms-paragraph">5.2. We accept no liability for any loss or damage resulting from the use of Digital Assets.</p>

        <h2 className="terms-subtitle h4 text-dark">6. Intellectual Property</h2>
        <p className="terms-paragraph">6.1. All intellectual property rights in training materials and content remain our property.</p>

        <h2 className="terms-subtitle h4 text-dark">7. Confidentiality</h2>
        <p className="terms-paragraph">7.1. We undertake to keep the customer’s confidential information confidential and not to disclose it to third parties unless required by law.</p>

        <h2 className="terms-subtitle h4 text-dark">8. Termination</h2>
        <p className="terms-paragraph">8.1. The contract can be terminated in writing by either party at any time for good cause.</p>

        <h2 className="terms-subtitle h4 text-dark">9. Applicable Law and Place of Jurisdiction</h2>
        <p className="terms-paragraph">9.1. These General Terms and Conditions and all contracts are subject to Swiss law.</p>
        <p className="terms-paragraph">9.2. The place of jurisdiction for all disputes arising from or in connection with these terms and conditions and contracts is Zug, Switzerland.</p>

        <h2 className="terms-subtitle h4 text-dark">10. Changes to the Terms and Conditions</h2>
        <p className="terms-paragraph">10.1. We reserve the right to change these terms and conditions at any time. Changes will be communicated to the customer in writing or electronically and will come into force immediately after notification.</p>
  

      <footer className="terms-footer text-center text-muted mt-5">
        <p>As of: September 1, 2023</p>
      </footer>
            </div>
          </div>
        </div>
      </div>

      </div>





    </div>
  );
};

export default TermsAndConditions;
