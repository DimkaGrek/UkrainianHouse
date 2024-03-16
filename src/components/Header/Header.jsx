import { NavLink } from 'react-router-dom';

import logo_desktop1x from '../../assets/images/header/logo_desktop1x.png';
import logo_desktop2x from '../../assets/images/header/logo_desktop2x.png';
import logo_mobile1x from '../../assets/images/header/logo_mobile1x.png';
import logo_mobile2x from '../../assets/images/header/logo_mobile2x.png';
import flag_eng1x from '../../assets/images/header/flag_eng1x.png';
import flag_eng2x from '../../assets/images/header/flag_eng2x.png';

export const Header = () => {
  return (
    <header className="py-[24px] pb-[14px] pl-[160px] pr-[160px]">
      <nav className="flex items-center justify-between text-center">
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
