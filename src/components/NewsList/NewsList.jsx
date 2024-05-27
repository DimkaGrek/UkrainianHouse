import { NewsListItem } from './NewsListItem';

import news from '../../assets/news.json';

export const NewsList = () => {
  return (
    <ul className="flex flex-col row-gap-[16px] mb-[34px] md:mb-[40px] lg:mb-[44px] md:flex-row md:flex-wrap md:gap-x-[20px] gap-y-[16px] lg:gap-x-[24px] lg:gap-y-[44px]">
      {news.map((item, index) => {
        return <NewsListItem key={index} {...item} />;
      })}
    </ul>
  );
};
