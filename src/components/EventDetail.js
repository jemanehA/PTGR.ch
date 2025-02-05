import React, {useEffect} from "react";
import { useLocation, Link } from "react-router-dom";
import '../styles/eventdetail.css';

const EventDetail = () => {
  const location = useLocation();
  const { event } = location.state || {};
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [event]); // Re-run when event changes

  if (!event) {
    return <div className="error-message">Event not found.</div>;
  }

  const eventHighlights = [
    "Keynote speeches from industry leaders",
    "Interactive workshops",
    "Networking opportunities",
    "Live Q&A sessions",
    "Exclusive content reveals"
  ];

  const schedule = [
    { time: "09:00 AM", activity: "Registration & Breakfast" },
    { time: "10:00 AM", activity: "Opening Keynote" },
    { time: "11:30 AM", activity: "Breakout Sessions" },
    { time: "01:00 PM", activity: "Lunch & Networking" },
    { time: "02:30 PM", activity: "Panel Discussions" },
  ];

  return (
    <div className="event-detail-container">
      <div className="back-to-events">
        <Link to="/eventlist" className="back-button">
          &larr; Back to Events
        </Link>
      </div>

      <div className="event-hero">
        <div className="hero-image-container">
          <img 
            src={event.image} 
            alt={event.title} 
            className="hero-image" 
          />
          <div className="hero-overlay">
            <div className="hero-content-bottom">
              <h1 className="hero-title">{event.title}</h1>
              <div className="hero-meta">
                <span className="hero-date">{event.date}</span>
                <span className="hero-location">{event.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="event-content-wrapper">
        <div className="event-main-content">
          <section className="event-description">
            <h2>Event Overview</h2>
            <p className="description-text">{event.detailedDescription}</p>
          </section>

          <section className="event-schedule">
            <h2>Event Schedule</h2>
            <div className="schedule-grid">
              {schedule.map((item, index) => (
                <div key={index} className="schedule-item">
                  <span className="schedule-time">{item.time}</span>
                  <span className="schedule-activity">{item.activity}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="event-sidebar">
          <div className="highlight-card">
            <h3>Event Highlights</h3>
            <ul className="highlight-list">
              {eventHighlights.map((highlight, index) => (
                <li key={index} className="highlight-item">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="registration-card">
            <h3>Secure Your Spot</h3>
            <p>Limited seats available. Register now to guarantee your participation.</p>
            <form className="registration-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Register Now</button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default EventDetail;