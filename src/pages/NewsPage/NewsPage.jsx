import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Advertisement, Loader, NewsList, SearchBar } from '../../components';

import {
  clearNews,
  fetchAllNews,
  fetchAnnounceNews,
  setPageNews,
} from '../../my-redux';
import { useNews } from '../../hooks';

const NewsPage = () => {
  const { news, page, isLoading, error } = useNews();

  const [isMoreNews, setIsMoreNews] = useState(true);
  const [keyword, setKeyword] = useState('');
  const [isSearchTriggered, setIsSearchTriggered] = useState(false);

  const dispatch = useDispatch();

  const observerTarget = useRef(null);

  const fetchNewsData = useCallback(() => {
    const config = {
      params: {
        page,
        status: 'PUBLISHED',
        ...(keyword && { keyword }),
      },
    };
    dispatch(fetchAllNews(config))
      .unwrap()
      .then(res => {
        dispatch(setPageNews(res.currentPage + 1));

        const hasMoreNews = res.currentPage + 1 < res.totalPages;
        setIsMoreNews(hasMoreNews);
        if (!hasMoreNews) {
          toast.info('You have reached the end of the news list.');
        }
      })
      .catch(e => toast.error(e.message));
  }, [dispatch, page, keyword]);

  useEffect(() => {
    dispatch(clearNews());
    dispatch(fetchAnnounceNews())
      .unwrap()
      .then()
      .catch(e => toast.error(e.message));
  }, [dispatch]);

  useEffect(() => {
    if (isSearchTriggered && !isLoading) {
      fetchNewsData();
      setIsSearchTriggered(false);
    }
  }, [isSearchTriggered, fetchNewsData, dispatch, isLoading]);

  useEffect(() => {
    const currentTarget = observerTarget.current;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && isMoreNews && !isLoading && !error) {
          fetchNewsData();
        }
      },
      { threshold: 1 }
    );

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [dispatch, fetchNewsData, error, isMoreNews, keyword, page, isLoading]);

  const onSearchSubmit = filterValue => {
    dispatch(clearNews());
    setKeyword(filterValue);
    setIsSearchTriggered(true);
  };

  return (
    <>
      <section className="pb-[74px] md:pb-[50px] lg:pb-[110px]">
        <div className="hidden  md:flex justify-between items-center mb-[40px] lg:mb-[44px]">
          <h3 className="font-proza-semibold font-semibold text-[20px] text-[#222] leading-[160%] lg:font-proza-medium lg:font-medium lg:text-[60px] lg:leading-[130%]">
            News
          </h3>
          <div className="w-[500px] lg:w-[654px]">
            <SearchBar setQuery={onSearchSubmit} />
          </div>
        </div>
        <Advertisement />
        {!news.length && keyword ? (
          <h2 className="text-[#1a1a1a] text-3xl font-bold text-center mb-4">
            No results for &quot;{keyword}&quot;.
          </h2>
        ) : (
          <NewsList />
        )}
        <div ref={observerTarget}></div>
        {isLoading && <Loader placement="bottom" />}
      </section>
    </>
  );
};

export default NewsPage;
