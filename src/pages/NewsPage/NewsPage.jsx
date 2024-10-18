import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Advertisement, Loader, NewsList, SearchBar } from '../../components';

import {
  fetchAllNews,
  fetchAnnounceNews,
  changeFilter,
  increasePage,
} from '../../my-redux';
import { useNews } from '../../hooks';

const NewsPage = () => {
  const [isMoreItems, setIsMoreItems] = useState(true);
  const { page, totalNews, isLoading } = useNews();
  const LIMIT = 6;

  const dispatch = useDispatch();

  const observerTarget = useRef(null);

  useEffect(() => {
    dispatch(changeFilter(''));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAnnounceNews())
      .unwrap()
      .then()
      .catch(e => console.log(e));
  }, [dispatch]);

  useEffect(() => {
    const params = { status: 'PUBLISHED', page, limit: LIMIT };
    const currentTarget = observerTarget.current;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          if (!isMoreItems) return;
          dispatch(fetchAllNews(params))
            .unwrap()
            .then(() => {
              dispatch(increasePage());
              const isMoreEvents = page < Math.ceil(totalNews / LIMIT);
              setIsMoreItems(isMoreEvents);

              if (!isMoreEvents) {
                toast.info('You have reached the end of the mews list.');
              }
            })
            .catch(e => console.log(e));
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
  }, [dispatch, isMoreItems, page, totalNews]);

  return (
    <>
      <section className="pb-[74px] md:pb-[50px] lg:pb-[110px]">
        <div className="hidden  md:flex justify-between items-center mb-[40px] lg:mb:[44px]">
          <h3 className="font-proza-semibold font-semibold text-[20px] text-[#222] leading-[160%] lg:font-proza-medium lg:font-medium lg:text-[60px] lg:leading-[130%]">
            News
          </h3>
          <SearchBar />
        </div>
        <Advertisement />
        <NewsList />
        <div ref={observerTarget}></div>
        {isLoading && <Loader placement="bottom" />}
      </section>
    </>
  );
};

export default NewsPage;
