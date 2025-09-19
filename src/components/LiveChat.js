import React, { useState, useEffect } from 'react';
import { FaComments, FaTimes, FaWhatsapp } from 'react-icons/fa';
import './LiveChat.css';

const LiveChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [tawkLoaded, setTawkLoaded] = useState(false);

  useEffect(() => {
    // Show chat button after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Check if Tawk.to is loaded
    const checkTawkLoaded = () => {
      if (window.Tawk_API && window.Tawk_API.hideWidget) {
        setTawkLoaded(true);
        console.log('Tawk.to API ready');
        
        // Hide widget initially
        setTimeout(() => {
          try {
            window.Tawk_API.hideWidget();
            console.log('Tawk.to widget hidden initially');
          } catch (error) {
            console.log('Error hiding widget:', error);
          }
        }, 2000);
      } else {
        setTimeout(checkTawkLoaded, 1000);
      }
    };

    checkTawkLoaded();
  }, []);

  const openChat = () => {
    console.log('Opening chat...');
    
    // Try to use Tawk.to API if available
    if (window.Tawk_API && window.Tawk_API.showWidget) {
      try {
        window.Tawk_API.showWidget();
        window.Tawk_API.maximize();
        setIsChatOpen(true);
        console.log('Chat opened via Tawk.to API');
      } catch (error) {
        console.log('Error with Tawk.to API:', error);
        // Fallback to direct link
        window.open('https://tawk.to/chat/687a9411b76db319156daefe/1j0fd4ptp', '_blank');
      }
    } else {
      console.log('Tawk.to API not available, opening direct link');
      // Fallback: open Tawk.to directly
      window.open('https://tawk.to/chat/687a9411b76db319156daefe/1j0fd4ptp', '_blank');
    }
  };

  const closeChat = () => {
    console.log('Closing chat...');
    if (window.Tawk_API && window.Tawk_API.hideWidget) {
      try {
        window.Tawk_API.hideWidget();
        setIsChatOpen(false);
      } catch (error) {
        console.log('Error closing chat:', error);
        setIsChatOpen(false);
      }
    } else {
      setIsChatOpen(false);
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '+15852018866';
    const message = 'Hi! I would like to know more about your web development services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="live-chat-container">
      {/* WhatsApp Button */}
      {/* <button 
        className="chat-button whatsapp-button"
        onClick={openWhatsApp}
        title="Chat on WhatsApp"
      >
        <FaWhatsapp />
        <span className="chat-tooltip">Chat on WhatsApp</span>
      </button> */}

      {/* Live Chat Button */}
      <button 
        className={`chat-button live-chat-button ${isChatOpen ? 'active' : ''}`}
        onClick={isChatOpen ? closeChat : openChat}
        title={isChatOpen ? 'Close Chat' : 'Start Live Chat'}
      >
        {isChatOpen ? <FaTimes /> : <FaComments />}
        <span className="chat-tooltip">
          {isChatOpen ? 'Close Chat' : 'Start Live Chat'}
        </span>
      </button>

      {/* Chat Status Indicator */}
      {!isChatOpen && (
        <div className="chat-status">
          <div className="status-dot"></div>
          <span>{tawkLoaded ? 'Online' : 'Loading...'}</span>
        </div>
      )}
    </div>
  );
};

export default LiveChat; 