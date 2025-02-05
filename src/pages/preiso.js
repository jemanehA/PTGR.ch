import React, { useEffect } from 'react';
import PREISOO from '../components/PreIcoDeals';
const PREISO = () => {
    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);
  return (
    <div>
    <PREISOO/>
    </div>
  );
};

export default PREISO;
