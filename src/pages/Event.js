import React, { useEffect } from 'react';
import Jobs from '../components/EventComponent';
const Event = () => {
    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);
  return (
    <div>
    <Jobs/>
    </div>
  );
};

export default Event;
