import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import '../styles/ServicesSection.css'; // Ensure to include appropriate styles
import { Link,useNavigate } from 'react-router-dom';
const ServicesSection = () => {
  // State to track whether the section is visible
  const [isVisible, setIsVisible] = useState(false);

  // Create Intersection Observer to trigger animation on visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Set visibility to true when the section enters the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    // Start observing the section with the id 'services'
    const section = document.getElementById('services');
    if (section) {
      observer.observe(section);
    }

    // Cleanup observer on component unmount
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const services = [
    {
      id: 1,
      to:'cpm',
      title: 'Crypto Asset Management',
      description: 'We provide expert advice on maximizing your digital assets in today’s evolving business landscape.',
      overlayDescription: 'We guide you through the world of digital cryptographic assets with tailored strategies and expert advice.',
      image: '/assets/images/strategic.webp',
    },
    {
      id: 2,
      title: 'Digital Asset Services',
      to:'Digital',
      description: 'Future-proof your business with Web 3.0 technologies and strategies to stay ahead of the curve.',
      overlayDescription: 'Leverage Web 3.0 for business growth with innovative strategies and digital marketing solutions.',
      image: '/assets/images/funds.webp',
    },
    {
      id: 3,
      title: 'Education',
      to:'educationcertificate',
      description: 'Learn about digital assets and blockchain with our tailored educational programs.',
      overlayDescription: 'Custom-made educational programs to enhance your understanding of digital assets and blockchain technology.',
      image: '/assets/images/education.webp',
    },
    {
      id: 4,
      to:'WS',
      title: 'Strategic Web 3.0 Consultancy',
      description: 'We provide end-to-end blockchain development services to build secure, transparent, and efficient decentralized solutions.',
      overlayDescription: 'Unlock the power of blockchain technology for your business with our development services.',
      image: '/assets/images/blockchai.png',
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className='subtitle'>Our services at a glance</h2>
        <div className="services-cards">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 50 }} // Initial state (invisible and slightly below)
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }} // Animate based on visibility
              transition={{ duration: 0.5 }} // Transition duration
            >
              <div
                className="service-image"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="overlay">
                <Link className="discover-more-btn" to={`/${service.to}`}>Discover More</Link>
                  <p className="card-description">{service.overlayDescription}</p>
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-header">
                  <span className="cam-text">{service.title}</span>
                </h3>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
