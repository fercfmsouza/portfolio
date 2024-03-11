import { useRef, useEffect } from 'react';
import { useLanguage } from '../components/context/LanguageContext';
import Slider from 'react-slick';
import iconList from '../dataJson/icons.json';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Technologies.scss';
import Reveal from '../utils/Reveal';

const Technologies = () => {
  const { translation } = useLanguage();
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleScroll = (e) => {
      // Change slide on mouse scroll
      if (e.deltaY > 0) {
        sliderRef.current.slickNext();
      } else {
        sliderRef.current.slickPrev();
      }
    };

    // Attach scroll event listener to the document
    document.addEventListener('wheel', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const settings = {
    autoplay: true,
    autoplaySpeed: 1600, // Adjust the autoplay speed as needed
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className='technologies'>
      <Reveal>
        <div className='tech-title'>
          <h2 className='title-bg-light'>{translation.technologiesTitle}</h2>
        </div>
      </Reveal>
      <Reveal>
        <div className='carousel-container'>
          <Slider ref={sliderRef} {...settings}>
            {iconList.map((icon) => {
              return (
                <div key={icon.id}>
                  <img src={icon.icon} alt={icon.altText} />
                </div>
              );
            })}
          </Slider>
        </div>
      </Reveal>
    </div>
  );
};

export default Technologies;
