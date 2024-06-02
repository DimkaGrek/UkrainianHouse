import { useSelector } from 'react-redux';

import {
  selectError,
  selectIsLoading,
  selectNews,
  selectAnnounceNews,
  selectTotalNews,
  selectFilter,
  selectFilteredNews,
} from '../my-redux';

export const useNews = () => {
  const news = useSelector(selectNews);
  const filteredNews = useSelector(selectFilteredNews);
  const announceNews = useSelector(selectAnnounceNews);
  const filter = useSelector(selectFilter);
  const totalNews = useSelector(selectTotalNews);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return {
    news,
    filteredNews,
    announceNews,
    filter,
    totalNews,
    isLoading,
    error,
  };
};
