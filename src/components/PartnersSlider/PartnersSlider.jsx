import Marquee from 'react-fast-marquee';
import { getPartnersLogos } from '../../helpers';

export const PartnersSlider = () => {
  const partnersLogos = getPartnersLogos();

  return (
    <div className="slider-custom">
      <Marquee direction="left">
        <ul className="flex justify-center items-center gap-2 md:gap-[48px] mr-2 md:mr-[48px]">
          {partnersLogos.map(({ logos }, index) => (
            <li key={index} className="slider-item-custom">
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
