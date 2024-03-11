import { useLocation } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';
import '../styles/Footer.scss';
import SvgFooterIcon from './svgComponents/SvgFooterIcon';
import Reveal from '../utils/Reveal';

const Footer = () => {
  const { translation } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer id='contact-section' className={`footer ${isHomePage ? 'dark-green' : 'light-green'}`}>
      <div className='footer-info'>
        <Reveal>
          <h2>{translation.footerTitle}</h2>
          <p>{translation.footerSubtitle}</p>
        </Reveal>
      </div>
      <div className='footer-social'>
        <Reveal>
          <ul>
            <li>
              <a href='https://github.com/fercfmsouza' target='_blank' rel='noopener noreferrer'>
                Github
                <SvgFooterIcon fillColor='none' strokeColor='#e7eae6' />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/fernanda-souza-dev/' target='_blank' rel='noopener noreferrer'>
                LinkedIn
                <SvgFooterIcon fillColor='none' strokeColor='#e7eae6' />
              </a>
            </li>
            <li>
              <a href='mailto:fecafumee@gmail.com' target='_blank' rel='noopener noreferrer'>
                E-mail
                <SvgFooterIcon fillColor='none' strokeColor='#e7eae6' />
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
      <div className={`footer-rights ${isHomePage ? 'light-green' : 'dark-green'}`}>
        <p>© Fernanda Souza 2023. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
