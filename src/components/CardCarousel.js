import React, { useState, useEffect } from 'react';
import '../styles/CardCarousel.css'; // Custom styles

const CardCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalCards = 3; // Only show 3 cards at a time
    const cardCount = 4; // Total number of cards you have in the carousel
  
    useEffect(() => {
      updateCardsVisibility();
    }, [currentIndex]);
  
    const updateCardsVisibility = () => {
      const cards = document.querySelectorAll('.unique-card');
      cards.forEach((card, index) => {
        card.classList.add('d-none'); // Hide all cards initially
        if (index >= currentIndex && index < currentIndex + totalCards) {
          card.classList.remove('d-none'); // Show only 3 cards
        }
      });
    };
  
    const showNextCards = () => {
      setCurrentIndex((prevIndex) => (prevIndex + totalCards) % cardCount); // Move forward
    };
  
    const showPrevCards = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? cardCount - totalCards : prevIndex - totalCards)); // Move backward
    };

  return (
    <div className="container">
      <div className="row justify-content-center">
        {/* Cards */}
        <div className="col-md-4">
          <div className="unique-card border-primary h-100">
            <div className="unique-card-body">
              <i className="unique-icon unique-icon-primary fas fa-sync-alt mb-3"></i>
              <h5 className="unique-card-title">Manage multiple accounts with Chase Connect®</h5>
              <ul className="unique-list">
                <li>Automate invoicing, manage cash flow, and streamline reporting</li>
                <li>Send wires in nearly 70 currencies</li>
                <li>No fees for up to three years on included services</li>
              </ul>
              <a href="#" className="unique-learn-more text-primary d-inline-flex align-items-center">
                Learn More <span className="ms-1">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="unique-card border-secondary h-100">
            <div className="unique-card-body">
              <i className="unique-icon unique-icon-secondary fas fa-mobile-alt mb-3"></i>
              <h5 className="unique-card-title">Streamline payments with Chase Cashflow360<sup>SM</sup></h5>
              <ul className="unique-list">
                <li>2x faster payments with ACH vs. traditional check</li>
                <li>Spend 50% less time paying and approving bills</li>
                <li>Automatically sync with your accounting software</li>
              </ul>
              <a href="#" className="unique-learn-more text-secondary d-inline-flex align-items-center">
                Learn More <span className="ms-1">&rarr;</span>
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="unique-card border-warning h-100">
            <div className="unique-card-body">
              <i className="unique-icon unique-icon-warning fas fa-hand-holding-usd mb-3"></i>
              <h5 className="unique-card-title">Maximize yield on idle cash</h5>
              <ul className="unique-list">
                <li>Get instant access to liquidity with no limit on deposits</li>
                <li>No period trades, rollover, or administration required</li>
                <li>Integrated with our treasury tools for efficient capital management</li>
              </ul>
              <a href="#" className="unique-learn-more text-warning d-inline-flex align-items-center">
                Learn More <span className="ms-1">&rarr;</span>
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="unique-card border-info h-100">
            <div className="unique-card-body">
              <i className="unique-icon unique-icon-info fas fa-users mb-3"></i>
              <h5 className="unique-card-title">Enhance collaboration with teams</h5>
              <ul className="unique-list">
                <li>Increase productivity with integrated workflows</li>
                <li>Easy to set up and scale with your business</li>
                <li>Real-time collaboration features</li>
              </ul>
              <a href="#" className="unique-learn-more text-info d-inline-flex align-items-center">
                Learn More <span className="ms-1">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="unique-carousel-navigation text-center mt-4">
        <button
          className="unique-carousel-btn btn btn-link"
          onClick={showPrevCards}
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        {/* Dynamic dots */}
        <span className="unique-carousel-dots mx-2">
          {Array.from({ length: Math.ceil(cardCount / totalCards) }).map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex / totalCards === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index * totalCards)} // Jump to the first card of the selected set
            >
              •
            </span>
          ))}
        </span>

        <button
          className="unique-carousel-btn btn btn-link"
          onClick={showNextCards}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
