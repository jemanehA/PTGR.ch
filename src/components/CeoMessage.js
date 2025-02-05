import React from 'react';
import { motion } from 'framer-motion'; // For smooth animations
import '../styles/CeoMessage.css'; // Assuming you have a CSS file for styling

const CeoMessage = () => {
  // Hardcoded values inside the component
  const imageUrl = "../assets/images/pan-final.jpg.webp";
  const quote = "The path to success is always a path of passion, people, and performance.";
  const author = "Dr. Pan Grosse-Ruyken, CEO of PTGR AG";

  return (
    <div className=''>
    <motion.div 
      className="quote-card" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <div className="quote-card-inner">
        <div className="quote-card-image">
          <img src={imageUrl} alt="Background" />
        </div>
        <div className="quote-card-content">
          <p className="quote">{quote}</p>
          <p className="author">- {author}</p>
        </div>
      </div>
    </motion.div></div>
  );
};

export default CeoMessage;
