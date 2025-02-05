import React, { useState, useEffect } from "react";
import { Link,useNavigate } from 'react-router-dom';
import '../styles/EfficiencySection.css';

const EfficiencySection=() => {
    const [isModalOpen, setModalOpen] = useState(false);
  
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

  return (
    <section
      id="efficiency"
      className="efficiency-section" 
    >
      <div className="container">
        <div className="content">
          <h2 style={{
    color: '#FFFFFF'}}>PTGR AG is Efficient & Effective</h2>
          <p>
            We know that your time is precious and that you want to invest your
            crypto investments efficiently and effectively. That’s why we show
            you how to invest your investments professionally and efficiently and
            keep an eye on your portfolio’s performance every second.
          </p>
          <p>        </p>
  
        </div>
        <div style={{marginTop:'50px'}}><Link to="/ContactUsForm" className="card-button" >
        Contact Us 
        
      </Link></div>
      </div>

    </section>
  );
};

export default EfficiencySection;
