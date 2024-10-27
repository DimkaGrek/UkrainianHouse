import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ContentList, Pagination } from '../../components';

import { useBooks } from '../../hooks';
import { clearBooks, fetchAllBooks, setPageBooks } from '../../my-redux';

const AdminBooksPage = () => {
  const { books, page, totalBooks, totalPages } = useBooks();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearBooks());
  }, [dispatch]);

  useEffect(() => {
    const config = { params: { page, size: 7 }, isAdmin: true };

    dispatch(fetchAllBooks(config));
  }, [dispatch, page]);

  const handleSetPage = page => {
    dispatch(setPageBooks(page));
  };

  return (
    <section className="py-5">
      <h2 className="text-[24px] font-medium mb-6">
        Total books: {totalBooks}
      </h2>
      <ContentList items={books} />
      <Pagination setPage={handleSetPage} page={page} totalPages={totalPages} />
    </section>
  );
};

export default AdminBooksPage;
