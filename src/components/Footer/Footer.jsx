import { NavLink } from 'react-router-dom';

import logo_desktop1x from '../../assets/images/header/logo_desktop1x.png';
import logo_desktop2x from '../../assets/images/header/logo_desktop2x.png';
import logo_mobile1x from '../../assets/images/header/logo_mobile1x.png';
import logo_mobile2x from '../../assets/images/header/logo_mobile2x.png';
import flag_eng1x from '../../assets/images/header/flag_eng1x.png';
import flag_eng2x from '../../assets/images/header/flag_eng2x.png';
import flag_ua1x from '../../assets/images/header/flag_ua1x.png';
import flag_ua2x from '../../assets/images/header/flag_ua2x.png';
import flag_nl1x from '../../assets/images/header/flag_nl1x.png';
import flag_nl2x from '../../assets/images/header/flag_nl2x.png';
import iPhone1x_desktop from '../../assets/images/header/iPhone1x_desktop.png';
import iPhone2x_desktop from '../../assets/images/header/iPhone2x_desktop.png';

const Footer = () => {
  return (
    <footer className="py-[24px] pb-[84px] pl-[160px] pr-[160px]">
      <div className="flex flex-col">
        <div className="flex">
          <div className="flex items-center justify-between text-center">
            <NavLink to="/">
              <picture>
                <source
                  media="(max-width: 1023.99px)"
                  srcSet={`${logo_mobile1x} 1x, ${logo_mobile2x} 2x`}
                  width="54"
                  height="33"
                />
                <source
                  media="(min-width: 1024px)"
                  srcSet={`${logo_desktop1x} 1x, ${logo_desktop2x} 2x`}
                  width="101"
                  height="62"
                />
                <img
                  srcSet={`${logo_mobile1x} 1x, ${logo_mobile2x} 2x`}
                  src={logo_mobile1x}
                  alt="logotype"
                  width="54"
                  height="33"
                />
              </picture>
            </NavLink>
            <div className="hidden md:flex items-center justify-center text-center ">
              <ul className="grid grid-cols-3 gap-[126px] gap-y-[32px] font-normal text-[24px] leading-relaxed text-center text-gray-700 mr-[74px]">
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
            <ul className="grid grid-cols-2 gap-[20px]">
              <li className="font-bold text-[20px] leading-7 text-center text-gray-900">
                <a
                  className="border border-gray-700 rounded-[10px] px-[18px] py-[10px] w-[347px] h-[54px]"
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  Let’s be friends on facebook
                </a>
              </li>
              <li className="font-bold text-[20px] leading-7 text-center text-gray-900">
                <a
                  className="border border-gray-700 rounded-lg px-4 py-2 w-96 h-14"
                  href="https://www.facebook.com/ua.maastricht"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  Follow us on instagram
                </a>
              </li>
              <li className="font-bold text-[20px] leading-7 text-center text-gray-900">
                <a
                  className="border border-gray-700 rounded-lg px-4 py-2 w-96 h-14"
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                >
                  Connect us on telegram
                </a>
              </li>
              <li className="font-bold text-[20px] leading-7 text-center text-gray-900">
                <a
                  className="border border-gray-700 rounded-lg px-4 py-2 w-96 h-14"
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linkedin"
                >
                  Find us in LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between">
          <address>
            <ul>
              <li>ukrainianhouse.maastricht@gmail.com</li>
              <li> Oranjeplein 96, Maastricht, Netherlands, 6224 KV</li>
            </ul>
          </address>
          <div className="flex flex-col w-[474px]  mr-10">
            <p className="text-start font-normal text-[20px] leading-5 text-gray-700 mb-3">
              &quot; In unity, our strength; in community, our essence. United
              by Ukrainian culture, we create a world where everyone finds their
              place and feels at home. &quot;
            </p>
            <p className="text-end italic leading-6 text-gray-700">
              Lesya Ukrainka
            </p>
          </div>
          <div className="flex flex-col">
            <img
              srcSet={`${iPhone1x_desktop} 1x, ${iPhone2x_desktop} 2x`}
              src={iPhone1x_desktop}
              alt="Phone in hand"
              className="w-[125px] h-[249px]"
            />
            <div className="flex gap-4">
              <img
                srcSet={`${flag_eng1x} 1x, ${flag_eng2x} 2x`}
                src={flag_eng1x}
                alt="Flag of England"
                className="w-[40px] h-[40px]"
              />
              <img
                srcSet={`${flag_nl1x} 1x, ${flag_nl2x} 2x`}
                src={flag_nl1x}
                alt="Flag of Netherland"
                className="w-[40px] h-[40px]"
              />
              <img
                srcSet={`${flag_ua1x} 1x, ${flag_ua2x} 2x`}
                src={flag_ua1x}
                alt="Flag of Ukraine"
                className="w-[40px] h-[40px]"
              />
            </div>
          </div>
          <p className="flex justify-center">
            &copy; 2024 Ukrainian House in Maastricht. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
