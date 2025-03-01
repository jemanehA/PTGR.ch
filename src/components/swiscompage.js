import React, {useState, useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';  // Ensure Link is imported
import '../styles/BlockchainCourses.css';

const Swisscom = () => {
        const [inView, setInView] = useState(false); // State to track visibility
        useEffect(() => {
          const observer = new IntersectionObserver(
            ([entry]) => {
              setInView(entry.isIntersecting); // Set state when the section is in view
            },
            { threshold: 0.5 } // Trigger when 50% of the section is in view
          );
      
          const section = document.getElementById('home'); // Select the section
          if (section) {
            observer.observe(section); // Start observing the section
          }
      
          return () => {
            if (section) {
              observer.unobserve(section); // Clean up the observer
            }
          };
        }, []);
  const [password, setPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState('');

  const correctPassword = "Swisscom2024"; // Example password

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthorized(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };
   const videoRef = useRef(null); // Ref for the video element
    const fallbackRef = useRef(null); // Ref for the fallback background
    useEffect(() => {
      const video = videoRef.current;
      const fallback = fallbackRef.current;
  
      if (video) {
        video.style.display = 'block'; // Show the video element
        video.play(); // Start playing the video
  
        video.addEventListener('loadeddata', () => {
          // Once the video is loaded, hide the fallback background
          if (fallback) {
            fallback.style.display = 'none';
          }
        });
  
        video.addEventListener('error', () => {
          // If the video fails to load, ensure the fallback background is visible
          if (fallback) {
            fallback.style.display = 'block';
          }
        });
      }
    }, []);
      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setInView(entry.isIntersecting); // Set state when the section is in view
            console.log('Section in view:', entry.isIntersecting); // Debugging
          },
          { threshold: 0.5 } // Trigger when 50% of the section is in view
        );
    
        const section = document.getElementById('digital-assets-section'); // Select the section
        if (section) {
          observer.observe(section); // Start observing the section
        }
    
        return () => {
          if (section) {
            observer.unobserve(section); // Clean up the observer
          }
        };
      }, []);
  return (
    <div style={{marginBottom:'20px'}}>

<style>
        {`
          #educationDropdown {
            background-color: rgb(20, 46, 82);
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            font-weight: bold;
          }
        `}
      </style>

                                            <section
                                            id="digital-assets-section"
                                            className={`digital-assets-section ${inView ? 'in-view' : ''}`}
                                          >
                                            {/* Video Background */}
                                            <video
                                              id="background-video"
                                              className="background-video"
                                              ref={videoRef}
                                              autoPlay
                                              muted
                                              loop
                                              playsInline
                                              style={{ display: 'none' }} // Hide video initially
                                            >
                                              <source src="/assets/images/video/networkbackgroundhd.MP4" type="video/mp4" />
                                              Your browser does not support the video tag.
                                            </video>
                                      
                                            {/* Fallback Background Color */}
                                            <div className="background-fallback" ref={fallbackRef}></div>
                                      
                                            {/* Content */}
                                            <div className="container">
                                              <div className="digital-assets-content">
                                                <h1>
                                                  <span className="swatch-white">
                                                    <strong>Swisscom Education Program – Now Partnered with Us!</strong>
                                                  </span>
                                                </h1>
                                                <p style={{ color: 'white' }}>
                                                Ready to shape your future? Join our expert-led program and unlock incredible opportunities today!
                                                </p>
                                              </div>
                                            </div>
                                          </section>


      <div className="container menudisplay breadcrumb">
        <Link to="/" ><span className="homemenu">Home</span></Link> <span className="separators">&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span> <span className="current-page">Swisscom Education Program</span>
      </div>


      <div className="container mt-5">
      <div className="ba-header">
        <div className="ba-line"></div>
        <h2>Swisscom Education Program</h2>
        <p className="ba-description">
          Gain in-depth knowledge of cryptocurrency, blockchain, and digital asset management.
          Become a certified expert in the evolving world of crypto.
        </p>
      </div>

        {/* Password Protected Section */}
        {!isAuthorized ? (
          <div className="password-section">
            <div className="form-container">
              <h2 className="form-header">Protected Content</h2>
              <form onSubmit={handlePasswordSubmit} className="password-form">
                <input
                  type="password"
                  className="password-input"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="password-button">
                  Unlock
                </button>
              </form>
              {error && <p className="error-message">{error}</p>}
            </div>
          </div>
        ) : (
          <div className="protected-content">
            <h3>Welcome to the Swisscom Exclusive Section</h3>
            <p>
              Here, you'll find advanced resources, industry insights, and materials specifically curated for your business needs.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Swisscom;
