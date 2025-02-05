import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/PaymentDetails.css';
import CreateAccount from './CreateAccount';
import Login from './Login';
import { Link } from 'react-router-dom';
import VerifyEmail from './VerifyEmail';
import PayPal from './PayPal'; // Import PayPal component

const PaymentDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const paymentData = location.state?.paymentDetails || [];
  const selectedPackage = location.state?.selectedPackage || {};

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCreateAccount, setIsCreateAccount] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isPayPalVisible, setIsPayPalVisible] = useState(false);  // State for showing PayPal
  const [customerInfo, setCustomerInfo] = useState({ name: '', email: '', confirmEmail: '', phone: '' });  // Customer info state

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLoginRedirect = () => {
    setIsLogin(true);
  };

  const handleSignupRedirect = () => {
    setIsCreateAccount(true);
  };

  const handleInfoSubmit = (e) => {
    e.preventDefault();
    // If the customer info is valid, show PayPal
    if (customerInfo.name && customerInfo.email && customerInfo.confirmEmail && customerInfo.phone && customerInfo.email === customerInfo.confirmEmail) {
      setIsPayPalVisible(true);
    } else {
      alert('Please provide valid information and ensure the emails match.');
    }
  };

  const isVerifyEmailRoute = location.pathname === '/verify-email';

  return (
    <div>
         <div className="container menudisplay breadcrumb" style={{marginTop:'50px'}}>
  <Link to="/" className="homemenu">Home</Link> <span className="separator">&gt;</span> <span className="current-page">Payment Summary</span>
</div>
    
    <div className="container payment-details-container">
      
      <div className="payment-summary">
        <h1 className="payment-title text-center mb-4">Payment Summary</h1>
        {paymentData.length > 0 ? (
          <ul className="list-unstyled">
            {paymentData.map((detail, index) => (
              <li key={index} className="payment-item">
                <span className="payment-label">{detail.label}:</span>
                <span className="payment-value">{detail.value}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No payment details available.</p>
        )}
      </div>

      {/* Show the customer info form */}
      {!isPayPalVisible && !isCreateAccount && !isLogin && (
        <div className="customer-info-form">
          <h2 className="text-center mb-4">Please Provide Your Information</h2>
          <form onSubmit={handleInfoSubmit} className="form-center">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={customerInfo.name}
                onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={customerInfo.email}
                onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmEmail" className="form-label">Confirm Email</label>
              <input
                type="email"
                id="confirmEmail"
                className="form-control"
                value={customerInfo.confirmEmail}
                onChange={(e) => setCustomerInfo({ ...customerInfo, confirmEmail: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Contact Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="form-control"
                value={customerInfo.phone}
                onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-lg">Proceed to PayPal</button>
          </form>
        </div>
      )}

      {/* Show PayPal component after submitting customer info */}
      {isPayPalVisible && <PayPal customerInfo={customerInfo} />}

      <div className="support-info text-center mt-4">
        <p>
          Need help? Contact us at <a href="mailto:support@example.com">info@ptgr.ch</a>
        </p>
      </div>
    </div></div>
  );
};

export default PaymentDetails;
