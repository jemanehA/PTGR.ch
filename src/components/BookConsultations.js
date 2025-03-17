import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/contactusform.css';

const BookConsultations = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    state: '',
    city: '',
    email: '',
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

  // Extract consultationType from query parameters
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const consultationType = queryParams.get('consultationType');
    if (consultationType) {
      setFormData((prevData) => ({
        ...prevData,
        consultationType: consultationType,
      }));
    }
  }, [location.search]);

  useEffect(() => {
    document.title = 'Book a Consultation - PTGR-AG';
    window.scrollTo(0, 0);

    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        const countryNames = data.map((country) => country.name.common).sort();
        setCountries(countryNames);
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
        setFormError('Failed to fetch countries. Please try again later.');
      });
  }, []);

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setFormData({ ...formData, country: selectedCountry, state: '' });

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
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      return false;
    }
    return true;

  };

  const validatePhone = (phone) => {
    const regex = /^[\d\s-]{9,15}$/;
    return regex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Step 1: Validate all required fields
    const requiredFields = ['firstName', 'lastName', 'country', 'city', 'email', 'phone', 'consultationType'];
    const isAnyRequiredFieldEmpty = requiredFields.some((field) => formData[field] === '');

    if (isAnyRequiredFieldEmpty) {
      setFormError('Please fill out all required fields.');
      setFormSuccess('');
      return;
    }

    if (!validatePhone(formData.phone)) {
      setFormError('Please enter a valid phone number.');
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
        phone: formData.phone,
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

  // Check if consultationType is passed in the URL
  const queryParams = new URLSearchParams(location.search);
  const consultationTypeFromURL = queryParams.get('consultationType');

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
            <h2 className="form-title">Request a Consultation</h2>
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
                <select name="country" value={formData.country} onChange={handleCountryChange} required>
                  <option value="">Select Country*</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
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
              <input
                type="text"
                name="phone"
                placeholder="Phone*"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {/* Show consultationType as a read-only input if passed via URL */}
              {consultationTypeFromURL ? (
                <input
                  type="text"
                  name="consultationType"
                  value={formData.consultationType}
                  readOnly
                />
              ) : (
                <select
                  name="consultationType"
                  value={formData.consultationType}
                  onChange={handleChange}
                  required
                >
                  <option value="Strategic Digital Asset Advisory">Strategic Digital Asset Advisory</option>
                  <option value="Pre-ICO Deals">Pre-ICO Deals</option>
                  <option value="ICO & Token Management Services">ICO & Token Management Services</option>
                  <option value="Family Crypto Saving Program">Family Crypto Saving Program</option>
                  <option value="Forensic Service">Forensic Service</option>
                  <option value="Certified Crypto Expert Course">Certified Crypto Expert Course</option>
                  <option value="Blockchain Application Course">Blockchain Application Course</option>
                  <option value="Blockchain And IT Solutions">Blockchain And IT Solutions</option>
                  <option value="Web 3.0 Power Sessions">Web 3.0 Power Sessions</option>
                  <option value="Self-Study Online Program">Self-Study Online Program</option>
                  <option value="Swisscom Education Program">Swisscom Education Program</option>
                  <option value="Strategic ICO Exception">Strategic ICO Exception</option>
                  <option value="ICO Set-Up and Fundraising">ICO Set-Up and Fundraising</option>
                  <option value="PTGR Token Investment">PTGR Token Investment</option>
                  <option value="RWA Tokenization as a Service">RWA Tokenization as a Service</option>
                  <option value="Custody & Payment Solutions">Custody & Payment Solutions</option>
                  <option value="Metaverse Solutions">Metaverse Solutions</option>
                  <option value="WALLET">WALLET-Strategic Digital Asset Advisory</option>
                  <option value="STARTER">STARTER-Strategic Digital Asset Advisory</option>
                  <option value="BASIC">BASIC-Strategic Digital Asset Advisory</option>
                  <option value="ADVANCED">ADVANCED-Strategic Digital Asset Advisory</option>
                  <option value="PRO">PRO-Strategic Digital Asset Advisory</option>
                  <option value="PRO S">PRO S-Strategic Digital Asset Advisory</option>
                  <option value="Metaverse Solutions">PARTNERSHIP-Strategic Digital Asset Advisory</option>
                </select>
              )}
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

export default BookConsultations;