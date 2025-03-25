import React, { useState } from 'react';
import BookConsultation from './BookConsultation';
import { Link } from 'react-router-dom';  // Ensure Link is imported

import '../styles/Aboutus.css'; // Import the CSS file for styling


const Isouws = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
<div className='isotokken'>



      <div className="forensic-services-section">
        {/* Container 1: Protecting Investors and Businesses */}
        <div className="forensic-container forensic-container-1">
          <div className="forensic-content">
          <div className="forensic-image">
              <img src="/assets/images/fund.jpg" alt="Crypto Fraud Protection" />
            </div>
            <div className="forensic-text-content p-5">
              <h2 className="subtitle">
              ICO Set up and fundraising
              </h2>
              <p className="forensic-text">
              Our team handles every aspect of ICO setup, including smart contract development, legal structuring, and crafting a professional whitepaper. We also drive fundraising by building a strong investor base, running effective marketing campaigns, and forming strategic partnerships to ensure your project secures the capital it needs.</p>
            </div>

          </div>
        </div>
  
        {/* Container 2: Our Forensic Services Include */}


        </div>
        <div className="ico-token-cta" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingBottom:'30px',
      }}>
            <Link to="/BookConsultations">
            <button className="cta-button">Book a Consultation Now</button>
          </Link>
            </div>
            {/* Custom Modal */}
            {isModalOpen && (
        <div className="book-custom-modal">
  <div className="book-modal-content">
    <span className="book-close-button" onClick={closeModal}>
      &times;
    </span>
    <BookConsultation />
  </div>
</div>

      )}


</div>
  );
};

export default Isouws;
