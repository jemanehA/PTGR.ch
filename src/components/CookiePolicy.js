import React, { useState,useEffect } from "react";
import '../styles/Terms.css';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
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
            
              <p className="page-indicator-text">Cookie policy</p>
              <p className='headertit'>We provide guidance into the world of digital investing.
              <span className='headtit1'>Leading with research and with care.</span></p>
    
           
          </div>
          </section>
        
        
                <div className="container menudisplay breadcrumb">
      <Link to="/" className="homemenu">Home</Link> <span className="separator">&gt;</span> <span className="current-page">Cookie policy</span>
    </div>
    <div className="container py-2">

<div className="container py-0 afterheading-section">
        <div className="row">
          <div className="col-xl-4 col-lg-5 afterheading-left">
            <div className="afterheading-title">
              <h2 className="afterheading-main-title">
              Cookie policy
              </h2>
            </div>
          </div>
          <div className="col-xl-7 offset-xl-1 col-lg-8 afterheading-right">
            <div className="afterheading-content">
              <p className="message-highlight">
              This Cookie Policy was last updated on September 25, 2023 and applies to citizens and legal permanent residents of the European Economic Area and Switzerland.
              </p>
              <h2>1. Introduction</h2>
              <p>Our website, <a href="https://ptgr.ch">https://ptgr.ch</a> (hereinafter: "the website") uses cookies and other related technologies (for convenience all technologies are referred to as "cookies"). Cookies are also placed by third parties we have engaged. In the document below we inform you about the use of cookies on our website.</p>
              <h2>2. What are cookies?</h2>
        <p>A cookie is a small simple file that is sent along with pages of this website and stored by your browser on the hard drive of your computer or another device. The information stored therein may be returned to our servers or to the servers of the relevant third parties during a subsequent visit.</p>
        <h2>3. What are scripts?</h2>
        <p>A script is a piece of program code that is used to make our website function properly and interactively. This code is executed on our server or on your device.</p>
        <h2>4. What is a web beacon?</h2>
        <p>A web beacon (or a pixel tag) is a small, invisible piece of text or image on a website that is used to monitor traffic on a website. In order to do this, various data about you is stored using web beacons.</p>
        <h2>5. Cookies</h2>
        <h2>5.1 Technical or functional cookies</h2>
        <p>Some cookies ensure that certain parts of the website work properly and that your user preferences remain known. By placing functional cookies, we make it easier for you to visit our website. This way, you do not need to repeatedly enter the same information when visiting our website and, for example, the items remain in your shopping cart until you have paid. We may place these cookies without your consent.</p>

        <h2>5.2 Statistics cookies</h2>
        <p>We use statistics cookies to optimize the website experience for our users. With these statistics cookies, we get insights in the usage of our website. We ask your permission to place statistics cookies.</p>

        <h2>5.3 Advertising cookies</h2>
        <p>On this website, we use advertising cookies, enabling us to gain insights into the campaign results. This happens based on a profile we create based on your behavior on <a href="https://ptgr.ch">https://ptgr.ch</a>. With these cookies, you, as website visitor, are linked to a unique ID but these cookies will not profile your behavior and interests to serve personalized ads.</p>

        <h2>5.4 Marketing/Tracking cookies</h2>
        <p>Marketing/Tracking cookies are cookies or any other form of local storage, used to create user profiles to display advertising or to track the user on this website or across several websites for similar marketing purposes.</p>

        <h2>5.5 Social media</h2>
        <p>On our website, we have included content from Facebook, Twitter, LinkedIn, Instagram, and TikTok to promote web pages (e.g. “like”, “pin”) or share (e.g. “tweet”) on social networks like Facebook, Twitter, LinkedIn, Instagram, and TikTok. This content is embedded with code derived from these platforms and places cookies. This content might store and process certain information for personalized advertising.</p>
        <h2>6. Placed cookies</h2>
        <ul>
          <li><strong>WooCommerce</strong> - Functional</li>
          <li><strong>Wistia</strong> - Statistics</li>
          <li><strong>Elementor</strong> - Statistics (anonymous)</li>
          <li><strong>Tidio Live Chat</strong> - Functional</li>
          <li><strong>WordPress</strong> - Functional</li>
          <li><strong>PayPal</strong> - Functional</li>
          <li><strong>Google reCAPTCHA</strong> - Functional</li>
          <li><strong>Stripe</strong> - Functional</li>
          <li><strong>Complianz</strong> - Functional</li>
          <li><strong>Google Analytics</strong> - Statistics</li>
          <li><strong>WPML</strong> - Functional</li>
          <li><strong>Google Fonts</strong> - Marketing</li>
          <li><strong>Google Maps</strong> - Marketing</li>
          <li><strong>Twitter</strong> - Functional, Marketing</li>
          <li><strong>LinkedIn</strong> - Functional, Marketing, Statistics, Preferences</li>
          <li><strong>TikTok</strong> - Marketing, Functional</li>
          <li><strong>YouTube</strong> - Marketing</li>
          <li><strong>LiveChat</strong> - Functional, Marketing</li>
          <li><strong>Facebook</strong> - Marketing, Functional</li>
          <li><strong>Miscellaneous</strong> - Purpose pending investigation</li>
        </ul>

        <h2>7. Consent</h2>
        <p>When you visit our website for the first time, we will show you a pop-up with an explanation about cookies. As soon as you click on "Einstellungen speichern", you consent to us using the categories of cookies and plug-ins you selected in the pop-up, as described in this Cookie Policy. You can disable the use of cookies via your browser, but please note that our website may no longer work properly.</p>

        <h2>8. Enabling/disabling and deleting cookies</h2>
        <p>You can use your internet browser to automatically or manually delete cookies. You can also specify that certain cookies may not be placed. Another option is to change the settings of your internet browser so that you receive a message each time a cookie is placed. For more information about these options, please refer to the instructions in the Help section of your browser.</p>
        <p>Please note that our website may not work properly if all cookies are disabled. If you do delete the cookies in your browser, they will be placed again after your consent when you visit our website again.</p>
      

    
        <h2>9. Your rights with respect to personal data</h2>
        <p>You have the following rights with respect to your personal data:</p>
        <ul>
          <li>Right of access</li>
          <li>Right to rectification</li>
          <li>Right to transfer your data</li>
          <li>Right to object</li>
        </ul>
        <h2>10. Contact details</h2>
        <p>For questions and/or comments about our Cookie Policy, please contact us:</p>
        <address>
          PTGR AG<br />
          Ibelweg 18a<br />
          CH-6300 Zug, Switzerland<br />
          Website: <a href="https://ptgr.ch">https://ptgr.ch</a><br />
          Email: <a href="mailto:info@ptgr.ch">info@ptgr.ch</a><br />
          Phone number: +41 78 784 55 22
        </address>
        <p>This Cookie Policy was synchronized with cookiedatabase.org on September 25, 2023.</p>
            </div>
          </div>
        </div>
      </div>


     
</div>


   

    
    </div>
  );
};

export default CookiePolicy;
