
import React, { useEffect } from 'react';
import MSRO from '../components/rsoheader';
const SRO = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <div>
    <MSRO/>
    </div>
  );
};

export default SRO;
