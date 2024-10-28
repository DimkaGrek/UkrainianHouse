// import { useState } from 'react';
// import { useLibrary } from '../../hooks/useLibrary';
import { LibraryBookItem } from './LibraryBookItem';
import { Quotes } from './Quotes';

export const LibraryList = () => {
  // const { books } = useLibrary();
  // const [random, setRendom] = useState();

  // const handleReload = () => {
  //   const randomIndex = () => (Math.random() * (32 - 1) + 1).toFixed(0);
  //   setRendom(randomIndex());
  //   console.log(random);
  // };

  return (
    <div className=" relative mb-[120px]  ">
      <Quotes />

      {/* <ul className="flex gap-x-[60px] mb-[120px]">
        {books.map(item => {
          return <LibraryBookItem key={item.id} item={item} />;
        })}
      </ul> */}
      <ul className="flex gap-x-[60px] mb-[120px]">
        <li>
          <LibraryBookItem />
        </li>
        <li>
          <LibraryBookItem />
        </li>
        <li>
          <LibraryBookItem />
        </li>
      </ul>

      <ul className="flex justify-end gap-[60px] mb-[0]">
        <li>
          <LibraryBookItem />
        </li>
        <li>
          <LibraryBookItem />
        </li>
        <li>
          <LibraryBookItem />
        </li>
      </ul>
      {/* {random}
      <button onClick={handleReload}>Перезавантаження</button> */}
    </div>
  );
};
