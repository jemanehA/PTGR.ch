import React, { useEffect } from 'react';
import '../styles/herosection.css'; // Import the CSS file for styling

const HeroSection = () => {
  useEffect(() => {
    // Call fetchCryptoData when the component mounts
    fetchCryptoData();
  }, []); // Empty dependency array means it runs only once, on mount

  // Function to safely manipulate DOM
  function fetchCryptoData() {
    try {
      // Safely attempt to get the element by ID
      const element = document.getElementById('section');  // The section with ID 'section'
      if (element) {
        element.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Example of DOM manipulation
      } else {
        console.warn('Element with ID "section" not found');
      }
    } catch (error) {
      // Catch and log any errors
      console.error('Error manipulating DOM:', error);
  
    }
  }
  return (
    <div>
    <section id="crypto-asset-management" class="crypto-section">
  
    <div class="title-area">
      <video autoPlay muted loop playsInline id="crypto-video">
        <source src="https://ptgr.ch/wp-content/uploads/2023/09/iStock-1399522546.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <div class="title-content">
        <h2>Crypto Asset Management (CAM)</h2>
      </div>
    </div>
  

    <div class="content-area container">

      <div class="intro">
        <h3 class="content-title">PTGR AG Becomes Self-Regulated Organization (SRO)</h3>
        <p class="content-description">
          We are proud to share that starting March 2025 (date TBC), PTGR AG will officially become a Self-Regulated Organization (SRO).
        </p>
      </div>
  
  
      <div class="content-section">
        <div class="content-wrapper">
          <div class="text-content">
            <h4 class="section-title">
              <span class="icon">📊</span> What does it mean?
            </h4>
            <p class="main-text">
              As a Self-Regulated Organization (SRO), we operate with structured autonomy, adhering to the high standards set by the Swiss Financial Market Supervisory Authority (FINMA). Our goal is to foster trust and ensure regulatory compliance. The responsibilities of an SRO are multifaceted: maintaining strict internal controls while proactively addressing evolving regulatory changes.
            </p>
          </div>
          <div class="image-content">
            <img src="image-placeholder.jpg" alt="Regulation Concept" class="content-image" />
          </div>
        </div>
      </div>
  
  
    </div>
  </section>
  <section class="commitment-section">
    <h4 className='middlesub'>Our Commitment to Self-Regulation</h4>
    <p class="main-text">
      Our SRO status underscores our dedication to providing a safe, compliant, and transparent environment. By independently anticipating regulatory needs and adhering to FINMA’s strict guidelines, we strengthen client confidence, operational security, and financial integrity.
    </p>
    <p>For more on FINMA's regulations, visit <a href="https://www.finma.ch/en/" target="_blank">https://www.finma.ch/en/</a>.</p>
  </section>
  
  <section class="core-functions-section">
    <h4 class="section-title">Core Functions and Responsibilities</h4>
    <div class="core-functions">
      <div class="function-card">
        <div class="function-icon">
          <img src="strategic.webp" alt="AML" />
        </div>
        <h5>Anti-Money Laundering (AML) Compliance</h5>
        <p>We conduct ongoing risk assessments, monitor transactions, and implement robust anti-money laundering practices, overseen by a dedicated compliance team.</p>
      </div>
  
      <div class="function-card">
        <div class="function-icon">
          <img src="risk.jpeg" alt="Risk-Based Supervision" />
        </div>
        <h5>Risk-Based Supervisio n</h5>
        
        <p>We monitor and assess emerging financial and operational risks, applying targeted controls and immediate response strategies.</p>
      </div>
  
      <div class="function-card">
        <div class="function-icon">
          <img src="tra.jpg" alt="Transparent Governance" />
        </div>
        <h5>Transparent Governance</h5>
        <p>We commit to accessible communication on policies and standards, ensuring transparency to partners and clients.</p>
      </div>
  
      <div class="function-card">
        <div class="function-icon">
          <img src="aud.jpeg" alt="Audits and Reporting" />
        </div>
        <h5>Regular Audits and Reporting</h5>
        <p>We voluntarily undergo external audits and provide compliance reports to FINMA, maintaining financial and operational standards.</p>
      </div>
  
      <div class="function-card">
        <div class="function-icon">
          <img src="ada.jpeg" alt="Adaptation and Proactivity" />
        </div>
        <h5>Continuous Adaptation and Proactivity</h5>
        <p>We continuously review and update our regulatory framework to stay ahead of changes in financial laws and market risks.</p>
      </div>
    </div>
  </section>
  

  <div class="insurance-assets-section">
    <div class="assets-content-wrapper">
      <div class="assets-icon-container">
        <i class="fas fa-shield-alt"></i>
      </div>
      <h4 class="assets-section-title">Insurance for Assets</h4>
      <p class="assets-main-text">
        As PTGR becomes the licensed SRO, this means the liquid assets deposited with us are insured in Switzerland by Esisuisse up to 100,000 CHF, and all invested assets are protected.
      </p>
    </div>
  </div>
  </div> 
  );
};

export default HeroSection;
