import React from 'react';
import '../styles/ServiceDetail.css';
import { Link } from 'react-router-dom';
const ServiceDetail = ({ service, onBack }) => {
  if (!service) return null;

  return (
    <div className="service-detail-container">
      {/* Hero Section */}
      <div className="service-detail-hero">
        <img src={service.image} alt={service.title} className="service-detail-hero-image" />
        <div className="service-detail-hero-overlay">
          <h1 className="service-detail-hero-title">{service.title}</h1>
          <p className="service-detail-hero-description">{service.description}</p>
        </div>
      </div>

      {/* Back Button */}
      <button className="service-detail-back-button" onClick={onBack}>
        &larr; Back to Services
      </button>

      {/* Service Details */}
      <div className="service-detail-content">
        {/* What's Included */}
        <div className="service-detail-section">
          <h2>What's Included</h2>
          <p>{service.detailContent}</p>
          <ul>
            {service.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Client Testimonials */}
        <div className="service-detail-section">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-card">
            <p className="testimonial-text">
              "The {service.title} service was a game-changer for me. The team was incredibly knowledgeable and helped me navigate the crypto space with ease. Highly recommended!"
            </p>
            <p className="testimonial-author">- John Doe</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
              "I was hesitant at first, but the {service.title} service exceeded my expectations. The personalized approach made all the difference. Thank you!"
            </p>
            <p className="testimonial-author">- Jane Smith</p>
          </div>
        </div>

        {/* Book Consultation Button */}
        <div className="service-detail-section">

          <Link to="/BookConsultations">
            <button className="service-detail-book-button">Book a Consultationn</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;