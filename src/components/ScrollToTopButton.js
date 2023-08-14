import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll listener to detect when the user has scrolled down
    const handleScroll = () => {
      if (window.scrollY > 100) { // Adjust this value as needed
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={`scroll-to-top ${isVisible ? 'show' : ''}`}>
      <button onClick={scrollToTop} className="scroll-to-top-button">
        <FaArrowUp />
      </button>
    </div>
  );
}

export default ScrollToTopButton;
