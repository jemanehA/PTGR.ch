import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/EventsSection.css";

const EventsSection = () => {
  const location = useLocation();

  // Scroll to the saved position when the component mounts
  React.useEffect(() => {
    if (location.state?.scrollPos) {
      window.scrollTo(0, location.state.scrollPos);
    }
  }, [location.state]);

  // List of events with unique eventHighlights and schedule
  const events = [
    {
      id: 7,
      title: "FINANZ '25",
      date: "02. - 03. April 2025",
      location: "26th Swiss Finance Fair for professional investors",
      description: "Connect with industry leaders and expand your professional network.",
      image: "/assets/images/fairevent.webp",
      detailedDescription: `
        Join us at the 26th Swiss Finance Fair for Professional Investors in Zurich!
        Engage with industry leaders as they explore AI, quantum computing, and sustainable finance.
        This premier event features insightful workshops, keynote speeches, and networking opportunities with global experts.
        Don't miss the chance to stay ahead in the evolving world of finance!
      `,
      eventHighlights: [
        "Keynote speeches from top financial leaders",
        "Interactive workshops on AI and quantum computing",
        "Networking with global investors",
        "Live Q&A sessions with experts",
        "Exclusive insights into sustainable finance",
      ],
      schedule: [
        { time: "09:00 AM", activity: "Registration & Breakfast" },
        { time: "10:00 AM", activity: "Opening Keynote" },
        { time: "11:30 AM", activity: "Breakout Sessions" },
        { time: "01:00 PM", activity: "Lunch & Networking" },
        { time: "02:30 PM", activity: "Panel Discussions" },
      ],
    },
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
      eventHighlights: [
        "Keynote speeches from tech pioneers",
        "Hands-on workshops on AI and quantum computing",
        "Networking with global tech leaders",
        "Live Q&A sessions with innovators",
        "Exclusive reveals of future technologies",
      ],
      schedule: [
        { time: "08:30 AM", activity: "Registration & Coffee" },
        { time: "09:00 AM", activity: "Opening Keynote" },
        { time: "10:30 AM", activity: "Tech Workshops" },
        { time: "12:30 PM", activity: "Lunch & Networking" },
        { time: "02:00 PM", activity: "Panel Discussions" },
      ],
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
      eventHighlights: [
        "Live demos of blockchain technology",
        "Expert panels on DeFi and NFTs",
        "Hands-on NFT creation workshops",
        "Networking with crypto pioneers",
        "Exclusive insights into the Metaverse",
      ],
      schedule: [
        { time: "09:00 AM", activity: "Registration & Welcome Coffee" },
        { time: "10:00 AM", activity: "Keynote: Future of Blockchain" },
        { time: "11:30 AM", activity: "Panel: DeFi Innovations" },
        { time: "01:00 PM", activity: "Lunch & Networking" },
        { time: "02:30 PM", activity: "Workshop: NFT Creation" },
      ],
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
      eventHighlights: [
        "Launch of HIC x PTGR AG partnership",
        "Case studies on AI-driven logistics",
        "Expert Q&A sessions",
        "Networking with industry leaders",
        "Exclusive insights into smart city solutions",
      ],
      schedule: [
        { time: "08:30 AM", activity: "Registration & Breakfast" },
        { time: "09:00 AM", activity: "Keynote: AI in Logistics" },
        { time: "10:30 AM", activity: "Case Study: Smart Cities" },
        { time: "12:00 PM", activity: "Lunch & Networking" },
        { time: "01:30 PM", activity: "Panel: Future of AI" },
      ],
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
      eventHighlights: [
        "Keynote speeches on tokenization",
        "Workshops on CBDCs and regulations",
        "Exclusive market analysis reports",
        "Networking dinners with industry leaders",
        "Panel discussions on digital finance",
      ],
      schedule: [
        { time: "09:00 AM", activity: "Registration & Coffee" },
        { time: "10:00 AM", activity: "Keynote: Tokenization Trends" },
        { time: "11:30 AM", activity: "Workshop: CBDCs Explained" },
        { time: "01:00 PM", activity: "Lunch & Networking" },
        { time: "02:30 PM", activity: "Panel: Regulatory Frameworks" },
      ],
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
      eventHighlights: [
        "Lightning talks by tech leaders",
        "Startup pitch sessions",
        "Mentorship matching",
        "Networking with Eastern European innovators",
        "Exclusive insights into regional tech trends",
      ],
      schedule: [
        { time: "08:30 AM", activity: "Registration & Coffee" },
        { time: "09:00 AM", activity: "Lightning Talks" },
        { time: "10:30 AM", activity: "Startup Pitches" },
        { time: "12:00 PM", activity: "Lunch & Networking" },
        { time: "01:30 PM", activity: "Mentorship Sessions" },
      ],
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
      eventHighlights: [
        "Guided tour of Oslo's tech hub",
        "Panel discussions on green tech",
        "Networking with Nordic innovators",
        "Exclusive insights into Arctic innovation",
        "Workshops on sustainable AI",
      ],
      schedule: [
        { time: "09:00 AM", activity: "Registration & Coffee" },
        { time: "10:00 AM", activity: "Guided Tour: Oslo Tech Hub" },
        { time: "11:30 AM", activity: "Panel: Green Tech Innovations" },
        { time: "01:00 PM", activity: "Lunch & Networking" },
        { time: "02:30 PM", activity: "Workshop: Sustainable AI" },
      ],
    },
  ];

  return (
    <main className="event-section-container">
      <div className="container my-5">
        <h2 className="event-section-header text-center">Upcoming Events</h2>
        <div className="row">
          {events.map((event) => (
            <div key={event.id} className="col-md-4 mb-4">
              <Link
                to={`/event/${encodeURIComponent(event.title)}`} // Use event title in the URL
                state={{ event, scrollPos: window.scrollY }} // Pass the entire event object
                className="event-card-link"
              >
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