import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { Icon, Address, FlagsList } from "../../components";

import { images } from "../../assets";

export const BurgerMenu = ({ isOpen, toggleMenu, classBackdrop, classMenu }) => {
  const { headerImages } = images;

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      toggleMenu();
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.code === "Escape") {
        toggleMenu();
      }
    };
    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, toggleMenu]);

  return (
    <div
      onClick={handleBackdropClick}
      className={`${classBackdrop} fixed left-0 top-0 z-50 h-full w-full bg-black bg-opacity-40 backdrop-blur-sm lg:hidden`}
    >
      <div
        className={`${classMenu} relative ml-auto flex h-full w-[342px] flex-col items-center justify-start gap-[35px] bg-[#fff] px-[24px] py-[44px] transition duration-500 sm-max:w-[300px] md:w-[450px]`}
      >
        <button
          type="button"
          className="group absolute right-[24px] top-[24px] flex items-center justify-center outline-none"
          onClick={toggleMenu}
        >
          <Icon
            name="close"
            size="38"
            className="fill-[#1e1e1e] transition duration-300 group-focus-visible:fill-[#2355cc]"
          />
        </button>

        <Link to="/" onClick={toggleMenu}>
          <img
            srcSet={`${headerImages.logo_desktop1x} 1x, ${headerImages.logo_desktop2x} 2x`}
            src={headerImages.logo_desktop1x}
            alt="logotype"
            width="116"
            height="78"
            loading="lazy"
            className="max-w-none outline-none"
          />
        </Link>

        <ul className="flex flex-col gap-[30px] text-center text-[24px] font-normal leading-[1.5] text-[#222]">
          <li onClick={toggleMenu}>
            <NavLink to="/" className="transition duration-300 focus-visible:text-[#3e38c8]">
              Home
            </NavLink>
          </li>
          <li onClick={toggleMenu}>
            <NavLink to="/news" className="transition duration-300 focus-visible:text-[#3e38c8]">
              News
            </NavLink>
          </li>
          <li onClick={toggleMenu}>
            <NavLink to="/library" className="transition duration-300 focus-visible:text-[#3e38c8]">
              Library
            </NavLink>
          </li>
          <li onClick={toggleMenu}>
            <NavLink
              to="/contacts"
              className="transition duration-300 focus-visible:text-[#3e38c8]"
            >
              Contacts
            </NavLink>
          </li>
        </ul>

        {/* <FlagsList className="flex items-center justify-center gap-4" /> */}

        <Address
          className="w-[270px] sm-max:w-[240px]"
          listClass="flex justify-center items-center flex-col gap-4 text-[#1e1e1e] font-normal text-[14px] leading-[1.3] not-italic sm-max:text-[12px] sm-max:items-start"
          iconClass="fill-[#1e1e1e]  sm-max:size-[20px]"
        />

        <a
          href="mailto:ukrainianhouse.maastricht@gmail.com"
          className="inline-block h-[54px] w-full max-w-[400px] rounded-[10px] border border-gray-900 px-5 py-2.5 text-center text-[20px] font-bold text-gray-900 outline-none transition duration-300 focus-visible:bg-[#2355cc] focus-visible:text-[#fff]"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
};
