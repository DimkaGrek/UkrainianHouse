import { Link } from 'react-router-dom';
import { Icon } from 'components';

import titleImg1 from '../../assets/images/home/Title@1x_mobile.png';
import titleImg2 from '../../assets/images/home/Title@2x_mobile.png';

import titleImg3 from '../../assets/images/home/Title@1x_tablet.png';
import titleImg4 from '../../assets/images/home/Title@2x_tablet.png';

import flagImg1 from '../../assets/images/home/ManwithFlag@1x_mobile.png';
import flagImg2 from '../../assets/images/home/ManwithFlag@2x_mobile.png';

import flagImg3 from '../../assets/images/home/ManwithFlag@1x_tablet.png';
import flagImg4 from '../../assets/images/home/ManwithFlag@2x_tablet.png';

import flagImg5 from '../../assets/images/home/ManwithFlag@1x_desktop.png';
import flagImg6 from '../../assets/images/home/ManwithFlag@2x_desktop.png';

export const Hero = () => {
  return (
    <section className="flex flex-col gap-[16px] md:flex-row md:align-bottom ">
      <picture>
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
        />
      </picture>
      <div>
        <div className="relative mb-[24px] md:mb-0">
          <p className="text-[18px] leading-[1.33] w-[106px] md:w-[201px] font-istok ">
            Community of Ukrainians in Limburg and beyond
          </p>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={`${flagImg3} 1x, ${flagImg4} 2x`}
              type="image/png"
              height="177"
              width="193"
            />
            <source
              media="(min-width: 1440px)"
              srcSet={`${flagImg5} 1x, ${flagImg6} 2x`}
              height="464"
              width="513"
              type="image/png"
            />

            <img
              src={flagImg1}
              srcSet={`${flagImg1} 1x, ${flagImg2} 2x`}
              height="148"
              width="177"
              alt="Photo of man with ukrainian flag"
              className=" absolute right-0 top-[-33px]"
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
    </section>
  );
};
