import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../styles/EfficiencySection.css';

const EfficiencySection = () => {
  const [isLoading, setIsLoading] = useState(true); // State to track loading
  const videoRef = useRef(null); // Ref to access the video element

  useEffect(() => {
    const video = videoRef.current;

    // Event listener for when the video starts playing
    const handleCanPlay = () => {
      setIsLoading(false); // Hide loading state
    };

    // Event listener for when the video is waiting for data
    const handleWaiting = () => {
      setIsLoading(true); // Show loading state
    };

    // Attach event listeners
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("waiting", handleWaiting);

    // Cleanup event listeners on unmount
    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("waiting", handleWaiting);
    };
  }, []);

  return (
    <section id="efficiency" className="ptgr-efficiency-section">
      <div className="ptgr-container">
        <div className="ptgr-content-wrapper">
          {/* Left Side: Inspiring Content */}
          <div className="ptgr-text-content">
            <h2 className="ptgr-subtitle">Empowering Your Crypto Journey</h2>
            <p>
              At PTGR AG, we understand the importance of making every second count. 
              Our mission is to guide you in investing your crypto assets efficiently 
              and effectively, ensuring your portfolio performs at its best.
            </p>
            <p>
              Let us help you navigate the dynamic world of cryptocurrency with 
              professional insights and cutting-edge tools. Together, we can achieve 
              your financial goals.
            </p>
            <div className="ptgr-cta-button">
              <Link to="/ContactUsForm" className="ptgr-card-button">
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right Side: CEO Video */}
          <div className="ptgr-video-container">
            {isLoading && (
              <div className="ptgr-video-loading">
                <div className="ptgr-loading-spinner"></div>
                <p>Loading video...</p>
              </div>
            )}
            <video ref={videoRef} controls>
              <source src="/assets/images/video/Test3.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="ptgr-video-title">Message from Our CEO</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EfficiencySection;