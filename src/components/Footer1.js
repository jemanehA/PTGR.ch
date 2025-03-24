import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../styles/footer.css'; // Assuming you have the CSS in this file

function Footer() {
const [showForm, setShowForm] = useState(false);
const [isModalOpen, setIsModalOpen] = useState(false);
const [formData, setFormData] = useState({
name: '',
email: '', // The email will be populated from the newsletter form
agreed: false,
});
const [successMessage, setSuccessMessage] = useState('');
const [countdown, setCountdown] = useState(3); // Countdown timer

// Handle input changes
const handleInputChange = (e) => {
const { name, value } = e.target;
setFormData({
...formData,
[name]: value,
});
};

const handleAgreementChange = () => {
setFormData((prevState) => ({
...prevState,
agreed: !prevState.agreed, // Toggle the agreement checkbox value
}));
};

// Countdown timer to close modal
const startCountdown = () => {
const interval = setInterval(() => {
setCountdown((prev) => {
if (prev === 1) {
clearInterval(interval);
closeModal(); // Close the modal after countdown ends
}
return prev - 1;
});
}, 1000); // Decrease the countdown every second
};

// Handle form submission

const handleFormSubmit = async (e) => {
e.preventDefault();

// Build the URL with query parameters
const url = `https://email.ptgr-test.com/email.php?email=${formData.email}&name=${formData.name}`;

try {
// Send the request
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

// Open the modal
const openModal = (email) => {
setFormData({ ...formData, email }); // Populate email from the newsletter input
setIsModalOpen(true);
setSuccessMessage(''); // Reset success message when opening the modal
setCountdown(3); // Reset countdown when modal is opened
};

// Close the modal
const closeModal = () => {
setIsModalOpen(false);
};

return (
<div className='footerr1' style={{ display: 'flex', flexDirection: 'column' }}>

<footer className="site-footer">
<div className="container" style={{backgroundColor:'#0f1316'}}>
<div className="row">
{/* Company Logo */}
<div className="col-md-2 d-flex ">
<div className="company-logo">
<img src="/assets/images/log.png" alt="PTGR AG Logo" className="img-fluid" />
</div>
</div>

{/* Get in Touch */}
<div className="col-md-3 text-start pt-4">
<div className="getintouch">
<h4 className="mb-3">Get in Touch</h4>
<p>PTGR AG</p>
<p>Ibelweg 18a</p>
<p>CH-6300 Zug</p>
<p>Email: <a href="mailto:info@ptgr.ch">info@ptgr.ch</a></p>
</div>
</div>

{/* About Us */}
<div className="col-md-5 text-start pt-4">
<h4 className="mb-3">About Us</h4>
<p>We are a team of experts from the fields of investment banking, private banking, portfolio management, trading, IT, risk management as well as blockchain and cryptoassets.</p>
<p>Follow us</p>
<p>Become part of this big change, stay tuned with us</p>
<div className="d-flex gap-2">
<a href="https://www.facebook.com/profile.php?id=100088835256574" className="text-white" target="_blank" title="Facebook"><i className="fab fa-facebook-f fa-lg"></i></a>
<a href="https://www.linkedin.com/company/ptgr/" className="text-white" target="_blank" title="LinkedIn"><i className="fab fa-linkedin-in fa-lg"></i></a>
<a href="https://t.me/PTGRAG_NEWS_CHANNEL" className="text-white" target="_blank" title="Telegram"><i className="fab fa-telegram-plane fa-lg"></i></a>
<a href="https://www.instagram.com/ptgr_ag/" className="text-white" target="_blank" title="Instagram"><i className="fab fa-instagram fa-lg"></i></a>
<a href="https://www.tiktok.com/@ptgr_future_of_finance" className="text-white" target="_blank" title="TikTok"><i className="fab fa-tiktok fa-lg"></i></a>
</div>
</div>

{/* Quick Links */}
<div className="col-md-2 text-start pt-4">
<h4 className="mb-3">Quick Links</h4>
<ul className="list-unstyled">
<li><Link to="/Partners"> Partners</Link></li>
<li><Link to="/Terms"> Conditions</Link></li>
<li><Link to="/CookiePolicy"> Cookie Policy</Link></li>
<li><Link to="/Datapolicy"> Data Policy</Link></li>
<li><Link to="/Disclaimer"> Disclaimer</Link></li>
<li><Link to="/Imprint"> Imprint</Link></li>
</ul>
</div>
</div>
<div class="custom-br"></div>
</div>
<p className="copyright">&copy; 2025 PTGR AG | All rights reserved</p>

{/* Modal for additional user information */}

</footer>
</div>
);
}

export default Footer;