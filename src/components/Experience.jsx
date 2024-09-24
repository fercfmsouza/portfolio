import { useLanguage } from './context/LanguageContext';
import CardExperienceList from './CardExperienceList';
import SvgResumeIcon from './svgComponents/SvgResumeIcon';
import Reveal from '../utils/Reveal';
import '../styles/Experience.scss';

const Experience = () => {
  const { translation } = useLanguage();

  return (
    <div className="experience-wrapper">
      <Reveal>
        <div className="experience">
          <h2 className="title-bg-light">{translation.experienceTitle}</h2>
          <a
            className="btn-cv"
            href="../../../assets/en-cv-fernanda-souza.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {translation.resumeButton}
            <SvgResumeIcon fillColor="none" strokeColor="#1b2e25" />
          </a>
        </div>
      </Reveal>
      <div className="cards-list" id="experience-section">
        <CardExperienceList />
      </div>
    </div>
  );
};

export default Experience;
