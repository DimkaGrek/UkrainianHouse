import { useNews } from '../../hooks';
import { NewsDigestItem } from 'components';
import { useEffect, useState } from 'react';

export const NewsDigest = () => {
  const { announceNews } = useNews();
  const newsfordevelop = [...announceNews, ...announceNews, ...announceNews];
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(1);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth >= 1440) {
        setCardsPerPage(newsfordevelop.length);
      } else if (window.innerWidth >= 768) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(1);
      }
    };

    window.addEventListener('resize', updateCardsPerPage);
    updateCardsPerPage();

    return () => {
      window.removeEventListener('resize', updateCardsPerPage);
    };
  }, [newsfordevelop.length]);

  const displayedCards = () => {
    if (activeIndex === newsfordevelop.length - 1 && cardsPerPage === 2) {
      return [newsfordevelop[activeIndex], newsfordevelop[0]];
    }
    return newsfordevelop.slice(activeIndex, activeIndex + cardsPerPage);
  };
  const handleDotClick = index => {
    setActiveIndex(index);
  };
  return (
    <section className="mb-[34px] md:mb-[40px] lg:mb-[100px]">
      <div className="flex flex-col gap-[16px] items-center justify-center">
        <div className="flex gap-[24px] overflow-hidden">
          {displayedCards().map((item, index) => (
            <NewsDigestItem item={item} key={index} />
          ))}
        </div>
        <div className="flex justify-center items-center gap-[6px] lg:hidden">
          {newsfordevelop.map((_, index) => (
            <span
              key={index}
              className={`${' rounded-[50%] cursor-pointer border-[2px] border-my-black1 '} ${
                index === activeIndex
                  ? 'border-none bg-my-blue h-[10px] w-[10px]'
                  : 'w-[8px] h-[8px]'
              }`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};
