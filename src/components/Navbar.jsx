import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLanguage } from '../components/context/LanguageContext';
import SvgLogoIcon from './svgComponents/SvgLogoIcon';
import SvgHamburgerMenu from './svgComponents/SvgHamburgerMenu';
import SvgCloseIcon from './svgComponents/SvgCloseIcon';
import '../styles/Navbar.scss';

const Navbar = () => {
  const { language, changeLanguage, translation } = useLanguage();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    changeLanguage(newLanguage);
  };

  const toggleHamburgerMenu = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const closeMenu = () => {
    setHamburgerOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar')) {
        closeMenu();
      }
    };

    if (hamburgerOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [hamburgerOpen]);

  if (!translation) {
    console.error(`Translation not found for language: ${language}`);
    return null; // Return null if translation is not available
  }

  return (
    <div className={`navbar ${hamburgerOpen ? 'open' : ''}`}>
      <div className='navbar-info'>
        <NavLink to='/'>
          <SvgLogoIcon />
        </NavLink>

        <ul className={`navbar-list ${hamburgerOpen ? 'open' : ''}`}>
          <li>
            <NavLink onClick={toggleHamburgerMenu} to='/about'>
              {translation.navListAbout}
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleHamburgerMenu} to='/projects'>
              {translation.navListProjects}
            </NavLink>
          </li>
          <li>
            <a onClick={toggleHamburgerMenu} href='#contact-section'>
              {translation.navListContact}
            </a>
          </li>

          <select id='languages' onChange={handleLanguageChange} value={language}>
            <option value='en'>🇬🇧</option>
            <option value='pt'>🇧🇷</option>
            <option value='de'>🇩🇪</option>
          </select>

          <li>
            <a
              onClick={toggleHamburgerMenu}
              href='https://www.linkedin.com/in/fernanda-souza-dev/'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
              <img src='../../public/assets/arrow-menu-burger.svg' />
            </a>
          </li>
          <li>
            <a
              onClick={toggleHamburgerMenu}
              href='https://github.com/fercfmsouza'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
              <img src='../../public/assets/arrow-menu-burger.svg' />
            </a>
          </li>
          <li>
            <a
              onClick={toggleHamburgerMenu}
              href='mailto:fecafumee@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              E-mail
              <img src='../../public/assets/arrow-menu-burger.svg' />
            </a>
          </li>
        </ul>

        <div className={`hamburger-menu ${hamburgerOpen ? 'open' : ''}`} onClick={toggleHamburgerMenu}>
          {hamburgerOpen ? <SvgCloseIcon /> : <SvgHamburgerMenu />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
