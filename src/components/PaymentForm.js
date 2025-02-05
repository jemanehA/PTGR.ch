import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import '../styles/PaymentForm.css';

const PaymentForm = () => {
  const location = useLocation();
  const { course, price } = location.state; // Access course and price from state
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState('paypal'); // Default payment method
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    cryptoWallet: '',
    timeFrame: '', // New field for time frame
  });

  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for submission status

  const initialOptions = {
    "client-id": "EHOunktnfCoRKICZ7ZZobzTFkRczm-h8hG8DVBejvkgE7u7vDHr5wOVDltwoWptew7oO-6ohvG8zlhtG", 
    currency: "CHF", // Currency code
    intent: "capture",
  };

  const validateEmail = async (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      return false;
    }

    const emailCheckUrl = `https://apilayer.net/api/check?access_key=525e00d61fdb3ceeca34ed85b82019e5&email=${email}&smtp=1&format=1`;

    try {
      const emailCheckResponse = await fetch(emailCheckUrl);
      const emailCheckData = await emailCheckResponse.json();

      if (!emailCheckData.smtp_check) {
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error validating email:', error);
      return regex.test(email);
    }
  };

  const logPaymentDetails = async (logData) => {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} - ${JSON.stringify(logData)}`;

    try {
        const response = await fetch('https://admin.ptgr.ch/paymentlog.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ log: logMessage }),
        });

        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error('Error logging payment:', error);
    }
  };

  const logTransaction = async (details) => {
    try {
      const response = await fetch("https://email.ptgr-test.com/log_transaction.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details), // Send the PayPal response as JSON
      });

      // Check if the request was successful
      if (response.ok) {
        console.log("Transaction logged successfully");
      } else {
        console.error("Failed to log transaction");
      }
    } catch (error) {
      console.error("Error logging transaction:", error);
    }
  };

  const validatePhone = (phone) => {
    const regex = /^\+?[0-9]{10,15}$/;
    return regex.test(phone);
  };

  const validateCryptoWallet = (wallet) => {
    const regex = /^0x[a-fA-F0-9]{40}$/;
    return regex.test(wallet);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    setValidationErrors({});
  };

  const validateForm = async () => {
    let errors = {};

    if (!formData.firstName) errors.firstName = 'First Name is required';
    if (!formData.lastName) errors.lastName = 'Last Name is required';
    if (!formData.phone) {
      errors.phone = 'Phone is required';
    } else if (!validatePhone(formData.phone)) {
      errors.phone = 'Invalid phone number';
    }
    if (!formData.address) errors.address = 'Address is required';
    if (!formData.city) errors.city = 'City is required';
    if (!formData.country) errors.country = 'Country is required';

    if (paymentMethod === 'crypto' && !formData.cryptoWallet) {
      errors.cryptoWallet = 'Crypto Wallet Address is required';
    } else if (paymentMethod === 'crypto' && !validateCryptoWallet(formData.cryptoWallet)) {
      errors.cryptoWallet = 'Invalid crypto wallet address';
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = await validateForm();
    if (!isValid) {
      setSuccessMessage('');
      return;
    }

    setIsSubmitting(true); // Show submitting message

    // Simulate a delay for submitting contact details
    setTimeout(() => {
      setIsSubmitting(false);
      setIsFormValid(true); // Proceed to payment options
      logPaymentDetails({
        customerDetails: formData,
        paymentMethod,
        course,
        price,
        status: 'Contact details submitted',
      });
    }, 2000); // 2 seconds delay
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className="container payment-form-container">
        <div className="payment-page">
          <div className="payment-info">
            <h1>Complete Your Booking</h1>
            <p>You're booking the <strong>{course?.title}</strong> for <strong>CHF {price}</strong>. Please select a payment method and fill out the required details.</p>
          </div>

          <div className="payment-form">
            <h2 className="form-title">Payment Details</h2>
            {formError && <div className="alert alert-danger">{formError}</div>}
            {successMessage && <div className="alert alert-success">{successMessage}</div>}

            {/* Payment Method Selection */}
            <div className="payment-methods">
              <button
                className={`payment-method ${paymentMethod === 'paypal' ? 'active' : ''}`}
                onClick={() => handlePaymentMethodChange('paypal')}
              >
                PayPal / Credit Card
              </button>
              <button
                className={`payment-method ${paymentMethod === 'crypto' ? 'active' : ''}`}
                onClick={() => handlePaymentMethodChange('crypto')}
              >
                Crypto (Wallets)
              </button>
            </div>

            {/* Payment Form */}
            <form onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div className="form-group-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  {validationErrors.firstName && <span className="error">{validationErrors.firstName}</span>}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name*"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  {validationErrors.lastName && <span className="error">{validationErrors.lastName}</span>}
                </div>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {validationErrors.email && <span className="error">{validationErrors.email}</span>}
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone*"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                {validationErrors.phone && <span className="error">{validationErrors.phone}</span>}
              </div>

              {/* Billing Address */}
              <div className="form-group">
                <input
                  type="text"
                  name="address"
                  placeholder="Billing Address*"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                {validationErrors.address && <span className="error">{validationErrors.address}</span>}
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="city"
                    placeholder="City*"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                  {validationErrors.city && <span className="error">{validationErrors.city}</span>}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="country"
                    placeholder="Country*"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  />
                  {validationErrors.country && <span className="error">{validationErrors.country}</span>}
                </div>
              </div>

              {paymentMethod === 'crypto' && (
                <div className="form-group">
                  <input
                    type="text"
                    name="cryptoWallet"
                    placeholder="Crypto Wallet Address*"
                    value={formData.cryptoWallet}
                    onChange={handleChange}
                    required
                  />
                  {validationErrors.cryptoWallet && <span className="error">{validationErrors.cryptoWallet}</span>}
                </div>
              )}

              {!isFormValid && (
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting your contact details...' : 'Register & Proceed to Payment'}
                </button>
              )}

              {isFormValid && paymentMethod === 'paypal' && (
                <div className="form-group">
                  <PayPalButtons
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: '1', // The price of the course
                              currency_code: "CHF", // Currency code
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={(data, actions) => {
                      return actions.order.capture().then((details) => {
                        logTransaction(details); // Log the transaction
                        setSuccessMessage(`Payment successful using PayPal! Redirecting to the course...`);
                        setTimeout(() => {
                          navigate('/course-details', { state: { course } });
                        }, 2000);
                      });
                    }}
                    onError={(err) => {
                      setFormError('An error occurred during the PayPal payment process.');
                      console.error('PayPal error:', err);
                    }}
                  />
                </div>
              )}

              {isFormValid && paymentMethod === 'crypto' && (
                <button type="submit" className="submit-btn">
                  Pay CHF {price} with Crypto
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

export default PaymentForm;