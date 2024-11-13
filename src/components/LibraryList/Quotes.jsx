import { useEffect, useState } from 'react';

import { getQuotes } from '../../helpers';

export const Quotes = ({ index }) => {
  const quotes = getQuotes();

  const [randomIdx1, setRandomIdx1] = useState(null);
  const [randomIdx2, setRandomIdx2] = useState(null);

  useEffect(() => {
    const randomIndex = () => Math.floor(Math.random() * 31);
    setRandomIdx1(randomIndex());
    setRandomIdx2(randomIndex());
  }, []);

  if (randomIdx1 === null || randomIdx2 === null) {
    return null;
  }

  const imageSources1 = quotes[randomIdx1] || [];
  const imageSources2 = quotes[randomIdx2] || [];

  return (
    <div>
      {index % 2 === 0 ? (
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={`${imageSources1[2]} 1x, ${imageSources1[3]} 2x`}
            type="image/webp"
          />
          <source
            media="(min-width: 320px)"
            srcSet={`${imageSources1[0]} 1x, ${imageSources1[1]} 2x`}
            type="image/webp"
          />
          <img
            className="absolute w-[324px] top-[395px] right-1/2 translate-x-1/2
              md:translate-x-0 md:top-0 md:right-0 md:w-[300px]
              lg:w-[430px] lg:top-[-20px] lg:right-[-60px]"
            src={imageSources1[0]}
            alt={`Image with a quote ${randomIdx1}`}
            loading="lazy"
          />
        </picture>
      ) : (
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={`${imageSources2[2]} 1x, ${imageSources2[3]} 2x`}
            type="image/webp"
          />
          <source
            media="(min-width: 320px)"
            srcSet={`${imageSources2[0]} 1x, ${imageSources2[1]} 2x`}
            type="image/webp"
          />
          <img
            className="absolute w-[324px] top-[395px] right-1/2 translate-x-1/2
              md:translate-x-0 md:left-0 md:w-[300px] md:top-0
              lg:w-[430px] lg:top-[-20px] lg:right-auto lg:left-[-60px]"
            src={imageSources2[0]}
            alt={`Image with a quote ${randomIdx2}`}
            loading="lazy"
          />
        </picture>
      )}
    </div>
  );
};
