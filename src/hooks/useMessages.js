import { useSelector } from 'react-redux';

import {
  selectErrorMessages,
  selectIsLoadingMessages,
  selectMessages,
  selectPageMessages,
  selectTotalMessages,
  selectTotalPagesMessages,
  selectTotalUnreadMessages,
} from '../redux';

export const useMessages = () => {
  const messages = useSelector(selectMessages);
  const page = useSelector(selectPageMessages);
  const totalPages = useSelector(selectTotalPagesMessages);
  const totalMessages = useSelector(selectTotalMessages);
  const totalUnreadMessages = useSelector(selectTotalUnreadMessages);
  const isLoading = useSelector(selectIsLoadingMessages);
  const error = useSelector(selectErrorMessages);

  return {
    messages,
    page,
    totalPages,
    totalMessages,
    totalUnreadMessages,
    isLoading,
    error,
  };
};
