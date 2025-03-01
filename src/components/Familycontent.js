import React, { useState, useEffect , useRef} from 'react';
import BookConsultation from './BookConsultation';
import { Link } from 'react-router-dom';
import '../styles/Aboutus.css';

const ForensicServices = () => {
  const [inView, setInView] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('home');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
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
    <div style={{ paddingBottom: '10px' }}>
      <style>
     
        {`
          #productsDropdown {
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
                                  <source src="/assets/images/video/Family.MP4" type="video/mp4" />
                                  Your browser does not support the video tag.
                                </video>
                          
                                {/* Fallback Background Color */}
                                <div className="background-fallback" ref={fallbackRef}></div>
                          
                                {/* Content */}
                                <div className="container">
                                  <div className="digital-assets-content">
                                    <h1>
                                      <span className="swatch-white">
                                        <strong>Navigating the World of Digital Investing</strong>
                                      </span>
                                    </h1>
                                    <p style={{ color: 'white' }}>
                                    We provide expert guidance, leading with research and care. Join our expert-led course and unlock the future of finance.
                                    </p>
                                    <div className="digital-assets-buttons">

                                    </div>
                                  </div>
                                </div>
                              </section>

      <div className="container menudisplay breadcrumb">
        <Link to="/" ><span className="homemenu">Home</span></Link> <span className="separators">&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span> <span className="current-page">Family Crypto Savings Program</span>
      </div>
      <div className="container afterheading-section">
        <div className="row">
          <div className="col-xl-5 col-lg-5 afterheading-left">
            <div className="afterheading-title">
              <h2 className="afterheading-main-title">
                <span className="topspan">Family Crypto Savings Program</span><br />
                Create a family saving plan that can help your children reach the goal
              </h2>
            </div>
          </div>
          <div className="col-xl-6 offset-xl-1 col-lg-7 afterheading-right">
            <div className="service-text">
              <p className="afterheading-highlight">
              Many parents aim to secure their children’s future by building savings
through traditional bank accounts. However, these accounts typically offer
low-interest rates that often fail to keep up with inflation, limiting long-term
growth. As a result, the real value of the savings may decrease over time.
              </p>
              <ul className="service-list">
                <h3>Key Benefits</h3>
                <li><span><strong>Higher Growth Potential</strong>: Unlike traditional savings accounts,
                cryptocurrency investments offe the potential for higher long-term returns.</span></li>
                <li><span><strong>Early Exposure to Digital Assets</strong>: Help your children benefit from the
                future of finance by building early exposure to cryptocurrencies.</span></li>
                <li><span><strong>Secure and Professional Management</strong>: Our team of experts ensures
                that funds are securely managed using an balanced investment approach.</span></li>
                <li><span><strong>Compounding Growth</strong>: Investments are strategically allocated to
                maximize long-term growth through compounding returns.</span></li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>


      <div className="strategydiv" id="strategydiv">
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-md-12">
              <h2 className="section-title">How It Works</h2>
              <p className="how-it-works-description">
                Our simple, investor-focused process guarantees clarity and confidence at every stage:
              </p>
              <div className="container mt-5">
                <div className="row">
                  {[
                    { icon: 'fas fa-coins', title: 'Initial Contribution', description: 'Parents deposit an initial amount into their child’s Crypto savings plan.' },
                    { icon: 'fas fa-chart-line', title: 'Ongoing Investments', description: 'Optional monthly/annual contributions can be added to grow the investment over time.' },
                    { icon: 'fas fa-briefcase', title: 'Professional Portfolio Management', description: 'PTGR’s investment team manges the portfolio using an combination of stable, balanced and growth-focused crypto assets.' },
                    { icon: 'fas fa-chart-line', title: 'Long-Term Growth', description: 'The funds grow over time, ready to be accessed when the child reachers adulthood or another predetermined milestone.' },
                 ].map((step, index) => (
                    <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex align-items-stretch">
                      <div className="how-it-works-step text-center p-4 rounded shadow-sm">
                        <i className={`${step.icon} how-it-works-step-icon mb-3`}></i>
                        <h5 className="fw-bold">{step.title}</h5>
                        <p className="text-muted">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="ico-token-cta" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingBottom: '40px' }}>
        <Link to="/BookConsultations?consultationType=Family Crypto Savings Program">
          <button className="cta-button">Ready to Launch? Request a Consultation</button>
        </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ForensicServices;