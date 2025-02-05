import React, { useEffect } from 'react';
import About from '../components/Aboutus1';
const Aboutt = () => {
    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);
  return (
    <div>
    <About/>
    </div>
  );
};

export default Aboutt;
