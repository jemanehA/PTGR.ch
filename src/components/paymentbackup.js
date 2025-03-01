import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLocation, useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import DatePicker from 'react-datepicker';
import '../styles/PaymentForm.css';

const PaymentForm = () => {
  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countryData = data.map(country => ({
      name: country.name.common,
      code: country.cca2,
      callingCode: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ''),
    })).sort((a, b) => a.name.localeCompare(b.name));
    setCountries(countryData);
  })
  .catch(error => {
    console.error('Error fetching countries:', error);
    setFormError('Failed to fetch countries. Please try again later.');
  });
  const [transactionId, setTransactionId] = useState(uuidv4()); // Generate a unique ID
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
    zipCode: '', // New field for zip code
    cryptoWallet: '',
    timeFrame: '', // New field for time frame
    language: 'english', // Default language
    totalParticipants: 1, // Default participants
    preferredDate: new Date(), // Default date
    courseType: 'online', // Default course type
  });

  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for submission status
  const [isProcessingPayment, setIsProcessingPayment] = useState(false); // New state for processing payment
  const [selectedCountryCode, setSelectedCountryCode] = useState('+41'); // Default country code for Switzerland
  const [countries, setCountries] = useState([]);

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    const selectedCountryData = countries.find(country => country.name === selectedCountry);

    setFormData({
      ...formData,
      country: selectedCountry,
      state: '',
      countryCode: selectedCountryData ? selectedCountryData.callingCode : '',
    });

  };

  const initialOptions = {
    "client-id": "AXBPGypSFqjGiXR8vYivk3flERIYeUkGBrYcJpBonpzxVNzGi7wmNT5f1_CJ1hGNefz7ScCYlB8EyoaZ", 
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
    const logMessage = JSON.stringify(logData);
  
    console.log('Attempting to log payment details:', logMessage); // Debugging
    console.log("Payload:", logMessage);
  
    try {
      console.log("Payload being sent:", JSON.stringify(logData, null, 2));
      const response = await fetch("https://admin.ptgr.ch/paymentlog.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({log: logData}),
      });
    
      // Check if the request was successful
      if (response.ok) {
        console.log("Transaction logged successfully");
      } else {
        console.error("Failed to log transaction");
        const errorResponse = await response.json(); // Log the validation errors
        console.error("Validation errors:", errorResponse.errors);
      }
    } catch (error) {
      console.error("Error logging transaction:", error);
    }
  };
  

  const logTransaction = async (details) => {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} - ${JSON.stringify(details)}`;
    console.log('Attempting to log transaction:', details); // Debugging

    try {
      const response = await fetch("https://admin.ptgr.ch/paymentlog.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ log: logMessage }), // Send the PayPal response as JSON
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

  // const validateCryptoWallet = (wallet) => {
  //   const regex = /^0x[a-fA-F0-9]{40}$/;
  //   return regex.test(wallet);
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCountryCodeChange = (e) => {
    setSelectedCountryCode(e.target.value);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    setValidationErrors({});
  };
  const handleParticipantChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setFormData({
      ...formData,
      totalParticipants: value,
    });
  };
  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      preferredDate: date,
    });
  };

  const validateForm = async () => {
    let errors = {};

    if (!formData.firstName) errors.firstName = 'First Name is required';
    if (!formData.lastName) errors.lastName = 'Last Name is required';
    if (!formData.phone) {
      errors.phone = 'Phone is required';
    } else if (!validatePhone(`${selectedCountryCode}${formData.phone}`)) {
      errors.phone = 'Invalid phone number';
    }
    if (!formData.address) errors.address = 'Address is required';
    if (!formData.city) errors.city = 'City is required';
    if (!formData.country) errors.country = 'Country is required';
    if (!formData.zipCode) errors.zipCode = 'Zip Code is required'; // Validate zip code



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
      const courseTitle = course.title; // Access the title property
      logPaymentDetails({
        transactionId,
        customerDetails: {
          ...formData,
          phone: `${selectedCountryCode}${formData.phone}`, // Include country code in phone number
        },
        paymentMethod,
        course: courseTitle,
        price,
        status: 'Contact details submitted',
      });
    }, 2000); // 2 seconds delay
  };

  return (
    <div
    className=""
    style={{
      backgroundImage: "url('/assets/images/swissback.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    }}
  >
    <PayPalScriptProvider options={initialOptions}>
      <div className="container contactusdiv">
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
                <div className="phone-input">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleCountryChange}
                  required
                >
                  <option value="">Select Country*</option>
                  {countries.map(country => (
                    <option key={country.name} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
                <div className="form-group-row">
                <input
                  type="text"
                  name="countryCode"
                  placeholder="Code"
                  value={formData.countryCode}
                  onChange={handleChange}
                  disabled
                  className="country-code-input"
                />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone*"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  /></div>
                </div>
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

              <div className="form-group">
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Zip Code*"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                />
                {validationErrors.zipCode && <span className="error">{validationErrors.zipCode}</span>}
              </div>
              <div className="form-group">
              <label>Language</label>
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
              >
                <option value="english">English</option>
                <option value="german">German</option>
              </select>
            </div>

            {/* Total Participants */}
            <div className="form-group">
  <div className="participants-label">
    <label>Total Participants</label>
    <div className="info-icon" title="Discount available for more than 2 participants!">

    </div>
  </div>
  <input
    type="number"
    name="totalParticipants"
    value={formData.totalParticipants}
    onChange={handleParticipantChange}
    min="1"
  />
</div>

            {/* Preferred Date Picker */}
            <div className="form-group">
              <label>Preferred Date</label>
              <input
                type="date"
                name="preferredDate"
                placeholder="Preferred Date*"
                value={formData.preferredDate}
                onChange={handleChange}
                required
              />
            </div>

            {/* Course Type Selection */}
            <div className="form-group">
              <label>Course Type</label>
              <div className="course-type-options">
                <label>
                  <input
                    type="radio"
                    name="courseType"
                    value="online"
                    checked={formData.courseType === 'online'}
                    onChange={handleChange}
                  />
                  Online
                </label>
                <label>
                  <input
                    type="radio"
                    name="courseType"
                    value="in-person"
                    checked={formData.courseType === 'in-person'}
                    onChange={handleChange}
                  />
                  In-Person
                </label>
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
                  {isProcessingPayment && (
                    <div className="progress-container">
                      {/* <div className="progress-bar"></div>
                      <p>Processing your payment...</p> */}
                    </div>
                  )}
                  <PayPalButtons
                    createOrder={(data, actions) => {
                      setIsProcessingPayment(true); // Show progress bar
                      const orderDetails = {

                        type: 'PayPal Order Creation',
                        purchase_units: [
                          {
                            amount: {
                              value: price, // The price of the course
                              currency_code: "CHF", // Currency code
                            },
                          },
                        ],
                      };

                      logTransaction(orderDetails); // Log order creation details
                      return actions.order.create(orderDetails);
                    }}
                    onApprove={(data, actions) => {
                      return actions.order.capture().then((details) => {
                        const paymentResponse = {
                          transactionId,
                          status: 'Payment successful',
                        };
                        logTransaction(paymentResponse); // Log successful transaction
                        setSuccessMessage(`Payment successful using PayPal! Redirecting to the course...`);
                        setTimeout(() => {
                          navigate('/course-details', { state: { course } });
                        }, 6000);
                      });
                    }}
                    onError={(err) => {
                      setIsProcessingPayment(false); // Hide progress bar on error
                      const errorLog = {
                        type: 'PayPal Error',
                        message: err?.message || 'An unknown error occurred.',
                        errorDetails: err,
                      };

                      logTransaction(errorLog); // Log error details
                      setFormError('An error occurred during the PayPal payment process.');
                      console.error('PayPal error:', err);
                    }}
                    onCancel={(data) => {
                      setIsProcessingPayment(false); // Hide progress bar on cancel
                      const cancelLog = {
                        type: 'PayPal Cancel',
                        message: 'User canceled the PayPal payment.',
                        cancelDetails: data,
                      };

                      logTransaction(cancelLog); // Log cancellation details
                      setFormError('Payment was canceled by the user.');
                      console.warn('PayPal payment canceled:', data);
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
    </div>
  );
};

export default PaymentForm;