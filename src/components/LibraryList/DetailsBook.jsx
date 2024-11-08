import { Icon } from '../../components';

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
    <div className="items-start md:pr-[205px] lg:pr-[415px] relative">
      <div className="flex gap-[10px] ">
        <img
          className=" mb-[16px] w-[163px] h-[260px]  rounded-[18px]   
            md:absolute md:top-[90px] md:right-0 
            md:w-[200px] md:h-[324px]
            lg:w-[390px]   lg:  lg:top-0   lg:right-4
       lg:h-auto
        "
          src={coverImageUrl}
          alt={`книга бібліотеки, автор: ${author}, назва твору: ${title} `}
          loading="lazy"
        />
        <div className="flex flex-col ">
          <h3
            id="book-title"
            className="font-proza font-semibold text-[20px] leading-[1.2] text-[#1e1e1e] mb-[4px] 
                md:leading-[1.1] md:text-[30px] md:mb-[15px]
            
              lg:font-medium lg:text-[60px]  lg:leading-[1.1] "
          >
            {title}
          </h3>
          <h3
            className=" font-normal text-[18px] leading-[1] text-[#1e1e1e] pb-[4px] 
            font-istok md:font-bold md:text-[16px] md:leading-[1.375] 
             lg:font-bold lg:text-[24px] lg:leading-[1.41667] "
          >
            {author}
          </h3>
          <p
            className=" font-normal text-[12px] leading-[1.5] text-[#666] pb-[4px]
            font-istok  md:text-[16px] md:leading-[1.375] md:italic
           "
          >
            {genre}
          </p>{' '}
          <p
            className="font-istok  text-[12px] leading-[1.5] text-[#666666] pb-[4px] flex justify-between items-center pr-[20px] 
           md:text-[16px] md:leading-[1.375] md:hidden
           "
          >
            {pageCount} pages
            <span className=" ">{publicationYear}</span>
          </p>
          <p className="font-istok font-normal  text-[12px] leading-[1.5] text-[#f9a407] pb-[4px] md:text-[16px] lg:text-[18px] lg:mb-[6px]  ">
            *книгу можна знайти в бібліотеці “Оселі”.
          </p>
        </div>
      </div>
      <article>
        <p
          className=" font-normal text-[14px] leading-[1.28571] text-[#1e1e1e] h-[285px] lg:h-[385px] scrollbar pr-2
font-istok  md:text-[16px] md:leading-[1.375] md:mb-[8px]
            lg:text-[20px] lg:leading-[1.4] lg:mb-[16px]
            "
        >
          {description}
        </p>
        <p
          className=" hidden md:font-normal md:italic  md:text-[#666666]  md:flex justify-between items-center pr-[20px] 
           font-istok  md:text-[16px] md:leading-[1.375] 
           "
        >
          {pageCount} pages
          <span className=" ">{publicationYear}</span>
        </p>
        {/* <img
            className=" hidden md:block mb-[16px] w-[163px] h-[260px]    lg:w-[290px]  lg:mb-[6px] 
       lg:h-[462px]
        "
            src={coverImageUrl}
            alt={`книга бібліотеки, автор: ${author}, назва твору: ${title} `}
            loading="lazy"
          /> */}
      </article>
      <Icon
        name="heart"
        size={65}
        className="absolute size-[35px] right-[20px] bottom-[-40px] md:size-[65px] md:bottom-auto md:top-[-20px] md:right-[50px]  lg:top-[90px] lg:right-[43%]  fill-[#daefff]"
        viewbox="36"
      />
    </div>
  );
};
