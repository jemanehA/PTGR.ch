import React, {useState, useEffect } from 'react';
import PayPal from "./PayPal";
import { Link } from 'react-router-dom';  // Ensure Link is imported
import '../styles/CertifiedExpertCryptoProgram.css'; // Create this CSS file for styles

const Web3home = () => {
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
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalClose = (e) => {
    if (e.target.classList.contains('paypal-modal-overlay')) {
      setModalOpen(false);
    }
  };
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
  return (
    <div style={{marginBottom:'10px'}}>
      <style>
        {`
          #educationtopmenu {
            background-color: rgb(5, 21, 43);
            border-top-left-radius: 10px; /* Adjust the value as needed */
            border-top-right-radius: 10px; /* Adjust the value as needed */
          }
        `}
      </style>


<section className={`hero-section ${inView ? 'in-view' : ''}`}>
      <div className="video-container1">
        <video autoPlay muted loop playsInline id="hero-video">
        <source src="/assets/images/video/networkbackgroundhd.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className=" headingcontnetdiv container">
  
    <p className="page-indicator-text">Web 3.0 Power Sessions</p>
    <p className='headertit'>Enroll in our <span className='headtit1'>Web 3.0 Power Sessions</span> Your gateway to mastering blockchain and cryptocurrency.</p>
 
</div>

    </section>

    <div className="container menudisplay breadcrumb">
  <Link to="/" className="homemenu">Home</Link> <span className="separator">&gt;</span> <span className="current-page">Web 3.0 Power Sessions</span>
</div>

<div class="container afterheading-section">
  <div class="row">
   
    <div class="col-xl-5 col-lg-5 afterheading-left">
      <div class="afterheading-title">
        <h2 class="afterheading-main-title"><span className="topspan">Web 3.0 Power Sessions</span><br></br>Explore our education programs to empower you with the knowledge to navigate the digital asset landscape.</h2>
      </div>
    </div>
    
   
    <div class="col-xl-6 offset-xl-1 col-lg-7 afterheading-right">
      <div class="afterheading-content">

        <p class="afterheading-description">
        Empower yourself with expert-led sessions on the transformative
          potential of Web 3.0. Explore blockchain ecosystems, passive income
          strategies, decentralized finance (DeFi), and the future of sustainable
          investing. Gain insights into crypto trends, market cycles, and the
          tools to identify and combat scams with forensic expertise.
       </p>
      </div>
    </div>
  </div>
</div>

  </div>
  );
};

export default Web3home;
