import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [passwordType, setPasswordType] = useState('password');
  const [progressBar, setProgressBar] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate(); // React Router navigation hook
  const correctPassword = 'your_password_here'; // Replace with the actual password

  // Check authentication state on page load
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true); // User is authenticated

    }
  }, [navigate]);

  // Toggle password visibility
  const togglePassword = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  // Show request access form
  const showRequestAccess = () => {
    setShowRequestForm(true);
  };

  // Show login form
  const showLogin = () => {
    setShowRequestForm(false);
    setShowThankYouMessage(false);
    setErrorMessage('');
  };

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const enteredPassword = e.target.password.value;

    if (enteredPassword === correctPassword) {
      alert('Login successful!');
      localStorage.setItem('authToken', 'dummy-token'); // Store a dummy token
      setIsAuthenticated(true); // Update authentication state
      navigate('/'); // Navigate to the home page
    } else {
      setErrorMessage('Incorrect password. Please try again.');
    }
  };

  // Handle request access submission
  const handleSubmitRequest = (e) => {
    e.preventDefault();
    const fullName = e.target.fullName.value;
    const email = e.target.email.value;

    setProgressBar(true);
    let progress = 0;

    const interval = setInterval(() => {
      progress += 10;

      if (progress === 100) {
        clearInterval(interval);
        setProgressBar(false);
        setShowThankYouMessage(true);
      }
    }, 200);
 

  // Render logic
  if (isAuthenticated) {
    // Redirect to home if authenticated
    navigate('/');
    return null; // Avoid rendering the login page
  }

    // Simulate API call
    const apiUrl = `https://email.ptgr-test.com/request.php?email=${email}&name=${fullName}`;

    fetch(apiUrl)
      .then((response) => {
        if (response.ok) {
          setTimeout(() => {
            setProgressBar(false);
            setShowThankYouMessage(true);
          }, 500);
        } else {
          console.error('Error sending email');
          alert('There was an issue sending the email. Please try again later.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('There was an issue sending the email. Please try again later.');
        setProgressBar(false);
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <img src="log.png" alt="Logo" className="logoimg" />
        </div>
      </nav>

      <div className="logincontent-wrapper">
        <div className="container text-center mt-5">
          <h2>We're Almost There!</h2>
          <p>Our page is under construction to bring you a better experience. Stay tuned!</p>

          {!showRequestForm ? (
            <div className="card mx-auto show" id="loginForm">
              <h3 className="hh">Login</h3>
              <form onSubmit={handleLogin}>
                <div className="mb-3 text-start">
                  <label htmlFor="password" className="form-label">Password</label>
                  <div className="input-group">
                    <input
                      type={passwordType}
                      name="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                    />
                    <span
                      className="input-group-text"
                      id="togglePassword"
                      style={{ cursor: 'pointer' }}
                      onClick={togglePassword}
                    >
                      <i className={`fas ${passwordType === 'password' ? 'fa-eye' : 'fa-eye-slash'}`} />
                    </span>
                  </div>
                  {errorMessage && <p className="text-danger mt-2">{errorMessage}</p>}
                </div>
                <button type="submit" className="btn-custom w-100">
                  Login
                </button>
              </form>
              <div className="mt-3">
                <button
                  className="btn-custom w-100"
                  onClick={showRequestAccess}
                >
                  Request Access
                </button>
              </div>
            </div>
          ) : (
            <div className="card mx-auto show" id="requestAccessForm">
              <form id="requestForm" onSubmit={handleSubmitRequest}>
                <h3 className="headerr">Request Access</h3>
                <div className="mb-3 text-start">
                  <label className="form-label">Full Name</label>
                  <input type="text" name="fullName" className="form-control" required />
                </div>
                <div className="mb-3 text-start">
                  <label className="form-label">Phone Number</label>
                  <input type="number" className="form-control" required />
                </div>
                <div className="mb-3 text-start">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" className="form-control" required />
                </div>

                {progressBar && (
                  <div id="progressBarContainer">
                    <h5>Sending Request...</h5>
                  </div>
                )}

                <button type="submit" className="btn-custom w-100">
                  Submit Request
                </button>
              </form>

              {showThankYouMessage && (
                <div id="thankYouMessage" className="thank-you-message">
                  <h3>Thank you, Jemaneh Aklog!</h3>
                  <p>Your request has been submitted. We'll get back to you shortly with an access code.</p>
                </div>
              )}

              {!showThankYouMessage && (
                <button
                  className="btn-back w-100 mt-3"
                  onClick={showLogin}
                >
                  Back to Login
                </button>
              )}
            </div>
          )}
        </div>
      </div>


    </div>
  );
};

export default Login;
