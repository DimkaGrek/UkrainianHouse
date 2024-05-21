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
      <div className="mb-[58px] mb:mb-[34px] lg:mb-[132px]">
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
            className="max-w-none w-full"
          />
        </picture>
      </div>
      <div className="flex flex-col items-center relative">
        <div className="flex flex-col items-center text-center mb-[154px] md:mb-[36px] lg:mb-[76px] lg:flex-row lg:flex-wrap lg:justify-between">
          <div className="flex items-center gap-[100px] mb-[50px] md:mb-[44px] lg:gap-[157px] lg:mb-0">
            <Link to="/" className="hidden md:inline-block">
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

            <ul className="flex flex-col gap-[20px] justify-center font-normal leading-[1.5] text-[24px] md:text-[16px] lg:text-[24px] text-center md:text-start text-[#1e1e1e] md:flex-row md:flex-wrap md:justify-start md:gap-x-[104px] md:gap-y-[14px] lg:gap-x-[41px] lg:gap-y-[32px] lg:w-[577px] lg:mr-[32px]">
              <li className="md:w-[110px] lg:w-[165px] hover:text-[#3e38c8] focus:text-[#3e38c8] transition duration-300">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="md:w-[110px] lg:w-[165px] hover:text-[#3e38c8] focus:text-[#3e38c8] transition duration-300">
                <NavLink to="/news">News</NavLink>
              </li>
              <li className="md:w-[110px] lg:w-[165px] hover:text-[#3e38c8] focus:text-[#3e38c8] transition duration-300">
                <NavLink to="/library">Library</NavLink>
              </li>
              <li className="md:w-[110px] lg:w-[165px] hover:text-[#3e38c8] focus:text-[#3e38c8] transition duration-300">
                <NavLink to="/contacts">Contacts</NavLink>
              </li>
              <li className="md:w-[110px] lg:w-[165px] cursor-pointer hover:text-[#3e38c8] focus:text-[#3e38c8] transition duration-300">
                Site developers
              </li>
              <li className="md:w-[110px] lg:w-[165px] cursor-pointer hover:text-[#3e38c8] focus:text-[#3e38c8] transition duration-300">
                Activities
              </li>
            </ul>
          </div>

          <div className="flex justify-between mb-[50px] w-full md:hidden">
            <Link to="/">
              <img
                srcSet={`${logo_mobile1x} 1x, ${logo_mobile2x} 2x`}
                src={logo_mobile1x}
                alt="logotype"
                width="66"
                height="44"
                className="max-w-none"
                loading="lazy"
              />
            </Link>

            <ul className="flex gap-4">
              <li>
                <img
                  srcSet={`${flag_eng1x} 1x, ${flag_eng2x} 2x`}
                  src={flag_eng1x}
                  alt="Flag of England"
                  className="w-[40px] h-[40px]"
                  loading="lazy"
                />
              </li>
              <li>
                <img
                  srcSet={`${flag_nl1x} 1x, ${flag_nl2x} 2x`}
                  src={flag_nl1x}
                  alt="Flag of Netherland"
                  className="w-[40px] h-[40px]"
                  loading="lazy"
                />
              </li>
              <li>
                <img
                  srcSet={`${flag_ua1x} 1x, ${flag_ua2x} 2x`}
                  src={flag_ua1x}
                  alt="Flag of Ukraine"
                  className="w-[40px] h-[40px]"
                  loading="lazy"
                />
              </li>
            </ul>
          </div>

          <div className="hidden md:flex justify-between items-center md:mb-[44px] md:w-full lg:hidden">
            <address className="flex-col md:gap-4">
              <ul className="text-[#1e1e1e] font-normal text-[14px] leading-[1.3] not-italic">
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

            <ul className="flex gap-4">
              <li>
                <img
                  srcSet={`${flag_eng1x} 1x, ${flag_eng2x} 2x`}
                  src={flag_eng1x}
                  alt="Flag of England"
                  className="w-[40px] h-[40px]"
                  loading="lazy"
                />
              </li>
              <li>
                <img
                  srcSet={`${flag_nl1x} 1x, ${flag_nl2x} 2x`}
                  src={flag_nl1x}
                  alt="Flag of Netherland"
                  className="w-[40px] h-[40px]"
                  loading="lazy"
                />
              </li>
              <li>
                <img
                  srcSet={`${flag_ua1x} 1x, ${flag_ua2x} 2x`}
                  src={flag_ua1x}
                  alt="Flag of Ukraine"
                  className="w-[40px] h-[40px]"
                  loading="lazy"
                />
              </li>
            </ul>
          </div>

          <ul className="flex flex-col justify-center items-center md:flex-wrap md:flex-row gap-[16px] lg:gap-[20px] lg:w-[714px]">
            <li className="font-bold text-[16px] lg:text-[20px] leading-[1.5] text-center text-gray-900 ">
              <a
                className="flex items-center gap-[8px] lg:gap-[6px] border border-[#1e1e1e] rounded-[10px] lg:px-[18px] px-[16px] py-[10px] w-[342px] h-[44px] md:w-[344px] lg:w-[347px] lg:h-[54px] hover:text-[#fff] hover:bg-[#2355cc] focus:text-[#fff] focus:bg-[#2355cc] transition duration-300 group"
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
                className="flex items-center gap-[8px] lg:gap-[6px] border border-[#1e1e1e] rounded-[10px] lg:px-[18px] px-[16px] py-[10px] w-[342px] h-[44px] md:w-[344px] lg:w-[347px] lg:h-[54px] hover:text-[#fff] hover:bg-[#2355cc] focus:text-[#fff] focus:bg-[#2355cc] transition duration-300 group"
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
                className="flex items-center gap-[8px] lg:gap-[6px] border border-[#1e1e1e] rounded-[10px] lg:px-[18px] px-[16px] py-[10px] w-[342px] h-[44px] md:w-[344px] lg:w-[347px] lg:h-[54px] hover:text-[#fff] hover:bg-[#2355cc] focus:text-[#fff] focus:bg-[#2355cc] transition duration-300 group"
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
                className="flex items-center gap-[8px] lg:gap-[6px] border border-[#1e1e1e] rounded-[10px] lg:px-[18px] px-[16px] py-[10px] w-[342px] h-[44px] md:w-[344px] lg:w-[347px] lg:h-[54px] hover:text-[#fff] hover:bg-[#2355cc] focus:text-[#fff] focus:bg-[#2355cc] transition duration-300 group"
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

        <div className="w-full mb-[50px] md:flex md:justify-end md:mb-[36px] lg:justify-between lg:items-center lg:mb-[38px]">
          <address className="hidden lg:flex flex-col gap-4">
            <ul className="text-[#1e1e1e] font-normal text-[20px] leading-[1.4]">
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

          <div className="flex flex-col md:items-end lg:mr-[165px]">
            <p className="text-[14px] leading-[1.3] lg:text-[20px] lg:leading-[1.4] text-[#1e1e1e] mb-3 w-[325px] lg:w-[465px]">
              &quot;In unity, our strength; in community, our essence. United by
              Ukrainian culture, we create a world where everyone finds their
              place and feels at home.&quot;
            </p>
            <p className="text-end md:italic leading-[2.14] text-[12px] md:text-[14px] lg:text-[20px] text-[#1e1e1e]">
              Lesya Ukrainka
            </p>
          </div>
        </div>

        <ul className="hidden lg:flex w-full gap-4">
          <li>
            <img
              srcSet={`${flag_eng1x} 1x, ${flag_eng2x} 2x`}
              src={flag_eng1x}
              alt="Flag of England"
              className="w-[40px] h-[40px]"
              loading="lazy"
            />
          </li>
          <li>
            <img
              srcSet={`${flag_nl1x} 1x, ${flag_nl2x} 2x`}
              src={flag_nl1x}
              alt="Flag of Netherland"
              className="w-[40px] h-[40px]"
              loading="lazy"
            />
          </li>
          <li>
            <img
              srcSet={`${flag_ua1x} 1x, ${flag_ua2x} 2x`}
              src={flag_ua1x}
              alt="Flag of Ukraine"
              className="w-[40px] h-[40px]"
              loading="lazy"
            />
          </li>
        </ul>

        <p className="flex justify-center text-center text-[#1e1e1e] md:italic text-[12px] lg:text-[16px] font-normal leading-[1.5] lg:leading-[1.25] w-[220px] md:w-full">
          &copy; 2024 Ukrainian House in Maastricht. All rights reserved.
        </p>
        <picture>
          <source
            media="(min-width: 1920px)"
            srcSet={`${iPhone1x_desktop} 1x, ${iPhone2x_desktop} 2x`}
            width="125"
            height="249"
            loading="lazy"
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${iPhone1x_tablet} 1x, ${iPhone2x_tablet} 2x`}
            width="80"
            height="160"
            loading="lazy"
          />
          <img
            className="absolute top-[100px] right-0 md:left-0 md:top-auto md:bottom-0 lg:left-auto lg:bottom-[30px] lg:right-0 max-w-none"
            srcSet={`${iPhone1x_mob} 1x, ${iPhone2x_mob} 2x`}
            src={iPhone1x_mob}
            alt="Phone in hand"
            width="96"
            height="192"
            loading="lazy"
          />
        </picture>
      </div>
    </footer>
  );
};
export default Footer;
