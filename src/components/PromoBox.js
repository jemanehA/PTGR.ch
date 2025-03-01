import React, { useState, useEffect } from 'react';
import '../styles/PromoBox.css';

const PromoBox = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const dismissed = localStorage.getItem('promoDismissed');
    if (dismissed) setIsVisible(false);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('promoDismissed', 'true');
  };

  

  return (
    <div className="promo-container">
      <div className="promo-box">
        <button className="close-btn" onClick={handleClose} aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <div className="promo-content">
          <h3>Refer a Client, Earn Rewards 💼</h3>
          <p>Know someone needing our services? Refer them and earn 10% of the contract value as commission.</p>
          <button className="cta-btn">
            Refer a Client →
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBox;