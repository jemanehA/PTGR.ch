import React, { useEffect,useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios";
import '../styles/livecrypto.css';

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // Handle resize event to determine if screen is mobile
  const handleResize = () => {
    if (window.innerWidth <= 868) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  const handleGetStartedClick = () => {
    navigate('/education')
  };
  
  const handleServiceClick = () => {
    navigate('/Digital')
  };
  const handleCamClick = () => {
    navigate('/cpm')
  };
  
  const handleWSClick = () => {
    navigate('/homeWS')
  };
  const handleAboutClick = () => {
    navigate('/Aboutus')
  };
  const handlePTGRClick = () => {
    navigate('/PTGRToken')
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

    // Navigate to the given path
    navigate(path);
  };
  const handleLinkClicks = (cardId) => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show'); // Close the navbar
    }
    navigate('/WS', { state: { cardId } }); // Pass the card ID as state
  };

  // Function to safely manipulate DOM when component mounts
  const fetchCryptoData = () => {
    const marquee = document.getElementById("crypto-marquee");
    const loadingMessage = document.getElementById("loading-message");

    if (loadingMessage) {
      loadingMessage.style.display = "block";
    }

    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1")
      .then((response) => {
        const data = response.data;
        let marqueeContent = "";

        data.forEach((crypto) => {
          const icon = crypto.price_change_percentage_24h >= 0 ? "fa-arrow-up" : "fa-arrow-down";
          const colorClass = crypto.price_change_percentage_24h >= 0 ? "text-success" : "text-danger";

          marqueeContent += `
            <div class="crypto-column">
              <img src="${crypto.image}" alt="${crypto.name}" class="cryptoimage" />
              <span class="crypto-name">${crypto.name} (${crypto.symbol.toUpperCase()})</span>
              <span class="crypto-price">$${crypto.current_price.toFixed(2)}</span>
              <span class="price-change ${colorClass}">
                <i class="iconup fas ${icon}"></i> ${crypto.price_change_percentage_24h.toFixed(2)}%
              </span>
            </div>
            <span class="separator">|</span>
          `;
        });

        // Repeat the content to create seamless scrolling
        marquee.innerHTML = marqueeContent + marqueeContent;

        // Hide the loading message
        if (loadingMessage) {
          loadingMessage.style.display = "none";
        }
      })
      .catch(() => {
        marquee.innerHTML = '<p class="text-danger">Failed to fetch data. Please try again later.</p>';
        loadingMessage.style.display = "none";
      });
  };

  useEffect(() => {
    // Call fetchCryptoData when the component mounts
    fetchCryptoData();

    // Fetch data every minute
    const intervalId = setInterval(fetchCryptoData, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="header">
      <div className="w-100">
        <div className="marquee-container">
          <div id="crypto-marquee" className="marquee-content">
            <span id="loading-message">Loading...</span>
          </div>
        </div>
      </div>
      
      <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container custom-padding">
    {/* Logo */}
    <Link className="navbar-brand" to="/">
      <img src="/assets/images/log.png" alt="Logo" className="logoimg" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false"/>
    </Link>

    {/* Toggle Button */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Collapsible Content */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto">
        {/* Existing nav items */}
        <li className="nav-item dropdown">

          {isMobile ? (
            <a
            className="nav-link dropdown-toggle"
            href="kjk"
            id="camtopmenu"
            role="button"
            data-bs-toggle="dropdown"
            
          >
            CAM
          </a>
    ) : (
      <a
      className="nav-link dropdown-toggle"
      href="kjk"
      id="camtopmenu"
      role="button"
      data-bs-toggle="dropdown"
      onClick={handleCamClick}
    >
      CAM
    </a>
    )}



          <ul className="dropdown-menu" aria-labelledby="educationDropdown">
        {/* Crypto Asset Management Description */}
        <li className="dropdown-header">
          <strong>Crypto Asset Management</strong>
          <p className="dropdown-description limited-width">
          Discover secure and efficient ways to grow your crypto portfolio.
          </p>
          
          <hr 
  className="dropdown-divider" 
/>
        </li>
        <li>
  {isMobile ? (
    <span
      className="dropdown-item link"
      onClick={() => handleLinkClick("/sro")}
    >
      PTGR is a SRO
    </span>
  ) : (
    <Link className="dropdown-item link" to="/sro">
      PTGR is a SRO
    </Link>
  )}
</li>
        {/* Service Links */}
        <li>
  {isMobile ? (
    <span
      className="dropdown-item link"
      onClick={() => handleLinkClick("/cpm")}
    >
      PTGR Investment Strategies
    </span>
  ) : (
    <Link className="dropdown-item link" to="/cpm">
      PTGR Investment Strategies
    </Link>
  )}
</li>

{/* <li>
  {isMobile ? (
    <span
      className="dropdown-item link"
      onClick={() => handleLinkClick("/Performance")}
    >
      PTGR Investment Strategies Performance
    </span>
  ) : (
    <Link className="dropdown-item link" to="/Performance">
      PTGR Investment Strategies Performance
    </Link>
  )}
</li> */}



      </ul>
        </li>
        <li className="nav-item">
          {isMobile ? (
            <a
            className="nav-link dropdown-toggle"
            href="kjk"
            id="servicetopmenu"
            role="button"
            data-bs-toggle="dropdown"
            
          >
            Services
          </a>
    ) : (
      <a
      className="nav-link dropdown-toggle"
      href="kjk"
      id="servicetopmenu"
      role="button"
      data-bs-toggle="dropdown"
      onClick={handleServiceClick}
    >
      Services
    </a>
    )}




        <ul className="dropdown-menu" aria-labelledby="educationDropdown">
        {/* Crypto Asset Management Description */}
        <li className="dropdown-header">
          <strong>Our services</strong>
          <p className="dropdown-description limited-width">
          Explore our range of services designed to help you manage, grow, and secure your digital assets effectively.
          </p>
          <hr className="dropdown-divider" />
        </li>

        {/* Service Links */}
        <li>
  {isMobile ? (
    <span
      className="dropdown-item link"
      onClick={() => handleLinkClick("/Digital")}
    >
      Strategic Digital Asset Advisory
    </span>
  ) : (
    <Link className="dropdown-item link" to="/Digital">
      Strategic Digital Asset Advisory
    </Link>
  )}
</li>

<li>
  {isMobile ? (
    <span
      className="dropdown-item link"
      onClick={() => handleLinkClick("/preiso")}
    >
      Pre-ICO Deals
    </span>
  ) : (
    <Link className="dropdown-item link" to="/preiso">
      Pre-ICO Deals
    </Link>
  )}
</li>

<li>
  {isMobile ? (
    <span
      className="dropdown-item link"
      onClick={() => handleLinkClick("/iso")}
    >
      ICO & Token Management Services
    </span>
  ) : (
    <Link className="dropdown-item link" to="/iso">
      ICO & Token Management Services
    </Link>
  )}
</li>

<li>
{isMobile ? (
                <span
                  className="dropdown-item link"
                  onClick={() => handleLinkClick("/family")}
                >
                  Family Crypto Saving Program
                </span>
              ) : (
                <Link className="dropdown-item link" to="/family">
                  Family Crypto Saving Program
                </Link>
              )}
</li>
<li>
{isMobile ? (
      <span
        className="dropdown-item link"
        onClick={() => handleLinkClick("/Forensic")}
      >
        Forensic Service
      </span>
    ) : (
      <Link className="dropdown-item link" to="/Forensic">
        Forensic Service
      </Link>
    )}
</li>
      </ul>
        </li>
        <li className="nav-item">
        {isMobile ? (
            <a
            className="nav-link dropdown-toggle"
            href="kjk"
            id="educationtopmenu"
            role="button"
            data-bs-toggle="dropdown"
            
          >
            Educationd
          </a>
    ) : (
      <a
      className="nav-link dropdown-toggle"
      href="kjk"
      id="educationtopmenu"
      role="button"
      data-bs-toggle="dropdown"
      onClick={handleGetStartedClick}
    >
      Educationd
    </a>
    )}

          
        <ul className="dropdown-menu" aria-labelledby="educationDropdown">
        {/* Crypto Asset Management Description */}
        <li className="dropdown-header">
          <strong className='topmenus'><Link to="/education" className='topmenus'>Education</Link></strong>
          <p className="dropdown-description limited-width">
          Explore our education programs to empower you with the knowledge to navigate the digital asset landscape.
          </p>
          <hr className="dropdown-divider" />
        </li>

        {/* Service Links */}

        <li>
  {isMobile ? (
    <span
      className="dropdown-item link"
      onClick={() => handleLinkClick("/educationcertificate")}
    >
      Certified Crypto Expert Course
    </span>
  ) : (
    <Link className="dropdown-item link" to="/educationcertificate">
      Certified Crypto Expert Course
    </Link>
  )}
</li>

<li>
  {isMobile ? (
    <span
      className="dropdown-item link"
      onClick={() => handleLinkClick("/BlockchainApplicationCourses")}
    >
      Blockchain Application Course
    </span>
  ) : (
    <Link className="dropdown-item link" to="/BlockchainApplicationCourses">
      Blockchain Application Course
    </Link>
  )}
</li>

<li>
  {isMobile ? (
    <span
      className="dropdown-item link"
      onClick={() => handleLinkClick("/WEB3")}
    >
      Web 3.0 Power Sessions
    </span>
  ) : (
    <Link className="dropdown-item link" to="/WEB3">
      Web 3.0 Power Sessions
    </Link>
  )}
</li>

<li>
  {isMobile ? (
    <span
      className="dropdown-item link"
      onClick={() => handleLinkClick("/")}
    >
      Self-Study Online Program
    </span>
  ) : (
    <Link
      className="dropdown-item link"
      to="/"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-expanded="false"
    >
      Self-Study Online Program
    </Link>
  )}
</li>

<li>
  {isMobile ? (
    <span
      className="dropdown-item link"
      onClick={() => handleLinkClick("/swis")}
    >
      Swisscom Education Program
    </span>
  ) : (
    <Link className="dropdown-item link" to="/swis">
      Swisscom Education Program
    </Link>
  )}
</li>


      </ul>
        </li>
        <li className="nav-item">
      {isMobile ? (
            <a
            className="nav-link dropdown-toggle"
            href="kjk"
            id="sw3ctopmenu"
            role="button"
            data-bs-toggle="dropdown"
            
          >
            sw3c
          </a>
    ) : (
      <a
      className="nav-link dropdown-toggle"
      href="kjk"
      id="sw3ctopmenu"
      role="button"
      data-bs-toggle="dropdown"
      onClick={handleWSClick}
    >
      sw3c
    </a>
    )}
      <ul className="dropdown-menu" aria-labelledby="educationDropdown">
        <li className="dropdown-header">
          <strong></strong>
          <strong className='topmenus'><Link to="/homeWS" className='topmenus'>Strategic Web 3.0 Consultancy</Link></strong>
          <p className="dropdown-description limited-width">
            Empowering your digital journey with innovative solutions in ICO setup, tokenization, custody, payments, and metaverse technologies.
          </p>
          <hr className="dropdown-divider" />
        </li>

        <li>
  {isMobile ? (
    <span
      className="dropdown-item link"
      onClick={() => handleLinkClicks("strategic-ico-execution")}
    >
      Strategic ICO Execution
    </span>
  ) : (
    <Link 
      className="dropdown-item link" 
      to="/WS" 
      state={{ cardId: "strategic-ico-execution" }}
    >
      Strategic ICO Execution
    </Link>
  )}
</li>


<li>
  {isMobile ? (
    <span
      className="dropdown-item link"
      onClick={() => handleLinkClicks("ico-setup-fundraising")}
    >
      ICO Set-Up and Fundraising
    </span>
  ) : (
    <Link className="dropdown-item link" to="/WS" state={{ cardId: "ico-setup-fundraising" }}>
      ICO Set-Up and Fundraising
    </Link>
  )}
</li>

<li>
  {isMobile ? (
    <span
      className="dropdown-item link"
      onClick={() => handleLinkClicks("rwa-tokenization")}
    >
      RWA Tokenization as a Service
    </span>
  ) : (
    <Link className="dropdown-item link" to="/WS" state={{ cardId: "rwa-tokenization" }}>
      RWA Tokenization as a Service
    </Link>
  )}
</li>

<li>
  {isMobile ? (
    <span
      className="dropdown-item link"
      onClick={() => handleLinkClicks("custody-payments")}
    >
      Custody & Payment Solutions
    </span>
  ) : (
    <Link className="dropdown-item link" to="/WS" state={{ cardId: "custody-payments" }}>
      Custody & Payment Solutions
    </Link>
  )}
</li>

<li>
  {isMobile ? (
    <span
      className="dropdown-item link"
      onClick={() => handleLinkClicks("metaverse-solutions")}
    >
      Metaverse Solutions
    </span>
  ) : (
    <Link className="dropdown-item link" to="/WS" state={{ cardId: "metaverse-solutions" }}>
      Metaverse Solutions
    </Link>
  )}
</li>


        
      </ul>
    </li>
        <li className="nav-item">

          {isMobile ? (
            <a
            className="nav-link dropdown-toggle"
            href="kjk"
            id="ptgrDropdown"
            role="button"
            data-bs-toggle="dropdown"
            
          >
            PTGR Token
          </a>
    ) : (
      <a
      className="nav-link dropdown-toggle"
      href="kjk"
      id="ptgrDropdown"
      role="button"
      data-bs-toggle="dropdown"
      onClick={handlePTGRClick}
    >
      PTGR Token
    </a>
    )}
        <ul className="dropdown-menu" aria-labelledby="educationDropdown">
        {/* Crypto Asset Management Description */}
        <li className="dropdown-header">
          <strong>PTGR Token</strong>
          <p className="dropdown-description limited-width">
          Invest in the PTGR Token and join a professionally managed opportunity in the crypto world, designed to deliver profitability and long-term growth through innovative blockchain solutions.
          </p>
          <hr className="dropdown-divider" />
        </li>


<li>
  {isMobile ? (
    <span
      className="dropdown-item link"
      onClick={() => handleLinkClick("/PTGRToken")}
    >
      PTGR Token Investment
    </span>
  ) : (
    <Link className="dropdown-item link" to="/PTGRToken">
      PTGR Token Investment
    </Link>
  )}
</li>
<li>
  <Link className="dropdown-item link" to="/" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false">
  PTGR Token Community
  </Link>
</li>
<li>
  <Link className="dropdown-item link" to="/" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false">
  PTGR Token Game
  </Link>
</li>

      </ul>
        </li>
        <li className="nav-item">

          {isMobile ? (
            <a
            className="nav-link dropdown-toggle"
            href="kjk"
            id="aboutustopmenu"
            role="button"
            data-bs-toggle="dropdown"
            
          >
            About us
          </a>
    ) : (
      <a
      className="nav-link dropdown-toggle"
      href="kjk"
      id="aboutustopmenu"
      role="button"
      data-bs-toggle="dropdown"
      onClick={handleAboutClick}
    >
      About us
    </a>
    )}
        <ul className="dropdown-menu" aria-labelledby="educationDropdown">
        {/* Crypto Asset Management Description */}
        <li className="dropdown-header">
          <strong>About PTGR AG</strong>
          <p className="dropdown-description limited-width">
          Discover our mission to drive innovation in blockchain and crypto, with professional management of the PTGR Token for profitable investments.
          </p>
          <hr className="dropdown-divider" />
        </li>

        <li>
  {isMobile ? (
    <span
      className="dropdown-item link"
      onClick={() => handleLinkClick("/Aboutus")}
    >
      Who we are
    </span>
  ) : (
    <Link className="dropdown-item link" to="/Aboutus">
      Who we are
    </Link>
  )}
</li>

<li>
  {isMobile ? (
    <span
      className="dropdown-item link"
      onClick={() => handleLinkClick("/JobPage")}
    >
      Jobs
    </span>
  ) : (
    <Link className="dropdown-item link" to="/JobPage">
      Jobs
    </Link>
  )}
</li>

<li>
  {isMobile ? (
    <span
      className="dropdown-item link"
      onClick={() => handleLinkClick("/Events")}
    >
      Events
    </span>
  ) : (
    <Link className="dropdown-item link" to="/Events">
      Events
    </Link>
  )}
</li>

<li>
  {isMobile ? (
    <span
      className="dropdown-item link"
      onClick={() => handleLinkClick("/blogmenu")}
    >
      Blogs
    </span>
  ) : (
    <Link className="dropdown-item link" to="/blogmenu">
      Blogs
    </Link>
  )}
</li>

<li>
  {isMobile ? (
    <span
      className="dropdown-item link"
      onClick={() => handleLinkClick("/")}
    >
      Media
    </span>
  ) : (
    <Link className="dropdown-item link" to="/">
      Media
    </Link>
  )}
</li>


      </ul>
        </li>
      </ul>
      

    </div>
    <div className='headerbuttonholder'>
 
       <Link to="/ContactUsForm" >
       <button class="btnheader btn-success">Contact Us</button>
          </Link>
</div>
  </div>

</nav>

    </div>
  );
}

export default Header;
