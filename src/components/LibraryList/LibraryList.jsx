import { useBooks } from '../../hooks/useBooks';
import { LibraryBookItem } from './LibraryBookItem';
import { Quotes } from './Quotes';

export const LibraryList = () => {
  const { books } = useBooks();

  console.log(books);

  const rows = [];
  for (let i = 0; i < books.length; i += 3) {
    rows.push(books.slice(i, i + 3));
  }

  const rowsTwoItemGroups = [];
  for (let i = 0; i < books.length; i += 2) {
    rowsTwoItemGroups.push(books.slice(i, i + 2));
  }

  return (
    <div className=" relative mb-[120px] ">
      <Quotes />
      {rows.map((row, index) => (
        <ul
          key={index}
          className={`flex  ${
            index % 2 === 0 ? 'justify-start' : 'justify-end'
          } gap-[80px] mb-[130px]`}
        >
          {row.map(item => (
            <li key={item.id} className="w-[calc((100% - 120px) / 3)]">
              <LibraryBookItem item={item} />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};
