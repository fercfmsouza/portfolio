import { useLanguage } from './context/LanguageContext';
import '../styles/Education.scss';
import SvgResumeIcon from '../components/svgComponents/SvgResumeIcon';
import Reveal from '../../src/utils/Reveal';

const Education = () => {
  const { translation } = useLanguage();

  return (
    <div className='education-wrapper'>
      <Reveal>
        <div className='education'>
          <h2 className='title-bg-light'>{translation.educationTitle}</h2>
          <a
            className='btn-cv'
            href='../../public/assets/CV-Fernanda-Souza.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            {translation.resumeButton}
            <SvgResumeIcon fillColor='none' strokeColor='#1b2e25' />
          </a>
        </div>
      </Reveal>

      <div className='padding'>
        <Reveal>
          <div className='bootcamp'>
            <p>{translation.educationBootcamp}</p>
            <h3>{translation.educationDescriptionWebDev}</h3>
            <p>{translation.educationGermany}</p>
          </div>
        </Reveal>
        <Reveal>
          <div className='education-info'>
            <div className='bacharel'>
              <p>{translation.educationBacharel}</p>
              <h3>{translation.educationDescriptionArchitect}</h3>
              <p>{translation.educationBrazil}</p>
            </div>
            <div className='exchange'>
              <p>{translation.educationExchange}</p>
              <h3>{translation.educationDescriptionArchitect}</h3>
              <p>{translation.educationSpain}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Education;
