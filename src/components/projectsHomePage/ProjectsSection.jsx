import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import '../../styles/ProjectsSection.scss';
import SvgAboutIcon from '../../components/svgComponents/SvgAboutIcon';
import ProjectsList from './ProjectsList';
import Reveal from '../../utils/Reveal';

const ProjectsSection = () => {
  const { translation } = useLanguage();

  return (
    <div className='section-projects'>
      <Reveal>
        <div className='info-project'>
          <h2 className='title-bg-dark'>{translation.checkOutTitle}</h2>
          <Link
            to='/projects'
            className='
        link-project'
          >
            <p>{translation.moreProjectsButton}</p>
            <SvgAboutIcon fillColor='none' strokeColor='#1b2e25' />
          </Link>
        </div>
      </Reveal>

      <Reveal>
        <ProjectsList />
      </Reveal>

      <p className='skills'>{translation.skills}</p>
    </div>
  );
};

export default ProjectsSection;
