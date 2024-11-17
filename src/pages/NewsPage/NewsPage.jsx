import { Advertisement, InfoMessage, Loader, NewsList, SearchBar } from "../../components";

import { clearNews, fetchAllNews, fetchAnnounceNews, setPageNews } from "../../redux";
import { useNews, useInfiniteScroll } from "../../hooks";

const NewsPage = () => {
  const { news, page, isLoading, error } = useNews();
  const { keyword, observerTarget, onSearchSubmit } = useInfiniteScroll(
    news,
    page,
    setPageNews,
    isLoading,
    error,
    fetchAllNews,
    clearNews,
    fetchAnnounceNews
  );

  return (
    <>
      <section className="pb-[74px] md:pb-[50px] lg:pb-[110px]">
        <div className="mb-5 flex md:mb-[40px] md:items-center md:justify-between lg:mb-[44px]">
          <h3 className="font-proza-semibold lg:font-proza-medium hidden text-[20px] font-semibold leading-[160%] text-[#222] md:block lg:text-[60px] lg:font-medium lg:leading-[130%]">
            News
          </h3>
          <div className="md:w-[500px] lg:w-[654px]">
            <SearchBar setQuery={onSearchSubmit} />
          </div>
        </div>
        <Advertisement />
        {!news.length && keyword && !isLoading ? <InfoMessage keyword={keyword} /> : <NewsList />}
        <div ref={observerTarget}></div>
        {isLoading && <Loader placement="bottom" />}
      </section>
    </>
  );
};

export default NewsPage;
