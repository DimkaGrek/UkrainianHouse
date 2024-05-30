import { getTeamMembers } from '../../helpers';

export const CarouselTeam = () => {
  const teamMembers = getTeamMembers();
  return (
    <div className="carousel carousel-center max-w-full space-x-[24px] mb-[16px] md:mb-[94px] lg:flex-wrap lg:gap-x-[23px] lg:gap-y-[60px] lg:mb-[56px] lg:space-x-0">
      {teamMembers.map(({ name, position, photos }, index) => (
        <div
          key={index}
          className="carousel-item flex flex-col w-[294px] rounded-[18px] sm-max:w-[239px] lg:w-[398px] pb-[18px] lg:pb-[24px]"
        >
          <picture>
            <source
              media="(min-width: 1440px)"
              srcSet={`${photos[2]} 1x, ${photos[3]} 2x`}
              height="469"
              width="398"
              loading="lazy"
            />
            <img
              srcSet={`${photos[0]} 1x, ${photos[1]} 2x`}
              src={photos[0]}
              height="299"
              width="294"
              alt="Photo of Yevheniia Shevtsova"
              className="rounded-[18px] mb-[12px] sm-max:h-[244px] sm-max:w-full lg:mb-[16px]"
              loading="lazy"
            />
          </picture>
          <p className="font-semibold text-[20px] leading-[1.2] text-center text-[#1e1e1e] mb-[12px] lg:text-[32px] lg:mb-[16px]">
            {name}
          </p>
          <p className="font-normal text-[16px] leading-[1.3] text-center text-black lg:text-[18px]">
            {position}
          </p>
        </div>
      ))}
    </div>
  );
};
