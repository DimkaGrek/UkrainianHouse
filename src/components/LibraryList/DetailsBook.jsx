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
    <div className="relative flex flex-wrap gap-[10px]">
      <img
        className="w-[150px] rounded-[18px] object-cover sm-max:w-[125px] md:order-2 md:-mt-[60px] md:w-[200px] lg:-mt-[85px] lg:max-h-[570px] lg:w-[400px]"
        src={coverImageUrl}
        alt={`книга бібліотеки, автор: ${author}, назва твору: ${title}`}
      />
      <div className="flex w-1/2 flex-col md:order-1 md:w-[410px] lg:w-full">
        <h3
          id="book-title"
          className="mb-[10px] font-proza text-[20px] font-semibold leading-[1.2] text-[#1e1e1e] md:mb-[4px] md:text-[30px] md:leading-[1.1] lg:text-[54px] lg:font-medium lg:leading-[1]"
        >
          {title}
        </h3>
        <h3 className="mb-[10px] font-istok text-[18px] font-normal leading-[1] text-[#1e1e1e] md:mb-[4px] md:text-[16px] md:font-bold md:leading-[1.375] lg:text-[24px] lg:font-bold lg:leading-[1.41667]">
          {author}
        </h3>
        <p className="mb-[10px] font-istok text-[12px] font-normal leading-[1.5] text-[#666] md:mb-[4px] md:text-[16px] md:italic md:leading-[1.375]">
          {genre}
        </p>
        <p className="mb-[4px] flex items-center justify-between pr-[20px] font-istok text-[12px] leading-[1.5] text-[#666666] md:hidden md:text-[16px] md:leading-[1.375]">
          {pageCount} pages
          <span>{publicationYear}</span>
        </p>
        <p className="mt-auto font-istok text-[12px] font-normal leading-[1.5] text-[#f9a407] md:text-[16px] lg:mb-[6px] lg:text-[18px]">
          *книгу можна знайти в бібліотеці «Оселя».
        </p>
      </div>

      <article className="md:order-1 md:flex md:w-[410px] md:flex-col lg:w-[760px]">
        <pre className="scrollbar h-[250px] whitespace-pre-wrap pr-2 font-istok text-[14px] font-normal leading-[1.28571] text-[#1e1e1e] md:mb-[4px] md:h-[265px] md:text-[16px] md:leading-[1.375] lg:mb-[16px] lg:h-[450px] lg:text-[20px] lg:leading-[1.4]">
          {description}
        </pre>
        <p className="hidden pr-[20px] font-istok md:mt-auto md:flex md:items-center md:justify-between md:text-[16px] md:font-normal md:italic md:leading-[1.375] md:text-[#666666]">
          {pageCount} pages
          <span>{publicationYear}</span>
        </p>
      </article>
      <Icon
        name="heart"
        size={35}
        className="absolute bottom-[-40px] right-[20px] size-[35px] fill-[#daefff] md:bottom-auto md:right-[50px] md:top-[-20px] md:size-[65px] lg:-bottom-[50px] lg:-left-[10px] lg:top-auto lg:size-[50px] lg:-rotate-45"
        viewbox="36"
      />
    </div>
  );
};
