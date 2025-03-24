import React, { useState, useRef } from 'react';
import '../styles/ChatBox.css'; // Import updated styling

// JSON structure for the chatbot questions and responses
const chatData = {
  greeting: "Hello, how can we help you?",
  options: [
    {
      text: "You want to invest into crypto?",
      followUp: [
        "You want to invest?",
        "You want to keep your assets and seek professional advice?",
        "Were you scammed and need professional support to get your cryptos back?"
      ]
    },
    {
      text: "You want to educate yourself in digital assets, Web3.0 and blockchain?",
      followUp: [
        "Basics of blockchain technology.",
        "Understanding NFTs and their market.",
        "Learning about DeFi (Decentralized Finance).",
        "Advanced blockchain development courses."
      ]
    },
    {
      text: "You want to know how we can support your company?",
      followUp: [
        "Consulting on digital transformation.",
        "Developing blockchain-based solutions.",
        "Providing investment strategies.",
        "Integrating crypto payment systems."
      ]
    }
  ]
};

const Chatbox = () => {
  const [countdown, setCountdown] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // Track the loading state
  function clearChat() {
    const chatBody = document.querySelector('.chatbox-body');
    // Keep only the greeting and initial options
    setMessages([{ sender: 'bot', text: chatData.greeting }]);
    setCurrentOptions(chatData.options);
  }

  const [isOpen, setIsOpen] = useState(false); // State to toggle chatbox visibility
  const [messages, setMessages] = useState([
    { sender: 'bot', text: chatData.greeting }
  ]); // State to manage chat messages
  const [currentOptions, setCurrentOptions] = useState(chatData.options); // Current set of options
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const chatBodyRef = useRef(null);

  // Function to toggle chatbox visibility
  const toggleChatbox = () => {
    setIsOpen(!isOpen); // Toggle chatbox open/close
  };

  // Handle user selection of an option
  const handleOptionClick = (option) => {
    const userMessage = { sender: 'user', text: option.text || option };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    if (option.followUp) {
      setTimeout(() => {
        const botMessage = { sender: 'bot', text: "Please select one of the following options:" };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
        setCurrentOptions(option.followUp.map((text) => ({ text }))); // Update options
      }, 500);
    } else {
      // Only proceed with the next steps (e.g., ask for details) without showing the "Thank you" message here
      askForDetails(); // Ask for client details (name & email)
    }
  };

  const askForDetails = () => {
    const botMessage = { sender: 'bot', text: 'Please provide your name and email to proceed.' };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
    setCurrentOptions([]); // Remove options after asking for name and email
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };






  const handleSubmitDetails = async () => {
    setIsLoading(true); // Set loading to true when the button is clicked
    const emailCheckUrl = `https://apilayer.net/api/check?access_key=525e00d61fdb3ceeca34ed85b82019e5&email=${email}&smtp=1&format=1`;

    try {
        console.log('Checking email existence...');
        const emailCheckResponse = await fetch(emailCheckUrl);
        const emailCheckData = await emailCheckResponse.json();

        console.log('Email Check Response:', emailCheckData);

        if (!emailCheckData.smtp_check) {
            console.log('Email is invalid or does not exist.');
            const botMessage = { sender: 'bot', text: 'The email address provided is invalid. Please provide a valid email.' };
            setMessages((prevMessages) => [...prevMessages, botMessage]);

            setTimeout(() => {
                const askForDetailsMessage = { sender: 'bot', text: 'Please provide your name and email to proceed.' };
                setMessages((prevMessages) => [...prevMessages, askForDetailsMessage]);
            }, 1000);

            setIsLoading(false); // Reset loading state after failure
            return;
        }

        console.log('Email is valid, proceeding to send email...');
        const emailUrl = `https://email.ptgr-test.com/chatmessage.php?email=${email}&name=${name}`;

        const response = await fetch(emailUrl);
        console.log('Sending email response:', response);

        if (response.ok) {
            console.log('Email sent successfully!');
            const botMessage = { sender: 'bot', text: `Thank you, ${name}. We will be in touch with you at ${email}.` };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
            // setCurrentOptions([]); // Clear options after submission
        } else {
            console.log('Error in sending email');
            const botMessage = { sender: 'bot', text: 'There was an error sending the email. Please try again later.' };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        }
    } catch (error) {
        console.error('Error:', error);
        const botMessage = { sender: 'bot', text: 'There was an error checking the email. Please try again later.' };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
    }

    setIsLoading(false); // Reset loading state after the request completes
};

  
  




  // Auto-scroll chat to the latest message
  React.useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <div>
      {/* Chat toggle button */}
      <button
        onClick={toggleChatbox}
        className={`chat-with-us-btn ${isOpen ? 'open' : ''}`}
      >
        <img
          src={isOpen ? '/assets/images/close.png' : '/assets/images/chat.png'}
          alt={isOpen ? 'Close Chat' : 'Chat with Us'}
        />
      </button>

      {/* Chatbox */}
      {isOpen && (
        <div className="chatbox-container">
          {/* Header */}
          <div className="chatbox-header">
            <img
              src="/assets/images/log.png"
              alt="Logo"
              className="header-icon"
            />
            Chat with Us
          </div>

          {/* Chat Body */}
          <div className="chatbox-body" ref={chatBodyRef}>
            {messages.map((message, index) => (
              <div key={index} className={`chat-message ${message.sender}`}>
                <p>{message.text}</p>
              </div>
            ))}
            {currentOptions.length > 0 && (
              <div className="chat-options">
                {currentOptions.map((option, index) => (
                  <button
                    key={index}
                    className="chat-option-button"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            )}
            {/* Collecting client name and email */}
            {messages.length > 1 && messages[messages.length - 1].text === 'Please provide your name and email to proceed.' && (
  <div className="chat-details-form">
    <input
      type="text"
      placeholder="Enter your name"
      value={name}
      onChange={handleNameChange}
    />
    <input
      type="email"
      placeholder="Enter your email"
      value={email}
      onChange={handleEmailChange}
    />

    <button
    className="submit-details-button"
    onClick={handleSubmitDetails}
    disabled={isLoading} // Disable the button when loading
>
    {isLoading ? 'Receiving Request...' : 'Submit'}
</button>
  </div>
)}

            <button className="clear-chat-button" onClick={clearChat}>
              Clear Chat
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
