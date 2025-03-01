import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/livecrypto.css';


function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (lang, label) => {
    setSelectedLanguage(label);
    setIsOpen(false);
  };
  const handleWeb3Click = (e) => {
    e.preventDefault(); 
    navigate('/WS'); 
  };
  const handleEducationClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    navigate('/education'); // Navigate to /education
  };
  
  const handleAboutClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    navigate('/Aboutus'); // Navigate to /education
  };
  
  const handleServiceClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    navigate('/Service'); // Navigate to /education
  };
  const handleNewClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    navigate('/NewsHome'); // Navigate to /education
  };
  
  const handleNavigation = (path) => {
    const navbarCollapse = document.querySelector('.offcanvas');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show'); // Close the navbar
    }
  
    // Remove the backdrop
    const backdrop = document.querySelector('.offcanvas-backdrop');
    if (backdrop) {
      backdrop.classList.remove('show'); // Hide the backdrop
    }
  
    // Navigate to the given path
    navigate(path);
  };
  

  // Handle resize event to determine if screen is mobile
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 868);
  };

  // Initial check and add event listener for resize
  useEffect(() => {
    handleResize(); // Initial check when the component mounts
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to handle link click on mobile to collapse the navbar and navigate
  const handleLinkClick = (path) => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show'); // Close the navbar
    }
    navigate(path); // Navigate to the given path
  };
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
        );
        setCryptoData(response.data);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };
    fetchCryptoData();
  }, []);

  const CryptoMarquee = () => (
    <div className="crypto-marquee">
      <div className="marquee-content">
        {[...cryptoData, ...cryptoData].map((crypto, index) => (
          <span key={`${crypto.id}-${index}`} className="crypto-item">
            {crypto.name} ({crypto.symbol.toUpperCase()}): 
            ${crypto.current_price.toFixed(2)}
            <span
              className={`price-change ${
                crypto.price_change_percentage_24h >= 0 ? 'up' : 'down'
              }`}
            >
              {crypto.price_change_percentage_24h >= 0 ? '▲' : '▼'}{' '}
              {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
            </span>
            <span className="separator">|</span>
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-100">
      <div className="topheading">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center px-0" style={{ zIndex: 1051 }}>

          <span className="email">
            <i className="fas fa-envelope"></i>   <a href="mailto:info@ptgr.ch" style={{ textDecoration: 'none', color: 'inherit' }}>
    info@ptgr.ch
  </a>
          </span>
          <CryptoMarquee />
          <div className="social-icons">
            

            <div className="language-selector">
  <i className="fas fa-globe"></i> {/* Font Awesome globe icon */}
  <select className="language-dropdown">
    <option value="en">English</option>
  </select>
</div>

          </div>
          
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container p-0" style={{ zIndex: 1051}}>
          <Link className="navbar-brand" to="/">
            <img src="/assets/images/log.png" alt="LCX Logo" className="logo-img" />
          </Link>

          <button
  className="navbar-toggler d-lg-none"
  type="button"
  data-bs-toggle="offcanvas"
  data-bs-target="#offcanvasNavbar"
  aria-controls="offcanvasNavbar"
  data-bs-scroll="true"  // Allow body scrolling
  data-bs-backdrop="true"  // Enable backdrop
>
            <span className="navbar-toggler-icon"></span>
          </button>
{/* desktop Menu */}
          <div className="collapse navbar-collapse d-none d-lg-block" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" onClick={handleServiceClick} id="productsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                <li><Link className="dropdown-item" to="/Digital">Strategic Digital Asset Advisory (SDAA)</Link></li>
                <li><Link className="dropdown-item" to="/iso">ICO & Token Management Service</Link></li>


<li><Link className="dropdown-item" to="/family">Family Crypto Savings Program</Link></li>
<li><Link className="dropdown-item" to="/Forensic">Forensic Services</Link></li>
<li><Link className="dropdown-item" to="/preiso">Pre-ICO Deals</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" onClick={handleEducationClick} id="educationDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Education
                </a>
                <ul className="dropdown-menu" aria-labelledby="educationDropdown">
                <li><Link className="dropdown-item" to="/educationcertificate">Certified Crypto Expert Course</Link></li>
<li><Link className="dropdown-item" to="/BlockchainApplicationCourses">Blockchain Application Course</Link></li>
<li><Link className="dropdown-item" to="/WEB3">Web 3.0 Power Sessions</Link></li>
<li><Link className="dropdown-item" to="/SelfStudy">Self-Study Online Program</Link></li>
<li><Link className="dropdown-item" to="/swis">Swisscom Education Program</Link></li>

                </ul>
              </li>
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" onClick={handleWeb3Click} id="SW3SDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Strategic Web 3.0 Consultancy
                </a>

              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="ptgrTokenDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  PTGR Token
                </a>
                <ul className="dropdown-menu" aria-labelledby="ptgrTokenDropdown">
                  <li><a className="dropdown-item" href="#">PTGR Token Investment</a></li>
                  <li><a className="dropdown-item" href="#">PTGR Token Community</a></li>
                  <li><a className="dropdown-item" href="#">PTGR Token Game</a></li>
                </ul>
              </li> */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" onClick={handleAboutClick} id="aboutUsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About Us
                </a>
                <ul className="dropdown-menu" aria-labelledby="aboutUsDropdown">
                <li><Link className="dropdown-item" to="/Aboutus">Who we are</Link></li>
<li><Link className="dropdown-item" to="/JobPage">Jobs</Link></li>


                </ul>
              </li>
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" onClick={handleNewClick} id="NewDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              News
                </a>
                <ul className="dropdown-menu" aria-labelledby="NewDropdown">
                <li><Link className="dropdown-item" to="/Bloglist">Blogs</Link></li>
                <li><Link className="dropdown-item" to="/Events">Events</Link></li>
                </ul>
   
              </li>
              <li className="nav-item">
                
              </li>
            </ul>
            <Link className="ptgrbtn" to="/ContactUsForm" style={{marginBottom:'8px',fontSize:'0.8em'}}>Contact Us</Link>
          </div>

          {/* Offcanvas Menu */}
          <div
  className="offcanvas offcanvas-end d-lg-none "
  tabIndex="-1"
  id="offcanvasNavbar"
  aria-labelledby="offcanvasNavbarLabel"
>
  <div className="container" style={{ zIndex: 1051, position: "fixed" }}>
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
      <button
  type="button"
  className="btn-close text-reset"
  data-bs-dismiss="offcanvas"
  aria-label="Close"
></button>
    </div>
    <div className="offcanvas-body">
      <ul className="navbar-nav-mobile">
        <li className="nav-item-mobile">
          <a 
            className="nav-link-mobile collapsed" 
            href="#" 
            data-bs-toggle="collapse" 
            data-bs-target="#servicesCollapse" 
            aria-expanded="false"
            aria-controls="servicesCollapse"
          >
            Services<span className="arrow">▼</span>
          </a>
          <div className="collapse-mobile collapse" id="servicesCollapse"  >
            <ul className="list-unstyled-mobile ps-3">
            <li>
  <a
    className="dropdown-item-mobile link" data-bs-dismiss="offcanvas"
    onClick={() => handleNavigation('/Digital')}
  >
    Strategic Digital Asset Advisory (SDAA)
  </a>
</li>
<li><a className="dropdown-item-mobile" data-bs-dismiss="offcanvas" onClick={() => handleNavigation('/iso')}>ICO & Token Management Service</a></li>
<li><a className="dropdown-item-mobile" data-bs-dismiss="offcanvas" onClick={() => handleNavigation('/family')}>Family Crypto Savings Program</a></li>
<li><a className="dropdown-item-mobile" data-bs-dismiss="offcanvas" onClick={() => handleNavigation('/Forensic')}>Forensic Services</a></li>
              <li><a className="dropdown-item-mobile" data-bs-dismiss="offcanvas" onClick={() => handleNavigation('/preiso')}>Pre-ICO Deals</a></li>
            </ul>
          </div>
        </li>

        <li className="nav-item-mobile">
          <a 
            className="nav-link-mobile collapsed" 
            href="#" 
            data-bs-toggle="collapse" 
            data-bs-target="#educationCollapse" 
            aria-expanded="false"
            aria-controls="educationCollapse"
            data-bs-dismiss="offcanvas"
          
          >
            Education<span className="arrow">▼</span>
          </a>
          <div className="collapse-mobile collapse" id="educationCollapse">
            <ul className="list-unstyled-mobile ps-3">
              <li><a className="dropdown-item-mobile" data-bs-dismiss="offcanvas" onClick={() => handleNavigation('/educationcertificate')}>Certified Crypto Expert Course</a></li>
              <li><a className="dropdown-item-mobile" data-bs-dismiss="offcanvas" onClick={() => handleNavigation('/BlockchainApplicationCourses')}>Blockchain Application Course</a></li>
              <li><a className="dropdown-item-mobile" data-bs-dismiss="offcanvas" onClick={() => handleNavigation('/WEB3')}>Web 3.0 Power Sessions</a></li>
              <li><a className="dropdown-item-mobile" data-bs-dismiss="offcanvas" onClick={() => handleNavigation('/SelfStudy')}>Self-Study Online Program</a></li>
              <li><a className="dropdown-item-mobile" data-bs-dismiss="offcanvas" onClick={() => handleNavigation('/swis')}>Swisscom Education Program</a></li>
            </ul>
          </div>
        </li>


              <li><a className="nav-link-mobile" data-bs-dismiss="offcanvas" onClick={() => handleNavigation('/WS')}>Strategic Web 3.0 Consultancy</a></li>
         
     
       

        <li className="nav-item-mobile"> 
          <a 
            className="nav-link-mobile collapsed" 
            href="#" 
            data-bs-toggle="collapse" 
            data-bs-target="#aboutUsCollapse" 
            aria-expanded="false"
            aria-controls="aboutUsCollapse"
            data-bs-dismiss="offcanvas"
          >
            About Us<span className="arrow">▼</span>
          </a>
          <div className="collapse collapse" id="aboutUsCollapse">
            <ul className="list-unstyled-mobile ps-3">
              <li><a className="dropdown-item-mobile" data-bs-dismiss="offcanvas" onClick={() => handleNavigation('/Aboutus')}>Who we are</a></li>
              <li><a className="dropdown-item-mobile" data-bs-dismiss="offcanvas" onClick={() => handleNavigation('/JobPage')}>Jobs</a></li>
            </ul>
          </div>
        </li>

        <li className="nav-item-mobile">
  <div style={{ backgroundColor: 'none', padding: '4px' }}>
    <a             className="nav-link-mobile collapsed"  
            href="#" 
            data-bs-toggle="collapse" 
            data-bs-target="#NewsCollapse" 
            aria-expanded="false"
            aria-controls="aboutUsCollapse"
            data-bs-dismiss="offcanvas">
      News<span className="arrow">▼</span>
    </a>
    <div className="collapse collapse" id="NewsCollapse">
    <ul className="list-unstyled-mobile ps-3">
    <li><a className="dropdown-item-mobile" data-bs-dismiss="offcanvas" onClick={() => handleNavigation('/NewsHome')}>Blogs</a></li>
    <li><a className="dropdown-item-mobile" data-bs-dismiss="offcanvas" onClick={() => handleNavigation('/Events')}>Events</a></li>
   </ul></div>
  </div>
</li>

      </ul>

      <div className="mt-auto">
        <Link to="/ContactUsForm" data-bs-dismiss="offcanvas" className="btn btn-primary w-100">Contact Us</Link>
      </div>
    </div>
  </div>
</div>

        </div>
      </nav>
    </div>
  );
}

export default Header;