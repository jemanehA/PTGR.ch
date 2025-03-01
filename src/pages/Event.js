import React, { useEffect } from 'react';
import Events from '../components/EventComponent';
const Event = () => {
    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);
  return (
    <div>
    <Events/>
    </div>
  );
};

export default Event;
