import { NewsListItem } from './NewsListItem';

import { useNews } from '../../hooks';

export const NewsList = () => {
  const { filteredNews, filter } = useNews();

  return filteredNews.length ? (
    <ul className="flex flex-col row-gap-[16px] mb-[34px] md:mb-[40px] lg:mb-[44px] md:flex-row md:flex-wrap md:gap-x-[20px] gap-y-[16px] lg:gap-x-[24px] lg:gap-y-[44px]">
      {filteredNews.map((item, index) => {
        return <NewsListItem key={index} item={item} />;
      })}
    </ul>
  ) : (
    <h2 className="text-[#1a1a1a] text-3xl font-bold text-center mb-4">
      No results for &quot;{filter}&quot;.
    </h2>
  );
};
