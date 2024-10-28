import { getQuotes } from '../../helpers';

export const Confirmation = () => {
  const quotes = getQuotes();
  const randomIndex = () => (Math.random() * (32 - 1) + 1).toFixed(0);

  const randomPictureQuote = randomIndex();
  return (
    <div className="flex justify-center items-center gap-[0]">
      <div>
        <h4 className="font-proza font-semibold text-[20px] leading-[1.6] text-[#1e1e1e]">
          Thank you sincerely!
        </h4>
        <ul className="font-istok font-normal text-[28px] leading-[1.28571] text-[#1e1e1e]">
          <li>
            <p>Your words are like a nightingale&lsquo;s song</p>
          </li>
          <li>
            <p>They will fly to us faster than the wind!</p>
          </li>
          <li>
            <p>Wait for the answer as soon as possible.</p>
          </li>
        </ul>

        <button className="font-istok font-bold text-[20px] leading-[1.7] text-center text-[#1e1e1e]">
          Sounds good
        </button>
      </div>
      <picture className="absolute bottom-[14px] left-[7%]">
        <source
          media="(min-width: 768px)"
          srcSet={`${quotes[randomPictureQuote][2]} 1x, ${quotes[randomPictureQuote][3]} 2x`}
          type="image/png"
        ></source>
        <source
          media="(min-width: 320px)"
          srcSet={`${quotes[randomPictureQuote][0]} 1x, ${quotes[randomPictureQuote][1]} 2x`}
          type="image/png"
        ></source>

        <img
          srcSet={`${quotes[randomPictureQuote][0]} 1x, ${quotes[randomPictureQuote][1]} 2x`}
          src={quotes[randomPictureQuote][0]}
          alt={` Image with a quote Ivan Franko `}
          width="300"
          loading="lazy"
        />
      </picture>
    </div>
  );
};
