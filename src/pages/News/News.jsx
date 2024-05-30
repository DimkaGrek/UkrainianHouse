import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  Advertisement,
  LoadMoreButton,
  NewsList,
  SearchBar,
} from '../../components';

import { fetchAllNews } from '../../my-redux';

const News = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    const params = { status: 'PUBLISHED', page, limit: 6 };

    dispatch(fetchAllNews(params))
      .unwrap()
      .then(() => {})
      .catch(e => console.log(e));
  }, [dispatch, page]);

  const handleLoadMoreClick = () => {
    setPage(prev => prev + 1);
  };

  return (
    <section className="pb-[74px] md:pb-[50px] lg:pb-[110px]">
      <div className="hidden  md:flex justify-between items-center mb-[40px] lg:mb:[44px]">
        <h3 className="font-proza-semibold font-semibold text-[20px] text-[#222] leading-[160%] lg:font-proza-medium lg:font-medium lg:text-[60px] lg:leading-[130%]">
          News
        </h3>
        <SearchBar />
      </div>
      <Advertisement />
      <NewsList />
      <LoadMoreButton onClick={handleLoadMoreClick} />
    </section>
  );
};

export default News;
