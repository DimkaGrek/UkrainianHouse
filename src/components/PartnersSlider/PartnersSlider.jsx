import Marquee from 'react-fast-marquee';
import { getPartnersLogos } from '../../helpers';

export const PartnersSlider = () => {
  const partnersLogos = getPartnersLogos();

  return (
    <div className="hidden md:block">
      <Marquee direction="right">
        <ul className="flex justify-center items-center md:gap-[10px] overflow-y-hidden lg:gap-[14px]">
          {partnersLogos.map(({ logos }, index) => (
            <li
              key={index}
              className="flex justify-center items-center h-[73px] w-[122px] lg:h-[120px]"
            >
              <img
                src={logos[0]}
                srcSet={`${logos[0]} 1x, ${logos[1]} 2x`}
                alt="Partner's logo"
              />
            </li>
          ))}
        </ul>
      </Marquee>
    </div>
  );
};
