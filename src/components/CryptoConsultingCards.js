import React, { useState } from 'react';
import '../styles/digitcard.css';
import ProfitNowSection from './ProfitNowModal';

const CryptoConsultingCards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    
    <div className="container mt-5" style={{textAlign:'center'}}>
      
      <div className="row justify-content-center" >
        {/* Wallet Card */}
        <div className="col-md-5 mb-5">
          <div className="crrcard1">
            <img src='/assets/images/Crypto-Wallet-Consulting.webp' className="crrcard-img-top" alt="Wallet" />
            <div className="crrcard-body">
              <h5 className="crrcard-title">WALLET</h5>
              <h6 className="crrcard-subtitle card-subtitle mb-2 text-muted">Crypto Wallet Consulting</h6>
              <ul className="crrcard-list">
                <li className="crrcard-list-item">Minimum investment: not required </li>
                <li className="crrcard-list-item">Personal consultation and education (app. 3 hours)</li>
                <li className="crrcard-list-item">Initial portfolio set up of centralized & decentralized wallet</li>
              </ul>
            </div>
            <button className="crrcard-button" onClick={openModal}>Profit Now</button>
          </div>
        </div>

        {/* Starter Card */}
        <div className="col-md-5 mb-5">
          <div className="crrcard1">
            <img src='/assets/images/Crypto-Wallet-Consulting.webp' className="crrcard-img-top" alt="Starter" />
            <div className="crrcard-body">
              <h5 className="crrcard-title">STARTER</h5>
              <h6 className="crrcard-subtitle card-subtitle mb-2 text-muted">Crypto Consulting</h6>
              <ul className="crrcard-list">
                <li className="crrcard-list-item">Minimum investment: 7’500 CHF</li>
                <li className="crrcard-list-item">Personal consultation and education (app. 3 hours)</li>
                <li className="crrcard-list-item">Initial portfolio set up</li>
                <li className="crrcard-list-item">Ideal coin allocation</li>
              </ul>
            </div>
            <button className="crrcard-button" onClick={openModal}>Profit Now</button>
          </div>
        </div>

        {/* Basic Card */}
        <div className="col-md-5 mb-5">
          <div className="crrcard2">
            <img src='/assets/images/Crypto-Wallet-Consulting.webp' className="crrcard-img-top" alt="Basic" />
            <div className="crrcard-body">
              <h5 className="crrcard-title">BASIC</h5>
              <h6 className="crrcard-subtitle card-subtitle mb-2 text-muted">Professional Crypto Consulting</h6>
              <ul className="crrcard-list">
                <li className="crrcard-list-item">Minimum investment: 20’000 CHF</li>
                <li className="crrcard-list-item">Status quo evaluation</li>
                <li className="crrcard-list-item">Personal consultation and education (app. 3 hours)</li>
                <li className="crrcard-list-item">Set-up process</li>
                <li className="crrcard-list-item">Best in class investment scenarios proposal</li>
                <li className="crrcard-list-item">Investment strategy: Pre-Defined</li>
                <li className="crrcard-list-item">Portfolio review: 1 x per year</li>
                <li className="crrcard-list-item">Portfolio quality meeting: 4 x per year</li>
                <li className="crrcard-list-item">Portfolio quality alerts: No</li>
              </ul>
            </div>
            <button className="crrcard-button" onClick={openModal}>Profit Now</button>
          </div>
        </div>

        {/* Advanced Card */}
        <div className="col-md-5 mb-5">
          <div className="crrcard2">
            <img src='/assets/images/Crypto-Wallet-Consulting.webp' className="crrcard-img-top" alt="Advanced" />
            <div className="crrcard-body">
              <h5 className="crrcard-title">ADVANCED</h5>
              <h6 className="crrcard-subtitle card-subtitle mb-2 text-muted">Strategic Crypto Consulting</h6>
              <ul className="crrcard-list">
                <li className="crrcard-list-item">Minimum investment: 50’000 CHF</li>
                <li className="crrcard-list-item">Status quo evaluation</li>
                <li className="crrcard-list-item">Portfolio review: 4 x per year</li>
                <li className="crrcard-list-item">Personal consultation and education (app. 3 hours)</li>
                <li className="crrcard-list-item">Portfolio quality meeting: 8 x per year</li>
                <li className="crrcard-list-item">Portfolio quality alerts: Yes</li>
                <li className="crrcard-list-item">Education package: Crypto Basics</li>
                <li className="crrcard-list-item">25% discount on all Education Packages</li>
              </ul>
            </div>
            <button className="crrcard-button" onClick={openModal}>Profit Now</button>
          </div>
        </div>

        {/* Pro Card */}
        <div className="col-md-5 mb-5">
          <div className="crrcard3">
            <img src='/assets/images/Crypto-Wallet-Consulting.webp' className="crrcard-img-top" alt="Pro" />
            <div className="crrcard-body">
              <h5 className="crrcard-title">PRO</h5>
              <h6 className="crrcard-subtitle card-subtitle mb-2 text-muted">Professional Crypto Consulting</h6>
              <ul className="crrcard-list">
                <li className="crrcard-list-item">Minimum investment: 75’000 CHF</li>
                <li className="crrcard-list-item">Set Up Process</li>
                <li className="crrcard-list-item">Investment Strategy: Exclusive, based on individual needs</li>
                <li className="crrcard-list-item">DeFi / passive Income Strategy</li>
                <li className="crrcard-list-item">Portfolio review: 6 x per year</li>
                <li className="crrcard-list-item">Portfolio quality meeting: 8 x per year</li>
                <li className="crrcard-list-item">Portfolio quality alerts: Yes</li>
                <li className="crrcard-list-item">Education & Support of Futures Trading/Signals</li>
                <li className="crrcard-list-item">Education package: Crypto Basics</li>
                <li className="crrcard-list-item">25% discount on all Education Packages</li>
              </ul>
            </div>
            <button className="crrcard-button" onClick={openModal}>Profit Now</button>
          </div>
        </div>

        {/* Partnership Card */}
        <div className="col-md-5 mb-5">
          <div className="crrcard3">
            <img src='/assets/images/Crypto-Wallet-Consulting.webp' className="crrcard-img-top" alt="Partnership" />
            <div className="crrcard-body">
              <h5 className="crrcard-title">PRO S</h5>
              <h6 className="crrcard-subtitle card-subtitle mb-2 text-muted">Strategic and Tactical Performance Consulting</h6>
              <ul className="crrcard-list">
              <li className="crrcard-list-item">Strategic and Tactical Performance Consulting</li>
  <li className="crrcard-list-item">Set Up Process</li>
  <li className="crrcard-list-item">Fully bespoke</li>
  <li className="crrcard-list-item">Investment Strategy: Exclusive, based on individual needs</li>
  <li className="crrcard-list-item">DeFi / passive Income Strategy</li>
  <li className="crrcard-list-item">Portfolio review: 12 x per year</li>
  <li className="crrcard-list-item">Portfolio quality meeting: 12 x per year</li>
  <li className="crrcard-list-item">Portfolio quality alerts: Yes</li>
  <li className="crrcard-list-item">Education & Support of Futures Trading/Signals</li>
  <li className="crrcard-list-item">Education package for Crypto Trading and Crypto Ecosystem included</li>
  <li className="crrcard-list-item">50% discount on all Education Packages</li>
              </ul>
            </div>
            <button className="crrcard-button" onClick={openModal}>Profit Now</button>
          </div>
        </div>
        <div className="col-md-5 mb-5">
          <div className="crrcard3">
            <img src='/assets/images/Crypto-Wallet-Consulting.webp' className="crrcard-img-top" alt="Partnership" />
            <div className="crrcard-body">
              <h5 className="crrcard-title">PARTNERSHIP</h5>
              <h6 className="crrcard-subtitle card-subtitle mb-2 text-muted">Consulting & Cooperation</h6>
              <ul className="crrcard-list">
                <li className="crrcard-list-item">Minimum investment: 100’000 CHF</li>
                <li className="crrcard-list-item">Set Up Process</li>
                <li className="crrcard-list-item">Fully bespoke</li>
                <li className="crrcard-list-item">Investment Strategy: Exclusive, based on individual needs</li>
                <li className="crrcard-list-item">Portfolio review: on demand</li>
                <li className="crrcard-list-item">Portfolio quality meeting: 12 x per year</li>
                <li className="crrcard-list-item">Portfolio quality alerts: Yes</li>
                <li className="crrcard-list-item">Instructions for trading signals</li>
                <li className="crrcard-list-item">Education & Support of Futures Trading/Signals</li>
                <li className="crrcard-list-item">Education package for Crypto Trading and Crypto Ecosystem included</li>
                <li className="crrcard-list-item">50% discount on all Education Packages</li>
              </ul>
            </div>
            <button className="crrcard-button" onClick={openModal}>Profit Now</button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ProfitNowSection isModalOpen={isModalOpen} closeModal={closeModal} />
      )}
    </div>
  );
};

export default CryptoConsultingCards;
