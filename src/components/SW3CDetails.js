import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const SW3CDetails = ({ service }) => {
  const [activeTab, setActiveTab] = useState(service.subServices?.[0]?.id);
  const cardRefs = useRef({}); // Ref to store card DOM elements
  const isInitialRender = useRef(true); // Ref to track initial render

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  

  // Scroll to the active card whenever the activeTab changes (but not on initial render)
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
    } else {
      if (cardRefs.current[activeTab]) {
        cardRefs.current[activeTab].scrollIntoView({
          behavior: 'smooth', // Smooth scrolling
          block: 'start', // Align the top of the card with the viewport
        });
      }
    }
  }, [activeTab]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth"});
  }, []); 

  return (
    <div className="rounded-lg  p-3 md:mx-[40px] md:p-[40px]">
      {/* Breadcrumb Navigation */}
      <div className="text-sm mb-4">
        <Link to="/" className="text-darkBlue hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/WS" className="text-darkBlue hover:underline">
          SW3C
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">{service.title}</span>
      </div>

      {/* Hero Section with Background Image and Dark Overlay */}
      <div
        className="w-full h-[400px] flex flex-col justify-center items-center rounded-lg bg-cover bg-center relative"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-white text-4xl font-bold ">{service.title}</h1>
          <div className="mt-4 flex w-full justify-center">
            <Link to={`/BookConsultations?consultationType=${service.bookType}`}>
              <div className="px-4 py-2  w-fit mx-4  cursor-pointer text-center font-bold border-white hover:bg-darkBlue border-2 rounded-md transition-all duration-300 ease-in-out text-white">
                Ready to Launch? Book a Consultation
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Introduction Paragraphs */}
      <p
        dangerouslySetInnerHTML={{ __html: service.description }}
        className="text-lg my-4 w-full md:w-[80%] mx-auto"
      ></p>

      {/* Tabs */}
      <h3 className="mt-8 text-center text-darkBlue mb-8 mx-auto border-b-[3px] w-[200px] border-darkBlue">
        Our services
      </h3>
      <div className="flex flex-wrap  w-full md:w-[80%] mx-auto gap-x-4 justify-center">
        {service.subServices.map((service) => (
          <div
            key={service.id}
            onClick={() => handleTabClick(service.id)}
            className={`px-4 py-2 font-normal  cursor-pointer w-full md:w-fit text-center mb-4 border-darkBlue border-2 rounded-md transition-all duration-300 ease-in-out ${
              activeTab === service.id
                ? 'bg-darkBlue text-white'
                : 'text-darkBlue hover:bg-darkBlue hover:text-white'
            }`}
          >
            {service.title}
          </div>
        ))}
      </div>

      {/* Sub-Service Cards */}
      <div className=" space-y-6">
        {service.subServices.map((service) => (
          <div
            key={service.id}
            ref={(el) => (cardRefs.current[service.id] = el)} // Store card ref
            className={`p-6 rounded-lg mx-auto w-full md:w-[80%] transition-all duration-300 ease-in-out ${
              activeTab === service.id
                ? 'border-3 border-darkBlue bg-lightBlue'
                : 'border-3 border-darkBlue'
            }`}
          >
            <h2 className="text-xl font-bold mb-2">{service.title}</h2>
            <p className='text-justify md:text-left'>{service.description}</p>
            <h3 className="text-lg font-semibold mb-2">Our Approach</h3>
            <ul className="list-disc list-inside mb-4">
              {service.whatWeDo.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mb-2">Your Benefits</h3>
            <ul className="list-disc list-inside">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="mb-2">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
       <div className="ico-token-cta" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              paddingBottom:'30px'
      
            }}>
                  <Link to={`/BookConsultations?consultationType=${service.bookType}`}>
                  <button className="cta-button">Ready to Launch? Book a Consultation</button>
                </Link>
                  </div>
    </div>
  );
};

export default SW3CDetails;