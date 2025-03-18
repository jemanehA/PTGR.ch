import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const StrategicICODetails = () => {
  const [activeTab, setActiveTab] = useState();
  const cardRefs = useRef({}); // Ref to store card DOM elements
  const isInitialRender = useRef(true); // Ref to track initial render

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const phases = [
    {
      step: 1,
      title: "Define Strategy and Concept",
      description: "Establish the project's purpose, vision, and functionality.",
      subServiceId: 'define-strategy', // Link to subservice
    },
    {
      step: 2,
      title: "Whitepaper Development & Tokenomics Structuring",
      description: "Create a comprehensive document explaining the project to potential investors.",
      subServiceId: 'whitepaper-development', // Link to subservice
    },
    {
      step: 3,
      title: "Blockchain Development & Technical Implementation",
      description: "Build the technical infrastructure for the token and the surrounding ecosystem.",
      subServiceId: 'blockchain-development', // Link to subservice
    },
    {
      step: 4,
      title: "Regulatory Advisory & Legal Compliance",
      description: "Ensure regulatory compliance and secure strategic guidance.",
      subServiceId: 'regulatory-compliance', // Link to subservice
    },
    {
      step: 5,
      title: "Strategic Marketing & Community Engagement",
      description: "Build awareness, engage the investors' community, and attract participants.",
      subServiceId: 'marketing-community', // Link to subservice
    },
    {
      step: 6,
      title: "ICO Launch & Market Entry Strategy",
      description: "Officially release the token to the public.",
      subServiceId: 'ico-launch', // Link to subservice
    },
    {
      step: "∞",
      title: "Post-ICO Support & Long-Term Management",
      description: "Long-term post-ICO support for growth, liquidity, market integration, and governance.",
      subServiceId: 'post-ico-support', // Link to subservice
    },
  ];

  const service = {
    title: 'Strategic ICO Consulting',
    bookType: "Strategic ICO Exception",
    description: "<p> An Initial Coin Offering (ICO) is more than just a fundraising event—it is the foundation of a sustainable digital economy. A successful ICO requires precise strategic planning, regulatory alignment, and long-term growth strategies to ensure lasting impact. Beyond raising capital, projects must establish market credibility, investor trust, and a scalable token ecosystem. This means ensuring compliance, fostering liquidity, and building a community that supports long-term adoption. </p>  <p> Our Strategic ICO Consulting services provide end-to-end support, guiding projects from pre-launch preparation through post-ICO development. We integrate technical, legal, and marketing expertise to optimize token distribution, secure exchange listings, and ensure governance structures align with industry standards. By combining compliance-driven strategies with investor engagement, we help blockchain ventures not only launch successfully but also thrive in the evolving digital asset landscape. </p>",
    image: '/assets/images/ico.webp',

    subServices: [
      {
        id: 'define-strategy',
        title: 'Define Strategy and Concept',
        description:
          'A successful ICO starts with a clear, well-defined strategy that aligns market needs with innovation. Establishing a compelling value proposition, token utility, and long-term vision is essential for differentiation and sustainable growth. Our strategic consulting helps projects refine their unique selling points (USPs), identify market opportunities, and build a roadmap that attracts investors and users while ensuring scalability and competitiveness.',
        whatWeDo: [
          'USP Analysis – Define what makes your project unique and valuable.',
          'Market Gap Identification – Pinpoint opportunities and unmet needs in the industry.',
          'Token Utility Definition – Establish token purpose (utility, governance, security, or hybrid).',
          'Vision & Mission Development – Craft a strong narrative that resonates with stakeholders.',
          'Target Audience Profiling – Define key user personas and engagement strategies.',
          'Roadmap Structuring – Outline critical milestones for development and adoption.',
          'Competitive Differentiation – Position the project effectively in the market.',
        ],
        benefits: [
          'Clear Market Positioning – Strong strategic foundation for attracting investors and users.',
          'Optimized Token Economics – Well-defined utility ensures long-term adoption and liquidity.',
          'Scalability & Longevity – A structured roadmap supports sustained growth and expansion.',
        ],
      },
      {
        id: 'whitepaper-development',
        title: 'Whitepaper Development & Tokenomics Structuring',
        description:
          'A well-crafted whitepaper is the foundation of a successful ICO, serving as both a strategic blueprint and an investor-facing document. It must clearly define the problem statement, innovative solution, tokenomics, and long-term vision, while also demonstrating the technical and financial feasibility of the project. Our consulting approach ensures that your whitepaper is compelling, technically robust, and aligned with investor expectations, providing a solid foundation for credibility and fundraising success.',
        whatWeDo: [
          'Problem-Solution Definition – Articulate the core challenge and your project’s innovative response.',
          'Tokenomics Structuring – Define token supply, allocation, distribution, and economic incentives.',
          'Technical Architecture – Detail the underlying blockchain infrastructure and smart contract logic.',
          'Team & Expertise Showcase – Highlight key leadership, advisors, and relevant experience.',
          'Risk Assessment & Mitigation – Identify potential challenges and strategies to address them.',
          'Roadmap & Milestones – Establish a structured development timeline and key deliverables.',
          'Fundraising Strategy – Define soft cap, hard cap, and investor outreach plans.',
        ],
        benefits: [
          'Investor Confidence – A transparent, data-driven whitepaper builds credibility and trust.',
          'Optimized Token Economics – Sustainable token models drive long-term adoption and liquidity.',
          'Strategic Market Positioning – A compelling narrative strengthens competitive differentiation.',
        ],
      },
      {
        id: 'blockchain-development',
        title: 'Blockchain Development & Technical Implementation',
        description:
          'A robust technical infrastructure is the backbone of any ICO, ensuring security, scalability, and seamless integration with the broader ecosystem. From smart contract development to platform integration, our expertise covers the full spectrum of blockchain engineering. We help projects select the right blockchain, develop secure and interoperable token frameworks, and implement scalable infrastructure that supports long-term growth and market adoption.',
        whatWeDo: [
          'Blockchain Selection & Justification – Identify the most suitable blockchain for security, scalability, and efficiency.',
          'Token Compatibility & Integration – Ensure seamless support for wallets, exchanges, and DeFi applications.',
          'Platform Development – Build supporting infrastructure such as staking mechanisms and dApps.',
          'Security & Audits – Implement rigorous smart contract audits and vulnerability testing.',
          'Scalability & Performance Optimization – Develop solutions for high transaction throughput.',
          'Oracles & API Integration – Enable reliable real-world data feeds and external service connectivity.',
          'Technical Documentation & Maintenance – Establish comprehensive documentation for future development.',
        ],
        benefits: [
          'Secure & Compliant Architecture – Minimize risk through best-in-class security and audits.',
          'Interoperability & Market Readiness – Seamless integration with wallets, exchanges, and third-party services.',
          'Scalability for Growth – Future-proof infrastructure capable of handling increasing transaction volumes.',
        ],
      },
      {
        id: 'regulatory-compliance',
        title: 'Regulatory Advisory & Legal Compliance',
        description:
          'Regulatory clarity is essential for the long-term success and credibility of any ICO. Ensuring compliance with jurisdictional regulations, investor protections, and financial security standards mitigates legal risks and enhances market confidence. Our consulting services provide strategic legal guidance, KYC/AML compliance frameworks, and regulatory structuring to position your project for sustainable growth while maintaining full compliance with global standards.',
        whatWeDo: [
          'Jurisdictional Compliance Analysis – Identify relevant regulatory frameworks across key markets.',
          'KYC & AML Implementation – Develop compliant identity verification and anti-money laundering protocols.',
          'Legal Classification & Risk Assessment – Determine whether the token qualifies as a utility, security, or hybrid asset.',
          'Investor Protection & Contract Structuring – Draft transparent terms and conditions for token buyers.',
          'Strategic Partnerships & Governance – Establish alliances to strengthen credibility and market positioning.',
          'Expert Advisory Support – Leverage industry-leading legal and strategic expertise.',
        ],
        benefits: [
          'Regulatory Security – Avoid legal pitfalls with a fully compliant structure.',
          'Investor Trust & Market Access – Compliance enhances credibility and expands fundraising opportunities.',
          'Sustainable Growth – Well-structured legal frameworks support long-term scalability and institutional adoption.',
        ],
      },
      {
        id: 'marketing-community',
        title: 'Strategic Marketing & Community Engagement',
        description:
          'A compelling marketing strategy and an engaged community are critical for the visibility, credibility, and long-term success of any ICO. Effective outreach goes beyond promotion—it fosters trust, investor engagement, and organic growth. Our consulting services provide a data-driven marketing approach, influencer partnerships, and multi-channel engagement strategies to position your project as a leader in the space while ensuring sustained community participation.',
        whatWeDo: [
          'Brand Awareness & Positioning – Craft targeted marketing campaigns to establish market presence.',
          'Content & Educational Strategies – Develop thought leadership materials to inform and engage investors.',
          'Community Engagement & Management – Build active, self-sustaining communities across Telegram, Discord, and social media.',
          'Influencer & Strategic Partnerships – Leverage key industry voices to amplify credibility and reach.',
          'Referral & Bounty Programs – Implement incentive-driven growth strategies for community expansion.',
          'Pre-Launch Events & Investor Roadshows – Organize exclusive events to attract institutional and retail investors.',
        ],
        benefits: [
          'Increased Market Visibility – Position your project as an industry leader with a strong brand presence.',
          'Sustained Investor Engagement – Build a loyal and active community that supports long-term growth.',
          'Accelerated Adoption & Network Effects – Effective marketing and partnerships drive rapid ecosystem expansion.',
        ],
      },
      {
        id: 'ico-launch',
        title: 'ICO Launch & Market Entry Strategy',
        description:
          'A successful ICO launch requires precise execution, transparency, and security to build investor confidence and drive token adoption. Beyond the fundraising event, ensuring liquidity, exchange readiness, and post-launch sustainability is crucial for long-term success. Our consulting services provide structured token sale management, exchange onboarding strategies, and liquidity planning, positioning your project for a seamless market debut and sustainable growth.',
        whatWeDo: [
          'Token Sale Structuring – Define private, pre-sale, and public sale phases for optimal fundraising.',
          'Transparency & Security Measures – Implement audit-backed infrastructure to protect investor funds.',
          'Exchange Listing & Liquidity Planning – Develop strategies for token listings and liquidity management.',
          'Post-Launch Community Engagement – Gather investor feedback and refine long-term strategies.',
          'Roadmap Execution & Growth Strategy – Align post-ICO development with market demand.',
        ],
        benefits: [
          'Investor Trust & Market Credibility – A secure, transparent token sale enhances reputation.',
          'Optimized Liquidity & Exchange Readiness – Strategic planning ensures smooth trading post-launch.',
          'Long-Term Ecosystem Development – A well-defined roadmap supports continuous innovation and adoption.',
        ],
      },
      {
        id: 'post-ico-support',
        title: 'Post-ICO Support & Long-Term Management',
        description:
          'Successfully closing an ICO is a major milestone – but our support doesn’t stop there. Post-ICO strategy is crucial for maintaining investor confidence and keeping the project growing within the crypto community. We recognize that the real work of delivering on your vision begins once the fundraising is complete. Our advisory services extend well beyond the token launch, focusing on sustained growth, market integration, and governance to ensure your project’s longevity and success in the long run.',
        whatWeDo: [
          'Exchange Listings & Liquidity Strategies – Securing trading platforms and managing liquidity.',
          'Ecosystem Development & Token Utility – Expanding partnerships, integrations, and real-world use cases.',
          'Ongoing Governance & Compliance – Implementing transparent reporting and regulatory adaptation.',
        ],
        benefits: [
          'Sustained Market Growth – Long-term roadmap execution strengthens token adoption.',
          'Enhanced Liquidity & Stability – Proper exchange listings support healthy trading volumes.',
          'Institutional-Grade Governance – Regulatory alignment builds credibility with major investors.',
        ],
      },
    ],
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

  return (
    <div className="rounded-lg mx-3 p-3 md:mx-[40px] md:p-[40px]">
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
          <h1 className="text-white text-4xl font-bold">{service.title}</h1>
          <div className="mt-4">
            <Link to={`/BookConsultations?consultationType=${service.bookType}`}>
              <div className="px-4 py-2 w-fit mx-auto cursor-pointer text-center font-bold border-white hover:bg-darkBlue border-2 rounded-md transition-all duration-300 ease-in-out text-white">
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
      <h3 className="mt-8 text-center text-darkBlue mb-8 mx-auto border-b-[3px] w-[450px] border-darkBlue">
        ICO Project Guidance - Phases
      </h3>

      {/* Phases List */}
      <ol className="items-center w-full md:w-[80%] mx-auto sm:grid md:grid-cols-2 lg:grid-cols-3 gap-y-4">
        {phases.map((phase, index) => (
          <li key={index} className="relative h-[240px] mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center text-2xl font-bold justify-center w-10 h-10 rounded-full ring-0 ring-darkBlue text-darkBlue sm:ring-1 shrink-0">
                {phase.step}
              </div>
              <div className="sm:flex w-full bg-gray-200 h-0.5"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-darkBlue">{phase.title}</h3>
              <p className="text-base font-normal text-gray-500">{phase.description}</p>
              <div
                onClick={() => handleTabClick(phase.subServiceId)} // Link to subservice
                className="px-4 py-2 font-normal hover:bg-opacity-90 w-fit cursor-pointer text-center mb-4 border-darkBlue border-2 rounded-md transition-all duration-300 ease-in-out text-white bg-darkBlue hover:text-white"
              >
                Learn More
              </div>
            </div>
          </li>
        ))}
      </ol>

      {/* Sub-Service Cards */}
      <div className="space-y-6">
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
            <p>{service.description}</p>
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

      {/* CTA Button */}
      <div
        className="ico-token-cta"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          paddingBottom: '30px',
        }}
      >
        <Link to={`/BookConsultations?consultationType=${service.bookType}`}>
          <button className="cta-button">Ready to Launch? Book a Consultation</button>
        </Link>
      </div>
    </div>
  );
};

export default StrategicICODetails;