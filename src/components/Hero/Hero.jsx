import { Link } from 'react-router-dom';
import { Icon, PartnersSlider } from 'components';

import titleImg1 from '../../assets/images/home/Title@1x_mobile.png';
import titleImg2 from '../../assets/images/home/Title@2x_mobile.png';

import titleImg3 from '../../assets/images/home/Title@1x_tablet.png';
import titleImg4 from '../../assets/images/home/Title@2x_tablet.png';

import titleImg5 from '../../assets/images/home/Title@1x_desktop.png';
import titleImg6 from '../../assets/images/home/Title@2x_desktop.png';

import flagImg1 from '../../assets/images/home/ManwithFlag@1x_mobile.png';
import flagImg2 from '../../assets/images/home/ManwithFlag@2x_mobile.png';

import flagImg3 from '../../assets/images/home/ManwithFlag@1x_tablet.png';
import flagImg4 from '../../assets/images/home/ManwithFlag@2x_tablet.png';

import flagImg5 from '../../assets/images/home/ManwithFlag@1x_desktop.png';
import flagImg6 from '../../assets/images/home/ManwithFlag@2x_desktop.png';

export const Hero = () => {
  return (
    <section className="md:mb-[80px] ">
      <div className="flex flex-col gap-[16px] md:block md:mb-[40px] lg:mb-[57px] ">
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`${titleImg5} 1x, ${titleImg6} 2x`}
            type="image/png"
            height="316"
            width="600"
          />

          <source
            media="(min-width: 768px)"
            srcSet={`${titleImg3} 1x, ${titleImg4} 2x`}
            type="image/png"
            height="188"
            width="360"
          />

          <img
            height="180"
            width="342"
            srcSet={`${titleImg1} 1x, ${titleImg2} 2x`}
            src={titleImg1}
            alt="Title"
            className="lg:mb-[131px]"
          />
        </picture>
        <div>
          <div className="relative mb-[24px] md:mb-0      ">
            <p className="text-[18px] leading-[1.33] w-[106px] md:w-[185px] font-istok md:text-[16px] lg:text-[28px] lg:w-[334px] md:absolute md:top-[-45px] md:right-[140px] lg:top-[-210px] lg:right-[245px] lg:leading-[1.29]">
              Community of Ukrainians in Limburg and beyond
            </p>
            <picture>
              <source
                media="(min-width: 1440px)"
                srcSet={`${flagImg5} 1x, ${flagImg6} 2x`}
                height="362"
                width="400"
                type="image/png"
              />
              <source
                media="(min-width: 768px)"
                srcSet={`${flagImg3} 1x, ${flagImg4} 2x`}
                type="image/png"
                height="177"
                width="193"
              />

              <img
                src={flagImg1}
                srcSet={`${flagImg1} 1x, ${flagImg2} 2x`}
                height="148"
                width="177"
                alt="Photo of man with ukrainian flag"
                className="absolute right-0 top-[-33px] md:top-[-182px] md:right-0  lg:top-[-445px] "
              />
            </picture>
          </div>
          <Link
            to="https://www.facebook.com/ua.maastricht"
            className=" md:hidden mb-[34px] text-[16px] font-[700] leading-[1.5] h-[44px] w-full flex items-center justify-center gap-[8px] border-[1px] border-[#1e1e1e] rounded-[10px] hover:bg-[#ffd437]  focus:bg-[#ffd437] transition duration-300"
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
