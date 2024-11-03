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
          <picture className="absolute top-[-40px] right-[-60px] outline outline-[1px] outline-green-500">
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
              srcSet={`${quotes[randomIdx1][0]} 1x, ${quotes[randomIdx1][1]} 2x`}
              src={quotes[randomIdx1][0]}
              alt={` Image with a quote ${[randomIdx1]} `}
              width="410"
              // height="356"
              loading="lazy"
            />
          </picture>
        ) : (
          <picture className="absolute bottom-[60px] left-[-80px] outline outline-[1px] outline-green-500">
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
              srcSet={`${quotes[randomIdx2][0]} 1x, ${quotes[randomIdx2][1]} 2x`}
              src={quotes[randomIdx2][0]}
              alt={`Image with a quote ${[randomIdx2]} `}
              width="410"
              // height="356"
              loading="lazy"
            />
          </picture>
        )}
      </div>
    </>
  );
};
