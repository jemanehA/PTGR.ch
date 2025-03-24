import React, { useEffect, useState ,useRef} from 'react';
import '../styles/ServiceDetailView.css';
import { Link } from 'react-router-dom';

const ServiceDetailView = ({ service, onBack, onSelectService, services }) => {
  const [isExiting, setIsExiting] = useState(false);
  const backContainerRef = useRef(null); // Ref for the back container

  useEffect(() => {
    if (backContainerRef.current) {
      backContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [service]); // Trigger this effect whenever the `service` prop changes

  const handleBack = () => {
    setIsExiting(true);
    setTimeout(() => {
      onBack();
    }, 500); // Match the duration of the transition
  };
  return (
    <div>
            <div className="service-detail__back-container" ref={backContainerRef}>
        <button onClick={onBack} className="service-detail__back-button">
          ← Back to Membership
        </button>
      </div>
    
    <div className={`service-detail ${isExiting ? 'slide-out' : ''}`}>
      {/* Back Button at the Top */}


      {/* Main Content */}
      <div className="service-detail__content">
        <div className="service-detail__header">
          <h2 className="service-detail__title">{service.title}</h2>
          <p className="service-detail__description">{service.description}</p>
        </div>

        <div className="service-detail__body">


          {/* Additional Detail Content */}
          {service.detailContent && (
            <div
              className="service-detail__html-content"
              dangerouslySetInnerHTML={{ __html: service.detailContent }}
            />
          )}
          <div>


          {service.watermark && (
        <div className="watermark-container">
          <div className="watermark-title">High Watermark</div>
          <div className="watermark-content">
            <p>A High Watermark is the highest value an investment or fund reaches over a specific period. It's commonly used in hedge funds and investment management to determine performance fees. When the value exceeds the previous high, the fund manager may charge fees on the gains. This ensures managers are rewarded only after achieving new performance levels, aligning their interests with investors.</p>
          </div>
        </div>
      )}
          </div>

          {/* Client Testimonials Section */}
          <div className="service-detail__testimonials">



            <p style={{textAlign:'center'}}><strong>Note:</strong> Investment amount can be withdrawn or increased at any time </p>
          {/* <div className="">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-card">
            <p className="testimonial-text">
              "The {service.title} service was a game-changer for me. The team was incredibly knowledgeable and helped me navigate the crypto space with ease. Highly recommended!"
            </p>
            <p className="testimonial-author">- John Doe</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
              "I was hesitant at first, but the {service.title} service exceeded my expectations. The personalized approach made all the difference. Thank you!"
            </p>
            <p className="testimonial-author">- Jane Smith</p>
          </div>
        </div> */}

        {/* Book Consultation Button */}
        <div className="" style={{textAlign:'center'}}>
                  <Link to={`/BookConsultations?consultationType=${service.title}Strategic Digital Asset Advisory`}>
  <button className="cta-button">Request Consultation Now</button>
</Link>
        </div>
          </div>
        </div>
      </div>

      {/* Sidebar with Other Memberships */}
      <div className="service-detail__sidebar">
        <h3 className="service-detail__sidebar-title">Other Memberships</h3>
        <hr className="service-detail__sidebar-divider" />
        <ul className="service-detail__sidebar-list">
          {services.map((s, index) => (
            <li
              key={index}
              onClick={() => onSelectService(index)}
              className={`service-detail__sidebar-item ${
                s.title === service.title ? 'service-detail__sidebar-item--active' : ''
              }`}
              role="button"
              tabIndex={0}
              aria-label={`Select ${s.title} service`}
            >
              {s.title}
            </li>
          ))}
        </ul>
      </div>
    </div></div>
  );
};

export default ServiceDetailView;