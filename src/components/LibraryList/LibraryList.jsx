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
  const calculatedWidth =
    innerWidth >= 375 ? (375 * 160) / 360 : (innerWidth * 160) / 360;

  const getJustifyClass = (index, rowLength) => {
    if (index % 2 === 0) return 'md:justify-start';
    if (rowLength < 2) return 'md:justify-center md:pl-[160px]';
    return 'md:justify-end';
  };

  // outline outline-[1px] outline-red-500
  return (
    <div className=" mb-[150px] ">
      {rows.map((row, index) => {
        const justifyClass = getJustifyClass(index, row.length);
        return (
          <div
            key={index}
            className="relative mb-[436px]  md:mb-[75px]  h-auto  lg:mb-[220px] 
        
        
        " //  max-h-[420px] outline outline-[0.5px] outline-yellow-500 outline outline-[0.3px] outline-blue-500
          >
            <Quotes index={index} />
            {console.log(row)}
            <ul
              className={`flex justify-between gap-x-[5px] ${justifyClass} md:gap-x-[16px] lg:gap-x-[50px] `}
            >
              {row.map(item => (
                <li
                  key={item.id}
                  className="flex-shrink-0 lg:w-[238px] lg:flex-shrink-1"
                  style={{
                    width:
                      innerWidth < 1440 ? `${calculatedWidth}px` : undefined,
                  }}
                >
                  <LibraryBookItem item={item} />
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
