import { Link } from 'react-router-dom';
import { Icon } from 'components';
import { useEffect, useState } from 'react';

export const Activities = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getIconSize = () => {
    if (windowWidth >= 1440) {
      return 40;
    } else {
      return 15;
    }
  };

  return (
    <ul className="flex flex-col gap-[16px] mb-[44px] leading-[1.2] text-[20px] font-[500] font-proza-medium md:grid md:gap-[24px] md:grid-cols-1 md:grid-rows-4  lg:mb-0 lg:gap-[34px] lg:gap-y-[24px] lg:gap-x-[84px]   lg:leading-[1.6] lg:absolute lg:top-[-180px] lg:left-[586px]">
      <li className="font-[600] flex items-center gap-[8px] md:col-start-1 lg:gap-[24px]">
        <Icon size={getIconSize()} />
        Ukrainian Echo
      </li>
      <li className="flex items-center gap-[8px] md:col-start-1 lg:gap-[24px]">
        {' '}
        <Icon size={getIconSize()} /> Dutch Lessons
      </li>
      <li className="flex items-center gap-[8px]  md:col-start-1 lg:gap-[24px]">
        <Icon size={getIconSize()} />
        Cultural Events
      </li>
      <li className="flex items-center gap-[8px] md:col-start-1  lg:gap-[24px]">
        {' '}
        <Icon size={getIconSize()} /> Integration Lectures
      </li>
      <li className="flex items-center gap-[8px] md:col-start-2 md:row-start-1 lg:gap-[24px]">
        {' '}
        <Icon size={getIconSize()} /> Creative Workshops
      </li>
      <li className="flex items-center gap-[8px]  md:col-start-2 md:row-start-2 lg:gap-[24px]">
        {' '}
        <Icon size={getIconSize()} /> Yoga Sessions
      </li>
      <li className="flex items-center gap-[8px] md:col-start-2 md:row-start-3  lg:gap-[24px]">
        {' '}
        <Icon size={getIconSize()} /> Cinema
      </li>
      <li className="font-[600] flex items-center gap-[8px] md:col-start-2 md:row-start-4 lg:gap-[24px]">
        <Icon size={getIconSize()} />
        <Link
          to="/library"
          className="border-b-2 border-[#2355cc] text-[#2355cc]"
        >
          Library
        </Link>
      </li>
    </ul>
  );
};
