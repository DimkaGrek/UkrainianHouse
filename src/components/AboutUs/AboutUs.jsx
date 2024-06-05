import { useState } from 'react';
import { Icon } from 'components';
export const AboutUs = () => {
  const [isOpen, setIsOpen] = useState({
    mission: false,
    vision: false,
    areas: false,
  });

  const toggleFullText = section => {
    setIsOpen(prevState => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <section>
      <h2
        className="font-proza-medium font-[600]
text-[20px]
leading-[1.6]
 mb-[24px] md:mb-[34px]"
      >
        About Us
      </h2>
      <div className="flex flex-col gap-[34px]">
        {' '}
        <div className="relative">
          <h3
            className={`text-[#223f86] font-proza-medium font-[500] text-[20px] leading-[1.2] ${
              isOpen.mission ? 'mb-[10px]' : 'mb-0'
            }  `}
            onClick={() => toggleFullText('mission')}
          >
            Mission:
            <Icon
              name={`${isOpen.mission ? 'minus' : 'plus'}`}
              size={24}
              className="absolute top-0 right-0"
            />
          </h3>

          <ul
            className={`custom-list ml-[18px] 
             transition-all duration-500 ease-in-out  ${
               isOpen.mission
                 ? 'max-h-screen opacity-100'
                 : 'max-h-0 opacity-0 transition-delay-500'
             } `}
          >
            <li className="relative">To preserve the national identity;</li>
            <li className="relative">Uniting Ukrainians;</li>
            <li className="relative">
              Create an ecosystem that helps them adapt to their new
              environment;
            </li>
            <li className="relative">
              Promote Ukrainian traditions and conduct cultural dialogues with
              the Dutch;
            </li>
            <li className="relative">
              Defending Ukraine&#39;s democratic values and interests.
            </li>
          </ul>
        </div>
        <div className="relative">
          <h3
            className={`text-[#223f86] font-proza-medium font-[500] text-[20px] leading-[1.2] ${
              isOpen.vision ? 'mb-[10px]' : 'mb-0'
            }  `}
            onClick={() => toggleFullText('vision')}
          >
            Vision:{' '}
            <Icon
              name={`${isOpen.vision ? 'minus' : 'plus'}`}
              size={24}
              className="absolute top-0 right-0"
            />
          </h3>

          <p
            className={`
             transition-all duration-500 ease-in-out  ${
               isOpen.vision
                 ? 'max-h-screen opacity-100'
                 : 'max-h-0 opacity-0 transition-delay-500'
             } `}
          >
            We aim for the Ukrainian House in Maastricht to become a source of
            inspiration and support for Ukrainians in the Netherlands,
            contributing to their adaptation and preserving their cultural
            heritage.
          </p>
        </div>
        <div className="relative">
          <h3
            className={`text-[#223f86] font-proza-medium font-[500] text-[20px] leading-[1.2] ${
              isOpen.areas ? 'mb-[10px]' : 'mb-0'
            }  `}
            onClick={() => toggleFullText('areas')}
          >
            Areas of Activity:{' '}
            <Icon
              name={`${isOpen.areas ? 'minus' : 'plus'}`}
              size={24}
              className="absolute top-0 right-0"
            />
          </h3>

          <ul
            className={`custom-list  ml-[18px] mb-[34px] marker:text-[40px]"
             transition-all duration-500 ease-in-out  ${
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
