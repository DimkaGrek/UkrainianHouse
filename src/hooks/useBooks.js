import { useSelector } from 'react-redux';

import {
  selectBooks,
  selectBooksError,
  selectIsLoadingBooks,
  selectPageBooks,
  selectTotalBooks,
  selectTotalPagesBooks,
} from '../my-redux';

export const useBooks = () => {
  const books = useSelector(selectBooks);
  const page = useSelector(selectPageBooks);
  const totalPages = useSelector(selectTotalPagesBooks);
  const totalBooks = useSelector(selectTotalBooks);
  const isLoading = useSelector(selectIsLoadingBooks);
  const error = useSelector(selectBooksError);

  return { books, page, totalPages, totalBooks, isLoading, error };
};
