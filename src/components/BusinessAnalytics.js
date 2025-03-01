import React from 'react';
import '../styles/BusinessAnalytics.css';
import { Link } from 'react-router-dom';

const BusinessAnalytics = () => {
  const course = {
    title: "Certified Crypto Expert Course",
    link:'/educationcertificate',
    description: "Demonstrate in-depth knowledge of digital assets and blockchain to potential employers, academic institutions, and university admissions offices.",
    videoUrl: "/assets/images/video/Test.MP4",
    overview: "Master the world of digital assets and blockchain with the Certified Crypto Expert Course. Designed by industry professionals, this program equips you with the skills to excel in cryptocurrency, whether you're a beginner or advancing your expertise.",
    instructor: "PTGR AG",
    instructorIcon: "/assets/images/logocut.png",
    enrollmentCount: "538 already Booked",
    rating: "4.7 ★",
    ratingLabel: "(276 reviews)",
    level: "Beginner",
    levelLabel: "Recommended experience",
    duration: "5x4 hours",
    pacing: "Flexible",
    pacingLabel: "Learn at your own pace",
    tabs: [
      {
        id: 'about',
        label: 'About',
        content: [
          "The Certified Crypto Expert Course helps individuals demonstrate their in-depth knowledge of digital assets and blockchain to potential employers, academic institutions in today's competitive job market, and university admissions offices.",
          "Our training program is designed by experienced professionals who bring their extensive knowledge and experience to provide you with quality training. By the end of the program, you will have the confidence to begin your crypto journey or expand your existing knowledge.",
          "Our Certified Crypto Expert program is a comprehensive training program that will provide you with the necessary knowledge and skills to become an expert in digital assets. Whether you are completely new to the world of digital assets or already have some basic knowledge, this program is designed to take you to the next level.",
        ],
      },
      {
        id: 'courses',
        label: 'Content of the Course',
        content: [
          " • Blockchain Technology Basics: Introduction to digital assets, blockchain, distributed ledger technology (DLT), mining, and more. Suitable for beginners.",
          " • Fields of Application in Blockchain: Analyze various industry segments affected by Blockchain, exploring future business opportunities.",
          " • Cryptocurrencies in Detail: Explore cryptocurrencies like Bitcoin, Ethereum, Ripple, and their functions, origins, and use cases.",
          " • Crypto Trading and Investing: Learn strategies for trading, investing, technical analysis, and risk management.",
          " • Crypto Security: Best practices to secure crypto wallets and protect against fraud and hacking.",
          " • Regulatory Aspects: Overview of legal frameworks for digital assets and tax-related aspects.",
          " • Future Forecasts: Explore trends like sustainability, CO2 offsetting, and AI for new opportunities.",
        ],
      },
      {
        id: 'what-youll-learn',
        label: 'Who Needs It?',
        content: [
          " • Newcomers: Build a solid foundation in digital assets and blockchain with little or no prior knowledge.",
          " • Financial Professionals: Expand your skills to better understand and incorporate digital assets into investment strategies.",
          " • Business Professionals: Integrate digital assets into your business for improved processes and payment methods.",
          " • Tech Enthusiasts: Deepen your knowledge of blockchain technology and explore digital asset possibilities.",
          " • Risk Managers: Understand regulatory aspects and security measures related to digital assets.",
          " • Investors: Make informed decisions in the digital asset market as a retail investor.",
        ],
      },
      {
        id: 'testimonials',
        label: 'Requirements',
        content: [
          " • Basic knowledge of blockchain",
          " • Interest in new technologies & innovations",
          " • Understanding of AI innovations",
          " •Bachelor/Master degree desirable",
          " • English or German language skills",
        ],
      },
    ],
    certification: "Certification is done online, allowing participants to enjoy all the benefits of the course without being tied to fixed hours. Participants are certified by the recognized ICO (International Certification Organization) organization and PTGR AG.",
    fees: "CHF 2,650 (excluding ICO examination fee)",  
    feesDesc: "The total cost is <strong>CHF 2,650</strong>excluding the ICO examination fee. Please check your individual options for cost deduction, whether you are a private participant or a company."

  };

  return (
    <div className="container ba-container" id="Educations">
      {/* Title and Description Section */}
      <div className="ba-header">
        <div className="ba-line"></div>
        <h2>{course.title}</h2>
        <p className="ba-description">
          Gain in-depth knowledge of cryptocurrency, blockchain, and digital asset management.
          Become a certified expert in the evolving world of crypto.
        </p>
      </div>

      {/* Row with Fixed Left Card and Course Card */}
      <div className="ba-row">
        {/* Fixed Left Card */}


        {/* Course Card */}
        <div className="ba-scroll-card">
        
          <div className="ba-card-content">
            {/* <h5>{course.title}</h5> */}
            <p className='ba-description'>{course.description}</p>
            <ul>
              <li><strong>Duration:</strong> {course.duration}</li>
              <li><strong>Format:</strong> 2 online sessions, 1 on-site session</li>
              <li><strong>Exam Duration:</strong> 1 hour (online)</li>
              <li><strong>Language of Instruction:</strong> German / English</li>
              <li><strong>Cost:</strong> {course.fees}</li>
              <li><strong>Certification:</strong> {course.certification}</li>
            </ul>
            <Link
  to="/course-details"
  state={{ course }}
  className="ba-learn-more"
>
  Learn More →
</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessAnalytics;