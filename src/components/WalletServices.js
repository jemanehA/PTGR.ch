import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BookConsultation from './BookConsultation';
import '../styles/ForensicServices.css';

const WalletService = () => {
  const [inView, setInView] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      title: 'Smartcard-Based Design',
      description: 'Both Tangem and the PTGR Wallet are built using a contactless smartcard format, ensuring ease of use, portability, and durability. Users can access their assets via NFC with a simple tap on their smartphone.',
      icon: 'fas fa-id-card',
    },
    {
      title: 'Maximum Security (EAL6+)',
      description: 'The wallets are powered by chips certified at EAL6+, one of the highest international security standards for microcontrollers. This ensures robust protection against physical tampering and software-level threats.',
      icon: 'fas fa-shield-alt',
    },
    {
      title: 'True Self-Custody, No Risk',
      description: 'The non-extractable private keys are generated randomly and stored solely within the secure chip of each card, never exposed to external devices or servers. Neither Tangem nor PTGR has access to users\' wallets, reinforcing full user sovereignty.',
      icon: 'fas fa-lock',
    },
    {
      title: 'Multi-Card Backup Architecture',
      description: 'Users can set up multiple PTGR Wallet cards as backup devices. Each card independently serves as a secure access key, enhancing both redundancy and reliability. The use of a seed phrase is optional.',
      icon: 'fas fa-copy',
    },
    {
      title: 'Independently Audited',
      description: 'The underlying Tangem technology has been rigorously audited by industry-leading cybersecurity firms such as Kudelski Security and Riscure, validating the integrity of its cryptographic architecture.',
      icon: 'fas fa-search',
    },
    {
      title: 'Mobile-First Experience',
      description: 'The wallets operate seamlessly with the Tangem app on iOS and Android, requiring no cables, Bluetooth, or batteries—just a secure tap using NFC.',
      icon: 'fas fa-mobile-alt',
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('home');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const videoRef = useRef(null);
  const fallbackRef = useRef(null);
  
  useEffect(() => {
    const video = videoRef.current;
    const fallback = fallbackRef.current;

    if (video) {
      video.style.display = 'block';
      video.play();

      video.addEventListener('loadeddata', () => {
        if (fallback) {
          fallback.style.display = 'none';
        }
      });

      video.addEventListener('error', () => {
        if (fallback) {
          fallback.style.display = 'block';
        }
      });
    }
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        console.log('Section in view:', entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('digital-assets-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div>
      <style>
        {`
          #productsDropdown {
            background-color: rgb(20, 46, 82);
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            font-weight: bold;
          }
        `}
      </style>

      <section
        id="digital-assets-section"
        className={`digital-assets-section ${inView ? 'in-view' : ''}`}
      >
        <video
          id="background-video"
          className="background-video"
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          style={{ display: 'none' }}
        >
          <source src="/assets/images/video/wallet-service-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
  
        <div className="background-fallback" ref={fallbackRef}></div>
  
        <div className="container">
          <div className="digital-assets-content">
            <h1>
              <span className="swatch-white">
                <strong className='text-center'>The PTGR Wallet</strong> <h2>Next-Gen Hardware Wallet for Secure Crypto Management</h2>
              </span>
            </h1>
            <p style={{ color: 'white' }}>
              Advanced hardware wallet solutions and secure asset management for businesses and institutions
            </p>
          </div>
        </div>
      </section>

      <div className="container menudisplay breadcrumb">
        <Link to="/"><span className="homemenu">Home</span></Link> 
        <span className="separators">&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span> 
        <span className="current-page">Wallet Service</span>
      </div>
      
      <div className="text-sm mt-4 mx-4 mb-2 md:mb-4">
        <Link to="/" className="text-darkBlue hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/Service" className="text-darkBlue hover:underline">
          Digital Asset Services
        </Link>
        <span className="mx-2">/</span>
        <Link to="/wallet-services" className="text-darkBlue hover:underline">
          Wallet Service
        </Link>
      </div>

      <div className="container afterheading-section">
        <div className="row">
          <div className="col-xl-5 col-lg-5 afterheading-left">
            <div className="afterheading-title">
              <h2 className="afterheading-main-title">
                <span className="topspan">Secure Digital Asset</span>
                <span className="topspan">Management Solutions</span><br />
                Hardware Wallets & Institutional Storage
              </h2>
            </div>
          </div>
          <div className="col-xl-6 offset-xl-1 col-lg-7 afterheading-right">
            <div className="service-text">
              <p style={{ textAlign: 'justify' }}>
                <span><strong>Secure Storage and Management of Digital Assets:</strong></span>
                In today's digital economy, the ability to securely store, manage, and transfer digital assets has become essential for both individuals and businesses. Digital wallets are no longer a convenience—they are a critical component of modern financial infrastructure.
              </p>
              <p style={{ textAlign: 'justify' }}>
                With the rise of cryptocurrencies, tokenized assets, and digital identity solutions, having a reliable and secure digital wallet is key to staying competitive, compliant, and future-ready in an increasingly decentralized landscape.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="pad">
          <h3 className='text-center topspan'>Wallet Shop</h3>
          <p>
            In our wallet shop, we offer hardware wallets designed to meet the security needs of both private individuals and businesses. Our offering includes various quantity packages, allowing clients to choose the solution that best fits their requirements — from single-device purchases for personal use to bulk orders tailored for corporate environments.
          </p>
          <div className='w-full flex justify-end'>
          {/* <div
           
            className="px-4 py-2 font-normal hover:bg-opacity-90 w-fit cursor-pointer text-center mb-4 border-darkBlue border-2 rounded-md transition-all duration-300 ease-in-out  bg-darkBlue  text-white"
          >
          Our Wallet Shop
          </div> */}
          </div>
        </div>
      </div>

      <div className="strategydiv">
      <div className="container mt-5">
  <div className="row">
    {[
      { 
        icon: 'fas fa-shield-alt', 
        title: 'Secure Initialization', 
        description: (
          <>
            We ensure that each hardware wallet is set up under secure conditions, tailored to the client's specific needs. This includes:
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              <li>Device activation and firmware verification</li>
              <li>Generation and secure handling of the recovery phrase (seed phrase)</li>
              <li>Wallet configuration for personal or business use</li>
            </ul>
          </>
        ) 
      },
      { 
        icon: 'fas fa-key', 
        title: 'Key Management Guidance', 
        description: (
          <>
            We offer clear and practical guidance for the secure storage and internal handling of cryptographic keys, including:
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              <li>Best practices for storing seed phrases offline</li>
              <li>Structuring backup solutions</li>
              <li>Role-based access guidance for organizational environments</li>
            </ul>
          </>
        ) 
      },
      { 
        icon: 'fas fa-user-graduate', 
        title: 'User Training & Handover', 
        description: (
          <>
            To ensure secure usage after setup, we provide:
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              <li>Step-by-step instruction on wallet functionality</li>
              <li>Education on common security risks and how to avoid them</li>
              <li>Final handover of all access credentials in a controlled and documented process</li>
            </ul>
          </>
        ) 
      }
    ].map((service, index) => (
      <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex align-items-stretch">
        <div className="how-it-works-step text-center p-4 rounded shadow-sm">
          <i className={`${service.icon} how-it-works-step-icon`} aria-hidden="true"></i>
          <h5 className="fw-bold" style={{height:'55px'}}>{service.title}</h5>
          <div className="text-muted" style={{ textAlign: 'left' }}>{service.description}</div>
        </div>
      </div>
    ))}
  </div>
</div>
      </div>

      <div className="container py-5 features-section">
      <div className="text-center mb-5">
      <h2 className="section-title mb-1">The PTGR Wallet</h2>
      <h3 className='text- mb-4'>Powered by Tangem</h3>
         <div className='w-[100%]  mx-auto'>
          <p className="lead text-left">
            Tangem wallets are cutting-edge hardware wallets engineered for secure storage and management of cryptocurrencies. Their innovative smartcard-based design offers a sleek, portable, and user-friendly alternative to traditional hardware wallets, enabling seamless interaction with digital assets via mobile devices.
          </p>
          <p className="lead text-left">
            As part of its commitment to advancing secure and decentralized finance, PTGR AG has partnered with Tangem to launch its own branded hardware wallet—the PTGR Wallet. This collaboration combines Tangem's state-of-the-art security infrastructure with PTGR's mission to provide accessible, self-custodial solutions to a growing digital economy.
          </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
  {features.map((feature, index) => (
    <div 
      className={`col-12 col-md-6 col-lg-4 ${features.length % 2 !== 0 && index >= features.length - 2 ? 'offset-lg-2' : ''}`} 
      key={index}
    >
      <div className="feature-card">
        <div className="cardabout">
          <i className={`${feature.icon} custom-icon`} style={{ fontSize: '2rem' }}></i>
          <h5 className="card-title">{feature.title}</h5>
          <p className="card-text text-justify">{feature.description}</p>
        </div>
      </div>
    </div>
  ))}
 
</div>
<div className='mt-4 mx-auto w-fit'>
<a
target='blank'
 href='https://tangem.com'
className="px-4 py-2  font-normal hover:bg-opacity-90 w-fit cursor-pointer text-center mb-4 border-darkBlue border-2 rounded-md transition-all duration-300 ease-in-out text-white bg-darkBlue hover:text-white"
>
Learn More
</a>
</div>
      </div>
      {isModalOpen && (
        <div className="book-custom-modal">
          <div className="book-modal-content">
            <span className="book-close-button" onClick={closeModal}>&times;</span>
            <BookConsultation />
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletService;