import { getQuotes } from '../../helpers';

export const Quotes = ({ index }) => {
  const quotes = getQuotes();

  const randomIndex = () => (Math.random() * (32 - 1) + 1).toFixed(0);

  const randomIdx1 = randomIndex();
  const randomIdx2 = randomIndex();

  return (
    <>
      <div>
        {index % 2 === 0 ? (
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={`${quotes[randomIdx1][2]} 1x, ${quotes[randomIdx1][3]} 2x`}
              type="image/webp"
            ></source>
            <source
              media="(min-width: 320px)"
              srcSet={`${quotes[randomIdx1][0]} 1x, ${quotes[randomIdx1][1]} 2x`}
              type="image/webp"
            ></source>

            <img
              className="absolute w-[324px] top-[395px] right-1/2 translate-x-1/2
           md:translate-x-0 md:top-0 md:right-0 md:w-[300px]
           lg:w-[430px]  lg:top-[-20px] lg:right-[-60px]  "
              srcSet={`${quotes[randomIdx1][0]} 1x, ${quotes[randomIdx1][1]} 2x`}
              src={quotes[randomIdx1][0]}
              alt={` Image with a quote ${[randomIdx1]} `}
              loading="lazy"
            />
          </picture>
        ) : (
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={`${quotes[randomIdx2][2]} 1x, ${quotes[randomIdx2][3]} 2x`}
              type="image/webp"
            ></source>
            <source
              media="(min-width: 320px)"
              srcSet={`${quotes[randomIdx2][0]} 1x, ${quotes[randomIdx2][1]} 2x`}
              type="image/webp"
            ></source>

            <img
              className="absolute w-[324px] top-[395px] right-1/2 translate-x-1/2
            
          md:translate-x-0  md:left-0 md:w-[300px] md:top-0
          lg:w-[430px] lg:top-[-20px] lg:right-auto   lg:left-[-60px] "
              // outline outline-[1px] outline-green-500
              srcSet={`${quotes[randomIdx2][0]} 1x, ${quotes[randomIdx2][1]} 2x`}
              src={quotes[randomIdx2][0]}
              alt={`Image with a quote ${[randomIdx2]} `}
              loading="lazy"
            />
          </picture>
        )}
      </div>
    </>
  );
};
