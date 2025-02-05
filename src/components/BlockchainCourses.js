import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Ensure Link is imported
import PayPal from "./PayPal";
import '../styles/BlockchainCourses.css';
const BlockchainCourses = () => {
      const [inView, setInView] = useState(false); // State to track visibility
      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setInView(entry.isIntersecting); // Set state when the section is in view
          },
          { threshold: 0.5 } // Trigger when 50% of the section is in view
        );
    
        const section = document.getElementById('home'); // Select the section
        if (section) {
          observer.observe(section); // Start observing the section
        }
    
        return () => {
          if (section) {
            observer.unobserve(section); // Clean up the observer
          }
        };
      }, []);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalClose = (e) => {
    if (e.target.classList.contains('paypal-modal-overlay')) {
      setModalOpen(false);
    }
  };
  return (
    <div style={{marginBottom:'20px'}}>

<style>
        {`
          #educationtopmenu {
            background-color: rgb(5, 21, 43);
            border-top-left-radius: 10px; /* Adjust the value as needed */
            border-top-right-radius: 10px; /* Adjust the value as needed */
          }
        `}
      </style>

<section className={`hero-section ${inView ? 'in-view' : ''}`}>
      <div className="video-container1">
        <video autoPlay muted loop playsInline id="hero-video">
        <source src="/assets/images/video/education.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className=" headingcontnetdiv container">
  
    <p className="page-indicator-text">Blockchain Application Courses</p>
    <p className='headertit'>Enroll in our <span className='headtit1'>Blockchain Application Courses</span> Your gateway to mastering blockchain and cryptocurrency.</p>
 
</div>

    </section>

    <div className="container menudisplay breadcrumb">
  <Link to="/" className="homemenu">Home</Link> <span className="separator">&gt;</span> <span className="current-page">Blockchain Application Courses</span>
</div>

    <div className="container mt-5">
      <h1 className='subtitle'>Course Content Description</h1>
      <p> We offer customized blockchain training for businesses, focusing on real-world applications across industries like finance, supply chain, and healthcare. With flexible learning formats, we ensure your team is equipped for digital transformation.</p>

      <div className="row">
  {/* Course 1 */}
  <div className="col-md-4 mb-4">
    <div className="custom-card">
      <div className="card-icon-top text-center">
        <i className="fas fa-money-bill-wave"></i>
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">Finance</h5>
        <p className="card-text">
          Blockchain enhances secure payments, smart contracts, and decentralized finance.
        </p>
      </div>
    </div>
  </div>

  {/* Course 2 */}
  <div className="col-md-4 mb-4">
    <div className="custom-card">
      <div className="card-icon-top text-center">
        <i className="fas fa-home"></i>
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">Real Estate</h5>
        <p className="card-text">
          Blockchain improves property transactions, smart contracts, and land registries.
        </p>
      </div>
    </div>
  </div>

  {/* Course 3 */}
  <div className="col-md-4 mb-4">
    <div className="custom-card">
      <div className="card-icon-top text-center">
        <i className="fas fa-shield-alt"></i>
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">Insurance</h5>
        <p className="card-text text-center">
          Blockchain streamlines claims processing and prevents fraud.
        </p>
      </div>
    </div>
  </div>

  {/* Course 4 */}
  <div className="col-md-4 mb-4">
    <div className="custom-card">
      <div className="card-icon-top text-center">
        <i className="fas fa-plane"></i>
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">Tourism</h5>
        <p className="card-text">
          Blockchain secures bookings and simplifies travel agreements.
        </p>
      </div>
    </div>
  </div>

  {/* Course 5 */}
  <div className="col-md-4 mb-4">
    <div className="custom-card">
      <div className="card-icon-top text-center">
        <i className="fas fa-hospital"></i>
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">Healthcare and Pharma</h5>
        <p className="card-text">
          Blockchain ensures secure medical records and improves drug traceability.
        </p>
      </div>
    </div>
  </div>

  {/* Course 6 */}
  <div className="col-md-4 mb-4">
    <div className="custom-card">
      <div className="card-icon-top text-center">
        <i className="fas fa-truck"></i>
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">Supply Chain Management</h5>
        <p className="card-text">
          Blockchain boosts transparency, traceability, and logistics in supply chains.
        </p>
      </div>
    </div>
  </div>
</div>

 

  {/* Other Course Content */}
  <div className="ico-token-cta" style={{ textAlign: 'center', marginTop: '20px' }}>

    <button className="cta-button" onClick={() => setModalOpen(true)}>
      Book Now
    </button>
  </div>

  {/* Modal for PayPal */}
  {isModalOpen && (
    <div className="paypal-modal-overlay show" onClick={handleModalClose}>
  <div className="paypal-modal-content" onClick={(e) => e.stopPropagation()}>
    <button className="paypal-close-button" onClick={() => setModalOpen(false)}>
      ✖
    </button>
    <h2>Complete Your Payment</h2>

    {/* Transaction Details */}
    <div className="transaction-details">
      <p><strong>Order Summary:</strong></p>
      <ul>
        <li>Item: <span>Blockchain Application Courses</span></li>
        <li>Price: <span>$CHF 1.00</span></li>
        <li>Tax: <span>CHF 1.00</span></li>
        <li><strong>Total:</strong> <span>CHF 1.00</span></li>
      </ul>
    </div>

    {/* User Instructions */}
    <div className="payment-instructions">
      <p>Please review your order details above. Click "Pay with PayPal" to proceed with payment. You will be redirected to PayPal's secure platform to complete the process.</p>
    </div>

    {/* PayPal Component */}
    <div className="paypal-component">
      <PayPal />
    </div>

    {/* Support Contact */}
    <div className="support-info">
      <p>Need help? Contact us at <a href="mailto:support@example.com">info@ptgr.ch</a></p>
    </div>
  </div>
</div>

  )}
    </div>
    </div>
  );
};

export default BlockchainCourses;
