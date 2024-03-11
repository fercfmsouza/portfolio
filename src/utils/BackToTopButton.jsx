import { useState, useEffect } from 'react';
import '../styles/BackToTopButton.scss';

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='back-button-wrapper'>
      {backToTopButton && (
        <button onClick={scrollUp} className='back-button'>
          <img src='../../public/assets/arrow-back-to-top.svg' alt='' />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
