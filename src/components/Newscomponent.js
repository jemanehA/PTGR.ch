import React, { useState } from 'react';
import '../styles/NewsComponnent.css'; // Import the CSS file for styling


const EventComponent = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log({
        email,
        firstName,
        lastName,
        acceptPrivacy,
      });
    };

  return (
<div>
<div className="title-area">
        <video autoPlay muted loop playsInline id="crypto-video">
        <source src="/assets/images/video/Error-Page.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="title-content">
          <h1>Sign up for PTGR Newsletter</h1>
        </div>
      </div>
      <section className="newsletter-section bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-md-6">
            <h2 className="newsletter-header mb-4">Sign up for PTGR Newsletter</h2>
            <p className="newsletter-description mb-4">
              Stay updated with the latest news and developments from PTGR. Subscribe to our newsletter!
            </p>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="newsletter-form1">
              <div className="mb-4">
                <label htmlFor="email" className="form-label">Enter your e-mail address to register</label>
                <input
                  type="email"
                  className="form-control newsletter-input"
                  id="email"
                  placeholder="e.g. abc@xyz.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <small className="form-text text-muted">Please enter your e-mail address for registration.</small>
              </div>

              <div className="mb-4">
                <label htmlFor="firstName" className="form-label">Enter your first name</label>
                <input
                  type="text"
                  className="form-control newsletter-input"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="lastName" className="form-label">Enter your last name</label>
                <input
                  type="text"
                  className="form-control newsletter-input"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="acceptPrivacy"
                  checked={acceptPrivacy}
                  onChange={() => setAcceptPrivacy(!acceptPrivacy)}
                  required
                />
                <label className="form-check-label" htmlFor="acceptPrivacy">
                  I would like to receive your newsletter and accept the privacy policy.
                </label>
              </div>

              <button type="submit" className="btn btn-primary newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>


</div>
  );
};

export default EventComponent;
