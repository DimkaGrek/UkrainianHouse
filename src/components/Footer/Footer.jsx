import { NavLink, Link } from 'react-router-dom';

import tape_1x_mob from '../../assets/images/footer/tape_1x_mob.jpg';
import tape_2x_mob from '../../assets/images/footer/tape_2x_mob.jpg';
import tape_1x_tablet from '../../assets/images/footer/tape_1x_tablet.jpg';
import tape_2x_tablet from '../../assets/images/footer/tape_2x_tablet.jpg';
import tape_1x_desktop from '../../assets/images/footer/tape_1x_desktop.jpg';
import tape_2x_desktop from '../../assets/images/footer/tape_2x_desktop.jpg';
import logo_desktop1x from '../../assets/images/footer/logo_desktop1x.png';
import logo_desktop2x from '../../assets/images/footer/logo_desktop2x.png';
import logo_mobile1x from '../../assets/images/footer/logo_mobile1x.png';
import logo_mobile2x from '../../assets/images/footer/logo_mobile2x.png';
import flag_eng1x from '../../assets/images/header/flag_eng1x.png';
import flag_eng2x from '../../assets/images/header/flag_eng2x.png';
import flag_ua1x from '../../assets/images/header/flag_ua1x.png';
import flag_ua2x from '../../assets/images/header/flag_ua2x.png';
import flag_nl1x from '../../assets/images/header/flag_nl1x.png';
import flag_nl2x from '../../assets/images/header/flag_nl2x.png';
import iPhone1x_desktop from '../../assets/images/footer/iPhone1x_desktop.png';
import iPhone2x_desktop from '../../assets/images/footer/iPhone2x_desktop.png';
import iPhone1x_tablet from '../../assets/images/footer/iPhone1x_tablet.png';
import iPhone2x_tablet from '../../assets/images/footer/iPhone2x_tablet.png';
import iPhone1x_mob from '../../assets/images/footer/iPhone1x_mob.png';
import iPhone2x_mob from '../../assets/images/footer/iPhone2x_mob.png';
import { Icon } from '../Icon/Icon';

