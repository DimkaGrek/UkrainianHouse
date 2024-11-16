import { NewsListItem } from "./NewsListItem";

import { useNews } from "../../hooks";

export const NewsList = () => {
  const { news } = useNews();

  return (
    <ul className="mb-[34px] flex flex-col gap-y-[16px] md:mb-[40px] md:flex-row md:flex-wrap md:gap-x-[20px] lg:mb-[44px] lg:gap-x-[24px] lg:gap-y-[44px]">
      {news.map((item, index) => {
        return <NewsListItem key={index} item={item} />;
      })}
    </ul>
  );
};
