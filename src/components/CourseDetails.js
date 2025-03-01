import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/CourseDetails.css';
import '../styles/schedule.css';

const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [showVideo, setShowVideo] = useState(false);
  const location = useLocation();
  const course = location.state?.course;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setShowVideo(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const handleBookNow = () => {
    navigate('/payment', {
      state: {
        course,
        price: course.price || 2650,
      },
    });
  };

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  if (!course) {
    return <div>No course data available. <Link to="/">Go back to Home</Link></div>;
  }

  const DetailColumn = ({ value, label }) => (
    <div className="detail-column">
      <span className="detail-value">{value}</span>
      {label && <span className="detail-label">{label}</span>}
    </div>
  );

  DetailColumn.propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string,
  };

  const renderTabContent = (content) => {
    if (Array.isArray(content)) {
      return (
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p>{content}</p>;
  };

  return (
    <div className="course-details-container">
            <div className="breadcrumb">
        <Link to="/">Home</Link>&nbsp;&gt;&nbsp;<Link to="/education">Education</Link>&nbsp;<span className='separators'>&gt;&nbsp;</span>{course.title}
      </div><br></br>
      {/* Hero Section with Full-Width Image */}
      <div className="hero-section" style={{ backgroundImage: "url(/assets/images/blockchainn.jpeg)" }}>
        <div className="hero-content">
          <div className="hero-text">
            <h1>{course.title}</h1>
            <p>{course.overview}</p>
          </div>
          <div className='videocontainer'>
          <button className="watch-video-button" onClick={toggleVideo}>
            <span className="video-icon"></span> Watch Video
          </button>
          </div>
        </div>
      </div>
      <div className='videocontainer'>
      {/* Video Popup */}
      {showVideo && (
        <div className="video-popup-overlay">
  <div className="video-popup">
    <button className="close-button" onClick={toggleVideo} aria-label="Close video"></button>
    <div className="video-container">
      <iframe
        src={course.videoUrl}
        title="Course Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</div>
)}
</div>
      {/* Breadcrumb Navigation */}


      {/* Course Overview */}
      <div className="course-overview">
        <div className="course-meta">
          <span className="instructor">
            <img
              src={course.instructorIcon || '/assets/images/logocut.png'}
              alt="Instructor Icon"
              className="instructor-icon"
            />
            Instructor: {course.instructor}
          </span>
        </div>
        <div className="course-actions">
          <button className="enroll-button" onClick={handleBookNow}>Book Now</button>
          <span className="enrollment">{course.enrollmentCount} already Booked</span>
        </div>

        {/* Course Details Box */}
        <div className="course-details-box">
          <DetailColumn value={course.rating} label={course.ratingLabel} />
          <div className="vertical-line"></div>
          <DetailColumn value={course.level} label={course.levelLabel} />
          <div className="vertical-line"></div>
          <DetailColumn value={course.duration} />
          <div className="vertical-line"></div>
          <DetailColumn value={course.pacing} label={course.pacingLabel} />
        </div>
      </div>

      {/* Tabbed Navigation */}
      <div className="tabbed-navigation">
        {course.tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {course.tabs.map((tab) => (
          activeTab === tab.id && (
            <div key={tab.id} className='tab-section'>
              <h2>{tab.label}</h2>
              {renderTabContent(tab.content)}
            </div>
          )
        ))}
      </div>

      {/* Certification and Fees Section */}
      <div className="certification-fees-section">
        <div className="certification">
          <h2>Certification</h2>
          <p>{course.certification}</p>
        </div>
        <div className="fees">
          <h2>Fees</h2>
          <p>{ReactHtmlParser(course.feesDesc)}</p>
        </div>
      </div>

      {/* Schedule Section */}
      { <div className='tab-content'>
        <h2 className="schedule-heading">Schedule</h2>
              <p style={{textAlign:'left'}}>All courses are held individually, at most once per quarter, provided that at least five participants have enrolled.</p>
      </div> }
    </div>
  );
};

CourseDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      course: PropTypes.shape({
        title: PropTypes.string.isRequired,
        videoUrl: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        instructor: PropTypes.string.isRequired,
        instructorIcon: PropTypes.string,
        enrollmentCount: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        ratingLabel: PropTypes.string,
        level: PropTypes.string.isRequired,
        levelLabel: PropTypes.string,
        duration: PropTypes.string.isRequired,
        pacing: PropTypes.string.isRequired,
        pacingLabel: PropTypes.string,
        tabs: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            content: PropTypes.oneOfType([
              PropTypes.string,
              PropTypes.arrayOf(PropTypes.string),
            ]).isRequired,
          })
        ).isRequired,
        certification: PropTypes.string.isRequired,
        fees: PropTypes.string.isRequired,
        heroImage: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default CourseDetails;