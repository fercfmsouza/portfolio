import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import PropTypes from 'prop-types';
import '../../styles/ProjectItemHome.scss';

const ProjectItemHome = ({ project }) => {
  const { translation } = useLanguage();

  return (
    <Link key={project.id} to={`/projects?projectId=${project.id}`} className='project-card'>
      <img src={project.image} alt='project image' />
      <div className='project-overlay'>
        <h2 className='project-title'>{project.title}</h2>
        <p className='project-subtitle'>{translation[project.subtitle]}</p>
      </div>
    </Link>
  );
};

ProjectItemHome.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectItemHome;
