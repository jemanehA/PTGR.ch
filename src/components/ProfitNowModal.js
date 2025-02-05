import React, { useState } from "react";
import "../styles/contactus.css";

const ProfitNowSection = ({ isModalOpen, closeModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false); // New loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) { // Message is now optional
      setError("Name and email are mandatory.");
      return;
    }

    setError("");
    setSuccess("");
    setLoading(true); // Set loading to true

    try {
      const response = await fetch(
        `https://email.ptgr-test.com/chatmessage.php?email=${email}&name=${name}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message }),
        }
      );

      if (response.ok) {
        setSuccess("Your service request has been submitted successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError("Failed to submit your service request. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please check your connection and try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div id="service-request-modal" className="modal open">
      <div className="modal-content">
        <span className="close-btn" onClick={closeModal}>
          &times;
        </span>
        <div className="logo-container">
          <img src="/assets/images/logo.png" alt="Company Logo" />
        </div>
        <h2>Service Request</h2>
        <p>Thank you for your interest! Please provide the necessary information to help us assist you better.</p>

        {/* Display error and success messages */}
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        {/* Service request form */}
        <form id="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Service Details (Optional)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            type="submit"
            className={`contact-button ${loading ? "loading" : ""}`}
            disabled={loading} // Disable button during loading
          >
            {loading ? (
              <div className="spinner"></div> // Add a spinner while loading
            ) : (
              "Submit Service Request"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfitNowSection;
