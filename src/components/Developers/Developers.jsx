import { getDevelopers } from '../../helpers';
import { Icon } from '../Icon/Icon';
export const Developers = () => {
  const developers = getDevelopers();

  return (
    <>
      <h4 className="font-proza font-medium text-[20px] text-[#1e1e1e] leading-[1.2] w-[280px] mb-[16px] sm-max:w-[212px] md:w-[450px] md:mb-[21px] md:text-[24px] md:font-semibold md:leading-[1.6] lg:w-full lg:text-[36px] lg:mb-[32px]">
        Web-developers “Ukrainian House in Maastricht”
      </h4>
      <div className="carousel carousel-vertical h-[315px] md:flex-row md:carousel-center md:h-[380px] md:space-x-[44px] sm-max:h-[260px] md:w-full lg:flex-wrap lg:gap-x-[44px] lg:gap-y-0 lg:space-x-0 lg:h-full">
        {developers.map(({ name, url, position, photos }, index) => (
          <div
            key={index}
            className="carousel-item w-full flex flex-col pb-[25px] md:pb-[24px] md:w-[304px] lg:pb-[23px] lg:w-[255px]"
          >
            <div className="md:order-2">
              <div className="flex justify-between items-center mb-[4px] w-full md:mb-[5px] lg:mb-0">
                <p className="font-proza font-medium text-[20px] text-[#1e1e1e] leading-[1.2] md:text-[24px] md:leading-[1.3]">
                  {name}
                </p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linkedin"
                >
                  <Icon
                    name="linkedin"
                    className="fill-[#1e1e1e] md:size-[44px] lg:size-[38px] hover:fill-[#2355cc] focus:fill-[#2355cc] transition duration-300"
                    size="28"
                  />
                </a>
              </div>
              <p className="font-normal whitespace-pre-line text-[12px] text-[#666] leading-[1.5] mb-[8px] md:text-[20px] md:italic md:leading-[1.5] md:mb-0 lg:text-[18px]">
                {position}
              </p>
            </div>

            <picture className="md:order-1">
              <source
                media="(min-width: 768px)"
                srcSet={`${photos[2]} 1x, ${photos[3]} 2x`}
                height="304"
                width="367"
                loading="lazy"
              />
              <img
                srcSet={`${photos[0]} 1x, ${photos[1]} 2x`}
                src={photos[0]}
                height="277"
                width="342"
                alt={`Photo of ${name}`}
                className="rounded-[18px] mb-[20px] md:mb-[21px] lg:mb-[16px]"
                loading="lazy"
              />
            </picture>

            {developers.length - 1 > index && (
              <div className="flex justify-center w-full md:hidden">
                <Icon name="down" className="fill-[#1e1e1e]" size="24" />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
