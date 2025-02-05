import React, { useState } from 'react';
import BookConsultation from './BookConsultation';
import { Link } from 'react-router-dom';  // Ensure Link is imported
import '../styles/Aboutus.css'; // Import the CSS file for styling


const Metaverse = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
<div className='metavers'>



      <div className="forensic-services-section">
        {/* Container 1: Protecting Investors and Businesses */}
        <div className="forensic-container forensic-container-1">
          <div className="forensic-content">
            <div className="forensic-text-content">
              <h2 className="subtitle">
              Metaverse Solutions
              </h2>
              <p className="forensic-text">
              We help businesses establish a meaningful presence in the metaverse, creating interactive virtual spaces and experiences that engage audiences. From building virtual assets and integrating NFTs to designing platforms for gaming, e-commerce, and education, we deliver cutting-edge solutions using blockchain and AR/VR technologies.</p>
            </div>
            <div className="forensic-image">
              <img src="/assets/images/meta.jpeg" alt="Crypto Fraud Protection" />
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
            <button className="cta-button">Ready to Launch? Book a Consultation</button>
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

export default Metaverse;
