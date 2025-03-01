import React from 'react';
import { motion } from 'framer-motion'; // For smooth animations
import '../styles/CeoMessage.css'; // Assuming you have a CSS file for styling

const CeoMessage = () => {
  // Hardcoded values inside the component
  const imageUrl = "../assets/images/pan-final.jpg.webp";
  const quote = "The path to success is always a path of passion, people, and performance.";
  const author = "Dr. Pan Grosse-Ruyken, CEO and Founder of PTGR AG";

  return (
    <motion.div 
      className="ceo-message-container"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <div className="ceo-message-card">
        <div className="ceo-message-image">
          <img src={imageUrl} alt="Dr. Pan Grosse-Ruyken" />
        </div>
        <div className="ceo-message-content">
          <p className="ceo-message-quote">{quote}</p>
          <p className="ceo-message-author">- {author}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CeoMessage;