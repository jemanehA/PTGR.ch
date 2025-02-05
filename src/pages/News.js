import React, { useEffect } from 'react';
import Newscomponent from '../components/Newscomponent';
const News = () => {
    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);
  return (
    <div>
    <Newscomponent/>
    </div>
  );
};

export default News;
