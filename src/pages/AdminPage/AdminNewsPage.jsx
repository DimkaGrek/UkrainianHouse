import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ContentList, Pagination } from '../../components';

import { clearNews, fetchAllNews, setPageNews } from '../../my-redux';
import { useNews } from '../../hooks';

const AdminNewsPage = () => {
  const { news, page, totalNews, totalPages } = useNews();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearNews());
  }, [dispatch]);

  useEffect(() => {
    const config = { params: { page, size: 7 }, isAdmin: true };

    dispatch(fetchAllNews(config));
  }, [dispatch, page]);

  const handleSetPage = page => {
    dispatch(setPageNews(page));
  };

  return (
    <section className="py-5">
      <h2 className="text-[24px] font-medium mb-6">Total news: {totalNews}</h2>
      <ContentList items={news} />
      <Pagination setPage={handleSetPage} page={page} totalPages={totalPages} />
    </section>
  );
};

export default AdminNewsPage;