const Footer = () => {
  return (
    <footer className="container pt-[24px] pb-[84px]">
      <div className="mb-[58px] mb:mb-[33px] lg:mb-[132.16px]">
        <picture>
          <source
            media="(min-width: 1920px)"
            srcSet={`${tape_1x_desktop} 1x, ${tape_2x_desktop} 2x`}
            height="76"
            loading="lazy"
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${tape_1x_tablet} 1x, ${tape_2x_tablet} 2x`}
            height="76"
            loading="lazy"
          />
          <img
            srcSet={`${tape_1x_mob} 1x, ${tape_2x_mob} 2x`}
            src={tape_1x_mob}
            alt="Tape with text"
            height="76"
            loading="lazy"
            className="max-w-none w-[100%]"
          />
        </picture>
      </div>
      <div className="flex flex-col items-center relative">
        <div className="flex mb-[76px]">
          <div className="flex flex-col items-center text-center lg:justify-between">
            <Link to="/" className="mr-[147px]">
              <picture>
                <source
                  media="(min-width: 1920px)"
                  srcSet={`${logo_desktop1x} 1x, ${logo_desktop2x} 2x`}
                  width="116"
                  height="78"
                  loading="lazy"
                />
                <img
                  srcSet={`${logo_mobile1x} 1x, ${logo_mobile2x} 2x`}
                  src={logo_mobile1x}
                  alt="logotype"
                  width="66"
                  height="44"
                  className="max-w-none"
                  loading="lazy"
                />
              </picture>
            </Link>
            <div className="hidden md:flex items-center text-center mb-[50px] lg:mr-[92px]">
              <ul className="flex flex-col gap-[20px] justify-center font-normal text-[24px] leading-relaxed text-center text-[#1e1e1e] lg:flex-wrap lg:gap-x-[126px] lg:gap-y-[32px] lg:w-[577px] lg:text-left">
                <li className="hover:text-[#3e38c8] focus:text-[#3e38c8] transition duration-300">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="hover:text-[#3e38c8] focus:text-[#3e38c8] transition duration-300">
                  <NavLink to="/library">Library</NavLink>
                </li>
                <li className="hover:text-[#3e38c8] focus:text-[#3e38c8] transition duration-300">
                  Site developers
                </li>
                <li className="hover:text-[#3e38c8] focus:text-[#3e38c8] transition duration-300">
                  <NavLink to="/news">News</NavLink>
                </li>
                <li className="hover:text-[#3e38c8] focus:text-[#3e38c8] transition duration-300">
                  <NavLink to="/contacts">Contacts</NavLink>
                </li>
                <li className="hover:text-[#3e38c8] focus:text-[#3e38c8] transition duration-300">
                  Activities
                </li>
              </ul>
            </div>
            <ul className="flex flex-col items-center lg:flex-wrap gap-[16px] lg:gap-[20px] w-[664px]">
              <li className="font-bold text-[16px] lg:text-[20px] leading-[1.5] text-center text-gray-900 ">
                <a
                  className="flex items-center gap-[8px] lg:gap-[6px] border border-[#1e1e1e] rounded-[10px] lg:px-[18px] px-[16px] py-[10px] w-[342px] h-[44px] lg:w-[347px] lg:h-[54px] hover:text-[#fff] hover:bg-[#2355cc] focus:text-[#fff] focus:bg-[#2355cc] transition duration-300 group"
                  href="https://www.facebook.com/ua.maastricht"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Icon
                    name="fb"
                    className="fill-[#1e1e1e] lg:w-[28px] h-[28px] group-hover:fill-[#fff] group-focus:fill-[#fff] transition duration-300"
                    size="24"
                  />
                  Let&#39;s be friends on facebook
                </a>
              </li>
              <li className="font-bold text-[16px] lg:text-[20px] leading-[1.5] text-center text-gray-900 ">
                <a
                  className="flex items-center gap-[8px] lg:gap-[6px] border border-[#1e1e1e] rounded-[10px] lg:px-[18px] px-[16px] py-[10px] w-[342px] h-[44px] lg:w-[347px] lg:h-[54px] hover:text-[#fff] hover:bg-[#2355cc] focus:text-[#fff] focus:bg-[#2355cc] transition duration-300 group"
                  href="https://www.instagram.com/ukrainianhousemaastricht/?igsh=c2I5N2I0Z2dvN2Fk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Icon
                    name="insta"
                    className="fill-[#1e1e1e] lg:w-[28px] h-[28px] group-hover:fill-[#fff] group-focus:fill-[#fff] transition duration-300"
                    size="24"
                  />
                  Follow us on instagram
                </a>
              </li>
              <li className="font-bold text-[16px] lg:text-[20px] leading-[1.5] text-center text-gray-900 ">
                <a
                  className="flex items-center gap-[8px] lg:gap-[6px] border border-[#1e1e1e] rounded-[10px] lg:px-[18px] px-[16px] py-[10px] w-[342px] h-[44px] lg:w-[347px] lg:h-[54px] hover:text-[#fff] hover:bg-[#2355cc] focus:text-[#fff] focus:bg-[#2355cc] transition duration-300 group"
                  href="https://t.me/+cGjweuHlhU00N2E8"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                >
                  <Icon
                    name="telegram"
                    className="fill-[#1e1e1e] lg:w-[28px] h-[28px] group-hover:fill-[#fff] group-focus:fill-[#fff] transition duration-300"
                    size="24"
                  />
                  Connect us on telegram
                </a>
              </li>
              <li className="font-bold text-[16px] lg:text-[20px] leading-[1.5] text-center text-gray-900 ">
                <a
                  className="flex items-center gap-[8px] lg:gap-[6px] border border-[#1e1e1e] rounded-[10px] lg:px-[18px] px-[16px] py-[10px] w-[342px] h-[44px] lg:w-[347px] lg:h-[54px] hover:text-[#fff] hover:bg-[#2355cc] focus:text-[#fff] focus:bg-[#2355cc] transition duration-300 group"
                  href="https://www.linkedin.com/company/ukrainian-house-in-maastricht/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linkedin"
                >
                  <Icon
                    name="linkedin"
                    className="fill-[#1e1e1e] lg:w-[28px] h-[28px] group-hover:fill-[#fff] group-focus:fill-[#fff] transition duration-300"
                    size="24"
                  />
                  Find us in LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col mb-[65px]">
          <address className="hidden lg:mr-[472.5px]">
            <ul className="flex flex-col gap-4 text-[#1e1e1e] font-normal text-[20px] leading-5 not-italic">
              <li className="flex gap-[6px]">
                <Icon
                  name="mail"
                  className="fill-[#1e1e1e]"
                  size="24"
                  viewbox="24"
                />
                ukrainianhouse.maastricht@gmail.com
              </li>
              <li className="flex gap-[6px]">
                <Icon name="adress" className="fill-[#1e1e1e]" size="24" />
                Oranjeplein 96, Maastricht, Netherlands, 6224 KV
              </li>
            </ul>
          </address>
          <div className=" flex flex-col w-[342px] lg:w-[474px]">
            <p className="text-start font-normal text-[14px] leading-[1.3] lg:text-[20px] lg:leading-[1.4] text-[#1e1e1e] mb-3">
              &quot; In unity, our strength; in community, our essence. United
              by Ukrainian culture, we create a world where everyone finds their
              place and feels at home. &quot;
            </p>
            <p className="text-end lg:italic leading-6 text-[#1e1e1e]">
              Lesya Ukrainka
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <img
            srcSet={`${flag_eng1x} 1x, ${flag_eng2x} 2x`}
            src={flag_eng1x}
            alt="Flag of England"
            className="w-[40px] h-[40px]"
            loading="lazy"
          />
          <img
            srcSet={`${flag_nl1x} 1x, ${flag_nl2x} 2x`}
            src={flag_nl1x}
            alt="Flag of Netherland"
            className="w-[40px] h-[40px]"
            loading="lazy"
          />
          <img
            srcSet={`${flag_ua1x} 1x, ${flag_ua2x} 2x`}
            src={flag_ua1x}
            alt="Flag of Ukraine"
            className="w-[40px] h-[40px]"
            loading="lazy"
          />
        </div>
        <p className="flex justify-center text-center text-[#1e1e1e] lg:italic text-[12px] lg:text-[16px] font-normal leading-[1.5] lg:leading-[1.25] w-[220px] md-[100%]">
          &copy; 2024 Ukrainian House in Maastricht. All rights reserved.
        </p>
        <picture>
          <source
            media="(min-width: 1920px)"
            srcSet={`${iPhone1x_desktop} 1x, ${iPhone2x_desktop} 2x`}
            width="125"
            height="76"
            loading="lazy"
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${iPhone1x_tablet} 1x, ${iPhone2x_tablet} 2x`}
            width="160"
            height="80"
            loading="lazy"
          />
          <img
            className="absolute top-[50px] right-[20px] lg:bottom-[50px] max-w-none"
            srcSet={`${iPhone1x_mob} 1x, ${iPhone2x_mob} 2x`}
            src={iPhone1x_mob}
            alt="Phone in hand"
            loading="lazy"
            height="192"
            width="96"
          />
        </picture>
      </div>
    </footer>
  );
};
export default Footer;
