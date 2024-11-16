import { NavLink, Link } from "react-router-dom";

import { Icon, Modal, Developers, Address, FlagsList } from "../../components";

import { useModal } from "../../hooks";
import { images } from "../../assets";

export const Footer = () => {
  const [isOpenDevelopersModal, toggleDevelopersModal] = useModal();

  const { footerImages } = images;

  return (
    <>
      <footer className="container pb-[32px] pt-[25vw] md:pt-[15vw] lg:pb-[84px] lg:pt-[9vw]">
        <div className="link-wrapper relative flex flex-col items-center">
          <div className="mb-[50px] flex flex-col items-center text-center md:mb-[36px] lg:mb-[76px] lg:flex-row lg:gap-0">
            <div className="mb-[50px] flex items-center gap-[100px] md:mb-[44px] lg:mb-0">
              <Link to="/" className="hidden md:inline-block lg:hidden">
                <img
                  srcSet={`${footerImages.footer_logo_mobile1x} 1x, ${footerImages.footer_logo_mobile2x} 2x`}
                  src={footerImages.footer_logo_mobile1x}
                  alt="logotype"
                  width="66"
                  height="44"
                  className="max-w-none"
                  loading="lazy"
                />
              </Link>

              <ul className="flex flex-col justify-center gap-[20px] whitespace-nowrap text-center text-[24px] font-normal leading-[1.5] text-[#1e1e1e] md:flex-row md:flex-wrap md:justify-start md:gap-x-[104px] md:gap-y-[36px] md:text-start md:text-[16px] lg:w-[543px] lg:gap-x-[24px] lg:gap-y-[40px] lg:text-[24px]">
                <li className="transition duration-300 hover:text-[#3e38c8] focus-visible:text-[#3e38c8] md:w-[110px] lg:w-[165px]">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="transition duration-300 hover:text-[#3e38c8] focus-visible:text-[#3e38c8] md:w-[110px] lg:w-[165px]">
                  <NavLink to="/news">News</NavLink>
                </li>
                <li className="transition duration-300 hover:text-[#3e38c8] focus-visible:text-[#3e38c8] md:w-[110px] lg:w-[165px]">
                  <NavLink to="/library">Library</NavLink>
                </li>
                <li className="transition duration-300 hover:text-[#3e38c8] focus-visible:text-[#3e38c8] md:w-[110px] lg:w-[165px]">
                  <NavLink aria-disabled to="/contacts">
                    Contacts
                  </NavLink>
                </li>
                <li
                  onClick={toggleDevelopersModal}
                  className="cursor-pointer transition duration-300 hover:text-[#3e38c8] focus-visible:text-[#3e38c8] md:w-[110px] lg:w-[165px]"
                >
                  Site developers
                </li>
                <li className="cursor-not-allowed transition duration-300 hover:text-gray-600 md:w-[110px] lg:w-[165px]">
                  Activities
                </li>
              </ul>
            </div>

            <div className="mb-[50px] flex w-full justify-center md:hidden">
              <Link to="/">
                <img
                  srcSet={`${footerImages.footer_logo_mobile1x} 1x, ${footerImages.footer_logo_mobile2x} 2x`}
                  src={footerImages.footer_logo_mobile1x}
                  alt="logotype"
                  width="66"
                  height="44"
                  className="max-w-none"
                  loading="lazy"
                />
              </Link>

              {/* <FlagsList className="flex gap-4" /> */}
            </div>

            <div className="hidden items-center justify-between md:mb-[44px] md:flex md:w-full lg:hidden">
              <Address
                listClass="flex flex-col gap-4 text-[#1e1e1e] font-normal text-[14px] leading-[1.3] not-italic"
                iconClass="fill-[#1e1e1e]"
              />

              {/* <FlagsList className="flex gap-4" /> */}
            </div>

            <ul className="flex flex-col items-center justify-center gap-[16px] md:flex-row md:flex-wrap lg:w-[697px] lg:gap-[20px]">
              <li className="h-[44px] w-full text-center text-[16px] font-bold leading-[1.5] text-gray-900 md:w-[344px] lg:h-[54px] lg:w-[347px] lg:text-[20px]">
                <a
                  className="group flex h-full w-full items-center gap-[8px] rounded-[10px] border border-[#1e1e1e] py-[10px] pl-[16px] pr-[14px] transition duration-300 hover:bg-[#2355cc] hover:text-[#fff] focus-visible:bg-[#2355cc] focus-visible:text-[#fff] lg:gap-[6px] lg:px-[18px]"
                  href="https://www.facebook.com/ua.maastricht"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Icon
                    name="fb"
                    className="h-[28px] fill-[#1e1e1e] transition duration-300 group-hover:fill-[#fff] group-focus-visible:fill-[#fff] lg:w-[28px]"
                    size="24"
                  />
                  Let&#39;s be friends on facebook
                </a>
              </li>
              <li className="h-[44px] w-full text-center text-[16px] font-bold leading-[1.5] text-gray-900 md:w-[344px] lg:h-[54px] lg:w-[330px] lg:text-[20px]">
                <a
                  className="group flex h-full w-full items-center gap-[8px] rounded-[10px] border border-[#1e1e1e] px-[16px] py-[10px] transition duration-300 hover:bg-[#2355cc] hover:text-[#fff] focus-visible:bg-[#2355cc] focus-visible:text-[#fff] lg:gap-[6px] lg:px-[18px]"
                  href="https://www.instagram.com/ukrainianhousemaastricht/?igsh=c2I5N2I0Z2dvN2Fk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Icon
                    name="insta"
                    className="h-[28px] fill-[#1e1e1e] transition duration-300 group-hover:fill-[#fff] group-focus-visible:fill-[#fff] lg:w-[28px]"
                    size="24"
                  />
                  Follow us on instagram
                </a>
              </li>
              <li className="h-[44px] w-full text-center text-[16px] font-bold leading-[1.5] text-gray-900 md:w-[344px] lg:h-[54px] lg:w-[347px] lg:text-[20px]">
                <a
                  className="group flex h-full w-full items-center gap-[8px] rounded-[10px] border border-[#1e1e1e] px-[16px] py-[10px] transition duration-300 hover:bg-[#2355cc] hover:text-[#fff] focus-visible:bg-[#2355cc] focus-visible:text-[#fff] lg:gap-[6px] lg:px-[18px]"
                  href="https://t.me/+cGjweuHlhU00N2E8"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                >
                  <Icon
                    name="telegram"
                    className="h-[28px] fill-[#1e1e1e] transition duration-300 group-hover:fill-[#fff] group-focus-visible:fill-[#fff] lg:w-[28px]"
                    size="24"
                  />
                  Connect us on telegram
                </a>
              </li>
              <li className="h-[44px] w-full text-center text-[16px] font-bold leading-[1.5] text-gray-900 md:w-[344px] lg:h-[54px] lg:w-[330px] lg:text-[20px]">
                <a
                  className="group flex h-full w-full items-center gap-[8px] rounded-[10px] border border-[#1e1e1e] px-[16px] py-[10px] transition duration-300 hover:bg-[#2355cc] hover:text-[#fff] focus-visible:bg-[#2355cc] focus-visible:text-[#fff] lg:gap-[6px] lg:px-[18px]"
                  href="https://www.linkedin.com/company/ukrainian-house-in-maastricht/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linkedin"
                >
                  <Icon
                    name="linkedin"
                    className="h-[28px] fill-[#1e1e1e] transition duration-300 group-hover:fill-[#fff] group-focus-visible:fill-[#fff] lg:w-[28px]"
                    size="24"
                  />
                  Find us in LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-[50px] w-full md:mb-[36px] md:flex md:justify-end lg:mb-0 lg:justify-between">
            <Link to="/" className="hidden lg:inline-block">
              <img
                srcSet={`${footerImages.footer_logo_desktop1x} 1x, ${footerImages.footer_logo_desktop2x} 2x`}
                src={footerImages.footer_logo_mobile1x}
                alt="logotype"
                width="116"
                height="78"
                loading="lazy"
                className="max-w-none"
              />
            </Link>

            <div className="flex flex-col md:items-end lg:mr-[145px]">
              <p className="mb-3 w-[325px] text-[14px] leading-[1.3] text-[#1e1e1e] sm-max:w-full lg:w-[465px] lg:text-[20px] lg:leading-[1.4]">
                &quot;In unity, our strength; in community, our essence. United by Ukrainian
                culture, we create a world where everyone finds their place and feels at home.&quot;
              </p>
              <p className="text-end text-[12px] leading-[2.14] text-[#1e1e1e] md:text-[14px] md:italic lg:text-[20px]">
                Lesya Ukrainka
              </p>
            </div>
          </div>
          <Address
            className="hidden lg:mb-[50px] lg:flex lg:w-full"
            listClass="flex flex-col gap-4 text-[#1e1e1e] font-normal text-[20px] leading-[1.4] not-italic"
            iconClass="fill-[#1e1e1e]"
          />

          {/* <FlagsList className="hidden w-full gap-4" /> */}

          <p className="flex w-[220px] justify-center text-center text-[12px] font-normal leading-[1.5] text-[#1e1e1e] md:w-full md:italic lg:text-[16px] lg:leading-[1.25]">
            &copy; 2024 Ukrainian House in Maastricht. All rights reserved.
          </p>
          <picture>
            <source
              media="(min-width: 1440px)"
              srcSet={`${footerImages.iPhone1x_desktop} 1x, ${footerImages.iPhone2x_desktop} 2x`}
              width="125"
              height="249"
              loading="lazy"
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${footerImages.iPhone1x_tablet} 1x, ${footerImages.iPhone2x_tablet} 2x`}
              width="80"
              height="160"
              loading="lazy"
            />
            <img
              className="absolute right-0 top-[100px] max-w-none md:bottom-0 md:left-0 md:top-auto lg:bottom-[60px] lg:left-auto lg:right-0"
              srcSet={`${footerImages.iPhone1x_mob} 1x, ${footerImages.iPhone2x_mob} 2x`}
              src={footerImages.iPhone1x_mob}
              alt="Phone in hand"
              width="96"
              height="192"
              loading="lazy"
            />
          </picture>
        </div>
      </footer>
      {isOpenDevelopersModal && (
        <Modal className="bg-white" toggleModal={toggleDevelopersModal}>
          <Developers />
        </Modal>
      )}
    </>
  );
};
