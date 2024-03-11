import { useLanguage } from '../components/context/LanguageContext';
import Education from '../components/Education';
import '../styles/AboutPage.scss';
import Reveal from '../utils/Reveal';

const AboutPage = () => {
  const { translation } = useLanguage();

  return (
    <div className='about-page'>
      <Reveal>
        <div className='about-info'>
          <p className='about-subtitle'>{translation.titleAbout}</p>
          <div className='about-text'>
            <h1 className='about-title'>{translation.subtitleFrontend}</h1>
            <h1 className='about-title-76'>
              {translation.subtitlePassionate} <span className='about-title'>{translation.subtitleAbout} </span>
              {translation.subtitleCoding}
            </h1>
            <h1 className='about-title'>
              <span className='about-title-76'>{translation.subtitleMarkable}</span> {translation.subtitleProducts}
            </h1>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className='about-images'>
          <img className='img-1' src='../../public/assets/about-photo-1.jpg' alt='Fernanda in Japan' />
          <img className='img-2' src='../../public/assets/about-photo-2.JPG' alt='Building in Kopenhagen' />
          <img className='img-3' src='../../public/assets/about-photo-3.jpg' alt='Fernanda in a japanese garden' />
        </div>
      </Reveal>

      <div className='about-other'>
        <Reveal>
          <h2>{translation.otherThingsTitle}</h2>
        </Reveal>
        <Reveal>
          <div className='other-info'>
            <p className='p1'>{translation.otherThingsDescription1}</p>
            <p className='p2'>{translation.otherThingsDescription2}</p>
          </div>
        </Reveal>
      </div>

      <Education />
    </div>
  );
};

export default AboutPage;
