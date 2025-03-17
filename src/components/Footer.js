import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

function Footer() {
  const [showForm, setShowForm] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    agreed: false,
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [countdown, setCountdown] = useState(3);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAgreementChange = () => {
    setFormData((prevState) => ({ ...prevState, agreed: !prevState.agreed }));
  };

  const startCountdown = () => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          closeModal();
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const url = `https://email.ptgr-test.com/email.php?email=${formData.email}&name=${formData.name}`;
    try {
      const response = await fetch(url);
      if (response.ok) {
        setSuccessMessage('Thank you for subscribing!');
        startCountdown();
      } else {
        setSuccessMessage('There was an error. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('There was an error. Please try again later.');
    }
  };

  const openModal = () => {
    setFormData({ ...formData, email });
    setIsModalOpen(true);
    setSuccessMessage('');
    setCountdown(3);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='footerr'>
      <section className='newsletter-section'>
        <div className='row'>
          <div className='col-md-8 newsletter-left'>
            <div className='container'>
              <h3>Subscribe to Our Newsletter</h3>
              <p>Get monthly updates on the latest developments, events, and opportunities.</p>
              <div className={`subscribe-container ${showForm ? 'expanded' : ''}`}>
                <button className={`subscribe-btn ${showForm ? 'hidden' : ''}`} onClick={() => setShowForm(true)}>Subscribe</button>
                <div className={`subscribe-form-wrapper ${showForm ? 'visible' : ''}`}>
                  <form className='subscribe-form'>
                    <input 
                      type='email' 
                      placeholder='Enter your email' 
                      required 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                    />
                    <button type='button' className='subscribe-now-btn' onClick={openModal}>Subscribe Now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 newsletter-right">
  <div className="half-bottom-image-container">
    <img src="/assets/images/log1.png" alt="Newsletter Illustration" className="half-bottom-image" />
  </div>
</div>
        </div>
      </section>
      <footer className='site-footer'>
        <div className='container' style={{backgroundColor:'#0f1316'}}>
          <div className='row'>
            <div className='col-md-2 d-flex '>
              <div className='company-logo'>
                <img src='/assets/images/log.png' alt='PTGR AG Logo' className='img-fluid' />
              </div>
            </div>
            <div className='col-md-3 text-start pt-4'>
              <div className='getintouch'>
                <h4 className='mb-3'>Get in Touch</h4>
                <p>PTGR AG</p>
                <p>Ibelweg 18a</p>
                <p>CH-6300 Zug</p>
                <p>Email: <a href='mailto:info@ptgr.ch'>info@ptgr.ch</a></p>
              </div>
            </div>
            <div className='col-md-5 text-start pt-4'>
              <div>
              <h4 className='mb-3'>About Us</h4>
              <p>We are a team of experts from the fields of investment banking, private banking, portfolio management, trading, IT, risk management as well as blockchain and cryptoassets.</p> </div>
<div className='mt-4'>
  <h5>Follow us</h5>
<p >Become part of this big change, stay tuned with us</p>
<div className="d-flex gap-2">
<a href="https://www.facebook.com/profile.php?id=100088835256574" className="text-white" target="_blank" title="Facebook"><i className="fab fa-facebook-f fa-lg"></i></a>
<a href="https://www.linkedin.com/company/ptgr/" className="text-white" target="_blank" title="LinkedIn"><i className="fab fa-linkedin-in fa-lg"></i></a>
<a href="https://t.me/PTGRAG_NEWS_CHANNEL" className="text-white" target="_blank" title="Telegram"><i className="fab fa-telegram-plane fa-lg"></i></a>
<a href="https://www.instagram.com/ptgr_ag/" className="text-white" target="_blank" title="Instagram"><i className="fab fa-instagram fa-lg"></i></a>
<a href="https://www.tiktok.com/@ptgr_future_of_finance" className="text-white" target="_blank" title="TikTok"><i className="fab fa-tiktok fa-lg"></i></a>
</div> </div>
</div>
            <div className='col-md-2 text-start pt-4'>
              <h4 className='mb-3'>Quick Links</h4>
              <ul className='list-unstyled'>
              <li><Link to="/Partners"> Partners</Link></li>
<li><Link to="/Terms"> Conditions</Link></li>
<li><Link to="/CookiePolicy"> Cookie Policy</Link></li>
<li><Link to="/Datapolicy"> Data Policy</Link></li>
<li><Link to="/Disclaimer"> Disclaimery</Link></li>
<li><Link to="/Imprint"> Imprint</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <p className='copyright'>&copy; 2025 PTGR AG | All rights reserved</p>
        {isModalOpen && (
          <div className='footer-modal-overlay'>
            <div className='footer-modal-content'>
              <span className='footer-close-button' onClick={closeModal}>&times;</span>
              <div className="footer-header">
          <img 
          src="/assets/images/g.png" 
          alt="PTGR Logo" 
          className="footer-logo" 
          />
          <h2>Subscribe to Our Newsletter</h2>
          </div>
          <p className="footer-modal-description">
          Stay updated with the latest news and exclusive offers.
          </p>
              <form onSubmit={handleFormSubmit}>
              <div>
          <label htmlFor="footer-name">Name:</label>
          <input
          type="text"
          id="footer-name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your full name"
          required
          className="footer-form-input"
          />
          </div>
               
                <div>
          <label htmlFor="footer-email">Email:</label>
          <input
          type="email"
          id="footer-email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email address"
          required
          className="footer-form-input"
          />
          </div>
          <div className="footer-checkbox">
          <input
          type="checkbox"
          id="agreement"
          checked={formData.agreed}
          onChange={handleAgreementChange}
          />
          <label htmlFor="agreement">
          I agree to the <a href="#">Terms and Conditions</a>.
          </label>
          </div>
          <button type="submit" className="footer-btn footer-btn-primary" disabled={!formData.agreed}>
          Subscribe Now
          </button>
              </form>
              {successMessage && <p>{successMessage} Closing in {countdown} seconds...</p>}
            </div>
          </div>
        )}
      </footer>
    </div>
  );
}

export default Footer;
