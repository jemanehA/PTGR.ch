import React, { useEffect } from 'react';
import ForensicServices from '../components/Familycontent';
const Family = () => {
    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);
  return (
    <div>
    <ForensicServices/>
    </div>
  );
};

export default Family;
