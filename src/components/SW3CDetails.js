import React, { useState, useEffect, useRef } from 'react';

const SW3CDetails = () => {
  const [activeTab, setActiveTab] = useState('decentralized-identity');
  const cardRefs = useRef({}); // Ref to store card DOM elements
  const isInitialRender = useRef(true); // Ref to track initial render

  const subServices = [
    {
      id: 'decentralized-identity',
      title: 'Decentralized Identity & Data Management',
      description: 'We implement decentralized identity solutions that prioritize security, user privacy, and regulatory compliance. By transitioning from siloed, centralized identity systems to blockchain-based identity frameworks, we help enterprises protect sensitive data and reduce the risk of breaches. Our approach not only reinforces data protection but also aligns with stringent data privacy regulations, ensuring full compliance. With decentralized identity, organizations can enhance user trust and streamline identity verification processes – a secure, compliance-driven approach to data management that is future-ready.',
      whatWeDo: [
        'Implement blockchain-based identity verification to enhance security and user privacy.',
        'Transition from centralized identity storage to self-sovereign identity solutions.',
        'Ensure compliance with global data protection regulations (GDPR, CCPA).',
      ],
      benefits: [
        'Stronger Security – Reduce risks of identity theft and fraud.',
        'Compliance & Trust – Align with evolving regulatory frameworks.',
        'Reduced Costs – Eliminate expensive third-party verification services.',
      ],
    },
    {
      id: 'blockchain-it',
      title: 'Blockchain Integration into Existing IT Systems',
      description: 'Our experts ensure that blockchain solutions integrate seamlessly with your current IT infrastructure. We design architectures that are scalable, secure, and interoperable, enabling blockchain to augment existing systems without disruption. Through meticulous planning and execution, we implement blockchain frameworks in a cost-effective manner. This disciplined approach maximizes ROI while preserving operational continuity and performance.',
      whatWeDo: [
        'Design and implement scalable blockchain architectures that integrate with ERP, CRM, and IT systems.',
        'Ensure secure and interoperable connectivity between blockchain networks and enterprise applications.',
        'Optimize infrastructure to reduce costs and enhance performance.',
      ],
      benefits: [
        'Seamless Transition – Integration without disruption to business operations.',
        'Reduced IT Costs – Lower third-party dependencies and data management expenses.',
        'Future-Ready Systems – Scalable solutions that grow with business needs.',
      ],
    },
    {
      id: 'strategic-blockchain-consulting',
      title: 'Strategic Blockchain Consulting',
      description: 'Our intern experts and collaborations with business and IT leaders formulate blockchain strategies that drive measurable business value. Our consulting approach identifies high-impact use cases where blockchain can reduce operational costs and eliminate inefficiencies. In many cases, these solutions also unlock new capabilities and streamline workflows. By aligning blockchain initiatives with your broader corporate strategy, we ensure that adoption is both cost-optimizing and transformative for your enterprise.',
      whatWeDo: [
        'Develop a customized blockchain strategy aligned with business goals.',
        'Identify high-impact use cases that reduce costs and drive efficiency.',
        'Assess feasibility, implementation roadmaps, and technology selection.',
      ],
      benefits: [
        'Optimized Operations – Eliminate inefficiencies and streamline processes.',
        'Cost Savings – Reduce transaction and data management expenses.',
        'Competitive Advantage – Leverage blockchain for secure and scalable digital transformation.',
      ],
    },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  // Scroll to the active card whenever the activeTab changes (but not on initial render)
  useEffect(() => {
    if (isInitialRender.current) {
      // Skip scrolling on initial render
      isInitialRender.current = false;
    } else {
      // Scroll to the active card on tab change
      if (cardRefs.current[activeTab]) {
        cardRefs.current[activeTab].scrollIntoView({
          behavior: 'smooth', // Smooth scrolling
          block: 'start', // Align the top of the card with the viewport
        });
      }
    }
  }, [activeTab]);

  return (
    <div className="m-[20px] p-[20px]">
      <img className="w-full rounded-lg h-[400px] object-cover" src="/assets/images/blockchain-it.jpg" alt="blockchain-it" />
      <div className="">
        <h2 className="text-center mt-4 text-darkBlue">Web 3.0 – Blockchain & IT</h2>
        <p className="text-lg">
          Our intern Experts and collaborations with business and IT leaders formulate blockchain strategies that drive measurable business value. Our consulting approach identifies high-impact use cases where blockchain can reduce operational costs and eliminate inefficiencies. In many cases, these solutions also unlock new capabilities and streamline workflows. By aligning blockchain initiatives with your broader corporate strategy, we ensure that adoption is both cost-optimizing and transformative for your enterprise.
        </p>
      </div>

      {/* Tabs */}
      <h3 className="mt-8 text-center text-darkBlue mb-4 mx-auto border-b-2 w-[200px] border-darkBlue">Our services</h3>
      <div className="flex space-x-4 justify-center">
        {subServices.map((service) => (
          <div
            key={service.id}
            onClick={() => handleTabClick(service.id)}
            className={`px-4 py-2 font-normal cursor-pointer border-darkBlue border-2 rounded-md transition-all duration-300 ease-in-out ${
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
      <div className="mt-8 space-y-6">
        {subServices.map((service) => (
          <div
            key={service.id}
            ref={(el) => (cardRefs.current[service.id] = el)} // Store card ref
            className={`p-6 rounded-lg transition-all duration-300 ease-in-out ${
              activeTab === service.id
                ? 'border-3 border-darkBlue bg-lightBlue'
                : 'border-3 border-darkBlue'
            }`}
          >
            <h2 className="text-xl font-bold mb-4">{service.title}</h2>
            <h3 className="text-lg font-semibold mb-2">What We Do</h3>
            <ul className="list-disc list-inside mb-4">
              {service.whatWeDo.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mb-2">Benefits</h3>
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
    </div>
  );
};

export default SW3CDetails;