import { useState, useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from './context/LanguageContext';
import Reveal from '../utils/Reveal';
import '../styles/CardExperienceList.scss';

const CardExperienceList = () => {
  const [counters, setCounters] = useState(Array.from({ length: 4 }, () => 0));
  const { translation } = useLanguage();

  const data = useMemo(
    () => [
      {
        id: '1a',
        image: '../../../assets/repositorie_icon.svg',
        number: 50,
        description: 'gitHubRepo',
      },
      {
        id: '2b',
        image: '../../../assets/project_icon.svg',
        number: 13,
        description: 'projectsCompleted',
      },
      {
        id: '3c',
        image: '../../../assets/glasses_icon.svg',
        number: 3,
        description: 'yearsOfStudy',
      },
      {
        id: '4d',
        image: '../../../assets/cup_icon.svg',
        number: 670,
        description: 'cupsOfCoffee',
      },
    ],
    [],
  );

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      // Start the counter when the div is visible
      const interval = setInterval(() => {
        setCounters((prevCounters) =>
          prevCounters.map((counter, index) => (counter < data[index].number ? counter + 1 : data[index].number)),
        );
      }, 0.5);

      return () => clearInterval(interval);
    }
  }, [inView, data]);

  return (
    <>
      {data.map((item, index) => {
        return (
          <div className='card-item' key={item.id} ref={ref}>
            <Reveal>
              <div className='card-experience'>
                <img src={item.image} alt='experience icon' />
                <h2>
                  {counters[index]}
                  {index === 0 && counters[index] >= data[index].number && '+'}
                </h2>
              </div>
              <p>{translation[item.description]}</p>
            </Reveal>
          </div>
        );
      })}
    </>
  );
};

export default CardExperienceList;
