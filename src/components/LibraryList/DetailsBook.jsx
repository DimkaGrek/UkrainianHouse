import { Icon } from "../../components";

export const DetailsBook = ({
  coverImageUrl,
  author,
  title,
  publicationYear,
  pageCount,
  genre,
  description,
}) => {
  
  return (
    <div className="relative items-start md:pr-[205px] lg:pr-[415px]">
      <div className="flex gap-[10px]">
        <img
          className="mb-[16px] h-[260px] w-[163px] rounded-[18px] sm-max:h-[159px] sm-max:w-[100px] md:absolute md:right-0 md:top-[90px] md:h-[324px] md:w-[200px] lg:right-4 lg:top-0 lg:h-auto lg:w-[390px]"
          src={coverImageUrl}
          alt={`книга бібліотеки, автор: ${author}, назва твору: ${title} `}
          loading="lazy"
        />
        <div className="flex flex-col">
          <h3
            id="book-title"
            className="mb-[4px] font-proza text-[20px] font-semibold leading-[1.2] text-[#1e1e1e] md:mb-[15px] md:text-[30px] md:leading-[1.1] lg:text-[60px] lg:font-medium lg:leading-[1.1]"
          >
            {title}
          </h3>
          <h3 className="pb-[4px] font-istok text-[18px] font-normal leading-[1] text-[#1e1e1e] md:text-[16px] md:font-bold md:leading-[1.375] lg:text-[24px] lg:font-bold lg:leading-[1.41667]">
            {author}
          </h3>
          <p className="pb-[4px] font-istok text-[12px] font-normal leading-[1.5] text-[#666] md:text-[16px] md:italic md:leading-[1.375]">
            {genre}
          </p>{" "}
          <p className="flex items-center justify-between pb-[4px] pr-[20px] font-istok text-[12px] leading-[1.5] text-[#666666] md:hidden md:text-[16px] md:leading-[1.375]">
            {pageCount} pages
            <span className=" ">{publicationYear}</span>
          </p>
          <p className="pb-[4px] font-istok text-[12px] font-normal leading-[1.5] text-[#f9a407] md:text-[16px] lg:mb-[6px] lg:text-[18px]">
            *книгу можна знайти в бібліотеці «Оселя».
          </p>
        </div>
      </div>
      <article>
        <p className="scrollbar h-[285px] pr-2 font-istok text-[14px] font-normal leading-[1.28571] text-[#1e1e1e] md:mb-[8px] md:text-[16px] md:leading-[1.375] lg:mb-[16px] lg:h-[385px] lg:text-[20px] lg:leading-[1.4]">
          {description}
        </p>
        <p className="hidden items-center justify-between pr-[20px] font-istok md:flex md:text-[16px] md:font-normal md:italic md:leading-[1.375] md:text-[#666666]">
          {pageCount} pages
          <span className=" ">{publicationYear}</span>
        </p>
      </article>
      <Icon
        name="heart"
        size={65}
        className="absolute bottom-[-40px] right-[20px] size-[35px] fill-[#daefff] md:bottom-auto md:right-[50px] md:top-[-20px] md:size-[65px] lg:right-[43%] lg:top-[90px]"
        viewbox="36"
      />
    </div>
  );
};
