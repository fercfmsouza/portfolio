import '../../styles/ProjectsList.scss';
import ProjectItemHome from './ProjectItemHome';
import projects from '../../dataJson/data.json';

const ProjectsList = () => {
  const visibleProjects = projects.slice(0, 5);

  return (
    <div className='projects-list-container'>
      <div className='projects-list'>
        {visibleProjects.map((project) => (
          <ProjectItemHome key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
