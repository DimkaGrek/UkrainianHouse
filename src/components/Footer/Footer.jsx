import { NavLink } from 'react-router-dom';

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
import iPhone1x_desktop from '../../assets/images/header/iPhone1x_desktop.png';
import iPhone2x_desktop from '../../assets/images/header/iPhone2x_desktop.png';
import { Icon } from '../Icon/Icon';

const Footer = () => {
  return (
    <footer className="container pt-[24px] pb-[84px]">
      <div className="pb-[132.16px]">
        <picture>
          <source
            media="(max-width: 1023.99px)"
            srcSet={`${tape_1x_mob} 1x, ${tape_2x_mob} 2x`}
            height="76"
            loading="lazy"
          />
          <source
            media="(min-width: 1024px)"
            srcSet={`${tape_1x_tablet} 1x, ${tape_2x_tablet} 2x`}
            height="76"
            loading="lazy"
          />
          <source
            media="(min-width: 1920px)"
            srcSet={`${tape_1x_desktop} 1x, ${tape_2x_desktop} 2x`}
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
      <div className="flex flex-col">
        <div className="flex mb-[76px]">
          <div className="flex items-center justify-between text-center">
            <NavLink to="/" className="mr-[157px]">
              <picture>
                <source
                  media="(max-width: 1023.99px)"
                  srcSet={`${logo_mobile1x} 1x, ${logo_mobile2x} 2x`}
                  width="66"
                  height="44"
                  loading="lazy"
                />
                <source
                  media="(min-width: 1024px)"
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
            </NavLink>
            <div className="hidden md:flex items-center text-center mr-[93.5px]">
              <ul className="flex flex-wrap gap-x-[126px] gap-y-[32px] w-[577px] font-normal text-[24px] leading-relaxed text-left text-gray-700">
                <li className="">
                  <NavLink to="/" className="">
                    Home
                  </NavLink>
                </li>
                <li className="">
                  <NavLink to="/library" className="">
                    Library
                  </NavLink>
                </li>
                <li className="">Site developers</li>
                <li className="">
                  <NavLink to="/news" className="">
                    News
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contacts" className="">
                    Contacts
                  </NavLink>
                </li>
                <li>Activities</li>
              </ul>
            </div>
            <ul className="flex flex-wrap gap-[20px] items-center w-[664px]">
              <li className="font-bold text-[20px] leading-7 text-center text-gray-900 ">
                <a
                  className="flex gap-[6px] border border-[#1e1e1e] rounded-[10px] px-[18px] py-[10px] w-[347px] h-[54px]"
                  href="https://www.facebook.com/ua.maastricht"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Icon name="fb" className="fill-[#1e1e1e]" size="28" />
                  Let’s be friends on facebook
                </a>
              </li>
              <li className="font-bold text-[20px] leading-7 text-center text-gray-900">
                <a
                  className="flex gap-[6px] border border-gray-700 rounded-[10px] px-[18px] py-[10px] w-[297px] h-[54px]"
                  href="https://www.instagram.com/ukrainianhousemaastricht/?igsh=c2I5N2I0Z2dvN2Fk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Icon name="insta" className="fill-[#1e1e1e]" size="28" />
                  Follow us on instagram
                </a>
              </li>
              <li className="font-bold text-[20px] leading-7 text-center text-gray-900">
                <a
                  className="flex gap-[6px] border border-gray-700 rounded-[10px] px-[18px] py-[10px] w-[347px] h-[54px]"
                  href="https://t.me/+cGjweuHlhU00N2E8"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                >
                  <Icon name="telegram" className="fill-[#1e1e1e]" size="28" />
                  Connect us on telegram
                </a>
              </li>
              <li className="font-bold text-[20px] leading-7 text-center text-gray-900">
                <a
                  className="flex gap-[6px] border border-gray-700 rounded-[10px] px-[18px] py-[10px] w-[297px] h-[54px]"
                  href="https://www.linkedin.com/company/ukrainian-house-in-maastricht/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linkedin"
                >
                  <Icon name="linkedin" className="fill-[#1e1e1e]" size="28" />
                  Find us in LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex mb-[65px] w-[100%]">
          <address className="mr-[472.5px]">
            <ul>
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
          <div className="relative flex flex-col w-[474px]">
            <p className="text-start font-normal text-[20px] leading-5 text-gray-700 mb-3">
              &quot; In unity, our strength; in community, our essence. United
              by Ukrainian culture, we create a world where everyone finds their
              place and feels at home. &quot;
            </p>
            <p className="text-end italic leading-6 text-[#1e1e1e]">
              Lesya Ukrainka
            </p>
            <img
              className="absolute top-1/2 right-1/2 transform-translate-1/2-1/2 w-[125px] h-[249px]"
              srcSet={`${iPhone1x_desktop} 1x, ${iPhone2x_desktop} 2x`}
              src={iPhone1x_desktop}
              alt="Phone in hand"
            />
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
        <p className="flex justify-center">
          &copy; 2024 Ukrainian House in Maastricht. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
