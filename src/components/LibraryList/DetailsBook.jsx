export const DetailsBook = ({
  coverImageUrl,
  author,
  title,
  publicationYear,
  pageCount,
  genre,
  description,
}) => {
  console.log(coverImageUrl);
  return (
    <div
      className="flex justify-center items-start gap-[25px]
   
      lg:pr-[130px]  lg:pl-[130px]
    lg:w-[989px] lg:h-[571px]
        "
    >
      <div className="items-start">
        <header>
          <h1
            id="book-title"
            className="
            lg:
            font-['Proza_Libre'] font-medium text-[60px] leading-[1.3] text-[#1e1e1e]"
          >
            {' '}
            {title}{' '}
          </h1>
          <h2 className="font-['Istok_Web'] font-bold text-[24px] leading-[1.41667] text-[#1e1e1e]">
            {author}{' '}
          </h2>
          <p>
            <strong>Жанр:</strong> {genre}
          </p>
        </header>

        <article>
          {/* <h3>Опис книги</h3> */}
          <p className="font-['Istok_Web'] font-normal text-[20px] leading-[1.4] text-[#1e1e1e]">
            {description}
          </p>
        </article>

        <aside>
          <h3>Інформація про книгу</h3>
          <ul>
            <li>
              <strong>Сторінок:</strong>&nbsp;
              {pageCount}
            </li>
            <li>
              <strong>Рік видання:</strong>&nbsp;
              {publicationYear}
            </li>
          </ul>
        </aside>
      </div>

      <img
        className="mb-[16px] w-[163px] h-[260px]    lg:w-[290px]  lg:mb-[6px] 
       lg:h-[462px]
        "
        src={coverImageUrl}
        alt={`книга бібліотеки, автор: ${author}, назва твору: ${title} `}
        loading="lazy"
      />
    </div>
  );
};
