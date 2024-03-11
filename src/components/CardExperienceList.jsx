import { useState, useEffect, useMemo } from 'react';
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
        image: '../../public/assets/repositorie_icon.svg',
        number: 50,
        description: 'gitHubRepo',
      },
      {
        id: '2b',
        image: '../../public/assets/project_icon.svg',
        number: 13,
        description: 'projectsCompleted',
      },
      {
        id: '3c',
        image: '../../public/assets/glasses_icon.svg',
        number: 3,
        description: 'yearsOfStudy',
      },
      {
        id: '4d',
        image: '../../public/assets/cup_icon.svg',
        number: 670,
        description: 'cupsOfCoffee',
      },
    ],
    [],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prevCounters) =>
        prevCounters.map((counter, index) => (counter < data[index].number ? counter + 1 : counter)),
      );
    }, 0.5);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <>
      {data.map((item, index) => {
        return (
          <div className='card-item' key={item.id}>
            <Reveal>
              <div className='card-experience'>
                <img src={item.image} alt='respositorie icon' />
                <h2>{counters[index]}</h2>
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
