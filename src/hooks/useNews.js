import { useSelector } from 'react-redux';

import {
  selectError,
  selectIsLoadingNews,
  selectAnnounceNews,
  selectTotalPagesNews,
  selectPageNews,
  selectNews,
  selectIsMoreNews,
  selectHomeNews,
} from '../my-redux';

export const useNews = () => {
  const news = useSelector(selectNews);
  const homeNews = useSelector(selectHomeNews);
  const announceNews = useSelector(selectAnnounceNews);
  const page = useSelector(selectPageNews);
  const totalPages = useSelector(selectTotalPagesNews);
  const isMoreNews = useSelector(selectIsMoreNews);
  const isLoading = useSelector(selectIsLoadingNews);
  const error = useSelector(selectError);

  return {
    news,
    homeNews,
    announceNews,
    page,
    totalPages,
    isMoreNews,
    isLoading,
    error,
  };
};
