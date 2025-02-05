import React, { useState } from 'react';
import '../styles/book.css';

function BookConsultation() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Clear form
    setFormData({
      name: '',
      email: '',
      date: '',
      message: '',
    });
  };

  return (
    <div className="book-container mt-5">
      <h2 className="book-h2 text-center">Book a Consultation</h2>
      {isSubmitted && (
        <div className="book-alert-success" role="alert">
          Your consultation request has been submitted successfully!
        </div>
      )}
      <form onSubmit={handleSubmit} className="book-form mt-4">
        <div className="mb-3">
          <label htmlFor="name" className="book-form-label">Full Name</label>
          <input
            type="text"
            className="book-form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="book-form-label">Email Address</label>
          <input
            type="email"
            className="book-form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="book-form-label">Preferred Date</label>
          <input
            type="date"
            className="book-form-control"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="book-form-label">Message (Optional)</label>
          <textarea
            className="book-form-control book-textarea"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Provide additional details..."
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="book-btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookConsultation;
