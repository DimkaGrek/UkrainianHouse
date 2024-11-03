import ivanNotFound1x from '../../assets/images/libraryBooksQuotes/ivan_library_not_found@1x.png';
import ivanNotFound2x from '../../assets/images/libraryBooksQuotes/ivan_library_not_found@1x.png';
import searchPic1x from '../../assets/images/libraryBooksQuotes/social_media_icon1x.png';
import searchPic2x from '../../assets/images/libraryBooksQuotes/social_media_icon2x.png';
import searchMob1x from '../../assets/images/libraryBooksQuotes/search1x.png';
import searchMob2x from '../../assets/images/libraryBooksQuotes/search2x.png';

// outline outline-[2px] outline-red-500
//  outline outline-[1px] outline-green-500
const NotFoundBook = () => {
  return (
    <section className="md:pl-[55px] lg:pr-6 lg:pl-8">
      <div
        className="pt-[68px] h-[353px] flex flex-col justify-center items-center relative md:w-[347px] md:ml-auto md:mr-auto lg:flex lg:flex-row lg:justify-end lg:items-center 
        lg:md:w-full lg:h-full lg:pt-0           
      "
      >
        <picture className="w-[102px] h-[102px] lg:w-[238px] lg:h-[238px] absolute bottom-[188px] right-[5px] lg:bottom-[14px] lg:left-[7%]  ">
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

        <p
          className="font-sans font-medium text-[26px] leading-[1.30769] w-[342px] text-[#1e1e1e]
         lg:font-semibold lg:text-4xl leading-tight lg:w-[446px]  
  
         absolute top-0 left-0 lg:top-[27%] lg:left-[41%] lg:-translate-x-1/2 lg:-translate-y-1/2
     "
        >
          Sorry, but nothing was found for this request...
        </p>

        <picture
          className="w-[342px] md:w-[347px] lg:w-[587px] 
        "
        >
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
