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
    <div className="flex justify-center items-center gap-[25px]">
      <div>
        <header>
          <h1 id="book-title"> {title} </h1>
          <h2>{author} </h2>
          <p>
            <strong>Жанр:</strong> {genre}
          </p>
        </header>

        <article>
          <h3>Опис книги</h3>
          <p>{description}</p>
        </article>

        <aside>
          <h3>Інформація про книгу</h3>
          <ul>
            <li>
              <strong>Сторінок:</strong>
              {pageCount}
            </li>
            <li>
              <strong>Рік видання:</strong>
              {publicationYear}
            </li>
          </ul>
        </aside>
      </div>

      <img
        src="https://biblioteka.cdu.edu.ua/images/prosvrobota/kotsubinskii/image024.jpg"
        alt={` Image with a book cover `}
        width="238"
        height="238"
        loading="lazy"
      />
    </div>
  );
};
