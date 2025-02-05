import React, { useEffect } from 'react';
import Swiscom from '../components/swiscompage';
const Swis = () => {
    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);
  return (
    <div>
    <Swiscom/>
    </div>
  );
};

export default Swis;
