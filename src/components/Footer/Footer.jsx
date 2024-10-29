import { NavLink, Link } from 'react-router-dom';
import { useModal } from '../../hooks';
import { Icon, Modal, Developers, Address, FlagsList } from '../../components';

import { images } from '../../assets';

export const Footer = () => {
  const [isOpenDevelopersModal, toggleDevelopersModal] = useModal();

  const { footerImages } = images;
  return (
    <>
      <footer className="container pt-[25vw] md:pt-[15vw] lg:pt-[9vw] pb-[32px] lg:pb-[84px]">
        <div className="link-wrapper relative flex flex-col items-center">
          <div className="flex flex-col items-center text-center mb-[50px] md:mb-[36px] lg:mb-[76px] lg:flex-row lg:gap-0">
            <div className="flex items-center gap-[100px] mb-[50px] md:mb-[44px] lg:mb-0">
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

              <ul className="flex flex-col gap-[20px] justify-center font-normal leading-[1.5] text-[24px] md:text-[16px] lg:text-[24px] text-center md:text-start text-[#1e1e1e] md:flex-row md:flex-wrap md:justify-start md:gap-x-[104px] md:gap-y-[36px] lg:gap-y-[40px] lg:w-[543px] lg:gap-x-[24px]">
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
                <li
                  onClick={toggleDevelopersModal}
                  className="md:w-[110px] lg:w-[165px] cursor-pointer hover:text-[#3e38c8] focus:text-[#3e38c8] transition duration-300"
                >
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
                  srcSet={`${footerImages.footer_logo_mobile1x} 1x, ${footerImages.footer_logo_mobile2x} 2x`}
                  src={footerImages.footer_logo_mobile1x}
                  alt="logotype"
                  width="66"
                  height="44"
                  className="max-w-none"
                  loading="lazy"
                />
              </Link>

              <FlagsList className="flex gap-4" />
            </div>

            <div className="hidden md:flex justify-between items-center md:mb-[44px] md:w-full lg:hidden">
              <Address
                listClass="flex flex-col gap-4 text-[#1e1e1e] font-normal text-[14px] leading-[1.3] not-italic"
                iconClass="fill-[#1e1e1e]"
              />

              <FlagsList className="flex gap-4" />
            </div>

            <ul className="flex flex-col justify-center items-center md:flex-wrap md:flex-row gap-[16px] lg:gap-[20px] lg:w-[697px]">
              <li className="font-bold text-[16px] lg:text-[20px] leading-[1.5] text-center text-gray-900 w-full h-[44px] md:w-[344px] lg:w-[347px] lg:h-[54px]">
                <a
                  className="flex items-center gap-[8px] lg:gap-[6px] border border-[#1e1e1e] rounded-[10px] lg:px-[18px] px-[16px] py-[10px] w-full h-full hover:text-[#fff] hover:bg-[#2355cc] focus:text-[#fff] focus:bg-[#2355cc] transition duration-300 group"
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
              <li className="font-bold text-[16px] lg:text-[20px] leading-[1.5] text-center text-gray-900 w-full h-[44px] md:w-[344px] lg:w-[330px] lg:h-[54px]">
                <a
                  className="flex items-center gap-[8px] lg:gap-[6px] border border-[#1e1e1e] rounded-[10px] lg:px-[18px] px-[16px] py-[10px] w-full h-full hover:text-[#fff] hover:bg-[#2355cc] focus:text-[#fff] focus:bg-[#2355cc] transition duration-300 group"
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
              <li className="font-bold text-[16px] lg:text-[20px] leading-[1.5] text-center text-gray-900 w-full h-[44px] md:w-[344px] lg:w-[347px] lg:h-[54px]">
                <a
                  className="flex items-center gap-[8px] lg:gap-[6px] border border-[#1e1e1e] rounded-[10px] lg:px-[18px] px-[16px] py-[10px] w-full h-full hover:text-[#fff] hover:bg-[#2355cc] focus:text-[#fff] focus:bg-[#2355cc] transition duration-300 group"
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
              <li className="font-bold text-[16px] lg:text-[20px] leading-[1.5] text-center text-gray-900 w-full h-[44px] md:w-[344px] lg:w-[330px] lg:h-[54px]">
                <a
                  className="flex items-center gap-[8px] lg:gap-[6px] border border-[#1e1e1e] rounded-[10px] lg:px-[18px] px-[16px] py-[10px] w-full h-full hover:text-[#fff] hover:bg-[#2355cc] focus:text-[#fff] focus:bg-[#2355cc] transition duration-300 group"
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

          <div className="w-full mb-[50px] md:flex md:justify-end md:mb-[36px] lg:justify-between lg:mb-0">
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
              <p className="text-[14px] leading-[1.3] lg:text-[20px] lg:leading-[1.4] text-[#1e1e1e] mb-3 w-[325px] sm-max:w-full lg:w-[465px]">
                &quot;In unity, our strength; in community, our essence. United
                by Ukrainian culture, we create a world where everyone finds
                their place and feels at home.&quot;
              </p>
              <p className="text-end md:italic leading-[2.14] text-[12px] md:text-[14px] lg:text-[20px] text-[#1e1e1e]">
                Lesya Ukrainka
              </p>
            </div>
          </div>
          <Address
            className="hidden lg:flex lg:w-full lg:mb-[50px]"
            listClass="flex flex-col gap-4 text-[#1e1e1e] font-normal text-[20px] leading-[1.4] not-italic"
            iconClass="fill-[#1e1e1e]"
          />

          <FlagsList className="hidden w-full gap-4" />

          <p className="flex justify-center text-center text-[#1e1e1e] md:italic text-[12px] lg:text-[16px] font-normal leading-[1.5] lg:leading-[1.25] w-[220px] md:w-full">
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
              className="absolute top-[100px] right-0 md:left-0 md:top-auto md:bottom-0 lg:left-auto lg:bottom-[60px] lg:right-0 max-w-none"
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
