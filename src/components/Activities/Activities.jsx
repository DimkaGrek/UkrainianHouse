import { Link } from "react-router-dom";

import { Icon } from "../../components";

import { useResizeAndState } from "../../hooks";
import { getIconSize } from "../../helpers";

export const Activities = () => {
  const { windowWidth } = useResizeAndState();

  const isonSize = getIconSize(windowWidth);

  return (
    <ul className="font-proza-medium md:grid-cols-1 md:grid-rows-4 mb-[44px] flex flex-col gap-[16px] text-[20px] font-semibold leading-[1.2] md:grid md:gap-[24px] lg:absolute lg:left-[586px] lg:top-[-180px] lg:mb-0 lg:gap-[34px] lg:gap-x-[84px] lg:gap-y-[24px] lg:leading-[1.6]">
      <li className="flex items-center gap-[8px] md:col-start-1 lg:gap-[24px]">
        <Icon size={isonSize} />
        Ukrainian Echo
      </li>
      <li className="flex items-center gap-[8px] font-[600] md:col-start-1 lg:gap-[24px]">
        <Icon size={isonSize} /> Dutch Lessons
      </li>
      <li className="flex items-center gap-[8px] md:col-start-1 lg:gap-[24px]">
        <Icon size={isonSize} />
        Cultural Events
      </li>
      <li className="flex items-center gap-[8px] md:col-start-1 lg:gap-[24px]">
        <Icon size={isonSize} /> Integration Lectures
      </li>
      <li className="flex items-center gap-[8px] md:col-start-2 md:row-start-1 lg:gap-[24px]">
        <Icon size={isonSize} /> Creative Workshops
      </li>
      <li className="flex items-center gap-[8px] md:col-start-2 md:row-start-2 lg:gap-[24px]">
        <Icon size={isonSize} /> Yoga Sessions
      </li>
      <li className="flex items-center gap-[8px] font-[600] md:col-start-2 md:row-start-3 lg:gap-[24px]">
        <Icon size={isonSize} /> Cinema
      </li>
      <li className="flex items-center gap-[8px] md:col-start-2 md:row-start-4 lg:gap-[24px]">
        <Icon size={isonSize} />
        <Link to="/library" className="border-b-2 border-[#2355cc] text-[#2355cc]">
          Library
        </Link>
      </li>
    </ul>
  );
};
