import { Link, NavLink, useNavigate } from "react-router-dom";

import { FlagsList } from "../../components";

import { images } from "../../assets";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const { notFoundImages } = images;

  return (
    <section className="not-found-section relative h-screen bg-cover bg-no-repeat pr-[24px] pt-[44px] md:h-screen md:bg-[url('assets/images/not-found/notFound@1x_tablet.webp')] md:pl-[58px] md:pr-0 md:pt-[225px] lg:bg-[url('assets/images/not-found/notFound@1x_desktop.webp')] lg:pl-[20px] lg:pt-[229px]">
      <FlagsList className="mb-[100px] flex items-center justify-end gap-4 md:mb-[31px] md:justify-start lg:absolute lg:left-[607px] lg:top-[370px]" />
      <div className="mb-[24px] flex flex-col items-end gap-[25px] md:mb-[31px] md:items-start md:gap-0 lg:mb-[60px]">
        <p className="w-[203px] text-right text-[20px] leading-[1.4] text-my-black1 md:w-[524px] md:text-left lg:w-[734px] lg:text-[28px] lg:leading-[1.29]">
          Seems like this page has gone astray.
        </p>
        <p className="w-[203px] text-right text-[20px] leading-[1.4] text-my-black1 md:w-[524px] md:text-left lg:w-[734px] lg:text-[28px] lg:leading-[1.29]">
          But just like Ukraine, we&#39;ll rebuild and come back stronger.
        </p>
      </div>
      <div className="flex flex-col items-end gap-[8px] md:flex-row md:items-start md:gap-[17px]">
        <NavLink
          to="/"
          className="flex h-[44px] w-[225px] items-center justify-center rounded-[10px] border-[1px] border-my-black5 bg-my-blue font-istok text-[16px] font-bold leading-[1.5] text-white transition-colors duration-300 ease-in-out hover:bg-[#223f86] focus:bg-[#223f86] md:h-[54px] md:w-[252px] md:text-[20px] md:leading-[1.7]"
        >
          Homepage
        </NavLink>
        <Link
          href="#"
          onClick={() => {
            navigate(-1);
          }}
          className="flex h-[44px] w-[225px] items-center justify-center rounded-[10px] border-[1px] border-my-black5 bg-my-yellow font-istok text-[16px] font-bold leading-[1.5] text-my-black1 transition-colors duration-300 ease-in-out hover:bg-[#ffc520] focus:bg-[#ffc520] md:h-[54px] md:w-[252px] md:text-[20px] md:leading-[1.7]"
        >
          Back to previous page
        </Link>
      </div>
      <div
        style={{ color: "rgba(218, 239, 255, 0.5)" }}
        className="font-proza-bold absolute left-0 top-0 z-[-1] w-[188px] break-words pt-[15px] text-[260px] font-bold leading-[0.88] md:left-auto md:right-[19px] md:top-0 md:z-[0] md:w-[478px] lg:right-[55px] lg:w-[630px] lg:pt-0 lg:text-[360px] lg:leading-[1.14]"
      >
        404
      </div>
      <div className="absolute left-0 top-0 z-[-3] h-auto w-[100%] md:hidden">
        <img
          height="844"
          width="375"
          srcSet={`${notFoundImages.notFoundImg1} 1x, ${notFoundImages.notFoundImg2} 2x`}
          src={notFoundImages.notFoundImg1}
          alt="Ukranian field"
          className="h-auto w-[100%]"
        />
      </div>
      <div className="decoration-lines absolute bottom-0 left-0 h-[170px] w-screen bg-cover bg-no-repeat md:h-[178px] lg:h-[338px] lg:bg-contain extralg:h-[430px] extralg:bg-cover"></div>
    </section>
  );
};

export default NotFoundPage;
