import React, { useEffect } from 'react';
import CRyptoo from '../components/CertifiedExpertCryptoProgram';
// import CourseSection from '../components/CourseSection';
const CRYPTO = () => {
    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);
  return (
    <div>
    <CRyptoo/>
    {/* <CourseSection/> */}
    </div>
  );
};

export default CRYPTO;
