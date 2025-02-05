import React, { useState } from 'react';
import Login from './Login'; // Import the Login component
import '../styles/CreateAccount.css'; // Import your custom styles

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false); // State to toggle between login and create account views
  const [successMessage, setSuccessMessage] = useState(''); // State to hold success message
  const [isFormDisabled, setIsFormDisabled] = useState(false); // State to disable the form after successful signup

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form submit handler for account creation
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    // Check if fields are empty
    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage('All fields are required!');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    // Reset error message
    setErrorMessage('');

    // Prepare data for submission
    const data = {
      username: name,  // Username field is used instead of name
      email,
      password,
    };

    // Send POST request to the backend for account creation
    try {
      const response = await fetch('https://email.ptgr-test.com/signup.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Send the data as a JSON payload
      });

      const result = await response.json();

      if (result.error) {
        setErrorMessage(result.error);  // Show error message if account creation fails
      } else {
        // If successful, reset form and provide success message
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });
        setSuccessMessage('An email has been sent. Please verify your email.');
        setIsFormDisabled(true);  // Disable the form after successful registration
      }
    } catch (error) {
      console.error('Error creating account:', error);
      setErrorMessage('An error occurred while creating the account.');
    }
  };

  const handleLoginClick = () => {
    setIsLoggingIn(true); // Switch to the login form
  };

  // If in the process of logging in, render Login component
  if (isLoggingIn) {
    return <Login />;
  }

  return (
    <div className="create-account-container">
      <h2 className="text-center mb-4">Create Your Account</h2>

      {/* Display Error if Any */}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      {/* Display Success Message */}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}

      {/* Create Account Form */}
      {!successMessage && (
        <form onSubmit={handleSubmit} className="create-account-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-control"
              required
              disabled={isFormDisabled}  // Disable input field after success
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control"
              required
              disabled={isFormDisabled}  // Disable input field after success
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-control"
              required
              disabled={isFormDisabled}  // Disable input field after success
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="form-control"
              required
              disabled={isFormDisabled}  // Disable input field after success
            />
          </div>

          <div className="form-group text-center">
            <button type="submit" className="loginbtn" disabled={isFormDisabled}>Create Account</button>
          </div>
        </form>
      )}

      <div className="text-center mt-4">
        <p>Already have an account? <button onClick={handleLoginClick} className="btn btn-link">Log In</button></p>
      </div>
    </div>
  );
};

export default CreateAccount;
