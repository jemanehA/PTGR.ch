import React, { useState,useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/eventdetail.css";

const EventDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const { event } = location.state || {}; // Extract the event data from state
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [registrationMessage, setRegistrationMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setRegistrationStatus(null);
    setRegistrationMessage("");

    try {
      const response = await fetch(
        `https://email.ptgr-test.com/event.php?email=${encodeURIComponent(email)}`,
        {
          method: "GET", // Use GET method as required by the API
        }
      );

      const result = await response.json(); // Parse the JSON response

      if (result.status === "success") {
        setRegistrationStatus("success");
        setRegistrationMessage(result.message); // Display the success message
      } else {
        setRegistrationStatus("error");
        setRegistrationMessage(result.message || "Registration failed. Please try again."); // Display the error message
      }
    } catch (error) {
      setRegistrationStatus("error");
      setRegistrationMessage("An error occurred. Please try again."); // Handle network or other errors
    } finally {
      setLoading(false);
    }
  };

  // If no event data is found, show an error message
  if (!event) {
    return <div className="error-message">Event not found.</div>;
  }

  return (
    <div className="event-detail-container">
      {/* Back to Events Link */}
      <div className="breadcrumb">
        <Link to="/">Home</Link>&nbsp;&gt;&nbsp;<Link to="/events">All Events</Link>&nbsp;&gt;&nbsp;{event.title}
      </div>

      {/* Event Hero Section */}
      <div className="event-hero">
        <div className="hero-image-container">
          <img src={event.image} alt={event.title} className="hero-image" />
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

      {/* Event Content */}
      <div className="event-content-wrapper">
        {/* Main Content */}
        <div className="event-main-content">
          {/* Event Description */}
          <section className="event-description">
            <h2>Event Overview</h2>
            <p className="description-text">{event.detailedDescription}</p>
          </section>

          {/* Event Schedule */}
          <section className="event-schedule">
            <h2>Event Schedule</h2>
            <div className="schedule-grid">
              {event.schedule.map((item, index) => (
                <div key={index} className="schedule-item">
                  <span className="schedule-time">{item.time}</span>
                  <span className="schedule-activity">{item.activity}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="event-sidebar">
          {/* Event Highlights */}
          <div className="highlight-card">
            <h3>Event Highlights</h3>
            <ul className="highlight-list">
              {event.eventHighlights.map((highlight, index) => (
                <li key={index} className="highlight-item">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Registration Form */}
          <div className="registration-card">
            <h3>Secure Your Spot</h3>
            <p>Limited seats available. Register now to guarantee your participation.</p>
            <form className="registration-form" onSubmit={handleRegister}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" disabled={loading}>
                {loading ? "Registering..." : "Register Now"}
              </button>
              {registrationStatus === "success" && (
                <div className="registration-success">{registrationMessage}</div>
              )}
              {registrationStatus === "error" && (
                <div className="registration-error">{registrationMessage}</div>
              )}
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default EventDetail;