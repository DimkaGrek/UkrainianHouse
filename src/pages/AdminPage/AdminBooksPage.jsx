import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { ContentList, Loader, Pagination, StatusField } from '../../components';

import { useBooks } from '../../hooks';
import { clearBooks, fetchAllBooks, setPageBooks } from '../../my-redux';
import { PAGE_LIMIT, bookStatuses } from '../../constants';

const AdminBooksPage = () => {
  const { books, page, totalBooks, totalPages, isLoading } = useBooks();

  const [status, setStatus] = useState('Show All');
  const [statuses, setStatuses] = useState([]);

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    setStatuses(['Show All', ...bookStatuses]);
  }, []);

  useEffect(() => {
    dispatch(clearBooks());
  }, [dispatch]);

  useEffect(() => {
    const keyword = searchParams.get('keyword');
    const config = {
      params: {
        page,
        size: PAGE_LIMIT,
        ...(keyword && { keyword }),
        ...(status !== 'Show All' && { status }),
      },
      isAdmin: true,
    };

    dispatch(fetchAllBooks(config));
  }, [dispatch, page, searchParams, status]);

  const handleChangeStatus = status => {
    dispatch(setPageBooks(0));
    setStatus(status);
  };

  const handleSetPage = page => {
    dispatch(setPageBooks(page));
  };

  return (
    <>
      <section className="py-5">
        <div className="flex justify-between mb-3">
          <h2 className="text-[24px] font-medium">Total books: {totalBooks}</h2>
          <StatusField
            status={status}
            setStatus={handleChangeStatus}
            statuses={statuses}
            showLabel={false}
          />
        </div>
        <ContentList items={books} />
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

export default AdminBooksPage;
