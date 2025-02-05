import React, { useEffect, useRef } from 'react';
import ForensicServices from '../components/iows1';
import Isouws from '../components/isosetupcomponnent';
import Tokn from '../components/Tokenization';
import Custody from '../components/Custody';
import Metaverse from '../components/Metaverse';
const WS1 = () => {
  const perRef = useRef(null);

  useEffect(() => {
    // Scroll to the PER component when the page loads
    if (perRef.current) {
      perRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []); // Empty depen
  return (
    <div>
 <div ref={perRef}>
    <ForensicServices/>
   </div>
    </div>
  );
};

export default WS1;