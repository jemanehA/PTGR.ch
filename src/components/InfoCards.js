import React, { useState } from "react";
import "../styles/InfoCards.css";

export default function InfoCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = 7;

  // Cards data
  const cards = [
    {
      icon: '<i class="fas fa-wallet" style="color: #1b4572;"></i>',
      title: "WALLET",
      description: "Crypto Wallet Consulting",
      list: [
        "Minimum investm: not required",
        "Personal consultation and education (app. 3 hours)",
        "Initial portfolio set up of centralized & decentralized wallet",
      ],
    },
    {
      icon: '<i class="fas fa-rocket" style="color: #1b4572;"></i>',
      title: "STARTER",
      description: "Crypto Consulting",
      list: [
        "Minimum investment: 7’500 CHF",
        "Personal consultation and education (app. 3 hours)",
        "Initial portfolio set up",
        "Ideal coin allocation",
      ],
    },
    {
      icon: '<i class="fas fa-briefcase" style="color: #1b4572;"></i>',
      title: "BASIC",
      description: "Professional Crypto Consulting",
      list: [
        "Minimum investment: 20’000 CHF",
        "Status quo evaluation",
        "Personal consultation and education (app. 3 hours)",
        "Set-up process",
        "Best in class investment scenarios proposal",
        "Investment strategy: Pre-Defined",
        "Portfolio review: 1 x per year",
        "Portfolio quality meeting: 4 x per year",
        "Portfolio quality alerts: No",
      ],
    },
    {
      icon: '<i class="fas fa-chart-line" style="color: #1b4572;"></i>',
      title: "ADVANCED",
      description: "Strategic Crypto Consulting",
      list: [
        "Minimum investment: 50’000 CHF",
        "Status quo evaluation",
        "Portfolio review: 4 x per year",
        "Personal consultation and education (app. 3 hours)",
        "Portfolio quality meeting: 8 x per year",
        "Portfolio quality alerts: Yes",
        "Education package: Crypto Basics",
        "25% discount on all Education Packages",
      ],
    },
    {
      icon: '<i class="fas fa-bullseye" style="color: #1b4572;"></i>',
      title: "PRO",
      description: "Professional Crypto Consulting",
      list: [
        "Minimum investment: 75’000 CHF",
        "Set Up Process",
        "Investment Strategy: Exclusive, based on individual needs",
        "DeFi / passive Income Strategy",
        "Portfolio review: 6 x per year",
        "Portfolio quality meeting: 8 x per year",
        "Portfolio quality alerts: Yes",
        "Education & Support of Futures Trading/Signals",
        "Education package: Crypto Basics",
        "25% discount on all Education Packages",
      ],
    },
    {
      icon: '<i class="fas fa-bullseye" style="color: #1b4572;"></i>',
      title: "PRO S",
      description: "Strategic and Tactical Performance Consulting",
      list: [
        "Set Up Process",
        "Fully bespoke",
        "Investment Strategy: Exclusive, based on individual needs",
        "DeFi / passive Income Strategy",
        "Portfolio review: 12 x per year",
        "Portfolio quality meeting: 12 x per year",
        "Portfolio quality alerts: Yes",
        "Education & Support of Futures Trading/Signals",
        "Education package for Crypto Trading and Crypto Ecosystem included",
        "50% discount on all Education Packages",
      ],
    },
    {
      icon: '<i class="fas fa-handshake" style="color: #1b4572;"></i>',
      title: "PARTNERSHIP",
      description: "Consulting & Cooperation",
      list: [
        "Minimum investment: 100’000 CHF",
        "Set Up Process",
        "Fully bespoke",
        "Investment Strategy: Exclusive, based on individual needs",
        "Portfolio review: on demand",
        "Portfolio quality meeting: 12 x per year",
        "Portfolio quality alerts: Yes",
        "Instructions for trading signals",
        "Education & Support of Futures Trading/Signals",
        "Education package for Crypto Trading and Crypto Ecosystem included",
        "50% discount on all Education Packages",
      ],
    },
  ];
  
  

  // Next and Previous functions
  const goNext = () => {
    if (currentIndex < totalCards - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="container">
      <div className="custom-cards-container">
        {cards.slice(currentIndex, currentIndex + 3).map((card, index) => (
          <div className="custom-cards" key={index}>
            <div className="header-container">
            <div
  className="custom-card-icon"
  dangerouslySetInnerHTML={{ __html: card.icon }}
></div>
            <h3 className="custom-card-title">{card.title}</h3>
</div>
            
            
            <p className="custom-card-description">{card.description}</p>
            <ul className="custom-card-list">
              {card.list.map((item, i) => (
                <li key={i}> {item}</li>
              ))}
            </ul>
            <a href="#" className="custom-card-link">Learn More →</a>
          </div>
        ))}
      </div>

      <div className="card-indicator-container">
        <div className="navigation-container">
          <button
            className={`navigation-icon ${currentIndex === 0 ? "disabled" : ""}`}
            onClick={goPrev}
            disabled={currentIndex === 0}
          >
            ◀
          </button>
        </div>

        <div className="card-indicator">
          {Array.from({ length: totalCards }).map((_, index) => (
            <span
              key={index}
              className={`indicator-point ${index === currentIndex ? "active" : ""}`}
            ></span>
          ))}
        </div>

        <div className="navigation-container">
          <button
            className={`navigation-icon ${currentIndex >= totalCards - 3 ? "disabled" : ""}`}
            onClick={goNext}
            disabled={currentIndex >= totalCards - 3}
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}
