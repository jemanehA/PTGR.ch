import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import "../styles/EventsSection.css";

const EventsSection = () => {
  const location = useLocation();
  React.useEffect(() => {
    if (location.state?.scrollPos) {
      window.scrollTo(0, location.state.scrollPos);
    }
  }, [location.state]);
  const events = [
    {
      id: 1,
      title: "Minds of the Future Event",
      date: "January 15, 2025",
      location: "Zurich, Switzerland",
      description: "Connect with industry leaders and expand your professional network.",
      image: "/assets/images/event1.webp",
      detailedDescription: `
        Join us in Zurich for a groundbreaking event where industry pioneers discuss AI, quantum computing, 
        and sustainable tech. Includes workshops, keynote speeches, and networking sessions with global experts.
      `,
    },
    {
      id: 2,
      title: "Cryptocurrencies. NFTs. Metaverse.",
      date: "February 10, 2025",
      location: "Geneva, Switzerland",
      description: "Explore digital assets with top experts.",
      image: "/assets/images/event2.webp",
      detailedDescription: `
        A deep dive into blockchain technology, DeFi, and the Metaverse. Features live demos, 
        investor panels, and hands-on NFT creation workshops.
      `,
    },
    {
      id: 3,
      title: "HIC x PTGR AG Collaboration",
      date: "March 22, 2025",
      location: "Bern, Switzerland",
      description: "Innovative business collaborations unveiled.",
      image: "/assets/images/event3.webp",
      detailedDescription: `
        Witness the launch of a revolutionary partnership between HIC and PTGR AG, focusing on 
        AI-driven logistics and smart city solutions. Includes case studies and Q&A sessions.
      `,
    },
    {
      id: 4,
      title: "Digital Assets and the Future",
      date: "April 5, 2025",
      location: "Zurich, Switzerland",
      description: "Discuss digital finance evolution.",
      image: "/assets/images/event4.webp",
      detailedDescription: `
        A summit on tokenization, CBDCs, and regulatory frameworks. Attendees gain access to 
        exclusive market analysis reports and networking dinners.
      `,
    },
    {
      id: 5,
      title: "Meet & Greet in Bucharest",
      date: "May 18, 2025",
      location: "Bucharest, Romania",
      description: "Network with professionals in tech.",
      image: "/assets/images/event5.jpg",
      detailedDescription: `
        An intimate gathering for Eastern European tech leaders. Features lightning talks, 
        startup pitches, and mentorship matching.
      `,
    },
    {
      id: 6,
      title: "Meet & Greet in Oslo",
      date: "June 30, 2025",
      location: "Oslo, Norway",
      description: "Nordic tech community networking.",
      image: "/assets/images/event6.webp",
      detailedDescription: `
        Focus on green tech and Arctic innovation. Includes a guided tour of Oslo's tech hub 
        and a panel on sustainable AI.
      `,
    },
  ];

  return (
    <main className="event-section-container">
      <div className="container my-5">
        <h2 className="event-section-header text-center">Upcoming Events</h2>
        <div className="row">
          {events.map((event) => (
            <div key={event.id} className="col-md-4 mb-4">
              <Link to={`/event/${event.id}`} state={{ event }} className="event-card-link">
                <div className="event-card">
                  <img src={event.image} className="event-card-img" alt={event.title} />
                  <div className="event-card-body">
                    <h5 className="event-card-title">{event.title}</h5>
                    <p className="event-card-date">{event.date}</p>
                    <p className="event-card-location">{event.location}</p>
                    <p className="event-card-description">{event.description}</p>
                    <div className="event-card-actions">
                      <span className="ba-learn-more">Learn More →</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default EventsSection;