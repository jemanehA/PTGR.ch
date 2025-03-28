import React, { useEffect, useRef } from 'react';
import ForensicServices from '../components/isows';
import Isouws from '../components/isosetupcomponnent';
import Tokn from '../components/Tokenization';
import Custody from '../components/Custody';
import Metaverse from '../components/Metaverse';
const CustodyPag = () => {
  
  const perRef = useRef(null);

  useEffect(() => {
    // Scroll to the PER component when the page loads
    if (perRef.current) {
      perRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []); // Empty depen
  return (
    <div>
 
    <ForensicServices/>
    
    <Isouws/>
    <Tokn/>
    <div ref={perRef}><Custody/></div>
    <Metaverse/>
    </div>
  );
};

export default CustodyPag;
