import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Advertisement, Loader, NewsList, SearchBar } from '../../components';

import { fetchAllNews, fetchAnnounceNews, setPage } from '../../my-redux';
import { useNews } from '../../hooks';

const NewsPage = () => {
  const { news, page, isLoading } = useNews();

  const [isFetching, setIsFetching] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [isMoreItems, setIsMoreItems] = useState(true);

  const dispatch = useDispatch();

  const observerTarget = useRef(null);

  const LIMIT = 6;

  useEffect(() => {
    dispatch(fetchAnnounceNews())
      .unwrap()
      .then()
      .catch(e => toast.error(e.message));
  }, [dispatch]);

  useEffect(() => {
    if (keyword) {
      setIsFetching(true);
      dispatch(
        fetchAllNews({ page: 0, size: LIMIT, status: 'PUBLISHED', keyword })
      )
        .unwrap()
        .then(res => {
          dispatch(setPage(res.currentPage + 1));

          const isMoreNews = res.currentPage + 1 < res.totalPages;
          setIsMoreItems(isMoreNews);

          if (!isMoreNews) {
            toast.info('You have reached the end of the news list.');
          }
        })
        .catch(e => {
          toast.error(e.message);
        })
        .finally(() => setIsFetching(false));
    }
  }, [dispatch, keyword]);

  useEffect(() => {
    const params = {
      page,
      size: LIMIT,
      status: 'PUBLISHED',
      ...(keyword && { keyword }),
    };

    const currentTarget = observerTarget.current;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !isFetching && isMoreItems) {
          setIsFetching(true);

          dispatch(fetchAllNews(params))
            .unwrap()
            .then(res => {
              dispatch(setPage(page + 1));

              const isMoreNews = res.currentPage + 1 < res.totalPages;
              setIsMoreItems(isMoreNews);

              if (!isMoreNews) {
                toast.info('You have reached the end of the news list.');
              }
            })
            .catch(e => {
              toast.error(e.message);
            })
            .finally(() => setIsFetching(false));
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
  }, [dispatch, isFetching, isMoreItems, keyword, page]);

  const onSearchSubmit = filterValue => {
    dispatch(setPage(0));
    setKeyword(filterValue);
  };

  return (
    <>
      <section className="pb-[74px] md:pb-[50px] lg:pb-[110px]">
        <div className="hidden  md:flex justify-between items-center mb-[40px] lg:mb:[44px]">
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
