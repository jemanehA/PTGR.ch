import React, { useState } from 'react';
import BookConsultation from './BookConsultation';
import { Link } from 'react-router-dom';  // Ensure Link is imported
import '../styles/Aboutus.css'; // Import the CSS file for styling


const Tokn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
<div className='isosetup'>


      <div className="forensic-services-section">
        {/* Container 1: Protecting Investors and Businesses */}
        <div className="forensic-container forensic-container-1">
          <div className="forensic-content">
            <div className="forensic-text-content">
              <h2 className="subtitle">
              RWA Tokenization as a Service
              </h2>
              <p className="forensic-text">
              With our Real-World Asset (RWA) tokenization services, we turn physical assets like real estate, artwork, and commodities into blockchain tokens. This allows for fractional ownership, greater liquidity, and seamless, secure transactions, opening up new investment opportunities in traditionally illiquid markets.</p>
            </div>
            <div className="forensic-image">
              <img src="/assets/images/preiso.jpeg" alt="Crypto Fraud Protection" />
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
        paddingBottom:'30px'

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

export default Tokn;
