import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import '../styles/InvestmentControl.css';

const InvestmentControl = () => {
  useEffect(() => {
    fetchCryptoData();
  }, []);

  function fetchCryptoData() {
    try {
      const element = document.getElementById('section');
      if (element) {
        element.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      } else {
        console.warn('Element with ID "section" not found');
      }
    } catch (error) {
      console.error('Error manipulating DOM:', error);
    }
  }

  const [progress, setProgress] = useState({
    control: 0,
    flexibility: 0,
    freedom: 0,
    support: 0,
  });

  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = {
            control: Math.min(prevProgress.control + 1, 100),
            flexibility: Math.min(prevProgress.flexibility + 1, 100),
            freedom: Math.min(prevProgress.freedom + 1, 100),
            support: Math.min(prevProgress.support + 1, 100),
          };
          if (
            newProgress.control === 100 &&
            newProgress.flexibility === 100 &&
            newProgress.freedom === 100 &&
            newProgress.support === 100
          ) {
            clearInterval(interval);
          }
          return newProgress;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const circleDashoffset = (percentage) => {
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    return offset;
  };

  return (
    <motion.section
      id="investment-control"
      className="investment-section"
      ref={componentRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className=" container ">
      <h2 style={{
            fontSize: '2.2rem',
            marginBottom: '20px',
            color: '#000000',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            Invest in what you feel most comfortable.
          </h2>
        <div className="row justify-content-center">
          {/* Investment Control */}
          <div className="col-12 col-md-6 col-lg-3 progress-item">
  <motion.div
    className="progress-circle-wrapper text-center"  // Add text-center Bootstrap class
    initial={{ scale: 0.8 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.6 }}
  >
    <div className="progress-container">
      <svg
        className="progress-ring"
        width="150"
        height="150"
        aria-label="Investment Control Progress"
      >
        <circle
          className="progress-circle-bg"
          cx="75"
          cy="75"
          r="60"
        />
        <circle
          className="progress-circle-fg"
          cx="75"
          cy="75"
          r="60"
          style={{
            strokeDasharray: 2 * Math.PI * 60,
            strokeDashoffset: circleDashoffset(progress.control),
          }}
        />
      </svg>
      <span className="progress-percentage">{progress.control}%</span>
    </div>
  </motion.div>
  <p className="progress-label text-center" style={{ color: '#000000', fontWeight: 'bold' }}>
    Investment Control
  </p>
</div>




          {/* Flexibility */}
          <div className="col-12 col-md-6 col-lg-3 progress-item">
  <motion.div
    className="progress-circle-wrapper text-center"  // Add text-center Bootstrap class
    initial={{ scale: 0.8 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.6 }}
  >
    <div className="progress-container">
      <svg
        className="progress-ring"
        width="150"
        height="150"
        aria-label="Investment Control Progress"
      >
        <circle
          className="progress-circle-bg"
          cx="75"
          cy="75"
          r="60"
        />
        <circle
          className="progress-circle-fg"
          cx="75"
          cy="75"
          r="60"
          style={{
            strokeDasharray: 2 * Math.PI * 60,
            strokeDashoffset: circleDashoffset(progress.control),
          }}
        />
      </svg>
      <span className="progress-percentage">{progress.control}%</span>
    </div>
  </motion.div>
  <p className="progress-label text-center" style={{ color: '#000000', fontWeight: 'bold' }}>
  Flexibility
  </p>
</div>

          {/* Freedom */}
          <div className="col-12 col-md-6 col-lg-3 progress-item">
  <motion.div
    className="progress-circle-wrapper text-center"  // Add text-center Bootstrap class
    initial={{ scale: 0.8 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.6 }}
  >
    <div className="progress-container">
      <svg
        className="progress-ring"
        width="150"
        height="150"
        aria-label="Investment Control Progress"
      >
        <circle
          className="progress-circle-bg"
          cx="75"
          cy="75"
          r="60"
        />
        <circle
          className="progress-circle-fg"
          cx="75"
          cy="75"
          r="60"
          style={{
            strokeDasharray: 2 * Math.PI * 60,
            strokeDashoffset: circleDashoffset(progress.control),
          }}
        />
      </svg>
      <span className="progress-percentage">{progress.control}%</span>
    </div>
  </motion.div>
  <p className="progress-label text-center" style={{ color: '#000000', fontWeight: 'bold' }}>
  Freedom to Decide
  </p>
</div>

          {/* Support */}
          <div className="col-12 col-md-6 col-lg-3 progress-item">
  <motion.div
    className="progress-circle-wrapper text-center"  // Add text-center Bootstrap class
    initial={{ scale: 0.8 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.6 }}
  >
    <div className="progress-container">
      <svg
        className="progress-ring"
        width="150"
        height="150"
        aria-label="Investment Control Progress"
      >
        <circle
          className="progress-circle-bg"
          cx="75"
          cy="75"
          r="60"
        />
        <circle
          className="progress-circle-fg"
          cx="75"
          cy="75"
          r="60"
          style={{
            strokeDasharray: 2 * Math.PI * 60,
            strokeDashoffset: circleDashoffset(progress.control),
          }}
        />
      </svg>
      <span className="progress-percentage">{progress.control}%</span>
    </div>
  </motion.div>
  <p className="progress-label text-center" style={{ color: '#000000', fontWeight: 'bold' }}>
  Dedicated Support
  </p>
</div>
        </div>
      </div>
    </motion.section>
  );
};

export default InvestmentControl;
