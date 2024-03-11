import { useState } from 'react';
import '../../styles/ProjectsList.scss';
import ProjectItemHome from './ProjectItemHome';
import projects from '../../dataJson/data.json';

const ProjectsList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const visibleProjects = projects.slice(0, 5);

  return (
    <div className='projects-list-container'>
      <div className='projects-list'>
        {visibleProjects.map((project) => (
          <ProjectItemHome key={project.id} project={project} currentPage={currentPage} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
