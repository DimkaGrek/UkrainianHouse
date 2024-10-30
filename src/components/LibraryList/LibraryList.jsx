// import { useState } from 'react';
// import { useLibrary } from '../../hooks/useLibrary';
import { useBooks } from '../../hooks/useBooks';
import { LibraryBookItem } from './LibraryBookItem';
import { Quotes } from './Quotes';

export const LibraryList = () => {
  const { books } = useBooks();
  // const [random, setRendom] = useState();

  // const handleReload = () => {
  //   const randomIndex = () => (Math.random() * (32 - 1) + 1).toFixed(0);
  //   setRendom(randomIndex());
  //   console.log(random);
  // };
  console.log(books);

  return (
    <div className=" relative mb-[120px] h-[1000px] ">
      <Quotes />

      <ul className="flex gap-x-[60px] mb-[120px]">
        {books.map(item => {
          return <LibraryBookItem key={item.id} item={item} />;
        })}
      </ul>

      {/* {random}
      <button onClick={handleReload}>Перезавантаження</button> */}
    </div>
  );
};
