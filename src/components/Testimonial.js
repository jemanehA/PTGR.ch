import React, { useState, useEffect } from 'react';
import '../styles/Testimonial.css';

const ClientTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Impressively simple onboarding and pleasant support. The PTGR team has exceeded my expectations in the crypto space. Transparent communication, professional strategies - my trust is high. I am happy to recommend them.",
      name: "Benjamin Waldmeier",
      role: "Zürich",
      image: "/assets/images/Benjamin.png"
    },
    {
      id: 2,
      quote: "PGTR AG introduced me to the crypto finance market with exceptional expertise. Their team provides tailored advice, and their training benefits both beginners and experienced traders. I'm happy to partner with them and look forward to continued success.",
      name: "Josip",
      role: "Zürich",
      image: "/assets/images/Josip.png"
    },
    {
      id: 3,
      quote: "PTGR enables me to invest professionally in crypto with expert support. My advisor collaborates with PTGR specialists, boosting my confidence in digital investments. I highly recommend them and have even suggested tokenizing a friend's vineyard.",
      name: "Luca Chiappori",
      role: "Sardinien",
      image: "/assets/images/Luca.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section 
      className="testimonialSection"
      style={{
        backgroundImage: "url('/assets/images/swissback.jpg')",
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 mx-auto">
            <h2 className="sectionTitle mb-5 text-center">What Clients Say About Us</h2>
            
            <div className="carouselWrapper">
              <div className="slidesContainer" style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="testimonialItem">
                    <div className="testimonialContent">
                      <div className="quoteIcon">
                        <img src="/assets/images/quote.png" alt="quote" />
                      </div>
                      <p className="testimonialText">{testimonial.quote}</p>
                      <div className="clientInfo">
                        <div className="clientImage">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="img-fluid"
                          />
                        </div>
                        <div className="clientDetails">
                          <h3 className="clientName">{testimonial.name}</h3>
                          <p className="clientRole">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="navigationDots">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    className={`dot ${idx === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;