import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ContentList, Loader, Pagination } from '../../components';

import {
  clearMessages,
  fetchAllMessages,
  setPageMessages,
} from '../../my-redux';
import { useMessages } from '../../hooks';
import { PAGE_LIMIT } from '../../constants';

const AdminInboxPage = () => {
  const { messages, page, totalMessages, totalPages, isLoading } =
    useMessages();

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessages());
  }, [dispatch]);

  useEffect(() => {
    const keyword = searchParams.get('keyword');
    const config = {
      params: {
        page,
        size: PAGE_LIMIT,
        ...(keyword && { keyword }),
      },
    };

    dispatch(fetchAllMessages(config));
  }, [dispatch, page, searchParams]);

  console.log(messages);

  const handleSetPage = page => {
    dispatch(setPageMessages(page));
  };

  return (
    <>
      <section className="py-5">
        <div className="flex justify-start mb-3">
          <h2 className="text-[24px] font-medium">
            Total messages: {totalMessages}
          </h2>
        </div>
        <ContentList items={messages} />
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

export default AdminInboxPage;
