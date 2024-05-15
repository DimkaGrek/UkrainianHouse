import { NavLink } from 'react-router-dom';

import logo_1x from '../../assets/images/header/logo_1x.png';
import logo_2x from '../../assets/images/header/logo_2x.png';
import logo_mob_1x from '../../assets/images/header/logo_mob_1x.png';
import logo_mob_2x from '../../assets/images/header/logo_mob_2x.png';
import flag_eng1x from '../../assets/images/header/flag_eng1x.png';
import flag_eng2x from '../../assets/images/header/flag_eng2x.png';
import { Icon } from '../Icon/Icon';

export const Header = () => {
  return (
    <header className="container py-[24px] pb-[14px]">
      <nav className="flex items-center justify-between text-center">
        <NavLink to="/">
          <picture>
            <source
              media="(max-width: 1919.99px)"
              srcSet={`${logo_mob_1x} 1x, ${logo_mob_2x} 2x`}
              width="22"
              height="33"
              loading="lazy"
            />
            <source
              media="(min-width: 1920px)"
              srcSet={`${logo_1x} 1x, ${logo_2x} 2x`}
              width="47"
              height="69"
              loading="lazy"
            />
            <img
              srcSet={`${logo_1x} 1x, ${logo_mob_2x} 2x`}
              src={logo_mob_1x}
              alt="logotype"
              width="22"
              height="33"
              className="max-w-none"
              loading="lazy"
            />
          </picture>
        </NavLink>
        <Icon
          name="burger-menu"
          className="hidden md:flex justify-between fill-[#1e1e1e] lg:w-[46px] lg:h-[46px]"
          size="34"
        />
        <div className="hidden lg:flex items-center justify-center text-center">
          <ul className="flex gap-16 font-normal text-[24px] leading-relaxed text-center text-gray-700 mr-[74px]">
            <li className="">
              <NavLink to="/" className="">
                Home
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/news" className="">
                News
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/library" className="">
                Library
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts" className="">
                Contacts
              </NavLink>
            </li>
          </ul>
          <button
            type="button"
            className=" flex justify-center items-center font-bold text-[20px] leading-[1.7] text-center text-gray-900 border border-gray-900 rounded-[10px] py-2.5 px-5 w-[159px] h-[54px] mr-[24px]"
          >
            Get in touch
          </button>
          <img
            srcSet={`${flag_eng1x} 1x, ${flag_eng2x} 2x`}
            src={flag_eng1x}
            alt="Flag of England"
            className="w-[40px] h-[40px]"
          />
        </div>
      </nav>
    </header>
  );
};
