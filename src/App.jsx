import { Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from '../src/components/context/LanguageContext';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import HomePage from '../src/pages/HomePage';
import AboutPage from '../src/pages/AboutPage';
import ProjectsPage from '../src/pages/ProjectsPage';
import BackToTopButton from './utils/BackToTopButton';
import './App.scss';

//fonts
import '../public/fonts/Graphie-Bold.otf';
import '../public/fonts/Graphie-ExtraBold.otf';
import '../public/fonts/Graphie-Regular.otf';
import '../public/fonts/Graphie-Light.otf';
import '../public/fonts/Graphie-ExtraLight.otf';
import '../public/fonts/Le-Jour-Serif.ttf';
import '../public/fonts/Le-Jour-Script.ttf';
import React from 'react';

function App() {
  const location = useLocation();

  // Scroll to the top when the route changes
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [location.pathname]);

  return (
    <LanguageProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
      </Routes>
      <Footer />
      <BackToTopButton />
    </LanguageProvider>
  );
}

export default App;
