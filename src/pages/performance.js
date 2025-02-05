import React, { useEffect, useRef } from 'react';
import PER from '../components/PerformanceOverview';
import PTGR from '../components/PTGR';
import InvestmentPerformance from '../components/InvestmentPerformance';

const CPM = () => {
  // Create a reference for the PER component
  const perRef = useRef(null);

  useEffect(() => {
    // Scroll to the PER component when the page loads, with an offset of 120px
    if (perRef.current) {
      const offsetTop = perRef.current.offsetTop; // Get the top position of the PER component
      window.scrollTo({
        top: offsetTop - 120, // Scroll 120px above the PER component
        behavior: 'smooth',
      });
    }
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  return (
    <div>
      <PTGR />
      {/* Assign the reference to the PER component */}
      <div ref={perRef}>
        <PER />
        <InvestmentPerformance />
      </div>
    </div>
  );
};

export default CPM;
