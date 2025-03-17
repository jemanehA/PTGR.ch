import React, { forwardRef, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/DigitalWealthManagement.css';
import '../styles/web3cards.css';
import { Link } from 'react-router-dom';

const Web3cards = forwardRef((props, ref) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate()

  const cards = [
    {
      id: 'web3-blockchain-it',
      link: "/blockchain-and-it-solutions",
      image: '/assets/images/blockchain-it.jpg',
      title: 'Blockchain & IT Solutions',
      description:
        'We provide expert consulting to seamlessly integrate blockchain into existing enterprise IT infrastructure. Our approach marries deep technical expertise with strategic insight, aligning innovative blockchain solutions with core business objectives. The result is a robust, future-ready digital foundation that drives competitive advantage.',
    },
    {
      id: 'web3-payment-custody',
      link: "/digital-payment-and-custody-solutions",
      image: '/assets/images/custdy.webp',
      title: 'Web 3.0 - Payment & Custody Solutions',
      description:
        'We deliver secure, scalable cryptocurrency payment and asset custody solutions that fuel financial innovation and foster trust. Our services range from seamless payment processing integration to institutional-grade digital asset safeguarding. We empower businesses to embrace digital finance with confidence.',
    },
    {
      id: 'web3-rwa-tokenization',
      link: "/rwa-tokenization",
      image: '/assets/images/preiso.jpeg',
      title: 'Web 3.0 - RWA Tokenization',
      description:
        'We enable clients to convert real-world assets into digital tokens on the blockchain, unlocking liquidity and making high-value investments more accessible and efficient. Our secure, transparent tokenization strategies broaden investor access and streamline asset management. The result is greater liquidity, efficiency, and inclusivity in traditionally illiquid markets.',
    },
    {
      id: 'web3-strategic-ico',
      link: "/strategic-ico-consulting",
      image: '/assets/images/ico.webp',
      title: 'Web 3.0 - Strategic ICO Solutions',
      description:
        'As trusted advisors, we guide clients through every phase of an Initial Coin Offering (ICO) - from strategic planning and regulatory compliance to execution and market positioning. Our holistic approach ensures each ICO is structured for long-term success. We align innovative token strategies with investor confidence and stringent regulatory standards to maximize market impact and credibility.',
    },
    {
      id: 'web3-metaverse',
      link: "/metaverse",
      image: '/assets/images/metavers.webp',
      title: 'Web 3.0 - Metaverse',
      description:
        'We help organizations establish a strategic presence in the metaverse, where virtual and immersive experiences are redefining customer engagement. Our team blends advanced technical expertise, business strategy, and creative vision to build tailored digital solutions. This forward-looking approach positions your organization at the forefront of this new digital frontier.',
    },
  ];

  useEffect(() => {
    const cardId = location.state?.cardId;
    if (cardId) {
      const cardIndex = cards.findIndex((card) => card.id === cardId);
      if (cardIndex !== -1) {
        setActiveIndex(cardIndex);
        const targetCard = document.getElementById(cardId);
        if (targetCard) {
          targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }
  }, [location.state, cards]);

  const activateService = (index) => {
    setActiveIndex(index);
    const targetCard = document.getElementById(cards[index].id);
    if (targetCard) {
      const scrollBehavior =
        window.innerWidth > 768 ? { behavior: 'smooth', block: 'center' } : { behavior: 'smooth', block: 'start' };
      targetCard.scrollIntoView(scrollBehavior);
    }
  };

  return (
    <div className="container ssc-containe" id="web3courses" ref={ref}>
      <div className="ssc-row">
        <div className="dwm-fixed-card" style={{ width: '300px' }}>
          <h3>What We Offer</h3>
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

        <div className="ssc-scroll-container">
          {cards.map((card, index) => (
            <div
              key={index}
              id={card.id}
              className={`web-scroll-card ${index === activeIndex ? 'ssc-active' : ''}`}
            >
              <img src={card.image} alt={card.title} className="web-card-image" />
              <div className="ssc-card-content">
                <h5>{card.title}</h5>
                <p>{card.description}</p>
                <div onClick={() => navigate(`/sw3c${card.link}`)} className="ssc-learn-more" >
                    Learn More →
                  </div>
              </div>

            </div>
          ))}
        </div>
      </div>
      <div
        className="ico-token-cta"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '30px', marginTop: '30px' }}
      >
        <Link to={`/BookConsultations?consultationType=${cards[activeIndex].title}`}>
          <button className="cta-button">Ready to Launch? Request a Consultation</button>
        </Link>
      </div>
    </div>
  );
});

export default Web3cards;
