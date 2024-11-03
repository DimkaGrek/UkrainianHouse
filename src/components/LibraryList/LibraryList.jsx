import { useBooks } from '../../hooks/useBooks';
import { LibraryBookItem } from './LibraryBookItem';
import { Quotes } from './Quotes';

import { useWindowSizeHook } from '../../helpers/useWindowSizeHook';

export const LibraryList = () => {
  const { books } = useBooks();

  const { innerWidth } = useWindowSizeHook();
  console.log(innerWidth);

  console.log(books);

  const rows = [];
  if (innerWidth >= 1440) {
    for (let i = 0; i < books.length; i += 3) {
      rows.push(books.slice(i, i + 3));
    }
  } else {
    for (let i = 0; i < books.length; i += 2) {
      rows.push(books.slice(i, i + 2));
    }
  }

  return (
    <div className=" mb-[150px] outline outline-[1px] outline-red-500">
      {rows.map((row, index) => (
        <div key={index} className="relative mb-[220px]">
          <Quotes index={index} />
          <ul
            className={`flex ${
              index % 2 === 0
                ? 'justify-start'
                : row.length < 2
                ? 'justify-center'
                : 'justify-end'
            } gap-x-[50px] outline outline-[0.3px] outline-blue-500`}
          >
            {row.map(item => (
              <li key={item.id}>
                <LibraryBookItem item={item} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
