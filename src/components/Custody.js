import React, { useState } from 'react';
import BookConsultation from './BookConsultation'; // Importing the form component
import { Link } from 'react-router-dom';  // Ensure Link is imported
import '../styles/Aboutus.css'; // Import the CSS file for styling


const Custody = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
<div className='custody'>



      <div className="forensic-services-section">
        {/* Container 1: Protecting Investors and Businesses */}
        <div className="forensic-container forensic-container-1">
          <div className="forensic-content">
          <div className="forensic-image">
              <img src="/assets/images/payment.jpg" alt="Crypto Fraud Protection" />
            </div>
            <div className="forensic-text-content p-5">
              <h2 className="subtitle">
              Custody & Payment Solutions
              </h2>
              <p className="forensic-text">
              We provide secure custody solutions to safeguard your digital assets, offering protection against theft, loss, and unauthorized access. Our payment solutions simplify transactions for both businesses and users, enabling smooth, efficient processing of both fiat and cryptocurrency payments.</p>
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
        paddingBottom:'40px'
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

export default Custody;
