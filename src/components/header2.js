import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/livecrypto.css';

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // Handle resize event to determine if screen is mobile
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 868);
  };

  // Handle navigation for dropdown items
  const handleNavigation = (path) => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show'); // Close the navbar
    }
    navigate(path); // Navigate to the given path
  };

  // Fetch crypto data for the marquee
  const fetchCryptoData = () => {
    const marquee = document.getElementById('crypto-marquee');
    const loadingMessage = document.getElementById('loading-message');

    if (loadingMessage) {
      loadingMessage.style.display = 'block';
    }

    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1')
      .then((response) => {
        const data = response.data;
        let marqueeContent = '';

        data.forEach((crypto) => {
          const icon = crypto.price_change_percentage_24h >= 0 ? 'fa-arrow-up' : 'fa-arrow-down';
          const colorClass = crypto.price_change_percentage_24h >= 0 ? 'text-success' : 'text-danger';

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
          loadingMessage.style.display = 'none';
        }
      })
      .catch(() => {
        marquee.innerHTML = '<p class="text-danger">Failed to fetch data. Please try again later.</p>';
        if (loadingMessage) {
          loadingMessage.style.display = 'none';
        }
      });
  };

  useEffect(() => {
    handleResize(); // Initial check when the component mounts
    window.addEventListener('resize', handleResize);

    // Fetch crypto data when the component mounts
    fetchCryptoData();

    // Fetch data every minute
    const intervalId = setInterval(fetchCryptoData, 60000);

    // Cleanup event listener and interval on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(intervalId);
    };
  }, []);

  // Navigation items configuration
  const navItems = [
    {
      id: 'cam',
      label: 'CAM',
      path: '/cpm',
      dropdown: [
        { label: 'PTGR is a SRO', path: '/sro' },
        { label: 'PTGR Investment Strategies', path: '/cpm' },
      ],
    },
    {
      id: 'services',
      label: 'Services',
      path: '/Digital',
      dropdown: [
        { label: 'Strategic Digital Asset Advisory', path: '/Digital' },
        { label: 'Pre-ICO Deals', path: '/preiso' },
        { label: 'ICO & Token Management Services', path: '/iso' },
        { label: 'Family Crypto Saving Program', path: '/family' },
        { label: 'Forensic Service', path: '/Forensic' },
      ],
    },
    {
      id: 'education',
      label: 'Education',
      path: '/education',
      dropdown: [
        { label: 'Certified Crypto Expert Course', path: '/educationcertificate' },
        { label: 'Blockchain Application Course', path: '/BlockchainApplicationCourses' },
        { label: 'Web 3.0 Power Sessions', path: '/WEB3' },
        { label: 'Self-Study Online Program', path: '/' },
        { label: 'Swisscom Education Program', path: '/swis' },
      ],
    },
    {
      id: 'sw3c',
      label: 'SW3C',
      path: '/homeWS',
      dropdown: [
<li><Link className="dropdown-item" to={{ pathname: "/WS", state: { cardId: 'strategic-ico-execution' } }}>Strategic ICO Execution</Link></li>
<li><Link className="dropdown-item" to={{ pathname: "/WS", state: { cardId: 'ico-setup-fundraising' } }}>ICO Set-Up and Fundraising</Link></li>
<li><Link className="dropdown-item" to={{ pathname: "/WS", state: { cardId: 'rwa-tokenization' } }}>RWA Tokenization as a Service</Link></li>
<li><Link className="dropdown-item" to={{ pathname: "/WS", state: { cardId: 'custody-payments' } }}>Custody & Payment Solutions</Link></li>
<li><Link className="dropdown-item" to={{ pathname: "/WS", state: { cardId: 'metaverse-solutions' } }}>Metaverse Solutions</Link></li>

      ],
    },
    {
      id: 'ptgr',
      label: 'PTGR Token',
      path: '/PTGRToken',
      dropdown: [
        { label: 'PTGR Token Investment', path: '/PTGRToken' },
        { label: 'PTGR Token Community', path: '/' },
        { label: 'PTGR Token Game', path: '/' },
      ],
    },
    {
      id: 'about',
      label: 'About Us',
      path: '/Aboutus',
      dropdown: [
        { label: 'Who we are', path: '/Aboutus' },
        { label: 'Jobs', path: '/JobPage' },
        { label: 'Events', path: '/Events' },
        { label: 'Blogs', path: '/blogmenu' },
        { label: 'Media', path: '/' },
      ],
    },
  ];

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
            <img src="/assets/images/log.png" alt="Logo" className="logoimg" />
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
              {navItems.map((item) => (
                <li className="nav-item dropdown" key={item.id}>
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id={`${item.id}-dropdown`}
                    role="button"
                    data-bs-toggle="dropdown"
                    onClick={() => !isMobile && handleNavigation(item.path)}
                  >
                    {item.label}
                  </a>
                  <ul className="dropdown-menu" aria-labelledby={`${item.id}-dropdown`}>
                    {item.dropdown.map((dropdownItem) => (
                      <li key={dropdownItem.label}>
                        {isMobile ? (
                          <span
                            className="dropdown-item link"
                            onClick={() => handleNavigation(dropdownItem.path)}
                          >
                            {dropdownItem.label}
                          </span>
                        ) : (
                          <Link
                            className="dropdown-item link"
                            to={dropdownItem.path}
                          >
                            {dropdownItem.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <div className="headerbuttonholder">
              <Link to="/ContactUsForm">
                <button className="btnheader btn-success">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;