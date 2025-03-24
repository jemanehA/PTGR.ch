import React, { useState, useEffect, useRef } from 'react';
import BookConsultation from './BookConsultation';
import { Link } from 'react-router-dom';
import '../styles/IcoTokenManagement.css';

const IcoTokenManagement = () => {
  const [inView, setInView] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
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
                                
                                <img
  id="background-img"
  className="background-img"
  src="/assets/images/blockchain.jpeg" // Replace with your image path
  alt="Background Image"
 
/>
                          
                                {/* Fallback Background Color */}
                                <div className="background-fallback" ref={fallbackRef}></div>
                          
                                {/* Content */}
                                <div className="container">
                                  <div className="digital-assets-content">
                                    <h1>
                                      <span className="swatch-white">
                                        <strong>Navigating the World of Digital Investing</strong>
                                      </span>
                                    </h1>
                                    <p style={{ color: 'white' }}>
                                    We provide expert guidance, leading with research and care. Join our expert-led course and unlock the future of finance.
                                    </p>
                                    {/* <div className="digital-assets-buttons">
                                      <Link href="#" className="btn btn-primary" to="/Aboutus"> 
                                        Get Started
                                      </Link>
                                    </div> */}
                                  </div>
                                </div>
                              </section>


      <div className="container menudisplay breadcrumb">
        <Link to="/" ><span className="homemenu">Home</span></Link> <span className="separators">&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span> <span className="current-page">ICO & Token Management Service</span>
      </div>
      <div className="container afterheading-section">
        <div className="row">
          <div className="col-xl-5 col-lg-5 afterheading-left">
            <div className="afterheading-title">
              <h2 className="afterheading-main-title">
                <span className="topspan">ICO & Token Management Service</span><br />
                Tailor made services for successful, seamless & efficient ICO launch
              </h2>
            </div>
          </div>
          <div className="col-xl-6 offset-xl-1 col-lg-7 afterheading-right">
            <div className="service-text">
              <p className="afterheading-highlight">
                We offer comprehensive ICO (Initial Coin Offering) management services, transforming ambitious projects into successful ventures by providing tailored guidance through each stage of the ICO process.
              </p>
              <p style={{ textAlign: 'justify' }}>
                Our expertise in blockchain, fundraising, and regulatory compliance ensures seamless and efficient ICO launches, connecting projects with a global investor base.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="strategydiv">
        <div className="container mt-5">
        <div className="row row-equal-height g-4">
          <h2 className="section-title">Four Phases of PTGR AG’s ICO Management Process</h2>
          <p>
  Have you already gone through the four phases and have <strong>no need for Guidance</strong>? Your token is already listed? <span className="highlight">No problem</span>, we can support your token with ongoing management.
</p>
          <div className="row">
            {[
                { 
                  icon: 'fas fa-clipboard-list', 
                  name: 'Phase 1', 
                  title: 'Project Assessment & Strategy Development', 
                  description: 'We define a clear vision, establish key objectives, and assess market potential. This stage includes crafting a whitepaper, identifying target audiences, and developing a unique value proposition.' 
                },
                { 
                  icon: 'fas fa-gavel', 
                  name: 'Phase 2', 
                  title: 'Legal & Regulatory Compliance', 
                  description: 'We ensure that all regulatory requirements are met, focusing on KYC/AML protocols and token classifications to build a legally compliant framework.' 
                },
                { 
                  icon: 'fas fa-bullhorn', 
                  name: 'Phase 3', 
                  title: 'Marketing & Community Engagement', 
                  description: 'We design targeted marketing campaigns, utilizing content marketing, social media outreach, and community engagement to build a strong investor community.' 
                },
                { 
                  icon: 'fas fa-hand-holding-usd', 
                  name: 'Phase 4', 
                  title: 'Token Sale & Fundraising Execution', 
                  description: 'We manage the token issuance process, ensuring secure and transparent transactions, while maximizing fundraising potential.' 
                }
            ].map((phase, index) => (
<div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
  <div className="prresios-phase" style={{ backgroundColor: '#FFFFF' }}>
    <div className="phase-header">
      <i className={`${phase.icon} prresios-token-phase-icon`}></i>
      <h4>{phase.name}</h4>
      <h4>{phase.title}</h4>
    </div>
    <p>{phase.description}</p>
  </div>
</div>
            ))}</div>
          </div>
        </div>

        <div className="cards-container">
        <div
        className="card-background"
        style={{
          backgroundImage: "url('/assets/images/blockchainn.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      ></div>
  <div className="cardd-content">
    <h3 className="cardd-title">Why PTGR AG for ICO Management?</h3>
    <p className="card-description" >
      PTGR AG combines in-depth blockchain expertise with a strategic fundraising approach, guiding clients through each phase to launch a successful and compliant ICO. Our track record and resources ensure sustainable growth and investor engagement.
    </p>
  </div>
</div>

        <div className="ico-token-cta" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingBottom: '40px' }}>
        <Link to="/BookConsultations?consultationType=ICO and Token Management Service">
  <button className="cta-button">Request Consultation Now</button>
</Link>
        </div>
      </div>

      {isModalOpen && (
        <div className="book-custom-modal">
          <div className="book-modal-content">
            <span className="book-close-button" onClick={closeModal}>&times;</span>
            <BookConsultation />
          </div>
        </div>
      )}
    </div>
  );
};

export default IcoTokenManagement;