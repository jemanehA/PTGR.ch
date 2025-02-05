import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/DigitalWealthManagement.css';
import '../styles/web3cards.css';

const Web3cards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation(); // Get the current location

  const cards = [
    { 
      id: 'strategic-ico-execution', // Unique ID
      image: '/assets/images/iso.jpeg',
      title: "Strategic ICO Execution", 
      description: "We provide end-to-end support for the execution of Initial Coin Offerings (ICOs)...", 
      list: ["Smart contract development", "Legal structuring", "Whitepaper creation", "Investor base building", "Marketing campaigns", "Strategic partnerships"] 
    },
    { 
      id: 'ico-setup-fundraising', // Unique ID
      image: '/assets/images/fund.jpg',
      title: "ICO Set up and Fundraising", 
      description: "Our team handles every aspect of ICO setup...", 
      list: ["Smart contract development", "Legal structuring", "Whitepaper creation", "Investor base building", "Marketing campaigns", "Strategic partnerships"] 
    },
    { 
      id: 'rwa-tokenization', // Unique ID
      image: '/assets/images/preiso.jpeg',
      title: "RWA Tokenization as a Service", 
      description: "With our Real-World Asset (RWA) tokenization services...", 
      list: ["Real estate tokenization", "Artwork tokenization", "Commodities tokenization", "Fractional ownership", "Increased liquidity", "Secure transactions"] 
    },
    { 
      id: 'custody-payments', // Unique ID
      image: '/assets/images/payment.jpg',
      title: "Custody & Payment Solutions", 
      description: "We provide secure custody solutions...", 
      list: ["Secure custody solutions", "Protection against theft and loss", "Unauthorized access prevention", "Fiat and crypto payment processing", "Simplified transactions"] 
    },
    { 
      id: 'metaverse-solutions', // Unique ID
      image: '/assets/images/meta.jpeg',
      title: "Metaverse Solutions", 
      description: "We help businesses establish a meaningful presence in the metaverse...", 
      list: ["Virtual space creation", "NFT integration", "Gaming platforms", "E-commerce solutions", "Education platforms", "Blockchain and AR/VR technologies"] 
    },
  ];

  // Scroll to the card based on the state passed from the navbar
  useEffect(() => {
    const cardId = location.state?.cardId; // Get the card ID from state
    if (cardId) {
      const cardIndex = cards.findIndex(card => card.id === cardId);
      if (cardIndex !== -1) {
        setActiveIndex(cardIndex);
        const targetCard = document.getElementById(cardId);
        if (targetCard) {
          // Center the card vertically on the screen
          targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }
  }, [location.state, cards]);

  const activateService = (index) => {
    setActiveIndex(index);
    if (window.innerWidth > 768) {
      const targetCard = document.getElementById(cards[index].id);
      if (targetCard) {
        // Center the card vertically on the screen
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <div className="container ssc-container" id="web3courses">
      <div className="ssc-row">
        {/* Fixed Left Card */}
        <div className="dwm-fixed-card" style={{ width: '300px' }}>
          <h3>Explore Our Services</h3>
          <ul>
            {cards.map((card, index) => (
              <li
                key={index}
                onClick={() => activateService(index)}
                className={index === activeIndex ? 'dwm-active' : ''}
              >
                {card.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Scrollable Services */}
        <div className="ssc-scroll-container">
          {cards.map((card, index) => (
            <div
              key={index}
              id={card.id} // Use the card's unique ID
              className={`web-scroll-card ${index === activeIndex ? 'ssc-active' : ''}`}
            >
              <img src={card.image} alt={card.title} className="web-card-image" />
              <div className="ssc-card-content">
                <h5>{card.title}</h5>
                <p>{card.description}</p>
                <ul>
                  {card.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Web3cards;