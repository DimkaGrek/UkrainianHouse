import { useSelector } from 'react-redux';

import {
  selectError,
  selectIsLoadingNews,
  selectNews,
  selectAnnounceNews,
  selectTotalNews,
  selectFilter,
  selectFilteredNews,
  selectPageNews,
} from '../my-redux';

export const useNews = () => {
  const news = useSelector(selectNews);
  const filteredNews = useSelector(selectFilteredNews);
  const announceNews = useSelector(selectAnnounceNews);
  const page = useSelector(selectPageNews);
  const totalNews = useSelector(selectTotalNews);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoadingNews);
  const error = useSelector(selectError);
  return {
    news,
    filteredNews,
    announceNews,
    page,
    totalNews,
    filter,
    isLoading,
    error,
  };
};
