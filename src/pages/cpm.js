import React, { useEffect } from 'react';
import PTGR from '../components/PTGR';
import InvestmentPerformance from '../components/InvestmentPerformance';
import { useLocation } from 'react-router-dom';

const CPM = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return (
    <div>
      <PTGR />
      <div className='performance'>
        <div className="container afterheading-section">
          <div className="row">
            <div className="col-xl-5 col-lg-5 afterheading-left">
              <div className="afterheading-title">
                <h2 className="afterheading-main-title">
                  PTGR Crypto Assets Management Performance
                </h2>
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 col-lg-7 afterheading-right">
              <div className="afterheading-content">
                <p className="afterheading-description">
                  The below illustrates how our investment strategies performed over time: Key to success is the selection of the right digital assets to invest in, the right investment timing, and the proper asset allocation in the portfolio over the period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InvestmentPerformance />
    </div>
  );
};

export default CPM;