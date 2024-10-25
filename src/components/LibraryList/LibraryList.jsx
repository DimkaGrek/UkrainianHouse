import { useState } from 'react';
import { LibraryBookItem } from './LibraryBookItem';
import { Quotes } from './Quotes';

export const LibraryList = () => {
  const [random, setRendom] = useState();

  const handleReload = () => {
    const randomIndex = () => (Math.random() * (32 - 1) + 1).toFixed(0);
    setRendom(randomIndex());
    console.log(random);
  };

  return (
    <div className="my-[48px]">
      <Quotes />

      <LibraryBookItem />
      {random}
      <button onClick={handleReload}>перезавантаження</button>
    </div>
  );
};
