import { Icon } from "../../components";

import { developersData } from "../../constants";

export const Developers = () => {
  return (
    <>
      <h4 className="mb-[16px] w-[280px] font-proza text-[20px] font-medium leading-[1.2] text-[#1e1e1e] sm-max:w-[212px] md:mb-[21px] md:w-[450px] md:text-[24px] md:font-semibold md:leading-[1.6] lg:mb-[32px] lg:w-full lg:text-[36px]">
        Web-developers {`\u201c`}Ukrainian House in Maastricht{`\u201d`}
      </h4>
      <div className="carousel carousel-vertical h-[315px] md:carousel-center sm-max:h-[260px] md:h-[380px] md:w-full md:flex-row md:space-x-[44px] lg:h-full lg:flex-wrap lg:gap-x-[44px] lg:gap-y-0 lg:space-x-0">
        {developersData.map(({ name, url, position, photos }, index) => (
          <div
            key={index}
            className="carousel-item flex w-full flex-col pb-[25px] md:w-[304px] md:pb-[24px] lg:w-[255px] lg:pb-[23px]"
          >
            <div className="md:order-2">
              <div className="mb-[4px] flex w-full items-center justify-between md:mb-[5px] lg:mb-0">
                <p className="font-proza text-[20px] font-medium leading-[1.2] text-[#1e1e1e] md:text-[24px] md:leading-[1.3]">
                  {name}
                </p>
                <a href={url} target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
                  <Icon
                    name="linkedin"
                    className="fill-[#1e1e1e] transition duration-300 hover:fill-[#2355cc] focus:fill-[#2355cc] md:size-[44px] lg:size-[38px]"
                    size="28"
                  />
                </a>
              </div>
              <p className="mb-[8px] whitespace-pre-line text-[12px] font-normal leading-[1.5] text-[#666] md:mb-0 md:text-[20px] md:italic md:leading-[1.5] lg:text-[18px]">
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
                className="mb-[20px] rounded-[18px] md:mb-[21px] lg:mb-[16px]"
                loading="lazy"
              />
            </picture>

            {developersData.length - 1 > index && (
              <div className="flex w-full justify-center md:hidden">
                <Icon name="down" className="fill-[#1e1e1e]" size="24" />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
