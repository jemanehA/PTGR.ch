import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/contactusform.css';

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia",
  "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
  "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",
  "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)",
   "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
  "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. 'Swaziland')", "Ethiopia", "Fiji", "Finland",
  "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
  "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
  "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
  "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia",
  "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco",
  "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands",
  "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan",
  "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
  "Romania", "Russia", "Rwanda", "Saint Kitts & Nevis", "Saint Lucia", "Saint Vincent & Grenadines", "Samoa", "San Marino",
  "Sao Tome & Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia",
  "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan",
  "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo",
  "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
  "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen",
  "Zambia", "Zimbabwe"
];

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    state: '',
    city: '',
    email: '',
    phone: '',
    employer: '',
    reachingOutTo: ''
  });

  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const location = useLocation();

  useEffect(() => {
    document.title = 'Contact Us - PTGR-AG';
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(formData).some((value, index) => index !== 2 && value.trim() === '')) {
      setFormError('Please fill out all required fields.');
      setSuccessMessage('');
      return;
    }

    setSuccessMessage('Your message has been sent successfully. We will contact you soon.');
    setFormError('');

    setFormData({
      firstName: '', lastName: '', country: '', state: '', city: '', email: '', phone: '', employer: '', reachingOutTo: ''
    });

    console.log('Form submitted:', formData);
  };

  return (
    <div className='container contactusdiv'>
      <div className="contact-page">
        <div className="contact-info">
          <h1>Start a Conversation</h1>
          <p>Speak with us today! Our team of experts in investment banking, private banking, portfolio management, trading, IT, risk management, blockchain, and cryptoassets is ready to guide you in achieving your financial goals.</p>
        </div>

        <div className="contact-form-container">
          <h2 className="form-title">Connect with us today.</h2>
          {formError && <div className="alert alert-danger">{formError}</div>}
          {successMessage && <div className="alert alert-success">{successMessage}</div>}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group-row">
              <input type="text" name="firstName" placeholder="First Name*" value={formData.firstName} onChange={handleChange} required />
              <input type="text" name="lastName" placeholder="Last Name*" value={formData.lastName} onChange={handleChange} required />
            </div>

            <div className="form-group-row">
              <select className='contryname' name="country" value={formData.country} onChange={handleChange}>
                <option value="">Select Country </option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>{country}</option>
                ))}
              </select>
              <input type="text" name="state" placeholder="State*" value={formData.state} onChange={handleChange} required />
            </div>

            <input type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Phone*" value={formData.phone} onChange={handleChange} required />
            <input type="text" name="employer" placeholder="Employer/Business" value={formData.employer} onChange={handleChange} />

            <select className='reachingOutTo' name="reachingOutTo" value={formData.reachingOutTo} onChange={handleChange} required>
              <option value="">I Am Reaching Out To:*</option>
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

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
