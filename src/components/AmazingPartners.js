import React, { useEffect, useRef } from 'react';
import '../styles/AmazingPartners.css';

const AmazingPartners = () => {
  const partners = [
    '/assets/images/HSO.webp',
    '/assets/images/logo5.jpg.webp',
    '/assets/images/Logo-schwarz.png.webp',
    '/assets/images/10-44-23.png',
    '/assets/images/10-44-36.png',
    '/assets/images/10-44-53.png',
    '/assets/images/10-45-15.png',
    '/assets/images/14-12-37.png',
    '/assets/images/14-12-52.png',
    '/assets/images/14-40-38.png',
  ];

  return (
    <div className='partnerdiv'>
    <div className="container ">
      <h2 className="subtitle" style={{textAlign:'center'}}>Our Partners</h2>
      
      <div className="partners-carousel-wrapper">
        <div className="partners-carousel">
          {/* Render the partners twice for seamless scrolling */}
          {partners.map((partner, index) => (
            <div className="partner" key={index}>
              <img src={partner} alt={`Partner ${index + 1}`} />
            </div>
          ))}
          {partners.map((partner, index) => (
            <div className="partner" key={`duplicate-${index}`}>
              <img src={partner} alt={`Duplicate Partner ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    
    </div></div>
  );
};

export default AmazingPartners;
