import ivanNotFound1x from "../../assets/images/libraryBooksQuotes/ivan_library_not_found@1x.png";
import ivanNotFound2x from "../../assets/images/libraryBooksQuotes/ivan_library_not_found@1x.png";
import searchPic1x from "../../assets/images/libraryBooksQuotes/social_media_icon1x.png";
import searchPic2x from "../../assets/images/libraryBooksQuotes/social_media_icon2x.png";
import searchMob1x from "../../assets/images/libraryBooksQuotes/search1x.png";
import searchMob2x from "../../assets/images/libraryBooksQuotes/search2x.png";

// outline outline-[2px] outline-red-500
//  outline outline-[1px] outline-green-500
const NotFoundBook = () => {
  return (
    <section className="md:pl-[55px] lg:pl-8 lg:pr-6">
      <div className="relative flex h-[353px] flex-col items-center justify-center pt-[68px] md:ml-auto md:mr-auto md:w-[347px] lg:flex lg:h-full lg:flex-row lg:items-center lg:justify-end lg:pt-0 lg:md:w-full">
        <picture className="absolute bottom-[188px] right-[5px] h-[102px] w-[102px] lg:bottom-[14px] lg:left-[7%] lg:h-[238px] lg:w-[238px]">
          <source
            media="(min-width: 1440px)"
            srcSet={`${searchPic1x} 1x, ${searchPic2x} 2x`}
            type="image/png"
          ></source>
          <source
            media="(min-width: 768px)"
            srcSet={`${searchMob1x} 1x, ${searchMob2x} 2x`}
            type="image/png"
          ></source>
          <source
            media="(min-width: 320px)"
            srcSet={`${searchMob1x} 1x, ${searchMob2x} 2x`}
            type="image/png"
          ></source>

          <img
            className="w-full"
            srcSet={`${searchMob1x} 1x, ${searchMob2x} 2x`}
            src={searchPic1x}
            alt={` Image with a quote Ivan Franko `}
            loading="lazy"
          />
        </picture>

        <p className="font-sans absolute left-0 top-0 w-[342px] text-[26px] font-medium leading-[1.30769] leading-tight text-[#1e1e1e] lg:left-[41%] lg:top-[27%] lg:w-[446px] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:text-4xl lg:font-semibold">
          Sorry, but nothing was found for this request...
        </p>

        <picture className="w-[342px] md:w-[347px] lg:w-[587px]">
          <source
            media="(min-width: 768px)"
            srcSet={`${ivanNotFound1x} 1x, ${ivanNotFound2x} 2x`}
            type="image/png"
          ></source>
          <source
            media="(min-width: 320px)"
            srcSet={`${ivanNotFound1x} 1x, ${ivanNotFound2x} 2x`}
            type="image/png"
          ></source>

          <img
            className="w-full"
            srcSet={`${ivanNotFound1x} 1x, ${ivanNotFound2x} 2x`}
            src={ivanNotFound1x}
            alt={` Image with a quote Ivan Franko `}
            loading="lazy"
          />
        </picture>
      </div>
    </section>
  );
};

export default NotFoundBook;
