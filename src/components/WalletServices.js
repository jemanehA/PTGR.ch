import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BookConsultation from './BookConsultation';
import '../styles/ForensicServices.css';

const WalletService = () => {
  const [inView, setInView] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <source src="/assets/images/video/Forencis.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
  
        <div className="background-fallback" ref={fallbackRef}></div>
  
        <div className="container">
          <div className="digital-assets-content">
            <h1>
              <span className="swatch-white">
                <strong className='text-center'>Secure Your Digital Asset.</strong>
              </span>
            </h1>
            <p style={{ color: 'white' }}>
              We provide secure hardware wallet solutions and expert guidance for managing your digital assets safely.
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
                <span className="topspan">Wallet Service</span><br />
                Secure Storage and Management of Digital Assets
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
          <div
           
            className="px-4 py-2 font-normal hover:bg-opacity-90 w-fit cursor-pointer text-center mb-4 border-darkBlue border-2 rounded-md transition-all duration-300 ease-in-out  bg-darkBlue  text-white"
          >
          Our Wallet Shop
          </div>
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