import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FlagsList } from '../../components';

import { images } from '../../assets';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const { notFoundImages } = images;

  return (
    <section className="relative pt-[44px] pr-[24px] h-screen md:pt-[225px] md:pr-0 md:pl-[58px] lg:pt-[229px] lg:pl-[20px]  not-found-section bg-no-repeat bg-cover md:bg-[url('assets/images/not-found/notFound@1x_tablet.webp')] md:h-screen lg:bg-[url('assets/images/not-found/notFound@1x_desktop.webp')]">
      <FlagsList className="flex justify-end items-center gap-4 mb-[100px] md:mb-[31px]  md:justify-start lg:absolute lg:top-[370px] lg:left-[607px]" />
      <div className="flex flex-col gap-[25px] items-end mb-[24px] md:gap-0 md:mb-[31px] md:items-start lg:mb-[60px]">
        <p className="w-[203px] text-[20px] text-right leading-[1.4] text-my-black1 md:w-[524px] md:text-left lg:w-[734px] lg:text-[28px] lg:leading-[1.29]">
          Seems like this page has gone astray.
        </p>
        <p className="w-[203px] text-[20px] text-right leading-[1.4] text-my-black1 md:w-[524px] md:text-left lg:w-[734px] lg:text-[28px] lg:leading-[1.29]">
          But just like Ukraine, we&#39;ll rebuild and come back stronger.
        </p>
      </div>
      <div className="flex flex-col gap-[8px] items-end md:gap-[17px] md:items-start md:flex-row">
        <NavLink
          to="/"
          className="w-[225px] h-[44px] bg-my-blue border-[1px] border-my-black5 text-white font-istok font-bold text-[16px] leading-[1.5] flex justify-center items-center rounded-[10px] hover:bg-[#223f86] focus:bg-[#223f86] transition-colors duration-300 ease-in-out md:w-[252px] md:h-[54px] md:text-[20px] md:leading-[1.7]"
        >
          Homepage
        </NavLink>
        <Link
          href="#"
          onClick={() => {
            navigate(-1);
          }}
          className="w-[225px] h-[44px] bg-my-yellow border-[1px] border-my-black5 text-my-black1 font-istok font-bold text-[16px] leading-[1.5] flex justify-center items-center rounded-[10px] hover:bg-[#ffc520] focus:bg-[#ffc520] transition-colors duration-300 ease-in-out  md:w-[252px] md:h-[54px] md:text-[20px] md:leading-[1.7]"
        >
          Back to previous page
        </Link>
      </div>
      <div
        style={{ color: 'rgba(218, 239, 255, 0.5)' }}
        className="z-[-1] absolute pt-[15px] left-0 top-0 text-[260px] leading-[0.88] w-[188px] break-words font-bold font-proza-bold md:w-[478px] md:top-0 md:right-[19px] md:left-auto lg:text-[360px] lg:w-[630px] lg:right-[55px] lg:leading-[1.14] lg:pt-0 md:z-[0]"
      >
        404
      </div>
      <div className="absolute top-0 left-0 z-[-3] w-[100%] h-auto md:hidden">
        <img
          height="844"
          width="375"
          srcSet={`${notFoundImages.notFoundImg1} 1x, ${notFoundImages.notFoundImg2} 2x`}
          src={notFoundImages.notFoundImg1}
          alt="Ukranian field"
          className="w-[100%] h-auto"
        />
      </div>
      <div className="absolute bottom-0 h-[170px] left-0 w-screen bg-no-repeat bg-cover md:h-[178px] lg:h-[338px] lg:bg-contain extralg:bg-cover extralg:h-[430px] decoration-lines"></div>
    </section>
  );
};

export default NotFoundPage;
