import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import projects from '../../dataJson/data.json';
import ProjectItem from '../../components/projectsProjectsPage/ProjectItem';
import Pagination from './Pagination';
import '../../styles/AllProjects.scss';
import Reveal from '../../utils/Reveal';

const ITEMS_PER_PAGE = 3;
const getProjectArrayPosition = (projectId) => projects.findIndex((p) => p.id === projectId) + 1;
const getCurrentProjectPage = (projectArrayPosition) => Math.ceil(projectArrayPosition / ITEMS_PER_PAGE);

const AllProjects = () => {
  const { search } = useLocation();
  const urlParams = new URLSearchParams(search);
  const projectId = urlParams.get('projectId');
  const projectPage = getCurrentProjectPage(getProjectArrayPosition(projectId));
  const [currentPage, setCurrentPage] = useState(projectPage || 1);

  const projectArrayPosition = getProjectArrayPosition(projectId);
  const currentProjectPage = getCurrentProjectPage(projectArrayPosition);

  const navigateToProjectPage = (currentProjectPage) => {
    setCurrentPage(currentProjectPage);
  };

  useEffect(() => {
    if (projectId) {
      navigateToProjectPage(currentProjectPage);

      if (currentPage === currentProjectPage) {
        document.getElementById(projectId).scrollIntoView(true);
      }
    }
  }, [projectId]);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);

    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='all-projects'>
      {currentProjects.map((project) => (
        <Reveal key={project.id}>
          <ProjectItem project={project} />
        </Reveal>
      ))}
      <Pagination
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={projects.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default AllProjects;
