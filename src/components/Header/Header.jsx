import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import { Icon, BurgerMenu } from "../../components";

import { images } from "../../assets";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { headerImages } = images;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container py-[34px] pb-[29px] md:pb-[48px]">
      <BurgerMenu
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        classBackdrop={`${isMenuOpen ? "scale-1" : "scale-0"}`}
        classMenu={`${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      />

      <nav className="flex items-center justify-between text-center">
        <Link to="/">
          <picture>
            <source
              media="(min-width: 1440px)"
              srcSet={`${headerImages.logo_1x} 1x, ${headerImages.logo_2x} 2x`}
              width="47"
              height="69"
              loading="lazy"
            />
            <img
              srcSet={`${headerImages.logo_mob_1x} 1x, ${headerImages.logo_mob_2x} 2x`}
              src={headerImages.logo_mob_1x}
              alt="logotype"
              width="22"
              height="33"
              className="max-w-none"
              loading="lazy"
            />
          </picture>
        </Link>
        <button
          type="button"
          onClick={() => {
            setIsMenuOpen(true);
          }}
          className="outline-none"
        >
          <Icon
            name="burger-menu"
            className="flex justify-between fill-[#1e1e1e] md:h-[46px] md:w-[46px] lg:hidden"
            size="34"
          />
        </button>

        <div className="hidden items-center justify-center text-center lg:flex">
          <ul className="mr-[74px] flex gap-16 text-center text-[24px] font-normal leading-relaxed text-[#222]">
            <li className="transition duration-300 hover:text-[#3e38c8] focus-visible:text-[#3e38c8]">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="transition duration-300 hover:text-[#3e38c8] focus-visible:text-[#3e38c8]">
              <NavLink to="/news">News</NavLink>
            </li>
            <li className="transition duration-300 hover:text-[#3e38c8] focus-visible:text-[#3e38c8]">
              <NavLink to="/library">Library</NavLink>
            </li>
            <li className="transition duration-300 hover:text-[#3e38c8] focus-visible:text-[#3e38c8]">
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
          </ul>

          <a
            href="mailto:ukrainianhouse.maastricht@gmail.com"
            className="mr-[24px] h-[54px] w-[159px] rounded-[10px] border border-gray-900 px-5 py-2.5 text-center text-[20px] font-bold text-gray-900 transition duration-300 hover:bg-[#2355cc] hover:text-[#fff] focus-visible:bg-[#2355cc] focus-visible:text-[#fff]"
          >
            Get in touch
          </a>
          {/* <img
            srcSet={`${headerImages.flag_eng1x} 1x, ${headerImages.flag_eng2x} 2x`}
            src={headerImages.flag_eng1x}
            alt="Flag of England"
            width="40"
            height="40"
          /> */}
        </div>
      </nav>
    </header>
  );
};
