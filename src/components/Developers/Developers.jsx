import { getDevelopers } from '../../helpers';
import { Icon } from '../Icon/Icon';
export const Developers = () => {
  const developers = getDevelopers();

  return (
    <>
      <h4 className="font-proza font-medium text-[20px] text-[#1e1e1e] leading-[1.2] w-[320px] mb-[16px] sm-max:w-[212px]">
        Web-developers “Ukrainian House” in Maastricht”
      </h4>
      <div className="carousel carousel-vertical h-[380px] md:carousel-center">
        {developers.map(({ name, url, position, photos }, index) => (
          <div
            key={index}
            className="carousel-item w-full flex flex-col pb-[15px]"
          >
            <div className="flex justify-between mb-[4px] w-full">
              <p className="font-proza font-medium text-[20px] text-[#1e1e1e] leading-[1.2]">
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
                  className="fill-[#1e1e1e] lg:size-[44px] hover:fill-[#2355cc] focus:fill-[#2355cc transition duration-300"
                  size="28"
                />
              </a>
            </div>
            <p className="font-normal text-[12px] text-[#666] leading-[1.5] mb-[8px]">
              {position}
            </p>
            <picture>
              {/* <source
              media="(min-width: 1440px)"
              srcSet={`${photos[2]} 1x, ${photos[3]} 2x`}
              height="304"
              width="367"
              loading="lazy"
            /> */}
              <img
                srcSet={`${photos[0]} 1x, ${photos[1]} 2x`}
                src={photos[0]}
                height="277"
                width="342"
                alt={`Photo of ${name}`}
                className="rounded-[18px] mb-[20px]"
                loading="lazy"
              />
            </picture>
            {developers.length - 1 > index && (
              <div className="flex justify-center w-full">
                <Icon name="down" className="fill-[#1e1e1e]" size="24" />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
