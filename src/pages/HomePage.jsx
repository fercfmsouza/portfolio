import { useLanguage } from '../components/context/LanguageContext';
import Reveal from '../utils/Reveal';
import Experience from '../components/Experience';
import MoreAbout from '../components/MoreAbout';
import ProjectsSection from '../components/projectsHomePage/ProjectsSection';
import Technologies from '../components/Technologies';
import '../styles/HomePage.scss';

const HomePage = () => {
  const { translation } = useLanguage();

  return (
    <div className='home'>
      <Reveal>
        <div className='home-name'>
          <p className='p1'>Frontend Developer</p>
          <div className='names'>
            <h1 className='first-name'>Fernanda</h1>
            <h1 className='last-name'>Souza</h1>
          </div>
          <p className='p2'>Based in Berlin</p>
        </div>
      </Reveal>

      <div className='home-scroll'>
        <div className='middle'>
          <Reveal>
            <div className='mouse'></div>
          </Reveal>
        </div>
        <Reveal>
          <h2>{translation.homeQuote}</h2>
        </Reveal>
      </div>

      <ProjectsSection />

      <Technologies />

      <Experience />

      <MoreAbout />
    </div>
  );
};

export default HomePage;
