import { Icon } from "../../components";

import { useResizeAndState } from "../../hooks";

export const AboutUs = () => {
  const { isOpen, setIsOpen } = useResizeAndState();

  const toggleFullText = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <section className="mb-[34px] md:mb-[66px] lg:mb-[349px]">
      <h2 className="font-proza-medium mb-[24px] text-[20px] font-[600] leading-[1.6] md:mb-[34px] lg:mb-[74px] lg:text-[60px]">
        About Us
      </h2>
      <div className="flex flex-col gap-[34px] md:flex-row lg:gap-[65px]">
        <div className="relative md:flex-1">
          <h3
            className={`font-proza-medium text-[20px] font-[500] leading-[1.2] text-[#223f86] md:mb-[7px] lg:mb-[24px] lg:text-[36px] lg:font-[600] ${
              isOpen.mission ? "mb-[10px]" : "mb-0"
            } `}
          >
            Mission:
            <button
              className="absolute right-0 top-0 md:hidden"
              onClick={() => toggleFullText("mission")}
            >
              <Icon name={`${isOpen.mission ? "minus" : "plus"}`} size={24} />
            </button>
          </h3>

          <ul
            className={`custom-list ml-[18px] text-[16px] leading-[1.37] transition-all duration-500 ease-in-out md:text-[14px] md:leading-[1.29] lg:text-[24px] lg:leading-[1.42] ${
              isOpen.mission ? "max-h-screen opacity-100" : "transition-delay-500 max-h-0 opacity-0"
            } `}
          >
            <li className="relative">To preserve the national identity;</li>
            <li className="relative">Uniting Ukrainians;</li>
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
            <li className="relative">Defending Ukraine&#39;s democratic values and interests.</li>
          </ul>
        </div>
        <div className="relative md:flex-1">
          <h3
            className={`font-proza-medium text-[20px] font-[500] leading-[1.2] text-[#223f86] md:mb-[7px] lg:mb-[24px] lg:text-[36px] lg:font-[600] ${
              isOpen.vision ? "mb-[10px]" : "mb-0"
            } `}
          >
            Vision:{" "}
            <button
              className="absolute right-0 top-0 md:hidden"
              onClick={() => toggleFullText("vision")}
            >
              <Icon name={`${isOpen.vision ? "minus" : "plus"}`} size={24} />
            </button>
          </h3>

          <p
            className={`text-[16px] leading-[1.37] transition-all duration-500 ease-in-out md:text-[14px] md:leading-[1.29] lg:text-[24px] lg:leading-[1.42] ${
              isOpen.vision ? "max-h-screen opacity-100" : "transition-delay-500 max-h-0 opacity-0"
            } `}
          >
            We aim for the Ukrainian <br className="hidden md:block" />
            House in Maastricht to become <br className="hidden md:block" />a source of inspiration
            and support for Ukrainians in the Netherlands, contributing to{" "}
            <br className="hidden md:block" />
            their adaptation and preserving their cultural heritage.
          </p>
        </div>
        <div className="relative md:flex-1">
          <h3
            className={`font-proza-medium text-[20px] font-[500] leading-[1.2] text-[#223f86] md:mb-[7px] lg:mb-[24px] lg:text-[36px] lg:font-[600] ${
              isOpen.areas ? "mb-[10px]" : "mb-0"
            } `}
          >
            Areas of Activity:{" "}
            <button
              className="absolute right-0 top-0 md:hidden"
              onClick={() => toggleFullText("areas")}
            >
              <Icon name={`${isOpen.areas ? "minus" : "plus"}`} size={24} />
            </button>
          </h3>

          <ul
            className={`custom-list text-[16px]" md:md-0 mb-[34px] ml-[18px] leading-[1.37] transition-all duration-500 ease-in-out md:text-[14px] md:leading-[1.29] lg:text-[24px] lg:leading-[1.42] ${
              isOpen.areas ? "max-h-screen opacity-100" : "transition-delay-500 max-h-0 opacity-0"
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
