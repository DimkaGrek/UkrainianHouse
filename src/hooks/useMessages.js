import { useSelector } from 'react-redux';

import {
  selectErrorMessages,
  selectIsLoadingMessages,
  selectMessages,
  selectPageMessages,
  selectTotalMessages,
  selectTotalPagesMessages,
} from '../my-redux';

export const useMessages = () => {
  const messages = useSelector(selectMessages);
  const page = useSelector(selectPageMessages);
  const totalPages = useSelector(selectTotalPagesMessages);
  const totalMessages = useSelector(selectTotalMessages);
  const isLoading = useSelector(selectIsLoadingMessages);
  const error = useSelector(selectErrorMessages);

  return { messages, page, totalPages, totalMessages, isLoading, error };
};
