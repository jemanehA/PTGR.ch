import React, { useState, useRef } from 'react';
import '../styles/ScrollableServiceCards.css';
import ServiceDetailView from './ServiceDetailView';

const ScrollableServiceCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const scrollContainerRef = useRef(null);

  const cards = [
    { 
      image: '/assets/images/wallett.png', 
      title: "WALLET", 
      description: "Crypto Wallet Consulting", 
      list: ["Set-up of centralized & decentralized wallet", "Explanation of Wallet basics", "Personal consultation and education (app. 2 hours)"],
      detailContent:'<h3>Service</h3><ul><li>Set-up of centralized & decentralized wallet</li><li>Explanation of Wallet basics</li><li>Personal consultation and education (app. 2 hours)</li></ul>',
      watermark:false
    },
    { 
      image: '/assets/images/Professional-Crypto-Consulting-.webp', 
      title: "STARTER", 
      description: "Crypto Consulting", 
      list: ["Set-up process", "Personal consultation and education (app. 3 hours)", "Ideal coin allocation"] ,
      detailContent: '<h3>Service</h3><ul><li>Set-up process</li><li>Personal consultation and education (app. 3 hours)</li><li>Ideal coin allocation</li></ul><b>Recommended Investment</b>: CHF 10.000</span>',
      watermark:false

    },
    { 
      image: '/assets/images/Strategic-Crypto-Consulting.webp', 
      title: "BASIC", 
      description: "Professional Crypto Consulting", 
      list: [
        "Set-up process",
        "Strategic consulting: Assessment of the status quo",
        "Investment ideas: based on a shortlist of the best investments",
        "Define investment strategy",
        "Coin allocation",
        "Portfolio review 1x p.a.",
        "Portfolio quality review 4x p.a.",
        "Warnings on portfolio quality and performance are excluded"
        ] ,
        detailContent: '<h3>Service</h3><ul><li>Set-up process</li><li>Strategic consulting <ul><li>Assessment of the status quo</li><li>Investment ideas: based on a shortlist of the best investments</li><li>Define investment strategy</li><li>Coin allocation</li><li><strong>Portfolio review 1x p.a.</strong></li><li><strong>Portfolio quality review 4x p.a.</strong></li><li>Warnings on portfolio quality and performance are excluded</li></ul></br><span><b>Recommended Investment</b>: CHF 20.000</span>',
        watermark:false

    },

    { 
      image: '/assets/images/win.jpg', 
      title: "ADVANCED", 
      description: "Professional Crypto Consulting", 
      list: [
        "Set-up process",
        "Strategic consulting",
        "Assessment of the status quo",
        "Investment ideas: based on a shortlist of the best investments",
        "Define investment strategy",
        "Coin allocation: predefined and needs-based investment strategy",
        "Portfolio review 4x p.a.",
        "Portfolio quality discussion 8x p.a.",
        "Alerts on portfolio quality and performance (no monitoring)",
        "Risk management",
        "Exit strategies",
        "Education Deck",
        "25% discount on all EDU packages"],
        detailContent: '<h3>Service</h3><ul><li>Set-up process</li><li>Strategic consulting</li><ul><li>Assessment of the status quo</li><li>Investment ideas: based on a shortlist of the best investments</li><li>Define investment strategy</li><li>Coin allocation: predefined and needs-based investment strategy</li><li><strong>Portfolio review 4x p.a.</strong></li><li><strong>Portfolio quality discussion 8x p.a.</strong></li><li>Alerts on portfolio quality and performance (no monitoring)</li><li>Risk management</li><li>Exit strategies</li><li>Education Deck</li></ul><li>25% discount on all EDU packages</li></ul><span><b>Recommended Investment</b>: CHF 60.000</span>',
        watermark:false

    },
    { 
      image: '/assets/images/Professional-Crypto-Consulting-.webp', 
      title: "PRO", 
      description: "Professional Crypto Consulting", 
      list: [
        "Set-up process",
        "Strategic consulting",
        "Assessment of the status quo",
        "Individual and customized portfolio investment",
        "DeFi and passive income strategies",
        "Portfolio review 12x p.a.",
        "Portfolio quality review 12x p.a.",
        "Alerts on portfolio quality and performance (no monitoring)",
        "Risk management",
        "Exit strategies",
        "Access to seed and PRE-ICO investment options",
        "Education and support for futures trading/signals",
        "Education deck for crypto trading and crypto ecosystem",
        "50% discount on all education packages"
        ],
        detailContent: '<h3>Service</h3><ul><li>Set-up process</li><li>Strategic consulting<ul></li><li>Assessment of the status quo</li><li>Individual and customized portfolio investment</li><li>DeFi and passive income strategies</li><li><strong>Portfolio review 12x p.a.</strong></li><li><strong>Portfolio quality review 12x p.a.</strong></li><li>Alerts on portfolio quality and performance (no monitoring)</li><li>Risk management</li><li>Exit strategies</li></ul><li>Access to seed and PRE-ICO investment options</li><li>Education and support for futures trading/signals</li><li>Education deck for crypto trading and crypto ecosystem</li><li>50% discount on all education packages</li></ul><span><b>Recommended Investment</b>: CHF 100.000</span>',
        watermark:false

    },
    { 
      image: '/assets/images/Strategic-Crypto-Consulting.webp', 
      title: "PRO S", 
      description: "Professional Crypto Consulting", 
      list: [
        "Set-up process",
        "Strategic consulting",
        "Ongoing assessment of the status quo",
        "Individual and customized portfolio investment",
        "DeFi and passive income strategies",
        "Tactical clients included",
        "Portfolio review 36x p.a.",
        "Portfolio quality review 24x p.a.",
        "Alerts on portfolio quality and performance (no monitoring)",
        "Risk management",
        "Exit strategies",
        "Airdrop strategies",
        "Futures trading/signals education and support",
        "Access to seed and PRE-ICO investment options",
        "Education deck for crypto trading and crypto ecosystem",
        "50% discount on all education packages"
        ]  ,
        detailContent: '<h3>Service</h3><ul><li>Set-up process</li><li>Strategic consulting</li><ul><li>Ongoing assessment of the status quo</li><li>Individual and customized portfolio investment</li><li>DeFi and passive income strategies</li><li>Tactical clients included</li><li><strong>Portfolio review 36x p.a.</strong></li><li><strong>Portfolio quality review 24x p.a.</strong></li><li>Alerts on portfolio quality and performance (no monitoring)</li><li>Risk management</li><li>Exit strategies</li><li>Airdrop strategies</li></ul><li>Futures trading/signals education and support</li><li>Access to seed and PRE-ICO investment options</li><li>Education deck for crypto trading and crypto ecosystem</li><li>50% discount on all education packages</li></ul><b>Recommended Investment</b>: CHF 200.000</span>',
        watermark:false

    },

    { 
      image: '/assets/images/Strategic-Crypto-Consulting.webp', 
      title: "PARTNERSHIP", 
      description: "Consulting & Cooperation", 
      list: [
        "Set-up process",
        "Strategic consulting",
        "Ongoing assessment of the status quo",
        "Individual and customized portfolio investment",
        "DeFi and passive income strategies",
        "Tactical clients included",
        "Portfolio review 36x p.a.",
        "Portfolio quality review 24x p.a.",
        "Alerts on portfolio quality and performance (no monitoring)",
        "Risk management",
        "Exit strategies",
        "Airdrop strategies",
        "Futures trading/signals education and support",
        "Access to seed and PRE-ICO investment options",
        "Education deck for crypto trading and crypto ecosystem",
        "50% discount on all education packages",
        ]  ,
        detailContent: '<h3>Services</h3><ul><li>Set-up process</li><li>Strategic consulting<ul><li>Ongoing assessment of the status quo</li><li>Individual and customized portfolio investment</li><li>DeFi and passive income strategies</li><li>Tactical clients included</li><li><strong>Portfolio review 36x p.a.</strong></li><li><strong>Portfolio quality review 24x p.a.</strong></li><li>Alerts on portfolio quality and performance (no monitoring)</li><li>Risk management</li><li>Exit strategies</li><li>Airdrop strategies</li></ul><li>Futures trading/signals education and support</li><li>Access to seed and PRE-ICO investment options</li><li>Education deck for crypto trading and crypto ecosystem</li><li>50% discount on all education packages</li></ul><p><b>Cost model</b>: High Watermark </p><p><b>Recommended Investment</b>: CHF 100.000</p>',
        watermark:true

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

  const handleSelectService = (index) => {
    setSelectedService(cards[index]);
    activateService(index);
  };

  return (
    <div className="container ssc-container" id="digitalassetservices">
      {selectedService ? (
        <ServiceDetailView
          service={selectedService}
          onBack={handleBack}
          onSelectService={handleSelectService}
          services={cards}
        />
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
<div class="legal-info">
  <h4>Legal Disclaimer</h4>
  <p>This information is for general purposes only and not legal or tax advice. Customers should review relevant documents, including taxation guidelines, to understand their individual conditions. Consulting a professional is recommended.</p>
</div>



    </div>
  );
};

export default ScrollableServiceCards;