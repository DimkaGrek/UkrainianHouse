import { teamMembers } from "../../constants";
import { images } from "../../assets";

export const CarouselTeam = () => {
  const { contactsImages } = images;

  return (
    <div className="carousel carousel-center mb-[16px] max-w-full space-x-[24px] md:mb-[94px] lg:mb-[56px] lg:flex-wrap lg:gap-x-[23px] lg:gap-y-[60px] lg:space-x-0">
      {teamMembers.map(({ name, position, photos }, index) => (
        <div
          key={index}
          className="carousel-item flex w-[294px] flex-col rounded-[18px] pb-[18px] sm-max:w-[239px] lg:w-[398px] lg:pb-[24px]"
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
              alt={`Photo of ${name}`}
              className="mb-[12px] rounded-[18px] sm-max:h-[244px] sm-max:w-full lg:mb-[16px]"
              loading="lazy"
            />
          </picture>
          <p className="mb-[12px] text-center text-[20px] font-semibold leading-[1.2] text-[#1e1e1e] lg:mb-[16px] lg:text-[32px]">
            {name}
          </p>
          <p className="text-center text-[16px] font-normal leading-[1.3] text-black lg:text-[18px]">
            {position}
          </p>
        </div>
      ))}
      <div className="pl-[29px]">
        <img
          srcSet={`${contactsImages.franko_desktop1x} 1x, ${contactsImages.franko_desktop2x} 2x`}
          src={contactsImages.franko_desktop1x}
          alt="Image of the writer Ivan Franko"
          height="440"
          width="369"
          className="hidden lg:block"
          loading="lazy"
        />
      </div>
    </div>
  );
};
