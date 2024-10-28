import ivanNotFound1x from '../../assets/images/libraryBooksQuotes/ivan_library_not_found@1x.png';
import ivanNotFound2x from '../../assets/images/libraryBooksQuotes/ivan_library_not_found@1x.png';
import searchPic1x from '../../assets/images/libraryBooksQuotes/social_media_icon1x.png';
import searchPic2x from '../../assets/images/libraryBooksQuotes/social_media_icon2x.png';
// outline outline-[2px] outline-red-500
const NotFoundBook = () => {
  return (
    <div className="flex justify-end items-center relative pr-[40px]">
      <picture className="absolute bottom-[14px] left-[7%]">
        <source
          media="(min-width: 768px)"
          srcSet={`${searchPic1x} 1x, ${searchPic2x} 2x`}
          type="image/png"
        ></source>
        <source
          media="(min-width: 320px)"
          srcSet={`${searchPic1x} 1x, ${searchPic2x} 2x`}
          type="image/png"
        ></source>

        <img
          srcSet={`${searchPic1x} 1x, ${searchPic2x} 2x`}
          src={searchPic1x}
          alt={` Image with a quote Ivan Franko `}
          width="238"
          height="238"
          loading="lazy"
        />
      </picture>
      <p className="font-sans font-semibold text-4xl leading-tight text-[#1e1e1e] w-[446px]  absolute top-[27%] left-[41%] -translate-x-1/2 -translate-y-1/2">
        Sorry, but nothing was found for this request...
      </p>
      <picture className="">
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
          srcSet={`${ivanNotFound1x} 1x, ${ivanNotFound2x} 2x`}
          src={ivanNotFound1x}
          alt={` Image with a quote Ivan Franko `}
          width="587"
          // height="356"
          loading="lazy"
        />
      </picture>
    </div>
  );
};

export default NotFoundBook;
