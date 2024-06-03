import { useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { Icon, Address, FlagsList } from '../../components';

import logo_desktop1x from '../../assets/images/footer/logo_desktop1x.png';
import logo_desktop2x from '../../assets/images/footer/logo_desktop2x.png';

export const BurgerMenu = ({ toggleMenu }) => {
  const navigate = useNavigate();
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      toggleMenu();
    }
  };

  useEffect(() => {
    const handleEscape = event => {
      if (event.code === 'Escape') {
        toggleMenu();
      }
    };
    window.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [toggleMenu]);

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed bg-black backdrop-blur-sm bg-opacity-40 w-full h-full left-0 top-0 z-50 lg:hidden"
    >
      <div className="relative flex flex-col justify-start items-center gap-[35px] bg-[#fff] px-[24px] py-[44px] w-[390px] sm-max:w-[300px] md:w-[653px] ml-auto h-full">
        <button
          type="button"
          className="flex justify-center items-center absolute top-[24px] right-[24px] outline-none group"
          onClick={toggleMenu}
        >
          <Icon
            name="close"
            size="38"
            className="fill-[#1e1e1e] group-focus:fill-[#2355cc] transition duration-300"
          />
        </button>

        <Link to="/" onClick={toggleMenu}>
          <img
            srcSet={`${logo_desktop1x} 1x, ${logo_desktop2x} 2x`}
            src={logo_desktop1x}
            alt="logotype"
            width="116"
            height="78"
            loading="lazy"
            className="max-w-none outline-none"
          />
        </Link>

        <ul className="flex flex-col gap-[30px] font-normal text-center text-[24px] leading-[1.5] text-[#222]">
          <li onClick={toggleMenu}>
            <NavLink
              to="/"
              className="focus:text-[#3e38c8] transition duration-300"
            >
              Home
            </NavLink>
          </li>
          <li onClick={toggleMenu}>
            <NavLink
              to="/news"
              className="focus:text-[#3e38c8] transition duration-300"
            >
              News
            </NavLink>
          </li>
          <li onClick={toggleMenu}>
            <NavLink
              to="/library"
              className="focus:text-[#3e38c8] transition duration-300"
            >
              Library
            </NavLink>
          </li>
          <li onClick={toggleMenu}>
            <NavLink
              to="/contacts"
              className="focus:text-[#3e38c8] transition duration-300"
            >
              Contacts
            </NavLink>
          </li>
        </ul>

        <FlagsList className="flex justify-center items-center gap-4" />

        <Address
          className="w-[270px] sm-max:w-[240px]"
          listClass="flex justify-center items-center flex-col gap-4 text-[#1e1e1e] font-normal text-[14px] leading-[1.3] not-italic sm-max:text-[12px] sm-max:items-start"
          iconClass="fill-[#1e1e1e]  sm-max:size-[20px]"
        />
        <button
          type="button"
          onClick={() => {
            toggleMenu();
            navigate('/contacts/#contacts-form');
          }}
          className="inline-block font-bold text-[20px] text-center text-gray-900 border border-gray-900 rounded-[10px] py-2.5 px-5 w-full h-[54px] md:w-[605px] focus:text-[#fff] focus:bg-[#2355cc] transition duration-300 outline-none"
        >
          Get in touch
        </button>
      </div>
    </div>
  );
};
