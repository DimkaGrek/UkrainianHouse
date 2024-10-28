import { getQuotes } from '../../helpers';

export const Quotes = () => {
  const quotes = getQuotes();

  const randomIndex = () => (Math.random() * (32 - 1) + 1).toFixed(0);

  const randomIdx1 = randomIndex();
  const randomIdx2 = randomIndex();

  return (
    <>
      <div>
        <picture className="absolute top-[-40px] right-0">
          <source
            media="(min-width: 768px)"
            srcSet={`${quotes[randomIdx1][2]} 1x, ${quotes[randomIdx1][3]} 2x`}
            type="image/png"
          ></source>
          <source
            media="(min-width: 320px)"
            srcSet={`${quotes[randomIdx1][0]} 1x, ${quotes[randomIdx1][1]} 2x`}
            type="image/png"
          ></source>

          <img
            srcSet={`${quotes[randomIdx1][0]} 1x, ${quotes[randomIdx1][1]} 2x`}
            src={quotes[randomIdx1][0]}
            alt={` Image with a quote ${[randomIdx1]} `}
            width="310"
            // height="356"
            loading="lazy"
          />
        </picture>

        <picture className="absolute bottom-[210px] left-[-10px] ">
          <source
            media="(min-width: 768px)"
            srcSet={`${quotes[randomIdx2][2]} 1x, ${quotes[randomIdx2][3]} 2x`}
            type="image/png"
          ></source>
          <source
            media="(min-width: 320px)"
            srcSet={`${quotes[randomIdx2][0]} 1x, ${quotes[randomIdx2][1]} 2x`}
            type="image/png"
          ></source>

          <img
            srcSet={`${quotes[randomIdx2][0]} 1x, ${quotes[randomIdx2][1]} 2x`}
            src={quotes[randomIdx2][0]}
            alt={`Image with a quote ${[randomIdx2]} `}
            width="310"
            // height="356"
            loading="lazy"
          />
        </picture>
      </div>
    </>
  );
};
