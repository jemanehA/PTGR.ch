import React, { useState, useRef, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/force.css';
import './crypto.css';
import Home from "./pages/home"


const CPM = lazy(() => import('./pages/cpm'));
const PSRO = lazy(() => import('./pages/sro'));
const CourseDetails = lazy(() => import('./components/CourseDetails'));
const Performance = lazy(() => import('./pages/performance'));
const Digital = lazy(() => import('./pages/digitalasset'));
const Service = lazy(() => import('./pages/digitalasset'));
const Forensic = lazy(() => import('./pages/Forensic'));
const ISO = lazy(() => import('./pages/iso'));
const PREISOS = lazy(() => import('./pages/preiso'));
const CRYD = lazy(() => import('./pages/crypo'));
const WEB3 = lazy(() => import('./pages/web3'));
const About = lazy(() => import('./pages/Aboutus'));
const Family = lazy(() => import('./pages/Family'));
const WS = lazy(() => import('./components/isows'));
const Eventlist = lazy(() => import('./components/Eventlist'));
const WS1 = lazy(() => import('./pages/WS1'));
const ISOsetup = lazy(() => import('./pages/ICOSetup'));
const Metaverspage = lazy(() => import('./pages/metaverspage'));
const CustodyPag = lazy(() => import('./pages/custodypage'));
const TokenizatoPage = lazy(() => import('./pages/tokenizationpage'));
const JobPage = lazy(() => import('./pages/Jobs'));
const Event = lazy(() => import('./pages/Event'));
const News = lazy(() => import('./pages/News'));
const Blockchain = lazy(() => import('./pages/Blockchain'));
const Swis = lazy(() => import('./pages/Swiscom'));
const SelfStudy = lazy(() => import('./components/selfstudy'));
const Blogs = lazy(() => import('./components/Blogs'));
const BlogDetail = lazy(() => import('./components/BlogDetail'));
const TermsAndConditions = lazy(() => import('./components/TermsAndConditions'));
const CookiePolicy = lazy(() => import('./components/CookiePolicy'));
const DataPolicy = lazy(() => import('./components/Datapolicy'));
const Disclaimer = lazy(() => import('./components/Disclaimer'));
const Imprint = lazy(() => import('./components/Imprint'));
const Partners = lazy(() => import('./components/Partners'));
const PaymentDetails = lazy(() => import('./components/PaymentDetails'));
const VerifyEmail = lazy(() => import('./components/VerifyEmail'));
const ChatBox = lazy(() => import('./components/ChatBox'));
const CursorFollower = lazy(() => import('./components/CursorFollower'));
const ContactUsForm = lazy(() => import('./components/ContactForm'));
const BookConsultations = lazy(() => import('./components/BookConsultations'));
const Web3cards = lazy(() => import('./components/web3cards'));
const BusinessAnalytics = lazy(() => import('./components/BusinessAnalytics'));
const DigitalWealthManagement = lazy(() => import('./components/DigitalWealthManagement'));
const Blockchainpage = lazy(() => import('./components/Blockchainpage'));
const Education = lazy(() => import('./components/Education'));
const PaymentForm = lazy(() => import('./components/PaymentForm'));
const BlogsMain = lazy(() => import('./components/Blogsmain'));
const EventDetail = lazy(() => import('./components/EventDetail'));
const ServiceDetail = lazy(() => import('./components/ServiceDetail'));
const Bloglist = lazy(() => import('./components/Bloglist'));
const NewsHome = lazy(() => import('./components/NewsHome'));
const PTGRToken = lazy(() => import('./pages/PTGRtoken'));
const TestPaypal = lazy(() => import('./pages/test'));

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
          </div>
        </div>
      </div>
    </div>
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
          <Suspense fallback={<div>Loading...</div>}>
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
          </Suspense>
        </div>
        <Footer />
        <Suspense fallback={<div>Loading...</div>}>
          <ChatBox />
        </Suspense>
      </div>
    </Router>
  );
};

export default App;