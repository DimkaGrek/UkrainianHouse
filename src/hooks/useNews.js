import { useSelector } from 'react-redux';

import {
  selectError,
  selectIsLoading,
  selectNews,
  selectTotalNews,
} from '../my-redux';

export const useNews = () => {
  const news = useSelector(selectNews);
  const totalNews = useSelector(selectTotalNews);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return { news, totalNews, isLoading, error };
};
