import React, { useEffect, useRef, useState } from 'react';
import '../styles/AmazingPartners.css';
import { Link } from 'react-router-dom';
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

  const carouselRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollSpeed = 4; // Adjust for smoothness
    let intervalId;

    const startScrolling = () => {
      intervalId = setInterval(() => {
        carousel.scrollLeft += scrollSpeed;

        // Check if we've reached the end of the carousel
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
          // Reset scroll position to the beginning without animation
          carousel.style.scrollBehavior = 'auto'; // Disable smooth scrolling
          carousel.scrollLeft = 0;
          carousel.style.scrollBehavior = 'smooth'; // Re-enable smooth scrolling
        }

        // Update active dot
        const totalSlides = partners.length;
        const slideWidth = carousel.scrollWidth / (2 * totalSlides);
        const currentIndex = Math.floor(carousel.scrollLeft / slideWidth) % totalSlides;
        setActiveDot(currentIndex);
      }, 50); // Adjust interval for smooth animation
    };

    startScrolling();

    return () => clearInterval(intervalId);
  }, [partners.length]);

  return (
    <div className="partners-section">
      <div className="container">
        <h2 className="subtitle">
          <span>Partners</span>
        </h2>
        <div className="partners-carousel" ref={carouselRef}>
          {partners.map((partner, index) => (
            <div className="partner-slide" key={index}>
              <img
                src={partner}
                alt={`Partner ${index + 1}`}
                className="partner-logo"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/path/to/placeholder.png';
                }}
              />
            </div>
          ))}
        </div>
        {/* Pagination Dots */}
        <ol className="flickity-page-dots">
          {partners.map((_, index) => (
            <li
              key={index}
              className={`dot ${index === activeDot ? 'is-selected' : ''}`}
            />
          ))}
        </ol>
        <div className="view-all-button">
          <Link to="/Partners" className="btn">
            View All Partners
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AmazingPartners;