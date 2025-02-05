import React, { useEffect } from 'react';
import BlockchainCourses from '../components/BlockchainCourses';
// import CourseSection from '../components/CourseSection';
const Blockchain = () => {
    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);
  return (
    <div>
    <BlockchainCourses/>
    {/* <CourseSection/> */}
    </div>
  );
};

export default Blockchain;
