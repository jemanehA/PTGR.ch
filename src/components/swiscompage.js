import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Ensure Link is imported
import '../styles/BlockchainCourses.css';

const Swisscom = () => {
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
  const [password, setPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState('');

  const correctPassword = "Swisscom2024"; // Example password

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthorized(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
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
      <section id="crypto-hero-section" className={`crypto-hero-section ${inView ? 'crypto-in-view' : ''}`}>
  <video className="crypto-hero-video-background" autoPlay muted loop playsInline>
    <source src="/assets/images/video/education.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="crypto-hero-overlay"></div> {/* Gradient overlay */}
  <div className="crypto-hero-content container">
  <div className="crypto-hero-text">
  <h1 className="crypto-header-title">
    <span className="crypto-title-line crypto-animate-text">Introducing the Swisscom Education Program,</span><br/>
    <span className="crypto-title-line crypto-animate-text crypto-delay-1">
      <span className="crypto-highlight-text">Now Partnered with Us!</span>
    </span>
  </h1>
  <p className="crypto-hero-subtitle crypto-animate-text crypto-delay-2">
    Ready to transform your future? Join our exclusive, expert-led program and seize the incredible opportunities we’re bringing to you!
  </p>
  <button className="crypto-enroll-button crypto-animate-fade-in crypto-delay-3">
    Get Started Now
  </button>
</div>

  </div>
  <div className="crypto-bouncing-circle"></div>
</section>

    <div className="container menudisplay breadcrumb">
  <Link to="/" className="homemenu">Home</Link> <span className="separator">&gt;</span> <span className="current-page">Swisscom Education Program</span>
</div>



      <div className="container mt-5">
      <div className="ba-header">
        <div className="ba-line"></div>
        <h2>Swisscom Education Program</h2>
        <p className="ba-description">
          Gain in-depth knowledge of cryptocurrency, blockchain, and digital asset management.
          Become a certified expert in the evolving world of crypto.
        </p>
      </div>

        {/* Password Protected Section */}
        {!isAuthorized ? (
          <div className="password-section">
            <div className="form-container">
              <h2 className="form-header">Protected Content</h2>
              <form onSubmit={handlePasswordSubmit} className="password-form">
                <input
                  type="password"
                  className="password-input"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="password-button">
                  Unlock
                </button>
              </form>
              {error && <p className="error-message">{error}</p>}
            </div>
          </div>
        ) : (
          <div className="protected-content">
            <h3>Welcome to the Swisscom Exclusive Section</h3>
            <p>
              Here, you'll find advanced resources, industry insights, and materials specifically curated for your business needs.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Swisscom;
