import { useLanguage } from './context/LanguageContext';
import '../styles/WorkExperience.scss';
import Reveal from '../../src/utils/Reveal';

const WorkExperience = () => {
  const { translation } = useLanguage();

  return (
    <div className="work-wrapper">
      <Reveal>
        <div className="work">
          <h2 className="title-bg-light">{translation.workTitle}</h2>
        </div>
      </Reveal>

      <div className="padding">
        <Reveal>
          <div className="work-experience">
            <p>{translation.workSubtitle}</p>
            <a
              className="btn-company"
              href="https://cli.greencarlane.com/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{translation.jobCompany}</h3>
            </a>
            <p className="job-description">{translation.jobDescription}</p>
            <p className="date">{translation.jobDate}</p>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default WorkExperience;
