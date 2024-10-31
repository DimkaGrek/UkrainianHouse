import { useSelector } from 'react-redux';

import {
  selectError,
  selectIsLoadingNews,
  selectAnnounceNews,
  selectTotalPagesNews,
  selectPageNews,
  selectNews,
  selectTotalNews,
} from '../my-redux';

export const useNews = () => {
  const news = useSelector(selectNews);
  const announceNews = useSelector(selectAnnounceNews);
  const page = useSelector(selectPageNews);
  const totalPages = useSelector(selectTotalPagesNews);
  const totalNews = useSelector(selectTotalNews);
  const isLoading = useSelector(selectIsLoadingNews);
  const error = useSelector(selectError);

  return {
    news,
    announceNews,
    page,
    totalPages,
    totalNews,
    isLoading,
    error,
  };
};
