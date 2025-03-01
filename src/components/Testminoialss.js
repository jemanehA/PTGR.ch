import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/testimonialss.css';

const testimonials = [
  {
    text: "Impressively simple onboarding and pleasant support. The PTGR team has exceeded my expectations in the crypto space. Transparent communication, professional strategies - my trust is high. I am happy to recommend them.",
    name: "Benjamin Waldmeier",
    role: "Zürich",
    image: "/assets/images/Benjamin.png",
  },
  {
    text: "PGTR AG introduced me to the crypto finance market with exceptional expertise. Their team provides tailored advice, and their training benefits both beginners and experienced traders. I'm happy to partner with them and look forward to continued success.",
    name: "Josip",
    role: "Zürich",
    image: "/assets/images/Josip.png",
  },
  {
    text: "PTGR enables me to invest professionally in crypto with expert support. My advisor collaborates with PTGR specialists, boosting my confidence in digital investments. I highly recommend them and have even suggested tokenizing a friend's vineyard.",
    name: "Luca Chiappori",
    role: "Sardinien",
    image: "/assets/images/Luca.png",
  },
];

const Testimonialss = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="testimonialSection"
      style={{
        backgroundImage: "url('/assets/images/swissback.jpg')",
        backgroundAttachment: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <div className="newtestimonial-container d-flex align-items-center justify-content-center col-12 col-md-8">
        <div className="newtestimonial-card p-4 rounded shadow text-center">
          <div className="newtestimonial-quote">&ldquo;</div>
          <p className="newtestimonial-text">{testimonials[currentIndex].text}</p>
          <div className="newtestimonial-profile mt-3">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="newtestimonial-avatar rounded-circle"
            />
            <h5 className="newtestimonial-name mt-2">{testimonials[currentIndex].name}</h5>
            <p className="newtestimonial-role">{testimonials[currentIndex].role}</p>
          </div>
          <div className="newtestimonial-indicators text-center mt-3">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`newtestimonial-dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonialss;