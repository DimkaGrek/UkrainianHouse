import { Quotes, LibraryBookItem } from "../../components";

import { useBooks, useWindowSizeHook } from "../../hooks";

export const LibraryList = () => {
  const { books } = useBooks();

  const { innerWidth } = useWindowSizeHook();

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
  const calculatedWidth = innerWidth >= 375 ? (375 * 160) / 360 : (innerWidth * 160) / 360;

  const getJustifyClass = (index, rowLength) => {
    if (index % 2 === 0) return "md:justify-start";
    if (rowLength < 2) return "md:justify-center md:pl-[160px]";
    return "md:justify-end";
  };

  return (
    <div className="mb-[150px]">
      {rows.map((row, index) => {
        const justifyClass = getJustifyClass(index, row.length);
        return (
          <div key={index} className="relative mb-[436px] h-auto md:mb-[75px] lg:mb-[220px]">
            <Quotes index={index} />

            <ul
              className={`flex justify-between gap-x-[5px] ${justifyClass} md:gap-x-[16px] lg:gap-x-[50px]`}
            >
              {row.map((item) => (
                <li
                  key={item.id}
                  className="lg:flex-shrink-1 flex-shrink-0 lg:w-[238px]"
                  style={{
                    width: innerWidth < 1440 ? `${calculatedWidth}px` : undefined,
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
