import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/DigitalWealthManagement.css';

const DigitalWealthManagement = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      image: '/assets/images/wealth.webp', // Replace with your image URL
      title: "Digital Wealth and Asset Management",
      description: "Learn how to manage assets digitally with modern tools and techniques.",
      list: ["Modern asset management tools", "Digital portfolio strategies", "Risk management techniques"],
      details: {
        title: "Digital Wealth and Asset Management",
        link: "/digital-wealth-management",
        description: "This course provides a comprehensive understanding of digital wealth and asset management, focusing on modern tools, strategies, and techniques. Learn how to build and manage digital portfolios, mitigate risks, and optimize asset allocation in a rapidly evolving financial landscape.",
        videoUrl: "/assets/images/video/Test.MP4",
        overview: "Digital wealth management is transforming the way individuals and institutions manage their assets. This course covers the latest tools and technologies for portfolio management, risk assessment, and financial planning. You'll gain insights into digital investment strategies, automated wealth management platforms, and the role of AI in asset management.",
        instructor: "John Doe",
        instructorIcon: "/assets/images/logocut.png",
        enrollmentCount: "12,000 already enrolled",
        rating: "4.7 ★",
        ratingLabel: "(1,500 reviews)",
        level: "Intermediate",
        levelLabel: "Some experience required",
        duration: "5 hours",
        pacing: "Self-paced",
        pacingLabel: "Learn at your own pace",
        tabs: [
          {
            id: 'about',
            label: 'About',
            content: [
              "Digital wealth management is revolutionizing the financial industry by leveraging technology to optimize asset allocation and portfolio management. This course provides a deep dive into the tools and strategies used by professionals to manage wealth in the digital age.",
              "You'll learn about the latest trends in digital asset management, including robo-advisors, AI-driven investment platforms, and blockchain-based financial instruments. The course also covers risk management techniques and how to build resilient portfolios in volatile markets.",
              "By the end of this course, you'll have the knowledge and skills to manage digital assets effectively, whether for personal wealth or institutional investments."
            ]
          },
          {
            id: 'courses',
            label: 'Content of the Course',
            content: [
              "🔗 Introduction to Digital Wealth Management",
              "📊 Modern Asset Management Tools",
              "💰 Digital Portfolio Strategies",
              "📈 Risk Management Techniques",
              "💼 Case Studies: Real-World Applications",
              "📜 Regulatory Compliance in Digital Wealth Management"
            ]
          },
          {
            id: 'what-youll-learn',
            label: 'Who Needs It?',
            content: [
              "🎓 Financial professionals looking to enhance their digital asset management skills.",
              "📈 Investors interested in modern portfolio management tools.",
              "💼 Business leaders exploring digital transformation in wealth management.",
              "🏦 Wealth managers seeking to adopt AI and blockchain technologies."
            ]
          },
          {
            id: 'testimonials',
            label: 'Requirements',
            content: [
              "Basic understanding of financial markets and investment principles.",
              "Interest in digital transformation and modern financial tools.",
              "No prior coding experience required, but familiarity with financial concepts is beneficial."
            ]
          }
        ],
        certification: "Upon completion, you'll receive a certification recognized by leading financial institutions, validating your expertise in digital wealth management.",
        fees: "CHF 1,500 (excluding examination fee). Discounts available for early registrations."
      }
    },
    {
      image: '/assets/images/blockchai.png', // Replace with your image URL
      title: "Blockchain Ecosystem & Emergent Technologies",
      description: "Dive into the world of blockchain, exploring emerging technologies and applications.",
      list: ["Blockchain fundamentals", "Emerging technologies", "Real-world applications"],
      details: {
        title: "Blockchain Ecosystem & Emergent Technologies",
        link: "/blockchain-ecosystem",
        description: "This course explores the blockchain ecosystem, focusing on emerging technologies and their real-world applications. Learn about decentralized networks, smart contracts, and the future of blockchain in various industries.",
        videoUrl: "/assets/images/video/Test.MP4",
        overview: "Blockchain technology is reshaping industries by enabling secure, transparent, and decentralized systems. This course provides a comprehensive understanding of blockchain fundamentals, including consensus mechanisms, cryptography, and distributed ledger technology. You'll also explore emerging trends like DeFi, NFTs, and Web 3.0.",
        instructor: "Jane Smith",
        instructorIcon: "/assets/images/logocut.png",
        enrollmentCount: "10,000 already enrolled",
        rating: "4.8 ★",
        ratingLabel: "(1,200 reviews)",
        level: "Beginner",
        levelLabel: "No prior experience required",
        duration: "6 hours",
        pacing: "Self-paced",
        pacingLabel: "Learn at your own pace",
        tabs: [
          {
            id: 'about',
            label: 'About',
            content: [
              "Blockchain technology is revolutionizing industries by providing decentralized, secure, and transparent solutions. This course offers a deep dive into the blockchain ecosystem, covering its core principles, applications, and future potential.",
              "You'll learn about the fundamentals of blockchain, including how decentralized networks operate, the role of smart contracts, and the impact of blockchain on industries like finance, healthcare, and supply chain management.",
              "By the end of this course, you'll have a solid understanding of blockchain technology and its applications, enabling you to leverage it in your professional or personal projects."
            ]
          },
          {
            id: 'courses',
            label: 'Content of the Course',
            content: [
              "🔗 Introduction to Blockchain Technology",
              "📊 Blockchain Fundamentals: Consensus and Cryptography",
              "💰 Smart Contracts and Decentralized Applications",
              "📈 Emerging Trends: DeFi, NFTs, and Web 3.0",
              "💼 Real-World Applications of Blockchain",
              "📜 Regulatory and Ethical Considerations"
            ]
          },
          {
            id: 'what-youll-learn',
            label: 'Who Needs It?',
            content: [
              "🎓 Professionals looking to understand blockchain technology and its applications.",
              "📈 Entrepreneurs exploring blockchain-based business models.",
              "💼 Developers interested in building decentralized applications.",
              "🏦 Regulators and policymakers seeking to understand blockchain's impact."
            ]
          },
          {
            id: 'testimonials',
            label: 'Requirements',
            content: [
              "Basic understanding of technology and software concepts.",
              "Interest in blockchain and decentralized systems.",
              "No prior coding experience required, but familiarity with technology is beneficial."
            ]
          }
        ],
        certification: "Upon completion, you'll receive a certification recognized by leading blockchain institutions, validating your expertise in blockchain technology.",
        fees: "CHF 1,200 (excluding examination fee). Discounts available for early registrations."
      }
    },
    {
      image: "/assets/images/passive.png",
      title: "Passive Income Management",
      description: "Strategies for building and managing passive income streams effectively.",
      list: ["Passive income strategies", "Investment opportunities", "Long-term management"],
      details: {
        title: "Passive Income Management",
        link: "/passive-income-management",
        description: "This course provides essential strategies for generating and managing passive income. Learn how to identify, create, and sustain income streams through investments, digital assets, and business models.",
        videoUrl: "/assets/images/video/Passive.MP4",
        overview: "Passive income is a key component of financial independence. This course explores multiple passive income streams, including real estate, dividend investing, affiliate marketing, and automated businesses. Learn how to set up and optimize these revenue sources effectively.",
        instructor: "Jane Smith",
        instructorIcon: "/assets/images/logocut.png",
        enrollmentCount: "9,500 already enrolled",
        rating: "4.6 ★",
        ratingLabel: "(1,200 reviews)",
        level: "Beginner",
        levelLabel: "No prior experience needed",
        duration: "4.5 hours",
        pacing: "Self-paced",
        pacingLabel: "Learn at your own pace",
        tabs: [
          {
            id: "about",
            label: "About",
            content: [
              "This course provides in-depth knowledge of passive income strategies and how to implement them successfully.",
              "Discover how to generate consistent income with minimal ongoing effort through digital assets, real estate, and investments.",
              "Learn from real-world case studies of successful passive income earners."
            ]
          },
          {
            id: "courses",
            label: "Content of the Course",
            content: [
              "💡 Introduction to Passive Income",
              "🏠 Real Estate Investment Strategies",
              "📈 Dividend Stocks and Investment Income",
              "🌐 Online Businesses and Affiliate Marketing",
              "🚀 Automating Passive Income Streams",
              "🔍 Case Studies and Real-World Examples"
            ]
          },
          {
            id: "what-youll-learn",
            label: "Who Needs It?",
            content: [
              "📊 Individuals looking for financial independence through passive income.",
              "💰 Investors seeking diversified income sources.",
              "🌍 Entrepreneurs wanting to build automated business models.",
              "🏡 Real estate and stock market investors."
            ]
          },
          {
            id: "testimonials",
            label: "Requirements",
            content: [
              "No prior investment experience required.",
              "Interest in personal finance and wealth creation.",
              "Willingness to explore multiple income sources."
            ]
          }
        ],
        certification: "Receive a completion certificate to showcase your knowledge in passive income management.",
        fees: "CHF 1,200 (excluding examination fee). Discounts available for early registrations."
      }
    },
    {
      image: "/assets/images/crypto.jpeg",
      title: "Crypto Trends & Market Cycles",
      description: "Analyze crypto market cycles and trends to make informed decisions.",
      list: ["Market cycle analysis", "Trend identification", "Decision-making strategies"],
      details: {
        title: "Crypto Trends & Market Cycles",
        link: "/crypto-trends-market-cycles",
        description: "Gain insights into the cryptocurrency market, understanding trends, cycles, and key indicators for making informed investment decisions.",
        videoUrl: "/assets/images/video/Crypto.MP4",
        overview: "The cryptocurrency market is highly volatile and influenced by market cycles. This course teaches you how to analyze trends, understand price movements, and make data-driven investment decisions.",
        instructor: "Michael Brown",
        instructorIcon: "/assets/images/logocut.png",
        enrollmentCount: "15,000 already enrolled",
        rating: "4.8 ★",
        ratingLabel: "(2,300 reviews)",
        level: "Intermediate",
        levelLabel: "Some experience with crypto markets recommended",
        duration: "6 hours",
        pacing: "Self-paced",
        pacingLabel: "Learn at your own pace",
        tabs: [
          {
            id: "about",
            label: "About",
            content: [
              "Understand the historical trends and cycles of cryptocurrency markets.",
              "Learn to recognize bullish and bearish trends for better decision-making.",
              "Analyze real-world market data to identify investment opportunities."
            ]
          },
          {
            id: "courses",
            label: "Content of the Course",
            content: [
              "📖 Introduction to Cryptocurrency Market Cycles",
              "📊 Technical Analysis of Crypto Trends",
              "📉 Identifying Market Tops and Bottoms",
              "🛠 On-Chain Metrics and Trading Strategies",
              "💡 Case Studies: Bitcoin & Ethereum Price Movements",
              "📜 Regulatory Impact on Crypto Markets"
            ]
          },
          {
            id: "what-youll-learn",
            label: "Who Needs It?",
            content: [
              "📈 Crypto traders looking to improve their market analysis skills.",
              "💰 Investors seeking to optimize their crypto portfolios.",
              "🌍 Financial analysts interested in digital assets.",
              "📊 Beginners who want to understand crypto market trends."
            ]
          },
          {
            id: "testimonials",
            label: "Requirements",
            content: [
              "Basic understanding of cryptocurrencies and blockchain technology.",
              "Interest in market trends and investment strategies.",
              "No prior trading experience required, but beneficial."
            ]
          }
        ],
        certification: "Upon completion, you'll receive a recognized certification in cryptocurrency market analysis.",
        fees: "CHF 1,800 (excluding examination fee). Discounts available for early registrations."
      }
    },
    {
      image: "/assets/images/defi.jpg",
      title: "DeFi (Decentralized Finance)",
      description: "Understand decentralized finance and how to navigate its ecosystem.",
      list: ["DeFi fundamentals", "Ecosystem navigation", "Risk management"],
      details: {
        title: "DeFi (Decentralized Finance)",
        link: "/defi-decentralized-finance",
        description: "Explore the world of decentralized finance (DeFi), its principles, key protocols, and how to navigate this emerging financial ecosystem.",
        videoUrl: "/assets/images/video/DeFi.MP4",
        overview: "Decentralized finance is reshaping the global financial landscape by removing intermediaries and empowering individuals. This course covers the essentials of DeFi protocols, decentralized exchanges, and lending platforms.",
        instructor: "Sarah Lee",
        instructorIcon: "/assets/images/logocut.png",
        enrollmentCount: "10,500 already enrolled",
        rating: "4.6 ★",
        ratingLabel: "(1,800 reviews)",
        level: "Intermediate",
        levelLabel: "Some experience with crypto and finance recommended",
        duration: "5 hours",
        pacing: "Self-paced",
        pacingLabel: "Learn at your own pace",
        tabs: [
          {
            id: "about",
            label: "About",
            content: [
              "Understand the core principles behind DeFi, including smart contracts, decentralized exchanges, and automated market makers.",
              "Explore how DeFi is disrupting traditional financial systems, and learn how to participate safely in the ecosystem.",
              "Examine the risk factors and security considerations when engaging in DeFi transactions."
            ]
          },
          {
            id: "courses",
            label: "Content of the Course",
            content: [
              "🔗 Introduction to DeFi and Smart Contracts",
              "📊 Key DeFi Platforms and Tools",
              "💰 Lending and Borrowing in DeFi",
              "🛠 DeFi Risk Management",
              "🌍 Case Studies of Successful DeFi Projects",
              "📜 Regulatory Considerations for DeFi"
            ]
          },
          {
            id: "what-youll-learn",
            label: "Who Needs It?",
            content: [
              "💼 Financial professionals wanting to explore decentralized finance.",
              "📊 Investors looking for alternatives to traditional financial products.",
              "🌍 Tech-savvy individuals interested in blockchain and DeFi ecosystems.",
              "📈 Developers seeking to build DeFi applications."
            ]
          },
          {
            id: "testimonials",
            label: "Requirements",
            content: [
              "Basic understanding of blockchain and cryptocurrencies.",
              "Interest in decentralized systems and finance.",
              "No prior coding knowledge required, but familiarity with blockchain will be helpful."
            ]
          }
        ],
        certification: "Upon completion, you'll receive a certification in decentralized finance recognized by leading financial institutions.",
        fees: "CHF 1,200 (excluding examination fee). Discounts available for early registrations."
      }
    },
    {
      image: "/assets/images/sustain.jpg",
      title: "Sustainable Impact Investing",
      description: "Learn how to invest sustainably, balancing profitability, social impact, and long-term growth.",
      list: ["Sustainable investment strategies", "Social impact metrics", "Long-term growth planning"],
      details: {
        title: "Sustainable Impact Investing",
        link: "/sustainable-impact-investing",
        description: "Dive into sustainable investing and understand how to balance financial returns with social and environmental impact for long-term success.",
        videoUrl: "/assets/images/video/Sustain.MP4",
        overview: "Sustainable impact investing focuses on making investment decisions that benefit society and the environment while ensuring financial returns. This course will teach you how to identify impactful investments and measure their success.",
        instructor: "Emily Johnson",
        instructorIcon: "/assets/images/logocut.png",
        enrollmentCount: "8,200 already enrolled",
        rating: "4.9 ★",
        ratingLabel: "(2,100 reviews)",
        level: "Advanced",
        levelLabel: "Experience in finance and investing required",
        duration: "7 hours",
        pacing: "Self-paced",
        pacingLabel: "Learn at your own pace",
        tabs: [
          {
            id: "about",
            label: "About",
            content: [
              "Learn the core principles behind sustainable investing, including ESG (Environmental, Social, and Governance) criteria.",
              "Understand how to evaluate investment opportunities that have a positive social or environmental impact.",
              "Explore strategies for balancing profitability with sustainability and long-term growth."
            ]
          },
          {
            id: "courses",
            label: "Content of the Course",
            content: [
              "🌍 Introduction to Sustainable Investing",
              "📊 Analyzing Social Impact Metrics",
              "💡 Identifying Long-Term Growth Opportunities",
              "📈 Case Studies: Successful Sustainable Investments",
              "🔍 How to Evaluate ESG Performance",
              "📜 Regulatory Guidelines for Sustainable Investing"
            ]
          },
          {
            id: "what-youll-learn",
            label: "Who Needs It?",
            content: [
              "💼 Impact investors aiming to prioritize social and environmental impact.",
              "📊 Financial analysts looking to incorporate ESG factors into investment portfolios.",
              "🌍 Entrepreneurs and business leaders interested in creating sustainable businesses.",
              "🎓 Students or professionals seeking knowledge in sustainable investment practices."
            ]
          },
          {
            id: "testimonials",
            label: "Requirements",
            content: [
              "Understanding of basic investment concepts and finance.",
              "Interest in sustainable development and social impact.",
              "No prior experience in sustainable investing required."
            ]
          }
        ],
        certification: "Upon completion, you'll receive a certification in sustainable impact investing.",
        fees: "CHF 1,500 (excluding examination fee). Discounts available for early registrations."
      }
    },
    {
      image: "/assets/images/fore.jpg",
      title: "Crypto Scams & Forensic Services",
      description: "Identify and avoid crypto scams while leveraging forensic services.",
      list: ["Scam identification", "Forensic tools", "Risk mitigation"],
      details: {
        title: "Crypto Scams & Forensic Services",
        link: "/crypto-scams-forensic-services",
        description: "Learn how to identify crypto scams and use forensic tools to mitigate risks and recover assets in the rapidly evolving cryptocurrency market.",
        videoUrl: "/assets/images/video/CryptoScams.MP4",
        overview: "The rise of cryptocurrency has also brought an increase in scams. This course will teach you how to spot fraudulent activities and leverage forensic tools to recover assets and mitigate risks.",
        instructor: "James Smith",
        instructorIcon: "/assets/images/logocut.png",
        enrollmentCount: "12,000 already enrolled",
        rating: "4.5 ★",
        ratingLabel: "(1,200 reviews)",
        level: "Advanced",
        levelLabel: "Experience with crypto trading and security recommended",
        duration: "6 hours",
        pacing: "Self-paced",
        pacingLabel: "Learn at your own pace",
        tabs: [
          {
            id: "about",
            label: "About",
            content: [
              "Learn to identify red flags of crypto scams, including Ponzi schemes, phishing attacks, and pump-and-dump schemes.",
              "Understand how to use blockchain forensic tools to track stolen funds and recover assets.",
              "Explore best practices for minimizing risks when trading cryptocurrencies."
            ]
          },
          {
            id: "courses",
            label: "Content of the Course",
            content: [
              "🔒 Introduction to Crypto Scams and Fraud",
              "🔍 Identifying Scam Schemes and Red Flags",
              "🛠 Forensic Tools for Crypto Asset Recovery",
              "📉 Risk Management in Crypto Trading",
              "📜 Legal Considerations and Reporting Scams"
            ]
          },
          {
            id: "what-youll-learn",
            label: "Who Needs It?",
            content: [
              "💼 Crypto traders who want to protect their investments.",
              "🔍 Security professionals looking to develop expertise in crypto forensics.",
              "🎓 Crypto beginners wanting to learn how to avoid scams.",
              "⚖️ Legal and regulatory experts interested in fraud detection and asset recovery."
            ]
          },
          {
            id: "testimonials",
            label: "Requirements",
            content: [
              "Basic knowledge of cryptocurrency and blockchain.",
              "Interest in crypto security and fraud prevention.",
              "No prior forensic experience required."
            ]
          }
        ],
        certification: "Upon completion, you'll receive a certification in crypto scams detection and forensic services.",
        fees: "CHF 1,700 (excluding examination fee). Discounts available for early registrations."
      }
    }
    
    
    // Add similar details for the remaining cards...
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
        <h2>Web 3.0 Power Sessions</h2>
        <p className="ba-description">
          Gain in-depth knowledge of cryptocurrency, blockchain, and digital asset management.
          Become a certified expert in the evolving world of crypto.
        </p>
      </div>
      <div className="ssc-row">
        {/* Fixed Left Card */}
        <div className="dwm-fixed-card" style={{ width: '300px' }}>
          <h3>Explore Our Course</h3>
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
                  className="ssc-learn-more"
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

export default DigitalWealthManagement;