import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/Modal.css';

Modal.setAppElement('#root');

const Questionnaire = ({ isOpen, onRequestClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState(null);

  const questions = [
    "What is your investment budget for crypto or digital assets?",
    "What is your preferred investment duration? (Short-term, Medium-term, Long-term)",
    "What type of digital assets are you interested in? (e.g., Bitcoin, Ethereum, NFTs, DeFi tokens)",
    "Do you require personalized portfolio management or advisory services?",
    "Do you need 24/7 customer support for your investments?"
  ];

  const totalQuestions = questions.length;

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCalculating(true);
      setTimeout(() => {
        setIsCalculating(false);
        setResult("Based on your answers, we recommend our **Premium Crypto Advisory Package**.");
      }, 2000);
    }
  };

  const resetQuestionnaire = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setIsCalculating(false);
    setResult(null);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Questionnaire Modal"
      className="modall"
      overlayClassName="overlayy"
    >
      <button className="close-btn" onClick={onRequestClose}>&times;</button>
      
      <div className="image-column">
        <img src="/assets/images/ourbird.png" alt="Bird" className="bird-image" />
      </div>

      <div className="questionnaire-column">
        <h2>Find Your Perfect Crypto Advisory Plan</h2>
        
        {result ? (
          <div className="result-container">
            <p className="result-text">{result}</p>
            <button className="restart-btn" onClick={resetQuestionnaire}>Start Over</button>
          </div>
        ) : isCalculating ? (
          <p className="calculating-text">Analyzing your preferences...</p>
        ) : (
          <div className="question-container">
            <p className="question-text">{questions[currentQuestion]}</p>

            <div className="progress">
              <div 
                className="progress-bar" 
                style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
              ></div>
            </div>

            <div className="options-container">
              <button className="option-btn" onClick={() => handleAnswer('Option A')}>Option A</button>
              <button className="option-btn" onClick={() => handleAnswer('Option B')}>Option B</button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default Questionnaire;