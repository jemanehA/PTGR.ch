import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Terms.css'; // Optional for additional tweaks
import { Link } from 'react-router-dom';


const Partners = () => {
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
    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);
  return (

    <div>

      <section className={`hero-section ${inView ? 'in-view' : ''}`}>
            <div className="video-container1">
              <video autoPlay muted loop playsInline id="hero-video">
              <source src="/assets/images/video/Aboutus.MP4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className=" headingcontnetdiv container">
        
          <p className="page-indicator-text">Partners</p>
          <p className='headertit'>We provide guidance into the world of digital investing.
          <span className='headtit1'>Leading with research and with care.</span></p>

       
      </div>
      </section>
    
    
            <div className="container menudisplay breadcrumb">
  <Link to="/" className="homemenu">Home</Link> <span className="separator">&gt;</span> <span className="current-page">Partners</span>
</div>

<div className="container py-2">
<div className="container">
<div className='breakee'></div>
<div className="container py-0 afterheading-section">
        <div className="row">
          <div className="col-xl-4 col-lg-5 afterheading-left">
            <div className="afterheading-title">
              <h2 className="afterheading-main-title">
              Strategic Partners
              </h2>
            </div>
          </div>
          <div className="col-xl-7 offset-xl-1 col-lg-8 afterheading-right">
          <p className="message-highlight">
          PTGR AG has a global network as well as international strategic research partners:
           </p>
       </div>
        </div>
        <div class="container">
    <div class="row">
       
    <div class="col-xl-3 col-lg-3 col-md-6 mb-3">
            <div class="partner-card-custom">
                <div class="partner-logo-container-custom">
                    <img src="/assets/images/logo5.jpg.webp" alt="Crypto Valley Member Logo" class="partner-logo-custom" />
                </div>
                <div class="partner-card-body-custom">
                    <h5 class="partner-card-title-custom" style={{textAlign:'center'}}>Crypto Valley Member</h5>
                    <p class="partner-card-text-custom">We are proud members of Crypto Valley, uniting with top blockchain and crypto experts to drive global innovation and integrity in the blockchain economy.</p>
                    <a href="https://cryptovalley.swiss/" target="_blank" class="partner-learn-more-link-custom">Learn More</a>
                </div>
            </div>
        </div>

     
        <div class="col-xl-3 col-lg-3 col-md-6 mb-3">
            <div class="partner-card-custom">
                <div class="partner-logo-container-custom">
                    <img src="/assets/images/10-44-53.png" alt="Geneva School of Diplomacy and International Relations Logo" class="partner-logo-custom" />
                </div>
                <div class="partner-card-body-custom">
                    <h5 class="partner-card-title-custom" style={{textAlign:'center'}}>Geneva School of Diplomacy and International Relations</h5>
                    <p class="partner-card-text-custom">We are proud partners of the Geneva School of Diplomacy, a leading institution in International Relations and Diplomacy, shaping future global leaders through excellence in education.</p>
                    <a href="https://genevadiplomacy.ch/" target="_blank" class="partner-learn-more-link-custom">Learn More</a>
                </div>
            </div>
        </div>

        
        <div class="col-xl-3 col-lg-3 col-md-6 mb-3">
            <div class="partner-card-custom">
                <div class="partner-logo-container-custom">
                    <img src="/assets/images/HSO.webp" alt="HSO Logo" class="partner-logo-custom" />
                </div>
                <div class="partner-card-body-custom">
                    <h5 class="partner-card-title-custom">HSO - Wirtschafts- und Informatikschule</h5>
                    <p class="partner-card-text-custom">We are proud partners of HSO - Wirtschafts- und Informatikschule, empowering professionals with practical, career-focused education in business and IT across Switzerland..</p>
                    <a href="https://www.hso.ch/" target="_blank" class="partner-learn-more-link-custom">Learn More</a>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6 mb-3">
            <div class="partner-card-custom">
                <div class="partner-logo-container-custom">
                    <img src="/assets/images/14-12-37.png" alt="HSO Logo" class="partner-logo-custom" />
                </div>
                <div class="partner-card-body-custom">
                    <h5 class="partner-card-title-custom">AXA</h5>
                    <p class="partner-card-text-custom">We are proud partners of AXA, a trusted name in the Swiss insurance market since 1875, offering comprehensive insurance and pension solutions to both individuals and businesses.</p>
                    <a href="https://www.axa.ch/" target="_blank" class="partner-learn-more-link-custom">Learn More</a>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6 mb-3">
            <div class="partner-card-custom">
                <div class="partner-logo-container-custom">
                    <img src="/assets/images/Logo-schwarz.png.webp" alt="Crypto Valley Member Logo" class="partner-logo-custom" />
                </div>
                <div class="partner-card-body-custom">
                    <h5 class="partner-card-title-custom">A | Q Forensics</h5>
                    <p class="partner-card-text-custom">We are proud partners of A | Q Forensics, a leading blockchain forensics firm in Austria, specializing in investigating digital crimes and cryptocurrency-related incidents with precision and expertise.</p>
                    <a href="https://www.aq-forensics.com/" target="_blank" class="partner-learn-more-link-custom">Learn More</a>
                </div>
            </div>
        </div>

     
        <div class="col-xl-3 col-lg-3 col-md-6 mb-3">
            <div class="partner-card-custom">
                <div class="partner-logo-container-custom">
                    <img src="/assets/images/14-12-52.png" alt="Geneva School of Diplomacy and International Relations Logo" class="partner-logo-custom" />
                </div>
                <div class="partner-card-body-custom">
                    <h5 class="partner-card-title-custom">Alma Mater Europaea</h5>
                    <p class="partner-card-text-custom">We are proud partners of Alma Mater Europaea, a renowned institution fostering academic excellence and global collaboration in higher education across Europe.</p>
                    <a href="https://en.almamater.si/" target="_blank" class="partner-learn-more-link-custom">Learn More</a>
                </div>
            </div>
        </div>

        
        <div class="col-xl-3 col-lg-3 col-md-6 mb-3">
            <div class="partner-card-custom">
                <div class="partner-logo-container-custom">
                    <img src="/assets/images/Kalaidos-FH-Claim-DE.jpg" alt="HSO Logo" class="partner-logo-custom" />
                </div>
                <div class="partner-card-body-custom">
                    <h5 class="partner-card-title-custom">Kalaidos University of Applied Sciences Zurich</h5>
                    <p class="partner-card-text-custom">We are proud partners of Kalaidos University of Applied Sciences Zurich, offering innovative and practice-oriented education in various fields to prepare students for successful careers.</p>
                    <a href="https://www.kalaidos-fh.ch/de-CH"  target="_blank" class="partner-learn-more-link-custom">Learn More</a>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6 mb-3">
            <div class="partner-card-custom">
                <div class="partner-logo-container-custom">
                    <img src="/assets/images/acc.png" alt="HSO Logo" class="partner-logo-custom" />
                </div>
                <div class="partner-card-body-custom">
                    <h5 class="partner-card-title-custom">RWTH International Academy</h5>
                    <p class="partner-card-text-custom">We are proud partners of RWTH International Academy, providing world-class continuing education and professional development programs in collaboration with RWTH Aachen University.</p>
                    <a href="https://www.academy.rwth-aachen.de/en/" target="_blank" class="partner-learn-more-link-custom">Learn More</a>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6 mb-3">
            <div class="partner-card-custom">
                <div class="partner-logo-container-custom">
                    <img src="/assets/images/10-45-15.png" alt="Crypto Valley Member Logo" class="partner-logo-custom" />
                </div>
                <div class="partner-card-body-custom">
                    <h5 class="partner-card-title-custom">Swiss School of Management Barcelona</h5>
                    <p class="partner-card-text-custom">We are proud partners of Swiss School of Management Barcelona, delivering high-quality, globally recognized business education with a focus on innovation and leadership.</p>
                    <a href="https://ssm.barcelona/about/global-academic-collaborations/" target="_blank" class="partner-learn-more-link-custom">Learn More</a>
                </div>
            </div>
        </div>

     
        <div class="col-xl-3 col-lg-3 col-md-6 mb-3">
            <div class="partner-card-custom">
                <div class="partner-logo-container-custom">
                    <img src="/assets/images/10-44-23.png" alt="Geneva School of Diplomacy and International Relations Logo" class="partner-logo-custom" />
                </div>
                <div class="partner-card-body-custom">
                    <h5 class="partner-card-title-custom">Swisscom</h5>
                    <p class="partner-card-text-custom">We are proud partners of Swisscom, Switzerland’s leading telecommunications provider, driving innovation and connectivity across the digital landscape.</p>
                    <a href="https://www.swisscom.ch" target="_blank" class="partner-learn-more-link-custom">Learn More</a>
                </div>
            </div>
        </div>

        
        <div class="col-xl-3 col-lg-3 col-md-6 mb-3">
            <div class="partner-card-custom">
                <div class="partner-logo-container-custom">
                    <img src="/assets/images/10-44-36.png" alt="HSO Logo" class="partner-logo-custom" />
                </div>
                <div class="partner-card-body-custom">
                    <h5 class="partner-card-title-custom">SSIB - Swiss School for International Business</h5>
                    <p class="partner-card-text-custom">We are proud partners of SSIB - Swiss School for International Business, specializing in cultivating global business leaders through innovative and practice-oriented education.</p>
                    <a href="https://ssib.ch/" target="_blank" class="partner-learn-more-link-custom">Learn More</a>
                </div>
            </div>
        </div>

    </div>
</div>




      </div>







    </div>
    </div></div>
  );
};

export default Partners;
