import { Link } from "react-router-dom";
import { Icon, PartnersSlider } from "components";

import { images } from "../../assets";

export const Hero = () => {
  const { homeImages } = images;

  return (
    <section className="mb-[34px] md:mb-[80px] lg:mb-[74px]">
      <div className="flex flex-col gap-[16px] md:mb-[40px] md:block lg:mb-[57px]">
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`${homeImages.titleImg5} 1x, ${homeImages.titleImg6} 2x`}
            type="image/webp"
            height="316"
            width="600"
          />

          <source
            media="(min-width: 768px)"
            srcSet={`${homeImages.titleImg3} 1x, ${homeImages.titleImg4} 2x`}
            type="image/webp"
            height="188"
            width="360"
          />

          <img
            height="180"
            width="342"
            srcSet={`${homeImages.titleImg1} 1x, ${homeImages.titleImg2} 2x`}
            src={homeImages.titleImg1}
            alt="Title"
            className="lg:mb-[131px]"
          />
        </picture>
        <div>
          <div className="relative mb-[24px] md:mb-0">
            <p className="w-[106px] font-istok text-[18px] leading-[1.33] md:absolute md:right-[140px] md:top-[-45px] md:w-[185px] md:text-[16px] lg:right-[245px] lg:top-[-210px] lg:w-[334px] lg:text-[28px] lg:leading-[1.29]">
              Community of Ukrainians in Limburg and beyond
            </p>
            <picture>
              <source
                media="(min-width: 1440px)"
                srcSet={`${homeImages.flagImg5} 1x, ${homeImages.flagImg6} 2x`}
                height="362"
                width="400"
                type="image/webp"
              />
              <source
                media="(min-width: 768px)"
                srcSet={`${homeImages.flagImg3} 1x, ${homeImages.flagImg4} 2x`}
                type="image/webp"
                height="177"
                width="193"
              />

              <img
                src={homeImages.flagImg1}
                srcSet={`${homeImages.flagImg1} 1x, ${homeImages.flagImg2} 2x`}
                height="148"
                width="177"
                alt="Photo of man with ukrainian flag"
                className="absolute right-0 top-[-33px] md:right-0 md:top-[-182px] lg:top-[-445px]"
              />
            </picture>
          </div>
          <Link
            to="https://www.facebook.com/ua.maastricht"
            className="flex h-[44px] w-full items-center justify-center gap-[8px] rounded-[10px] border-[1px] border-[#1e1e1e] text-[16px] font-[700] leading-[1.5] transition duration-300 hover:bg-[#ffd437] focus:bg-[#ffd437] md:hidden"
            target="_blank"
            aria-label="Link to Facebook"
          >
            <Icon name="fb" className="fill-[#1e1e1e]" size="24" />
            Let&#39;s be friends on facebook
          </Link>
        </div>
      </div>
      <PartnersSlider />
    </section>
  );
};
