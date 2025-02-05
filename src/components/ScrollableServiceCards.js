import React, { useState, useRef } from 'react';
import '../styles/ScrollableServiceCards.css';
import ServiceDetail from './ServiceDetail';

const ScrollableServiceCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const scrollContainerRef = useRef(null);

  const cards = [
    { 
      image: '/assets/images/about.jpg', 
      title: "WALLET", 
      description: "Crypto Wallet Consulting", 
      list: ["Minimum investment: not required", "Personal consultation and education (app. 3 hours)", "Initial portfolio set up of centralized & decentralized wallet"]  
    },
    { 
      image: '/assets/images/Professional-Crypto-Consulting-.webp', 
      title: "STARTER", 
      description: "Crypto Consulting", 
      list: ["Minimum investment: 7’500 CHF", "Personal consultation and education (app. 3 hours)", "Initial portfolio set up", "Ideal coin allocation"]   
    },
    { 
      image: '/assets/images/Strategic-Crypto-Consulting.webp', 
      title: "BASIC", 
      description: "Professional Crypto Consulting", 
      list: ["Minimum investment: 20’000 CHF", "Status quo evaluation", "Personal consultation and education (app. 3 hours)", "Set-up process", "Best in class investment scenarios proposal", "Investment strategy: Pre-Defined", "Portfolio review: 1 x per year", "Portfolio quality meeting: 4 x per year", "Portfolio quality alerts: No"]   
    },
    { 
      image: '/assets/images/win.jpg', 
      title: "ADVANCED", 
      description: "Strategic Crypto Consulting", 
      list: ["Minimum investment: 50’000 CHF", "Status quo evaluation", "Portfolio review: 4 x per year", "Personal consultation and education (app. 3 hours)", "Portfolio quality meeting: 8 x per year", "Portfolio quality alerts: Yes", "Education package: Crypto Basics", "25% discount on all Education Packages"]  
    },
    { 
      image: '/assets/images/Professional-Crypto-Consulting-.webp', 
      title: "PRO", 
      description: "Professional Crypto Consulting", 
      list: ["Minimum investment: 75’000 CHF", "Set Up Process", "Investment Strategy: Exclusive, based on individual needs", "DeFi / passive Income Strategy", "Portfolio review: 6 x per year", "Portfolio quality meeting: 8 x per year", "Portfolio quality alerts: Yes", "Education & Support of Futures Trading/Signals", "Education package: Crypto Basics", "25% discount on all Education Packages"]  
    },
    { 
      image: '/assets/images/Strategic-Crypto-Consulting.webp', 
      title: "PRO S", 
      description: "Consulting & Cooperation", 
      list: ["Strategic and Tactical Performance Consulting", "Set Up Process", "Fully bespoke", "Investment Strategy: Exclusive, based on individual needs", "DeFi / passive Income Strategy", "Portfolio review: 12 x per year", "Portfolio quality meeting: 12 x per year", "Portfolio quality alerts: Yes", "Education & Support of Futures Trading/Signals", "Education package for Crypto Trading and Crypto Ecosystem included", "50% discount on all Education Packages"]  
    },
    { 
      image: '/assets/images/Strategic-Crypto-Consulting.webp', 
      title: "PARTNERSHIP", 
      description: "Consulting & Cooperation", 
      list: ["Minimum investment: 100’000 CHF", "Set Up Process", "Fully bespoke", "Investment Strategy: Exclusive, based on individual needs", "Portfolio review: on demand", "Portfolio quality meeting: 12 x per year", "Portfolio quality alerts: Yes", "Instructions for trading signals", "Education & Support of Futures Trading/Signals", "Education package for Crypto Trading and Crypto Ecosystem included", "50% discount on all Education Packages"]  
    },
  ];

  const activateService = (index) => {
    setActiveIndex(index);

    const targetCard = document.getElementById(`ssc-service-${index}`);
    const scrollContainer = scrollContainerRef.current;

    if (targetCard && scrollContainer) {
      const cardOffset = targetCard.offsetLeft;
      const containerWidth = scrollContainer.clientWidth;
      const cardWidth = targetCard.clientWidth;
      const scrollTo = cardOffset - (containerWidth / 2) + (cardWidth / 2);

      scrollContainer.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
      });
    }
  };

  const handleLearnMore = (service) => {
    setSelectedService(service);
  };

  const handleBack = () => {
    setSelectedService(null);
  };

  return (
    <div className="container ssc-container" id="digitalassetservices">
      {selectedService ? (
        <ServiceDetail service={selectedService} onBack={handleBack} />
      ) : (
        <div className="ssc-row">
          <div className="ssc-fixed-card">
            <h3>Explore Our Services</h3>
            <ul>
              {cards.map((card, index) => (
                <li
                  key={index}
                  onClick={() => activateService(index)}
                  className={index === activeIndex ? 'ssc-active' : ''}
                  role="button"
                  tabIndex={0}
                  aria-label={`Select ${card.title} service`}
                >
                  {card.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="ssc-scroll-container" ref={scrollContainerRef}>
            {cards.map((card, index) => (
              <div
                key={index}
                id={`ssc-service-${index}`}
                className={`ssc-scroll-card ${index === activeIndex ? 'ssc-active' : ''}`}
              >
                <img src={card.image} alt={card.title} className="ssc-card-image" />
                <div className="ssc-card-content">
                  <h5>{card.title}</h5>
                  <p>{card.description}</p>
                  <ul>
                    {card.list.slice(0, 6).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="ssc-learn-more" onClick={() => handleLearnMore(card)}>
                    Learn More →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollableServiceCards;