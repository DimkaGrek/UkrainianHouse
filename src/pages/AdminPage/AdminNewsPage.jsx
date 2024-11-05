import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import {
  ContentList,
  InfoMessage,
  Loader,
  Pagination,
  StatusField,
} from '../../components';

import { useNews } from '../../hooks';
import { fetchAllNews, setPageNews } from '../../redux';
import { InfoMessageTypes, newsStatuses, PAGE_LIMIT } from '../../constants';

const AdminNewsPage = () => {
  const { news, page, totalNews, totalPages, isLoading } = useNews();
  const [status, setStatus] = useState('Show All');
  const [statuses, setStatuses] = useState([]);

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const keyword = searchParams.get('keyword');

  useEffect(() => {
    setStatuses(['Show All', ...newsStatuses]);
  }, []);

  useEffect(() => {
    const config = {
      params: {
        page,
        size: PAGE_LIMIT,
        ...(keyword && { keyword }),
        ...(status !== 'Show All' && { status }),
      },
      isAdmin: true,
    };

    dispatch(fetchAllNews(config));
  }, [dispatch, keyword, page, status]);

  const handleChangeStatus = status => {
    dispatch(setPageNews(0));
    setStatus(status);
  };

  const handleSetPage = page => {
    dispatch(setPageNews(page));
  };

  return (
    <>
      <section className="py-5">
        <div className="flex justify-between mb-3">
          <h2 className="text-[24px] font-medium">Total news: {totalNews}</h2>
          <StatusField
            status={status}
            setStatus={handleChangeStatus}
            statuses={statuses}
            showLabel={false}
          />
        </div>
        {news.length === 0 && keyword ? (
          <InfoMessage
            type={InfoMessageTypes.NoResults}
            messageText={keyword}
          />
        ) : (
          news.length === 0 && (
            <InfoMessage
              type={InfoMessageTypes.Empty}
              messageText="Please add an article."
            />
          )
        )}
        {news.length ? <ContentList items={news} /> : null}
        <Pagination
          setPage={handleSetPage}
          page={page}
          totalPages={totalPages}
        />
      </section>
      {isLoading && <Loader />}
    </>
  );
};

export default AdminNewsPage;
