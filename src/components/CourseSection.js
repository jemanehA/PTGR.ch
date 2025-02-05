import React, { useEffect, useState } from 'react';
import "../styles/CourseSection.css"; // Import the corresponding CSS file

const CourseSection = () => {
  useEffect(() => {
    // Call fetchCryptoData when the component mounts
    fetchCryptoData();
  }, []); // Empty dependency array means it runs only once, on mount

  // Function to safely manipulate DOM
  function fetchCryptoData() {
    try {
      // Safely attempt to get the element by ID
      const element = document.getElementById('section');  // The section with ID 'section'
      if (element) {
        element.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Example of DOM manipulation
      } else {
        console.warn('Element with ID "section" not found');
      }
    } catch (error) {
      // Catch and log any errors
      console.error('Error manipulating DOM:', error);
  
    }
  }
  const [showModal, setShowModal] = useState(false);

  const handleGetStartedClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="course-section">
      <div className="container">
        <h3 className="section-title">Our Courses</h3>
        <div className="row">
          {/* Course Card 1 */}
          <div className="col-md-4">
            <div className="course-card">
              <img
                src="/assets/images/learn.webp"
                alt="Course 1"
                className="course-card-img"
              />
              <h5 className="course-card-title">06 Proof of Work & Proof of Stake</h5>
              <p className="course-card-description">
              06 Proof of Work & Proof of Stake
              </p>
              <button
                className="btn-get-started"
                onClick={handleGetStartedClick}
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Course Card 2 */}
          <div className="col-md-4">
            <div className="course-card">
              <img
                 src="/assets/images/learn.webp"
                alt="Course 2"
                className="course-card-img"
              />
              <h5 className="course-card-title">07 Chart Analysis</h5>
              <p className="course-card-description">
              07 Chart Analysis.
              </p>
              <button
                className="btn-get-started"
                onClick={handleGetStartedClick}
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Course Card 3 */}
          <div className="col-md-4">
            <div className="course-card">
              <img
                 src="/assets/images/learn.webp"
                alt="Course 3"
                className="course-card-img"
              />
              <h5 className="course-card-title">14 Coin Valuation & Due Diligence</h5>
              <p className="course-card-description">
                14 Coin Valuation & Due Diligence
              </p>
              <button
                className="btn-get-started"
                onClick={handleGetStartedClick}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Course Card 4 */}
          <div className="col-md-4">
            <div className="course-card">
              <img
                 src="/assets/images/learn.webp"
                alt="Course 4"
                className="course-card-img"
              />
              <h5 className="course-card-title">08 Wealth Management</h5>
              <p className="course-card-description">
                Master the art of 08 Wealth Management.
              </p>
              <button
                className="btn-get-started"
                onClick={handleGetStartedClick}
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Course Card 5 */}
          <div className="col-md-4">
            <div className="course-card">
              <img
                src="/assets/images/learn.webp"
                alt="Course 5"
                className="course-card-img"
              />
              <h5 className="course-card-title">09 Web 3.0 – the Web of tomorrow</h5>
              <p className="course-card-description">
                Understand 09 Web 3.0 – the Web of tomorrow
              </p>
              <button
                className="btn-get-started"
                onClick={handleGetStartedClick}
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Course Card 6 */}
          <div className="col-md-4">
            <div className="course-card">
              <img
                 src="/assets/images/learn.webp"
                alt="Course 6"
                className="course-card-img"
              />
              <h5 className="course-card-title">11 Blockchain Interoperability</h5>
              <p className="course-card-description">
                Learn to 11 Blockchain Interoperabilit
              </p>
              <button
                className="btn-get-started"
                onClick={handleGetStartedClick}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Payment */}
      {showModal && (
        <div className="payment-modal-overlay">
          <div className="payment-modal">
            <h4 className="payment-modal-title">Process Payment</h4>

            <button className="btn-close-modal" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseSection;
