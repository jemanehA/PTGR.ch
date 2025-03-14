import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import '../styles/AboutSection.css';

const AboutSection = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  const features = [
    {
      image: '/assets/images/reliable-card.jpg', // Replace with your image path
      title: 'Reliable',
      description:
        'Our team is known for delivering reliable results and ensuring client satisfaction. We provide tailored strategies and expert advice to help you succeed with your digital assets.',
        align: 'left', // Add alignment property
    },
    {
      image: '/assets/images/swisstrust.webp', // Replace with your image path
      title: 'Trustworthy',
      description:
        'We have built a reputation for trust, reliability, and integrity, consistently fostering strong relationships with our clients. Our team delivers tailored strategies and expert guidance to help you succeed with your digital assets.',
        align: 'left', // Add alignment property
    },
    {
      image: '/assets/images/independent-card.jpg', // Replace with your image path
      title: 'Independent',
      description:
        'Known for trust, reliability, and integrity, we deliver tailored strategies and expert guidance to help you succeed with your digital assets. Professionalism and transparency drive everything we do.',
        align: 'left', // Add alignment property
    },
  ];

  return (
    <section className="about-section">
      {/* Watermark Image */}
      <div className="watermark">
        <img src="/assets/images/watermark1.png" alt="Watermark" />
      </div>

      <div className="container">
        {/* Section Title and Description */}
        <motion.div
          className="text-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          <h2 className="section-title">We Advise You on Digital Assets</h2>
          <p className="section-description">
            We are a team of professionals specializing in investment banking,
            private banking, portfolio management, trading, IT, risk management,
            blockchain, and cryptoassets.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="features-grid">
        {features.map((feature, index) => (
  <motion.div
    key={index}
    className="feature-card"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 * index }}
  >
    <div className="image-wrapper">
      <img src={feature.image} alt={feature.title} />
    </div>
    <h3 className="feature-title"style={{ textAlign: feature.align }}>{feature.title}</h3>
    <p 
      className="feature-description"
      style={{ textAlign: feature.align }} // Add inline style
    >
      {feature.description}
    </p>
  </motion.div>
))}
        </div>

        {/* CTA Button */}
        <div className="cta-container">
          <Link to="/Aboutus" className="cta-button">
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;