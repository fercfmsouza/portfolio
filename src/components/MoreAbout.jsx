import { Link } from 'react-router-dom';
import { useLanguage } from '../components/context/LanguageContext';
import '../styles/MoreAbout.scss';
import SvgAboutIcon from './svgComponents/SvgAboutIcon';
import Reveal from '../utils/Reveal';

const MoreAbout = () => {
  const { translation } = useLanguage();

  return (
    <div className='more-about'>
      <Reveal>
        <h3>{translation.aboutQuote}</h3>
      </Reveal>
      <div className='about-wrapper'>
        <Reveal>
          <img src='../../../assets/profile-photo.png' alt="Fernanda's profile image" />
        </Reveal>
        <Link to='/about'>
          <Reveal>
            <p>{translation.moreAboutButton}</p>
          </Reveal>
          <Reveal>
            <SvgAboutIcon fillColor='none' strokeColor='#1b2e25' />
          </Reveal>
        </Link>
      </div>
    </div>
  );
};

export default MoreAbout;
