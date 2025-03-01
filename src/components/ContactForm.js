import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/contactusform.css';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    state: '',
    city: '',
    email: '',
    countryCode: '',
    phone: '',
    consultationType: '',
    additionalNotes: '',
  });

  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [isValidatingEmail, setIsValidatingEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.title = 'Book a Consultation - PTGR-AG';
    window.scrollTo(0, 0);

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
  }, []);

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    const selectedCountryData = countries.find(country => country.name === selectedCountry);

    setFormData({
      ...formData,
      country: selectedCountry,
      state: '',
      countryCode: selectedCountryData ? selectedCountryData.callingCode : '',
    });

    if (selectedCountry === 'United States') {
      setStates(['California', 'Texas', 'New York', 'Florida']);
    } else if (selectedCountry === 'India') {
      setStates(['Maharashtra', 'Karnataka', 'Tamil Nadu', 'Delhi']);
    } else {
      setStates([]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = async (email) => {
    // Step 1: Validate email format using regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      console.log('Invalid email format:', email);
      return { valid: false, message: 'Invalid email format.' };
    }
  
    // Step 2: Use the API to validate the email
    const emailCheckUrl = `https://apilayer.net/api/check?access_key=525e00d61fdb3ceeca34ed85b82019e5&email=${email}&smtp=1&format=1`;
  
    try {
      const emailCheckResponse = await fetch(emailCheckUrl);
  
      // Check if the API request was successful
      if (emailCheckResponse.ok) {
        throw new Error(`API Error: ${emailCheckResponse.status}`);
      }
  
      const emailCheckData = await emailCheckResponse.json();
      console.log('API Response:', emailCheckData); // Log the API response for debugging
  
      // Step 3: Strictly check the API's smtp_check field
      if (emailCheckData.smtp_check !== true) {
        return { valid: false, message: 'Email address could not be verified.' };
      }
  
      // Step 4: If smtp_check is true, the email is valid
      return { valid: true, message: 'Email address is valid.' };
    } catch (error) {
      console.error('Error validating email:', error);
  
      // Step 5: If the API fails, return false (do not fall back to regex validation)
      return { valid: false, message: 'Email validation service is unavailable. Please try again later.' };
    }
  };

  const validatePhone = (phone) => {
    const regex = /^\d{9,11}$/; 
    return regex.test(phone);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Step 1: Validate all required fields
    const requiredFields = ['firstName', 'lastName', 'country', 'city', 'email', 'phone', 'consultationType'];
    const isAnyRequiredFieldEmpty = requiredFields.some(field => formData[field] === '');

    if (isAnyRequiredFieldEmpty) {
      setFormError('Please fill out all required fields.');
      setFormSuccess('');
      return;
    }

    if (!validatePhone(formData.phone)) {
      setFormError('Please enter a valid 9-digit phone number.');
      setFormSuccess('');
      return;
    }

    // Step 2: Validate email
    setIsValidatingEmail(true);
    const isEmailValid = await validateEmail(formData.email);
    setIsValidatingEmail(false);

    if (!isEmailValid) {
      setFormError('The email address provided is invalid. Please provide a valid email.');
      setFormSuccess('');
      return;
    }

    // Step 3: Submit form data
    setIsSubmitting(true);
    try {
      const submissionData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: `${formData.countryCode} ${formData.phone}`,
        country: formData.country,
        state: formData.state,
        city: formData.city,
        consultationType: formData.consultationType,
        additionalNotes: formData.additionalNotes,
      };

      const response = await fetch('https://email.ptgr-test.com/book.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit the form.');
      }

      const result = await response.json();
      console.log('Form submission result:', result);

      if (result.status === 'success') {
        setFormData({
          firstName: '',
          lastName: '',
          country: '',
          state: '',
          city: '',
          email: '',
          countryCode: '',
          phone: '',
          consultationType: '',
          additionalNotes: '',
        });
        setFormError('');
        setFormSuccess('Form submitted successfully! A confirmation email has been sent to you.');
      } else {
        setFormError('');
        setFormSuccess('Thank you! Your request has been submitted. We’ll get back to you soon.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormError('');
      setFormSuccess('Thank you! Your request has been submitted. We’ll get back to you soon.');
    } finally {
      setIsSubmitting(false);
    }
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
      <div className="container contactusdiv">
        <div className="contactpage">
     

          <div className="contact-form-container">
            <h2 className="form-title">Connect with us today.</h2>
            {formError && <div className="alert alert-danger">{formError}</div>}
            {formSuccess && <div className="alert alert-success">{formSuccess}</div>}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group-row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group-row">
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
                <input
                  type="text"
                  name="state"
                  placeholder="State*"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="text"
                name="city"
                placeholder="City*"
                value={formData.city}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
              />
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
                  className="phone-input"
                />
              </div>
              <select
                name="consultationType"
                value={formData.consultationType}
                onChange={handleChange}
                required
              >
                <option value="">Type of services</option>
                <option value="Strategic Digital Asset Advisory">Strategic Digital Asset Advisory</option>
                <option value="Pre-ICO Deals">Pre-ICO Deals</option>
                <option value="ICO & Token Management Services">ICO & Token Management Services</option>
                <option value="Family Crypto Saving Program">Family Crypto Saving Program</option>
                <option value="Forensic Service">Forensic Service</option>
                <option value="Certified Crypto Expert Course">Certified Crypto Expert Course</option>
                <option value="Blockchain Application Course">Blockchain Application Course</option>
                <option value="Web 3.0 Power Sessions">Web 3.0 Power Sessions</option>
                <option value="Self-Study Online Program">Self-Study Online Program</option>
                <option value="Swisscom Education Program">Swisscom Education Program</option>
                <option value="Strategic ICO Exception">Strategic ICO Exception</option>
                <option value="ICO Set-Up and Fundraising">ICO Set-Up and Fundraising</option>
                <option value="PTGR Token Investment">PTGR Token Investment</option>
                <option value="RWA Tokenization as a Service">RWA Tokenization as a Service</option>
                <option value="Custody & Payment Solutions">Custody & Payment Solutions</option>
                <option value="Metaverse Solutions">Metaverse Solutions</option>
              </select>
              <textarea
                name="additionalNotes"
                placeholder="Additional Notes (optional)"
                value={formData.additionalNotes}
                onChange={handleChange}
                className="additional-notes"
              />
              <button type="submit" className="submit-btn" disabled={isValidatingEmail || isSubmitting}>
                {isValidatingEmail
                  ? 'Checking Data...'
                  : isSubmitting
                  ? 'Submitting Your Data...'
                  : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;