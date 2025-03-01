import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Header1 from './components/Header1';
import Footer from './components/Footer';
import Footer1 from './components/Footer1';
import Home from './pages/home';
import CPM from './pages/cpm';
import PSRO from './pages/sro';
import CourseDetails from './components/CourseDetails';
import Performance from './pages/performance';
import Digital from './pages/digitalasset';
import Service from './pages/digitalasset';
import Forensic from './pages/Forensic';
import ISO from './pages/iso';
import PREISOS from './pages/preiso';
import CRYD from './pages/crypo';
import WEB3 from './pages/web3';
import About from './pages/Aboutus';
import Family from './pages/Family';

import WS from './components/isows'
import Eventlist from './components/Eventlist';
import WS1 from './pages/WS1';
import ISOsetup from './pages/ICOSetup';
import Metaverspage from './pages/metaverspage';
import CustodyPag from './pages/custodypage';
import TokenizatoPage from './pages/tokenizationpage';
import JobPage from './pages/Jobs';
import Event from './pages/Event';
import News from './pages/News';
import Blockchain from './pages/Blockchain';
import Swis from './pages/Swiscom';
import SelfStudy from './components/selfstudy';
import Blogs from './components/Blogs';
import BlogDetail from './components/BlogDetail';
import TermsAndConditions from './components/TermsAndConditions';
import CookiePolicy from './components/CookiePolicy';
import DataPolicy from './components/Datapolicy';
import Disclaimer from './components/Disclaimer';
import Imprint from './components/Imprint';
import Partners from './components/Partners';
import PaymentDetails from './components/PaymentDetails';
import VerifyEmail from './components/VerifyEmail';
import ChatBox from './components/ChatBox';
import CursorFollower from './components/CursorFollower';
import ContactUsForm from './components/ContactForm';
import BookConsultations from './components/BookConsultations';
import Web3cards from './components/web3cards';
import BusinessAnalytics from './components/BusinessAnalytics';
import DigitalWealthManagement from './components/DigitalWealthManagement';
import Blockchainpage from './components/Blockchainpage';
import Education from './components/Education';
import PaymentForm from './components/PaymentForm';
import BlogsMain from './components/Blogsmain';
import EventDetail from './components/EventDetail';
import ServiceDetail from './components/ServiceDetail';
import Bloglist from './components/Bloglist';
import NewsHome from './components/NewsHome';
import PTGRToken from './pages/PTGRtoken';
import TestPaypal from './pages/test';

import './styles/force.css';
import './crypto.css';

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState('password');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const togglePassword = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const correctPassword = process.env.REACT_APP_PASSWORD || 'PTGR@321'; // Use environment variable
    if (password === correctPassword) {
      onLogin(true);
      navigate('/');
    } else {
      setErrorMessage('Invalid password');
    }
  };

  return (
    <div
    className="login_area"
    style={{
      backgroundImage: "url('/assets/images/swissback.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}
    
  >
    <div className="logincontainer">
      <div className="container text-center mt-5">
        <div className='logincon'>
        <h2 className="wearecoming">We're Almost There!</h2>
        <p className="underconstruction">Our page is under construction to bring you a better experience. Stay tuned!</p>
        <div className="card mx-auto show" id="loginForm">
          <h3 className="hh">Login</h3>
          <form onSubmit={handleLogin}>
            <div className="mb-3 text-start">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-group">
                <input
                  type={passwordType}
                  name="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="input-group-text" style={{ cursor: 'pointer' }} onClick={togglePassword}>
                  <i className={`fas ${passwordType === 'password' ? 'fa-eye' : 'fa-eye-slash'}`} />
                </span>
              </div>
              {errorMessage && <p className="text-danger mt-2">{errorMessage}</p>}
            </div>
            <button type="submit" className="btn-custom w-100">Login</button>
          </form>
        </div>
      </div></div>
    </div></div>
  );
};

const PrivateRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isLoginPage = window.location.pathname === '/login';
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  const handleLogin = (authStatus) => {
    setIsAuthenticated(authStatus);
  };

  const routes = [
    { path: '/', element: <Home /> },
    { path: '/de', element: <Home /> },
    { path: '/cpm', element: <CPM /> },
    { path: '/sro', element: <PSRO /> },
    { path: '/performance', element: <Performance /> },
    { path: '/education', element: <Education /> },
    { path: '/forensic', element: <Forensic /> },
    { path: '/iso', element: <ISO /> },
    { path: '/BusinessAnalytics', element: <BusinessAnalytics /> },
    { path: '/DigitalWealthManagement', element: <DigitalWealthManagement /> },
    { path: '/BlockchainApplicationCourses', element: <Blockchainpage /> },
    { path: '/Web3cards', element: <Web3cards /> },
    { path: '/preiso', element: <PREISOS /> },
    { path: '/educationcertificate', element: <CRYD /> },
    { path: '/web3', element: <WEB3 /> },
    { path: '/Aboutus', element: <About /> },
    
    { path: '/Digital', element: <Digital /> },
    { path: '/Service', element: <Service /> },
    { path: '/family', element: <Family /> },
    { path: '/isosetup', element: <ISOsetup /> },
    { path: '/metaVereage', element: <Metaverspage /> },
    { path: '/custodyage', element: <CustodyPag /> },
    { path: '/Tokenizatoage', element: <TokenizatoPage /> },
    { path: '/JobPage', element: <JobPage /> },
    { path: '/WS', element: <WS /> },
    { path: '/homeWS', element: <WS1 /> },
    { path: '/eventlist', element: <Eventlist /> },
    { path: '/PTGRToken', element: <PTGRToken /> },
    { path: '/Events', element: <Event /> },
    { path: '/payment', element: <PaymentForm /> },
    { path: '/course-details', element: <CourseDetails /> },
    { path: '/news', element: <News /> },
    { path: '/blockchain', element: <Blockchain /> },
    { path: '/swis', element: <Swis /> },
    { path: '/blogs', element: <Blogs /> },
    { path: '/Terms', element: <TermsAndConditions /> },
    { path: '/CookiePolicy', element: <CookiePolicy /> },
    { path: '/Datapolicy', element: <DataPolicy /> },
    { path: '/Disclaimer', element: <Disclaimer /> },
    { path: '/Imprint', element: <Imprint /> },
    { path: '/Partners', element: <Partners /> },
    { path: '/SelfStudy', element: <SelfStudy /> },
    
    { path: '/payment-details', element: <PaymentDetails /> },
    { path: '/verify-email', element: <VerifyEmail /> },
    { path: '/ContactUsForm', element: <ContactUsForm /> },
    { path: '/BookConsultations', element: <BookConsultations /> },
  ];

  return (
    <Router>
      <div className="app-container">
        <Header ref={headerRef} />
        <div className="main-content" style={{ paddingTop: `${headerHeight}px` }}>
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/CursorFollower" element={<CursorFollower />} />
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  route.private ? (
                    <PrivateRoute
                      element={route.element}
                      isAuthenticated={isAuthenticated}
                    />
                  ) : (
                    route.element
                  )
                }
              />
            ))}
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/ServiceDetail" element={<ServiceDetail />} />
            <Route path="/blogmenu" element={<BlogsMain />} />
            <Route path="/Bloglist" element={<Bloglist />} />
            <Route path="/NewsHome" element={<NewsHome />} />
            
            <Route path="/paypaltest" element={<TestPaypal />} />
            <Route path="/event/:id" element={<EventDetail />} />
          </Routes>
        </div>
         <Footer />
        
        <ChatBox />
      </div>
    </Router>
  );
};

export default App;