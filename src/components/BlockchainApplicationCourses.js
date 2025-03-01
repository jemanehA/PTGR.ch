import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/DigitalWealthManagement.css'; // Reuse your existing CSS file

const BlockchainApplicationCourses = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      image: '/assets/images/finance.jpeg', // Replace with your image URL
      title: "Finance",
      description: "Blockchain enhances secure payments, smart contracts, and decentralized finance.",
      list: ["Secure payments", "Smart contracts", "Decentralized finance"],
      details: {
        title: "Blockchain in the Finance Industry",
        link: "/financeblockchain",
        
        description: "The financial sector is undergoing a fundamental shift with blockchain technology. By enabling decentralized networks, blockchain eliminates the need for intermediaries, reduces transaction costs, enhances security, and provides real-time access to financial records. Learn how this cutting-edge technology is transforming payments, lending, insurance, and investments while fostering financial inclusion. Whether you're a finance professional, investor, or entrepreneur, this course will provide valuable insights into the future of money and digital assets.",
        videoUrl: "/assets/images/video/Test.MP4",
        overview: "Blockchain is transforming finance by enabling secure, automated, and trustless transactions. It supports peer-to-peer lending, remittances, fraud prevention, and asset tokenization, helping financial institutions boost efficiency, cut costs, and improve customer experience. This course covers its adoption in banking, insurance, investment, and regulatory sectors.",
        instructor: "PTGR AG",
        instructorIcon: "/assets/images/logocut.png",
        enrollmentCount: "750 already enrolled",
        rating: "4.8 ★",
        ratingLabel: "(200 reviews)",
        level: "Intermediate",
        levelLabel: "Some experience required",
        duration: "5x4 hours",
        pacing: "Self-paced",
        pacingLabel: "Learn at your own pace",
        tabs: [
          {
            id: 'about',
            label: 'About',
            content: [
              "Blockchain is transforming the financial sector by introducing trustless, decentralized, and secure transaction mechanisms. This course provides an in-depth understanding of how blockchain is being integrated into traditional financial models and reshaping global finance.",
              "You will explore key blockchain applications in payments, lending, insurance, and wealth management. Learn how decentralized finance (DeFi) is disrupting the banking industry by providing open, permissionless financial services without intermediaries.",
              "Understand the role of smart contracts in automating financial agreements, reducing fraud, and ensuring compliance. Discover how blockchain enables cross-border transactions with reduced fees and increased security.",
              "The course also covers regulatory challenges, blockchain’s role in anti-money laundering (AML) and Know Your Customer (KYC) compliance, and the future of central bank digital currencies (CBDCs).",
              "By the end of this course, you will have a comprehensive understanding of how blockchain technology is driving financial innovation and how you can leverage it to improve business operations or personal investments."
            ]
          },
          {
            id: 'courses',
            label: 'Content of the Course',
            content: [
              "• Introduction to Blockchain in Finance",
              "• Secure Payment Systems and Fraud Prevention",
              "• Smart Contracts and Their Applications in Banking",
              "• Decentralized Finance (DeFi) and Yield Farming",
              "• Cross-Border Transactions and Cryptocurrency Adoption",
              "• Blockchain for Financial Institutions and Regulatory Compliance",
              "• Tokenization of Assets: Stocks, Bonds, and Real Estate",
              "• Blockchain in Risk Management and Anti-Money Laundering (AML)"
            ]
            
          },
          {
            id: 'what-youll-learn',
            label: 'Who Needs It?',
            content: [
              "• Finance professionals looking to integrate blockchain into their workflows.",
              "• Investors interested in decentralized finance (DeFi) and digital assets.",
              "• Business leaders exploring blockchain for secure transactions and smart contracts.",
              "• Banking and insurance professionals aiming to understand blockchain’s impact.",
              "• Entrepreneurs and startups building financial products using blockchain technology."
            ]
            
          },
          {
            id: 'testimonials',
            label: 'Requirements',
            content: [
              "• Basic understanding of finance and blockchain concepts.",
              "• Interest in decentralized technologies and financial innovations.",
              "• No prior coding experience required, but familiarity with financial systems is beneficial.",
              "• Willingness to explore blockchain’s impact on global markets and regulations."
            ]
            
          }
        ],
        certification: "Upon completion, you'll receive a certification recognized by leading financial institutions, validating your expertise in blockchain for finance.",
        fees: "CHF 2,649 (excluding examination fee). Discounts available for early registrations.",
        feesDesc: "The total cost is <strong>CHF 2,649</strong> excluding the ICO examination fee. Please check your individual options for cost deduction, whether you are a private participant or a company."

      },
    },
    {
      image: '/assets/images/RealEstate.jpeg', // Replace with your image URL
      title: "Real Estate",
      description: "Blockchain improves property transactions, smart contracts, and land registries.",
      list: ["Property transactions", "Smart contracts", "Land registries"],
      
        details: {
          title: "Blockchain in Real Estate Industry",
          link: "/realestateblockchain",
          description: "Blockchain is transforming the real estate industry by enabling secure, transparent, and efficient property transactions. From smart contracts to tamper-proof land registries, blockchain eliminates fraud, reduces paperwork, and streamlines property management. This course explores how blockchain is revolutionizing real estate transactions, reducing costs, and increasing trust between buyers, sellers, and investors.",
          videoUrl: "/assets/images/video/Test.MP4",
          overview: "Real estate has traditionally relied on intermediaries, paperwork, and lengthy processes. Blockchain is eliminating these inefficiencies by providing decentralized, secure, and automated solutions. This course delves into blockchain's role in secure property transactions, land registries, smart contracts, and tokenized real estate investments. Learn how this cutting-edge technology is making real estate transactions faster, cheaper, and more transparent.",
          instructor: "Jane Smith",
          instructorIcon: "/assets/images/logocut.png",
          enrollmentCount: "950 already enrolled",
          rating: "4.7 ★",
          ratingLabel: "(230 reviews)",
          level: "Beginner",
          levelLabel: "No prior experience required",
          duration: "5x4 hours",
          pacing: "Self-paced",
          pacingLabel: "Learn at your own pace",
          tabs: [
            {
              id: 'about',
              label: 'About',
              content: [
                "Blockchain is revolutionizing real estate by introducing secure, decentralized, and efficient ways to conduct property transactions. This course provides a comprehensive introduction to blockchain applications in real estate, eliminating traditional inefficiencies and increasing trust in the sector.",
                "You'll explore how smart contracts automate and secure property deals, reducing the risk of fraud and eliminating intermediaries. Learn how blockchain-powered land registries ensure transparent ownership records, preventing disputes and enhancing security.",
                "The course also covers property tokenization, allowing fractional ownership and increased liquidity in the real estate market. Understand how blockchain enables global real estate investments by reducing barriers and creating trustless transactions.",
                "By the end of the course, you'll have a solid understanding of how blockchain is reshaping real estate transactions, property management, and investment strategies. Whether you're a real estate professional, investor, or business leader, this course will equip you with the knowledge to leverage blockchain in real estate."
              ]
            },
            {
              id: 'courses',
              label: 'Content of the Course',
              content: [
                "• Introduction to Blockchain in Real Estate",
                "• Secure Property Transactions and Fraud Prevention",
                "• Smart Contracts for Automated Real Estate Agreements",
                "• Blockchain Land Registries and CHF 2,649Transparent Ownership Records",
                "• Tokenization of Real Estate: Fractional Ownership and Investment",
                "• Legal and Regulatory Challenges in Blockchain Real Estate",
                "• Cross-border Real Estate Transactions and Blockchain’s Role",
                "• Real-World Case Studies of Blockchain Adoption in Real Estate"
              ]
              
            },
            {
              id: 'what-youll-learn',
              label: 'Who Needs It?',
              content: [
                "• Real estate professionals looking to streamline transactions and reduce fraud.",
                "• Investors interested in blockchain-based property deals and tokenized assets.",
                "• Business leaders exploring blockchain for land registries and property management.",
                "• Government officials and policymakers seeking to modernize real estate regulations.",
                "• Tech entrepreneurs building blockchain-based real estate platforms."
              ]
              
            },
            {
              id: 'testimonials',
              label: 'Requirements',
              content: [
                "• Basic understanding of real estate and financial transactions.",
                "• Interest in blockchain technology and smart contracts.",
                "• No prior coding experience required, but familiarity with property investment is beneficial.",
                "• A willingness to explore blockchain’s impact on real estate markets globally."
              ]
              
            }
          ],
          certification: "Upon completion, you'll receive a certification recognized by leading real estate institutions, proving your expertise in blockchain applications for property transactions.",
          fees: "CHF 2,649 (excluding examination fee). Discounts available for early registrations.",
          feesDesc: "The total cost is <strong>CHF 2,649</strong> excluding the ICO examination fee. Please check your individual options for cost deduction, whether you are a private participant or a company."

        },
      
      
    },
    {
      image: '/assets/images/insurance.jpeg', // Replace with your image URL
      title: "Insurance",
      description: "Blockchain streamlines claims processing and prevents fraud.",
      list: ["Claims processing", "Fraud prevention", "Automated workflows"],
    
        details: {
          title: "Blockchain in Insurance Industry",
          link: "/insuranceblockchain",
          description: "Blockchain is reshaping the insurance industry by introducing secure, transparent, and automated processes. From fraud prevention to faster claims settlement, blockchain technology is reducing inefficiencies and building trust among insurers, policyholders, and regulators. By automating workflows through smart contracts, blockchain ensures faster and fairer payouts, reduces paperwork, and prevents duplicate claims. This course explores how blockchain is driving efficiency, security, and innovation in insurance operations.",
          videoUrl: "/assets/images/video/Test.MP4",
          overview: "The insurance industry has long faced challenges such as fraud, slow claims processing, and lack of transparency. Blockchain is solving these problems by providing immutable records, automating claims settlement, and enhancing data security. This course delves into blockchain applications in insurance, covering automated risk assessment, policy underwriting, and fraud detection. Learn how blockchain is streamlining the industry, increasing customer trust, and improving operational efficiency.",
          instructor: "Alice Johnson",
          instructorIcon: "/assets/images/logocut.png",
          enrollmentCount: "560 already enrolled",
          rating: "4.6 ★",
          ratingLabel: "(130 reviews)",
          level: "Intermediate",
          levelLabel: "Some experience required",
          duration: "5x4 hours",
          pacing: "Self-paced",
          pacingLabel: "Learn at your own pace",
          tabs: [
            {
              id: 'about',
              label: 'About',
              content: [
                "The insurance industry is undergoing a major transformation, thanks to blockchain technology. By decentralizing data, improving security, and automating processes, blockchain is helping insurers reduce costs and enhance customer satisfaction.",
                "This course explores how blockchain-based smart contracts streamline claims processing, ensuring automatic and transparent settlements. You'll learn how blockchain prevents fraud by creating tamper-proof records of policyholder data and claims history.",
                "Discover how decentralized ledgers enable instant verification of insurance policies and risk assessments, reducing the administrative burden on insurers. The course also covers how blockchain can be used in reinsurance to improve efficiency and reduce costs.",
                "By the end of this course, you’ll have a deep understanding of blockchain's role in the insurance sector and how it is enabling faster, fairer, and more reliable insurance processes."
              ]
            },
            {
              id: 'courses',
              label: 'Content of the Course',
              content: [
                "• Introduction to Blockchain in Insurance",
                "• Streamlining Claims Processing with Smart Contracts",
                "• Fraud Prevention and Data Security in Insurance",
                "• Automated Risk Assessment and Policy Underwriting",
                "• Blockchain for Reinsurance and Cost Optimization",
                "• Regulatory Challenges and Compliance in Blockchain Insurance",
                "• Case Studies: Real-World Applications of Blockchain in Insurance"
              ]
              
            },
            {
              id: 'what-youll-learn',
              label: 'Who Needs It?',
              content: [
                "• Insurance professionals looking to improve efficiency and reduce fraud.",
                "• Risk managers exploring blockchain-based fraud prevention solutions.",
                "• Business leaders implementing automated workflows in insurance operations.",
                "• Underwriters and claims processors interested in smart contract automation.",
                "• Regulators and policymakers seeking to understand blockchain's impact on the insurance sector."
              ]
              
            },
            {
              id: 'testimonials',
              label: 'Requirements',
              content: [
                "• Basic understanding of insurance policies and risk management.",
                "• Interest in fraud prevention, automation, and digital transformation.",
                "• No prior coding experience required, but familiarity with blockchain concepts is beneficial.",
                "• A willingness to explore how blockchain can enhance trust and efficiency in insurance."
              ]
              
            }
          ],
          certification: "Upon completion, you'll receive a certification recognized by leading insurance institutions, validating your expertise in blockchain for insurance.",
          fees: "CHF 2,649 (excluding examination fee). Discounts available for early registrations.",
          feesDesc: "The total cost is <strong>CHF 2,649</strong> excluding the ICO examination fee. Please check your individual options for cost deduction, whether you are a private participant or a company."

        },
      
      
    },
    {
      image: '/assets/images/tourism.jpg', // Replace with your image URL
      title: "Tourism",
      description: "Blockchain secures bookings and simplifies travel agreements.",
      list: ["Secure bookings", "Travel agreements", "Customer data protection"],
      
        details: {
          title: "Blockchain in Tourism Industry",
          link: "/tourismblockchain",
          description: "Blockchain is revolutionizing the tourism industry by enabling secure and transparent transactions, eliminating intermediaries, and enhancing customer trust. From secure hotel bookings to simplified travel agreements, blockchain ensures fraud prevention, seamless identity verification, and a hassle-free experience for travelers. This course explores how blockchain is reshaping tourism, making travel safer, faster, and more cost-effective.",
          videoUrl: "/assets/images/video/Test.MP4",
          overview: "The tourism industry is embracing blockchain to solve challenges related to booking fraud, overpricing, and inefficient travel agreements. Blockchain introduces a decentralized and tamper-proof system that secures transactions, improves customer authentication, and enhances data privacy. In this course, you'll learn how blockchain enables direct peer-to-peer bookings, smart contracts for travel agreements, and real-time verification of travel documents. Discover how major tourism companies are leveraging blockchain to provide seamless and transparent services.",
          instructor: "Michael Brown",
          instructorIcon: "/assets/images/logocut.png",
          enrollmentCount: "560 already enrolled",
          rating: "4.5 ★",
          ratingLabel: "(200 reviews)",
          level: "Beginner",
          levelLabel: "No prior experience required",
          duration: "5x4 hours",
          pacing: "Self-paced",
          pacingLabel: "Learn at your own pace",
          tabs: [
            {
              id: 'about',
              label: 'About',
              content: [
                "The global tourism industry faces issues such as booking fraud, hidden fees, identity theft, and lack of transparency in pricing. Blockchain offers a decentralized solution by ensuring secure, verifiable, and fraud-proof transactions.",
                "This course will provide an in-depth understanding of how blockchain is used to facilitate direct bookings, eliminating third-party costs and increasing trust between travelers and service providers.",
                "You'll learn about the role of blockchain in secure payments, smart contracts for automated travel agreements, and the benefits of decentralized identity verification to prevent fraud.",
                "By the end of this course, you'll gain the expertise to leverage blockchain technology in tourism, improving security, efficiency, and customer satisfaction."
              ]
            },
            {
              id: 'courses',
              label: 'Content of the Course',
              content: [
                "• Introduction to Blockchain in Tourism",
                "• Secure and Fraud-Free Travel Bookings",
                "• Smart Contracts for Travel and Hotel Agreements",
                "• Decentralized Identity Verification for Travelers",
                "• Blockchain-Based Loyalty Programs and Rewards",
                "• Enhancing Flight and Hotel Transparency with Blockchain",
                "• Case Studies: How Leading Travel Companies Use Blockchain"
              ]
              
            },
            {
              id: 'what-youll-learn',
              label: 'Who Needs It?',
              content: [
                "• Tourism professionals looking to enhance customer trust and security.",
                "• Travel agencies and tour operators exploring decentralized booking solutions.",
                "• Business leaders and entrepreneurs seeking to integrate blockchain in tourism.",
                "• Hospitality managers interested in fraud prevention and secure bookings.",
                "• Regulators and policymakers wanting to understand blockchain's role in tourism compliance."
              ]
              
            },
            {
              id: 'testimonials',
              label: 'Requirements',
              content: [
                "• Basic understanding of the tourism industry and online booking systems.",
                "• Interest in digital transformation and blockchain applications.",
                "• No prior coding experience required, but familiarity with blockchain concepts is beneficial.",
                "• A desire to learn how blockchain enhances security and efficiency in tourism."
              ]
              
            }
          ],
          certification: "Upon completion, you'll receive a certification recognized by leading tourism institutions, validating your knowledge in blockchain applications for travel and hospitality.",
          fees: "CHF 2,649 (excluding examination fee). Discounts available for early registrations.",
          feesDesc: "The total cost is <strong>CHF 2,649</strong> excluding the ICO examination fee. Please check your individual options for cost deduction, whether you are a private participant or a company."

        },
      
      
    },
    {
      image: '/assets/images/health.jpeg', // Replace with your image URL
      title: "Healthcare and Pharma",
      description: "Blockchain ensures secure medical records and improves drug traceability.",
      list: ["Secure medical records", "Drug traceability", "Patient data privacy"],
      
        details: {
          title: "Blockchain in Healthcare and Pharmaceuticals",
          link: "/healthcareblockchain",
          description: "Blockchain is revolutionizing the healthcare and pharmaceutical industries by ensuring secure medical records, improving drug traceability, and enhancing patient data privacy. This transformative technology provides a decentralized, tamper-proof solution that enhances transparency and security across the healthcare ecosystem. By leveraging blockchain, healthcare providers can securely share medical records, and pharmaceutical companies can track drug manufacturing, distribution, and sales to combat counterfeit drugs. This course will equip you with the knowledge to apply blockchain to healthcare and pharmaceutical challenges.",
          videoUrl: "/assets/images/video/Test.MP4",
          overview: "Blockchain technology is reshaping the healthcare and pharmaceutical industries by addressing critical issues such as data security, counterfeit drugs, and patient privacy. Through immutable and transparent record-keeping, blockchain enables real-time tracking of medical records and pharmaceuticals from production to distribution. This course explores how blockchain offers solutions to combat fraud, improve patient care, and ensure compliance with industry regulations.",
          instructor: "Sarah Lee",
          instructorIcon: "/assets/images/logocut.png",
          enrollmentCount: "670 already enrolled",
          rating: "4.9 ★",
          ratingLabel: "(320 reviews)",
          level: "Intermediate",
          levelLabel: "Some experience required",
          duration: "5x4 hours",
          pacing: "Self-paced",
          pacingLabel: "Learn at your own pace",
          tabs: [
            {
              id: 'about',
              label: 'About',
              content: [
                "The healthcare and pharmaceutical industries face challenges in maintaining secure medical records, preventing counterfeit drugs, and ensuring patient privacy. Blockchain offers a solution to these problems by creating an immutable, decentralized ledger that ensures data integrity and transparency.",
                "In this course, you'll explore how blockchain is revolutionizing the way patient data is stored, shared, and accessed, enabling secure and private access to medical records. You'll also learn how blockchain helps pharmaceutical companies track the entire lifecycle of a drug, from production to delivery, ensuring safety and compliance.",
                "You'll gain insights into the role of blockchain in preventing counterfeit drugs by creating transparent records of drug manufacturing, testing, and distribution, providing a secure, verifiable record at every stage of the process.",
                "By the end of the course, you’ll have the knowledge to integrate blockchain into healthcare and pharmaceutical systems to improve patient care, safeguard privacy, and ensure the authenticity of drugs."
              ]
            },
            {
              id: 'courses',
              label: 'Content of the Course',
              content: [
                "• Introduction to Blockchain in Healthcare and Pharmaceuticals",
                "• Securing Medical Records and Patient Data",
                "• Drug Traceability with Blockchain Technology",
                "• Enhancing Patient Privacy and Consent Management",
                "• Blockchain for Preventing Counterfeit Drugs",
                "• Real-World Applications in Healthcare and Pharma",
                "• Regulatory Compliance and Blockchain in Healthcare"
              ]
              
            },
            {
              id: 'what-youll-learn',
              label: 'Who Needs It?',
              content: [
                "• Healthcare professionals interested in securing patient data and ensuring privacy.",
                "• Pharmaceutical companies and regulators looking to improve drug traceability.",
                "• Data privacy professionals wanting to understand blockchain's role in compliance.",
                "• Business leaders seeking to implement blockchain for supply chain transparency in healthcare.",
                "• Regulators and policymakers interested in the role of blockchain in healthcare and pharmaceuticals."
              ]
              
            },
            {
              id: 'testimonials',
              label: 'Requirements',
              content: [
                "• Basic understanding of the healthcare and pharmaceutical industries.",
                "• Interest in data security, drug traceability, and patient privacy.",
                "• No prior coding experience required, but familiarity with blockchain is helpful.",
                "• A desire to explore how blockchain can improve operational efficiencies and regulatory compliance."
              ]
              
            }
          ],
          certification: "Upon completion, you'll receive a certification recognized by leading healthcare institutions, validating your expertise in blockchain applications for healthcare and pharmaceuticals.",
          fees: "CHF 2,649 (excluding examination fee). Discounts available for early registrations.",
          feesDesc: "The total cost is <strong>CHF 2,649</strong> excluding the ICO examination fee. Please check your individual options for cost deduction, whether you are a private participant or a company."

        },
      
      
    },
    {
      image: '/assets/images/supply.jpeg', // Replace with your image URL
      title: "Supply Chain Management",
      description: "Blockchain boosts transparency, traceability, and logistics in supply chains.",
      list: ["Transparency", "Traceability", "Logistics optimization"],
      
        details: {
          title: "Blockchain in Supply Chain Management",
          link: "/supplychaincourse",
          description: "Blockchain is transforming supply chain management by enhancing transparency, ensuring traceability, and optimizing logistics. This revolutionary technology provides a secure, decentralized ledger that allows all parties involved in the supply chain to have real-time access to the same data, reducing fraud, errors, and inefficiencies. By applying blockchain, businesses can ensure the authenticity of goods, track product movement across multiple stages, and optimize the logistics process. This course will give you the tools to understand and implement blockchain in supply chain operations.",
          videoUrl: "/assets/images/video/Test.MP4",
          overview: "Learn how blockchain is enhancing supply chain management with improved transparency, traceability, and logistics optimization. With its decentralized ledger, blockchain is reducing fraud, increasing accountability, and making it easier to track goods across the supply chain. This course will explore the key benefits of blockchain for supply chain management and its real-world applications, from reducing paperwork to improving product movement across different stages of the supply chain.",
          instructor: "David Wilson",
          instructorIcon: "/assets/images/logocut.png",
          enrollmentCount: "800 already enrolled",
          rating: "4.7 ★",
          ratingLabel: "(310 reviews)",
          level: "Intermediate",
          levelLabel: "Some experience required",
          duration: "5x4 hours",
          pacing: "Self-paced",
          pacingLabel: "Learn at your own pace",
          tabs: [
            {
              id: 'about',
              label: 'About',
              content: [
                "In this course, you'll explore how blockchain is fundamentally changing supply chain management. Blockchain allows supply chains to operate more efficiently by improving transparency, ensuring traceability, and enabling optimization of logistics operations.",
                "You'll learn how blockchain’s distributed ledger provides a transparent and immutable record of every transaction, ensuring all stakeholders in the supply chain have access to accurate, real-time information. This reduces fraud and errors in product movement.",
                "This course covers the benefits of blockchain technology, such as providing greater accountability, enabling the traceability of goods, improving the visibility of products across the supply chain, and ensuring compliance with international standards.",
                "By the end of the course, you'll be equipped with the knowledge to implement blockchain technology in supply chains, driving better decision-making and optimizing supply chain performance."
              ]
            },
            {
              id: 'courses',
              label: 'Content of the Course',
              content: [
                "• Introduction to Blockchain in Supply Chain",
                "• Enhancing Transparency in Supply Chains",
                "• Using Blockchain for Traceability",
                "• Optimizing Logistics with Blockchain",
                "• Blockchain for Supply Chain Risk Management",
                "• Regulatory Compliance in Blockchain-Enabled Supply Chains",
                "• Blockchain and the Future of Supply Chain Innovation"
              ]
              
            },
            {
              id: 'what-youll-learn',
              label: 'Who Needs It?',
              content: [
                "• Supply chain managers and professionals looking to improve efficiency and transparency in their operations.",
                "• Logistics and transportation companies exploring the benefits of blockchain for traceability and optimization.",
                "• Business leaders and entrepreneurs interested in optimizing their supply chain operations and improving customer satisfaction.",
                "• Professionals interested in gaining a competitive edge through blockchain technology and digital transformation in supply chains."
              ]
              
            },
            {
              id: 'testimonials',
              label: 'Requirements',
              content: [
                "• Basic understanding of supply chain processes and blockchain technology.",
                "• A strong interest in improving transparency, traceability, and logistics within supply chains.",
                "• No prior coding experience required, although an understanding of blockchain concepts is helpful."
              ]
              
            }
          ],
          certification: "Upon completion, you'll receive a certification recognized by leading supply chain institutions, validating your expertise in applying blockchain to supply chain management.",
          fees: "CHF 2,649 (excluding examination fee). Discounts available for early registrations.",
          feesDesc: "The total cost is <strong>CHF 2,649</strong> excluding the ICO examination fee. Please check your individual options for cost deduction, whether you are a private participant or a company."

        },
      
      
    },
  ];

  const activateService = (index) => {
    setActiveIndex(index);

    // Only scroll and highlight on desktop (where fixed card is visible)
    if (window.innerWidth > 768) {
      const targetCard = document.getElementById(`ssc-service-${index}`);
      const scrollContainer = document.querySelector('.ssc-scroll-container');

      if (targetCard && scrollContainer) {
        const cardOffset = targetCard.offsetLeft;
        const containerWidth = scrollContainer.clientWidth;
        const cardWidth = targetCard.clientWidth;

        const scrollTo = cardOffset - (containerWidth / 2) + (cardWidth / 2);

        scrollContainer.scrollTo({
          left: scrollTo,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div className="container ssc-container">
      <div className="ba-header">
        <div className="ba-line"></div>
        <h2>Blockchain Application Courses</h2>
        <p className="ba-description">
          We offer customized blockchain training for businesses, focusing on real-world applications across industries like finance, supply chain, and healthcare. With flexible learning formats, we ensure your team is equipped for digital transformation.
        </p>
      </div>
      <div className="ssc-row">
        {/* Fixed Left Card */}
        <div className="dwm-fixed-card" style={{ width: '300px' }}>
          <h3>Explore Our Courses</h3>
          <ul>
            {cards.map((card, index) => (
              <li
                key={index}
                onClick={() => activateService(index)}
                className={index === activeIndex ? 'dwm-active' : ''}
              >
                {card.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Scrollable Services */}
        <div className="ssc-scroll-container">
          {cards.map((card, index) => (
            <div
              key={index}
              id={`ssc-service-${index}`}
              className={`ssc-scroll-card ${index === activeIndex ? 'ssc-active' : ''}`}
            >
              <img src={card.image} alt={card.title} className="ssc-card-image" />
              <div className="ssc-card-content">
                <h5>{card.title}</h5>
                <p>{card.description}</p>
                <ul>
                  {card.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <Link
                  to="/course-details"
                  state={{ course: card.details }} // Pass course details as state
                  className="ba-learn-more"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockchainApplicationCourses;