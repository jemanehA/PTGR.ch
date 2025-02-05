import React, { useState } from "react";
import "../styles/contactus.css";

const ContactFormModal = ({ isModalOpen, closeModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false); // New loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("All fields are mandatory.");
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
        setSuccess("Your message has been sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError("Failed to send your message. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please check your connection and try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div id="contact-form-modal" className="modal open">
      <div className="modal-content">
        <span className="close-btn" onClick={closeModal}>
          &times;
        </span>
        <div className="logo-container">
          <img src="/assets/images/logo.png" alt="Company Logo" />
        </div>
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Let us know how we can help.</p>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
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
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className={`contact-button ${loading ? "loading" : ""}`}
            disabled={loading} // Disable button when loading
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFormModal;
