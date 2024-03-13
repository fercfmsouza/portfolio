import PropTypes from 'prop-types';
import { useLanguage } from '../context/LanguageContext';
import '../../styles/ProjectItem.scss';

const ProjectItem = ({ project }) => {
  const { translation } = useLanguage();

  return (
    <div className='wrapper-item' id={project.id}>
      <div>
        <h1>{project.title}</h1>
        <h2>{translation[project.subtitle]}</h2>
        <p>{translation[project.description]}</p>
        <h3 className='title-bg-light'>{translation.technologiesTitle}</h3>
        <ul>
          {project.technologies.map((technology, index) => (
            <li className='tech' key={index}>
              {technology}
            </li>
          ))}
        </ul>
      </div>

      <div className='project-image'>
        <img className='original-image' src={project.image} alt='project image' />
        <img className='hover-image' src={project.hoverImage} alt='project hover image' />

        <div className='projects-links'>
          <a href={project.website} target='_blank' rel='noopener noreferrer'>
            {translation.checkoutWebsiteButton}
          </a>
          <a href={project.github} target='_blank' rel='noopener noreferrer'>
            {translation.demoButton}
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    website: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    hoverImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectItem;
