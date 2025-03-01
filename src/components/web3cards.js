import React, { forwardRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/DigitalWealthManagement.css';
import '../styles/web3cards.css';
import { Link } from 'react-router-dom';  // Ensure Link is imported
const Web3cards = forwardRef((props, ref) => {
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
      image: '/assets/images/ico.webp',
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
      image: '/assets/images/custdy.webp',
      title: "Custody & Payment Solutions", 
      description: "We provide secure custody solutions...", 
      list: ["Secure custody solutions", "Protection against theft and loss", "Unauthorized access prevention", "Fiat and crypto payment processing", "Simplified transactions"] 
    },
    { 
      id: 'metaverse-solutions', // Unique ID
      image: '/assets/images/metavers.webp',
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
    const targetCard = document.getElementById(cards[index].id);
    if (targetCard) {
      // Center the card vertically on larger screens, scroll to top on smaller screens
      const scrollBehavior = window.innerWidth > 768 ? { behavior: 'smooth', block: 'center' } : { behavior: 'smooth', block: 'start' };
      targetCard.scrollIntoView(scrollBehavior);
    }
  };

  return (
    <div className="container ssc-containe" id="web3courses" ref={ref}>
      <div className="ssc-row">
        {/* Fixed Left Card */}
        <div className="dwm-fixed-card" style={{ width: '300px' }}>
          <h3>What We Offer</h3>
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
      <div
        className="ico-token-cta"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '30px',
          marginTop: '30px',
        }}
      >
        <Link to={`/BookConsultations?consultationType=${cards[activeIndex].title}`}>
          <button className="cta-button">Ready to Launch? Request a Consultation</button>
        </Link>
      </div>
    </div>
  );
});

export default Web3cards;