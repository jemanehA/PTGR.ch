import React, { useEffect } from 'react';
import { motion } from 'framer-motion'; // Importing framer-motion for animations
import { Link, useLocation } from 'react-router-dom';
import '../styles/AboutSection.css'; // Import the CSS file for styling

const AboutSection = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page on route change
    window.scrollTo(0, 0);

    // Send the page view event to Google Analytics (gtag) if available
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return (
    <section className="about-section">
      <div className="about-content container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-md-12">
            <motion.div
              className="text-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="subtitle">We advise you on digital assets</h2>
              <p>
                We are a team of professionals specializing in investment banking,
                private banking, portfolio management, trading, IT, risk management,
                blockchain, and cryptoassets.
              </p>

              <div className="features row">
                {[
                  {
                    icon: <i className="fas fa-handshake" aria-hidden="true"></i>,
                    title: 'Reliable',
                    description:
                      'Our team is known for its commitment to excellence, consistently delivering reliable results and ensuring client satisfaction in every project.',
                  },
                  {
                    icon: <i className="fas fa-key" aria-hidden="true"></i>,
                    title: 'Trustworthy',
                    description:
                      'We have built a reputation for trust, reliability, and integrity, consistently fostering strong relationships with our clients.',
                  },
                  {
                    icon: (
                      <img
                        src="/assets/images/logocut.png"
                        alt="PTGR Symbol"
                        className="custom-icon"
                      />
                    ),
                    title: 'Independent',
                    description:
                      'A symbol of professionalism, transparency, and reliability, we uphold these values in every venture we undertake.',
                  },
                ].map((feature, index) => (
                  <div className="col-sm-4" key={index}>
                    <motion.div
                      className="feature-card"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 * (index + 1) }}
                    >
                      {feature.icon}
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </motion.div>
                  </div>
                ))}
              </div>

              <div className="cta-container">
                <Link to="/Aboutus" className="Discoverbtn">
                  Discover More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="watermark-container"></div>
    </section>
  );
};

export default AboutSection;