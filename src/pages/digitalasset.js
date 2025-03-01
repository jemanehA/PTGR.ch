import React, { useEffect, useState } from 'react';
import Digital_asset from '../components/Digital_asset';
import Sddalist from '../components/InfoCards';
import CardCarousel from '../components/CardCarousel';
import ScrollableServiceCards from '../components/ScrollableServiceCards';
import Questionnaire from '../components/setAppElement';

import PromoBox from '../components/PromoBox';

const Digital = () => {
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);

useEffect(() => {
  window.scrollTo(0, 0); // Scrolls to the top of the page
  console.log('Opening questionnaire modal'); // Debugging
  setIsQuestionnaireOpen(true); // Open the questionnaire when the page loads
}, []);

  return (
    <div>
      <Digital_asset />
      {/* <PromoBox/> */}
      {/* <Sddalist/> */}
      <ScrollableServiceCards />
      {/* <CardCarousel/> */}
      {/* <Questionnaire
        isOpen={isQuestionnaireOpen}
        onRequestClose={() => setIsQuestionnaireOpen(false)}
      /> */}
      
    </div>
  );
};

export default Digital;