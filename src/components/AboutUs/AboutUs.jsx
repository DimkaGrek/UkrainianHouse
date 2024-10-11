import { useEffect, useState } from 'react';
import { Icon } from 'components';
export const AboutUs = () => {
  const [isOpen, setIsOpen] = useState({
    mission: true,
    vision: true,
    areas: true,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsOpen({
        mission: true,
        vision: true,
        areas: true,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleFullText = section => {
    setIsOpen(prevState => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <section className="md:mb-[66px] lg:mb-[349px] mb-[34px]">
      <h2
        className="font-proza-medium font-[600]
text-[20px]
leading-[1.6]
 mb-[24px] md:mb-[34px] lg:text-[60px] lg:mb-[74px]"
      >
        About Us
      </h2>
      <div className="flex flex-col gap-[34px] md:flex-row lg:gap-[65px]">
        <div className="relative md:flex-1">
          <h3
            className={`text-[#223f86] font-proza-medium font-[500] text-[20px] leading-[1.2] md:mb-[7px] lg:font-[600] lg:text-[36px] lg:mb-[24px] ${
              isOpen.mission ? 'mb-[10px]' : 'mb-0'
            }  `}
          >
            Mission:
            <button
              className="absolute top-0 right-0 md:hidden"
              onClick={() => toggleFullText('mission')}
            >
              <Icon name={`${isOpen.mission ? 'minus' : 'plus'}`} size={24} />
            </button>
          </h3>

          <ul
            className={`custom-list ml-[18px]  leading-[1.37]  text-[16px]
             transition-all duration-500 ease-in-out md:text-[14px] lg:text-[24px]  md:leading-[1.29] lg:leading-[1.42]  ${
               isOpen.mission
                 ? 'max-h-screen opacity-100'
                 : 'max-h-0 opacity-0 transition-delay-500'
             } `}
          >
            <li className="relative  ">To preserve the national identity;</li>
            <li className="relative ">Uniting Ukrainians;</li>
            <li className="relative">
              Create an ecosystem that <br className="hidden md:block" />
              helps them adapt to their <br className="hidden md:block" />
              new environment;
            </li>
            <li className="relative">
              Promote Ukrainian <br className="hidden md:block" />
              traditions and conduct <br className="hidden md:block" />
              cultural dialogues with the Dutch;
            </li>
            <li className="relative">
              Defending Ukraine&#39;s democratic values and interests.
            </li>
          </ul>
        </div>
        <div className="relative md:flex-1">
          <h3
            className={`text-[#223f86] font-proza-medium font-[500] text-[20px] leading-[1.2] md:mb-[7px] lg:text-[36px] lg:font-[600] lg:mb-[24px] ${
              isOpen.vision ? 'mb-[10px]' : 'mb-0'
            }  `}
          >
            Vision:{' '}
            <button
              className="absolute top-0 right-0 md:hidden"
              onClick={() => toggleFullText('vision')}
            >
              <Icon name={`${isOpen.vision ? 'minus' : 'plus'}`} size={24} />
            </button>
          </h3>

          <p
            className={`
             transition-all duration-500 ease-in-out leading-[1.37]  text-[16px] md:text-[14px] md:leading-[1.29]  lg:text-[24px]  lg:leading-[1.42] ${
               isOpen.vision
                 ? 'max-h-screen opacity-100'
                 : 'max-h-0 opacity-0 transition-delay-500'
             } `}
          >
            We aim for the Ukrainian <br className="hidden md:block" />
            House in Maastricht to become <br className="hidden md:block" />a
            source of inspiration and support for Ukrainians in the Netherlands,
            contributing to <br className="hidden md:block" />
            their adaptation and preserving their cultural heritage.
          </p>
        </div>
        <div className="relative md:flex-1">
          <h3
            className={`text-[#223f86] font-proza-medium font-[500] text-[20px] leading-[1.2] md:mb-[7px] lg:text-[36px] lg:mb-[24px] lg:font-[600] ${
              isOpen.areas ? 'mb-[10px]' : 'mb-0'
            }  `}
          >
            Areas of Activity:{' '}
            <button
              className="absolute top-0 right-0 md:hidden"
              onClick={() => toggleFullText('areas')}
            >
              <Icon name={`${isOpen.areas ? 'minus' : 'plus'}`} size={24} />
            </button>
          </h3>

          <ul
            className={`custom-list  ml-[18px] mb-[34px]  leading-[1.37]  text-[16px]"
             transition-all duration-500 ease-in-out  md:text-[14px] md:leading-[1.29] md:md-0 lg:text-[24px]  lg:leading-[1.42]  ${
               isOpen.areas
                 ? 'max-h-screen opacity-100'
                 : 'max-h-0 opacity-0 transition-delay-500'
             } `}
          >
            <li className="relative">Information Support;</li>
            <li className="relative">Language Courses;</li>
            <li className="relative">Cultural Events;</li>
            <li className="relative">Educational Programmes;</li>
            <li className="relative">Community Gatherings;</li>
            <li className="relative">Intercultural Projects.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
